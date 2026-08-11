const WamMdDeviceSyncAck = 2180 // channel: regular

type MdDeviceSyncAckEvent struct {
	ChatType MESSAGECHATTYPE `wam:"chat_type"` // field 1
	Revoke bool `wam:"revoke"` // field 2
	IsLid bool `wam:"is_lid"` // field 3
	TypeOfGroup TYPEOFGROUPENUM `wam:"type_of_group"` // field 4
	LocalAddressingMode ADDRESSINGMODE `wam:"local_addressing_mode"` // field 5
	ServerAddressingMode ADDRESSINGMODE `wam:"server_addressing_mode"` // field 6
	InvisibleMessageCategory INVISIBLEMESSAGECATEGORYTYPE `wam:"invisible_message_category"` // field 7
	EncryptionType ENCRYPTIONTYPECODE `wam:"encryption_type"` // field 8
}