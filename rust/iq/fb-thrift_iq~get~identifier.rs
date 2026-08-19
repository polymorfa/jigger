/// <iq type="get" xmlns="fb:thrift_iq">. Replies with one of: Success, Error.
pub fn build_biz_linking_get_account_nonce(smaxId: i64, from: Jid, scope: String) -> Node {
    NodeBuilder::new("iq")
        .attr("xmlns", "fb:thrift_iq")
        .attr("smax_id", smaxId)
        .attr("from", from)
        .attr("to", "s.whatsapp.net")
        .attr("type", "get")
        .child(NodeBuilder::new("identifier").attr("scope", scope).build()) // optional
        .build()
}