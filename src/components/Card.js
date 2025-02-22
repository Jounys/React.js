import styles from "./Card.module.css";

function Card({ name, removeTask, id, status, concluirTarefa }) {

  return (
    <div className={ `${styles.container} ${status ? styles.done : ''}`}>

      <h3>{name}</h3>

      <div className={styles.containerButtons}>

        <button onClick={() => removeTask(id)} className={styles.button}>
          Excluir
        </button>

        <button onClick={() => concluirTarefa(id)} className={`${styles.button}`}>
          {status ? "Reabrir" : "Concluir"}
        </button>
        
      </div>
    </div>
  );

}

export default Card;
