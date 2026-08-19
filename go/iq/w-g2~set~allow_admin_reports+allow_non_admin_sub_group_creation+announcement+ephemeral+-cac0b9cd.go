// BuildGroupsSetProperty builds <iq type="set" xmlns="w:g2">. Replies with one of: Success, ClientError, ServerError.
func BuildGroupsSetProperty(to types.JID, to types.JID, expiration int, trigger int) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"to": to, "xmlns": "w:g2", "type": "set"},
		Content: []waBinary.Node{
			{Tag: "locked", Attrs: waBinary.Attrs{}}, // repeated
			{Tag: "announcement", Attrs: waBinary.Attrs{}}, // repeated
			{Tag: "no_frequently_forwarded", Attrs: waBinary.Attrs{}}, // repeated
			{Tag: "ephemeral", Attrs: waBinary.Attrs{"expiration": expiration, "trigger": trigger}}, // optional
			{Tag: "unlocked", Attrs: waBinary.Attrs{}}, // repeated
			{Tag: "not_announcement", Attrs: waBinary.Attrs{}}, // repeated
			{Tag: "frequently_forwarded_ok", Attrs: waBinary.Attrs{}}, // repeated
			{Tag: "not_ephemeral", Attrs: waBinary.Attrs{}}, // repeated
			{Tag: "membership_approval_mode", Attrs: waBinary.Attrs{}}, // optional
			{Tag: "allow_admin_reports", Attrs: waBinary.Attrs{}}, // repeated
			{Tag: "not_allow_admin_reports", Attrs: waBinary.Attrs{}}, // repeated
			{Tag: "allow_non_admin_sub_group_creation", Attrs: waBinary.Attrs{}}, // repeated
			{Tag: "not_allow_non_admin_sub_group_creation", Attrs: waBinary.Attrs{}}, // repeated
			{Tag: "group_history", Attrs: waBinary.Attrs{}}, // repeated
			{Tag: "no_group_history", Attrs: waBinary.Attrs{}}, // repeated
		},
	}
}