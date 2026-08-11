// BuildBrPaymentRemoveCustomPaymentMethod builds <iq type="set" xmlns="w:pay">. Replies with one of: Success, Error.
func BuildBrPaymentRemoveCustomPaymentMethod(credentialId string) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"type": "set", "to": "s.whatsapp.net", "xmlns": "w:pay"},
		Content: []waBinary.Node{
			{Tag: "account", Attrs: waBinary.Attrs{"action": "remove-custom-payment-method", "credential_id": credentialId, "country": "BR"}},
		},
	}
}