const WamMdSyncdMutation = 5970 // channel: regular

type MdSyncdMutationEvent struct {
	AppSessionId string `wam:"app_session_id"` // field 1
	CompanionSessionIds string `wam:"companion_session_ids"` // field 2
	ContentLength int64 `wam:"content_length"` // field 3
	IsInBootstrap bool `wam:"is_in_bootstrap"` // field 4
	IsUsingLid bool `wam:"is_using_lid"` // field 5
	MutationBundle MUTATIONBUNDLETYPE `wam:"mutation_bundle"` // field 6
	MutationDirection MUTATIONDIRECTIONTYPE `wam:"mutation_direction"` // field 7
	MutationMac string `wam:"mutation_mac"` // field 8
	MutationName string `wam:"mutation_name"` // field 9
	MutationOperation MUTATIONOPERATIONTYPE `wam:"mutation_operation"` // field 10
	SeqNumber int64 `wam:"seq_number"` // field 11
	SyncdCollection SYNCDCOLLECTIONTYPE `wam:"syncd_collection"` // field 12
	SyncdKeyhash string `wam:"syncd_keyhash"` // field 13
	SyncdKeyid string `wam:"syncd_keyid"` // field 14
	PatchMac string `wam:"patch_mac"` // field 15
}