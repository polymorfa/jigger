/// <iq type="set" xmlns="w:g2">. Replies with one of: SuccessMultiAdmin, ClientError, ServerError.
pub fn build_groups_promote_demote_admin(to: Jid, to: Jid, jid: Jid) -> Node {
    NodeBuilder::new("iq")
        .attr("to", to)
        .attr("xmlns", "w:g2")
        .attr("type", "set")
        .child(NodeBuilder::new("admin").build())
        .build()
}