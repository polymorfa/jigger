/// <iq type="set" xmlns="w:g2">. Replies with one of: Success, GroupAlreadyExists, ClientError, ServerError.
pub fn build_groups_create(to: Jid, to: String) -> Node {
    NodeBuilder::new("iq")
        .attr("to", to)
        .attr("xmlns", "w:g2")
        .attr("type", "set")
        .build()
}