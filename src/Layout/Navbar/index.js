import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { FaHome, FaFolderOpen } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <h2>
        Meu<span>Projeto</span>
      </h2>
      <ul>
        <li>
          <FaHome />
          <Link to="/">Home</Link>
        </li>
        <li>
          <FaFolderOpen />
          <Link to="/student">Alunos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
