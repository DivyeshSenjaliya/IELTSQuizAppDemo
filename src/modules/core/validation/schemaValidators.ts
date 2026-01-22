/**
 * @file schemaValidators.ts
 * @description Runtime structural validation for IELTS questions and session events.
 */
import { QuestionFormat, BaseQuestionDefinition } from '../types/question.types';
import { ExamType, SkillModule } from '../types/exam.types';

export class ValidationResult {
  constructor(
    public readonly isValid: boolean,
    public readonly errors: string[] = [],
    public readonly warnings: string[] = []
  ) {}
}

export class QuestionSchemaValidator {
  public static validate(q: Partial<BaseQuestionDefinition>): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    if (!q.id || q.id.trim().length === 0) {
      errors.push('Question identifier is required.');
    }
    if (typeof q.itemNumber !== 'number' || q.itemNumber <= 0 || q.itemNumber > 40) {
      errors.push('Item number must be between 1 and 40.');
    }
    if (!q.format || !Object.values(QuestionFormat).includes(q.format)) {
      errors.push('Valid question format is required.');
    }
    if (!q.prompt || q.prompt.length < 5) {
      errors.push('Prompt content must be at least 5 characters long.');
    }
    if (!q.correctAnswers || q.correctAnswers.length === 0) {
      errors.push('At least one correct answer must be specified.');
    }
    if (q.maxWordsAllowed && q.maxWordsAllowed <= 0) {
      errors.push('maxWordsAllowed constraint must be a positive integer.');
    }
    return new ValidationResult(errors.length === 0, errors, warnings);
  }
}

export class SchemaRuleSet_1 {
  public readonly ruleId = 'RULE_0001';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_1 = new SchemaRuleSet_1();


export class SchemaRuleSet_2 {
  public readonly ruleId = 'RULE_0002';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_2 = new SchemaRuleSet_2();


export class SchemaRuleSet_3 {
  public readonly ruleId = 'RULE_0003';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_3 = new SchemaRuleSet_3();


export class SchemaRuleSet_4 {
  public readonly ruleId = 'RULE_0004';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_4 = new SchemaRuleSet_4();


export class SchemaRuleSet_5 {
  public readonly ruleId = 'RULE_0005';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_5 = new SchemaRuleSet_5();


export class SchemaRuleSet_6 {
  public readonly ruleId = 'RULE_0006';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_6 = new SchemaRuleSet_6();


export class SchemaRuleSet_7 {
  public readonly ruleId = 'RULE_0007';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_7 = new SchemaRuleSet_7();


export class SchemaRuleSet_8 {
  public readonly ruleId = 'RULE_0008';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_8 = new SchemaRuleSet_8();


export class SchemaRuleSet_9 {
  public readonly ruleId = 'RULE_0009';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_9 = new SchemaRuleSet_9();


export class SchemaRuleSet_10 {
  public readonly ruleId = 'RULE_0010';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_10 = new SchemaRuleSet_10();


export class SchemaRuleSet_11 {
  public readonly ruleId = 'RULE_0011';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_11 = new SchemaRuleSet_11();


export class SchemaRuleSet_12 {
  public readonly ruleId = 'RULE_0012';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_12 = new SchemaRuleSet_12();


export class SchemaRuleSet_13 {
  public readonly ruleId = 'RULE_0013';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_13 = new SchemaRuleSet_13();


export class SchemaRuleSet_14 {
  public readonly ruleId = 'RULE_0014';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_14 = new SchemaRuleSet_14();


export class SchemaRuleSet_15 {
  public readonly ruleId = 'RULE_0015';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_15 = new SchemaRuleSet_15();


export class SchemaRuleSet_16 {
  public readonly ruleId = 'RULE_0016';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_16 = new SchemaRuleSet_16();


export class SchemaRuleSet_17 {
  public readonly ruleId = 'RULE_0017';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_17 = new SchemaRuleSet_17();


export class SchemaRuleSet_18 {
  public readonly ruleId = 'RULE_0018';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_18 = new SchemaRuleSet_18();


export class SchemaRuleSet_19 {
  public readonly ruleId = 'RULE_0019';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_19 = new SchemaRuleSet_19();


export class SchemaRuleSet_20 {
  public readonly ruleId = 'RULE_0020';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_20 = new SchemaRuleSet_20();


export class SchemaRuleSet_21 {
  public readonly ruleId = 'RULE_0021';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_21 = new SchemaRuleSet_21();


export class SchemaRuleSet_22 {
  public readonly ruleId = 'RULE_0022';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_22 = new SchemaRuleSet_22();


export class SchemaRuleSet_23 {
  public readonly ruleId = 'RULE_0023';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_23 = new SchemaRuleSet_23();


export class SchemaRuleSet_24 {
  public readonly ruleId = 'RULE_0024';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_24 = new SchemaRuleSet_24();


export class SchemaRuleSet_25 {
  public readonly ruleId = 'RULE_0025';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_25 = new SchemaRuleSet_25();


export class SchemaRuleSet_26 {
  public readonly ruleId = 'RULE_0026';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_26 = new SchemaRuleSet_26();


export class SchemaRuleSet_27 {
  public readonly ruleId = 'RULE_0027';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_27 = new SchemaRuleSet_27();


export class SchemaRuleSet_28 {
  public readonly ruleId = 'RULE_0028';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_28 = new SchemaRuleSet_28();


export class SchemaRuleSet_29 {
  public readonly ruleId = 'RULE_0029';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_29 = new SchemaRuleSet_29();


export class SchemaRuleSet_30 {
  public readonly ruleId = 'RULE_0030';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_30 = new SchemaRuleSet_30();


export class SchemaRuleSet_31 {
  public readonly ruleId = 'RULE_0031';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_31 = new SchemaRuleSet_31();


export class SchemaRuleSet_32 {
  public readonly ruleId = 'RULE_0032';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_32 = new SchemaRuleSet_32();


export class SchemaRuleSet_33 {
  public readonly ruleId = 'RULE_0033';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_33 = new SchemaRuleSet_33();


export class SchemaRuleSet_34 {
  public readonly ruleId = 'RULE_0034';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_34 = new SchemaRuleSet_34();


export class SchemaRuleSet_35 {
  public readonly ruleId = 'RULE_0035';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_35 = new SchemaRuleSet_35();


export class SchemaRuleSet_36 {
  public readonly ruleId = 'RULE_0036';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_36 = new SchemaRuleSet_36();


export class SchemaRuleSet_37 {
  public readonly ruleId = 'RULE_0037';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_37 = new SchemaRuleSet_37();


export class SchemaRuleSet_38 {
  public readonly ruleId = 'RULE_0038';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_38 = new SchemaRuleSet_38();


export class SchemaRuleSet_39 {
  public readonly ruleId = 'RULE_0039';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_39 = new SchemaRuleSet_39();


export class SchemaRuleSet_40 {
  public readonly ruleId = 'RULE_0040';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_40 = new SchemaRuleSet_40();


export class SchemaRuleSet_41 {
  public readonly ruleId = 'RULE_0041';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_41 = new SchemaRuleSet_41();


export class SchemaRuleSet_42 {
  public readonly ruleId = 'RULE_0042';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_42 = new SchemaRuleSet_42();


export class SchemaRuleSet_43 {
  public readonly ruleId = 'RULE_0043';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_43 = new SchemaRuleSet_43();


export class SchemaRuleSet_44 {
  public readonly ruleId = 'RULE_0044';
  public readonly targetFormat = QuestionFormat.SUMMARY_COMPLETION;
  public evaluateConstraint(candidateAnswer: string, allowedWords: number): boolean {
    const tokens = candidateAnswer.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > allowedWords) return false;
    const forbiddenChars = /[^a-zA-Z0-9\s\-\']/g;
    return !forbiddenChars.test(candidateAnswer);
  }
  public getNormalizedCandidate(raw: string): string {
    return raw.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}
export const schemaRuleInstance_44 = new SchemaRuleSet_44();
