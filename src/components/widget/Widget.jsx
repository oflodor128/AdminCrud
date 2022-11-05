import "./widget.scss";
import React from "react";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const Widget = () => {
  return (
    <div className="widget">
      <div className="left">
        <div className="title">USERS</div>
        <div className="title">5552</div>
        <div className="title">21215</div>
        <div className="title">See all user</div>
      </div>
      <div className="right">
        <div className="percentage"><KeyboardArrowUpOutlinedIcon/> 20 %</div>
      </div>
    </div>
  );
};

export default Widget;
