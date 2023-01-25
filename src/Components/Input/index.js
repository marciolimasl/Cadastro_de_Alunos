import styles from "./styles.module.css";

const Input = ({ type, name, placeholder, handleChange }) => {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={name}
        name={name}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
