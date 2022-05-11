import axios from "axios";

export const createOrderNoUser = async (cart, clientInfos, user) =>
  await axios.post(`${process.env.REACT_APP_API}/createordernouser`, {
    cart,
    clientInfos,
    user,
  });
