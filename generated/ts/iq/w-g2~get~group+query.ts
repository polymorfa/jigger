/** <iq type="get" xmlns="w:g2">. Replies with one of: Success, ClientError, ServerError. */
export function buildGroupsBatchGetGroupInfo(to: string, to: string, context?: string, jid: string): BinaryNode {
  return { tag: 'iq', attrs: { to: to, xmlns: 'w:g2', type: 'get' }, content: [
      { tag: 'query', attrs: { context: context } },
    ] }
}