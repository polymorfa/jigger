/// <iq type="get" xmlns="blocklist">. Replies with one of: SuccessWithMismatch, MigratedSuccessWithMismatch, ForceMigratedSuccessWithMismatch, CAPISuccessWithMismatch, SuccessWithMatch, InvalidRequest, InternalServerError.
pub fn build_blocklists_get_block_list(dhash: String) -> Node {
    NodeBuilder::new("iq")
        .attr("to", "s.whatsapp.net")
        .attr("xmlns", "blocklist")
        .attr("type", "get")
        .child(NodeBuilder::new("item").attr("dhash", dhash).build()) // optional
        .build()
}