const WamMessageSecretErrors = 3686 // channel: regular

type MessageSecretErrorsEvent struct {
	MessageSecretAllowedList MESSAGESECRETALLOWEDTYPE `wam:"message_secret_allowed_list"` // field 1
	MessageSecretError MESSAGESECRETERRORTYPE `wam:"message_secret_error"` // field 2
	MessageMediaType MEDIATYPE `wam:"message_media_type"` // field 3
}