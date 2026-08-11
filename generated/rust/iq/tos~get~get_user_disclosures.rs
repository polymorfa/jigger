/// <iq type="get" xmlns="tos">. Replies with one of: ClientSuccess, ClientError, ServerError.
pub fn build_user_notice_get_disclosures(t: i64) -> Node {
    NodeBuilder::new("iq")
        .attr("to", "s.whatsapp.net")
        .attr("xmlns", "tos")
        .attr("type", "get")
        .child(NodeBuilder::new("get_user_disclosures").attr("t", t).build())
        .build()
}