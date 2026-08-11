pub const WAM_MD_SYNCD_MUTATIONS_SUMMARY: u32 = 6302;

#[derive(Debug, Default)]
pub struct MdSyncdMutationsSummaryEvent {
    /// field 1, wire `app_session_id`
    pub app_session_id: Option<String>,
    /// field 2, wire `companion_session_ids`
    pub companion_session_ids: Option<String>,
    /// field 3, wire `is_in_bootstrap`
    pub is_in_bootstrap: Option<bool>,
    /// field 4, wire `lid_mutations`
    pub lid_mutations: Option<String>,
    /// field 5, wire `mutation_bundle`
    pub mutation_bundle: Option<MUTATIONBUNDLETYPE>,
    /// field 6, wire `mutation_direction`
    pub mutation_direction: Option<MUTATIONDIRECTIONTYPE>,
    /// field 7, wire `patch_mac`
    pub patch_mac: Option<String>,
    /// field 8, wire `remove_mutations`
    pub remove_mutations: Option<String>,
    /// field 9, wire `seq_number`
    pub seq_number: Option<i64>,
    /// field 10, wire `set_mutations`
    pub set_mutations: Option<String>,
    /// field 11, wire `snapshot_mac`
    pub snapshot_mac: Option<String>,
    /// field 12, wire `syncd_collection`
    pub syncd_collection: Option<SYNCDCOLLECTIONTYPE>,
    /// field 13, wire `syncd_keyid_keyhash`
    pub syncd_keyid_keyhash: Option<String>,
}