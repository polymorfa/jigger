/// <iq type="get" xmlns="newsletter">. Replies with one of: Success, ClientError, ServerError.
pub fn build_newsletters_get_newsletter_status_updates(to: Jid, to: Jid, count: i64, since: i64) -> Node {
    NodeBuilder::new("iq")
        .attr("to", to)
        .attr("xmlns", "newsletter")
        .attr("type", "get")
        .child(NodeBuilder::new("status_updates").attr("count", count).attr("since", since).build())
        .build()
}