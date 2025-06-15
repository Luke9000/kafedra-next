import React from "react";

const WeekParity: React.FC = () => {
  const getWeekParity = (): string | null => {
    const now = new Date();
    let year = now.getFullYear();

    // Если сейчас июль-август, недели не считаем
    if (now.getMonth() === 6 || now.getMonth() === 7) {
      return null;
    }

    // Если сейчас январь-июнь, то учебный год начался в прошлом году
    if (now.getMonth() < 8) {
      year -= 1;
    }

    // 1 сентября учебного года
    const firstSeptember = new Date(year, 8, 1);
    const firstWeekday = firstSeptember.getDay(); // День недели (0 - вс, 6 - сб)

    // Определяем четность первой недели
    const firstWeekEven = firstWeekday === 6 ||  firstWeekday === 0;

    // Определяем текущий номер недели относительно 1 сентября
    const diffDays = Math.floor((now.getTime() - firstSeptember.getTime()) / (1000 * 60 * 60 * 24));
    const currentWeekNumber = Math.floor((diffDays + firstSeptember.getDay()) / 7) + 1;

    // Возвращаем четность недели
    return (currentWeekNumber % 2 === 0) === firstWeekEven ? "четная" : "нечетная";
  };
  const weekParity = getWeekParity();
  return <p>Сейчас <strong>{weekParity}</strong> неделя ({weekParity === "нечетная"? 'числитель':'знаменатель'}) {} </p>;
};

export default WeekParity;