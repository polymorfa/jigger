/// <iq type="get" xmlns="fb:thrift_iq">. Replies with one of: Success, TooManyAttempts, IncorrectNonce, Error.
pub fn build_biz_ctwa_ad_account_get_access_token_and_session_cookies(smaxId: i64, from: Jid) -> Node {
    NodeBuilder::new("iq")
        .attr("xmlns", "fb:thrift_iq")
        .attr("smax_id", smaxId)
        .attr("from", from)
        .attr("to", "s.whatsapp.net")
        .attr("type", "get")
        .child(NodeBuilder::new("parameters").build())
        .build()
}