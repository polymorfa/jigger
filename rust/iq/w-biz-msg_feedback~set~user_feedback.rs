/// <iq type="set" xmlns="w:biz:msg_feedback">. Replies with one of: Success, InvalidRequest, ServerError.
pub fn build_biz_msg_user_feedback_update_preference(action: String, jid: Jid, feedback: String) -> Node {
    NodeBuilder::new("iq")
        .attr("xmlns", "w:biz:msg_feedback")
        .attr("to", "s.whatsapp.net")
        .attr("type", "set")
        .child(NodeBuilder::new("user_feedback").attr("action", action).attr("jid", jid).attr("feedback", feedback).build())
        .build()
}