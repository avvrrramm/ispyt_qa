// src/utils/validation.js
export function validateFields(name, description) {
  if (!name || name.length < 2 || name.length > 50) {
    return { valid: false, error: "Назва повинна містити від 2 до 50 символів" };
  }

  if (description && description.length > 300) {
    return { valid: false, error: "Опис не повинен перевищувати 300 символів" };
  }

  return { valid: true };
}
