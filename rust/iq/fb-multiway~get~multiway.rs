/// <iq type="get" xmlns="fb:multiway">. Replies with one of: Success, Error.
pub fn build_multiwayd_multiway(flowId: String, binaryVersion: i64, conferenceName: String, serverInfoData: String, transactionId: i64, messageType: String) -> Node {
    NodeBuilder::new("iq")
        .attr("to", "s.whatsapp.net")
        .attr("xmlns", "fb:multiway")
        .attr("type", "get")
        .child(NodeBuilder::new("multiway").attr("flow_id", flowId).attr("binary_version", binaryVersion).attr("conference_name", conferenceName).attr("server_info_data", serverInfoData).attr("transaction_id", transactionId).attr("message_type", messageType).build())
        .build()
}