import { useState, useRef, useEffect } from "react";
import classes from "./css/TicketTable.module.css";

export default function TicketTable({ title, entries, onStatusChange }) {
  const [editingId, setEditingId] = useState(null);
  const dropdownRef = useRef(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setEditingId(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function formatStatus(status) {
    return status
      .split("-")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  }

  function formatDate(dateStr) {
    const [year, month, day] = dateStr.split("-");
    return `${day}-${month}-${year}`;
  }

  return (
    <div className={classes.container}>
      {/* title with entry count */}
      <div className={classes.header}>
        <h2
          className={classes.title}
          onClick={() => setIsCollapsed(!isCollapsed)}
          style={{ cursor: "pointer" }}
        >
          {title} ({entries.length}){" "}
          <span>
            {isCollapsed ? (
              <i class="fa-solid fa-angle-right"></i>
            ) : (
              <i class="fa-solid fa-angle-down"></i>
            )}
          </span>
        </h2>
      </div>

      {/* table */}
      {!isCollapsed && (
        <>
          <table className={classes.table}>
            <thead className={classes.tableHead}>
              <tr>
                <th className={classes.tableHeader}>KAF</th>
                <th className={classes.tableHeader}>Article Title</th>
                <th className={classes.tableHeader}>Article URL</th>
                <th className={classes.tableHeader}>Request(s)</th>
                <th className={classes.tableHeader}>Status</th>
                <th className={classes.tableHeader}>Date Assigned</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((kaf) => (
                <tr key={kaf.id} className={classes.tableRow}>
                  <td className={classes.tableCellBold}>{kaf.id}</td>
                  <td className={classes.tableCell}>{kaf.articleTitle}</td>
                  <td className={classes.tableCellUrl}>
                    <a href={kaf.url} target="_blank" rel="noopener noreferrer">
                      {kaf.url}
                    </a>
                  </td>
                  <td className={classes.tableCellSecondary}>{kaf.requests}</td>
                  <td
                    ref={editingId === kaf.id ? dropdownRef : null}
                    onClick={() => setEditingId(kaf.id)}
                    style={{ cursor: "pointer" }}
                    className={classes.tableCellSecondary}
                  >
                    {editingId === kaf.id ? (
                      <select
                        value={kaf.status}
                        onChange={(e) => onStatusChange(kaf.id, e.target.value)}
                        autoFocus
                        style={{ cursor: "pointer" }}
                      >
                        <option value="in-progress">In Progress</option>
                        <option value="waiting">Waiting</option>
                        <option value="completed">Completed</option>
                      </select>
                    ) : (
                      formatStatus(kaf.status)
                    )}
                  </td>
                  <td className={classes.tableCellSecondary}>
                    {formatDate(kaf.dateAssigned)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
      {/* {title === "In Progress" && (
        <div className={classes.footer}>
          <AddKafBtn onClick={onAddClick} />
        </div>
      )} */}
    </div>
  );
}
