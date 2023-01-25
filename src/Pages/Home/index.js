import LinkButton from "../../Components/LinkButton";
import student from "../../assets/students.png";
import styles from "./styles.module.css";

const Home = () => {
  return (
    <section className={styles.home}>
      <h1>
        Bem-Vindo ao Painel de <span>Registros.</span>
      </h1>
      <p>Comece a gerenciar os seus alunos.</p>
      <LinkButton text="Cadastrar Aluno" to="/newstudent" />
      <img src={student} alt="Students" />
    </section>
  );
};

export default Home;
