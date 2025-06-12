import clsx from "clsx";
import styles from "./styles.module.css";
import FooterLink from "../../shared/assets/icons/svg-raw/FooterLink.svg?react";
import Phone from "../../shared/assets/icons/svg-raw/Phone.svg?react";
import Map from "../../shared/assets/icons/svg-raw/Map.svg?react";
import Email from "../../shared/assets/icons/svg-raw/Email.svg?react";

const index = () => {
  return (
    <footer className={styles.footer}>
      <h1  className={clsx("alt", styles.pad)}>КОНТАКТЫ</h1>
      <div className={styles.footerUpper}>
        <div className={styles.datablock}>
          <h4>КАФЕДРА</h4>

          <div className={styles.borderBlock}>
            <a
              href="https://maps.apple.com/?q=Вознесенский пр., д. 46"
              className={clsx(styles.phoneBlock, "left", styles.extraMargin)}
            >
              <div className={styles.inline}>
                <p className="alt2">Вознесенский пр., д. 46, каб. 452-463</p>
                <Map></Map>
              </div>
              <small className="alt">Адрес</small>
            </a>

            <a
              href="tel:8125704064"
              className={clsx(styles.phoneBlock, "left", styles.extraMargin)}
            >
              <div className={styles.inline}>
                <p className="alt2">570-40-64</p>
                <Phone></Phone>
              </div>
              <small className="alt">Телефон</small>
            </a>

            <a
              href="mailto:iskd@sutd.ru"
              className={clsx(styles.phoneBlock, "left", styles.extraMargin)}
            >
              <div className={styles.inline}>
                <p className="alt2">iskd@sutd.ru</p>
                <Email></Email>
              </div>
              <small className="alt">Адрес электронной почты</small>
            </a>
          </div>
        </div>

        <div className={styles.datablock}>
          <h4>ДИРЕКТОРАТ ИИТА</h4>

          <div className={styles.borderBlock}>
            <a
              href="https://maps.apple.com/?q=ул. Большая Морская, д. 18"
              className={clsx(styles.phoneBlock, "left", styles.extraMargin)}
            >
              <div className={styles.inline}>
                <p className="alt2">ул. Большая Морская, д. 18, каб. 425</p>
                <Map></Map>
              </div>
              <small className="alt">Адрес</small>
            </a>

            <a
              href="tel:8123151277"
              className={clsx(styles.phoneBlock, "left", styles.extraMargin)}
            >
              <div className={styles.inline}>
                <p className="alt2">315-12-77</p>
                <Phone></Phone>
              </div>
              <small className="alt">Телефон</small>
            </a>

            <a
              href="mailto:iita.dekanat@mail.ru"
              className={clsx(styles.phoneBlock, "left", styles.extraMargin)}
            >
              <div className={styles.inline}>
                <p className="alt2">iita.dekanat@mail.ru</p>
                <Email></Email>
              </div>
              <small className="alt">Адрес электронной почты</small>
            </a>
          </div>
        </div>
      </div>

      <hr></hr>

      <div className={styles.urlWrapper}>
        <a href="https://sutd.ru" className={clsx(styles.phoneBlock, "left")}>
          <div className={styles.phoneBlock}>
            <div className={styles.inline}>
              <p className="alt2">sutd.ru</p>
              <FooterLink></FooterLink>
            </div>
            <small className="alt">Главный сайт университета</small>
          </div>
        </a>
        <a
          href="https://prouniver.ru"
          className={clsx(styles.phoneBlock, "left")}
        >
          <div className={styles.phoneBlock}>
            <div className={styles.inline}>
              <p className="alt2">prouniver.ru</p>
              <FooterLink></FooterLink>
            </div>
            <small className="alt">Сайт приемной комиссии</small>
          </div>
        </a>
        <a
          href="https://portal.sutd.ru"
          className={clsx(styles.phoneBlock, "left")}
        >
          <div className={styles.phoneBlock}>
            <div className={styles.inline}>
              <p className="alt2">portal.sutd.ru</p>
              <FooterLink></FooterLink>
            </div>
            <small className="alt">Сайт личного кабинета</small>
          </div>
        </a>
      </div>
    </footer>
  );
};

export default index;
