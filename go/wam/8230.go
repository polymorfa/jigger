const WamCompanionInviteContact = 8230 // channel: regular

type CompanionInviteContactEvent struct {
	CompanionInviteCodeError string `wam:"companion_invite_code_error"` // field 1
	CompanionInviteMethod COMPANIONINVITEMETHODTYPE `wam:"companion_invite_method"` // field 2
	CompanionInviteNumContactsAddressBook int64 `wam:"companion_invite_num_contacts_address_book"` // field 3
	CompanionInviteNumContactsWa int64 `wam:"companion_invite_num_contacts_wa"` // field 4
	CompanionInviteOrigin COMPANIONINVITEORIGINTYPE `wam:"companion_invite_origin"` // field 5
	CompanionInviteSessionId int64 `wam:"companion_invite_session_id"` // field 6
	CompanionValidInviteCode bool `wam:"companion_valid_invite_code"` // field 7
	CompanionInviteAction COMPANIONINVITEACTIONTYPE `wam:"companion_invite_action"` // field 8
}