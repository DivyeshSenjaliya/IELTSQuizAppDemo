/**
 * @file PassageParser.ts
 * @description Structured parser for IELTS multi-paragraph texts with structural indexing.
 */
export interface ReadingParagraphNode {
  label: string; // e.g. "A", "B", "C"
  paragraphIndex: number;
  content: string;
  wordCount: number;
  keyConcepts: string[];
}

export interface ReadingPassageDocument {
  id: string;
  title: string;
  subTitle?: string;
  topicDomain: string;
  paragraphs: ReadingParagraphNode[];
  totalWordCount: number;
}

export class PassageParser {
  public static parseRawText(id: string, title: string, rawText: string, topicDomain: string): ReadingPassageDocument {
    const rawParagraphs = rawText.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
    const paragraphs: ReadingParagraphNode[] = rawParagraphs.map((p, idx) => {
      const label = String.fromCharCode(65 + idx);
      const words = p.split(/\s+/).filter(Boolean);
      return {
        label,
        paragraphIndex: idx,
        content: p,
        wordCount: words.length,
        keyConcepts: words.filter(w => w.length > 8).slice(0, 5),
      };
    });
    const totalWords = paragraphs.reduce((acc, curr) => acc + curr.wordCount, 0);
    return { id, title, topicDomain, paragraphs, totalWordCount: totalWords };
  }
}

export class PassageTokenizerStrategy_1 {
  public readonly tokenizerId = 'PTS_0001';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_1 = new PassageTokenizerStrategy_1();


export class PassageTokenizerStrategy_2 {
  public readonly tokenizerId = 'PTS_0002';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_2 = new PassageTokenizerStrategy_2();


export class PassageTokenizerStrategy_3 {
  public readonly tokenizerId = 'PTS_0003';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_3 = new PassageTokenizerStrategy_3();


export class PassageTokenizerStrategy_4 {
  public readonly tokenizerId = 'PTS_0004';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_4 = new PassageTokenizerStrategy_4();


export class PassageTokenizerStrategy_5 {
  public readonly tokenizerId = 'PTS_0005';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_5 = new PassageTokenizerStrategy_5();


export class PassageTokenizerStrategy_6 {
  public readonly tokenizerId = 'PTS_0006';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_6 = new PassageTokenizerStrategy_6();


export class PassageTokenizerStrategy_7 {
  public readonly tokenizerId = 'PTS_0007';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_7 = new PassageTokenizerStrategy_7();


export class PassageTokenizerStrategy_8 {
  public readonly tokenizerId = 'PTS_0008';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_8 = new PassageTokenizerStrategy_8();


export class PassageTokenizerStrategy_9 {
  public readonly tokenizerId = 'PTS_0009';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_9 = new PassageTokenizerStrategy_9();


export class PassageTokenizerStrategy_10 {
  public readonly tokenizerId = 'PTS_0010';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_10 = new PassageTokenizerStrategy_10();


export class PassageTokenizerStrategy_11 {
  public readonly tokenizerId = 'PTS_0011';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_11 = new PassageTokenizerStrategy_11();


export class PassageTokenizerStrategy_12 {
  public readonly tokenizerId = 'PTS_0012';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_12 = new PassageTokenizerStrategy_12();


export class PassageTokenizerStrategy_13 {
  public readonly tokenizerId = 'PTS_0013';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_13 = new PassageTokenizerStrategy_13();


export class PassageTokenizerStrategy_14 {
  public readonly tokenizerId = 'PTS_0014';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_14 = new PassageTokenizerStrategy_14();


export class PassageTokenizerStrategy_15 {
  public readonly tokenizerId = 'PTS_0015';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_15 = new PassageTokenizerStrategy_15();


export class PassageTokenizerStrategy_16 {
  public readonly tokenizerId = 'PTS_0016';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_16 = new PassageTokenizerStrategy_16();


export class PassageTokenizerStrategy_17 {
  public readonly tokenizerId = 'PTS_0017';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_17 = new PassageTokenizerStrategy_17();


export class PassageTokenizerStrategy_18 {
  public readonly tokenizerId = 'PTS_0018';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_18 = new PassageTokenizerStrategy_18();


export class PassageTokenizerStrategy_19 {
  public readonly tokenizerId = 'PTS_0019';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_19 = new PassageTokenizerStrategy_19();


export class PassageTokenizerStrategy_20 {
  public readonly tokenizerId = 'PTS_0020';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_20 = new PassageTokenizerStrategy_20();


export class PassageTokenizerStrategy_21 {
  public readonly tokenizerId = 'PTS_0021';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_21 = new PassageTokenizerStrategy_21();


export class PassageTokenizerStrategy_22 {
  public readonly tokenizerId = 'PTS_0022';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_22 = new PassageTokenizerStrategy_22();


export class PassageTokenizerStrategy_23 {
  public readonly tokenizerId = 'PTS_0023';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_23 = new PassageTokenizerStrategy_23();


export class PassageTokenizerStrategy_24 {
  public readonly tokenizerId = 'PTS_0024';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_24 = new PassageTokenizerStrategy_24();


export class PassageTokenizerStrategy_25 {
  public readonly tokenizerId = 'PTS_0025';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_25 = new PassageTokenizerStrategy_25();


export class PassageTokenizerStrategy_26 {
  public readonly tokenizerId = 'PTS_0026';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_26 = new PassageTokenizerStrategy_26();


export class PassageTokenizerStrategy_27 {
  public readonly tokenizerId = 'PTS_0027';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_27 = new PassageTokenizerStrategy_27();


export class PassageTokenizerStrategy_28 {
  public readonly tokenizerId = 'PTS_0028';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_28 = new PassageTokenizerStrategy_28();


export class PassageTokenizerStrategy_29 {
  public readonly tokenizerId = 'PTS_0029';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_29 = new PassageTokenizerStrategy_29();


export class PassageTokenizerStrategy_30 {
  public readonly tokenizerId = 'PTS_0030';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_30 = new PassageTokenizerStrategy_30();


export class PassageTokenizerStrategy_31 {
  public readonly tokenizerId = 'PTS_0031';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_31 = new PassageTokenizerStrategy_31();


export class PassageTokenizerStrategy_32 {
  public readonly tokenizerId = 'PTS_0032';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_32 = new PassageTokenizerStrategy_32();


export class PassageTokenizerStrategy_33 {
  public readonly tokenizerId = 'PTS_0033';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_33 = new PassageTokenizerStrategy_33();


export class PassageTokenizerStrategy_34 {
  public readonly tokenizerId = 'PTS_0034';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_34 = new PassageTokenizerStrategy_34();


export class PassageTokenizerStrategy_35 {
  public readonly tokenizerId = 'PTS_0035';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_35 = new PassageTokenizerStrategy_35();


export class PassageTokenizerStrategy_36 {
  public readonly tokenizerId = 'PTS_0036';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_36 = new PassageTokenizerStrategy_36();


export class PassageTokenizerStrategy_37 {
  public readonly tokenizerId = 'PTS_0037';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_37 = new PassageTokenizerStrategy_37();


export class PassageTokenizerStrategy_38 {
  public readonly tokenizerId = 'PTS_0038';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_38 = new PassageTokenizerStrategy_38();


export class PassageTokenizerStrategy_39 {
  public readonly tokenizerId = 'PTS_0039';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_39 = new PassageTokenizerStrategy_39();


export class PassageTokenizerStrategy_40 {
  public readonly tokenizerId = 'PTS_0040';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_40 = new PassageTokenizerStrategy_40();


export class PassageTokenizerStrategy_41 {
  public readonly tokenizerId = 'PTS_0041';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_41 = new PassageTokenizerStrategy_41();


export class PassageTokenizerStrategy_42 {
  public readonly tokenizerId = 'PTS_0042';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_42 = new PassageTokenizerStrategy_42();


export class PassageTokenizerStrategy_43 {
  public readonly tokenizerId = 'PTS_0043';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_43 = new PassageTokenizerStrategy_43();


export class PassageTokenizerStrategy_44 {
  public readonly tokenizerId = 'PTS_0044';
  public extractSentences(paragraphText: string): string[] {
    return paragraphText.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
  }
}
export const tokenizerInstance_44 = new PassageTokenizerStrategy_44();
