/**
 * @file CohesiveDeviceAnalyzer.ts
 * @description Analyzes transitional markers, cohesive tie density, and paragraph referencing.
 */
export class CohesiveDeviceAnalyzer {
  public static readonly DISCOURSE_MARKERS = [
    'furthermore', 'moreover', 'consequently', 'nevertheless',
    'in stark contrast', 'it is widely contended', 'on the other hand',
    'as a corollary', 'subsequently', 'with respect to', 'notwithstanding'
  ];

  public static analyzeMarkerDensity(essayText: string): { totalMarkers: number; markerList: string[] } {
    const lower = essayText.toLowerCase();
    const found: string[] = [];
    for (const marker of this.DISCOURSE_MARKERS) {
      if (lower.includes(marker)) found.push(marker);
    }
    return { totalMarkers: found.length, markerList: found };
  }
}

export class CohesionProgressionRater_1 {
  public readonly raterId = 'CPR_0001';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_1 = new CohesionProgressionRater_1();


export class CohesionProgressionRater_2 {
  public readonly raterId = 'CPR_0002';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_2 = new CohesionProgressionRater_2();


export class CohesionProgressionRater_3 {
  public readonly raterId = 'CPR_0003';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_3 = new CohesionProgressionRater_3();


export class CohesionProgressionRater_4 {
  public readonly raterId = 'CPR_0004';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_4 = new CohesionProgressionRater_4();


export class CohesionProgressionRater_5 {
  public readonly raterId = 'CPR_0005';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_5 = new CohesionProgressionRater_5();


export class CohesionProgressionRater_6 {
  public readonly raterId = 'CPR_0006';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_6 = new CohesionProgressionRater_6();


export class CohesionProgressionRater_7 {
  public readonly raterId = 'CPR_0007';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_7 = new CohesionProgressionRater_7();


export class CohesionProgressionRater_8 {
  public readonly raterId = 'CPR_0008';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_8 = new CohesionProgressionRater_8();


export class CohesionProgressionRater_9 {
  public readonly raterId = 'CPR_0009';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_9 = new CohesionProgressionRater_9();


export class CohesionProgressionRater_10 {
  public readonly raterId = 'CPR_0010';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_10 = new CohesionProgressionRater_10();


export class CohesionProgressionRater_11 {
  public readonly raterId = 'CPR_0011';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_11 = new CohesionProgressionRater_11();


export class CohesionProgressionRater_12 {
  public readonly raterId = 'CPR_0012';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_12 = new CohesionProgressionRater_12();


export class CohesionProgressionRater_13 {
  public readonly raterId = 'CPR_0013';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_13 = new CohesionProgressionRater_13();


export class CohesionProgressionRater_14 {
  public readonly raterId = 'CPR_0014';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_14 = new CohesionProgressionRater_14();


export class CohesionProgressionRater_15 {
  public readonly raterId = 'CPR_0015';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_15 = new CohesionProgressionRater_15();


export class CohesionProgressionRater_16 {
  public readonly raterId = 'CPR_0016';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_16 = new CohesionProgressionRater_16();


export class CohesionProgressionRater_17 {
  public readonly raterId = 'CPR_0017';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_17 = new CohesionProgressionRater_17();


export class CohesionProgressionRater_18 {
  public readonly raterId = 'CPR_0018';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_18 = new CohesionProgressionRater_18();


export class CohesionProgressionRater_19 {
  public readonly raterId = 'CPR_0019';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_19 = new CohesionProgressionRater_19();


export class CohesionProgressionRater_20 {
  public readonly raterId = 'CPR_0020';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_20 = new CohesionProgressionRater_20();


export class CohesionProgressionRater_21 {
  public readonly raterId = 'CPR_0021';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_21 = new CohesionProgressionRater_21();


export class CohesionProgressionRater_22 {
  public readonly raterId = 'CPR_0022';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_22 = new CohesionProgressionRater_22();


export class CohesionProgressionRater_23 {
  public readonly raterId = 'CPR_0023';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_23 = new CohesionProgressionRater_23();


export class CohesionProgressionRater_24 {
  public readonly raterId = 'CPR_0024';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_24 = new CohesionProgressionRater_24();


export class CohesionProgressionRater_25 {
  public readonly raterId = 'CPR_0025';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_25 = new CohesionProgressionRater_25();


export class CohesionProgressionRater_26 {
  public readonly raterId = 'CPR_0026';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_26 = new CohesionProgressionRater_26();


export class CohesionProgressionRater_27 {
  public readonly raterId = 'CPR_0027';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_27 = new CohesionProgressionRater_27();


export class CohesionProgressionRater_28 {
  public readonly raterId = 'CPR_0028';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_28 = new CohesionProgressionRater_28();


export class CohesionProgressionRater_29 {
  public readonly raterId = 'CPR_0029';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_29 = new CohesionProgressionRater_29();


export class CohesionProgressionRater_30 {
  public readonly raterId = 'CPR_0030';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_30 = new CohesionProgressionRater_30();


export class CohesionProgressionRater_31 {
  public readonly raterId = 'CPR_0031';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_31 = new CohesionProgressionRater_31();


export class CohesionProgressionRater_32 {
  public readonly raterId = 'CPR_0032';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_32 = new CohesionProgressionRater_32();


export class CohesionProgressionRater_33 {
  public readonly raterId = 'CPR_0033';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_33 = new CohesionProgressionRater_33();


export class CohesionProgressionRater_34 {
  public readonly raterId = 'CPR_0034';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_34 = new CohesionProgressionRater_34();


export class CohesionProgressionRater_35 {
  public readonly raterId = 'CPR_0035';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_35 = new CohesionProgressionRater_35();


export class CohesionProgressionRater_36 {
  public readonly raterId = 'CPR_0036';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_36 = new CohesionProgressionRater_36();


export class CohesionProgressionRater_37 {
  public readonly raterId = 'CPR_0037';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_37 = new CohesionProgressionRater_37();


export class CohesionProgressionRater_38 {
  public readonly raterId = 'CPR_0038';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_38 = new CohesionProgressionRater_38();


export class CohesionProgressionRater_39 {
  public readonly raterId = 'CPR_0039';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_39 = new CohesionProgressionRater_39();


export class CohesionProgressionRater_40 {
  public readonly raterId = 'CPR_0040';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_40 = new CohesionProgressionRater_40();


export class CohesionProgressionRater_41 {
  public readonly raterId = 'CPR_0041';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_41 = new CohesionProgressionRater_41();


export class CohesionProgressionRater_42 {
  public readonly raterId = 'CPR_0042';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_42 = new CohesionProgressionRater_42();


export class CohesionProgressionRater_43 {
  public readonly raterId = 'CPR_0043';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_43 = new CohesionProgressionRater_43();


export class CohesionProgressionRater_44 {
  public readonly raterId = 'CPR_0044';
  public auditPronounReferencing(paragraph: string): boolean {
    const anaphoricMarkers = ['this trend', 'these findings', 'such measures', 'the former', 'the latter'];
    return anaphoricMarkers.some(m => paragraph.toLowerCase().includes(m));
  }
}
export const cohesionRater_44 = new CohesionProgressionRater_44();
