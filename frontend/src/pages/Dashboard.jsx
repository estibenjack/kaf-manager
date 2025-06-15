import { useState } from "react";
import { kafs } from "../data/kafs";
import MainContent from "../components/MainContent";
import AddKafBtn from "../components/AddKafBtn";
import AddKafModal from "../components/AddKafModal";
import classes from "./css/Dashboard.module.css";

export default function Dashboard() {
  const [kafList, setKafList] = useState(kafs);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleAddKaf(newKaf) {
    setKafList((prevKafs) => [...prevKafs, newKaf]);
    setIsModalOpen(false);
  }

  function handleStatusChange(id, newStatus) {
    setKafList((prevKafs) =>
      prevKafs.map((kaf) =>
        kaf.id === id ? { ...kaf, status: newStatus } : kaf
      )
    );
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <div className="btn-container">
          <AddKafBtn onClick={() => setIsModalOpen(true)} />
        </div>
        <MainContent kafList={kafList} onStatusChange={handleStatusChange} />
        {isModalOpen && (
          <AddKafModal
            onClose={() => setIsModalOpen(false)}
            onAdd={handleAddKaf}
          />
        )}
      </div>
    </div>
  );
}
