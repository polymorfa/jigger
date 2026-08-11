const WamCtwaAdCreationAndManagementJourney = 6562 // channel: regular

type CtwaAdCreationAndManagementJourneyEvent struct {
	CtwaAdAccountType CTWAADACCOUNTTYPE `wam:"ctwa_ad_account_type"` // field 1
	ExtraAttributes string `wam:"extra_attributes"` // field 2
	LwiActionType LWIACTIONTYPE `wam:"lwi_action_type"` // field 3
	LwiEntryPoint LWIENTRYPOINT `wam:"lwi_entry_point"` // field 4
	LwiFlowId string `wam:"lwi_flow_id"` // field 5
	LwiSubEntryPoint LWISUBENTRYPOINT `wam:"lwi_sub_entry_point"` // field 6
	LwiSurface LWISURFACE `wam:"lwi_surface"` // field 7
	SeqId int64 `wam:"seq_id"` // field 8
	TargetComponent TARGETCOMPONENT `wam:"target_component"` // field 9
	UnifiedSessionId string `wam:"unified_session_id"` // field 10
	WaAdAccountEligibility WAADACCOUNTELIGIBILITY `wam:"wa_ad_account_eligibility"` // field 11
	WaAdAccountId string `wam:"wa_ad_account_id"` // field 12
}