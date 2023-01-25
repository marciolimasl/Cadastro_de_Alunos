import Input from "../../Components/Input";
import Submit from "../../Components/Submit";
import styles from "./styles.module.css";

const NewStudent = () => {
  return (
    <form className={styles.form}>
      <h1>Cadastrar Aluno</h1>
      <p>Preencha os campos abaixo:</p>
      <Input
        type="text"
        name="Nome:"
        placeholder="Insira o nome do estudante"
      />
      <Input
        type="text"
        name="Email:"
        placeholder="Insira o email do estudante"
      />
      <Input type="date" name="Data de Nascimento" />
      <Submit text="Cadastrar" />
    </form>
  );
};

export default NewStudent;
