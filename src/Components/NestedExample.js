import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function NestedExample() {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <h1>This is Nested Example</h1>
            <Link to='account'>
                <ul>
                    <li>Account</li>
                </ul>
            </Link>

            <Link to='profile'>
                <ul>
                    <li>Profile</li>
                </ul>
            </Link>

            <Link to='/nested-example'>
                {/* Back to Nested Home page */}
                <ul>
                    <li>Nested Home</li>
                </ul>
            </Link>

            <Link to='useRef'>
                <ul>
                    <li>UseRef</li>
                </ul>
            </Link>

            <Link to='usereducer'>
                <ul>
                    <li>UseReducer</li>
                </ul>
            </Link>
            <Outlet />
        </div>
    )
}

export default NestedExample