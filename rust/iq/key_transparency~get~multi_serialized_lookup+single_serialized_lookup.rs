/// <iq type="get" xmlns="key_transparency">. Replies with one of: Success, Error.
pub fn build_key_transparency_multi_serialized_lookup(version: String) -> Node {
    NodeBuilder::new("iq")
        .attr("xmlns", "key_transparency")
        .attr("to", "s.whatsapp.net")
        .attr("type", "get")
        .child(NodeBuilder::new("multi_serialized_lookup").attr("version", version).build())
        .child(NodeBuilder::new("single_serialized_lookup").build()) // repeated
        .build()
}