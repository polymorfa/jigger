export const WamMessagingFavoritesUpdate = 5460 as const

export interface MessagingFavoritesUpdateEvent {
  /** field 1, wire `contact_fav_count_after_update` */
  contactFavCountAfterUpdate?: number
  /** field 2, wire `contact_fav_count_before_update` */
  contactFavCountBeforeUpdate?: number
  /** field 3, wire `favorites_update_entry_point` */
  favoritesUpdateEntryPoint?: FAVORITESUPDATEENTRYPOINT
  /** field 4, wire `group_fav_count_after_update` */
  groupFavCountAfterUpdate?: number
  /** field 5, wire `group_fav_count_before_update` */
  groupFavCountBeforeUpdate?: number
}