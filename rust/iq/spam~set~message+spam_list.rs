/// <iq type="set" xmlns="spam">. Replies with one of: Success, Error.
pub fn build_spam_newsletter_report(jid: Jid, spamFlow: String, subject: String, from: Jid) -> Node {
    NodeBuilder::new("iq")
        .attr("type", "set")
        .attr("to", "s.whatsapp.net")
        .attr("xmlns", "spam")
        .child(NodeBuilder::new("spam_list").attr("jid", jid).attr("spam_flow", spamFlow).attr("subject", subject).build())
        .build()
}