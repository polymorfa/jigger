/** <iq type="get" xmlns="waffle">. Replies with one of: Success, Error. */
export function buildWaffleGetCertificate(smaxId: number): BinaryNode {
  return { tag: 'iq', attrs: { xmlns: 'waffle', smax_id: smaxId, to: 's.whatsapp.net', type: 'get' }, content: [
      { tag: 'timestamp', attrs: {  } },
      { tag: 'payload_enc_certificates', attrs: {  } }, /* repeated */
      { tag: 'password_pem', attrs: {  } }, /* repeated */
    ] }
}