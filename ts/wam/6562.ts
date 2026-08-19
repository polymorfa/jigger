export const WamCtwaAdCreationAndManagementJourney = 6562 as const

export interface CtwaAdCreationAndManagementJourneyEvent {
  /** field 1, wire `ctwa_ad_account_type` */
  ctwaAdAccountType?: CTWAADACCOUNTTYPE
  /** field 2, wire `extra_attributes` */
  extraAttributes?: string
  /** field 3, wire `lwi_action_type` */
  lwiActionType?: LWIACTIONTYPE
  /** field 4, wire `lwi_entry_point` */
  lwiEntryPoint?: LWIENTRYPOINT
  /** field 5, wire `lwi_flow_id` */
  lwiFlowId?: string
  /** field 6, wire `lwi_sub_entry_point` */
  lwiSubEntryPoint?: LWISUBENTRYPOINT
  /** field 7, wire `lwi_surface` */
  lwiSurface?: LWISURFACE
  /** field 8, wire `seq_id` */
  seqId?: number
  /** field 9, wire `target_component` */
  targetComponent?: TARGETCOMPONENT
  /** field 10, wire `unified_session_id` */
  unifiedSessionId?: string
  /** field 11, wire `wa_ad_account_eligibility` */
  waAdAccountEligibility?: WAADACCOUNTELIGIBILITY
  /** field 12, wire `wa_ad_account_id` */
  waAdAccountId?: string
}