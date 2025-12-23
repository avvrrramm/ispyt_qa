
import { validateFields } from './src/utils/validation.js';


describe('Валідація полів курсів (R1.12)', () => {
  
  test('TC1.2: Порожня назва курсу', () => {
    const result = validateFields("", "Лінійні рівняння");
    expect(result.valid).toBe(false);
    expect(result.error).toContain("Назва");
  });

  test('TC7.1: Назва 1 символ', () => {
    const result = validateFields("А", "Опис");
    expect(result.valid).toBe(false);
    expect(result.error).toContain("2-50");
  });

  test('TC7.3: Назва 51 символів', () => {
    const longName = "А".repeat(51);
    const result = validateFields(longName, "Опис");
    expect(result.valid).toBe(false);
    expect(result.error).toContain("50");
  });

  test('TC1.1: Валідні дані (валідація проходить)', () => {
    const result = validateFields("Алгебра 7", "Лінійні рівняння");
    expect(result.valid).toBe(true);
  });
});
