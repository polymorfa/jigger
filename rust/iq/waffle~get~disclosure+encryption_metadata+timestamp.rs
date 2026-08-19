/// <iq type="get" xmlns="waffle">. Replies with one of: Success, Error.
pub fn build_waffle_generate_waent_acuser(smaxId: i64, id: i64, version: String, lg: String, lc: String) -> Node {
    NodeBuilder::new("iq")
        .attr("xmlns", "waffle")
        .attr("smax_id", smaxId)
        .attr("to", "s.whatsapp.net")
        .attr("type", "get")
        .child(NodeBuilder::new("encryption_metadata").build())
        .child(NodeBuilder::new("timestamp").build())
        .child(NodeBuilder::new("disclosure").attr("id", id).attr("version", version).attr("lg", lg).attr("lc", lc).build())
        .build()
}