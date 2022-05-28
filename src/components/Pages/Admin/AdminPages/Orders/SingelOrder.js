import React, { useEffect, useState } from "react";
import Adminnavbar from "../../Adminnavbar/Adminnavbar";
import Adminsidebar from "../../Adminsidebar/Adminsidebar";
import style from "./SingelOrder.module.css";
import { useParams } from "react-router-dom";
import { getOrderById } from "../../../../../functions/admin";
import { Card, CardHeader } from "@mui/material";
import SingelProductTableDetail from "./SingelProductTableDetail";

const SingelOrder = () => {
  const [order, setorder] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
    getOrderById(id).then((res) => {
      setorder(res.data);
    });
  }, [id]);
  return (
    <div>
      <Adminnavbar />
      <Adminsidebar />
      <div className={style.pagecontainer}>
        <Card
          sx={{
            borderRadius: "15px",
            WebkitBoxShadow: "0 0 10px 0 rgb(0 0 0 / 3%)",
            boxShadow: "0 0 10px 0 rgb(0 0 0 / 3%)",
            position: "relative",
          }}
        >
          <div style={{ borderBottom: "1px solid #f3f3f3" }}>
            <h3
              style={{
                color: "#666",
                padding: "20px",
                fontSize: "1.3rem",
                fontWeight: "500",
              }}
            >
              Order Detail
            </h3>
          </div>
          <div className={style.orderdetailboxcontainer}>
            <div className={style.orderdeatilbox}>
              <div className={style.boxheader}>Customer:</div>
              <div className={style.boxcontent}>
                <span>{order.clientInfos?.fname}</span>
                <span>{order.clientInfos?.lname}</span>
                <span>{order.clientInfos?.phone}</span>
              </div>
            </div>

            <div className={style.orderdeatilbox}>
              <div className={style.boxheader}>Shipped To:</div>
              <div className={style.boxcontent}>
                <span>{order.clientInfos?.stadresse}</span>
                <span>{order.clientInfos?.city}</span>
                <span>{order.clientInfos?.zipcode}</span>
              </div>
            </div>

            <div className={style.orderdeatilbox}>
              <div className={style.boxheader}>Order Date:</div>
              <div className={style.boxcontent}>
                <span> {new Date(order?.createdAt).toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className={style.tableheader}>Product Summary</div>
          <div style={{ padding: "15px" }}>
            <SingelProductTableDetail
              products={order.products}
              totalPrice={order.totalPrice}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SingelOrder;
