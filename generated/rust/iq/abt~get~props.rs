/// <iq type="get" xmlns="abt">. Replies with one of: Success, ErrorNoRetry, ErrorRetry.
pub fn build_ab_props_get_experiment_config(hash: String, refreshId: i64) -> Node {
    NodeBuilder::new("iq")
        .attr("xmlns", "abt")
        .attr("to", "s.whatsapp.net")
        .attr("type", "get")
        .child(NodeBuilder::new("props").attr("protocol", "1").attr("hash", hash).attr("refresh_id", refreshId).build())
        .build()
}