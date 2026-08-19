/// <iq type="set" xmlns="optoutlist">. Replies with one of: SuccessWithMatch, SuccessWithMismatch, InvalidRequest, ServerError.
pub fn build_blocklists_update_opt_out_list(jid: Jid, category: String, action: String, dhash: String, reason: String, entryPoint: String, signupId: String, duration: i64) -> Node {
    NodeBuilder::new("iq")
        .attr("to", "s.whatsapp.net")
        .attr("xmlns", "optoutlist")
        .attr("type", "set")
        .child(NodeBuilder::new("item").attr("jid", jid).attr("category", category).attr("action", action).attr("dhash", dhash).attr("reason", reason).attr("entry_point", entryPoint).attr("signup_id", signupId).attr("duration", duration).build())
        .build()
}