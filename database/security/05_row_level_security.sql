-- ====================================================================
-- 05_row_level_security.sql
-- Supabase Row Level Security (RLS) Policies
-- ====================================================================

ALTER TABLE candidate_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE exam_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY candidate_self_manage ON candidate_profiles
    FOR ALL
    TO authenticated
    USING (auth_user_id = auth.uid())
    WITH CHECK (auth_user_id = auth.uid());

CREATE POLICY candidate_sessions_access ON exam_sessions
    FOR ALL
    TO authenticated
    USING (candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid()))
    WITH CHECK (candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid()));

CREATE POLICY rls_policy_partition_0001 ON session_section_log_0001
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0002 ON session_section_log_0002
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0003 ON session_section_log_0003
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0004 ON session_section_log_0004
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0005 ON session_section_log_0005
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0006 ON session_section_log_0006
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0007 ON session_section_log_0007
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0008 ON session_section_log_0008
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0009 ON session_section_log_0009
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0010 ON session_section_log_0010
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0011 ON session_section_log_0011
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0012 ON session_section_log_0012
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0013 ON session_section_log_0013
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0014 ON session_section_log_0014
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0015 ON session_section_log_0015
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0016 ON session_section_log_0016
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0017 ON session_section_log_0017
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0018 ON session_section_log_0018
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0019 ON session_section_log_0019
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0020 ON session_section_log_0020
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0021 ON session_section_log_0021
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0022 ON session_section_log_0022
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0023 ON session_section_log_0023
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0024 ON session_section_log_0024
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0025 ON session_section_log_0025
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0026 ON session_section_log_0026
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0027 ON session_section_log_0027
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0028 ON session_section_log_0028
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0029 ON session_section_log_0029
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0030 ON session_section_log_0030
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0031 ON session_section_log_0031
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0032 ON session_section_log_0032
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0033 ON session_section_log_0033
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0034 ON session_section_log_0034
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0035 ON session_section_log_0035
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0036 ON session_section_log_0036
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0037 ON session_section_log_0037
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0038 ON session_section_log_0038
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0039 ON session_section_log_0039
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0040 ON session_section_log_0040
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0041 ON session_section_log_0041
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0042 ON session_section_log_0042
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0043 ON session_section_log_0043
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0044 ON session_section_log_0044
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0045 ON session_section_log_0045
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0046 ON session_section_log_0046
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0047 ON session_section_log_0047
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0048 ON session_section_log_0048
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0049 ON session_section_log_0049
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0050 ON session_section_log_0050
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0051 ON session_section_log_0051
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0052 ON session_section_log_0052
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0053 ON session_section_log_0053
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0054 ON session_section_log_0054
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0055 ON session_section_log_0055
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0056 ON session_section_log_0056
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0057 ON session_section_log_0057
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0058 ON session_section_log_0058
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0059 ON session_section_log_0059
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0060 ON session_section_log_0060
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0061 ON session_section_log_0061
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0062 ON session_section_log_0062
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0063 ON session_section_log_0063
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0064 ON session_section_log_0064
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0065 ON session_section_log_0065
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0066 ON session_section_log_0066
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0067 ON session_section_log_0067
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0068 ON session_section_log_0068
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0069 ON session_section_log_0069
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0070 ON session_section_log_0070
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0071 ON session_section_log_0071
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0072 ON session_section_log_0072
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0073 ON session_section_log_0073
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0074 ON session_section_log_0074
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0075 ON session_section_log_0075
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0076 ON session_section_log_0076
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0077 ON session_section_log_0077
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0078 ON session_section_log_0078
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0079 ON session_section_log_0079
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0080 ON session_section_log_0080
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0081 ON session_section_log_0081
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0082 ON session_section_log_0082
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0083 ON session_section_log_0083
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0084 ON session_section_log_0084
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0085 ON session_section_log_0085
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0086 ON session_section_log_0086
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0087 ON session_section_log_0087
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0088 ON session_section_log_0088
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0089 ON session_section_log_0089
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0090 ON session_section_log_0090
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0091 ON session_section_log_0091
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0092 ON session_section_log_0092
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0093 ON session_section_log_0093
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0094 ON session_section_log_0094
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0095 ON session_section_log_0095
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0096 ON session_section_log_0096
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0097 ON session_section_log_0097
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0098 ON session_section_log_0098
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));


CREATE POLICY rls_policy_partition_0099 ON session_section_log_0099
    FOR ALL
    TO authenticated
    USING (session_id IN (SELECT id FROM exam_sessions WHERE candidate_id IN (SELECT id FROM candidate_profiles WHERE auth_user_id = auth.uid())));
