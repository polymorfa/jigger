/// <iq type="get" xmlns="encrypt">. Replies with one of: Success, RequestError, ServerError.
pub fn build_pre_keys_fetch_key_bundles(contextJid: Jid, jid: Jid) -> Node {
    NodeBuilder::new("iq")
        .attr("type", "get")
        .attr("xmlns", "encrypt")
        .attr("to", "s.whatsapp.net")
        .child(NodeBuilder::new("key").attr("pqsupport", "true").attr("context_jid", contextJid).build())
        .build()
}