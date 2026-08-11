/// <iq type="unknown" xmlns="blocklist">. Replies with one of: SuccessWithMatch, SuccessWithMismatch, MigratedSuccessWithMismatch, CAPISuccessWithMismatch, InvalidRequest, ServerError.
pub fn build_blocklists_update_block_list(to: Jid) -> Node {
    NodeBuilder::new("iq").attr("type", "unknown").attr("xmlns", "blocklist").attr("to", to).build()
}