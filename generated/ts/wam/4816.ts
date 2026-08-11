export const WamWebDbVersionNonAnonymous = 4816 as const

export interface WebDbVersionNonAnonymousEvent {
  /** field 1, wire `web_db_name` */
  webDbName?: WEBDBNAMETYPE
  /** field 2, wire `web_db_version_number` */
  webDbVersionNumber?: number
}