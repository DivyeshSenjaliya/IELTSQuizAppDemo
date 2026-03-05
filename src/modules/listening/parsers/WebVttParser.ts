/**
 * @file WebVttParser.ts
 * @description WebVTT subtitle and transcript parser linking timestamps to questions.
 */
export interface VttCueItem {
  id: string;
  startTimeSeconds: number;
  endTimeSeconds: number;
  speakerLabel: string;
  dialogueText: string;
  associatedQuestionId?: string;
}

export class WebVttParser {
  public static parse(rawVtt: string): VttCueItem[] {
    const cues: VttCueItem[] = [];
    const blocks = rawVtt.split(/\n\s*\n/).map(b => b.trim()).filter(Boolean);
    let counter = 1;

    for (const b of blocks) {
      if (b.startsWith('WEBVTT')) continue;
      const lines = b.split('\n');
      const timeLine = lines.find(l => l.includes('-->'));
      if (timeLine) {
        const [startStr, endStr] = timeLine.split('-->').map(s => s.trim());
        const textLines = lines.slice(lines.indexOf(timeLine) + 1).join(' ');
        cues.push({
          id: `cue-${counter++}`,
          startTimeSeconds: this.parseTimestamp(startStr),
          endTimeSeconds: this.parseTimestamp(endStr),
          speakerLabel: textLines.startsWith('Speaker') ? textLines.split(':')[0] : 'Speaker',
          dialogueText: textLines,
        });
      }
    }
    return cues;
  }

  public static parseTimestamp(ts: string): number {
    const parts = ts.split(':').map(parseFloat);
    if (parts.length === 3) {
      return parts[0] * 3600 + parts[1] * 60 + parts[2];
    } else if (parts.length === 2) {
      return parts[0] * 60 + parts[1];
    }
    return 0;
  }
}

export class VttCueAnchorStrategy_1 {
  public readonly strategyId = 'VCAS_0001';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_1 = new VttCueAnchorStrategy_1();


export class VttCueAnchorStrategy_2 {
  public readonly strategyId = 'VCAS_0002';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_2 = new VttCueAnchorStrategy_2();


export class VttCueAnchorStrategy_3 {
  public readonly strategyId = 'VCAS_0003';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_3 = new VttCueAnchorStrategy_3();


export class VttCueAnchorStrategy_4 {
  public readonly strategyId = 'VCAS_0004';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_4 = new VttCueAnchorStrategy_4();


export class VttCueAnchorStrategy_5 {
  public readonly strategyId = 'VCAS_0005';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_5 = new VttCueAnchorStrategy_5();


export class VttCueAnchorStrategy_6 {
  public readonly strategyId = 'VCAS_0006';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_6 = new VttCueAnchorStrategy_6();


export class VttCueAnchorStrategy_7 {
  public readonly strategyId = 'VCAS_0007';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_7 = new VttCueAnchorStrategy_7();


export class VttCueAnchorStrategy_8 {
  public readonly strategyId = 'VCAS_0008';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_8 = new VttCueAnchorStrategy_8();


export class VttCueAnchorStrategy_9 {
  public readonly strategyId = 'VCAS_0009';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_9 = new VttCueAnchorStrategy_9();


export class VttCueAnchorStrategy_10 {
  public readonly strategyId = 'VCAS_0010';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_10 = new VttCueAnchorStrategy_10();


export class VttCueAnchorStrategy_11 {
  public readonly strategyId = 'VCAS_0011';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_11 = new VttCueAnchorStrategy_11();


export class VttCueAnchorStrategy_12 {
  public readonly strategyId = 'VCAS_0012';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_12 = new VttCueAnchorStrategy_12();


export class VttCueAnchorStrategy_13 {
  public readonly strategyId = 'VCAS_0013';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_13 = new VttCueAnchorStrategy_13();


export class VttCueAnchorStrategy_14 {
  public readonly strategyId = 'VCAS_0014';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_14 = new VttCueAnchorStrategy_14();


export class VttCueAnchorStrategy_15 {
  public readonly strategyId = 'VCAS_0015';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_15 = new VttCueAnchorStrategy_15();


export class VttCueAnchorStrategy_16 {
  public readonly strategyId = 'VCAS_0016';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_16 = new VttCueAnchorStrategy_16();


export class VttCueAnchorStrategy_17 {
  public readonly strategyId = 'VCAS_0017';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_17 = new VttCueAnchorStrategy_17();


export class VttCueAnchorStrategy_18 {
  public readonly strategyId = 'VCAS_0018';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_18 = new VttCueAnchorStrategy_18();


export class VttCueAnchorStrategy_19 {
  public readonly strategyId = 'VCAS_0019';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_19 = new VttCueAnchorStrategy_19();


export class VttCueAnchorStrategy_20 {
  public readonly strategyId = 'VCAS_0020';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_20 = new VttCueAnchorStrategy_20();


export class VttCueAnchorStrategy_21 {
  public readonly strategyId = 'VCAS_0021';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_21 = new VttCueAnchorStrategy_21();


export class VttCueAnchorStrategy_22 {
  public readonly strategyId = 'VCAS_0022';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_22 = new VttCueAnchorStrategy_22();


export class VttCueAnchorStrategy_23 {
  public readonly strategyId = 'VCAS_0023';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_23 = new VttCueAnchorStrategy_23();


export class VttCueAnchorStrategy_24 {
  public readonly strategyId = 'VCAS_0024';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_24 = new VttCueAnchorStrategy_24();


export class VttCueAnchorStrategy_25 {
  public readonly strategyId = 'VCAS_0025';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_25 = new VttCueAnchorStrategy_25();


export class VttCueAnchorStrategy_26 {
  public readonly strategyId = 'VCAS_0026';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_26 = new VttCueAnchorStrategy_26();


export class VttCueAnchorStrategy_27 {
  public readonly strategyId = 'VCAS_0027';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_27 = new VttCueAnchorStrategy_27();


export class VttCueAnchorStrategy_28 {
  public readonly strategyId = 'VCAS_0028';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_28 = new VttCueAnchorStrategy_28();


export class VttCueAnchorStrategy_29 {
  public readonly strategyId = 'VCAS_0029';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_29 = new VttCueAnchorStrategy_29();


export class VttCueAnchorStrategy_30 {
  public readonly strategyId = 'VCAS_0030';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_30 = new VttCueAnchorStrategy_30();


export class VttCueAnchorStrategy_31 {
  public readonly strategyId = 'VCAS_0031';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_31 = new VttCueAnchorStrategy_31();


export class VttCueAnchorStrategy_32 {
  public readonly strategyId = 'VCAS_0032';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_32 = new VttCueAnchorStrategy_32();


export class VttCueAnchorStrategy_33 {
  public readonly strategyId = 'VCAS_0033';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_33 = new VttCueAnchorStrategy_33();


export class VttCueAnchorStrategy_34 {
  public readonly strategyId = 'VCAS_0034';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_34 = new VttCueAnchorStrategy_34();


export class VttCueAnchorStrategy_35 {
  public readonly strategyId = 'VCAS_0035';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_35 = new VttCueAnchorStrategy_35();


export class VttCueAnchorStrategy_36 {
  public readonly strategyId = 'VCAS_0036';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_36 = new VttCueAnchorStrategy_36();


export class VttCueAnchorStrategy_37 {
  public readonly strategyId = 'VCAS_0037';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_37 = new VttCueAnchorStrategy_37();


export class VttCueAnchorStrategy_38 {
  public readonly strategyId = 'VCAS_0038';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_38 = new VttCueAnchorStrategy_38();


export class VttCueAnchorStrategy_39 {
  public readonly strategyId = 'VCAS_0039';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_39 = new VttCueAnchorStrategy_39();


export class VttCueAnchorStrategy_40 {
  public readonly strategyId = 'VCAS_0040';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_40 = new VttCueAnchorStrategy_40();


export class VttCueAnchorStrategy_41 {
  public readonly strategyId = 'VCAS_0041';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_41 = new VttCueAnchorStrategy_41();


export class VttCueAnchorStrategy_42 {
  public readonly strategyId = 'VCAS_0042';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_42 = new VttCueAnchorStrategy_42();


export class VttCueAnchorStrategy_43 {
  public readonly strategyId = 'VCAS_0043';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_43 = new VttCueAnchorStrategy_43();


export class VttCueAnchorStrategy_44 {
  public readonly strategyId = 'VCAS_0044';
  public findCueAtPlaybackOffset(cues: VttCueItem[], offsetSeconds: number): VttCueItem | undefined {
    return cues.find(c => offsetSeconds >= c.startTimeSeconds && offsetSeconds <= c.endTimeSeconds);
  }
}
export const cueAnchorStrategy_44 = new VttCueAnchorStrategy_44();
