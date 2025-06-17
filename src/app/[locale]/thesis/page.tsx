import styles from "./styles.module.css";
import {DownloadIcon} from 'lucide-react'
export const dynamic = 'force-static'

const index = () => {
  return (
    <>
      <h1 className={styles.title}>ВКР</h1>
      <div className={styles.flexRow}>
        <div className={styles.flexCol3}>
          <div className={styles.text}>
            <h2>Инструкция, титульные листы, раздаточные материалы</h2>
            <small>
              Подробная инструкция и необходимые материалы для выполнения ВКР
            </small>
          </div>
          <div className={styles.filler}></div>
          <div className={styles.IconWrapper}>
            <a href="http://iskd.sutd.ru/wp-content/uploads/2019/04/%D0%9E%D1%84%D0%BE%D1%80%D0%BC%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%D0%9E%D1%82%D1%87%D0%B5%D1%82%D0%B0_%D0%9A%D1%80%D0%B0%D1%82%D0%BA%D0%B0%D1%8F-%D0%B2%D1%8B%D0%BF%D0%B8%D1%81%D0%BA%D0%B0-%D0%B8%D0%B7-%D0%93%D0%9E%D0%A1%D0%A2-%D1%81-%D0%9F%D1%80%D0%B8%D0%BC%D0%B5%D1%80%D0%B0%D0%BC%D0%B8-2019.pdf">
              <DownloadIcon size={33} className={styles.svg} />
            </a>
          </div>
        </div>

        <div className={styles.flexCol3}>
          <div className={styles.text}>
            <h2>Набор документов, необходимых для заказчика</h2>
            <small>
              Если у вас есть заказчик, вы можете заполнить с ним данные
              документы и передать на их кафедру
            </small>
          </div>
          <div className={styles.filler}></div>
          <div className={styles.IconWrapper}>
            <a href="http://iskd.sutd.ru/wp-content/uploads/2015/05/%D0%9E%D1%82%D0%B7%D1%8B%D0%B2-%D0%BE-%D0%BF%D1%80%D0%BE%D1%85%D0%BE%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D0%B8-%D0%BF%D1%80%D0%B5%D0%B4%D0%B4%D0%B8%D0%BF%D0%BB%D0%BE%D0%BC%D0%BD%D0%BE%D0%B9-%D0%BF%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D0%B8-%D0%BE%D1%82-%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8-2016.doc">
              <DownloadIcon size={33} className={styles.svg} />
            </a>
          </div>
        </div>

        <div className={styles.flexCol3}>
          <div className={styles.text}>
            <h2>Набор необходимых документов</h2>
            <small>
              Документы необходимо заполнить, распечатать, подписать и отнести
              на кафедру
            </small>
          </div>
          <div className={styles.filler}></div>
          <div className={styles.IconWrapper}>
            <a href="http://iskd.sutd.ru/wp-content/uploads/2015/05/%D0%A2%D0%B8%D1%82%D1%83%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%BB%D0%B8%D1%81%D1%82-%D0%92%D0%9A%D0%A0-2019.doc">
              <DownloadIcon size={33} className={styles.svg} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
