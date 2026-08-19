/** <iq type="get" xmlns="privacy">. Replies with one of: SuccessLID, Success, Error. */
export function buildPrivacyGetContactBlacklist(): BinaryNode {
  return { tag: 'iq', attrs: { to: 's.whatsapp.net', xmlns: 'privacy', type: 'get' }, content: [
      { tag: 'privacy', attrs: {  } },
    ] }
}