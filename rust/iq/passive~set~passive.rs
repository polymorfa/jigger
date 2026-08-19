/// <iq type="set" xmlns="passive">. Replies with one of: Success.
pub fn build_passive_mode_passive_iq() -> Node {
    NodeBuilder::new("iq")
        .attr("type", "set")
        .attr("xmlns", "passive")
        .attr("to", "s.whatsapp.net")
        .child(NodeBuilder::new("passive").build())
        .build()
}