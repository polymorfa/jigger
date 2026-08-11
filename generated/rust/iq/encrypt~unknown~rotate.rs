/// <iq type="unknown" xmlns="encrypt">. Replies with one of: Success, ValidationError, RequestError, ServerError.
pub fn build_pre_keys_rotate_signed(to: Jid) -> Node {
    NodeBuilder::new("iq").attr("type", "unknown").attr("xmlns", "encrypt").attr("to", to).build()
}