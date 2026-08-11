const WamPlaceholderActivity = 1980 // channel: regular

type PlaceholderActivityEvent struct {
	PlaceholderTypeInd PLACEHOLDERTYPE `wam:"placeholder_type_ind"` // field 1
	PlaceholderActionInd PLACEHOLDERACTION `wam:"placeholder_action_ind"` // field 2
	PlaceholderChatTypeInd PLACEHOLDERCHATTYPE `wam:"placeholder_chat_type_ind"` // field 3
	PlaceholderTimePeriod int64 `wam:"placeholder_time_period"` // field 4
	MessageType MESSAGETYPE `wam:"message_type"` // field 5
	MessageMediaType MEDIATYPE `wam:"message_media_type"` // field 6
	MessageIsRevoke bool `wam:"message_is_revoke"` // field 7
	DeviceSizeBucket SIZEBUCKET `wam:"device_size_bucket"` // field 8
	DeviceCount int64 `wam:"device_count"` // field 9
	ParticipantCount int64 `wam:"participant_count"` // field 10
	PlaceholderAddReason PLACEHOLDERREASONTYPE `wam:"placeholder_add_reason"` // field 11
	IsLid bool `wam:"is_lid"` // field 12
	TypeOfGroup TYPEOFGROUPENUM `wam:"type_of_group"` // field 13
	MessageKeyHash string `wam:"message_key_hash"` // field 14
	MessageBeforeReg bool `wam:"message_before_reg"` // field 15
	E2eSenderType E2EDEVICETYPE `wam:"e2e_sender_type"` // field 16
	PlaceholderPopulationType PLACEHOLDERPOPULATIONTYPE `wam:"placeholder_population_type"` // field 17
	IsHostedChat bool `wam:"is_hosted_chat"` // field 19
	LocalAddressingMode ADDRESSINGMODE `wam:"local_addressing_mode"` // field 20
	EncryptionType ENCRYPTIONTYPECODE `wam:"encryption_type"` // field 22
	IsSimpleSignal bool `wam:"is_simple_signal"` // field 23
	BotType BOTTYPE `wam:"bot_type"` // field 24
	SenderPlatform PLATFORMTYPE `wam:"sender_platform"` // field 25
}