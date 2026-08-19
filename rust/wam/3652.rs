pub const WAM_GROUP_PROFILE_PICTURE: u32 = 3652;

#[derive(Debug, Default)]
pub struct GroupProfilePictureEvent {
    /// field 1, wire `group_creation_ds`
    pub group_creation_ds: Option<String>,
    /// field 3, wire `has_profile_picture`
    pub has_profile_picture: Option<bool>,
    /// field 4, wire `is_admin`
    pub is_admin: Option<bool>,
    /// field 5, wire `precise_group_size_bucket`
    pub precise_group_size_bucket: Option<PRECISESIZEBUCKET>,
    /// field 6, wire `profile_picture_type`
    pub profile_picture_type: Option<PROFILEPICTURETYPE>,
    /// field 7, wire `group_profile_action`
    pub group_profile_action: Option<GROUPPROFILEACTIONTYPE>,
}