type response = {
  success: string;
  error: string;
};

export const ADD_ROW: response = {
  success: "Работа успешно добавлена",
  error: "Не удалось добавить работу",
};

export const DELETE_ROW: response = {
  success: "Работа успешно удалена",
  error: "Не удалось удалить работу",
};

export const UPDATE_ROW: response = {
  success: "Работа успешно изменена",
  error: "Не удалось изменить работу",
};
