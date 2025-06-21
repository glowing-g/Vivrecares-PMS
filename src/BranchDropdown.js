import React, { useState } from "react";

export default function BranchDropdown() {
  const [branch, setBranch] = useState("");

  // Only these options will be available
  const availableBranches = [
    "MOA Branch",
    "Valenzuela Branch"
  ];

  return (
    <div>
      <label htmlFor="branch-select" style={{ display: "block", marginBottom: 8, marginTop : 10  }}>
        Branch
      </label>
      <select
        id="branch-select"
        value={branch}
        onChange={e => setBranch(e.target.value)}
        style={{ padding: 10, width: "100%" }}
      >
        <option value="">-- Select a Branch --</option>
        {availableBranches.map((srv, idx) => (
          <option key={idx} value={srv}>{srv}</option>
        ))}
      </select>
    </div>
  );
}