const WamSmbUserJourney = 5462 // channel: regular

type SmbUserJourneyEvent struct {
	ActionType CHATFILTERACTIONTYPES `wam:"action_type"` // field 1
	ContactIsSaved bool `wam:"contact_is_saved"` // field 2
	EntryPoint ENTRYPOINT `wam:"entry_point"` // field 3
	ExtraAttributes string `wam:"extra_attributes"` // field 4
	OppositePlatform OPPOSITEPLATFORMENUM `wam:"opposite_platform"` // field 5
	SeqId int64 `wam:"seq_id"` // field 7
	SmbFeatureName SMBFEATURENAMEENUM `wam:"smb_feature_name"` // field 8
	SmbUserSessionId string `wam:"smb_user_session_id"` // field 9
	Surface SURFACETYPE `wam:"surface"` // field 10
	UserActionTarget string `wam:"user_action_target"` // field 11
	RecipientSize int64 `wam:"recipient_size"` // field 12
	SmbUserActionType SMBUSERACTIONTYPEENUM `wam:"smb_user_action_type"` // field 13
	PrevSurface SURFACETYPE `wam:"prev_surface"` // field 14
	EntryPointDetails string `wam:"entry_point_details"` // field 18
	HasCatalog bool `wam:"has_catalog"` // field 19
	IsCoexAccount bool `wam:"is_coex_account"` // field 20
	IsMvSubscriber bool `wam:"is_mv_subscriber"` // field 21
	BbTier BBTIERTYPE `wam:"bb_tier"` // field 22
}