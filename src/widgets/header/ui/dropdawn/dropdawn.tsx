import styles from "./dropdawn.module.scss";

const Dropdawn = () => {
  return (
      <div className={styles.dropdawn_list} >
        <li>
          <ul>Главная</ul>
          <ul>Цены</ul>
          <ul>О нас</ul>
        </li>
        
      </div>
  )
}

export default Dropdawn;