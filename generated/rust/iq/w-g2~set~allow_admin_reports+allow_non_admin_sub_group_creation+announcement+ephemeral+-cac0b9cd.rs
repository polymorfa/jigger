/// <iq type="set" xmlns="w:g2">. Replies with one of: Success, ClientError, ServerError.
pub fn build_groups_set_property(to: Jid, to: Jid, expiration: i64, trigger: i64) -> Node {
    NodeBuilder::new("iq")
        .attr("to", to)
        .attr("xmlns", "w:g2")
        .attr("type", "set")
        .child(NodeBuilder::new("locked").build()) // repeated
        .child(NodeBuilder::new("announcement").build()) // repeated
        .child(NodeBuilder::new("no_frequently_forwarded").build()) // repeated
        .child(NodeBuilder::new("ephemeral").attr("expiration", expiration).attr("trigger", trigger).build()) // optional
        .child(NodeBuilder::new("unlocked").build()) // repeated
        .child(NodeBuilder::new("not_announcement").build()) // repeated
        .child(NodeBuilder::new("frequently_forwarded_ok").build()) // repeated
        .child(NodeBuilder::new("not_ephemeral").build()) // repeated
        .child(NodeBuilder::new("membership_approval_mode").build()) // optional
        .child(NodeBuilder::new("allow_admin_reports").build()) // repeated
        .child(NodeBuilder::new("not_allow_admin_reports").build()) // repeated
        .child(NodeBuilder::new("allow_non_admin_sub_group_creation").build()) // repeated
        .child(NodeBuilder::new("not_allow_non_admin_sub_group_creation").build()) // repeated
        .child(NodeBuilder::new("group_history").build()) // repeated
        .child(NodeBuilder::new("no_group_history").build()) // repeated
        .build()
}