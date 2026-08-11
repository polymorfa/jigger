/// <iq type="set" xmlns="newsletter">. Replies with one of: Success, ClientError, ServerError.
pub fn build_newsletters_subscribe_to_live_updates(to: Jid, to: Jid) -> Node {
    NodeBuilder::new("iq")
        .attr("to", to)
        .attr("xmlns", "newsletter")
        .attr("type", "set")
        .child(NodeBuilder::new("live_updates").build())
        .build()
}