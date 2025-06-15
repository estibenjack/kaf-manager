import classes from "./css/AddKafBtn.module.css";

export default function AddKafBtn({ onClick }) {
  return (
    <button className={classes.addBtn} onClick={onClick}>
      + Add KAF
    </button>
  );
}
