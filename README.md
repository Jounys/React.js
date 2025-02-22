# To-Do List (React)

Este projeto é uma **lista de tarefas (To-Do List)** desenvolvida com **React.js**, que permite aos usuários **adicionar**, **remover**, e **marcar tarefas como concluídas**. A aplicação utiliza o **LocalStorage** para persistir as tarefas entre as sessões.

---

## Tecnologias Utilizadas

- **React.js**: Biblioteca para construção de interfaces de usuário.
- **LocalStorage**: Armazenamento local do navegador para persistência de dados.
- **CSS**: Estilos para a interface da aplicação.

---

## Funcionalidades

- **Adicionar nova tarefa**: O usuário pode adicionar novas tarefas com nome e descrição.
- **Marcar como concluída**: A tarefa pode ser marcada como concluída, e a aparência dela muda.
- **Remover tarefa**: O usuário pode excluir tarefas da lista.
- **Persistência de dados**: As tarefas são armazenadas no **LocalStorage** para persistência entre sessões.

---

## Estrutura do Projeto

📁 src
│── 📄 App.js       // Componente principal
│── 📄 App.css      // Estilos globais
│── 📁 components
│   │── 📄 Card.js      // Componente de cada tarefa
│   │── 📄 NewTask.js   // Componente para adicionar novas tarefas


---

## Como Rodar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/todo-list-react.git

Navegue até o diretório do projeto:

cd todo-list-react
Instale as dependências:

npm install
Execute o projeto:

npm start
O aplicativo será iniciado no http://localhost:3000.

Como Funciona
Adicionar Nova Tarefa:

Através do componente NewTask, o usuário pode inserir o nome da tarefa.
O botão de adicionar envia esses dados e os armazena no estado do componente principal (App.js).

Marcar Tarefa como Concluída:

O usuário pode marcar uma tarefa como concluída clicando no botão de "Concluir".
A tarefa é atualizada com o status: true, e sua aparência muda, como texto riscado.

Remover Tarefa:

O usuário pode excluir qualquer tarefa da lista clicando no botão de "Excluir".
Persistência com LocalStorage:

As tarefas são salvas no LocalStorage sempre que há uma alteração no estado, permitindo que a lista de tarefas persista mesmo após o fechamento do navegador.

Melhorias Futuras
Filtros de visualização: Permitir que o usuário filtre as tarefas por status (concluídas ou pendentes).
Design Responsivo: Melhorar a interface para dispositivos móveis.
Adição de Autenticação: Implementar login de usuário para salvar tarefas de forma individual para cada pessoa.


Licença
Este projeto está licenciado sob a MIT License.
