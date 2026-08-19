pub const WAM_PS_ID_UPDATE: u32 = 2862;

#[derive(Debug, Default)]
pub struct PsIdUpdateEvent {
    /// field 1, wire `ps_id_key`
    pub ps_id_key: Option<i64>,
    /// field 2, wire `ps_id_action`
    pub ps_id_action: Option<PSIDACTION>,
    /// field 3, wire `ps_id_rotation_frequence`
    pub ps_id_rotation_frequence: Option<i64>,
    /// field 4, wire `is_from_wamsys`
    pub is_from_wamsys: Option<bool>,
}