/// <iq type="get" xmlns="md">. Replies with one of: Success.
pub fn build_md_get_ref() -> Node {
    NodeBuilder::new("iq")
        .attr("to", "s.whatsapp.net")
        .attr("xmlns", "md")
        .attr("type", "get")
        .child(NodeBuilder::new("ref").build())
        .build()
}