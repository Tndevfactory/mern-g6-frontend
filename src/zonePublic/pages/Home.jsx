import React, { useState, useEffect } from "react";
import vitrine from "../../assets/vitrines/vitrine4.jpg?url";

import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { getProducts } from "../../features/product/productSlice";

const Home = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  const handleGetProducts = () => {
    dispatch(getProducts())
      .then((res) => {
        console.log(res);
        setProducts(res.payload.products);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleGetProducts();
  }, []);

  return (
    <div>
      <section
        id="vitrine"
        className=" relative bg-cover bg-no-repeat bg-center h-[60vh]"
        style={{ backgroundImage: `url(${vitrine})` }}
      >
        <div
          id="filter"
          className="flex justify-center items-center absolute inset-0 bg-black/60 text-white"
        >
          <h2 className="text-4xl font-bold uppercase">Welcome to our Store</h2>
        </div>
      </section>

      <section id="service" className="px-6">
        <h2 className="text-center my-6 font-bold text-2xl">Services</h2>
        <div className=" grid grid-cols-3 place-items-center">
          <div>
            <img src="https://picsum.photos/400/250" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/400/251" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/401/250" alt="" />
          </div>
        </div>
      </section>

      <section id="products">
        <h2 className="text-center my-6 font-bold text-2xl">Products</h2>
        <div className=" grid grid-cols-3 place-items-center gap-4">
          {products.map((v) => (
            <div key={v._id}>
              <div>
                <img
                  src={import.meta.env.VITE_SERVER_URL + v.imgUrl}
                  className="h-[20rem]"
                  alt=""
                />
              </div>
              <div className="flex justify-between p-1">
                <span className="text-xl font-medium">{v.designation}</span>
                <span className="text-xl font-medium text-green-600">
                  {v.prix} DT
                </span>
              </div>
              <div className="p-1 text-md"> {v.description}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="cgv" className="px-6 pb-5">
        <h2 className="text-center my-6 font-bold text-2xl">
          Conditions generales de vente
        </h2>
        <div className="space-y-2">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et non
            veniam ad quo, reiciendis commodi fugiat. Dolorum consequatur,
            assumenda minus porro hic consectetur, aliquam pariatur ab suscipit
            voluptate inventore facere.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et non
            veniam ad quo, reiciendis commodi fugiat. Dolorum consequatur,
            assumenda minus porro hic consectetur, aliquam pariatur ab suscipit
            voluptate inventore facere.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et non
            veniam ad quo, reiciendis commodi fugiat. Dolorum consequatur,
            assumenda minus porro hic consectetur, aliquam pariatur ab suscipit
            voluptate inventore facere.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
