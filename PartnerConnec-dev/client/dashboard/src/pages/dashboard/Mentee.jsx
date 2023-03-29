import * as React from 'react';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Box, Stack } from '@mui/system';
import AddMenteeFrom from '../../components/AddMenteeFrom';
import TableContainerC from '../../components/TableContainer';
import AutocompleteComponent from '../../components/AutocompleteComponent';
import AddButton from '../../components/AddButton';
import FormModal from '../../components/FromModal';
import UpdateMentee from '../../components/UpdateMentee';


const columns = [
  { id: 'name', label: 'Name', align: 'left' },
  { id: 'email', label: 'Email', align: 'left' },
  { id: 'mentor.name', label: 'Mentor Name', align: 'left' },
  { id: 'mentor.email', label: 'Mentor Email', align: 'left' },
  { id: 'delete', label: 'Delete', align: 'left' },
  { id: 'update', label: 'Update', align: 'left' },
];

export default function Mentee() {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [id,setId]= useState(null)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCloseUpdate = () => setOpenUpdate(false);

  const token = localStorage.getItem('token');

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  const getMentees = () => {
    axios.get('http://localhost:3000/api/v1/list-proteges', config)
    .then(response => {
      console.log(response.data[0].mentor.name);
      setRows(response.data)
    })
    .catch(error => {
      console.error(error);
    });
    console.log(token)
  }

  useEffect(() => {
    getMentees()
  }, [])

  const [searchText, setSearchText] = useState('');
  const filterRows = rows.filter(row => row.name.includes(searchText));

  const deleteOneMentee= async (id) => {
    axios.delete(`http://localhost:3000/api/v1/delete-mentee/${id}`, config)
    .then(response => {
      console.log(response.data);
        Swal.fire('Deletedl!', "The Mentee is deleted successfully", "success")
        getMentees()
    })
    .catch(error => {
        console.log(error);
    });
  }

  const updateOneMentee = async (id) => {
    setOpenUpdate(true)
    setId(id)
  }

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Paper sx={{ width: '100%', overflow: 'hidden', backgroundColor: 'aliceblue'}}>
        <Typography 
          gutterBottom
          variant='h5'
          component="div"
          sx={{ padding: "20px" }}
        >
          Mentee Dashboard
        </Typography>
        <Divider />
        <Box height={10} />
        <Stack direction="row" spacing={2} className="my-2 mx-4">
        <AutocompleteComponent rows={rows} setSearchText={setSearchText} />
          <Typography
            variant='h6'
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
           <AddButton handleOpen={handleOpen} />
          <FormModal open={open} FormForModal={<AddMenteeFrom closeEvent={handleClose} getMentees={getMentees} />} />
        </Stack>
        <Box height={10} />
        <TableContainerC columns={ columns } filterRows={filterRows} deleteOne={deleteOneMentee} updateOne={updateOneMentee} open={openUpdate} FormForModal={<UpdateMentee id={id} closeEvent={handleCloseUpdate} getMentees={getMentees} />} />
      </Paper>
    </Box>
  );
}