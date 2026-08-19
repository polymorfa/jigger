/// <iq type="get" xmlns="fb:thrift_iq">. Replies with one of: Success, Forbidden, Error.
pub fn build_biz_linking_get_linked_accounts(smaxId: i64, from: Jid) -> Node {
    NodeBuilder::new("iq")
        .attr("xmlns", "fb:thrift_iq")
        .attr("smax_id", smaxId)
        .attr("from", from)
        .attr("to", "s.whatsapp.net")
        .attr("type", "get")
        .child(NodeBuilder::new("linked_accounts").build())
        .build()
}