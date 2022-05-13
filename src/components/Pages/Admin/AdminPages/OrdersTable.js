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
  { id: "orderid", label: "ID", maxWidth: 70 },
  { id: "customer", label: "Customer", maxWidth: 230 },
  { id: "phone", label: "Phone", maxWidth: 150, align: "left" },
  {
    id: "items",
    label: "Items",
    maxWidth: 100,
    align: "left",
    // format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "price",
    label: "Price",
    maxWidth: 100,
    align: "left",
    // format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "status",
    label: "Status",
    maxwith: 130,
    align: "left",
    // format: (value) => value.toLocaleString(),
  },
  {
    id: "date",
    label: "Date",
    maxwith: 130,
    align: "left",
    format: (value) => value.toLocaleString(),
  },
  {
    id: "actions",
    label: "Actions",
    maxWidth: 180,
    align: "left",
    // format: (value) => value.toLocaleString(),
  },
];

export default function OrdersTable({ orders }) {
  const [allData, setallData] = useState([]);
  useEffect(() => {
    {
      orders && getData();
    }
  }, [orders]);

  const getData = () => {
    const rows = [];
    {
      orders &&
        orders.length != 0 &&
        orders.map((data, id) => {
          let {
            clientInfos,
            products,
            orderId,
            createdAt,
            _id,
            orderStatus,
            totalPrice,
          } = data;
          rows.push({
            orderid: (
              <span
                style={{
                  width: "125px",
                  color: "#56606E",
                  fontWeight: "500",
                  fontSize: "14px",
                }}
              >
                000{orderId}
              </span>
            ),
            customer: (
              <span style={{ color: "#8a909d", fontSize: "15px" }}>
                {clientInfos.fname}
              </span>
            ),
            phone: (
              <span style={{ color: "#8a909d", fontSize: "15px" }}>
                {clientInfos.phone}
              </span>
            ),
            items: (
              <span style={{ color: "#8a909d", fontSize: "15px" }}>
                {products.length}
              </span>
            ),
            price: (
              <span style={{ color: "#8a909d", fontSize: "15px" }}>
                {totalPrice} TND
              </span>
            ),
            status: <span className={style.badge}>{orderStatus}</span>,
            date: (
              <span style={{ color: "#8a909d", fontSize: "15px" }}>
                {new Date(createdAt).toLocaleString().split(",")[0]}
              </span>
            ),
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
                    // onClick={() => handleDeleteProduct(_id)}
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
            <input placeholder="Search Users" type="search" />
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
