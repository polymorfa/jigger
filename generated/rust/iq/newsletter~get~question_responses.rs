/// <iq type="get" xmlns="newsletter">. Replies with one of: Success, ClientError, ServerError.
pub fn build_newsletters_get_newsletter_responses(to: Jid, to: Jid) -> Node {
    NodeBuilder::new("iq")
        .attr("to", to)
        .attr("xmlns", "newsletter")
        .attr("type", "get")
        .build()
}