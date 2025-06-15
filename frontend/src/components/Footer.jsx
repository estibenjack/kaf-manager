import classes from "./css/Footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.content}>
        <p>
          Coded with{" "}
          <i class="fa-solid fa-heart" style={{ color: "#63E6BE" }}></i> by{" "}
          <a
            href="https://github.com/estibenjack"
            target="_blank"
            rel="noreferrer"
          >
            Steven Jackson
          </a>{" "}
        </p>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
