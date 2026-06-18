/**
 * @file TimeVelocityTelemetry.ts
 * @description Pacing telemetry quantifying speed-accuracy tradeoffs per question format.
 */
export class TimeVelocityTelemetry {
  public static analyzePacing(timesPerQuestionSeconds: number[]): { averageSeconds: number; medianSeconds: number; slowOutliersCount: number } {
    if (timesPerQuestionSeconds.length === 0) return { averageSeconds: 0, medianSeconds: 0, slowOutliersCount: 0 };
    const sorted = [...timesPerQuestionSeconds].sort((a, b) => a - b);
    const avg = sorted.reduce((a, b) => a + b, 0) / sorted.length;
    const med = sorted[Math.floor(sorted.length / 2)];
    const slow = sorted.filter(t => t > avg * 1.75).length;
    return {
      averageSeconds: Math.round(avg),
      medianSeconds: med,
      slowOutliersCount: slow,
    };
  }
}

export class VelocityPacingCurve_1 {
  public readonly curveId = 'VPC_0001';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_1 = new VelocityPacingCurve_1();


export class VelocityPacingCurve_2 {
  public readonly curveId = 'VPC_0002';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_2 = new VelocityPacingCurve_2();


export class VelocityPacingCurve_3 {
  public readonly curveId = 'VPC_0003';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_3 = new VelocityPacingCurve_3();


export class VelocityPacingCurve_4 {
  public readonly curveId = 'VPC_0004';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_4 = new VelocityPacingCurve_4();


export class VelocityPacingCurve_5 {
  public readonly curveId = 'VPC_0005';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_5 = new VelocityPacingCurve_5();


export class VelocityPacingCurve_6 {
  public readonly curveId = 'VPC_0006';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_6 = new VelocityPacingCurve_6();


export class VelocityPacingCurve_7 {
  public readonly curveId = 'VPC_0007';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_7 = new VelocityPacingCurve_7();


export class VelocityPacingCurve_8 {
  public readonly curveId = 'VPC_0008';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_8 = new VelocityPacingCurve_8();


export class VelocityPacingCurve_9 {
  public readonly curveId = 'VPC_0009';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_9 = new VelocityPacingCurve_9();


export class VelocityPacingCurve_10 {
  public readonly curveId = 'VPC_0010';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_10 = new VelocityPacingCurve_10();


export class VelocityPacingCurve_11 {
  public readonly curveId = 'VPC_0011';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_11 = new VelocityPacingCurve_11();


export class VelocityPacingCurve_12 {
  public readonly curveId = 'VPC_0012';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_12 = new VelocityPacingCurve_12();


export class VelocityPacingCurve_13 {
  public readonly curveId = 'VPC_0013';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_13 = new VelocityPacingCurve_13();


export class VelocityPacingCurve_14 {
  public readonly curveId = 'VPC_0014';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_14 = new VelocityPacingCurve_14();


export class VelocityPacingCurve_15 {
  public readonly curveId = 'VPC_0015';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_15 = new VelocityPacingCurve_15();


export class VelocityPacingCurve_16 {
  public readonly curveId = 'VPC_0016';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_16 = new VelocityPacingCurve_16();


export class VelocityPacingCurve_17 {
  public readonly curveId = 'VPC_0017';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_17 = new VelocityPacingCurve_17();


export class VelocityPacingCurve_18 {
  public readonly curveId = 'VPC_0018';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_18 = new VelocityPacingCurve_18();


export class VelocityPacingCurve_19 {
  public readonly curveId = 'VPC_0019';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_19 = new VelocityPacingCurve_19();


export class VelocityPacingCurve_20 {
  public readonly curveId = 'VPC_0020';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_20 = new VelocityPacingCurve_20();


export class VelocityPacingCurve_21 {
  public readonly curveId = 'VPC_0021';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_21 = new VelocityPacingCurve_21();


export class VelocityPacingCurve_22 {
  public readonly curveId = 'VPC_0022';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_22 = new VelocityPacingCurve_22();


export class VelocityPacingCurve_23 {
  public readonly curveId = 'VPC_0023';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_23 = new VelocityPacingCurve_23();


export class VelocityPacingCurve_24 {
  public readonly curveId = 'VPC_0024';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_24 = new VelocityPacingCurve_24();


export class VelocityPacingCurve_25 {
  public readonly curveId = 'VPC_0025';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_25 = new VelocityPacingCurve_25();


export class VelocityPacingCurve_26 {
  public readonly curveId = 'VPC_0026';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_26 = new VelocityPacingCurve_26();


export class VelocityPacingCurve_27 {
  public readonly curveId = 'VPC_0027';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_27 = new VelocityPacingCurve_27();


export class VelocityPacingCurve_28 {
  public readonly curveId = 'VPC_0028';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_28 = new VelocityPacingCurve_28();


export class VelocityPacingCurve_29 {
  public readonly curveId = 'VPC_0029';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_29 = new VelocityPacingCurve_29();


export class VelocityPacingCurve_30 {
  public readonly curveId = 'VPC_0030';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_30 = new VelocityPacingCurve_30();


export class VelocityPacingCurve_31 {
  public readonly curveId = 'VPC_0031';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_31 = new VelocityPacingCurve_31();


export class VelocityPacingCurve_32 {
  public readonly curveId = 'VPC_0032';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_32 = new VelocityPacingCurve_32();


export class VelocityPacingCurve_33 {
  public readonly curveId = 'VPC_0033';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_33 = new VelocityPacingCurve_33();


export class VelocityPacingCurve_34 {
  public readonly curveId = 'VPC_0034';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_34 = new VelocityPacingCurve_34();


export class VelocityPacingCurve_35 {
  public readonly curveId = 'VPC_0035';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_35 = new VelocityPacingCurve_35();


export class VelocityPacingCurve_36 {
  public readonly curveId = 'VPC_0036';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_36 = new VelocityPacingCurve_36();


export class VelocityPacingCurve_37 {
  public readonly curveId = 'VPC_0037';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_37 = new VelocityPacingCurve_37();


export class VelocityPacingCurve_38 {
  public readonly curveId = 'VPC_0038';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_38 = new VelocityPacingCurve_38();


export class VelocityPacingCurve_39 {
  public readonly curveId = 'VPC_0039';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_39 = new VelocityPacingCurve_39();


export class VelocityPacingCurve_40 {
  public readonly curveId = 'VPC_0040';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_40 = new VelocityPacingCurve_40();


export class VelocityPacingCurve_41 {
  public readonly curveId = 'VPC_0041';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_41 = new VelocityPacingCurve_41();


export class VelocityPacingCurve_42 {
  public readonly curveId = 'VPC_0042';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_42 = new VelocityPacingCurve_42();


export class VelocityPacingCurve_43 {
  public readonly curveId = 'VPC_0043';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_43 = new VelocityPacingCurve_43();


export class VelocityPacingCurve_44 {
  public readonly curveId = 'VPC_0044';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_44 = new VelocityPacingCurve_44();


export class VelocityPacingCurve_45 {
  public readonly curveId = 'VPC_0045';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_45 = new VelocityPacingCurve_45();


export class VelocityPacingCurve_46 {
  public readonly curveId = 'VPC_0046';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_46 = new VelocityPacingCurve_46();


export class VelocityPacingCurve_47 {
  public readonly curveId = 'VPC_0047';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_47 = new VelocityPacingCurve_47();


export class VelocityPacingCurve_48 {
  public readonly curveId = 'VPC_0048';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_48 = new VelocityPacingCurve_48();


export class VelocityPacingCurve_49 {
  public readonly curveId = 'VPC_0049';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_49 = new VelocityPacingCurve_49();


export class VelocityPacingCurve_50 {
  public readonly curveId = 'VPC_0050';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_50 = new VelocityPacingCurve_50();


export class VelocityPacingCurve_51 {
  public readonly curveId = 'VPC_0051';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_51 = new VelocityPacingCurve_51();


export class VelocityPacingCurve_52 {
  public readonly curveId = 'VPC_0052';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_52 = new VelocityPacingCurve_52();


export class VelocityPacingCurve_53 {
  public readonly curveId = 'VPC_0053';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_53 = new VelocityPacingCurve_53();


export class VelocityPacingCurve_54 {
  public readonly curveId = 'VPC_0054';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_54 = new VelocityPacingCurve_54();


export class VelocityPacingCurve_55 {
  public readonly curveId = 'VPC_0055';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_55 = new VelocityPacingCurve_55();


export class VelocityPacingCurve_56 {
  public readonly curveId = 'VPC_0056';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_56 = new VelocityPacingCurve_56();


export class VelocityPacingCurve_57 {
  public readonly curveId = 'VPC_0057';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_57 = new VelocityPacingCurve_57();


export class VelocityPacingCurve_58 {
  public readonly curveId = 'VPC_0058';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_58 = new VelocityPacingCurve_58();


export class VelocityPacingCurve_59 {
  public readonly curveId = 'VPC_0059';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_59 = new VelocityPacingCurve_59();


export class VelocityPacingCurve_60 {
  public readonly curveId = 'VPC_0060';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_60 = new VelocityPacingCurve_60();


export class VelocityPacingCurve_61 {
  public readonly curveId = 'VPC_0061';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_61 = new VelocityPacingCurve_61();


export class VelocityPacingCurve_62 {
  public readonly curveId = 'VPC_0062';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_62 = new VelocityPacingCurve_62();


export class VelocityPacingCurve_63 {
  public readonly curveId = 'VPC_0063';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_63 = new VelocityPacingCurve_63();


export class VelocityPacingCurve_64 {
  public readonly curveId = 'VPC_0064';
  public isPacingOptimal(sec: number): boolean {
    return sec >= 45 && sec <= 90;
  }
}
export const velocityPacing_64 = new VelocityPacingCurve_64();
