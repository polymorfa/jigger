/// <iq type="set" xmlns="md">. Replies with one of: Success.
pub fn build_md_set_companion_nonce() -> Node {
    NodeBuilder::new("iq")
        .attr("to", "s.whatsapp.net")
        .attr("xmlns", "md")
        .attr("type", "set")
        .child(NodeBuilder::new("companion_nonce").build())
        .build()
}