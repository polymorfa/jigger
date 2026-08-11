/// <iq type="get" xmlns="encrypt">. Replies with one of: Success, RequestError, ServerError.
pub fn build_pre_keys_fetch_missing_pre_keys(contextJid: Jid, jid: Jid, id: i64) -> Node {
    NodeBuilder::new("iq")
        .attr("type", "get")
        .attr("xmlns", "encrypt")
        .attr("to", "s.whatsapp.net")
        .child(NodeBuilder::new("key_fetch").attr("pqsupport", "true").attr("context_jid", contextJid).build())
        .build()
}