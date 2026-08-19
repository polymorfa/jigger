/** <iq type="set" xmlns="w:pay">. Replies with one of: Success, IQErrorWithCodeAndReason. */
export function buildBrPaymentCreateCustomPaymentMethod(deviceId: string): BinaryNode {
  return { tag: 'iq', attrs: { type: 'set', to: 's.whatsapp.net', xmlns: 'w:pay' }, content: [
      { tag: 'account', attrs: { action: 'create-custom-payment-method', device_id: deviceId, country: 'BR' } },
    ] }
}