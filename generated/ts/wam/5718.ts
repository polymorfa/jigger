export const WamCompanionsContactEvent = 5718 as const

export interface CompanionsContactEventEvent {
  /** field 1, wire `companion_add_contact_action_type` */
  companionAddContactActionType?: ADDCONTACTACTIONTYPE
  /** field 2, wire `companion_add_contact_event_type` */
  companionAddContactEventType?: COMPANIONADDCONTACTEVENTTYPE
  /** field 3, wire `companion_add_contact_session_id` */
  companionAddContactSessionId?: string
  /** field 4, wire `companion_add_contact_source` */
  companionAddContactSource?: COMPANIONADDCONTACTSOURCE
  /** field 5, wire `companion_contact_save_result` */
  companionContactSaveResult?: COMPANIONCONTACTSAVERESULT
  /** field 6, wire `companion_fname_edited` */
  companionFnameEdited?: boolean
  /** field 7, wire `companion_is_contact_sync_to_os` */
  companionIsContactSyncToOs?: boolean
  /** field 8, wire `companion_lname_edited` */
  companionLnameEdited?: boolean
  /** field 9, wire `companion_ph_number_edited` */
  companionPhNumberEdited?: boolean
  /** field 10, wire `companion_sync_setting_changed` */
  companionSyncSettingChanged?: boolean
  /** field 11, wire `companion_has_phone_number` */
  companionHasPhoneNumber?: boolean
  /** field 12, wire `companion_has_username` */
  companionHasUsername?: boolean
  /** field 13, wire `companion_ph_number_autofilled` */
  companionPhNumberAutofilled?: boolean
  /** field 14, wire `companion_username_autofilled` */
  companionUsernameAutofilled?: boolean
  /** field 15, wire `companion_username_edited` */
  companionUsernameEdited?: boolean
  /** field 16, wire `companion_whatsapp_contact_status` */
  companionWhatsappContactStatus?: COMPANIONWHATSAPPCONTACTSTATUS
}