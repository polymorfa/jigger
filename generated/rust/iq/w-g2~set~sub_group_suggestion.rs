/// <iq type="set" xmlns="w:g2">. Replies with one of: NewGroupSuggestionSuccess, ExistingGroupsSuggestionSuccess, ClientError, ServerError.
pub fn build_groups_create_sub_group_suggestion(to: Jid, to: Jid) -> Node {
    NodeBuilder::new("iq")
        .attr("to", to)
        .attr("xmlns", "w:g2")
        .attr("type", "set")
        .child(NodeBuilder::new("sub_group_suggestion").build())
        .build()
}