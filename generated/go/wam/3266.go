const WamPsPhoneNumberHyperlink = 3266 // channel: private

type PsPhoneNumberHyperlinkEvent struct {
	IsPhoneNumHyperlinkOwner bool `wam:"is_phone_num_hyperlink_owner"` // field 1
	PhoneNumHyperlinkAction PHONENUMHYPERLINKACTIONTYPE `wam:"phone_num_hyperlink_action"` // field 2
	PhoneNumberStatusOnWa bool `wam:"phone_number_status_on_wa"` // field 3
	SequenceNumber int64 `wam:"sequence_number"` // field 4
}