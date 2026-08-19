export const WamStatusViewerAction = 6692 as const

export interface StatusViewerActionEvent {
  /** field 1, wire `attribution_type` */
  attributionType?: TOPBARATTRIBUTIONTYPE
  /** field 2, wire `viewer_action_type` */
  viewerActionType?: STATUSVIEWACTIONTYPE
  /** field 3, wire `attribution_types` */
  attributionTypes?: string
  /** field 4, wire `status_category` */
  statusCategory?: STATUSCATEGORY
  /** field 5, wire `external_source_domain_type` */
  externalSourceDomainType?: INLINEVIDEOTYPE
  /** field 6, wire `url_status_clicked` */
  urlStatusClicked?: URLSTATUSCLICKED
  /** field 7, wire `url_status_type` */
  urlStatusType?: URLSTATUSTYPE
  /** field 8, wire `action_index` */
  actionIndex?: number
  /** field 9, wire `link_load_time` */
  linkLoadTime?: number
  /** field 10, wire `link_open_result` */
  linkOpenResult?: string
  /** field 11, wire `psa_campaign_id` */
  psaCampaignId?: string
  /** field 12, wire `status_id` */
  statusId?: string
  /** field 13, wire `status_viewer_session_id` */
  statusViewerSessionId?: number
}