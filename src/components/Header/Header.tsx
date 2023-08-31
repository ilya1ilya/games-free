import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <h3>Free-to-play games</h3>
      <img src="steam-logo.jpg" alt={"steam-logo"} />
    </div>
  );
};

export default Header;
