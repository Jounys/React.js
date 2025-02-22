# Documentação Técnica - To-Do List (React)

Este documento descreve a estrutura interna e as funcionalidades do projeto **To-Do List** desenvolvido com **React.js**.

## Estrutura do Projeto

📁 src │── 📄 App.js // Componente principal que gerencia o estado e lógica da aplicação. │── 📄 App.css // Arquivo de estilo global da aplicação. │── 📁 components │ │── 📄 Card.js // Componente que exibe cada tarefa na lista. Permite concluir ou excluir tarefas. │ │── 📄 NewTask.js // Componente que permite a adição de novas tarefas.


## Componente Principal: `App.js`

O componente `App.js` é responsável por gerenciar o estado da lista de tarefas e suas interações. Ele usa o `useState` para manter o estado das tarefas e o `useEffect` para persistir as alterações no **LocalStorage**. Além disso, ele passa funções de manipulação dos dados (adicionar, concluir e remover tarefas) como props para os componentes filhos.

### Estado

- **tarefas**: É um array que contém todas as tarefas. Cada tarefa é um objeto com as propriedades: `id`, `name`, e `status`.

### Funções

- **addNewTask(tarefa)**: Adiciona uma nova tarefa ao estado `tarefas`. A nova tarefa é recebida como parâmetro e é inserida no array de tarefas.
  
- **concluirTarefa(id)**: Altera o status da tarefa correspondente ao ID fornecido. O status é alterado de concluída para não concluída e vice-versa.
  
- **removeTask(idDoItem)**: Remove a tarefa da lista de tarefas, filtrando a tarefa com o ID fornecido.

### Persistência com LocalStorage

O estado das tarefas é salvo no **LocalStorage** para garantir que os dados persistam mesmo após o fechamento do navegador. Toda vez que o estado de `tarefas` é atualizado, ele é salvo novamente no LocalStorage.

## Componente `NewTask.js`

O componente `NewTask.js` é responsável por permitir a adição de novas tarefas. Ele exibe um formulário com campos para o nome e a descrição da tarefa. Quando o usuário submete o formulário, a tarefa é adicionada ao estado do componente principal (`App.js`), e os campos de entrada são limpos.

### Estado

- **name**: Nome da tarefa inserido pelo usuário.
- **descricao**: Descrição da tarefa inserida pelo usuário.

### Função

- **handleSubmit(e)**: Previne o comportamento padrão de envio do formulário e chama a função `addNewTask` passada como prop para adicionar a nova tarefa ao estado do componente principal.

## Componente `Card.js`

O componente `Card.js` é responsável por exibir cada tarefa individualmente na lista. Ele mostra o nome da tarefa e oferece dois botões de interação:

- O botão "Concluir" altera o status da tarefa para concluída (ou a marca de volta como não concluída).
- O botão "Excluir" remove a tarefa da lista.

### Propriedades Recebidas

- **name**: Nome da tarefa.
- **id**: ID único da tarefa.
- **status**: Status de conclusão da tarefa.
- **removeTask**: Função para remover a tarefa.
- **concluirTarefa**: Função para alterar o status da tarefa (concluir ou reabrir).


### Algumas classes importantes

- **`.done`**: Estilo aplicado às tarefas concluídas, com fundo verde.
- **`.card`**: Estilo do cartão de cada tarefa, incluindo o layout e a disposição dos botões.

## Melhorias Futuras

- **Filtros de tarefas**: Adicionar filtros para visualizar apenas tarefas pendentes ou concluídas.
- **Design Responsivo**: Melhorar a responsividade para dispositivos móveis.
- **Funcionalidade de Edição**: Permitir ao usuário editar o nome da tarefa.
- **Autenticação de Usuário**: Implementar autenticação para salvar as tarefas associadas a um usuário específico, utilizando uma API ou banco de dados.

## Como Contribuir

1. Fork o repositório.
2. Crie uma branch com sua feature: `git checkout -b minha-feature`.
3. Faça suas alterações e commite-as: `git commit -am 'Adicionando minha feature'`.
4. Envie para a branch original: `git push origin minha-feature`.
5. Abra um pull request.

## Licença

Este projeto está licenciado sob a **MIT License**.
