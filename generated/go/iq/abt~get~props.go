// BuildAbPropsGetExperimentConfig builds <iq type="get" xmlns="abt">. Replies with one of: Success, ErrorNoRetry, ErrorRetry.
func BuildAbPropsGetExperimentConfig(hash string, refreshId int) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"xmlns": "abt", "to": "s.whatsapp.net", "type": "get"},
		Content: []waBinary.Node{
			{Tag: "props", Attrs: waBinary.Attrs{"protocol": "1", "hash": hash, "refresh_id": refreshId}},
		},
	}
}