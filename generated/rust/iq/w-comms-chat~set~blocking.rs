/// <iq type="set" xmlns="w:comms:chat">. Replies with one of: Success, ServerError.
pub fn build_psa_chat_block_set(action: String) -> Node {
    NodeBuilder::new("iq")
        .attr("to", "s.whatsapp.net")
        .attr("xmlns", "w:comms:chat")
        .attr("type", "set")
        .child(NodeBuilder::new("blocking").attr("action", action).build())
        .build()
}