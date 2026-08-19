export const WamMessageSecretErrors = 3686 as const

export interface MessageSecretErrorsEvent {
  /** field 1, wire `message_secret_allowed_list` */
  messageSecretAllowedList?: MESSAGESECRETALLOWEDTYPE
  /** field 2, wire `message_secret_error` */
  messageSecretError?: MESSAGESECRETERRORTYPE
  /** field 3, wire `message_media_type` */
  messageMediaType?: MEDIATYPE
}