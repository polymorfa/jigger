/// <iq type="set" xmlns="fbid:devices">. Replies with one of: Success, Error.
pub fn build_devices_remove(id: i64) -> Node {
    NodeBuilder::new("iq")
        .attr("to", "s.whatsapp.net")
        .attr("xmlns", "fbid:devices")
        .attr("type", "set")
        .child(NodeBuilder::new("remove").attr("id", id).build())
        .build()
}