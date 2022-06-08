import axios from "axios";
export const createProduct = async (values) =>
  await axios.post(
    `${process.env.REACT_APP_API}/products/addproduct`,
    values,
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

export const getAllProducts = async (limit) =>
  await axios.get(
    `${process.env.REACT_APP_API}/products/getallproducts/${limit}`
  );

export const getProduct = async (slug) =>
  await axios.get(`${process.env.REACT_APP_API}/products/getProduct/${slug}`);

export const productDelete = async (id) =>
  await axios.delete(
    `${process.env.REACT_APP_API}/products/deleteProduct/${id}`
  );

export const getProductByColor = async (color) =>
  await axios.get(
    `${process.env.REACT_APP_API}/products/getProductByColor/${color}`
  );

export const getProductByPrice = async (price) =>
  await axios.post(`${process.env.REACT_APP_API}/products/getProductByPrice`, {
    price,
  });

export const filterAll = async (color, price) =>
  await axios.post(`${process.env.REACT_APP_API}/products/filterAll`, {
    color,
    price,
  });
