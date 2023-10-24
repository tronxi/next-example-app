import React from "react";

export default function DashboardLayout({children}: {
  children: React.ReactNode
}) {
  return (
      <section>
        <nav className="nav">
          <p>comun</p>
        </nav>

        {children}
      </section>
  )
}