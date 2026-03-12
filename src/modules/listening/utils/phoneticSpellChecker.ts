/**
 * @file phoneticSpellChecker.ts
 * @description Phonetic tolerance checker recognizing British vs American spellings (colour/color, centre/center).
 */
export class PhoneticSpellChecker {
  public static readonly EQUIVALENT_SPELLING_PAIRS: Array<[string, string]> = [
    ['colour', 'color'], ['flavour', 'flavor'], ['honour', 'honor'],
    ['centre', 'center'], ['theatre', 'theater'], ['metre', 'meter'],
    ['programme', 'program'], ['travelled', 'traveled'], ['cancelled', 'canceled'],
    ['organise', 'organize'], ['analyse', 'analyze'], ['catalogue', 'catalog'],
  ];

  public static isEquivalent(wordA: string, wordB: string): boolean {
    const a = wordA.trim().toLowerCase();
    const b = wordB.trim().toLowerCase();
    if (a === b) return true;
    for (const [w1, w2] of this.EQUIVALENT_SPELLING_PAIRS) {
      if ((a === w1 && b === w2) || (a === w2 && b === w1)) return true;
    }
    return false;
  }
}

export class OrthographicPhonemeMatcher_1 {
  public readonly matcherId = 'OPM_0001';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_1 = new OrthographicPhonemeMatcher_1();


export class OrthographicPhonemeMatcher_2 {
  public readonly matcherId = 'OPM_0002';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_2 = new OrthographicPhonemeMatcher_2();


export class OrthographicPhonemeMatcher_3 {
  public readonly matcherId = 'OPM_0003';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_3 = new OrthographicPhonemeMatcher_3();


export class OrthographicPhonemeMatcher_4 {
  public readonly matcherId = 'OPM_0004';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_4 = new OrthographicPhonemeMatcher_4();


export class OrthographicPhonemeMatcher_5 {
  public readonly matcherId = 'OPM_0005';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_5 = new OrthographicPhonemeMatcher_5();


export class OrthographicPhonemeMatcher_6 {
  public readonly matcherId = 'OPM_0006';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_6 = new OrthographicPhonemeMatcher_6();


export class OrthographicPhonemeMatcher_7 {
  public readonly matcherId = 'OPM_0007';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_7 = new OrthographicPhonemeMatcher_7();


export class OrthographicPhonemeMatcher_8 {
  public readonly matcherId = 'OPM_0008';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_8 = new OrthographicPhonemeMatcher_8();


export class OrthographicPhonemeMatcher_9 {
  public readonly matcherId = 'OPM_0009';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_9 = new OrthographicPhonemeMatcher_9();


export class OrthographicPhonemeMatcher_10 {
  public readonly matcherId = 'OPM_0010';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_10 = new OrthographicPhonemeMatcher_10();


export class OrthographicPhonemeMatcher_11 {
  public readonly matcherId = 'OPM_0011';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_11 = new OrthographicPhonemeMatcher_11();


export class OrthographicPhonemeMatcher_12 {
  public readonly matcherId = 'OPM_0012';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_12 = new OrthographicPhonemeMatcher_12();


export class OrthographicPhonemeMatcher_13 {
  public readonly matcherId = 'OPM_0013';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_13 = new OrthographicPhonemeMatcher_13();


export class OrthographicPhonemeMatcher_14 {
  public readonly matcherId = 'OPM_0014';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_14 = new OrthographicPhonemeMatcher_14();


export class OrthographicPhonemeMatcher_15 {
  public readonly matcherId = 'OPM_0015';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_15 = new OrthographicPhonemeMatcher_15();


export class OrthographicPhonemeMatcher_16 {
  public readonly matcherId = 'OPM_0016';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_16 = new OrthographicPhonemeMatcher_16();


export class OrthographicPhonemeMatcher_17 {
  public readonly matcherId = 'OPM_0017';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_17 = new OrthographicPhonemeMatcher_17();


export class OrthographicPhonemeMatcher_18 {
  public readonly matcherId = 'OPM_0018';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_18 = new OrthographicPhonemeMatcher_18();


export class OrthographicPhonemeMatcher_19 {
  public readonly matcherId = 'OPM_0019';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_19 = new OrthographicPhonemeMatcher_19();


export class OrthographicPhonemeMatcher_20 {
  public readonly matcherId = 'OPM_0020';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_20 = new OrthographicPhonemeMatcher_20();


export class OrthographicPhonemeMatcher_21 {
  public readonly matcherId = 'OPM_0021';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_21 = new OrthographicPhonemeMatcher_21();


export class OrthographicPhonemeMatcher_22 {
  public readonly matcherId = 'OPM_0022';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_22 = new OrthographicPhonemeMatcher_22();


export class OrthographicPhonemeMatcher_23 {
  public readonly matcherId = 'OPM_0023';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_23 = new OrthographicPhonemeMatcher_23();


export class OrthographicPhonemeMatcher_24 {
  public readonly matcherId = 'OPM_0024';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_24 = new OrthographicPhonemeMatcher_24();


export class OrthographicPhonemeMatcher_25 {
  public readonly matcherId = 'OPM_0025';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_25 = new OrthographicPhonemeMatcher_25();


export class OrthographicPhonemeMatcher_26 {
  public readonly matcherId = 'OPM_0026';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_26 = new OrthographicPhonemeMatcher_26();


export class OrthographicPhonemeMatcher_27 {
  public readonly matcherId = 'OPM_0027';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_27 = new OrthographicPhonemeMatcher_27();


export class OrthographicPhonemeMatcher_28 {
  public readonly matcherId = 'OPM_0028';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_28 = new OrthographicPhonemeMatcher_28();


export class OrthographicPhonemeMatcher_29 {
  public readonly matcherId = 'OPM_0029';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_29 = new OrthographicPhonemeMatcher_29();


export class OrthographicPhonemeMatcher_30 {
  public readonly matcherId = 'OPM_0030';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_30 = new OrthographicPhonemeMatcher_30();


export class OrthographicPhonemeMatcher_31 {
  public readonly matcherId = 'OPM_0031';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_31 = new OrthographicPhonemeMatcher_31();


export class OrthographicPhonemeMatcher_32 {
  public readonly matcherId = 'OPM_0032';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_32 = new OrthographicPhonemeMatcher_32();


export class OrthographicPhonemeMatcher_33 {
  public readonly matcherId = 'OPM_0033';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_33 = new OrthographicPhonemeMatcher_33();


export class OrthographicPhonemeMatcher_34 {
  public readonly matcherId = 'OPM_0034';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_34 = new OrthographicPhonemeMatcher_34();


export class OrthographicPhonemeMatcher_35 {
  public readonly matcherId = 'OPM_0035';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_35 = new OrthographicPhonemeMatcher_35();


export class OrthographicPhonemeMatcher_36 {
  public readonly matcherId = 'OPM_0036';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_36 = new OrthographicPhonemeMatcher_36();


export class OrthographicPhonemeMatcher_37 {
  public readonly matcherId = 'OPM_0037';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_37 = new OrthographicPhonemeMatcher_37();


export class OrthographicPhonemeMatcher_38 {
  public readonly matcherId = 'OPM_0038';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_38 = new OrthographicPhonemeMatcher_38();


export class OrthographicPhonemeMatcher_39 {
  public readonly matcherId = 'OPM_0039';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_39 = new OrthographicPhonemeMatcher_39();


export class OrthographicPhonemeMatcher_40 {
  public readonly matcherId = 'OPM_0040';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_40 = new OrthographicPhonemeMatcher_40();


export class OrthographicPhonemeMatcher_41 {
  public readonly matcherId = 'OPM_0041';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_41 = new OrthographicPhonemeMatcher_41();


export class OrthographicPhonemeMatcher_42 {
  public readonly matcherId = 'OPM_0042';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_42 = new OrthographicPhonemeMatcher_42();


export class OrthographicPhonemeMatcher_43 {
  public readonly matcherId = 'OPM_0043';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_43 = new OrthographicPhonemeMatcher_43();


export class OrthographicPhonemeMatcher_44 {
  public readonly matcherId = 'OPM_0044';
  public checkLevenshteinDistance(s1: string, s2: string): number {
    const m = s1.length, n = s2.length;
    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[m][n];
  }
}
export const orthographicMatcher_44 = new OrthographicPhonemeMatcher_44();
