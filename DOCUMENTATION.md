To-Do List (React) - Documentação
Este projeto é uma lista de tarefas (To-Do List) desenvolvida com React.js, permitindo adicionar, remover e marcar tarefas como concluídas, com persistência de dados usando o LocalStorage.

Tecnologias Utilizadas
React.js: Biblioteca JavaScript para construção de interfaces de usuário.
LocalStorage: Armazenamento local no navegador para persistência dos dados.
CSS: Estilização da aplicação.
Estrutura do Projeto
scss
Copiar
Editar
📁 src
│── 📄 App.js       // Componente principal
│── 📄 App.css      // Estilos globais
│── 📁 components
│   │── 📄 Card.js      // Componente de cada tarefa
│   │── 📄 NewTask.js   // Componente para adicionar novas tarefas
Funcionamento do App.js
O componente App.js é responsável por gerenciar o estado da lista de tarefas, permitindo adicionar, concluir e remover tarefas, e sincroniza os dados com o LocalStorage.

1. Estado das Tarefas
O estado tarefas armazena a lista de tarefas, e a persistência é feita utilizando o LocalStorage:

jsx
Copiar
Editar
const [tarefas, setTarefa] = useState(() => {
  const dadosSalvos = localStorage.getItem("minhaLista");
  return dadosSalvos ? JSON.parse(dadosSalvos) : [];
});
2. Salvamento no LocalStorage
Sempre que o estado tarefas é atualizado, o LocalStorage também é atualizado para manter os dados persistentes:

jsx
Copiar
Editar
useEffect(() => {
  localStorage.setItem("minhaLista", JSON.stringify(tarefas));
}, [tarefas]);
3. Funções Principais
Adicionar Nova Tarefa
jsx
Copiar
Editar
function addNewTask(tarefa) {
  setTarefa((prevTarefa) => [...prevTarefa, tarefa]);
}
Essa função adiciona uma nova tarefa ao estado.

Concluir ou Reabrir Tarefa
jsx
Copiar
Editar
function concluirTarefa(id) {
  setTarefa((prevTarefas) =>
    prevTarefas.map((tarefa) =>
      tarefa.id === id ? { ...tarefa, status: !tarefa.status } : tarefa
    )
  );
}
Essa função altera o status da tarefa de concluída para não concluída e vice-versa.

Remover Tarefa
jsx
Copiar
Editar
function removeTask(idDoItem) {
  const newTask = tarefas.filter((item) => item.id !== idDoItem);
  setTarefa(newTask);
}
Remove a tarefa da lista filtrando o item com o id passado.

Componente Card.js
O componente Card representa cada tarefa da lista e permite ao usuário concluir ou excluir a tarefa. Ele recebe as propriedades name, descricao, id, status e funções de removeTask e concluirTarefa como props.

Exemplo de código do componente Card.js:

jsx
Copiar
Editar
function Card({ name, descricao, removeTask, id, status, concluirTarefa }) {
  return (
    <div className={`card ${status ? "done" : ""}`}>
      <h3>{name}</h3>
      <p>{descricao}</p>
      <div className="buttons">
        <button onClick={() => removeTask(id)}>Excluir</button>
        <button onClick={() => concluirTarefa(id)}>
          {status ? "Reabrir" : "Concluir"}
        </button>
      </div>
    </div>
  );
}
A classe done é aplicada quando a tarefa está concluída, alterando sua aparência (ex: texto tachado).

Componente NewTask.js
O componente NewTask permite ao usuário adicionar novas tarefas. Ele exibe um formulário com dois campos: um para o nome da tarefa e outro para a descrição. Ao submeter, a tarefa é adicionada ao estado em App.js.

Exemplo de código do componente NewTask.js:

jsx
Copiar
Editar
function NewTask({ addNewTask }) {
  const [name, setName] = useState("");
  const [descricao, setDescricao] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;

    addNewTask({ id: Date.now(), name, descricao, status: false });
    setName("");
    setDescricao("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nova tarefa" />
      <input value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Descrição" />
      <button type="submit">Adicionar</button>
    </form>
  );
}
Estilização (CSS)
A estilização da aplicação é feita com CSS. Algumas das classes mais importantes são:

.done: Estilo aplicado às tarefas concluídas.
css
Copiar
Editar
.done {
  background-color: rgb(33, 128, 33);
  text-decoration: line-through;
  color: white;
}
Melhorias Futuras
Filtros para listar tarefas concluídas ou pendentes.
Animações ao concluir ou remover tarefas.
Autenticação para salvar tarefas de forma persistente para cada usuário em diferentes dispositivos.
Conclusão
Este projeto demonstra um CRUD básico (Criar, Ler, Atualizar, Deletar) usando React e LocalStorage. Ele pode ser estendido com diversas funcionalidades, como filtros de tarefas e aprimoramento da UI/UX.