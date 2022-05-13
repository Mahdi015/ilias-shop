import React from "react";
import Adminnavbar from "./Adminnavbar/Adminnavbar";
import Adminsidebar from "./Adminsidebar/Adminsidebar";
import style from "./AdminDashboard.module.css";
import { BsStack } from "react-icons/bs";
import {
  AiOutlineUp,
  AiOutlineShoppingCart,
  AiOutlineCheck,
} from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";
import { FaMoneyBillWave } from "react-icons/fa";

import { FiTruck } from "react-icons/fi";
import { RiUserAddFill } from "react-icons/ri";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import Testchart from "./Testchart";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const AdminDashboard = () => {
  return (
    <div>
      <Adminnavbar />
      <Adminsidebar />
      <div className={style.pagecontainer}>
        <div className={style.content}>
          <div className={style.firstrow}>
            <div className={style.firstrowbox}>
              <div className={style.firstrowboxtop}>
                <div className={style.firstrowboxtopleft}>
                  <span
                    style={{
                      color: "rgb(80, 93, 105)",
                      fontSize: "14px",
                      marginBottom: "0.5rem ",
                    }}
                  >
                    Today Orders
                  </span>
                  <h3>1452</h3>
                </div>
                <div className={style.firstrowboxtopright}>
                  <span
                    style={{ color: "rgb(86, 100, 210) ", fontSize: "24px" }}
                  >
                    <BsStack />
                  </span>
                </div>
              </div>
              <div className={style.firstrowboxbot}>
                <span className={style.badgespan}>
                  <AiOutlineUp /> 2.4%
                </span>
                <span
                  style={{ color: "rgb(116, 120, 141)", fontSize: "14.4px" }}
                >
                  From yesterday
                </span>
              </div>
            </div>
            <div className={style.firstrowbox}>
              <div className={style.firstrowboxtop}>
                <div className={style.firstrowboxtopleft}>
                  <span
                    style={{
                      color: "rgb(80, 93, 105)",
                      fontSize: "14px",
                      marginBottom: "0.5rem ",
                    }}
                  >
                    Today Revenue
                  </span>
                  <h3>550 TND</h3>
                </div>
                <div className={style.firstrowboxtopright}>
                  <span
                    style={{ color: "rgb(86, 100, 210) ", fontSize: "24px" }}
                  >
                    <FaMoneyBillWave />
                  </span>
                </div>
              </div>
              <div className={style.firstrowboxbot}>
                <span className={style.badgespan}>
                  <AiOutlineUp /> 2.4%
                </span>
                <span
                  style={{ color: "rgb(116, 120, 141)", fontSize: "14.4px" }}
                >
                  From previous period
                </span>
              </div>
            </div>
            <div className={style.firstrowbox}>
              <div className={style.firstrowboxtop}>
                <div className={style.firstrowboxtopleft}>
                  <span
                    style={{
                      color: "rgb(80, 93, 105)",
                      fontSize: "14px",
                      marginBottom: "0.5rem ",
                    }}
                  >
                    New Users
                  </span>
                  <h3>10</h3>
                </div>
                <div className={style.firstrowboxtopright}>
                  <span
                    style={{ color: "rgb(86, 100, 210) ", fontSize: "24px" }}
                  >
                    <RiUserAddFill />
                  </span>
                </div>
              </div>
              <div className={style.firstrowboxbot}>
                <span className={style.badgespan}>
                  <AiOutlineUp /> 2.4%
                </span>
                <span
                  style={{ color: "rgb(116, 120, 141)", fontSize: "14.4px" }}
                >
                  From previous period
                </span>
              </div>
            </div>
          </div>
          <div className={style.secendrow}>
            <div className={style.secendrowbox}>
              {" "}
              <span
                style={{ backgroundColor: "#FCD9BD", color: "#d03801" }}
                className={style.circlespan}
              >
                <AiOutlineShoppingCart size={"1.3em"} />
              </span>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: "#4c4f52" }}>Total Order</span>
                <span style={{ fontSize: "1.5rem", fontWeight: "500" }}>
                  172
                </span>
              </div>
            </div>
            <div className={style.secendrowbox}>
              {" "}
              <span
                style={{ backgroundColor: "#C3DDFD", color: "#1c64f2" }}
                className={style.circlespan}
              >
                <BiRefresh size={"1.6em"} />
              </span>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: "#4c4f52" }}>Order Pending</span>
                <span style={{ fontSize: "1.5rem", fontWeight: "500" }}>
                  32
                </span>
              </div>
            </div>
            <div className={style.secendrowbox}>
              {" "}
              <span
                style={{ backgroundColor: "#AFECEF", color: "#047481" }}
                className={style.circlespan}
              >
                <FiTruck size={"1.3em"} />
              </span>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: "#4c4f52" }}>Order Processing</span>
                <span style={{ fontSize: "1.5rem", fontWeight: "500" }}>
                  50
                </span>
              </div>
            </div>
            <div className={style.secendrowbox}>
              {" "}
              <span
                style={{ backgroundColor: "#BCF0DA", color: "#057a55" }}
                className={style.circlespan}
              >
                <AiOutlineCheck size={"1.3em"} />
              </span>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: "#4c4f52" }}>Order Delivered</span>
                <span style={{ fontSize: "1.5rem", fontWeight: "500" }}>
                  66
                </span>
              </div>
            </div>
          </div>

          <div className={style.thirdrow}>
            <div className={style.chartcontainer}>
              <AreaChart
                width={600}
                height={300}
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  strokeWidth={3}
                  type="monotone"
                  dataKey="uv"
                  stroke="#679ADC"
                  fill="#C7E5EC"
                />
                <Area
                  strokeWidth={3}
                  type="monotone"
                  dataKey="pv"
                  stroke="#fc8686"
                  fill="#FCD9BD"
                />
              </AreaChart>
            </div>
            <div className={style.piechartcontainer}>
              <Testchart />
              <div className={style.infocontainer}>
                <div className={style.infocol}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div
                      style={{ backgroundColor: "#EEB902" }}
                      className={style.circle}
                    ></div>
                    <span style={{ color: "#F3D676", fontSize: "15px" }}>
                      Product A
                    </span>
                  </div>
                  <h5>40%</h5>
                </div>
                <div className={style.infocol}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div
                      style={{ backgroundColor: "#5664D2" }}
                      className={style.circle}
                    ></div>
                    <span style={{ color: "#88AAF3", fontSize: "15px" }}>
                      Product B
                    </span>
                  </div>
                  <h5>26%</h5>
                </div>
                <div className={style.infocol}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div
                      style={{ backgroundColor: "#1CBB8C" }}
                      className={style.circle}
                    ></div>
                    <span style={{ color: "#50D7AB", fontSize: "15px" }}>
                      Product C
                    </span>
                  </div>
                  <h5>34%</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
