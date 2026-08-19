export const WamPsPhoneNumberHyperlink = 3266 as const

export interface PsPhoneNumberHyperlinkEvent {
  /** field 1, wire `is_phone_num_hyperlink_owner` */
  isPhoneNumHyperlinkOwner?: boolean
  /** field 2, wire `phone_num_hyperlink_action` */
  phoneNumHyperlinkAction?: PHONENUMHYPERLINKACTIONTYPE
  /** field 3, wire `phone_number_status_on_wa` */
  phoneNumberStatusOnWa?: boolean
  /** field 4, wire `sequence_number` */
  sequenceNumber?: number
}