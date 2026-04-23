import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState("home");

  return (
    <div style={{ fontFamily: "Arial", padding: 20 }}>
      <h1>Tenengroup Customer Care Hub</h1>

      <div style={{ marginBottom: 20 }}>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("policies")}>Policies</button>
        <button onClick={() => setPage("qa")}>Q&A</button>
      </div>

      {page === "home" && (
        <div>
          <h2>Welcome</h2>
          <p>This is your internal customer care hub.</p>
        </div>
      )}

      {page === "policies" && (
        <div>
          <h2>Policies</h2>
          <ul>
            <li>Late under 3 days → apology + ETA</li>
            <li>Late over 3 days → compensation possible</li>
            <li>Damaged → ask picture + reorder</li>
            <li>Not satisfied → exchange or store credit</li>
          </ul>
        </div>
      )}

      {page === "qa" && (
        <div>
          <h2>Quick Q&A</h2>
          <p><b>Order late 2 days?</b> → Apologize + ETA</p>
          <p><b>Damaged item?</b> → Ask picture + reorder</p>
          <p><b>DNR?</b> → Wait 3 days then act</p>
        </div>
      )}
    </div>
  );
}
