/// <iq type="get" xmlns="newsletter">. Replies with one of: Success, ClientError, ServerError.
pub fn build_newsletters_my_add_ons(limit: i64, jid: Jid) -> Node {
    NodeBuilder::new("iq")
        .attr("to", "s.whatsapp.net")
        .attr("xmlns", "newsletter")
        .attr("type", "get")
        .child(NodeBuilder::new("my_addons").attr("limit", limit).attr("jid", jid).build())
        .build()
}