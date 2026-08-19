/** <iq type="set" xmlns="md">. Replies with one of: Success, Error. */
export function buildMdCompanionFinish(jid: string): BinaryNode {
  return { tag: 'iq', attrs: { xmlns: 'md', to: 's.whatsapp.net', type: 'set' }, content: [
      { tag: 'link_code_companion_reg', attrs: { jid: jid, stage: 'companion_finish' } },
    ] }
}