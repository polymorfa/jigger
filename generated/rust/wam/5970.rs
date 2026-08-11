pub const WAM_MD_SYNCD_MUTATION: u32 = 5970;

#[derive(Debug, Default)]
pub struct MdSyncdMutationEvent {
    /// field 1, wire `app_session_id`
    pub app_session_id: Option<String>,
    /// field 2, wire `companion_session_ids`
    pub companion_session_ids: Option<String>,
    /// field 3, wire `content_length`
    pub content_length: Option<i64>,
    /// field 4, wire `is_in_bootstrap`
    pub is_in_bootstrap: Option<bool>,
    /// field 5, wire `is_using_lid`
    pub is_using_lid: Option<bool>,
    /// field 6, wire `mutation_bundle`
    pub mutation_bundle: Option<MUTATIONBUNDLETYPE>,
    /// field 7, wire `mutation_direction`
    pub mutation_direction: Option<MUTATIONDIRECTIONTYPE>,
    /// field 8, wire `mutation_mac`
    pub mutation_mac: Option<String>,
    /// field 9, wire `mutation_name`
    pub mutation_name: Option<String>,
    /// field 10, wire `mutation_operation`
    pub mutation_operation: Option<MUTATIONOPERATIONTYPE>,
    /// field 11, wire `seq_number`
    pub seq_number: Option<i64>,
    /// field 12, wire `syncd_collection`
    pub syncd_collection: Option<SYNCDCOLLECTIONTYPE>,
    /// field 13, wire `syncd_keyhash`
    pub syncd_keyhash: Option<String>,
    /// field 14, wire `syncd_keyid`
    pub syncd_keyid: Option<String>,
    /// field 15, wire `patch_mac`
    pub patch_mac: Option<String>,
}