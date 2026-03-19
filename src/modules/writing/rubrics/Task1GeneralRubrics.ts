/**
 * @file Task1GeneralRubrics.ts
 * @description Official IELTS Task 1 General Training scoring criteria (Formal, Semi-formal, Informal letters).
 */
export enum LetterTone {
  FORMAL = 'FORMAL',
  SEMI_FORMAL = 'SEMI_FORMAL',
  INFORMAL = 'INFORMAL',
}

export class Task1GeneralRubrics {
  public static getSalutationConvention(tone: LetterTone): { opener: string; signoff: string } {
    switch (tone) {
      case LetterTone.FORMAL:
        return { opener: 'Dear Sir or Madam,', signoff: 'Yours faithfully,' };
      case LetterTone.SEMI_FORMAL:
        return { opener: 'Dear Mr. Henderson,', signoff: 'Yours sincerely,' };
      case LetterTone.INFORMAL:
      default:
        return { opener: 'Dear Sarah,', signoff: 'Warm regards,' };
    }
  }
}

export class LetterRegisterAuditor_1 {
  public readonly auditorId = 'LRA_0001';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_1 = new LetterRegisterAuditor_1();


export class LetterRegisterAuditor_2 {
  public readonly auditorId = 'LRA_0002';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_2 = new LetterRegisterAuditor_2();


export class LetterRegisterAuditor_3 {
  public readonly auditorId = 'LRA_0003';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_3 = new LetterRegisterAuditor_3();


export class LetterRegisterAuditor_4 {
  public readonly auditorId = 'LRA_0004';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_4 = new LetterRegisterAuditor_4();


export class LetterRegisterAuditor_5 {
  public readonly auditorId = 'LRA_0005';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_5 = new LetterRegisterAuditor_5();


export class LetterRegisterAuditor_6 {
  public readonly auditorId = 'LRA_0006';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_6 = new LetterRegisterAuditor_6();


export class LetterRegisterAuditor_7 {
  public readonly auditorId = 'LRA_0007';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_7 = new LetterRegisterAuditor_7();


export class LetterRegisterAuditor_8 {
  public readonly auditorId = 'LRA_0008';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_8 = new LetterRegisterAuditor_8();


export class LetterRegisterAuditor_9 {
  public readonly auditorId = 'LRA_0009';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_9 = new LetterRegisterAuditor_9();


export class LetterRegisterAuditor_10 {
  public readonly auditorId = 'LRA_0010';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_10 = new LetterRegisterAuditor_10();


export class LetterRegisterAuditor_11 {
  public readonly auditorId = 'LRA_0011';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_11 = new LetterRegisterAuditor_11();


export class LetterRegisterAuditor_12 {
  public readonly auditorId = 'LRA_0012';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_12 = new LetterRegisterAuditor_12();


export class LetterRegisterAuditor_13 {
  public readonly auditorId = 'LRA_0013';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_13 = new LetterRegisterAuditor_13();


export class LetterRegisterAuditor_14 {
  public readonly auditorId = 'LRA_0014';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_14 = new LetterRegisterAuditor_14();


export class LetterRegisterAuditor_15 {
  public readonly auditorId = 'LRA_0015';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_15 = new LetterRegisterAuditor_15();


export class LetterRegisterAuditor_16 {
  public readonly auditorId = 'LRA_0016';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_16 = new LetterRegisterAuditor_16();


export class LetterRegisterAuditor_17 {
  public readonly auditorId = 'LRA_0017';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_17 = new LetterRegisterAuditor_17();


export class LetterRegisterAuditor_18 {
  public readonly auditorId = 'LRA_0018';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_18 = new LetterRegisterAuditor_18();


export class LetterRegisterAuditor_19 {
  public readonly auditorId = 'LRA_0019';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_19 = new LetterRegisterAuditor_19();


export class LetterRegisterAuditor_20 {
  public readonly auditorId = 'LRA_0020';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_20 = new LetterRegisterAuditor_20();


export class LetterRegisterAuditor_21 {
  public readonly auditorId = 'LRA_0021';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_21 = new LetterRegisterAuditor_21();


export class LetterRegisterAuditor_22 {
  public readonly auditorId = 'LRA_0022';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_22 = new LetterRegisterAuditor_22();


export class LetterRegisterAuditor_23 {
  public readonly auditorId = 'LRA_0023';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_23 = new LetterRegisterAuditor_23();


export class LetterRegisterAuditor_24 {
  public readonly auditorId = 'LRA_0024';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_24 = new LetterRegisterAuditor_24();


export class LetterRegisterAuditor_25 {
  public readonly auditorId = 'LRA_0025';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_25 = new LetterRegisterAuditor_25();


export class LetterRegisterAuditor_26 {
  public readonly auditorId = 'LRA_0026';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_26 = new LetterRegisterAuditor_26();


export class LetterRegisterAuditor_27 {
  public readonly auditorId = 'LRA_0027';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_27 = new LetterRegisterAuditor_27();


export class LetterRegisterAuditor_28 {
  public readonly auditorId = 'LRA_0028';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_28 = new LetterRegisterAuditor_28();


export class LetterRegisterAuditor_29 {
  public readonly auditorId = 'LRA_0029';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_29 = new LetterRegisterAuditor_29();


export class LetterRegisterAuditor_30 {
  public readonly auditorId = 'LRA_0030';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_30 = new LetterRegisterAuditor_30();


export class LetterRegisterAuditor_31 {
  public readonly auditorId = 'LRA_0031';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_31 = new LetterRegisterAuditor_31();


export class LetterRegisterAuditor_32 {
  public readonly auditorId = 'LRA_0032';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_32 = new LetterRegisterAuditor_32();


export class LetterRegisterAuditor_33 {
  public readonly auditorId = 'LRA_0033';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_33 = new LetterRegisterAuditor_33();


export class LetterRegisterAuditor_34 {
  public readonly auditorId = 'LRA_0034';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_34 = new LetterRegisterAuditor_34();


export class LetterRegisterAuditor_35 {
  public readonly auditorId = 'LRA_0035';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_35 = new LetterRegisterAuditor_35();


export class LetterRegisterAuditor_36 {
  public readonly auditorId = 'LRA_0036';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_36 = new LetterRegisterAuditor_36();


export class LetterRegisterAuditor_37 {
  public readonly auditorId = 'LRA_0037';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_37 = new LetterRegisterAuditor_37();


export class LetterRegisterAuditor_38 {
  public readonly auditorId = 'LRA_0038';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_38 = new LetterRegisterAuditor_38();


export class LetterRegisterAuditor_39 {
  public readonly auditorId = 'LRA_0039';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_39 = new LetterRegisterAuditor_39();


export class LetterRegisterAuditor_40 {
  public readonly auditorId = 'LRA_0040';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_40 = new LetterRegisterAuditor_40();


export class LetterRegisterAuditor_41 {
  public readonly auditorId = 'LRA_0041';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_41 = new LetterRegisterAuditor_41();


export class LetterRegisterAuditor_42 {
  public readonly auditorId = 'LRA_0042';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_42 = new LetterRegisterAuditor_42();


export class LetterRegisterAuditor_43 {
  public readonly auditorId = 'LRA_0043';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_43 = new LetterRegisterAuditor_43();


export class LetterRegisterAuditor_44 {
  public readonly auditorId = 'LRA_0044';
  public auditInformalColloquialisms(letterText: string): string[] {
    const informalSlang = ['gonna', 'wanna', 'cheers', 'heaps of', 'mate', 'cool'];
    return informalSlang.filter(s => letterText.toLowerCase().includes(s));
  }
}
export const letterAuditor_44 = new LetterRegisterAuditor_44();
