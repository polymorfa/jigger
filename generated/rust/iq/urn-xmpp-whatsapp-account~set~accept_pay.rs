/// <iq type="set" xmlns="urn:xmpp:whatsapp:account">. Replies with one of: Success, Error.
pub fn build_account_set_payments_tosv3(tosVersion: i64) -> Node {
    NodeBuilder::new("iq")
        .attr("to", "s.whatsapp.net")
        .attr("xmlns", "urn:xmpp:whatsapp:account")
        .attr("type", "set")
        .child(NodeBuilder::new("accept_pay").attr("version", "3").attr("tos_version", tosVersion).build())
        .build()
}