import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const LinkButton = ({ text, to }) => {
  return (
    <Link className={styles.btn} to={to}>
      {text}
    </Link>
  );
};

export default LinkButton;
