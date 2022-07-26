import React from "react";

const Localities = () => {
  return (
    <section className="container">
      <h1 className="local-title">
        Popular localities in and around{" "}
        <span className="bold-place">Himatnagar</span>
      </h1>
      <div className="locals-grid">
        <div className="local-box">
          <p>Himatnagar (300 places)</p>
          <i className="fa fa-chevron-right" />
        </div>
      </div>
    </section>
  );
};

export default Localities;
