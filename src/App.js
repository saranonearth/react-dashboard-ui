import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import SubBar from "./Components/SubBar";
import { List } from "./Data/Data";
import Bar from "./Components/Charts/Bar";
import Donut from "./Components/Charts/Donut";
import Area from "./Components/Charts/Area";
import StackLines from "./Components/Charts/StackLines";
const avatarURL =
  "https://www.gravatar.com/avatar/bba490c39bddb0d7f0b9c20cbbe4ba27?s=328&d=identicon&r=PG&f=1";
const Progress = "55%";

const TopProducts = () => {
  return List.map((e, i) => (
    <div className="flex" key={i}>
      <div className="p-1">
        <div>
          <p>
            <strong>{e.heading}</strong>
          </p>
          <p className="percentage sm">{e.sub}</p>
        </div>
      </div>

      <div className="p-3 v-center">
        <div className="v-center">
          <div>
            <p className="percentage">
              {e.sign}
              {e.percentage}
            </p>
          </div>
        </div>{" "}
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <div className="progress-container">
          <div
            className="progress"
            style={{ width: e.percentage, backgroundColor: e.color }}
          ></div>
        </div>
      </div>
    </div>
  ));
};

function App() {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    console.log("CLICKED");
    setOpen(false);
  };
  const handleOpen = () => {
    console.log("CLICKED");
    setOpen(true);
  };
  return (
    <div className="d_container">
      <div className="sidebar_holder">
        {open ? <Sidebar handleClose={handleClose} /> : null}
      </div>
      <div className="d_main" style={!open ? { marginLeft: "0" } : null}>
        <Navbar avatarURL={avatarURL} handleOpen={handleOpen} isOpen={open} />
        <SubBar />

        <div className="main-section">
          <div className="row">
            <div className="card-1">
              <div className="card-contents">
                <div className="flex">
                  <div>
                    <p className="c-2">Author Sales</p>
                  </div>
                  <div className="ml-2 c-4 hover">
                    <i className="fas fa-ellipsis-h"></i>
                  </div>
                </div>
                <div className="flex">
                  <div className="c-left">
                    <div>
                      <p className="card-major">
                        <small>$</small>64M
                      </p>
                    </div>
                  </div>
                  <div className="c-right v-center">
                    <StackLines />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-1">
              <div className="card-contents">
                <div className="flex">
                  <div>
                    <p className="c-2">Technologies</p>
                  </div>
                  <div className="ml-2 c-4 hover">
                    <i className="fas fa-ellipsis-h"></i>
                  </div>
                </div>
                <div className="flex">
                  <div className="c-left">
                    <div>
                      <p className="card-major">9.3M</p>
                    </div>
                  </div>
                  <div className="c-right">
                    <Donut />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-1">
              <div className="card-contents">
                <div className="flex">
                  <div>
                    <p className="c-2">Total Orders</p>
                  </div>
                  <div className="ml-2 c-4 hover">
                    <i className="fas fa-ellipsis-h"></i>
                  </div>
                </div>
                <div className="flex">
                  <div className="c-left">
                    <div>
                      <p className="card-major">17M</p>
                    </div>
                  </div>
                  <div className="c-right">
                    <Area />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="card-1">
              <div className="card-contents">
                <div className="flex">
                  <div>
                    <p className="c-2">Announcements</p>
                  </div>
                  <div className="flex">
                    <div className="badge-2 v-center hover">
                      <div>
                        <i className="fas fa-chevron-left"></i>
                      </div>
                    </div>
                    <div className="badge-2 v-center hover">
                      <div>
                        <i className="fas fa-chevron-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-100">
                  <div>
                    <p className="card-title">Incredibly Positive Reviews</p>
                    <p className="card-sub-text">
                      To start a blog, think of a topic about and first
                      brainstorm party is ways to write details{" "}
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="badge-selected">17 NOV, 2018</div>
                  <div className="v-center stroke hover">
                    <div>
                      <p className="c-3 view">VIEW</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-1">
              <div className="card-contents">
                <div className="flex">
                  <div>
                    <p className="c-2">Projects</p>
                  </div>
                  <div className="flex">
                    <div className="badge-2 v-center hover">
                      <div>
                        <i className="fas fa-chevron-left"></i>
                      </div>
                    </div>
                    <div className="badge-2 v-center hover">
                      <div>
                        <i className="fas fa-chevron-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-100">
                  <div className="h-10">
                    <p className="card-title">First Milestone Achivement</p>
                    <p className="card-sub-text">
                      To start a blog, think of a topic about and first
                      brainstorm party is ways to write details
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex mb-2">
                    <div className="card-sub-text">Progress</div>
                    <div className="card-sub-text">{Progress}</div>
                  </div>
                  <div className="progress-container">
                    <div className="progress" style={{ width: Progress }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-1">
              <div className="card-contents">
                <div className="flex">
                  <div>
                    <p className="c-2">Announcements</p>
                  </div>
                  <div className="flex">
                    <div className="badge-2 v-center hover">
                      <div>
                        <i className="fas fa-chevron-left"></i>
                      </div>
                    </div>
                    <div className="badge-2 v-center hover">
                      <div>
                        <i className="fas fa-chevron-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-100">
                  <div>
                    <p className="card-title">Incredibly Positive Reviews</p>
                    <p className="card-sub-text">
                      To start a blog, think of a topic about and first
                      brainstorm party is ways to write details{" "}
                    </p>
                  </div>
                </div>
                <div className="flex mt-2">
                  <div className="text-3">246 R St. Manhattan NY... </div>
                  <div className="v-center stroke hover">
                    <div>
                      <p className="c-3 view">VIEW MAP</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="card-1 f-span-1">
                <div className="card-contents">
                  <div className="flex b-1">
                    <div>
                      <p className="c-2">Top Products</p>
                    </div>
                    <div className="ml-2 c-4 hover">
                      <i className="fas fa-ellipsis-h"></i>
                    </div>
                  </div>
                  <div className="mt-3">{TopProducts()}</div>
                </div>
              </div>
              <div className="card-1 f-span-2">
                <div className="card-contents">
                  <div className="flex b-1">
                    <div>
                      <p className="c-2">Sales Statistics</p>
                    </div>
                    <div className="ml-2 c-4 hover">
                      <div className="badge-selected">
                        Export &nbsp;<i className="fas fa-chevron-down"></i>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Bar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
