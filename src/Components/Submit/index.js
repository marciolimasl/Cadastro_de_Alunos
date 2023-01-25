import styles from "./styles.module.css";

const Submit = ({ text }) => {
  return (
    <div>
      <button className={styles.btn} type="submit">
        {text}
      </button>
    </div>
  );
};

export default Submit;
