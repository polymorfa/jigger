export const WamAddressingModeMismatch = 4750 as const

export interface AddressingModeMismatchEvent {
  /** field 1, wire `iq_response` */
  iqResponse?: IQRESPONSETYPE
  /** field 2, wire `local_addressing_mode` */
  localAddressingMode?: ADDRESSINGMODE
  /** field 3, wire `notification_tag` */
  notificationTag?: string
  /** field 5, wire `server_addressing_mode` */
  serverAddressingMode?: ADDRESSINGMODE
  /** field 6, wire `mismatch_origin` */
  mismatchOrigin?: MISMATCHORIGINTYPE
}