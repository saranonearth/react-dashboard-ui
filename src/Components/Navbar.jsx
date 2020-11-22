import React from "react";

const Navbar = ({ avatarURL, handleOpen, isOpen }) => {
  return (
    <>
      <div className="_nav">
        <div className="nav_holder">
          <div className="nv_left flex w100">
            {!isOpen && (
              <div className="menu-icon v-center" onClick={() => handleOpen()}>
                <div>
                  <i class="fas fa-bars"></i>
                </div>
              </div>
            )}
            <div className="mr-2 badge-selected hover">
              Pages &nbsp;<i className="fas fa-chevron-down no-mobile"></i>
            </div>
            <div className="mr-2 badge hover">
              Reports &nbsp; <i className="fas fa-chevron-down no-mobile"></i>
            </div>
            <div className="mr-2 badge hover">
              Apps &nbsp;<i className="fas fa-chevron-down no-mobile"></i>
            </div>
          </div>
          <div className="nv_right flex w100">
            <div className="mr-3 hover-icon">
              <i className="fas fa-search icon"></i>
            </div>
            <div className="mr-3 hover-icon">
              <i className="far fa-bell icon"></i>
            </div>
            <div className="mr-3 hover-icon">
              <i className="fas fa-cog icon"></i>
            </div>
            <div className="flex mr-2 hover-icon w-3">
              <p className="text-2 hover-name">
                Hi, <strong>Alex</strong>
              </p>
              &nbsp;
              <div className="avatar">
                <img className="avatar-image" src={avatarURL} alt="avatar" />
              </div>
            </div>
            <div className="mr-2 hover-icon">
              <i className="fas fa-th primary md hover"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
