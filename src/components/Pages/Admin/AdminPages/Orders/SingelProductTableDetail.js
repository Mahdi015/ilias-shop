import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useState, useEffect } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import style from "../ListProducts.module.css";
import CircularProgress from "@mui/material/CircularProgress";

const columns = [
  { id: "productnumber", label: "#", maxWidth: 50 },
  { id: "image", label: "IMAGE", maxWidth: 100, align: "left" },
  {
    id: "productname",
    label: "PRODUCT",
    maxWidth: 150,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "price",
    label: "PRICE",
    maxWidth: 150,
    align: "center",
  },
  {
    id: "quantity",
    label: "Quantity",
    maxWidth: 100,
    align: "right",
  },
  {
    id: "size",
    label: "Size",
    maxWidth: 50,
    align: "right",
  },
  {
    id: "total",
    label: "Total",
    maxWidth: 100,
    align: "right",
  },
];

export default function SingelProductTableDetail({ products, totalPrice }) {
  const [allData, setallData] = useState([]);
  useEffect(() => {
    {
      products && getData();
    }
  }, [products]);

  const getData = () => {
    const rows = [];
    {
      products &&
        products.length != 0 &&
        products.map((data, id) => {
          let { productName, count, price, imgWithColorChosed, size } = data;
          rows.push({
            productnumber: id,
            image: (
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#F7F7F7",
                  borderRadius: "15px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    objectFit: "contain",
                    height: "100%",
                  }}
                  src={imgWithColorChosed}
                />
              </div>
            ),
            productname: (
              <span style={{ color: "#8a909d", fontSize: "15px" }}>
                {productName}
              </span>
            ),
            price: (
              <span style={{ color: "#8a909d", fontSize: "15px" }}>
                {price}TND
              </span>
            ),
            quantity: (
              <span style={{ color: "#8a909d", fontSize: "15px" }}>
                {count}
              </span>
            ),
            size,
            total: (
              <span style={{ color: "#8a909d", fontSize: "15px" }}>
                {price * count}TND
              </span>
            ),
          });
        });
      rows.push(
        {
          size: (
            <span style={{ color: "#333", fontSize: "16px" }}>
              SHIPING COST
            </span>
          ),
          total: <span style={{ color: "#333", fontSize: "16px" }}>7 TND</span>,
        },
        {
          size: <span style={{ color: "#333", fontSize: "16px" }}>TOTAL</span>,
          total: (
            <span style={{ color: "#333", fontSize: "16px" }}>
              {totalPrice} TND
            </span>
          ),
        }
      );
    }
    setallData(rows);
  };
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      {allData && allData.length != 0 ? (
        <>
          <Paper
            sx={{
              overflow: "hidden",
              borderRadius: "15px",
              boxShadow: "0 0 10px 0 rgb(0 0 0 / 3%)",
              WebkitBoxShadow: "0 0 10px 0 rgb(0 0 0 / 3%)",
            }}
          >
            <TableContainer sx={{ maxHeight: 640 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={allData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "10rem",
          }}
        >
          <h3
            style={{
              marginBottom: "2rem",
              color: "#343a40",
              fontWeight: "500",
            }}
          >
            Fetching Data
          </h3>
          <CircularProgress size={"5em"} />
        </div>
      )}
    </>
  );
}
