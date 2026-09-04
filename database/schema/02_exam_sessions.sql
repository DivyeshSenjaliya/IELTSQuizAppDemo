-- ====================================================================
-- 02_exam_sessions.sql
-- Relational Schemas for Full Cambridge Exam Sessions and Section Logs
-- ====================================================================

CREATE TABLE IF NOT EXISTS exam_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidate_profiles(id) ON DELETE CASCADE,
    exam_type VARCHAR(50) NOT NULL,
    overall_band NUMERIC(3, 1),
    listening_band NUMERIC(3, 1),
    reading_band NUMERIC(3, 1),
    writing_band NUMERIC(3, 1),
    speaking_band NUMERIC(3, 1),
    status VARCHAR(50) NOT NULL DEFAULT 'IN_PROGRESS',
    started_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    completed_at TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS session_section_log_0001 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0001 ON session_section_log_0001(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0002 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0002 ON session_section_log_0002(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0003 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0003 ON session_section_log_0003(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0004 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0004 ON session_section_log_0004(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0005 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0005 ON session_section_log_0005(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0006 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0006 ON session_section_log_0006(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0007 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0007 ON session_section_log_0007(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0008 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0008 ON session_section_log_0008(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0009 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0009 ON session_section_log_0009(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0010 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0010 ON session_section_log_0010(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0011 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0011 ON session_section_log_0011(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0012 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0012 ON session_section_log_0012(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0013 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0013 ON session_section_log_0013(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0014 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0014 ON session_section_log_0014(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0015 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0015 ON session_section_log_0015(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0016 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0016 ON session_section_log_0016(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0017 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0017 ON session_section_log_0017(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0018 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0018 ON session_section_log_0018(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0019 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0019 ON session_section_log_0019(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0020 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0020 ON session_section_log_0020(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0021 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0021 ON session_section_log_0021(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0022 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0022 ON session_section_log_0022(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0023 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0023 ON session_section_log_0023(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0024 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0024 ON session_section_log_0024(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0025 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0025 ON session_section_log_0025(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0026 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0026 ON session_section_log_0026(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0027 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0027 ON session_section_log_0027(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0028 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0028 ON session_section_log_0028(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0029 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0029 ON session_section_log_0029(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0030 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0030 ON session_section_log_0030(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0031 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0031 ON session_section_log_0031(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0032 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0032 ON session_section_log_0032(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0033 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0033 ON session_section_log_0033(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0034 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0034 ON session_section_log_0034(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0035 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0035 ON session_section_log_0035(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0036 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0036 ON session_section_log_0036(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0037 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0037 ON session_section_log_0037(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0038 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0038 ON session_section_log_0038(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0039 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0039 ON session_section_log_0039(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0040 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0040 ON session_section_log_0040(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0041 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0041 ON session_section_log_0041(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0042 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0042 ON session_section_log_0042(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0043 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0043 ON session_section_log_0043(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0044 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0044 ON session_section_log_0044(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0045 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0045 ON session_section_log_0045(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0046 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0046 ON session_section_log_0046(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0047 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0047 ON session_section_log_0047(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0048 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0048 ON session_section_log_0048(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0049 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0049 ON session_section_log_0049(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0050 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0050 ON session_section_log_0050(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0051 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0051 ON session_section_log_0051(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0052 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0052 ON session_section_log_0052(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0053 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0053 ON session_section_log_0053(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0054 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0054 ON session_section_log_0054(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0055 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0055 ON session_section_log_0055(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0056 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0056 ON session_section_log_0056(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0057 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0057 ON session_section_log_0057(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0058 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0058 ON session_section_log_0058(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0059 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0059 ON session_section_log_0059(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0060 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0060 ON session_section_log_0060(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0061 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0061 ON session_section_log_0061(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0062 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0062 ON session_section_log_0062(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0063 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0063 ON session_section_log_0063(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0064 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0064 ON session_section_log_0064(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0065 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0065 ON session_section_log_0065(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0066 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0066 ON session_section_log_0066(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0067 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0067 ON session_section_log_0067(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0068 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0068 ON session_section_log_0068(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0069 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0069 ON session_section_log_0069(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0070 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0070 ON session_section_log_0070(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0071 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0071 ON session_section_log_0071(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0072 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0072 ON session_section_log_0072(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0073 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0073 ON session_section_log_0073(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0074 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0074 ON session_section_log_0074(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0075 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0075 ON session_section_log_0075(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0076 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0076 ON session_section_log_0076(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0077 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0077 ON session_section_log_0077(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0078 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0078 ON session_section_log_0078(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0079 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0079 ON session_section_log_0079(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0080 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0080 ON session_section_log_0080(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0081 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0081 ON session_section_log_0081(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0082 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0082 ON session_section_log_0082(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0083 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0083 ON session_section_log_0083(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0084 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0084 ON session_section_log_0084(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0085 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0085 ON session_section_log_0085(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0086 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0086 ON session_section_log_0086(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0087 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0087 ON session_section_log_0087(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0088 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0088 ON session_section_log_0088(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0089 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0089 ON session_section_log_0089(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0090 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0090 ON session_section_log_0090(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0091 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0091 ON session_section_log_0091(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0092 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0092 ON session_section_log_0092(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0093 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0093 ON session_section_log_0093(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0094 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0094 ON session_section_log_0094(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0095 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0095 ON session_section_log_0095(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0096 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0096 ON session_section_log_0096(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0097 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0097 ON session_section_log_0097(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0098 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0098 ON session_section_log_0098(session_id);


CREATE TABLE IF NOT EXISTS session_section_log_0099 (
    log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES exam_sessions(id) ON DELETE CASCADE,
    module_name VARCHAR(32) NOT NULL,
    item_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
    section_score NUMERIC(3, 1),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_sess_sec_0099 ON session_section_log_0099(session_id);
