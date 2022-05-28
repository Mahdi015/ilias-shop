import React, { useState } from "react";
import Adminsidebar from "../Adminsidebar/Adminsidebar";
import Adminnavbar from "../Adminnavbar/Adminnavbar";
import style from "./Addproducts.module.css";
import MultipleSelectChip from "./Select";
import Resizer from "react-image-file-resizer";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Badge from "@mui/material/Badge";
import { createProduct } from "../../../../functions/products";
import toast from "react-hot-toast";
const AddProducts = () => {
  const inits = {
    title: "",
    description: "",
    quantity: "",
    price: "",
    images: [],
    colors: [],
    size: [],
    colorData: [
      "Black",
      "Brown",
      "White",
      "Blue",
      "Pink",
      "Yellow ",
      "Green",
      "Orange ",
    ],
    sizeData: ["XS", "S", "M", "L", "XL", "XXL"],
  };

  const [values, setvalues] = useState(inits);
  const [loading, setloading] = useState(false);
  const [submitloading, setsubmitloading] = useState(false);

  const handlechange = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };
  const handleimgupload = (e) => {
    let files = e.target.files;
    let alluploadedimages = values.images;
    if (files) {
      setloading(true);
      for (let i = 0; i < files.length; i++) {
        const { name } = files[i];
        Resizer.imageFileResizer(
          files[i],
          720,
          720,
          "PNG",
          100,
          0,
          (uri) => {
            axios
              .post(
                `${process.env.REACT_APP_API}/uploadimage`,
                { image: uri, name: name },
                {
                  withCredentials: true,
                },
                {
                  headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((res) => {
                alluploadedimages.push(res.data);
                setloading(false);
                setvalues({ ...values, images: alluploadedimages });
              })
              .catch((err) => {
                console.log(err);
              });
          },
          "base64"
        );
      }
      console.log(values.images);
    }
  };
  const handleRemoveImg = (publicid) => {
    setloading(true);
    axios
      .post(
        `${process.env.REACT_APP_API}/removeimg`,
        { public_id: publicid },
        {
          withCredentials: true,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setloading(false);
        const { images } = values;
        let filtred = images.filter((img) => {
          return img.public_id !== publicid;
        });
        setvalues({ ...values, images: filtred });
      })
      .catch((err) => {
        setloading(false);
        console.log(err.response.data);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setsubmitloading(true);
    createProduct(values)
      .then((res) => {
        setsubmitloading(false);
        setvalues(inits);
        toast.success("Product created!");
      })
      .catch((err) => {
        console.log(err.response.data);
        if (err.response.data.includes("duplicate")) {
          toast.error("Duplicate information!");
        } else {
          toast.error(err.response.data);
        }
      });
  };
  return (
    <div>
      <Adminnavbar />
      <Adminsidebar />

      <div className={style.pagecontainer}>
        <div>
          <h3
            style={{
              fontSize: "1.5rem",
              color: "#333",
              fontWeight: "500",
            }}
          >
            Add Product
          </h3>
          <span style={{ color: "#636e75" }}>
            Add your product and necessary information from here
          </span>
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className={style.form}>
          <div className={style.formrow}>
            <span>Product Title/Name:</span>
            <input
              type="text"
              name="title"
              value={values.title}
              placeholder="Product Title"
              required
              onChange={(e) => handlechange(e)}
            />
          </div>
          <div className={style.formrow}>
            <span>Product Description:</span>
            <input
              type="text"
              name="description"
              value={values.description}
              placeholder="Description"
              required
              onChange={(e) => handlechange(e)}
            />
          </div>
          <div className={style.formrow}>
            <span>Product Quantity:</span>
            <input
              type="text"
              name="quantity"
              value={values.quantity}
              placeholder="Quantity"
              required
              onChange={(e) => handlechange(e)}
            />
          </div>
          <div className={style.formrow}>
            <span>Product Price:</span>
            <input
              type="text"
              name="price"
              value={values.price}
              placeholder="Price"
              required
              onChange={(e) => handlechange(e)}
            />
          </div>
          <div style={{ marginLeft: "17rem", marginBottom: "1rem" }}>
            {values.images && (
              <Stack direction="row" spacing={2}>
                {values.images.map((img) => (
                  <Badge
                    key={img.public_id}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleRemoveImg(img.public_id)}
                    badgeContent={"X"}
                    color="error"
                  >
                    {" "}
                    <Avatar src={img.url} sx={{ width: 56, height: 56 }} />
                  </Badge>
                ))}
                {loading && <CircularProgress />}
              </Stack>
            )}
          </div>
          <div className={style.formrow}>
            <span>Product Images:</span>
            <input
              type="file"
              multiple
              accept="images/*"
              name="images"
              required
              onChange={(e) => handleimgupload(e)}
            />
          </div>
          <div className={style.formrow}>
            <span>Colors:</span>
            <MultipleSelectChip
              values={values}
              setvalues={setvalues}
              type="colors"
              data={inits.colorData}
              value={values.colors}
            />
          </div>
          <div className={style.formrow}>
            <span>Size:</span>
            <MultipleSelectChip
              values={values}
              setvalues={setvalues}
              type="size"
              data={inits.sizeData}
              value={values.size}
            />
          </div>
          <div className={style.button}>
            {submitloading && <CircularProgress />}
            <button type="submit">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
