import TicketTable from "./TicketTable";

export default function MainContent({ kafList, onStatusChange }) {
  const inProgressKafs = kafList.filter((kaf) => kaf.status === "in-progress");
  const waitingKafs = kafList.filter((kaf) => kaf.status === "waiting");
  const completedKafs = kafList.filter((kaf) => kaf.status === "completed");

  return (
    <>
      <TicketTable
        title="In Progress"
        entries={inProgressKafs}
        onStatusChange={onStatusChange}
      />
      <TicketTable
        title="Waiting"
        entries={waitingKafs}
        onStatusChange={onStatusChange}
      />
      <TicketTable
        title="Completed"
        entries={completedKafs}
        onStatusChange={onStatusChange}
      />
    </>
  );
}
