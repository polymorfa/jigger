export const WamSignCredential = 2242 as const

export interface SignCredentialEvent {
  /** field 1, wire `sign_credential_result` */
  signCredentialResult?: SIGNCREDENTIALRESULT
  /** field 2, wire `retry_count` */
  retryCount?: number
  /** field 3, wire `sign_credential_t` */
  signCredentialT?: string
  /** field 4, wire `overall_t` */
  overallT?: string
  /** field 5, wire `wa_connected_to_chatd` */
  waConnectedToChatd?: boolean
  /** field 6, wire `application_state` */
  applicationState?: APPLICATIONSTATE
  /** field 7, wire `project_code` */
  projectCode?: PROJECTCODE
  /** field 8, wire `is_from_wameta` */
  isFromWameta?: boolean
}