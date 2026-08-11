/// <iq type="set" xmlns="w:stats">. Replies with one of: Success, ErrorNoRetry, ErrorRetry.
pub fn build_stats_send_buffer(t: i64) -> Node {
    NodeBuilder::new("iq")
        .attr("xmlns", "w:stats")
        .attr("to", "s.whatsapp.net")
        .attr("type", "set")
        .child(NodeBuilder::new("add").attr("t", t).build())
        .build()
}