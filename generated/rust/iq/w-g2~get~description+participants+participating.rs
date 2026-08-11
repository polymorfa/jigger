/// <iq type="get" xmlns="w:g2">. Replies with one of: Success, ClientError, ServerError.
pub fn build_groups_get_participating_groups(to: Jid, to: String) -> Node {
    NodeBuilder::new("iq")
        .attr("to", to)
        .attr("xmlns", "w:g2")
        .attr("type", "get")
        .child(NodeBuilder::new("participating").build())
        .build()
}