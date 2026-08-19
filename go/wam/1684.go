const WamCriticalEvent = 1684 // channel: regular

type CriticalEventEvent struct {
	Name string `wam:"name"` // field 1
	Context string `wam:"context"` // field 2
	Debug string `wam:"debug"` // field 3
	MobileBuildId string `wam:"mobile_build_id"` // field 5
	CrashlogType CRASHLOGTYPE `wam:"crashlog_type"` // field 6
	ExtraDebug string `wam:"extra_debug"` // field 7
	CrashApplicationState CRASHAPPLICATIONSTATE `wam:"crash_application_state"` // field 8
	StorageAvailSizeWithCache int64 `wam:"storage_avail_size_with_cache"` // field 9
}