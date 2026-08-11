// BuildBizMarketingMessageGetBusinessEligibility builds <iq type="get" xmlns="w:biz">. Replies with one of: Success, Error.
func BuildBizMarketingMessageGetBusinessEligibility(smaxId int, from types.JID, metaVerified string, marketingMessages string, genai string, genaiImage string, metaOne string, bbPro string) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"xmlns": "w:biz", "smax_id": smaxId, "from": from, "to": "s.whatsapp.net", "type": "get"},
		Content: []waBinary.Node{
			{Tag: "features", Attrs: waBinary.Attrs{"meta_verified": metaVerified, "marketing_messages": marketingMessages, "genai": genai, "genai_image": genaiImage, "meta_one": metaOne, "bb_pro": bbPro}},
		},
	}
}