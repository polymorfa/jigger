/// <iq type="set" xmlns="tos">.
pub fn build_user_notice_set_result(id: i64, result: i64) -> Node {
    NodeBuilder::new("iq")
        .attr("to", "s.whatsapp.net")
        .attr("xmlns", "tos")
        .attr("type", "set")
        .child(NodeBuilder::new("trackable").attr("id", id).attr("result", result).build())
        .build()
}