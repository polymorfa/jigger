/// <iq type="set" xmlns="w:pay">. Replies with one of: Success, Error.
pub fn build_br_payment_remove_custom_payment_method(credentialId: String) -> Node {
    NodeBuilder::new("iq")
        .attr("type", "set")
        .attr("to", "s.whatsapp.net")
        .attr("xmlns", "w:pay")
        .child(NodeBuilder::new("account").attr("action", "remove-custom-payment-method").attr("credential_id", credentialId).attr("country", "BR").build())
        .build()
}