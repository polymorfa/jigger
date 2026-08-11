/// <iq type="set" xmlns="md">. Replies with one of: Success, Error.
pub fn build_md_companion_finish(jid: Jid) -> Node {
    NodeBuilder::new("iq")
        .attr("xmlns", "md")
        .attr("to", "s.whatsapp.net")
        .attr("type", "set")
        .child(NodeBuilder::new("link_code_companion_reg").attr("jid", jid).attr("stage", "companion_finish").build())
        .build()
}