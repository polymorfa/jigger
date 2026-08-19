// BuildInAppCommsEvent builds <iq type="set" xmlns="w:comms">. Replies with one of: Success, Error.
func BuildInAppCommsEvent(promotionId string, type string, timestampSec int, logdata string) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"xmlns": "w:comms", "to": "s.whatsapp.net", "type": "set"},
		Content: []waBinary.Node{
			{Tag: "event", Attrs: waBinary.Attrs{"promotion_id": promotionId, "type": type, "timestamp_sec": timestampSec, "logdata": logdata}},
		},
	}
}