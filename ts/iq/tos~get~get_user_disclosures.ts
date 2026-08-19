/** <iq type="get" xmlns="tos">. Replies with one of: ClientSuccess, ClientError, ServerError. */
export function buildUserNoticeGetDisclosures(t: number): BinaryNode {
  return { tag: 'iq', attrs: { to: 's.whatsapp.net', xmlns: 'tos', type: 'get' }, content: [
      { tag: 'get_user_disclosures', attrs: { t: t } },
    ] }
}