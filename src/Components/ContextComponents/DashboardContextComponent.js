import React from 'react'
export const dashboardContext = React.createContext();

function DashboardContextComponent({ children }) {

  let data = {
    earninngsMonthly: "40,000",
    earninngsYearly: "2,15,000",
    tasks: "50",
    pendingRequests: "20"
  }

  return <dashboardContext.Provider value={data}>
    {children}
  </dashboardContext.Provider>
}

export default DashboardContextComponent;