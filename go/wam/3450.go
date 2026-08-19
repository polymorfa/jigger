const WamBusinessInteraction = 3450 // channel: private

type BusinessInteractionEvent struct {
	BusinessInteractionAction BUSINESSINTERACTIONACTIONTYPE `wam:"business_interaction_action"` // field 1
	BusinessInteractionTargetScreen BUSINESSINTERACTIONTARGETSCREENTYPE `wam:"business_interaction_target_screen"` // field 2
	BusinessJid string `wam:"business_jid"` // field 3
	EntryPointApp BUSINESSINTERACTIONENTRYPOINTAPP `wam:"entry_point_app"` // field 4
	EntryPointSource BUSINESSINTERACTIONENTRYPOINTSOURCE `wam:"entry_point_source"` // field 5
	InternalEntryPoint BUSINESSINTERACTIONINTERNALENTRYPOINT `wam:"internal_entry_point"` // field 6
	SequenceNumber int64 `wam:"sequence_number"` // field 7
}