import React, { useState } from "react";
import Nav from "./components/Navigation";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Sales from "./components/Sales";

const App = () => {
  let sales = <Sales />;
  let shopDetail = [
    {
      productName: "Fancy Product",
      salePrice: "$40.00",
      isSalePrice: false,
      Price: "$80.00",
      review: "",
      sales: "",
    },
    {
      productName: "Special Item",
      salePrice: "$20.00",
      isSalePrice: false,
      Price: "$18.00",
      review: true,
      sales: true,
    },
    {
      productName: "Sale Item",
      salePrice: "$50.00",
      isSalePrice: false,
      Price: "$25.00",
      review: "",
      sales: true,
    },
    {
      productName: "Popular Item",
      salePrice: "",
      isSalePrice: false,
      Price: "$40.00",
      review: true,
      sales: "",
    },
    {
      productName: "Sale Item",
      salePrice: "$50.00",
      isSalePrice: false,
      Price: "$25.00",
      review: "",
      sales: true,
    },
    {
      productName: "Fancy Product",
      salePrice: "$120.00",
      isSalePrice: false,
      Price: "$280.00",
      review: "",
      sales: "",
    },
    {
      productName: "Special Item",
      salePrice: "$20.00",
      isSalePrice: false,
      Price: "$18.00",
      review: true,
      sales: true,
    },
    {
      productName: "Popular Item",
      salePrice: "",
      isSalePrice: false,
      Price: "$40.00",
      review: true,
      sales: "",
    },
  ];
  let [count, setCount] = useState(0);

  return (
    <>
      <Nav count={count} setCount={setCount} />
      <Header/>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {shopDetail.map((e, i) => {
              return (
                <Card data={e} count={count} setCount={setCount} key={i} />
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default App;
