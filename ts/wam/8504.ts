export const WamWindowsDefaultProtocolActivation = 8504 as const

export interface WindowsDefaultProtocolActivationEvent {
  /** field 1, wire `default_protocol_result` */
  defaultProtocolResult?: DEFAULTPROTOCOLRESULTTYPE
  /** field 2, wire `default_protocol_scheme` */
  defaultProtocolScheme?: DEFAULTPROTOCOLSCHEMETYPE
  /** field 3, wire `default_protocol_target` */
  defaultProtocolTarget?: DEFAULTPROTOCOLTARGETTYPE
  /** field 4, wire `ts_timestamp_ms` */
  tsTimestampMs?: number
}