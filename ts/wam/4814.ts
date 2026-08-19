export const WamWebDbLoadFromVersionFailureNonAnonymous = 4814 as const

export interface WebDbLoadFromVersionFailureNonAnonymousEvent {
  /** field 1, wire `web_db_loader` */
  webDbLoader?: WEBDBLOADERTYPE
  /** field 2, wire `web_db_name` */
  webDbName?: WEBDBNAMETYPE
}