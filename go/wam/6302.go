const WamMdSyncdMutationsSummary = 6302 // channel: regular

type MdSyncdMutationsSummaryEvent struct {
	AppSessionId string `wam:"app_session_id"` // field 1
	CompanionSessionIds string `wam:"companion_session_ids"` // field 2
	IsInBootstrap bool `wam:"is_in_bootstrap"` // field 3
	LidMutations string `wam:"lid_mutations"` // field 4
	MutationBundle MUTATIONBUNDLETYPE `wam:"mutation_bundle"` // field 5
	MutationDirection MUTATIONDIRECTIONTYPE `wam:"mutation_direction"` // field 6
	PatchMac string `wam:"patch_mac"` // field 7
	RemoveMutations string `wam:"remove_mutations"` // field 8
	SeqNumber int64 `wam:"seq_number"` // field 9
	SetMutations string `wam:"set_mutations"` // field 10
	SnapshotMac string `wam:"snapshot_mac"` // field 11
	SyncdCollection SYNCDCOLLECTIONTYPE `wam:"syncd_collection"` // field 12
	SyncdKeyidKeyhash string `wam:"syncd_keyid_keyhash"` // field 13
}