/// <iq type="get" xmlns="md">. Replies with one of: MdGetCountryCodeResponseGetCountryCodeResponse, Error.
pub fn build_md_get_country_code() -> Node {
    NodeBuilder::new("iq")
        .attr("to", "s.whatsapp.net")
        .attr("xmlns", "md")
        .attr("type", "get")
        .child(NodeBuilder::new("link_code_companion_reg").attr("stage", "get_country_code").build())
        .build()
}