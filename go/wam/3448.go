const WamUnknownStanza = 3448 // channel: regular

type UnknownStanzaEvent struct {
	UnknownStanzaTag string `wam:"unknown_stanza_tag"` // field 1
	UnknownStanzaType string `wam:"unknown_stanza_type"` // field 2
	UnknownStanzaDropReason int64 `wam:"unknown_stanza_drop_reason"` // field 3
}