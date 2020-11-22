import React, { useState } from "react";
import Logo from "../Assets/logo.png";

const Sidebar = ({ handleClose }) => {
  const [show, setShow] = useState(true);
  const components = [
    "Base",
    "Custom",
    "Extended",
    "Widgets",
    "Forms",
    "keen Wizard",
    "Keen Datatable",
    "Icons",
    "Portlets",
    "Calender",
    "Charts",
  ];

  const custom = ["Blog", "pricing", "Invoices", "FAQs", "User Pages"];
  const dashboard = [
    "Navy Aside",
    "Brand Aside",
    "Navy Header",
    "Light Aside",
    "Brand Header",
  ];
  const Components = () => {
    return components.map((e, i) => (
      <div className="flex mb-2 hover-i" key={i}>
        <div>
          <i class="far fa-paper-plane c-5 md-i"></i>&nbsp;{" "}
          <span className="c-6">{e}</span>
        </div>
        <div>
          <i className="fas fa-chevron-right i-sm"></i>
        </div>
      </div>
    ));
  };

  const Customs = () => {
    return custom.map((e, i) => (
      <div className="flex mb-2 hover-i" key={i}>
        <div>
          <i class="fas fa-square c-5 md-i"></i>
          &nbsp; <span className="c-6">{e}</span>
        </div>
        <div>
          <i className="fas fa-chevron-right i-sm"></i>
        </div>
      </div>
    ));
  };

  const DashboardItems = () => {
    return dashboard.map((e, i) => (
      <div className="flex mb-2 hover-i" key={i}>
        <div className="ml-3">
          <i className="fas v-sm fa-circle"></i>
          &nbsp; <span className="c-6">{e}</span>
        </div>
        <div>
          <i className="fas fa-chevron-right i-sm"></i>
        </div>
      </div>
    ));
  };
  return (
    <div className="sidebar">
      <div className="sidebar-contents">
        <div className="flex">
          <div className="text-1 white">
            <img src={Logo} alt="keen-logo" />
          </div>
          <div onClick={() => handleClose()}>
            <i className="fas fa-times close-icon"></i>
          </div>
        </div>
        <div className="main-s">
          <div className="flex mb-2 hover-i" onClick={() => setShow(!show)}>
            <div>
              <i class="fas fa-tachometer-alt"></i>
              &nbsp; <span className="c-6">Dashboard</span>
            </div>
            <div>
              {show ? (
                <i className="fas fa-chevron-down i-sm"></i>
              ) : (
                <i className="fas fa-chevron-right i-sm"></i>
              )}
            </div>
          </div>
          {show && DashboardItems()}
        </div>
        <div>
          <div>
            <p className="c-5">COMPONENTS</p>
          </div>
          <br />
          <div className="ml-3">{Components()}</div>
        </div>
        <div>
          <div>
            <p className="c-5">CUSTOM</p>
          </div>
          <br />
          <div className="ml-3">{Customs()}</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
