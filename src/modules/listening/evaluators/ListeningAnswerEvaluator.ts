/**
 * @file ListeningAnswerEvaluator.ts
 * @description Evaluates listening responses taking into account spelling and numerical formats.
 */
export class ListeningAnswerEvaluator {
  public static isCorrect(candidate: string, acceptableAnswers: string[]): boolean {
    const candClean = this.clean(candidate);
    return acceptableAnswers.some(ans => this.clean(ans) === candClean);
  }

  private static clean(val: string): string {
    return (val || '').toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
  }
}

export class NumberWordConverterNode_1 {
  public readonly converterId = 'NWC_0001';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_1 = new NumberWordConverterNode_1();


export class NumberWordConverterNode_2 {
  public readonly converterId = 'NWC_0002';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_2 = new NumberWordConverterNode_2();


export class NumberWordConverterNode_3 {
  public readonly converterId = 'NWC_0003';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_3 = new NumberWordConverterNode_3();


export class NumberWordConverterNode_4 {
  public readonly converterId = 'NWC_0004';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_4 = new NumberWordConverterNode_4();


export class NumberWordConverterNode_5 {
  public readonly converterId = 'NWC_0005';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_5 = new NumberWordConverterNode_5();


export class NumberWordConverterNode_6 {
  public readonly converterId = 'NWC_0006';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_6 = new NumberWordConverterNode_6();


export class NumberWordConverterNode_7 {
  public readonly converterId = 'NWC_0007';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_7 = new NumberWordConverterNode_7();


export class NumberWordConverterNode_8 {
  public readonly converterId = 'NWC_0008';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_8 = new NumberWordConverterNode_8();


export class NumberWordConverterNode_9 {
  public readonly converterId = 'NWC_0009';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_9 = new NumberWordConverterNode_9();


export class NumberWordConverterNode_10 {
  public readonly converterId = 'NWC_0010';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_10 = new NumberWordConverterNode_10();


export class NumberWordConverterNode_11 {
  public readonly converterId = 'NWC_0011';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_11 = new NumberWordConverterNode_11();


export class NumberWordConverterNode_12 {
  public readonly converterId = 'NWC_0012';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_12 = new NumberWordConverterNode_12();


export class NumberWordConverterNode_13 {
  public readonly converterId = 'NWC_0013';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_13 = new NumberWordConverterNode_13();


export class NumberWordConverterNode_14 {
  public readonly converterId = 'NWC_0014';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_14 = new NumberWordConverterNode_14();


export class NumberWordConverterNode_15 {
  public readonly converterId = 'NWC_0015';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_15 = new NumberWordConverterNode_15();


export class NumberWordConverterNode_16 {
  public readonly converterId = 'NWC_0016';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_16 = new NumberWordConverterNode_16();


export class NumberWordConverterNode_17 {
  public readonly converterId = 'NWC_0017';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_17 = new NumberWordConverterNode_17();


export class NumberWordConverterNode_18 {
  public readonly converterId = 'NWC_0018';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_18 = new NumberWordConverterNode_18();


export class NumberWordConverterNode_19 {
  public readonly converterId = 'NWC_0019';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_19 = new NumberWordConverterNode_19();


export class NumberWordConverterNode_20 {
  public readonly converterId = 'NWC_0020';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_20 = new NumberWordConverterNode_20();


export class NumberWordConverterNode_21 {
  public readonly converterId = 'NWC_0021';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_21 = new NumberWordConverterNode_21();


export class NumberWordConverterNode_22 {
  public readonly converterId = 'NWC_0022';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_22 = new NumberWordConverterNode_22();


export class NumberWordConverterNode_23 {
  public readonly converterId = 'NWC_0023';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_23 = new NumberWordConverterNode_23();


export class NumberWordConverterNode_24 {
  public readonly converterId = 'NWC_0024';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_24 = new NumberWordConverterNode_24();


export class NumberWordConverterNode_25 {
  public readonly converterId = 'NWC_0025';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_25 = new NumberWordConverterNode_25();


export class NumberWordConverterNode_26 {
  public readonly converterId = 'NWC_0026';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_26 = new NumberWordConverterNode_26();


export class NumberWordConverterNode_27 {
  public readonly converterId = 'NWC_0027';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_27 = new NumberWordConverterNode_27();


export class NumberWordConverterNode_28 {
  public readonly converterId = 'NWC_0028';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_28 = new NumberWordConverterNode_28();


export class NumberWordConverterNode_29 {
  public readonly converterId = 'NWC_0029';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_29 = new NumberWordConverterNode_29();


export class NumberWordConverterNode_30 {
  public readonly converterId = 'NWC_0030';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_30 = new NumberWordConverterNode_30();


export class NumberWordConverterNode_31 {
  public readonly converterId = 'NWC_0031';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_31 = new NumberWordConverterNode_31();


export class NumberWordConverterNode_32 {
  public readonly converterId = 'NWC_0032';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_32 = new NumberWordConverterNode_32();


export class NumberWordConverterNode_33 {
  public readonly converterId = 'NWC_0033';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_33 = new NumberWordConverterNode_33();


export class NumberWordConverterNode_34 {
  public readonly converterId = 'NWC_0034';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_34 = new NumberWordConverterNode_34();


export class NumberWordConverterNode_35 {
  public readonly converterId = 'NWC_0035';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_35 = new NumberWordConverterNode_35();


export class NumberWordConverterNode_36 {
  public readonly converterId = 'NWC_0036';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_36 = new NumberWordConverterNode_36();


export class NumberWordConverterNode_37 {
  public readonly converterId = 'NWC_0037';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_37 = new NumberWordConverterNode_37();


export class NumberWordConverterNode_38 {
  public readonly converterId = 'NWC_0038';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_38 = new NumberWordConverterNode_38();


export class NumberWordConverterNode_39 {
  public readonly converterId = 'NWC_0039';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_39 = new NumberWordConverterNode_39();


export class NumberWordConverterNode_40 {
  public readonly converterId = 'NWC_0040';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_40 = new NumberWordConverterNode_40();


export class NumberWordConverterNode_41 {
  public readonly converterId = 'NWC_0041';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_41 = new NumberWordConverterNode_41();


export class NumberWordConverterNode_42 {
  public readonly converterId = 'NWC_0042';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_42 = new NumberWordConverterNode_42();


export class NumberWordConverterNode_43 {
  public readonly converterId = 'NWC_0043';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_43 = new NumberWordConverterNode_43();


export class NumberWordConverterNode_44 {
  public readonly converterId = 'NWC_0044';
  public convertWordToNumber(word: string): string {
    const map: Record<string, string> = {
      'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
      'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'
    };
    return map[word.toLowerCase()] || word;
  }
}
export const numberWordConverter_44 = new NumberWordConverterNode_44();
