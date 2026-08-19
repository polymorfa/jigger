pub const WAM_ADV_METADATA_CREATION_FAILURE: u32 = 3048;

#[derive(Debug, Default)]
pub struct AdvMetadataCreationFailureEvent {
    /// field 1, wire `adv_metadata_is_me`
    pub adv_metadata_is_me: Option<bool>,
}