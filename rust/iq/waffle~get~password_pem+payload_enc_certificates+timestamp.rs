/// <iq type="get" xmlns="waffle">. Replies with one of: Success, Error.
pub fn build_waffle_get_certificate(smaxId: i64) -> Node {
    NodeBuilder::new("iq")
        .attr("xmlns", "waffle")
        .attr("smax_id", smaxId)
        .attr("to", "s.whatsapp.net")
        .attr("type", "get")
        .child(NodeBuilder::new("timestamp").build())
        .child(NodeBuilder::new("payload_enc_certificates").build()) // repeated
        .child(NodeBuilder::new("password_pem").build()) // repeated
        .build()
}