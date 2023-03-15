import * as React from 'react';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import axios from 'axios';
import Swal from 'sweetalert2'
import { Box, Stack } from '@mui/system';
import Modal from '@mui/material/Modal';
import AddForm from '../../components/AddForm';
import TableContainerC from '../../components/TableContainer';
import AutocompleteComponent from '../../components/AutocompleteComponent';
import AddButton from '../../components/AddButton';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const columns = [
  { id: 'name', label: 'Name', align: 'left' },
  { id: 'email', label: 'Email', align: 'left' },
  { id: 'delete', label: 'Delete', align: 'left' },
  { id: 'update', label: 'Update', align: 'left' },
];

export default function MentorList() {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const token = localStorage.getItem('token');

const config = {
  headers: { Authorization: `Bearer ${token}` }
};

  const getMentors = () => {
    axios.get('http://localhost:3000/api/v1/list-parrains', config)
    .then(response => {
      console.log(response.data);
      setRows(response.data)
    })
    .catch(error => {
      console.error(error);
    });
    console.log(token)
  }

  useEffect(() => {
    getMentors()
  }, [])

  const [searchText, setSearchText] = useState('');
  const filterRows = rows.filter(row => row.name.includes(searchText));

  const deleteOneMentor= async (id) => {
    axios.delete(`http://localhost:3000/api/v1/delete-parrain/${id}`, config)
    .then(response => {
      console.log(response.data);
      if (response.data) {
        Swal.fire('Message!', response.data)
      } else {
        Swal.fire('Deletedl!', "The Mentor is deleted successfully", "success")
        getMentors()
      }
    })
    .catch(error => {
        console.log(error);
    });
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', backgroundColor: 'aliceblue'}}>
      <Typography 
        gutterBottom
        variant='h5'
        component="div"
        sx={{ padding: "20px" }}
      >
        Mentors List
      </Typography>
      <Divider />
      <Box height={10} />
        <Stack direction="row" spacing={2} className="my-2 mb-2">
        < AutocompleteComponent rows={rows} setSearchText={setSearchText} />
          <Typography
            variant='h6'
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          {/* <Button variant="contained" endIcon={<PersonAddAlt1Icon />} onClick={handleOpen}>
            Add
          </Button> */}
           <AddButton handleOpen={handleOpen} />
          <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
        <Box sx={style}>
          <AddForm closeEvent={handleClose} />
        </Box>
      </Modal>
        </Stack>
      <Box height={10} />
        <TableContainerC columns={ columns } filterRows={filterRows} deleteOneMentor={deleteOneMentor}/>
    </Paper>
  );
}