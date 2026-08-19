pub const WAM_LOCK_FOLDER_UNLOCK: u32 = 4218;

#[derive(Debug, Default)]
pub struct LockFolderUnlockEvent {
    /// field 1, wire `landing_surface`
    pub landing_surface: Option<LANDINGSURFACE>,
    /// field 2, wire `total_chat_count`
    pub total_chat_count: Option<i64>,
    /// field 3, wire `unlock_entry_point`
    pub unlock_entry_point: Option<UNLOCKENTRYPOINT>,
}