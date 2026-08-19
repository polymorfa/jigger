/// <iq type="get" xmlns="waffle">. Replies with one of: Success, Error.
pub fn build_waffle_encrypted_payload(smaxId: i64) -> Node {
    NodeBuilder::new("iq")
        .attr("xmlns", "waffle")
        .attr("smax_id", smaxId)
        .attr("to", "s.whatsapp.net")
        .attr("type", "get")
        .child(NodeBuilder::new("encryption_metadata").build())
        .child(NodeBuilder::new("timestamp").build())
        .child(NodeBuilder::new("fbid").build())
        .child(NodeBuilder::new("action").build())
        .build()
}