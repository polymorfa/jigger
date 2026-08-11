/// <iq type="set" xmlns="md">. Replies with one of: Success.
pub fn build_md_set_encrypted_pairing() -> Node {
    NodeBuilder::new("iq")
        .attr("to", "s.whatsapp.net")
        .attr("xmlns", "md")
        .attr("type", "set")
        .child(NodeBuilder::new("encrypted_pairing_request").build())
        .build()
}