/// <iq type="get" xmlns="waffle">. Replies with one of: Success, Error.
pub fn build_waffle_force_suspend_state(smaxId: i64) -> Node {
    NodeBuilder::new("iq")
        .attr("xmlns", "waffle")
        .attr("smax_id", smaxId)
        .attr("to", "s.whatsapp.net")
        .attr("type", "get")
        .child(NodeBuilder::new("timestamp").build())
        .build()
}