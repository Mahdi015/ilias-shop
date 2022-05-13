import axios from "axios";

export const listAllOrders = async () =>
  await axios.get(`${process.env.REACT_APP_API}/admin/listorders`, {});
