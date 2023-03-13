import * as React from 'react';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import axios from 'axios';
import Swal from 'sweetalert2'

const columns = [ 'Name', 'Email', 'Delete', 'Update'];

export default function MentorList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    getMentors()
  }, [])

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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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

  const deleteMentor = (id) => {
    Swal.fire({
      title: "Are you sure ?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        deleteOneMentor(id)
      }
    })
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
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })} */}
              {rows 
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                    <TableRow hover role="checkbox" tabIndex={-1}>
                        <TableCell key={row._id} align="left">
                            {row.name}
                        </TableCell>
                        <TableCell key={row._id} align="left">
                            {row.email}
                        </TableCell>
                        <TableCell key={row._id} align="left">
                          <IconButton onClick={() => deleteMentor(row._id)}>
                            <PersonRemoveIcon />
                          </IconButton>
                        </TableCell>
                        <TableCell key={row._id} align="left">
                          <IconButton onClick={() => console.log("update")}>
                            <ManageAccountsIcon />
                          </IconButton>
                        </TableCell>
                    </TableRow>
                )
              })
              }
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}