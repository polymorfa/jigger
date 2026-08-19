/// <iq type="get" xmlns="w:comms:chat">. Replies with one of: Success, ServerError.
pub fn build_psa_chat_block_get() -> Node {
    NodeBuilder::new("iq")
        .attr("to", "s.whatsapp.net")
        .attr("xmlns", "w:comms:chat")
        .attr("type", "get")
        .child(NodeBuilder::new("query").build())
        .build()
}