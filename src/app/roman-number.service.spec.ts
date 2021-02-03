import { RomanNumberService } from './roman-number.service';

describe('RomanNumberService', () => {
  let sut: RomanNumberService;

  beforeEach(() => {
    sut = new RomanNumberService();
  });

  describe('transform', () => {
    test('should return I for 1', () => {
      // Arrange
      const value = 1;

      // Act
      const result = sut.transform(value);

      // Assert
      expect(result).toBe('I');
    });

    test('should return II for 2', () => {
      const value = 2;

      const result = sut.transform(value);

      expect(result).toBe('II');
    });

    test.each`
      value | expected
      ${1}  | ${'I'}
      ${2}  | ${'II'}
      ${3}  | ${'III'}
    `('should return $expected for $value', ({ value, expected }) => {
      const result = sut.transform(value);

      expect(result).toBe(expected);
    });
  });
});
