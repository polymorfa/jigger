/// <iq type="get" xmlns="w:profile:picture">. Replies with one of: SuccessPictureURL, SuccessAvatarURLs, SuccessPictureBlob, SuccessNoData, Error.
pub fn build_profile_picture_get(target: Jid) -> Node {
    NodeBuilder::new("iq")
        .attr("xmlns", "w:profile:picture")
        .attr("target", target)
        .attr("type", "get")
        .attr("to", "s.whatsapp.net")
        .build()
}