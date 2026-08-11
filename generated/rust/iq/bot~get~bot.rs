/// <iq type="get" xmlns="bot">. Replies with one of: SuccessV2, SuccessV3, Error.
pub fn build_bot_bot_list(v: String, bhash: String, jid: Jid) -> Node {
    NodeBuilder::new("iq")
        .attr("to", "s.whatsapp.net")
        .attr("xmlns", "bot")
        .attr("type", "get")
        .child(NodeBuilder::new("bot").attr("v", v).attr("bhash", bhash).build())
        .build()
}