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
import style from "./ListProducts.module.css";
import CircularProgress from "@mui/material/CircularProgress";


const columns = [
  { id: "productname", label: "PRODUCT NAME", minWidth: 170 },
  { id: "price", label: "PRICE", minWidth: 170, align: "center" },
  {
    id: "stock",
    label: "STOCK",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "status",
    label: "STATUS",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "actions",
    label: "ACTIONS",
    with: 100,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

export default function ProductsTable({ products, handleDeleteProduct }) {
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
          let { title, quantity, price, images, _id } = data;
          rows.push({
            productname: (
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    width: "125px",
                    color: "#666",
                    fontWeight: "500",
                    fontSize: ".9rem",
                  }}
                >
                  {title}
                </span>{" "}
                <img
                  style={{ width: "40px", height: "auto" }}
                  src={images && images[0].url}
                />
              </div>
            ),
            price,
            stock: quantity,
            status: <span className={style.badgespan}>Published</span>,
            actions: (
              <div>
                <span style={{ cursor: "pointer", color: "#303c5c" }}>
                  <AiFillEdit size={"1.3em"} />
                </span>
                <span
                  style={{
                    cursor: "pointer",
                    marginLeft: "0.6rem",
                    color: "#bf243d",
                  }}
                >
                  <AiFillDelete
                    size={"1.3em"}
                    onClick={() => handleDeleteProduct(_id)}
                  />
                </span>
              </div>
            ),
          });
        });
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
          <div className={style.inputcontainer}>
            <input placeholder="Search Product" type="search" />
          </div>
          <Paper
            sx={{ width: "98%", overflow: "hidden", marginRight: "0.5rem" }}
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
