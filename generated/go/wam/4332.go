const WamTsBitArray = 4332 // channel: regular

type TsBitArrayEvent struct {
	BitarrayHigh int64 `wam:"bitarray_high"` // field 1
	BitarrayLength int64 `wam:"bitarray_length"` // field 2
	BitarrayLow int64 `wam:"bitarray_low"` // field 3
	CumulativeBits int64 `wam:"cumulative_bits"` // field 4
	RelativeTimestampMs int64 `wam:"relative_timestamp_ms"` // field 5
	SessionSeq int64 `wam:"session_seq"` // field 6
	TsSessionId int64 `wam:"ts_session_id"` // field 7
	TsTimestampMs int64 `wam:"ts_timestamp_ms"` // field 8
	UnifiedSessionId string `wam:"unified_session_id"` // field 9
}