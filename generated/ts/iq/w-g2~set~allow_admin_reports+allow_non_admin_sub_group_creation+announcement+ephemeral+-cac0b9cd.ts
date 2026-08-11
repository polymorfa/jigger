/** <iq type="set" xmlns="w:g2">. Replies with one of: Success, ClientError, ServerError. */
export function buildGroupsSetProperty(to: string, to: string, expiration: number, trigger?: number): BinaryNode {
  return { tag: 'iq', attrs: { to: to, xmlns: 'w:g2', type: 'set' }, content: [
      { tag: 'locked', attrs: {  } }, /* repeated */
      { tag: 'announcement', attrs: {  } }, /* repeated */
      { tag: 'no_frequently_forwarded', attrs: {  } }, /* repeated */
      { tag: 'ephemeral', attrs: { expiration: expiration, trigger: trigger } }, /* optional */
      { tag: 'unlocked', attrs: {  } }, /* repeated */
      { tag: 'not_announcement', attrs: {  } }, /* repeated */
      { tag: 'frequently_forwarded_ok', attrs: {  } }, /* repeated */
      { tag: 'not_ephemeral', attrs: {  } }, /* repeated */
      { tag: 'membership_approval_mode', attrs: {  } }, /* optional */
      { tag: 'allow_admin_reports', attrs: {  } }, /* repeated */
      { tag: 'not_allow_admin_reports', attrs: {  } }, /* repeated */
      { tag: 'allow_non_admin_sub_group_creation', attrs: {  } }, /* repeated */
      { tag: 'not_allow_non_admin_sub_group_creation', attrs: {  } }, /* repeated */
      { tag: 'group_history', attrs: {  } }, /* repeated */
      { tag: 'no_group_history', attrs: {  } }, /* repeated */
    ] }
}