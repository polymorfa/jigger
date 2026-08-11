const WamMemoryStat = 1336 // channel: regular

type MemoryStatEvent struct {
	WorkingSetSize string `wam:"working_set_size"` // field 1
	WorkingSetPeakSize string `wam:"working_set_peak_size"` // field 2
	PrivateBytes string `wam:"private_bytes"` // field 3
	SharedBytes string `wam:"shared_bytes"` // field 4
	ProcessType string `wam:"process_type"` // field 5
	Uptime string `wam:"uptime"` // field 6
	HasVerifiedNumber bool `wam:"has_verified_number"` // field 7
	NumMessages string `wam:"num_messages"` // field 8
	AppContext string `wam:"app_context"` // field 14
	AppContextBitfield int64 `wam:"app_context_bitfield"` // field 15
}