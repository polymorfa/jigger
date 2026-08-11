pub const WAM_MD_SYNCD_BUNDLE: u32 = 5966;

#[derive(Debug, Default)]
pub struct MdSyncdBundleEvent {
    /// field 1, wire `app_session_id`
    pub app_session_id: Option<String>,
    /// field 2, wire `bundle_version`
    pub bundle_version: Option<i64>,
    /// field 3, wire `companion_session_ids`
    pub companion_session_ids: Option<String>,
    /// field 4, wire `computed_lthash`
    pub computed_lthash: Option<String>,
    /// field 5, wire `expected_mac`
    pub expected_mac: Option<String>,
    /// field 6, wire `mutation_bundle`
    pub mutation_bundle: Option<MUTATIONBUNDLETYPE>,
    /// field 7, wire `mutation_direction`
    pub mutation_direction: Option<MUTATIONDIRECTIONTYPE>,
    /// field 8, wire `patch_mac`
    pub patch_mac: Option<String>,
    /// field 9, wire `patch_size`
    pub patch_size: Option<i64>,
    /// field 10, wire `processing_error_message`
    pub processing_error_message: Option<String>,
    /// field 11, wire `seq_number`
    pub seq_number: Option<i64>,
    /// field 12, wire `snapshot_mac`
    pub snapshot_mac: Option<String>,
    /// field 13, wire `snapshot_size`
    pub snapshot_size: Option<i64>,
    /// field 14, wire `syncd_collection`
    pub syncd_collection: Option<SYNCDCOLLECTIONTYPE>,
    /// field 15, wire `syncd_keyhash`
    pub syncd_keyhash: Option<String>,
    /// field 16, wire `syncd_keyid`
    pub syncd_keyid: Option<String>,
    /// field 17, wire `kmp_syncd_flow`
    pub kmp_syncd_flow: Option<KMPSYNCDFLOWENUM>,
}