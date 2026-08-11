pub const WAM_MESSAGING_FAVORITES_UPDATE: u32 = 5460;

#[derive(Debug, Default)]
pub struct MessagingFavoritesUpdateEvent {
    /// field 1, wire `contact_fav_count_after_update`
    pub contact_fav_count_after_update: Option<i64>,
    /// field 2, wire `contact_fav_count_before_update`
    pub contact_fav_count_before_update: Option<i64>,
    /// field 3, wire `favorites_update_entry_point`
    pub favorites_update_entry_point: Option<FAVORITESUPDATEENTRYPOINT>,
    /// field 4, wire `group_fav_count_after_update`
    pub group_fav_count_after_update: Option<i64>,
    /// field 5, wire `group_fav_count_before_update`
    pub group_fav_count_before_update: Option<i64>,
}