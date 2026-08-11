// BuildUserNoticeGetDisclosureStageByIds builds <iq type="get" xmlns="tos">. Replies with one of: ClientSuccess, ClientError, ServerError.
func BuildUserNoticeGetDisclosureStageByIds(id int, t int) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"to": "s.whatsapp.net", "xmlns": "tos", "type": "get"},
		Content: []waBinary.Node{
			{Tag: "get_disclosure_stage_by_id", Attrs: waBinary.Attrs{"id": id, "t": t}}, // repeated
		},
	}
}