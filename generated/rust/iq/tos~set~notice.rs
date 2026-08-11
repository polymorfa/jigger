/// <iq type="set" xmlns="tos">.
pub fn build_user_notice_set() -> Node {
    NodeBuilder::new("iq")
        .attr("to", "s.whatsapp.net")
        .attr("xmlns", "tos")
        .attr("type", "set")
        .child(NodeBuilder::new("notice").build())
        .build()
}