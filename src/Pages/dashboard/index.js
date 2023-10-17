import React from "react";
import SideMenu from "../../Components/sidemenu";
import Navbar from "../../Components/navbar";
import TabSection from "../../Components/tabs";
import Indicator from "../../Components/indicators";
import UserBaseIndicator from "../../Components/userBase";
import TableComponent from "../../Components/table";
import PieChartComponent from "../../Components/pieChart";

const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "15%", backgroundColor: "lightblue" }}>
        <SideMenu />
      </div>
      <div style={{ flex: "85%", padding: "25px 20px 0px 80px" }}>
        <Navbar />
        <p
          style={{
            color: "#212B36",
            fontSize: "20px",
            fontWeight: "700",
            lineHeight: "30px",
            backgroundColor: "white",
            margin: "0",
            padding: "20px 18px",
          }}
        >
          Client Management
        </p>
        <TabSection />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "8px",
            justifyContent: "space-evenly",
            padding: "25px 0px",
          }}
        >
          <div style={{ flexGrow: "1" }}>
            <Indicator
              leftBorderColor1={"#091A7A"}
              leftBorderColor2={"#006C9C"}
              leftBorderColor3={"#006124"}
              heading={"Key Performance Indicator"}
              label1={"Client Retention"}
              label3={"Revenue Generate"}
              label2={"Client Satisfaction"}
              value1={"55%"}
              value2={"64%"}
              value3={"89%"}
            />
          </div>
          <div style={{ flexGrow: "2" }}>
            <Indicator
              leftBorderColor1={"#091A7A"}
              leftBorderColor3={"#006C9C"}
              leftBorderColor2={"#006124"}
              heading={"Companies Status"}
              label1={"Total"}
              label3={"New"}
              label2={"Active"}
              value1={"20"}
              value2={"15"}
              value3={"3"}
            />
          </div>
          <div style={{ flexGrow: "1" }}>
            <UserBaseIndicator activeUsers={89} webUsers={11} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "5px",
            justifyContent: "space-evenly",
            padding: "25px 0px",
          }}
        >
          <div style={{ flexGrow: "1" }}>
            <TableComponent />
          </div>
          <div style={{ flexGrow: "1" }}>
            <PieChartComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
