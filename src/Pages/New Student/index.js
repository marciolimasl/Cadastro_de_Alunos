import { useState } from "react";
import Input from "../../Components/Input";
import Submit from "../../Components/Submit";
import styles from "./styles.module.css";

const NewStudent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

  const createStudent = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/alunos/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        date: date,
      }),
    })
      .then((resp) => resp.json())
      .then((date) => {
        if (date.ok) {
          alert("Aluno cadastrado com sucesso.");
        }
      })
      .catch((err) => err);
  };

  return (
    <form onSubmit={createStudent} className={styles.form}>
      <h1>Cadastrar Aluno</h1>
      <p>Preencha os campos abaixo:</p>
      <Input
        type="text"
        name="Nome:"
        placeholder="Insira o nome do estudante"
        handleChange={(e) => setName(e.target.value)}
      />
      <Input
        type="text"
        name="Email:"
        placeholder="Insira o email do estudante"
        handleChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="date"
        name="Data de Nascimento"
        handleChange={(e) => setDate(e.target.value)}
      />
      <Submit text="Cadastrar" />
    </form>
  );
};

export default NewStudent;
