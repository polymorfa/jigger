const WamAppLaunch = 1094 // channel: regular

type AppLaunchEvent struct {
	AppLaunchT string `wam:"app_launch_t"` // field 1
	AppLaunchCpuT string `wam:"app_launch_cpu_t"` // field 2
	AppLaunchMainPreT string `wam:"app_launch_main_pre_t"` // field 3
	AppLaunchMainRunT string `wam:"app_launch_main_run_t"` // field 4
	AppLaunchTypeT APPLAUNCHTYPE `wam:"app_launch_type_t"` // field 5
	AppLaunchDestination APPLAUNCHDESTINATIONTYPE `wam:"app_launch_destination"` // field 7
	DbReadsCount int64 `wam:"db_reads_count"` // field 8
	DbWritesCount int64 `wam:"db_writes_count"` // field 9
	DbMainThreadCount int64 `wam:"db_main_thread_count"` // field 10
	LowPowerModeEnabled bool `wam:"low_power_mode_enabled"` // field 12
	ProcessIdentifier int64 `wam:"process_identifier"` // field 15
	PeripheralConnected string `wam:"peripheral_connected"` // field 16
	DbBgThreadReadsDurationT string `wam:"db_bg_thread_reads_duration_t"` // field 17
	DbBgThreadWritesDurationT string `wam:"db_bg_thread_writes_duration_t"` // field 18
	DbMainThreadReadsDurationT string `wam:"db_main_thread_reads_duration_t"` // field 19
	DbMainThreadWritesDurationT string `wam:"db_main_thread_writes_duration_t"` // field 20
	AppContext string `wam:"app_context"` // field 22
	AppContextBitfield int64 `wam:"app_context_bitfield"` // field 23
	TraceIdInt int64 `wam:"trace_id_int"` // field 24
}