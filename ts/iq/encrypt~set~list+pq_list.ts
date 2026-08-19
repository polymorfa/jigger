/** <iq type="set" xmlns="encrypt">. Replies with one of: Success, RequestError, ServerError. */
export function buildPreKeysDelete(): BinaryNode {
  return { tag: 'iq', attrs: { type: 'set', xmlns: 'encrypt', to: 's.whatsapp.net' }, content: [
      { tag: 'list', attrs: {  } }, /* repeated */
      { tag: 'pq_list', attrs: {  } }, /* repeated */
      { tag: 'op', attrs: { mode: 'delete' } },
    ] }
}