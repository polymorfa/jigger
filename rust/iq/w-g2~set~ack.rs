/// <iq type="set" xmlns="w:g2">. Replies with one of: Success, ClientError, ServerError.
pub fn build_groups_acknowledge_group(to: Jid, to: Jid) -> Node {
    NodeBuilder::new("iq")
        .attr("to", to)
        .attr("xmlns", "w:g2")
        .attr("type", "set")
        .child(NodeBuilder::new("ack").build())
        .build()
}