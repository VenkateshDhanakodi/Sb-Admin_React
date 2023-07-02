import React from 'react'
import { useState } from 'react';
export const userContext = React.createContext();
function UserContextComponent({ children }) {
  let [users, setUsers] = useState([{
    name: "Venkatesh",
    dob: "22071995",
    mobile: "9902336331",
    batch: "B38WET",
    timings: "10am to 12pm"
  }, {
    name: "Sathya",
    dob: "22071997",
    mobile: "99023361221",
    batch: "B38WET",
    timings: "12pm to 2pm"
  }, {
    name: "Lucky",
    dob: "22071991",
    mobile: "23331133",
    batch: "B38WET",
    timings: "2pm to 4pm"
  }
  ])

  return <userContext.Provider value={{ users, setUsers }}>
    {children}
  </userContext.Provider>
}

export default UserContextComponent