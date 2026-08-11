const WamLockFolderUnlock = 4218 // channel: regular

type LockFolderUnlockEvent struct {
	LandingSurface LANDINGSURFACE `wam:"landing_surface"` // field 1
	TotalChatCount int64 `wam:"total_chat_count"` // field 2
	UnlockEntryPoint UNLOCKENTRYPOINT `wam:"unlock_entry_point"` // field 3
}