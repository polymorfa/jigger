/// <iq type="get" xmlns="tos">. Replies with one of: ClientSuccess, ClientError, ServerError.
pub fn build_user_notice_get_disclosure_stage_by_ids(id: i64, t: i64) -> Node {
    NodeBuilder::new("iq")
        .attr("to", "s.whatsapp.net")
        .attr("xmlns", "tos")
        .attr("type", "get")
        .child(NodeBuilder::new("get_disclosure_stage_by_id").attr("id", id).attr("t", t).build()) // repeated
        .build()
}