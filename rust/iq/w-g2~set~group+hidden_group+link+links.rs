/// <iq type="set" xmlns="w:g2">. Replies with one of: Success, ClientError, ServerError.
pub fn build_groups_link_sub_groups(to: Jid, to: Jid, jid: Jid) -> Node {
    NodeBuilder::new("iq")
        .attr("to", to)
        .attr("xmlns", "w:g2")
        .attr("type", "set")
        .child(NodeBuilder::new("links").build())
        .build()
}