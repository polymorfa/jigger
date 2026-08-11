/// <iq type="get" xmlns="w:g2">. Replies with one of: Success, ClientError, ServerError.
pub fn build_groups_get_invite_group_info(to: Jid, to: String, code: String) -> Node {
    NodeBuilder::new("iq")
        .attr("to", to)
        .attr("xmlns", "w:g2")
        .attr("type", "get")
        .child(NodeBuilder::new("invite").attr("code", code).build())
        .build()
}