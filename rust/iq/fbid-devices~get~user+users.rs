/// <iq type="get" xmlns="fbid:devices">. Replies with one of: Success, Error.
pub fn build_devices_fetch() -> Node {
    NodeBuilder::new("iq")
        .attr("to", "s.whatsapp.net")
        .attr("xmlns", "fbid:devices")
        .attr("type", "get")
        .child(NodeBuilder::new("users").build())
        .build()
}