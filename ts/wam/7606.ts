export const WamPinnedChatsMaxAlert = 7606 as const

export interface PinnedChatsMaxAlertEvent {
  /** field 1, wire `add_to_list_selected` */
  addToListSelected?: boolean
  /** field 2, wire `premium_status` */
  premiumStatus?: PREMIUMSTATUSTYPE
  /** field 3, wire `subscribe_selected` */
  subscribeSelected?: boolean
}