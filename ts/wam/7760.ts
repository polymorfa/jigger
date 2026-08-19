export const WamConsumerBizInteractionJourney = 7760 as const

export interface ConsumerBizInteractionJourneyEvent {
  /** field 1, wire `consumer_biz_action_target` */
  consumerBizActionTarget?: CONSUMERBIZACTIONTARGETENUM
  /** field 2, wire `consumer_biz_action_type` */
  consumerBizActionType?: CONSUMERBIZACTIONTYPEENUM
  /** field 3, wire `consumer_biz_entry_point` */
  consumerBizEntryPoint?: CONSUMERBIZENTRYPOINTENUM
  /** field 4, wire `consumer_biz_extra_attributes` */
  consumerBizExtraAttributes?: string
  /** field 5, wire `consumer_biz_feature` */
  consumerBizFeature?: CONSUMERBIZFEATUREENUM
  /** field 6, wire `consumer_biz_seq_id` */
  consumerBizSeqId?: number
  /** field 7, wire `consumer_biz_session_id` */
  consumerBizSessionId?: string
  /** field 8, wire `consumer_biz_surface` */
  consumerBizSurface?: CONSUMERBIZSURFACEENUM
  /** field 9, wire `business_jid` */
  businessJid?: string
  /** field 10, wire `sensitive_extra_attributes` */
  sensitiveExtraAttributes?: string
}