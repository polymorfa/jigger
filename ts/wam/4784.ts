export const WamWebDbVersionsSource = 4784 as const

export interface WebDbVersionsSourceEvent {
  /** field 1, wire `web_db_version_source` */
  webDbVersionSource?: WEBDBVERSIONSOURCETYPE
  /** field 2, wire `web_schema_initiator` */
  webSchemaInitiator?: WEBSCHEMAINITIATORTYPE
}