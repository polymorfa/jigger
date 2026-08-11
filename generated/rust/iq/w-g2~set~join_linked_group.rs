/// <iq type="set" xmlns="w:g2">. Replies with one of: GroupJoinRequestSuccess, Success, ClientError, ServerError.
pub fn build_groups_join_linked_group(to: Jid, to: Jid, type: String, jid: Jid) -> Node {
    NodeBuilder::new("iq")
        .attr("to", to)
        .attr("xmlns", "w:g2")
        .attr("type", "set")
        .child(NodeBuilder::new("join_linked_group").attr("type", type).attr("jid", jid).build())
        .build()
}