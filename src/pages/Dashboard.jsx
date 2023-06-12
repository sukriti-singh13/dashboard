import React, { useEffect, useState } from "react";
import DashboardIcon from "../assets/dashboard_icon.svg";
import TransactionIcon from "../assets/transaction_icon.svg";
import ScheduleIcon from "../assets/schedule_icon.svg";
import UserIcon from "../assets/user_icon.svg";
import SettingIcon from "../assets/setting_icon.svg";
import SearchIcon from "../assets/search_icon.svg";
import BellIcon from "../assets/bell_icon.svg";
import firstBlockIcon from "../assets/firstBlock.svg";
import SecondBlockIcon from "../assets/secondBlock.svg";
import ThirdBlockIcon from "../assets/thirdBlock.svg";
import fourthBlockIcon from "../assets/fourthBlock.svg";
import CustomLineChart from "../components/CustomLineChart";
import CustomPieChart from "../components/CustomPieChart";

const Dashboard = () => {
  const navigationContent = [
    { icon: DashboardIcon, title: "Dashboard" },
    { icon: TransactionIcon, title: "Transactions" },
    { icon: ScheduleIcon, title: "Schedules" },
    { icon: UserIcon, title: "Users" },
    { icon: SettingIcon, title: "Settings" },
  ];
  const [data, setdata] = useState();

  useEffect(() => {
    const fetchDatas = async (asset) => {
      const res = await fetch(
        `https://api.coincap.io/v2/assets/${asset}/history?interval=d1`
      );
      const data = await res.json();
      if (data) {
        let temp = data.data.splice(0, 7);
        temp.forEach(data => {
          data.date = data.date.slice(0, 10);
          const newDate = new Date(data.date).toDateString()
          console.log(newDate)
          return data
        });
        
        console.log(temp);
        setdata(temp);
      } 
    };
    
    fetchDatas("bitcoin");
  }, []);
  const blockItem = [
    {
      icon: firstBlockIcon,
      title: "Total Revenues",
      value: "$2,129,430",
      color: "DDEFE0",
    },
    {
      icon: SecondBlockIcon,
      title: "Total Transactions",
      value: "1,520",
      color: "F4ECDD",
    },
    {
      icon: ThirdBlockIcon,
      title: "Total Likes",
      value: "9,721",
      color: "EFDADA",
    },
    {
      icon: fourthBlockIcon,
      title: "Total Users",
      value: "892",
      color: "DEE0EF",
    },
  ];
  return (
    <div className="wrapper-container">
      <div className="dashboard_main">
        <section className="dashboard_left">
          <h1>Board.</h1>
          <div className="navigation">
            {navigationContent.map((ele) => (
              <div key={ele.title} className="inner_content">
                <img src={ele.icon} alt={ele.title} />
                <p>{ele.title}</p>
              </div>
            ))}
          </div>
          <div className="footer">
            <p>Help</p>
            <p>Contact Us</p>
          </div>
        </section>
        <section className="dashboard_right">
          <div className="header">
            <h1>Dashboard</h1>
            <div className="end_profile_section">
              <div className="input_wrapper">
                <input placeholder="Search..." />
                <img src={SearchIcon} alt="search-icon" />
              </div>
              <img src={BellIcon} alt="bell-icon" />
            </div>
          </div>
          {/* blocks */}
          <div className="blocks_wrapper">
            {blockItem.map((item) => (
              <div className={`block ${item.color}`}>
                <img src={item.icon} alt="icons" />
                <h3>{item.title}</h3>
                <h4>{item.value}</h4>
              </div>
            ))}
          </div>
          {/* line chart */}
          <CustomLineChart data={data} />
          <div className="end_section">
            <div className="piechart">
              <CustomPieChart  />
            </div>
            <div className="meetings">
              <div className="meet-header">
                <h4>Today's Schedule</h4>
                <p>See All </p>
              </div>

              <div className="schedule_wrapper">
                <div className="colored-div-green"></div>
                <div className="meet-content">
                  <h5>Meeting with suppliers from Kuta Bali</h5>
                  <p>14.00-15.00</p>
                  <p>at Sunset Road, Kuta, Bali </p>
                </div>
              </div>
              <div className="schedule_wrapper">
                <div className="colored-div-purple"></div>
                <div className="meet-content">
                  <h5>Check operation at Giga Factory 1</h5>
                  <p>18.00-20.00</p>
                  <p>at Central Jakarta </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
