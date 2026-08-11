/// <iq type="set" xmlns="encrypt">. Replies with one of: Success, RequestError, ServerError.
pub fn build_pre_keys_delete() -> Node {
    NodeBuilder::new("iq")
        .attr("type", "set")
        .attr("xmlns", "encrypt")
        .attr("to", "s.whatsapp.net")
        .child(NodeBuilder::new("list").build()) // repeated
        .child(NodeBuilder::new("pq_list").build()) // repeated
        .child(NodeBuilder::new("op").attr("mode", "delete").build())
        .build()
}