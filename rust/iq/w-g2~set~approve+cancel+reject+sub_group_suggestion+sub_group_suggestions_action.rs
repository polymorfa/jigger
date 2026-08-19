/// <iq type="set" xmlns="w:g2">. Replies with one of: Success, ClientError, ServerError.
pub fn build_groups_sub_group_suggestions_action(to: Jid, to: Jid) -> Node {
    NodeBuilder::new("iq")
        .attr("to", to)
        .attr("xmlns", "w:g2")
        .attr("type", "set")
        .child(NodeBuilder::new("sub_group_suggestions_action").build())
        .build()
}