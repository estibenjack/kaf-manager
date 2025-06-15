import AddKafBtn from "./AddKafBtn";
import classes from "./css/TicketTable.module.css";

export default function TicketTable({ title, entries }) {
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
        <h2 className={classes.title}>
          {title} ({entries.length})
        </h2>
      </div>

      {/* table */}
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
              <td className={classes.tableCellSecondary}>
                {formatStatus(kaf.status)}
              </td>
              <td className={classes.tableCellSecondary}>
                {formatDate(kaf.dateAssigned)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* {title === "In Progress" && (
        <div className={classes.footer}>
          <AddKafBtn onClick={onAddClick} />
        </div>
      )} */}
    </div>
  );
}
