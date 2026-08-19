/// <iq type="get" xmlns="privatestats">. Replies with one of: Success, ErrorNoRetry, ErrorRetry.
pub fn build_privatestats_sign_credential() -> Node {
    NodeBuilder::new("iq")
        .attr("xmlns", "privatestats")
        .attr("type", "get")
        .attr("to", "s.whatsapp.net")
        .child(NodeBuilder::new("sign_credential").attr("version", "2").build())
        .build()
}