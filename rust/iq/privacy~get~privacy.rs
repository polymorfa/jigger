/// <iq type="get" xmlns="privacy">. Replies with one of: SuccessLID, Success, Error.
pub fn build_privacy_get_contact_blacklist() -> Node {
    NodeBuilder::new("iq")
        .attr("to", "s.whatsapp.net")
        .attr("xmlns", "privacy")
        .attr("type", "get")
        .child(NodeBuilder::new("privacy").build())
        .build()
}