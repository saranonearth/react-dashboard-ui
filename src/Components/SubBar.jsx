import React from "react";

const SubBar = () => {
  return (
    <div className="sub_bar">
      <div className="n_left flex">
        <div className="mr-1 v-center">
          <p className="c-2">Dashboard</p>
        </div>
        &nbsp;&nbsp;
        <div className="mr-1 v-center">
          <i className="c-3 hover fas fa-home"></i>
        </div>
        <div className="mr-1 mt-n-1 v-center">
          <i className="fas v-sm fa-circle"></i>
        </div>
        <div className="mr-1 c-3 v-center" v>
          <p className="c-3 hover">Dashboards</p>
        </div>
        <div className="mr-1 v-center">
          <i className="fas v-sm fa-circle"></i>
        </div>
        <div className="mr-1 v-center">
          <p className="c-3 hover">Navy Aside</p>
        </div>
      </div>
      <div className="n_right flex">
        <div className="mr-2 primary-btn mt-n-1 v-center hover">
          <div>
            Today: <strong>Nov 21</strong>{" "}
            <i className="fas fa-calendar-alt"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubBar;
