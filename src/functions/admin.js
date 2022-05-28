import axios from "axios";

export const listAllOrders = async () =>
  await axios.get(`${process.env.REACT_APP_API}/admin/listorders`, {});

export const getOrderById = async (id) =>
  await axios.get(`${process.env.REACT_APP_API}/admin/getorder/${id}`, {});
