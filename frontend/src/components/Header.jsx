import classes from "./css/Header.module.css";

export default function Header() {
  const user = {
    name: "steven",
    avatarUrl:
      "https://plus.unsplash.com/premium_photo-1739054760977-f9e246e4c1be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGVnbyUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  };

  function formatUserName(name) {
    return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
  }

  return (
    <>
      <header className={classes.header}>
        <div className={classes.content}>
          <h2>
            <i
              className="fa-solid fa-check-double"
              style={{ color: "#63E6BE" }}
            ></i>
            KAFtrack
          </h2>
          <div className={classes.user}>
            <span>{formatUserName(user.name)}</span>
            <img src={user.avatarUrl} alt="User avatar" />
          </div>
        </div>
      </header>
    </>
  );
}
