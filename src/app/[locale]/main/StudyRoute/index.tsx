import clsx from "clsx";
import styles from "./styles.module.css";

const index = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.ColumnBig}>
        <div className={styles.RowInfo}>
          <div className={styles.ColumnInfo}>
            <h2 className={'alt'}>
              <strong className="alt">4</strong> Профиля бакалавриата
            </h2>
            <p className="alt">Прикладная информатика в дизайне</p>
            <p className="alt">Прикладной искуственный интеллект</p>
            <p className="alt">IT технологии создания цифрового контента</p>
            <p className="alt">Цифровые технологии в финансах</p>
          </div>

          <div className={styles.ColumnInfo}>
            <h2 className={clsx('alt')}>
              <strong className="alt">3</strong> Профиля магистратуры
            </h2>
            <p className="alt">Прикладная информатика в дизайне</p>
            <p className="alt">Цифровой дизайн промышленных объектов</p>
            <p className="alt">
              Цифровые технологии в высокотехнологичной индустрии моды
              (FashionTech)
            </p>
          </div>
        </div>

        <div className={styles.ColumnInfo2}>
          <h2 className={clsx('alt')}>
            <strong className="alt">1</strong> Профиль среднего
            профессионального образования
          </h2>
          <p className="alt">Информационные системы и программирование</p>
        </div>
      </div>
    </div>
  );
};

export default index;
