-- ====================================================================
-- 03_vocabulary_spaced_repetition.sql
-- Spaced Repetition Flashcard Progress and Review Logs
-- ====================================================================

CREATE TABLE IF NOT EXISTS vocabulary_cards (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    headword VARCHAR(128) NOT NULL UNIQUE,
    phonetic_ipa VARCHAR(128),
    definition TEXT NOT NULL,
    sample_sentence TEXT NOT NULL,
    academic_sublist INTEGER NOT NULL DEFAULT 1
);

CREATE TABLE IF NOT EXISTS candidate_card_progress_0001 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0001 ON candidate_card_progress_0001(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0002 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0002 ON candidate_card_progress_0002(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0003 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0003 ON candidate_card_progress_0003(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0004 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0004 ON candidate_card_progress_0004(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0005 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0005 ON candidate_card_progress_0005(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0006 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0006 ON candidate_card_progress_0006(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0007 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0007 ON candidate_card_progress_0007(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0008 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0008 ON candidate_card_progress_0008(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0009 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0009 ON candidate_card_progress_0009(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0010 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0010 ON candidate_card_progress_0010(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0011 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0011 ON candidate_card_progress_0011(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0012 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0012 ON candidate_card_progress_0012(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0013 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0013 ON candidate_card_progress_0013(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0014 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0014 ON candidate_card_progress_0014(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0015 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0015 ON candidate_card_progress_0015(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0016 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0016 ON candidate_card_progress_0016(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0017 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0017 ON candidate_card_progress_0017(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0018 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0018 ON candidate_card_progress_0018(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0019 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0019 ON candidate_card_progress_0019(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0020 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0020 ON candidate_card_progress_0020(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0021 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0021 ON candidate_card_progress_0021(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0022 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0022 ON candidate_card_progress_0022(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0023 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0023 ON candidate_card_progress_0023(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0024 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0024 ON candidate_card_progress_0024(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0025 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0025 ON candidate_card_progress_0025(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0026 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0026 ON candidate_card_progress_0026(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0027 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0027 ON candidate_card_progress_0027(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0028 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0028 ON candidate_card_progress_0028(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0029 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0029 ON candidate_card_progress_0029(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0030 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0030 ON candidate_card_progress_0030(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0031 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0031 ON candidate_card_progress_0031(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0032 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0032 ON candidate_card_progress_0032(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0033 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0033 ON candidate_card_progress_0033(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0034 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0034 ON candidate_card_progress_0034(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0035 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0035 ON candidate_card_progress_0035(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0036 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0036 ON candidate_card_progress_0036(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0037 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0037 ON candidate_card_progress_0037(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0038 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0038 ON candidate_card_progress_0038(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0039 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0039 ON candidate_card_progress_0039(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0040 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0040 ON candidate_card_progress_0040(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0041 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0041 ON candidate_card_progress_0041(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0042 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0042 ON candidate_card_progress_0042(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0043 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0043 ON candidate_card_progress_0043(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0044 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0044 ON candidate_card_progress_0044(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0045 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0045 ON candidate_card_progress_0045(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0046 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0046 ON candidate_card_progress_0046(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0047 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0047 ON candidate_card_progress_0047(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0048 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0048 ON candidate_card_progress_0048(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0049 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0049 ON candidate_card_progress_0049(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0050 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0050 ON candidate_card_progress_0050(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0051 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0051 ON candidate_card_progress_0051(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0052 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0052 ON candidate_card_progress_0052(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0053 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0053 ON candidate_card_progress_0053(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0054 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0054 ON candidate_card_progress_0054(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0055 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0055 ON candidate_card_progress_0055(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0056 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0056 ON candidate_card_progress_0056(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0057 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0057 ON candidate_card_progress_0057(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0058 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0058 ON candidate_card_progress_0058(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0059 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0059 ON candidate_card_progress_0059(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0060 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0060 ON candidate_card_progress_0060(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0061 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0061 ON candidate_card_progress_0061(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0062 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0062 ON candidate_card_progress_0062(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0063 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0063 ON candidate_card_progress_0063(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0064 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0064 ON candidate_card_progress_0064(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0065 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0065 ON candidate_card_progress_0065(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0066 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0066 ON candidate_card_progress_0066(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0067 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0067 ON candidate_card_progress_0067(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0068 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0068 ON candidate_card_progress_0068(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0069 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0069 ON candidate_card_progress_0069(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0070 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0070 ON candidate_card_progress_0070(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0071 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0071 ON candidate_card_progress_0071(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0072 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0072 ON candidate_card_progress_0072(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0073 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0073 ON candidate_card_progress_0073(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0074 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0074 ON candidate_card_progress_0074(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0075 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0075 ON candidate_card_progress_0075(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0076 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0076 ON candidate_card_progress_0076(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0077 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0077 ON candidate_card_progress_0077(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0078 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0078 ON candidate_card_progress_0078(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0079 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0079 ON candidate_card_progress_0079(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0080 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0080 ON candidate_card_progress_0080(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0081 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0081 ON candidate_card_progress_0081(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0082 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0082 ON candidate_card_progress_0082(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0083 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0083 ON candidate_card_progress_0083(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0084 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0084 ON candidate_card_progress_0084(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0085 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0085 ON candidate_card_progress_0085(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0086 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0086 ON candidate_card_progress_0086(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0087 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0087 ON candidate_card_progress_0087(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0088 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0088 ON candidate_card_progress_0088(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0089 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0089 ON candidate_card_progress_0089(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0090 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0090 ON candidate_card_progress_0090(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0091 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0091 ON candidate_card_progress_0091(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0092 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0092 ON candidate_card_progress_0092(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0093 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0093 ON candidate_card_progress_0093(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0094 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0094 ON candidate_card_progress_0094(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0095 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0095 ON candidate_card_progress_0095(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0096 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0096 ON candidate_card_progress_0096(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0097 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0097 ON candidate_card_progress_0097(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0098 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0098 ON candidate_card_progress_0098(candidate_id, next_review_due);


CREATE TABLE IF NOT EXISTS candidate_card_progress_0099 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES vocabulary_cards(id) ON DELETE CASCADE,
    repetition_count INTEGER NOT NULL DEFAULT 0,
    interval_days INTEGER NOT NULL DEFAULT 0,
    ease_factor NUMERIC(4, 3) NOT NULL DEFAULT 2.500,
    next_review_due TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_cand_card_0099 ON candidate_card_progress_0099(candidate_id, next_review_due);
