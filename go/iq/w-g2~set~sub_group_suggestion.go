// BuildGroupsCreateSubGroupSuggestion builds <iq type="set" xmlns="w:g2">. Replies with one of: NewGroupSuggestionSuccess, ExistingGroupsSuggestionSuccess, ClientError, ServerError.
func BuildGroupsCreateSubGroupSuggestion(to types.JID, to types.JID) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"to": to, "xmlns": "w:g2", "type": "set"},
		Content: []waBinary.Node{
			{Tag: "sub_group_suggestion", Attrs: waBinary.Attrs{}},
		},
	}
}