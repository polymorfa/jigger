/// <iq type="get" xmlns="w:biz">. Replies with one of: Success, Error.
pub fn build_biz_marketing_message_get_business_eligibility(smaxId: i64, from: Jid, metaVerified: String, marketingMessages: String, genai: String, genaiImage: String, metaOne: String, bbPro: String) -> Node {
    NodeBuilder::new("iq")
        .attr("xmlns", "w:biz")
        .attr("smax_id", smaxId)
        .attr("from", from)
        .attr("to", "s.whatsapp.net")
        .attr("type", "get")
        .child(NodeBuilder::new("features").attr("meta_verified", metaVerified).attr("marketing_messages", marketingMessages).attr("genai", genai).attr("genai_image", genaiImage).attr("meta_one", metaOne).attr("bb_pro", bbPro).build())
        .build()
}