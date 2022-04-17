import React, { useEffect, useState } from "react";
import style from "./ListProducts.module.css";
import Adminsidebar from "../Adminsidebar/Adminsidebar";
import Adminnavbar from "../Adminnavbar/Adminnavbar";
import toast from "react-hot-toast";
import { getUsers } from "../../../../functions/auth";
import UsersTable from "./UsersTable";

const ListUsers = () => {
  const [users, setusers] = useState([]);
  const fetchUsers = () => {
    getUsers().then((res) => {
      setusers(res.data);
    });
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  //   const handleDeleteProduct = (id) => {
  //     productDelete(id)
  //       .then((res) => {
  //         fetchProducts();
  //         toast.success("Product Deleted !");
  //       })
  //       .catch((err) => {
  //         toast.error(err.message);
  //       });
  //   };
  return (
    <div>
      <Adminnavbar />
      <Adminsidebar />
      <div className={style.pagecontainer}>
        <h3 style={{ marginBottom: "1.4rem" }}>Customers</h3>
        <div clasName={style.tablecontainer}>
          <div className={style.table}>
            <UsersTable
              users={users}
              //   handleDeleteProduct={handleDeleteProduct}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListUsers;
