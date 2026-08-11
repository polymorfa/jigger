/** <iq type="get" xmlns="w:biz">. Replies with one of: Success, Error. */
export function buildSmbMeteredMessagingAccountGetSMBMeteredMessagingCheckout(smaxId: number, from?: string, id: string, freeReservedMsgs: number, sendTimestamp?: number): BinaryNode {
  return { tag: 'iq', attrs: { xmlns: 'w:biz', smax_id: smaxId, from: from, to: 's.whatsapp.net', type: 'get' }, content: [
      { tag: 'participants', attrs: {  } },
      { tag: 'use_ad_account', attrs: {  } }, /* repeated */
      { tag: 'skip_dedupe', attrs: {  } }, /* repeated */
      { tag: 'offer', attrs: { id: id } }, /* optional */
      { tag: 'pending_campaigns', attrs: {  } }, /* optional */
    ] }
}