import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from "react-router-dom"

export default function ProfileLayout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "24px" }}>
        <Outlet />
      </div>
    </div>
  )
}
