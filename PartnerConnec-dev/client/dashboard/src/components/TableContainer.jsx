import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import DeleteMentor from './DeleteModal';
import FormModal from './FromModal';

export default function TableContainerC({columns, filterRows, deleteOne, updateOne, open, FormForModal }) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

  return (
    <>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
        {filterRows
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row) => {
            return (
            <TableRow hover role="checkbox" tabIndex={-1}>
              {columns.map((column) => (
                <TableCell key={row.id} align="left">
                    {column.id === 'delete' ? (
                            <IconButton onClick={() => DeleteMentor(row._id, deleteOne)}>
                                <PersonRemoveIcon />
                            </IconButton>
                        ) : column.id === 'update' ? (
                            <><IconButton onClick={() => updateOne(row._id)}>
                        <ManageAccountsIcon />
                      </IconButton></>
                        ) : column.id.includes('.') ? (
                          row[column.id.split('.')[0]][column.id.split('.')[1]]
                        ) : (
                          row[column.id] 
                        )}
                </TableCell>
              ))}
            </TableRow>
            );
          })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={filterRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    <FormModal open={open} FormForModal={FormForModal} />
    </>
  );
}