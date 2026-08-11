export const WamSuspendedGroupDelete = 4342 as const

export interface SuspendedGroupDeleteEvent {
  /** field 1, wire `delete_btn_source` */
  deleteBtnSource?: DELETESUSPENDEDGROUPBTN
}