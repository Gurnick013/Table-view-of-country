import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ArrowDownwardIcon from "@material-ui/core/Icon/Icon";
import { IconButton, withStyles } from "@material-ui/core";
import { IArrayCountries, ICountriesProps } from "../../interface/interface";

const Countries: React.FC<ICountriesProps> = (props: ICountriesProps) => {
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const handelSort = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    props.sortArray(name);
  };

  return (
    <>
      <button name="name" onClick={handelSort}>
        name
      </button>
      <button name="capital" onClick={handelSort}>
        capital
      </button>
      <button name="code" onClick={handelSort}>
        code
      </button>
      <button name="currency" onClick={handelSort}>
        currency
      </button>
      <TableContainer component={Paper}>
        <Table className="" aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>
                Countries
                <IconButton aria-label="delete" size="small">
                  <ArrowDownwardIcon fontSize="inherit" />
                </IconButton>
              </StyledTableCell>
              <StyledTableCell align="right">Capital</StyledTableCell>
              <StyledTableCell align="right">Code</StyledTableCell>
              <StyledTableCell align="right">Сurrency</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.array.map((el: IArrayCountries) => (
              <StyledTableRow key={el.name}>
                <StyledTableCell component="th" scope="row">
                  {el.name}
                </StyledTableCell>
                <StyledTableCell align="right">{el.capital}</StyledTableCell>
                <StyledTableCell align="right">{el.code}</StyledTableCell>
                <StyledTableCell align="right">{el.currency}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Countries;
