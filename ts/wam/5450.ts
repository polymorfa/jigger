export const WamWebcSocketConnect = 5450 as const

export interface WebcSocketConnectEvent {
  /** field 1, wire `webc_auth_handshake_duration` */
  webcAuthHandshakeDuration?: string
  /** field 2, wire `webc_socket_connect_duration` */
  webcSocketConnectDuration?: string
  /** field 3, wire `webc_socket_connect_reason` */
  webcSocketConnectReason?: WEBCSOCKETCONNECTREASONTYPE
  /** field 4, wire `webc_socket_hostname` */
  webcSocketHostname?: string
}