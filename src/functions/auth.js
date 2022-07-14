import axios from "axios";

// export const getCustomers = async () =>
//   await axios.get(`${process.env.REACT_APP_API}/customers/getAllCustomers`, {});

export const creatUser = async (values) =>
  await axios.post(`${process.env.REACT_APP_API}/users/signUp`, {
    values,
  });

export const userLogin = async (mobileNumber, password) =>
  await axios.post(
    `${process.env.REACT_APP_API}/users/login`,
    {
      withCredentials: true,
      credentials: "include",
      mobileNumber,
      password,
    },
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
export const setCookie = async (token) =>
  await axios.get(`${process.env.REACT_APP_API}/users/jwtcookie/${token}`, {
    withCredentials: true,
    credentials: "include",
  });

export const testCookie = async () =>
  await axios.get(
    `${process.env.REACT_APP_API}/users/test`,
    {
      withCredentials: true,
    },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    }
  );

export const testcors = async () =>
  await axios.get(
    `http://localhost:8080/getallfeatures`,

    {}
  );

export const verifyAdmin = async () =>
  await axios.post(
    `${process.env.REACT_APP_API}/auth/checkadmin`,
    {},
    {
      withCredentials: true,
      credentials: "include",
    },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    }
  );

export const userLogout = async () =>
  await axios.get(
    `${process.env.REACT_APP_API}/users/logout`,
    {},
    {
      withCredentials: true,
      credentials: "include",
    },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    }
  );

export const getUsers = async () =>
  await axios.get(`${process.env.REACT_APP_API}/users/getUsers`);
