/// <iq type="get" xmlns="w:biz">. Replies with one of: Success, Error.
pub fn build_biz_settings_get_privacy_setting(smaxId: i64) -> Node {
    NodeBuilder::new("iq")
        .attr("xmlns", "w:biz")
        .attr("to", "s.whatsapp.net")
        .attr("smax_id", smaxId)
        .attr("type", "get")
        .child(NodeBuilder::new("privacy").build())
        .build()
}