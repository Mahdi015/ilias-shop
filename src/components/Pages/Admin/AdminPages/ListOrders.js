import React, { useEffect, useState } from "react";
import style from "./ListProducts.module.css";
import Adminsidebar from "../Adminsidebar/Adminsidebar";
import Adminnavbar from "../Adminnavbar/Adminnavbar";
import toast from "react-hot-toast";
import { getUsers } from "../../../../functions/auth";
import UsersTable from "./UsersTable";
import { listAllOrders } from "../../../../functions/admin";
import OrdersTable from "./OrdersTable";

const ListOrders = () => {
  const [orders, setorders] = useState([]);
  const fetchOrders = () => {
    listAllOrders().then((res) => {
      setorders(res.data);
    });
  };
  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <Adminnavbar />
      <Adminsidebar />
      <div className={style.pagecontainer}>
        <h3 style={{ marginBottom: "1.4rem" }}>Orders</h3>
        <div clasName={style.tablecontainer}>
          <div className={style.table}>
            <OrdersTable
              orders={orders}
              //   handleDeleteProduct={handleDeleteProduct}
            />
          </div>
          {/* {JSON.stringify(orders)} */}
        </div>
      </div>
    </div>
  );
};

export default ListOrders;
