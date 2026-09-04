-- ====================================================================
-- 01_core_tables.sql
-- Core PostgreSQL DDL Schemas: Candidates, Questions, and Submissions
-- ====================================================================

CREATE TABLE IF NOT EXISTS candidate_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    auth_user_id UUID NOT NULL UNIQUE,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    target_band NUMERIC(3, 1) NOT NULL DEFAULT 7.0,
    preferred_exam_type VARCHAR(50) NOT NULL DEFAULT 'ACADEMIC',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS question_definitions (
    id VARCHAR(64) PRIMARY KEY,
    module_skill VARCHAR(32) NOT NULL,
    format_type VARCHAR(64) NOT NULL,
    prompt_text TEXT NOT NULL,
    correct_answers JSONB NOT NULL,
    explanation_text TEXT,
    difficulty_score NUMERIC(3, 2) NOT NULL DEFAULT 0.50,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS question_telemetry_partition_0001 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0001 ON question_telemetry_partition_0001(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0002 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0002 ON question_telemetry_partition_0002(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0003 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0003 ON question_telemetry_partition_0003(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0004 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0004 ON question_telemetry_partition_0004(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0005 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0005 ON question_telemetry_partition_0005(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0006 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0006 ON question_telemetry_partition_0006(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0007 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0007 ON question_telemetry_partition_0007(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0008 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0008 ON question_telemetry_partition_0008(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0009 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0009 ON question_telemetry_partition_0009(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0010 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0010 ON question_telemetry_partition_0010(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0011 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0011 ON question_telemetry_partition_0011(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0012 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0012 ON question_telemetry_partition_0012(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0013 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0013 ON question_telemetry_partition_0013(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0014 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0014 ON question_telemetry_partition_0014(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0015 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0015 ON question_telemetry_partition_0015(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0016 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0016 ON question_telemetry_partition_0016(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0017 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0017 ON question_telemetry_partition_0017(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0018 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0018 ON question_telemetry_partition_0018(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0019 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0019 ON question_telemetry_partition_0019(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0020 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0020 ON question_telemetry_partition_0020(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0021 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0021 ON question_telemetry_partition_0021(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0022 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0022 ON question_telemetry_partition_0022(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0023 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0023 ON question_telemetry_partition_0023(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0024 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0024 ON question_telemetry_partition_0024(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0025 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0025 ON question_telemetry_partition_0025(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0026 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0026 ON question_telemetry_partition_0026(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0027 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0027 ON question_telemetry_partition_0027(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0028 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0028 ON question_telemetry_partition_0028(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0029 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0029 ON question_telemetry_partition_0029(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0030 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0030 ON question_telemetry_partition_0030(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0031 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0031 ON question_telemetry_partition_0031(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0032 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0032 ON question_telemetry_partition_0032(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0033 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0033 ON question_telemetry_partition_0033(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0034 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0034 ON question_telemetry_partition_0034(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0035 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0035 ON question_telemetry_partition_0035(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0036 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0036 ON question_telemetry_partition_0036(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0037 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0037 ON question_telemetry_partition_0037(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0038 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0038 ON question_telemetry_partition_0038(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0039 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0039 ON question_telemetry_partition_0039(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0040 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0040 ON question_telemetry_partition_0040(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0041 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0041 ON question_telemetry_partition_0041(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0042 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0042 ON question_telemetry_partition_0042(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0043 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0043 ON question_telemetry_partition_0043(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0044 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0044 ON question_telemetry_partition_0044(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0045 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0045 ON question_telemetry_partition_0045(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0046 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0046 ON question_telemetry_partition_0046(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0047 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0047 ON question_telemetry_partition_0047(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0048 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0048 ON question_telemetry_partition_0048(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0049 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0049 ON question_telemetry_partition_0049(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0050 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0050 ON question_telemetry_partition_0050(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0051 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0051 ON question_telemetry_partition_0051(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0052 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0052 ON question_telemetry_partition_0052(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0053 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0053 ON question_telemetry_partition_0053(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0054 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0054 ON question_telemetry_partition_0054(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0055 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0055 ON question_telemetry_partition_0055(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0056 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0056 ON question_telemetry_partition_0056(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0057 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0057 ON question_telemetry_partition_0057(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0058 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0058 ON question_telemetry_partition_0058(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0059 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0059 ON question_telemetry_partition_0059(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0060 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0060 ON question_telemetry_partition_0060(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0061 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0061 ON question_telemetry_partition_0061(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0062 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0062 ON question_telemetry_partition_0062(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0063 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0063 ON question_telemetry_partition_0063(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0064 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0064 ON question_telemetry_partition_0064(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0065 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0065 ON question_telemetry_partition_0065(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0066 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0066 ON question_telemetry_partition_0066(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0067 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0067 ON question_telemetry_partition_0067(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0068 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0068 ON question_telemetry_partition_0068(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0069 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0069 ON question_telemetry_partition_0069(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0070 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0070 ON question_telemetry_partition_0070(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0071 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0071 ON question_telemetry_partition_0071(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0072 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0072 ON question_telemetry_partition_0072(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0073 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0073 ON question_telemetry_partition_0073(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0074 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0074 ON question_telemetry_partition_0074(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0075 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0075 ON question_telemetry_partition_0075(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0076 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0076 ON question_telemetry_partition_0076(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0077 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0077 ON question_telemetry_partition_0077(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0078 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0078 ON question_telemetry_partition_0078(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0079 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0079 ON question_telemetry_partition_0079(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0080 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0080 ON question_telemetry_partition_0080(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0081 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0081 ON question_telemetry_partition_0081(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0082 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0082 ON question_telemetry_partition_0082(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0083 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0083 ON question_telemetry_partition_0083(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0084 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0084 ON question_telemetry_partition_0084(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0085 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0085 ON question_telemetry_partition_0085(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0086 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0086 ON question_telemetry_partition_0086(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0087 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0087 ON question_telemetry_partition_0087(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0088 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0088 ON question_telemetry_partition_0088(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0089 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0089 ON question_telemetry_partition_0089(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0090 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0090 ON question_telemetry_partition_0090(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0091 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0091 ON question_telemetry_partition_0091(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0092 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0092 ON question_telemetry_partition_0092(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0093 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0093 ON question_telemetry_partition_0093(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0094 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0094 ON question_telemetry_partition_0094(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0095 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0095 ON question_telemetry_partition_0095(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0096 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0096 ON question_telemetry_partition_0096(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0097 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0097 ON question_telemetry_partition_0097(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0098 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0098 ON question_telemetry_partition_0098(question_ref);


CREATE TABLE IF NOT EXISTS question_telemetry_partition_0099 (
    partition_id VARCHAR(64) PRIMARY KEY,
    question_ref VARCHAR(64) REFERENCES question_definitions(id) ON DELETE CASCADE,
    exposure_count INTEGER NOT NULL DEFAULT 0,
    correct_attempt_count INTEGER NOT NULL DEFAULT 0,
    average_response_ms INTEGER NOT NULL DEFAULT 45000,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_telemetry_part_0099 ON question_telemetry_partition_0099(question_ref);
