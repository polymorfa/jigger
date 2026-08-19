const WamMessagingFavoritesUpdate = 5460 // channel: regular

type MessagingFavoritesUpdateEvent struct {
	ContactFavCountAfterUpdate int64 `wam:"contact_fav_count_after_update"` // field 1
	ContactFavCountBeforeUpdate int64 `wam:"contact_fav_count_before_update"` // field 2
	FavoritesUpdateEntryPoint FAVORITESUPDATEENTRYPOINT `wam:"favorites_update_entry_point"` // field 3
	GroupFavCountAfterUpdate int64 `wam:"group_fav_count_after_update"` // field 4
	GroupFavCountBeforeUpdate int64 `wam:"group_fav_count_before_update"` // field 5
}