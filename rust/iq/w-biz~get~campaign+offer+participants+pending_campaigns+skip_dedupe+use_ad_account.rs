/// <iq type="get" xmlns="w:biz">. Replies with one of: Success, Error.
pub fn build_smb_metered_messaging_account_get_smbmetered_messaging_checkout(smaxId: i64, from: Jid, id: String, freeReservedMsgs: i64, sendTimestamp: i64) -> Node {
    NodeBuilder::new("iq")
        .attr("xmlns", "w:biz")
        .attr("smax_id", smaxId)
        .attr("from", from)
        .attr("to", "s.whatsapp.net")
        .attr("type", "get")
        .child(NodeBuilder::new("participants").build())
        .child(NodeBuilder::new("use_ad_account").build()) // repeated
        .child(NodeBuilder::new("skip_dedupe").build()) // repeated
        .child(NodeBuilder::new("offer").attr("id", id).build()) // optional
        .child(NodeBuilder::new("pending_campaigns").build()) // optional
        .build()
}