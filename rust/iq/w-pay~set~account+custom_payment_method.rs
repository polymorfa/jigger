/// <iq type="set" xmlns="w:pay">. Replies with one of: Success, IQErrorWithCodeAndReason.
pub fn build_br_payment_create_custom_payment_method(deviceId: String) -> Node {
    NodeBuilder::new("iq")
        .attr("type", "set")
        .attr("to", "s.whatsapp.net")
        .attr("xmlns", "w:pay")
        .child(NodeBuilder::new("account").attr("action", "create-custom-payment-method").attr("device_id", deviceId).attr("country", "BR").build())
        .build()
}