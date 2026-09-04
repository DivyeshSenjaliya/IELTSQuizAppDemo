-- ====================================================================
-- 08_cambridge_test_bank_seed.sql
-- Seeders for Cambridge Practice Tests and AWL Vocab Bank
-- ====================================================================

INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('c18-seed-01', 'READING', 'TRUE_FALSE_NOT_GIVEN', 'The early Silk Road network reached Mediterranean ports.', '["TRUE"]'::jsonb, 'Passage text confirms trade reaches Rome.')
ON CONFLICT (id) DO NOTHING;

INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0001', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 1', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0002', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 2', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0003', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 3', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0004', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 4', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0005', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 5', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0006', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 6', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0007', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 7', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0008', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 8', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0009', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 9', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0010', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 10', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0011', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 11', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0012', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 12', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0013', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 13', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0014', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 14', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0015', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 15', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0016', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 16', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0017', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 17', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0018', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 18', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0019', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 19', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0020', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 20', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0021', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 21', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0022', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 22', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0023', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 23', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0024', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 24', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0025', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 25', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0026', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 26', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0027', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 27', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0028', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 28', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0029', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 29', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0030', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 30', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0031', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 31', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0032', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 32', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0033', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 33', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0034', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 34', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0035', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 35', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0036', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 36', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0037', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 37', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0038', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 38', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0039', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 39', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0040', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 40', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0041', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 41', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0042', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 42', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0043', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 43', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0044', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 44', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0045', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 45', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0046', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 46', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0047', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 47', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0048', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 48', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0049', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 49', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0050', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 50', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0051', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 51', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0052', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 52', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0053', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 53', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0054', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 54', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0055', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 55', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0056', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 56', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0057', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 57', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0058', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 58', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0059', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 59', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0060', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 60', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0061', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 61', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0062', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 62', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0063', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 63', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0064', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 64', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0065', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 65', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0066', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 66', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0067', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 67', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0068', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 68', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0069', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 69', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0070', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 70', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0071', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 71', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0072', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 72', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0073', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 73', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0074', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 74', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0075', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 75', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0076', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 76', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0077', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 77', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0078', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 78', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0079', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 79', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0080', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 80', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0081', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 81', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0082', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 82', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0083', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 83', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0084', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 84', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0085', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 85', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0086', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 86', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0087', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 87', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0088', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 88', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0089', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 89', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0090', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 90', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0091', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 91', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0092', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 92', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0093', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 93', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0094', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 94', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0095', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 95', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0096', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 96', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0097', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 97', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0098', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 98', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;


INSERT INTO question_definitions (id, module_skill, format_type, prompt_text, correct_answers, explanation_text)
VALUES
    ('seed-item-0099', 'LISTENING', 'NOTE_COMPLETION', 'Customer contact telephone prefix 99', '["0412893"]'::jsonb, 'Audio Section 1 transcription verification.')
ON CONFLICT (id) DO NOTHING;
