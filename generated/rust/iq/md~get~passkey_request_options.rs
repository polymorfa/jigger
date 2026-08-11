/// <iq type="get" xmlns="md">. Replies with one of: Success, Error.
pub fn build_md_get_passkey_request_options() -> Node {
    NodeBuilder::new("iq")
        .attr("to", "s.whatsapp.net")
        .attr("xmlns", "md")
        .attr("type", "get")
        .child(NodeBuilder::new("passkey_request_options").build())
        .build()
}