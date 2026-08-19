/// <iq type="set" xmlns="spam">. Replies with one of: Success, Error.
pub fn build_spam_status_report_v2(to: Jid) -> Node {
    NodeBuilder::new("iq").attr("type", "set").attr("xmlns", "spam").attr("to", to).build()
}