import React, { useState } from "react";
const Card = ({ data, count, setCount }) => {
  let [btnText, setBtnText] = useState("Add to Cart");

  return (
    <>
      <div className="col mb-5">
        <div className="card h-100">
          {data.sales ? (
            <>
              <div
                className="badge bg-dark text-white position-absolute"
                style={{ top: "0.5rem", right: "0.5rem" }}
              >
                Sale
              </div>
            </>
          ) : (
            ""
          )}
          <img
            className="card-img-top"
            src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
            alt="..."
          />
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{data.productName}</h5>
              <div className="d-flex justify-content-center small text-warning mb-2">
                {data.review ? (
                  <>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                  </>
                ) : (
                  ""
                )}
              </div>
              <span
                className={
                  data.countisSalePrice
                    ? ""
                    : "text-muted text-decoration-line-through"
                }
              >
                {data.salePrice}
              </span>
              {data.Price}
            </div>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
            <button className="btn btn-outline-dark mt-auto" onClick={() => {btnText === "Add to Cart"? `${setBtnText("Remove from Cart")} ${setCount(count + 1)}`: `${setBtnText("Add to Cart")} ${setCount(count - 1)}`}}>{btnText}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
