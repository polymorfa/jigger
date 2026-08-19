/** <iq type="set" xmlns="passive">. Replies with one of: Success. */
export function buildPassiveModePassiveIQ(): BinaryNode {
  return { tag: 'iq', attrs: { type: 'set', xmlns: 'passive', to: 's.whatsapp.net' }, content: [
      { tag: 'passive', attrs: {  } },
    ] }
}