import BasicCard from "./CardComponents/BasicCard";
import ProgressCard from './CardComponents/ProgressCard'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { userContext } from "./ContextComponents/UserContextComponent";
import { dashboardContext } from "./ContextComponents/DashboardContextComponent";
function Dashboard() {
    let context = useContext(userContext);
    let dash = useContext(dashboardContext);
    let navigate = useNavigate();
    let handledelete = (i) => {
        let newArray = [...context.users];
        newArray.splice(i, 1);
        context.setUsers(newArray);
    }
    return <div id="content-wrapper" className="d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">

            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid">

                {/* <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                    <a href="javascript(void)" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                        className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                </div>

                {/* <!-- Content Row --> */}
                <div className="row">
                    {/* <!-- Earnings (Monthly) Card Example --> */}
                    <BasicCard label="Earnings (Monthly)" value={dash.earninngsMonthly} border="primary" icon="fa-calendar" />
                    <BasicCard label="Earnings (Annual)" value={dash.earninngsYearly} border="success" icon="fa-dollar-sign" />
                    <ProgressCard label="Tasks" value={dash.tasks} border="info" icon="fa-clipboard-list" />
                    <BasicCard label="Pending Requests" value={dash.pendingRequests} border="warning" icon="fa-comments" />
                </div>
            </div>
            <div className="container-fluid">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>DOB</th>
                            <th>Mobile</th>
                            <th>Batch</th>
                            <th>Timings</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {context.users.map((e, i) => {
                            return <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{e.name}</td>
                                <td>{e.dob}</td>
                                <td>{e.mobile}</td>
                                <td>{e.batch}</td>
                                <td>{e.timings}</td>
                                <td><Button variant="primary" onClick={() => navigate(`/edituser/${i}`)}><i className="fa-solid fa-pen-to-square">&nbsp;</i>Edit</Button>&nbsp;
                                    <Button variant="danger" onClick={() => handledelete(i)}><i className="fa-solid fa-trash">&nbsp;</i>Delete</Button></td>
                            </tr>
                        })}
                    </tbody>
                </Table>
            </div>
        </div>
    </div>
}
export default Dashboard;