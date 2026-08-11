/// <iq type="set" xmlns="w:g2">. Replies with one of: SuccessPromote, SuccessDemote, ClientError, ServerError.
pub fn build_groups_promote_demote(to: Jid, to: Jid, jid: Jid) -> Node {
    NodeBuilder::new("iq")
        .attr("to", to)
        .attr("xmlns", "w:g2")
        .attr("type", "set")
        .child(NodeBuilder::new("promote").build()) // optional
        .child(NodeBuilder::new("demote").build()) // optional
        .build()
}