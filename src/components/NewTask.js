import styles from "./NewTask.module.css";

import { useState } from "react";

function NewTask({ addNewTask }) {

  const [name, setName] = useState("");

  function submitForm(e) {
    e.preventDefault();

    // if (!name.trim()) return; // Evita tarefas vazias
    if (!name.trim()) {
      console.log("name.trim():", name.trim(), "Retorna:", !name.trim());
      return;
    }

    const tarefa = { id: Date.now(), name, status: false };
    addNewTask(tarefa);
    setName("");
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
          maxLength="60"
        />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default NewTask;
