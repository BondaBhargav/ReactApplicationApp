import React from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchProductsData from "./fetchData/productsData";
import { ProgressBar } from "react-loader-spinner";

export const Products = () => {
  const data = useSelector((stata) => stata.productsApiData);
  console.log(data);
  const dispatch = useDispatch();

  const renderSucessView = () => {
    return (
      <ul className="d-flex flex-wrap">
        {data.productsData.map((each) => (
          <li key={each.id} className="card-list-element-pro">
            <div className="card">
              <img
                src={each.image}
                className="card-img-top img-products"
                alt={each.category}
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text des-titie-w">
               {each.description
               }
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  const renderFailureView = () => {
    return (
      <div>
        <img
          src="https://stackify.com/wp-content/uploads/2018/10/Web-API-Error-Handling2-881x441-1.jpg"
          alt="failure-view"
        />
        <button
          className="btn btn-info"
          onClick={() => dispatch(fetchProductsData())}
        >
          Retry
        </button>
      </div>
    );
  };

  const renderLodingView = () => {
    return (
      <div className="loader-container" testid="loader">
        <ProgressBar visible={true} height="80" width="80" color="#4fa94d" />
      </div>
    );
  };
  const renderFinalView = () => {
    switch (data.productsApiSataus) {
      case "success":
        return renderSucessView();
      case "loading":
        return renderLodingView();
      case "failure":
        return renderFailureView();
      default:
        return null;
    }
  };
  return (
    <>
      <div className="d-flex">
        {" "}
        <h1>To view the Data please Click Here </h1>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(fetchProductsData())}
        >
          get{" "}
        </button>
      </div>
      <>
        <div className="align-items-center">{renderFinalView()}</div>
      </>
    </>
  );
};
