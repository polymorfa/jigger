/// <iq type="set" xmlns="w:g2">. Replies with one of: GroupJoinRequestSuccess, Success, ClientError, ServerError.
pub fn build_groups_accept_group_add(to: Jid, to: Jid, code: String, expiration: i64, admin: Jid) -> Node {
    NodeBuilder::new("iq")
        .attr("to", to)
        .attr("xmlns", "w:g2")
        .attr("type", "set")
        .child(NodeBuilder::new("accept").attr("code", code).attr("expiration", expiration).attr("admin", admin).build())
        .build()
}