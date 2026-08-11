export const WamStatusPogImpression = 8302 as const

export interface StatusPogImpressionEvent {
  /** field 1, wire `cid` */
  cid?: string
  /** field 2, wire `pog_index` */
  pogIndex?: number
  /** field 3, wire `status_category` */
  statusCategory?: STATUSCATEGORY
  /** field 4, wire `status_group_id` */
  statusGroupId?: string
  /** field 5, wire `status_poster_hash_id` */
  statusPosterHashId?: string
  /** field 6, wire `status_poster_id` */
  statusPosterId?: string
  /** field 7, wire `status_view_entrypoint` */
  statusViewEntrypoint?: STATUSROWSECTION
  /** field 8, wire `ts_surface` */
  tsSurface?: TSSURFACE
}