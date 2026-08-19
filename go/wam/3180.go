const WamMdAppStateSyncMutationStats = 3180 // channel: private

type MdAppStateSyncMutationStatsEvent struct {
	Applied MUTATIONCOUNTBUCKET `wam:"applied"` // field 1
	Failed MUTATIONCOUNTBUCKET `wam:"failed"` // field 2
	Invalid MUTATIONCOUNTBUCKET `wam:"invalid"` // field 3
	Orphan MUTATIONCOUNTBUCKET `wam:"orphan"` // field 4
	SyncdAction string `wam:"syncd_action"` // field 5
	Unsupported MUTATIONCOUNTBUCKET `wam:"unsupported"` // field 6
}