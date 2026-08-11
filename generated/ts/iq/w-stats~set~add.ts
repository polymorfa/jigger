/** <iq type="set" xmlns="w:stats">. Replies with one of: Success, ErrorNoRetry, ErrorRetry. */
export function buildStatsSendBuffer(t: number): BinaryNode {
  return { tag: 'iq', attrs: { xmlns: 'w:stats', to: 's.whatsapp.net', type: 'set' }, content: [
      { tag: 'add', attrs: { t: t } },
    ] }
}