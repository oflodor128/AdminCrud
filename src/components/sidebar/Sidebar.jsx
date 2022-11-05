import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationImportantOutlinedIcon from '@mui/icons-material/NotificationImportantOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">PapayaDev Admin </span>
      </div>
      <hr />

      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
          <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">List</p>
          <li>
          <AccountCircleRoundedIcon className="icon"/>
            <span>Users</span>
          </li><li>
          <Inventory2RoundedIcon className="icon"/>
            <span>Products</span>
          </li>
          <li>
          <ReceiptLongRoundedIcon className="icon"/>
            <span>Orders</span>
          </li>
          <li>
          <LocalShippingOutlinedIcon className="icon"/>
            <span>Delivery</span>
          </li>
          <p className="title">Tools</p>
          <li>
          <QueryStatsOutlinedIcon className="icon"/>
            <span>Stats</span>
          </li><li>
          <NotificationImportantOutlinedIcon className="icon"/>
            <span>Notifications</span>
          </li>
          <p className="title">Service</p>
          <li>
          <MonitorHeartOutlinedIcon className="icon"/>
            <span>Systems Health</span>
          </li><li>
          <DocumentScannerOutlinedIcon className="icon"/>
            <span>Logs</span>
          </li>
          <li>
          <SettingsOutlinedIcon className="icon"/>
            <span>Settings</span>
          </li>
          <p className="title">User</p>
          <li>
          <AccountBoxRoundedIcon className="icon"/>
            <span>Profile</span>
          </li>
          <li>
          <CancelRoundedIcon className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <span className="colorOption"></span>
        <span className="colorOption"></span>
        <span className="colorOption"></span>
      </div>
    </div>
  );
};

export default Sidebar;
