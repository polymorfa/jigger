export const WamMdRetryFromUnknownDevice = 2178 as const

export interface MdRetryFromUnknownDeviceEvent {
  /** field 1, wire `sender_type` */
  senderType?: DEVICETYPE
  /** field 2, wire `offline` */
  offline?: boolean
}