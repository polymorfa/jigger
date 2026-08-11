/** <iq type="set" xmlns="w:biz">. Replies with one of: Success, Error. */
export function buildBizSettingsSetPrivacySetting(smaxId: number): BinaryNode {
  return { tag: 'iq', attrs: { xmlns: 'w:biz', to: 's.whatsapp.net', smax_id: smaxId, type: 'set' } }
}