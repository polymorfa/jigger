pub const WAM_COMPANIONS_CONTACT_EVENT: u32 = 5718;

#[derive(Debug, Default)]
pub struct CompanionsContactEventEvent {
    /// field 1, wire `companion_add_contact_action_type`
    pub companion_add_contact_action_type: Option<ADDCONTACTACTIONTYPE>,
    /// field 2, wire `companion_add_contact_event_type`
    pub companion_add_contact_event_type: Option<COMPANIONADDCONTACTEVENTTYPE>,
    /// field 3, wire `companion_add_contact_session_id`
    pub companion_add_contact_session_id: Option<String>,
    /// field 4, wire `companion_add_contact_source`
    pub companion_add_contact_source: Option<COMPANIONADDCONTACTSOURCE>,
    /// field 5, wire `companion_contact_save_result`
    pub companion_contact_save_result: Option<COMPANIONCONTACTSAVERESULT>,
    /// field 6, wire `companion_fname_edited`
    pub companion_fname_edited: Option<bool>,
    /// field 7, wire `companion_is_contact_sync_to_os`
    pub companion_is_contact_sync_to_os: Option<bool>,
    /// field 8, wire `companion_lname_edited`
    pub companion_lname_edited: Option<bool>,
    /// field 9, wire `companion_ph_number_edited`
    pub companion_ph_number_edited: Option<bool>,
    /// field 10, wire `companion_sync_setting_changed`
    pub companion_sync_setting_changed: Option<bool>,
    /// field 11, wire `companion_has_phone_number`
    pub companion_has_phone_number: Option<bool>,
    /// field 12, wire `companion_has_username`
    pub companion_has_username: Option<bool>,
    /// field 13, wire `companion_ph_number_autofilled`
    pub companion_ph_number_autofilled: Option<bool>,
    /// field 14, wire `companion_username_autofilled`
    pub companion_username_autofilled: Option<bool>,
    /// field 15, wire `companion_username_edited`
    pub companion_username_edited: Option<bool>,
    /// field 16, wire `companion_whatsapp_contact_status`
    pub companion_whatsapp_contact_status: Option<COMPANIONWHATSAPPCONTACTSTATUS>,
}