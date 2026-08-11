/// <iq type="set" xmlns="fb:thrift_iq">. Replies with one of: Success, Error.
pub fn build_biz_ctwa_native_ad_upload_ad_media(smaxId: i64, from: Jid, id: String, type: String) -> Node {
    NodeBuilder::new("iq")
        .attr("xmlns", "fb:thrift_iq")
        .attr("smax_id", smaxId)
        .attr("from", from)
        .attr("to", "s.whatsapp.net")
        .attr("type", "set")
        .child(NodeBuilder::new("media").attr("id", id).attr("type", type).build()) // optional
        .child(NodeBuilder::new("media_list").attr("id", id).attr("type", type).build()) // repeated
        .build()
}