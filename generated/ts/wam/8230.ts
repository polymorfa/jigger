export const WamCompanionInviteContact = 8230 as const

export interface CompanionInviteContactEvent {
  /** field 1, wire `companion_invite_code_error` */
  companionInviteCodeError?: string
  /** field 2, wire `companion_invite_method` */
  companionInviteMethod?: COMPANIONINVITEMETHODTYPE
  /** field 3, wire `companion_invite_num_contacts_address_book` */
  companionInviteNumContactsAddressBook?: number
  /** field 4, wire `companion_invite_num_contacts_wa` */
  companionInviteNumContactsWa?: number
  /** field 5, wire `companion_invite_origin` */
  companionInviteOrigin?: COMPANIONINVITEORIGINTYPE
  /** field 6, wire `companion_invite_session_id` */
  companionInviteSessionId?: number
  /** field 7, wire `companion_valid_invite_code` */
  companionValidInviteCode?: boolean
  /** field 8, wire `companion_invite_action` */
  companionInviteAction?: COMPANIONINVITEACTIONTYPE
}