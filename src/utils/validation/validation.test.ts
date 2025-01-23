import { describe, it, expect } from 'vitest';
import { validateEmail, validateRequired } from '../validation/validation';

describe('Validation Functions', () => {
  
  describe('validateEmail', () => {
    it('should return true for a valid email', () => {
      const validEmail = 'test@example.com';
      expect(validateEmail(validEmail)).toBe(true);
    });

    it('should return false for an invalid email with missing @', () => {
      const invalidEmail = 'testexample.com';
      expect(validateEmail(invalidEmail)).toBe(false);
    });

    it('should return false for an invalid email with missing domain', () => {
      const invalidEmail = 'test@.com';
      expect(validateEmail(invalidEmail)).toBe(false);
    });

    it('should return false for an email with spaces', () => {
      const invalidEmail = ' test @example.com ';
      expect(validateEmail(invalidEmail)).toBe(false);
    });

    it('should return false for an email with multiple "@" symbols', () => {
      const invalidEmail = 'test@@example.com';
      expect(validateEmail(invalidEmail)).toBe(false);
    });

    it('should return true for a valid email with subdomains', () => {
      const validEmail = 'user@mail.example.com';
      expect(validateEmail(validEmail)).toBe(true);
    });
  });

  describe('validateRequired', () => {
    it('should return true for non-empty string', () => {
      const nonEmptyString = 'Hello';
      expect(validateRequired(nonEmptyString)).toBe(true);
    });

    it('should return false for an empty string', () => {
      const emptyString = '';
      expect(validateRequired(emptyString)).toBe(false);
    });

    it('should return false for a string with only spaces', () => {
      const spacesOnly = '    ';
      expect(validateRequired(spacesOnly)).toBe(false);
    });

    it('should return true for a string with leading or trailing spaces', () => {
      const stringWithSpaces = '   Hello   ';
      expect(validateRequired(stringWithSpaces)).toBe(true);
    });
  });

});
