import "./App.css";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import NewTask from "./components/NewTask";

function App() {
  const [tarefas, setTarefa] = useState(() => {
    const dadosSalvos = localStorage.getItem("minhaLista");
    return dadosSalvos ? JSON.parse(dadosSalvos) : [];
  });

  useEffect(() => {
    localStorage.setItem("minhaLista", JSON.stringify(tarefas));
  }, [tarefas]);

  function addNewTask(tarefa) {
    setTarefa((prevTarefa) => [...prevTarefa, tarefa]);
  }

  function removeTask(idDoItem) {
    const newTask = tarefas.filter((item) => item.id !== idDoItem);
    setTarefa(newTask);
  }

  console.log(tarefas);

  return (
    <div className="App">
      <h1>To Do List</h1>
      <NewTask addNewTask={addNewTask} />
      {tarefas.map((tarefa) => (
        <Card
          name={tarefa.name}
          descricao={tarefa.descricao}
          key={tarefa.id}
          id={tarefa.id}
          removeTask={removeTask}
          status={tarefa.status}
        />
      ))}
    </div>
  );
}

export default App;
