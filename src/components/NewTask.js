import styles from "./NewTask.module.css";

import { useState } from "react";

function NewTask({ addNewTask }) {
  const [name, setName] = useState("");
  const [descricao, setDescricao] = useState("");

  function submitForm(e) {
    e.preventDefault();

    // if (!name.trim() || !descricao.trim()) return; // Evita tarefas vazias
    if (!name.trim() || !descricao.trim()) {
      console.log("name.trim():", name.trim(), "Retorna:", !name.trim());
      console.log("descricao.trim():", descricao.trim(), "Retorna:", !descricao.trim());
      return;
    }

    const tarefa = { id: Date.now(), name, descricao, status: true };
    addNewTask(tarefa);
    setName("");
    setDescricao("");
  }

  return (
    <div className={styles.container}>
      <form onSubmit={submitForm}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength="40"
        />

        <label htmlFor="description">Descrição:</label>
        <input
          type="text"
          id="description"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default NewTask;
