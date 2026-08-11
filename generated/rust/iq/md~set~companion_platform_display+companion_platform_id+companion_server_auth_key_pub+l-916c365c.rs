/// <iq type="set" xmlns="md">. Replies with one of: NotifyCompanion, Error.
pub fn build_md_companion_hello(jid: Jid, shouldShowPushNotification: String) -> Node {
    NodeBuilder::new("iq")
        .attr("xmlns", "md")
        .attr("to", "s.whatsapp.net")
        .attr("type", "set")
        .child(NodeBuilder::new("link_code_companion_reg").attr("jid", jid).attr("stage", "companion_hello").attr("should_show_push_notification", shouldShowPushNotification).build())
        .build()
}