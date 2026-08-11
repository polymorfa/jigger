const WamMdSyncdBundle = 5966 // channel: regular

type MdSyncdBundleEvent struct {
	AppSessionId string `wam:"app_session_id"` // field 1
	BundleVersion int64 `wam:"bundle_version"` // field 2
	CompanionSessionIds string `wam:"companion_session_ids"` // field 3
	ComputedLthash string `wam:"computed_lthash"` // field 4
	ExpectedMac string `wam:"expected_mac"` // field 5
	MutationBundle MUTATIONBUNDLETYPE `wam:"mutation_bundle"` // field 6
	MutationDirection MUTATIONDIRECTIONTYPE `wam:"mutation_direction"` // field 7
	PatchMac string `wam:"patch_mac"` // field 8
	PatchSize int64 `wam:"patch_size"` // field 9
	ProcessingErrorMessage string `wam:"processing_error_message"` // field 10
	SeqNumber int64 `wam:"seq_number"` // field 11
	SnapshotMac string `wam:"snapshot_mac"` // field 12
	SnapshotSize int64 `wam:"snapshot_size"` // field 13
	SyncdCollection SYNCDCOLLECTIONTYPE `wam:"syncd_collection"` // field 14
	SyncdKeyhash string `wam:"syncd_keyhash"` // field 15
	SyncdKeyid string `wam:"syncd_keyid"` // field 16
	KmpSyncdFlow KMPSYNCDFLOWENUM `wam:"kmp_syncd_flow"` // field 17
}