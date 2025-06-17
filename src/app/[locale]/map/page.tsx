import styles from "./styles.module.css";
import FloorPlan from './FloorPlan/Index'
export const dynamic = 'force-static'

const index = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h1 className={styles.local}>КАРТА КАФЕДРЫ</h1>
        </div>
        <FloorPlan></FloorPlan>
      </div>
    </div>
  );
};

export default index;
