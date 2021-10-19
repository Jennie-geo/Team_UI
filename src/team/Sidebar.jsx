import React, { Fragment, useState, useEffect } from "react";
import People from "../people";
import Avatar from "@mui/material/Avatar";

import { BrowserRouter as Router, Link } from "react-router-dom";
import Text from "../images/img.jpeg";
import "../index.css";

const Sidebar = () => {
  const [name, setname] = useState("");
  const [jobtitle, setjobtitle] = useState("");

  function setDetail(name, job) {
    setname(name);
    setjobtitle(job);
  }
  return (
    <div className="wrapper">
      <div className="container">
        <LeftPanel setDetail={setDetail} />
        <RightPanel name={name} jobtitle={jobtitle} />
      </div>
    </div>
  );
};

function LeftPanel({ setDetail }) {
  return (
    <div className="container-left">
      <div className="header_nav">
        <header>Members</header>
        <p className="counter">0</p>
      </div>

      {People.map((el, index) => (
        <div key={index} onClick={(e) => setDetail(el.name, el.jobTitle)}>
          {/* Avatar={<Avatar>{el.name[0].toUpperCase()}</Avatar>} */}
          <div className="lefthand_bar">
            {/* <div className="avatar">{el.image}</div> */}
            <Avatar alt="Remy Sharp" src={el.image} />
            <div className="profile_desc">
              <div id="user_name">{el.name}</div>
              <div className="job_title">{el.jobTitle}</div>
            </div>
            <div className="taskNumber">
              <div className="taskNum">{`${el.task}`}</div>
              <div className="tasks">TASKS</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function RightPanel({ name, jobtitle }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 5 * 1000);
  }, [name, jobtitle]);
  return loading ? (
    <h1>Loading data, please wait...</h1>
  ) : (
    <div>
      <div className="container-right">
        {/* <div className="profiles_header"> */}

        <div className="profiles">
          <div className="img_container">
            <img src={Text} alt="my image" className="image_url" />
          </div>
          <div className="profileSmallwrap">
            <div className="personalDetails">
              <h1 className="profile_name">{name}</h1>
              <h4 className="job_title">{jobtitle}</h4>
              <p className="country">Nigeria</p>
            </div>
            <p className="right_side_dots">...</p>
          </div>
        </div>
        <hr />
        <div className="taskleveldiagram">
          <div className="close_task">
            <p>
              <span>719</span>
            </p>
            <p>close task</p>
          </div>
          {/* <div className="blue_diagram">blue diagram</div> */}
          <div className="open_task">
            <p>
              <span>13</span>
            </p>
            <p>open task</p>
          </div>
          {/* <div className="green_diagram">green diagram</div> */}
        </div>

        <hr />

        <div className="assignedTask">
          <div className="task_assign_no">
            <h4 className="profile_view">
              {" "}
              Assigned Task <span>2</span>
            </h4>
          </div>
          <div className="design">
            <p className="icon">
              <input type="checkbox" />
            </p>
            <div className="text">
              <p className="assignedtext">
                An option to search in current projects or in all projects
              </p>
              <p className="designtage">DESIGN</p>
            </div>
          </div>

          <div className="design">
            <p className="icon">
              <input type="checkbox" />
            </p>
            <div className="text">
              <p className="assignedtext">Listing on product hunt</p>
              <p className="designtage">DESIGN</p>
            </div>
          </div>
        </div>

        <hr />
        <h5>Last Activity</h5>
        <div className="lastactivitywrapper">
          <div className="lastactivity">
            <div className="lastactivityicon">
              <i class="fas fa-upload"></i>
            </div>
            <div className="lastactivitydata">
              <p className="lastactivitytext">
                <strong>Davea Butler</strong> uploaded 3 files on{" "}
                <strong>
                  An option to search in current projects or in all projects
                </strong>
              </p>
              <div className="lastactivitydate">
                <p className="lastactivitydatemonth">20 nov</p>
                <p className="lastactivitydatemonth">6:02pm</p>
              </div>
            </div>
          </div>
          <div className="lastactivityimages">
            <div className="LA_img_container">
              <img src={Text} alt="my image" className="ji" />
            </div>
            <div className="LA_img_container">
              <img src={Text} alt="my image" className="ji" />
            </div>
            <div className="LA_img_container">
              <img src={Text} alt="my image" className="ji" />
            </div>
          </div>
          <div className="lastactivity">
            <div className="lastactivityicon">
              <i className="far fa-check-circle"></i>
            </div>
            <div className="lastactivitydata">
              <p className="lastactivitytext">
                <strong>Davea Butler</strong> mark as done{" "}
                <strong>
                  Listing on product Hunt so we can reach as many potential
                  users
                </strong>
              </p>
              <div className="lastactivitydate">
                <p className="lastactivitydatemonth">17 nov</p>
                <p className="lastactivitydatemonth">5:49pm</p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="activity_detail1">Last Activity</div>
  <div className="activity_detail2">
    <div className="activity_detail">file Icon</div>
    <div className="activity_detail">uploaded file</div>
    <div className="activity_detail">date</div>
  </div>
  <div className="image_upload">
    <div className="image_upload">image1</div>
    <div className="image_upload">image2</div>
    <div className="image_upload">image3</div>
  </div> */}
      </div>
    </div>
  );
}

export default Sidebar;
