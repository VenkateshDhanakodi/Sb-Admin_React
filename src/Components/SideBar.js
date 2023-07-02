import { Link } from 'react-router-dom'
function SideBar() {
    return <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        {/* <!-- Sidebar - Brand --> */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="javascript(void)">
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
            <Link to='/dashboard'>
                <div className="nav-link">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </div>
            </Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        <li className="nav-item active">
            <Link to='/adduser'>
                <div className="nav-link">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Adduser</span>
                </div>
            </Link>
        </li>

        <li className="nav-item active">
            <Link to='/edituser/0'>
                <div className="nav-link">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Edituser</span>
                </div>
            </Link>
        </li>

        <li className="nav-item active">
            <Link to='/nested-example'>
                <div className="nav-link">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>NestedExample</span>
                </div>
            </Link>
        </li>
    </ul>
}
export default SideBar;