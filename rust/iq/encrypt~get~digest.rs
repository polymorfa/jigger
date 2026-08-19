/// <iq type="get" xmlns="encrypt">. Replies with one of: Success, RequestError, ServerError.
pub fn build_pre_keys_fetch_digest() -> Node {
    NodeBuilder::new("iq")
        .attr("type", "get")
        .attr("xmlns", "encrypt")
        .attr("to", "s.whatsapp.net")
        .child(NodeBuilder::new("digest").build())
        .build()
}