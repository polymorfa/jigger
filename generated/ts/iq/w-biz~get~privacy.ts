/** <iq type="get" xmlns="w:biz">. Replies with one of: Success, Error. */
export function buildBizSettingsGetPrivacySetting(smaxId: number): BinaryNode {
  return { tag: 'iq', attrs: { xmlns: 'w:biz', to: 's.whatsapp.net', smax_id: smaxId, type: 'get' }, content: [
      { tag: 'privacy', attrs: {  } },
    ] }
}