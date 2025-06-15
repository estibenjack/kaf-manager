import TicketTable from "./TicketTable";

export default function MainContent({ kafList }) {
  const inProgressKafs = kafList.filter((kaf) => kaf.status === "in-progress");
  const waitingKafs = kafList.filter((kaf) => kaf.status === "waiting");
  const completedKafs = kafList.filter((kaf) => kaf.status === "completed");

  return (
    <>
      <TicketTable title="In Progress" entries={inProgressKafs} />
      <TicketTable title="Waiting" entries={waitingKafs} />
      <TicketTable title="Completed" entries={completedKafs} />
    </>
  );
}
