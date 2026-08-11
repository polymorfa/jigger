/// <iq type="set" xmlns="w:biz">. Replies with one of: Success, Error.
pub fn build_biz_settings_set_privacy_setting(smaxId: i64) -> Node {
    NodeBuilder::new("iq")
        .attr("xmlns", "w:biz")
        .attr("to", "s.whatsapp.net")
        .attr("smax_id", smaxId)
        .attr("type", "set")
        .build()
}