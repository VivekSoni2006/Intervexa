/**
 * Shapes database user rows into API-safe response objects.
 * Keep this allow-list aligned with the public columns selected by user.service.js.
 */
const PROFILE_FIELDS = [
  'id', 'email', 'full_name', 'avatar_url', 'avatar_updated_at',
  'is_active', 'profile_completed', 'last_login', 'created_at', 'updated_at',
];

function pick(source, fields) {
  if (!source || typeof source !== 'object') return {};
  return Object.fromEntries(fields.filter((field) => field in source).map((field) => [field, source[field]]));
}

const userMapper = {
  toProfile(row) {
    return pick(row, PROFILE_FIELDS);
  },
  toStatusView(row) {
    return pick(row, ['id', 'is_active', 'updated_at']);
  },
  toCompletionView(row) {
    return pick(row, ['id', 'profile_completed', 'updated_at']);
  },
};

export default userMapper;
