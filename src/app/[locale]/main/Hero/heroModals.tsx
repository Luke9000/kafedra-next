import styles from "./heroModals.module.css";
// import FooterLink from "../shared/assets/icons/svg-raw/FooterLink.svg?react";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
// import events from "../../../../../../Kafedra/src/entities/events";
import clsx from "clsx";

const events = [
  "/images/events/event1.webp",
  "/images/events/event2.webp",
  "/images/events/event3.webp",
  "/images/events/event4.webp",
];

export const Events = (
  <div className={styles.imageCont}>
    <h1 className={styles.bigText}>Мероприятия</h1>
    <small className={styles.title}>
      Ежегодно кафедра организует более 100 различных мероприятий: митапы,
      хакатоны, интенсивы, стендапы и многое другое
    </small>

    {events.map((item, index) => (
      <Image
        key={index}
        className={styles.img}
        src={item}
        alt={"1"}
        width={400}
        height={250}
      ></Image>
    ))}
  </div>
);

export const Kursi = (
  <>
    <h1 className={styles.bigText}>ПОДГОТОВИТЕЛЬНЫЕ КУРСЫ</h1>
    <small className={styles.title}>
      Ежегодно кафедра организует более 100 различных мероприятий: митапы,
      хакатоны, интенсивы, стендапы и многое другое
    </small>
    <p>
      Эти мероприятия позволяют студентам и преподавателям обмениваться опытом,
      развивать профессиональные навыки и оставаться в курсе современных
      тенденций в сфере информационных технологий. Активное участие способствует
      формированию сильного сообщества внутри кафедры и за её пределами.
    </p>
    <div className={styles.urlWrapper}>
      <a
        href="https://prouniver.ru/school/it"
        className={clsx(styles.phoneBlock, "left")}
      >
        <div className={styles.phoneBlock}>
          <div className={styles.inline}>
            <p>prouniver.ru - it</p>
            {/* <FooterLink className={styles.icon}></FooterLink> */}
            <ArrowTopRightIcon className={styles.icon}></ArrowTopRightIcon>
          </div>
          <small>Регистрация для поступающих на бакалавриат</small>
        </div>
      </a>
      <a
        href="https://prouniver.ru/school/Masters_Center"
        className={clsx(styles.phoneBlock, "left")}
      >
        <div className={styles.phoneBlock}>
          <div className={styles.inline}>
            <p>prouniver.ru - masters</p>
            {/* <FooterLink className={styles.icon}></FooterLink> */}
            <ArrowTopRightIcon className={styles.icon}></ArrowTopRightIcon>
          </div>
          <small>Регистрация для поступающих на магистратуру</small>
        </div>
      </a>
    </div>
  </>
);

export const CK = (
  <>
    <h1 className={styles.bigText}>Проект цифровая кафедра</h1>
    <small className={styles.title}>
      В рамках проекта &quot;Цифровая кафедра&quot; более 2000 студентов
      СПбГУПТД из разных направлений ежегодно осваивают современные цифровые
      компетенции.
    </small>
    <p>
      Проект реализуется с целью подготовки специалистов, востребованных в
      условиях цифровой трансформации экономики и промышленности. Студенты
      проходят обучение по ключевым ИТ-направлениям — от основ программирования
      и анализа данных до кибербезопасности и цифрового проектирования.
    </p>
    <p>
      Образовательная программа проекта разработана с участием профильных
      кафедр, преподавателей с практическим опытом и представителей индустрии.
      Обучение проводится в гибком формате: онлайн-курсы, интенсивы,
      мастер-классы и проектные работы.
    </p>
    <p>
      Цифровая кафедра помогает студентам различных специальностей — от дизайна
      до машиностроения — получить актуальные знания и навыки в области
      информационных технологий, что значительно расширяет их профессиональные
      горизонты и конкурентоспособность на рынке труда.
    </p>
  </>
);
