const WamSyncdKeyCount = 3978 // channel: regular

type SyncdKeyCountEvent struct {
	KeysUsedInSnapshotCount int64 `wam:"keys_used_in_snapshot_count"` // field 1
	P80MuationsPerKey int64 `wam:"p80_muations_per_key"` // field 2
	P95MuationsPerKey int64 `wam:"p95_muations_per_key"` // field 3
	SyncdSessionLengthDays int64 `wam:"syncd_session_length_days"` // field 4
	TotalKeyCount int64 `wam:"total_key_count"` // field 5
}