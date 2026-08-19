/// <iq type="set" xmlns="md">. Replies with one of: Success.
pub fn build_md_set_passkey_prologue() -> Node {
    NodeBuilder::new("iq")
        .attr("to", "s.whatsapp.net")
        .attr("xmlns", "md")
        .attr("type", "set")
        .child(NodeBuilder::new("passkey_prologue").build())
        .build()
}