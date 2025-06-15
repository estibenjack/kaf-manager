import { useState } from "react";
import { kafs } from "../data/kafs";
import MainContent from "../components/MainContent";
import AddKafBtn from "../components/AddKafBtn";
import AddKafModal from "../components/AddKafModal";

export default function Dashboard() {
  const [kafList, setKafList] = useState(kafs);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleAddKaf(newKaf) {
    setKafList((prevKafs) => [...prevKafs, newKaf]);
    setIsModalOpen(false);
  }

  return (
    <>
      <div className="btn-container">
        <AddKafBtn onClick={() => setIsModalOpen(true)} />
      </div>
      <MainContent kafList={kafList} />
      {isModalOpen && (
        <AddKafModal
          onClose={() => setIsModalOpen(false)}
          onAdd={handleAddKaf}
        />
      )}
    </>
  );
}
