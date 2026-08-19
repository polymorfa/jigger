/// <iq type="get" xmlns="fbid:devices">. Replies with one of: Success, Error.
pub fn build_devices_fetch_self() -> Node {
    NodeBuilder::new("iq")
        .attr("to", "s.whatsapp.net")
        .attr("xmlns", "fbid:devices")
        .attr("type", "get")
        .child(NodeBuilder::new("self").build())
        .build()
}