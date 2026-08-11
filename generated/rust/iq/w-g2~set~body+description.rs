/// <iq type="set" xmlns="w:g2">. Replies with one of: Success, ClientError, ServerError.
pub fn build_groups_set_description(to: Jid, to: Jid, id: String, prev: String) -> Node {
    NodeBuilder::new("iq")
        .attr("to", to)
        .attr("xmlns", "w:g2")
        .attr("type", "set")
        .child(NodeBuilder::new("description").attr("id", id).attr("prev", prev).attr("delete", "true").build())
        .build()
}