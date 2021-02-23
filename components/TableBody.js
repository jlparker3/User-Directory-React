import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { DataGrid } from '@material-ui/data-grid';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable({ users }) {
  const classes = useStyles();

  //formating the date of birth
  const formatDate = (date) => {
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const dayArray = dateArray[2].split("T");
    const day = dayArray[0];
    const formattedDate = [month, day, year].join("-");
    return formattedDate;
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><h3>Picture</h3></TableCell>
            <TableCell align="right"><h3>Name</h3></TableCell>
            <TableCell align="right"><h3>Date of Birth</h3></TableCell>
            <TableCell align="right"><h3>Email</h3></TableCell>
            <TableCell align="right"><h3>Phone</h3></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>

          {users.map((user, index) => (
            <TableRow key={user.login.uuid}>
              <TableCell component="th" scope="row"><img src={user.picture.thumbnail}/></TableCell>
              <TableCell align="right"><p>{user.name.first} {user.name.last}</p></TableCell>
              <TableCell align="right"><p>{formatDate(user.registered.date)}</p></TableCell>
              <TableCell align="right"><p><a href={"mailto:" + user.email}>{user.email}</a></p></TableCell>
              <TableCell align="right"><p>{user.phone}</p></TableCell>
            </TableRow>

          ))}

        </TableBody>

      </Table>
    </TableContainer>
  );
}

