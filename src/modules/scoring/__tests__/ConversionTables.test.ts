/**
 * @file ConversionTables.test.ts
 * @description Validates monotonicity and limits of Cambridge raw-to-band conversion tables.
 */
import { ACADEMIC_READING_RAW_TABLE } from '../tables/AcademicReadingConversionTable';
import { LISTENING_RAW_TABLE } from '../tables/ListeningConversionTable';
import { GENERAL_READING_RAW_TABLE } from '../tables/GeneralReadingConversionTable';

describe('Conversion Tables Monotonicity Suite', () => {
  it('verifies Academic Reading table is strictly non-decreasing', () => {
    for (let r = 1; r <= 40; r++) {
      expect(ACADEMIC_READING_RAW_TABLE[r]).toBeGreaterThanOrEqual(ACADEMIC_READING_RAW_TABLE[r - 1]);
    }
  });

  it('verifies Listening table is strictly non-decreasing', () => {
    for (let r = 1; r <= 40; r++) {
      expect(LISTENING_RAW_TABLE[r]).toBeGreaterThanOrEqual(LISTENING_RAW_TABLE[r - 1]);
    }
  });

  it('verifies General Training Reading table is strictly non-decreasing', () => {
    for (let r = 1; r <= 40; r++) {
      expect(GENERAL_READING_RAW_TABLE[r]).toBeGreaterThanOrEqual(GENERAL_READING_RAW_TABLE[r - 1]);
    }
  });
});

describe('Conversion table entry verification 1', () => {
  it('checks raw score 1 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[1];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 2', () => {
  it('checks raw score 2 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[2];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 3', () => {
  it('checks raw score 3 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[3];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 4', () => {
  it('checks raw score 4 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[4];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 5', () => {
  it('checks raw score 5 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[5];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 6', () => {
  it('checks raw score 6 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[6];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 7', () => {
  it('checks raw score 7 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[7];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 8', () => {
  it('checks raw score 8 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[8];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 9', () => {
  it('checks raw score 9 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[9];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 10', () => {
  it('checks raw score 10 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[10];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 11', () => {
  it('checks raw score 11 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[11];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 12', () => {
  it('checks raw score 12 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[12];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 13', () => {
  it('checks raw score 13 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[13];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 14', () => {
  it('checks raw score 14 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[14];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 15', () => {
  it('checks raw score 15 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[15];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 16', () => {
  it('checks raw score 16 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[16];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 17', () => {
  it('checks raw score 17 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[17];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 18', () => {
  it('checks raw score 18 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[18];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 19', () => {
  it('checks raw score 19 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[19];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 20', () => {
  it('checks raw score 20 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[20];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 21', () => {
  it('checks raw score 21 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[21];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 22', () => {
  it('checks raw score 22 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[22];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 23', () => {
  it('checks raw score 23 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[23];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 24', () => {
  it('checks raw score 24 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[24];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 25', () => {
  it('checks raw score 25 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[25];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 26', () => {
  it('checks raw score 26 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[26];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 27', () => {
  it('checks raw score 27 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[27];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 28', () => {
  it('checks raw score 28 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[28];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 29', () => {
  it('checks raw score 29 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[29];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 30', () => {
  it('checks raw score 30 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[30];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 31', () => {
  it('checks raw score 31 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[31];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 32', () => {
  it('checks raw score 32 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[32];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 33', () => {
  it('checks raw score 33 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[33];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 34', () => {
  it('checks raw score 34 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[34];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 35', () => {
  it('checks raw score 35 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[35];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 36', () => {
  it('checks raw score 36 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[36];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 37', () => {
  it('checks raw score 37 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[37];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 38', () => {
  it('checks raw score 38 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[38];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 39', () => {
  it('checks raw score 39 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[39];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 40', () => {
  it('checks raw score 0 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[0];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 41', () => {
  it('checks raw score 1 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[1];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 42', () => {
  it('checks raw score 2 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[2];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 43', () => {
  it('checks raw score 3 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[3];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});


describe('Conversion table entry verification 44', () => {
  it('checks raw score 4 boundary constraints', () => {
    const val = ACADEMIC_READING_RAW_TABLE[4];
    expect(val).toBeLessThanOrEqual(9.0);
    expect(val).toBeGreaterThanOrEqual(0.0);
  });
});
