export const WamWebArkoseToken = 7028 as const

export interface WebArkoseTokenEvent {
  /** field 1, wire `token` */
  token?: string
  /** field 2, wire `md_session_id` */
  mdSessionId?: string
  /** field 3, wire `md_client_session_id` */
  mdClientSessionId?: string
}