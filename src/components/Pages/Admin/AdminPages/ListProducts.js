import React from "react";
import style from "./ListProducts.module.css";
import Adminsidebar from "../Adminsidebar/Adminsidebar";
import Adminnavbar from "../Adminnavbar/Adminnavbar";
import ProductsTable from "./ProductsTable";
import { getAllProducts, productDelete } from "../../../../functions/products";
import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";

const ListProducts = () => {
  const [products, setproducts] = useState([]);
  const [update, setupdate] = useState(false);
  const fetchProducts = () => {
    getAllProducts(10000).then((res) => {
      setproducts(res.data);
    });
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDeleteProduct = (id) => {
    productDelete(id)
      .then((res) => {
        fetchProducts();
        toast.success("Product Deleted !");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div>
      <Adminnavbar />
      <Adminsidebar />
      <div className={style.pagecontainer}>
        <h3 style={{ marginBottom: "1.4rem" }}>Products</h3>
        <div clasName={style.tablecontainer}>
          {/* <div className={style.inputcontainer}>
            <input placeholder="Search Product" type="search" />
          </div> */}
          <div className={style.table}>
            <ProductsTable
              products={products}
              handleDeleteProduct={handleDeleteProduct}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProducts;
