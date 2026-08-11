/// <iq type="get" xmlns="optoutlist">. Replies with one of: SuccessWithMismatch, SuccessWithMatch, InvalidRequest, InternalServerError.
pub fn build_blocklists_get_opt_out_list(category: String, dhash: String) -> Node {
    NodeBuilder::new("iq")
        .attr("to", "s.whatsapp.net")
        .attr("xmlns", "optoutlist")
        .attr("type", "get")
        .attr("category", category)
        .child(NodeBuilder::new("item").attr("dhash", dhash).build()) // optional
        .build()
}