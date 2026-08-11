const WamScreenLockSettingsData = 4802 // channel: regular

type ScreenLockSettingsDataEvent struct {
	ScreenAutoLockDuration int64 `wam:"screen_auto_lock_duration"` // field 1
}