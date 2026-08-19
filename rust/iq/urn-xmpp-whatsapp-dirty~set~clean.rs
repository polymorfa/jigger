/// <iq type="set" xmlns="urn:xmpp:whatsapp:dirty">. Replies with one of: Success, Error.
pub fn build_dirty_bits_clean() -> Node {
    NodeBuilder::new("iq")
        .attr("to", "s.whatsapp.net")
        .attr("xmlns", "urn:xmpp:whatsapp:dirty")
        .attr("type", "set")
        .child(NodeBuilder::new("clean").build())
        .build()
}