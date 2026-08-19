/** <iq type="get" xmlns="tos">. Replies with one of: ClientSuccess, ClientError, ServerError. */
export function buildUserNoticeGetDisclosureStageByIds(id: number, t: number): BinaryNode {
  return { tag: 'iq', attrs: { to: 's.whatsapp.net', xmlns: 'tos', type: 'get' }, content: [
      { tag: 'get_disclosure_stage_by_id', attrs: { id: id, t: t } }, /* repeated */
    ] }
}