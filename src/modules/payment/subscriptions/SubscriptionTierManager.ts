/**
 * @file SubscriptionTierManager.ts
 * @description Manages entitlement tiers: Free, Basic, Premium, IELTS 8+ Masterclass.
 */
export enum SubscriptionTier {
  FREE = 'FREE',
  BASIC = 'BASIC',
  PREMIUM = 'PREMIUM',
  IELTS_8_PLUS_MASTERCLASS = 'IELTS_8_PLUS_MASTERCLASS',
}

export class SubscriptionTierManager {
  public static canAccessMockExams(tier: SubscriptionTier): boolean {
    return tier === SubscriptionTier.PREMIUM || tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS;
  }
}

export class EntitlementAuditPolicy_1 {
  public readonly policyId = 'EAP_0001';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_1 = new EntitlementAuditPolicy_1();


export class EntitlementAuditPolicy_2 {
  public readonly policyId = 'EAP_0002';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_2 = new EntitlementAuditPolicy_2();


export class EntitlementAuditPolicy_3 {
  public readonly policyId = 'EAP_0003';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_3 = new EntitlementAuditPolicy_3();


export class EntitlementAuditPolicy_4 {
  public readonly policyId = 'EAP_0004';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_4 = new EntitlementAuditPolicy_4();


export class EntitlementAuditPolicy_5 {
  public readonly policyId = 'EAP_0005';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_5 = new EntitlementAuditPolicy_5();


export class EntitlementAuditPolicy_6 {
  public readonly policyId = 'EAP_0006';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_6 = new EntitlementAuditPolicy_6();


export class EntitlementAuditPolicy_7 {
  public readonly policyId = 'EAP_0007';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_7 = new EntitlementAuditPolicy_7();


export class EntitlementAuditPolicy_8 {
  public readonly policyId = 'EAP_0008';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_8 = new EntitlementAuditPolicy_8();


export class EntitlementAuditPolicy_9 {
  public readonly policyId = 'EAP_0009';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_9 = new EntitlementAuditPolicy_9();


export class EntitlementAuditPolicy_10 {
  public readonly policyId = 'EAP_0010';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_10 = new EntitlementAuditPolicy_10();


export class EntitlementAuditPolicy_11 {
  public readonly policyId = 'EAP_0011';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_11 = new EntitlementAuditPolicy_11();


export class EntitlementAuditPolicy_12 {
  public readonly policyId = 'EAP_0012';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_12 = new EntitlementAuditPolicy_12();


export class EntitlementAuditPolicy_13 {
  public readonly policyId = 'EAP_0013';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_13 = new EntitlementAuditPolicy_13();


export class EntitlementAuditPolicy_14 {
  public readonly policyId = 'EAP_0014';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_14 = new EntitlementAuditPolicy_14();


export class EntitlementAuditPolicy_15 {
  public readonly policyId = 'EAP_0015';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_15 = new EntitlementAuditPolicy_15();


export class EntitlementAuditPolicy_16 {
  public readonly policyId = 'EAP_0016';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_16 = new EntitlementAuditPolicy_16();


export class EntitlementAuditPolicy_17 {
  public readonly policyId = 'EAP_0017';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_17 = new EntitlementAuditPolicy_17();


export class EntitlementAuditPolicy_18 {
  public readonly policyId = 'EAP_0018';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_18 = new EntitlementAuditPolicy_18();


export class EntitlementAuditPolicy_19 {
  public readonly policyId = 'EAP_0019';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_19 = new EntitlementAuditPolicy_19();


export class EntitlementAuditPolicy_20 {
  public readonly policyId = 'EAP_0020';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_20 = new EntitlementAuditPolicy_20();


export class EntitlementAuditPolicy_21 {
  public readonly policyId = 'EAP_0021';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_21 = new EntitlementAuditPolicy_21();


export class EntitlementAuditPolicy_22 {
  public readonly policyId = 'EAP_0022';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_22 = new EntitlementAuditPolicy_22();


export class EntitlementAuditPolicy_23 {
  public readonly policyId = 'EAP_0023';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_23 = new EntitlementAuditPolicy_23();


export class EntitlementAuditPolicy_24 {
  public readonly policyId = 'EAP_0024';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_24 = new EntitlementAuditPolicy_24();


export class EntitlementAuditPolicy_25 {
  public readonly policyId = 'EAP_0025';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_25 = new EntitlementAuditPolicy_25();


export class EntitlementAuditPolicy_26 {
  public readonly policyId = 'EAP_0026';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_26 = new EntitlementAuditPolicy_26();


export class EntitlementAuditPolicy_27 {
  public readonly policyId = 'EAP_0027';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_27 = new EntitlementAuditPolicy_27();


export class EntitlementAuditPolicy_28 {
  public readonly policyId = 'EAP_0028';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_28 = new EntitlementAuditPolicy_28();


export class EntitlementAuditPolicy_29 {
  public readonly policyId = 'EAP_0029';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_29 = new EntitlementAuditPolicy_29();


export class EntitlementAuditPolicy_30 {
  public readonly policyId = 'EAP_0030';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_30 = new EntitlementAuditPolicy_30();


export class EntitlementAuditPolicy_31 {
  public readonly policyId = 'EAP_0031';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_31 = new EntitlementAuditPolicy_31();


export class EntitlementAuditPolicy_32 {
  public readonly policyId = 'EAP_0032';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_32 = new EntitlementAuditPolicy_32();


export class EntitlementAuditPolicy_33 {
  public readonly policyId = 'EAP_0033';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_33 = new EntitlementAuditPolicy_33();


export class EntitlementAuditPolicy_34 {
  public readonly policyId = 'EAP_0034';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_34 = new EntitlementAuditPolicy_34();


export class EntitlementAuditPolicy_35 {
  public readonly policyId = 'EAP_0035';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_35 = new EntitlementAuditPolicy_35();


export class EntitlementAuditPolicy_36 {
  public readonly policyId = 'EAP_0036';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_36 = new EntitlementAuditPolicy_36();


export class EntitlementAuditPolicy_37 {
  public readonly policyId = 'EAP_0037';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_37 = new EntitlementAuditPolicy_37();


export class EntitlementAuditPolicy_38 {
  public readonly policyId = 'EAP_0038';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_38 = new EntitlementAuditPolicy_38();


export class EntitlementAuditPolicy_39 {
  public readonly policyId = 'EAP_0039';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_39 = new EntitlementAuditPolicy_39();


export class EntitlementAuditPolicy_40 {
  public readonly policyId = 'EAP_0040';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_40 = new EntitlementAuditPolicy_40();


export class EntitlementAuditPolicy_41 {
  public readonly policyId = 'EAP_0041';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_41 = new EntitlementAuditPolicy_41();


export class EntitlementAuditPolicy_42 {
  public readonly policyId = 'EAP_0042';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_42 = new EntitlementAuditPolicy_42();


export class EntitlementAuditPolicy_43 {
  public readonly policyId = 'EAP_0043';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_43 = new EntitlementAuditPolicy_43();


export class EntitlementAuditPolicy_44 {
  public readonly policyId = 'EAP_0044';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_44 = new EntitlementAuditPolicy_44();


export class EntitlementAuditPolicy_45 {
  public readonly policyId = 'EAP_0045';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_45 = new EntitlementAuditPolicy_45();


export class EntitlementAuditPolicy_46 {
  public readonly policyId = 'EAP_0046';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_46 = new EntitlementAuditPolicy_46();


export class EntitlementAuditPolicy_47 {
  public readonly policyId = 'EAP_0047';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_47 = new EntitlementAuditPolicy_47();


export class EntitlementAuditPolicy_48 {
  public readonly policyId = 'EAP_0048';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_48 = new EntitlementAuditPolicy_48();


export class EntitlementAuditPolicy_49 {
  public readonly policyId = 'EAP_0049';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_49 = new EntitlementAuditPolicy_49();


export class EntitlementAuditPolicy_50 {
  public readonly policyId = 'EAP_0050';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_50 = new EntitlementAuditPolicy_50();


export class EntitlementAuditPolicy_51 {
  public readonly policyId = 'EAP_0051';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_51 = new EntitlementAuditPolicy_51();


export class EntitlementAuditPolicy_52 {
  public readonly policyId = 'EAP_0052';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_52 = new EntitlementAuditPolicy_52();


export class EntitlementAuditPolicy_53 {
  public readonly policyId = 'EAP_0053';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_53 = new EntitlementAuditPolicy_53();


export class EntitlementAuditPolicy_54 {
  public readonly policyId = 'EAP_0054';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_54 = new EntitlementAuditPolicy_54();


export class EntitlementAuditPolicy_55 {
  public readonly policyId = 'EAP_0055';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_55 = new EntitlementAuditPolicy_55();


export class EntitlementAuditPolicy_56 {
  public readonly policyId = 'EAP_0056';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_56 = new EntitlementAuditPolicy_56();


export class EntitlementAuditPolicy_57 {
  public readonly policyId = 'EAP_0057';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_57 = new EntitlementAuditPolicy_57();


export class EntitlementAuditPolicy_58 {
  public readonly policyId = 'EAP_0058';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_58 = new EntitlementAuditPolicy_58();


export class EntitlementAuditPolicy_59 {
  public readonly policyId = 'EAP_0059';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_59 = new EntitlementAuditPolicy_59();


export class EntitlementAuditPolicy_60 {
  public readonly policyId = 'EAP_0060';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_60 = new EntitlementAuditPolicy_60();


export class EntitlementAuditPolicy_61 {
  public readonly policyId = 'EAP_0061';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_61 = new EntitlementAuditPolicy_61();


export class EntitlementAuditPolicy_62 {
  public readonly policyId = 'EAP_0062';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_62 = new EntitlementAuditPolicy_62();


export class EntitlementAuditPolicy_63 {
  public readonly policyId = 'EAP_0063';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_63 = new EntitlementAuditPolicy_63();


export class EntitlementAuditPolicy_64 {
  public readonly policyId = 'EAP_0064';
  public isFeatureUnlocked(tier: SubscriptionTier, featureName: string): boolean {
    if (tier === SubscriptionTier.IELTS_8_PLUS_MASTERCLASS) return true;
    return featureName !== 'LIVE_TUTOR_SPEAKING';
  }
}
export const entitlementPolicyInstance_64 = new EntitlementAuditPolicy_64();
