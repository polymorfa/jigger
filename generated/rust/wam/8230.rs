pub const WAM_COMPANION_INVITE_CONTACT: u32 = 8230;

#[derive(Debug, Default)]
pub struct CompanionInviteContactEvent {
    /// field 1, wire `companion_invite_code_error`
    pub companion_invite_code_error: Option<String>,
    /// field 2, wire `companion_invite_method`
    pub companion_invite_method: Option<COMPANIONINVITEMETHODTYPE>,
    /// field 3, wire `companion_invite_num_contacts_address_book`
    pub companion_invite_num_contacts_address_book: Option<i64>,
    /// field 4, wire `companion_invite_num_contacts_wa`
    pub companion_invite_num_contacts_wa: Option<i64>,
    /// field 5, wire `companion_invite_origin`
    pub companion_invite_origin: Option<COMPANIONINVITEORIGINTYPE>,
    /// field 6, wire `companion_invite_session_id`
    pub companion_invite_session_id: Option<i64>,
    /// field 7, wire `companion_valid_invite_code`
    pub companion_valid_invite_code: Option<bool>,
    /// field 8, wire `companion_invite_action`
    pub companion_invite_action: Option<COMPANIONINVITEACTIONTYPE>,
}