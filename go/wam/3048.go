const WamAdvMetadataCreationFailure = 3048 // channel: regular

type AdvMetadataCreationFailureEvent struct {
	AdvMetadataIsMe bool `wam:"adv_metadata_is_me"` // field 1
}