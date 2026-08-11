// BuildMdGetCountryCode builds <iq type="get" xmlns="md">. Replies with one of: MdGetCountryCodeResponseGetCountryCodeResponse, Error.
func BuildMdGetCountryCode() waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"to": "s.whatsapp.net", "xmlns": "md", "type": "get"},
		Content: []waBinary.Node{
			{Tag: "link_code_companion_reg", Attrs: waBinary.Attrs{"stage": "get_country_code"}},
		},
	}
}