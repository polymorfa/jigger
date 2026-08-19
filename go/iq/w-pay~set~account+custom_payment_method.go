// BuildBrPaymentCreateCustomPaymentMethod builds <iq type="set" xmlns="w:pay">. Replies with one of: Success, IQErrorWithCodeAndReason.
func BuildBrPaymentCreateCustomPaymentMethod(deviceId string) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"type": "set", "to": "s.whatsapp.net", "xmlns": "w:pay"},
		Content: []waBinary.Node{
			{Tag: "account", Attrs: waBinary.Attrs{"action": "create-custom-payment-method", "device_id": deviceId, "country": "BR"}},
		},
	}
}