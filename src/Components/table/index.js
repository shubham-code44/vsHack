import React from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TablePagination,
  styled,
  Typography,
} from "@mui/material";
import tc from "./#Img_Avatar.1.png";
import SearchBar from "../SearchBar";
import Dropdown from "../dropdown";
import label from "./label end.png";

const StatusChip = styled("div")(({ bgColor }) => ({
  backgroundColor: bgColor,
  color: "green",
  padding: "5px 10px",
  borderRadius: "5px",
  textAlign: "center",
}));

const data = [
  {
    company: { text: "Texla Culture", CbgColor: "#3366FF14" },
    onboardingDate: "12 Jan 2022",
    goliveDate: "15 Feb 2022",
    userBase: 1000,
    billingDate: "1st of the month",
    status: { text: "Active", bgColor: " #00AB5529 " },
  },
  {
    company: { text: "Pitch Life", CbgColor: "#00AB5514" },
    onboardingDate: "20 Feb 2022",
    goliveDate: "1 Mar 2022",
    userBase: 1500,
    billingDate: "5th of the month",
    status: { text: "Inactive", bgColor: " #00AB5529 " },
  },
  {
    company: { text: "O Buddy", CbgColor: "#FFAB0014" },
    onboardingDate: "5 Mar 2022",
    goliveDate: "10 Apr 2022",
    userBase: 800,
    billingDate: "15th of the month",
    status: { text: "Pending", bgColor: "lightgray" },
  },
];

const CompanyName = styled("div")(({ bgColor }) => ({
  backgroundColor: bgColor,
  color: "black",
  padding: "5px 10px",
  borderRadius: "5px",
}));

const columns = [
  { id: "company", label: "Company", bg: "" }, // No background color for column header
  { id: "onboardingDate", label: "Onboarding Date" },
  { id: "goliveDate", label: "Go-Live Date" },
  { id: "userBase", label: "Total User Base", bg: "" },
  { id: "billingDate", label: "Billing Date", bg: "" },
  { id: "status", label: "Status", bg: "" },
];

const TableComponent = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <div
        style={{
          borderBottom: "1px solid lightgray",
          padding: "20px",

          fontSize: "16px",
          fontWeight: "600",
        }}
      >
        Onboarding Companies
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 10px 20px 10px",
        }}
      >
        <Dropdown />
        <SearchBar />
      </div>

      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow style={{ background: "#F9FAFB" }}>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    style={{
                      background: column.bg,
                      fontFamily: "Public Sans",
                      fontSize: "12px",
                      fontWeight: 600,
                      lineHeight: "4px",
                      letterSpacing: "0px",
                      textAlign: "center",
                      padding: '20px 0px'
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.company.text}>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        style={{
                          padding: "0px 10px 0px 0px",
                          textAlign: "center",
                        }}
                      >
                        {column.id === "status" ? (
                          <StatusChip bgColor={row.status.bgColor}>
                            {row.status.text}
                          </StatusChip>
                        ) : column.id === "company" ? (
                          <CompanyName
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              padding: "10px",
                              borderRadius: '0px'
                            }}
                            bgColor={row.company.CbgColor}
                          >
                            <img
                              src={tc}
                              style={{ borderRadius: "50%", margin: "10px" }}
                              alt=""
                            />
                            <div>
                              <p style={{ margin: "0px" }}>
                                {" "}
                                {row.company.text}
                              </p>
                              <p
                                style={{
                                  fontSize: "12px",
                                  fontWeight: "400",
                                  color: "#637381",
                                  margin: "0px",
                                }}
                              >
                                INV-17048
                              </p>
                            </div>
                          </CompanyName>
                        ) : (
                          row[column.id].text || row[column.id]
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={data.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </Paper>
    </div>
  );
};

export default TableComponent;
