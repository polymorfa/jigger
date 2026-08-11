/** <iq type="set" xmlns="w:pay">. Replies with one of: Success, Error. */
export function buildBrPaymentRemoveCustomPaymentMethod(credentialId: string): BinaryNode {
  return { tag: 'iq', attrs: { type: 'set', to: 's.whatsapp.net', xmlns: 'w:pay' }, content: [
      { tag: 'account', attrs: { action: 'remove-custom-payment-method', credential_id: credentialId, country: 'BR' } },
    ] }
}