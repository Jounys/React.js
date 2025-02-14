import styles from "./Card.module.css"

function Card({name, descricao, removeTask, id, status}) {
  return (
    <div className={status ? styles.container : styles.status}>
        <h3>{name}</h3>
        <p>{descricao}</p>
        <button onClick={() => removeTask(id)} className={styles.x}>X</button>
    </div>
  )
}

export default Card