export const WamCtwaBizUserJourney = 5992 as const

export interface CtwaBizUserJourneyEvent {
  /** field 1, wire `ctwa_biz_user_journey_metadata` */
  ctwaBizUserJourneyMetadata?: string
  /** field 2, wire `ctwa_biz_user_journey_operation` */
  ctwaBizUserJourneyOperation?: CTWABIZUSERJOURNEYOPERATION
  /** field 3, wire `ad_id` */
  adId?: string
  /** field 4, wire `biz_feature_enabled` */
  bizFeatureEnabled?: string
  /** field 6, wire `ctwa_biz_user_jounery_entry_point` */
  ctwaBizUserJouneryEntryPoint?: string
  /** field 7, wire `ctwa_biz_event_reason` */
  ctwaBizEventReason?: string
}