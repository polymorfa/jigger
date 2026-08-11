pub const WAM_MD_APP_STATE_KEY_ROTATION: u32 = 2518;

#[derive(Debug, Default)]
pub struct MdAppStateKeyRotationEvent {
    /// field 1, wire `md_app_state_key_rotation_reason`
    pub md_app_state_key_rotation_reason: Option<MDAPPSTATEKEYROTATIONREASONCODE>,
    /// field 2, wire `app_session_id`
    pub app_session_id: Option<String>,
    /// field 3, wire `companion_session_ids`
    pub companion_session_ids: Option<String>,
    /// field 6, wire `old_syncd_keyhash`
    pub old_syncd_keyhash: Option<String>,
    /// field 7, wire `old_syncd_keyid`
    pub old_syncd_keyid: Option<String>,
    /// field 8, wire `seq_number`
    pub seq_number: Option<i64>,
    /// field 9, wire `syncd_keyhash_after_rotation`
    pub syncd_keyhash_after_rotation: Option<String>,
    /// field 10, wire `syncd_keyid_after_rotation`
    pub syncd_keyid_after_rotation: Option<String>,
}