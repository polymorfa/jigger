/// <iq type="set" xmlns="w:comms">. Replies with one of: Success, Error.
pub fn build_in_app_comms_event(promotionId: String, type: String, timestampSec: i64, logdata: String) -> Node {
    NodeBuilder::new("iq")
        .attr("xmlns", "w:comms")
        .attr("to", "s.whatsapp.net")
        .attr("type", "set")
        .child(NodeBuilder::new("event").attr("promotion_id", promotionId).attr("type", type).attr("timestamp_sec", timestampSec).attr("logdata", logdata).build())
        .build()
}