const WamCompanionsContactEvent = 5718 // channel: regular

type CompanionsContactEventEvent struct {
	CompanionAddContactActionType ADDCONTACTACTIONTYPE `wam:"companion_add_contact_action_type"` // field 1
	CompanionAddContactEventType COMPANIONADDCONTACTEVENTTYPE `wam:"companion_add_contact_event_type"` // field 2
	CompanionAddContactSessionId string `wam:"companion_add_contact_session_id"` // field 3
	CompanionAddContactSource COMPANIONADDCONTACTSOURCE `wam:"companion_add_contact_source"` // field 4
	CompanionContactSaveResult COMPANIONCONTACTSAVERESULT `wam:"companion_contact_save_result"` // field 5
	CompanionFnameEdited bool `wam:"companion_fname_edited"` // field 6
	CompanionIsContactSyncToOs bool `wam:"companion_is_contact_sync_to_os"` // field 7
	CompanionLnameEdited bool `wam:"companion_lname_edited"` // field 8
	CompanionPhNumberEdited bool `wam:"companion_ph_number_edited"` // field 9
	CompanionSyncSettingChanged bool `wam:"companion_sync_setting_changed"` // field 10
	CompanionHasPhoneNumber bool `wam:"companion_has_phone_number"` // field 11
	CompanionHasUsername bool `wam:"companion_has_username"` // field 12
	CompanionPhNumberAutofilled bool `wam:"companion_ph_number_autofilled"` // field 13
	CompanionUsernameAutofilled bool `wam:"companion_username_autofilled"` // field 14
	CompanionUsernameEdited bool `wam:"companion_username_edited"` // field 15
	CompanionWhatsappContactStatus COMPANIONWHATSAPPCONTACTSTATUS `wam:"companion_whatsapp_contact_status"` // field 16
}