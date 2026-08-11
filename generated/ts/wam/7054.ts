export const WamPsFmxAction = 7054 as const

export interface PsFmxActionEvent {
  /** field 1, wire `common_group_num` */
  commonGroupNum?: number
  /** field 2, wire `country_shown` */
  countryShown?: boolean
  /** field 3, wire `fmx_entry_point` */
  fmxEntryPoint?: FMXENTRYPOINT
  /** field 4, wire `fmx_event` */
  fmxEvent?: FMXEVENT
  /** field 5, wire `highlight_group_type` */
  highlightGroupType?: HIGHLIGHTGROUPTYPE
  /** field 6, wire `is_sender_smb` */
  isSenderSmb?: boolean
  /** field 7, wire `not_a_contact_shown` */
  notAContactShown?: boolean
  /** field 8, wire `is_suspicious_fmx` */
  isSuspiciousFmx?: boolean
  /** field 9, wire `new_account_shown` */
  newAccountShown?: boolean
  /** field 10, wire `is_different_country` */
  isDifferentCountry?: boolean
}