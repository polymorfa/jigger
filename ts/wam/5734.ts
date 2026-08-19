export const WamShareContentUserJourney = 5734 as const

export interface ShareContentUserJourneyEvent {
  /** field 1, wire `app_session_id` */
  appSessionId?: string
  /** field 2, wire `has_files` */
  hasFiles?: boolean
  /** field 3, wire `has_images` */
  hasImages?: boolean
  /** field 4, wire `has_links` */
  hasLinks?: boolean
  /** field 5, wire `has_video` */
  hasVideo?: boolean
  /** field 6, wire `media_count` */
  mediaCount?: number
  /** field 7, wire `number_of_recipients` */
  numberOfRecipients?: number
  /** field 8, wire `share_content_user_journey_action` */
  shareContentUserJourneyAction?: SHARECONTENTUSERJOURNEYACTION
  /** field 9, wire `share_content_user_journey_surface_entry_point` */
  shareContentUserJourneySurfaceEntryPoint?: TSSURFACE
  /** field 10, wire `ui_surface` */
  uiSurface?: TSSURFACE
  /** field 11, wire `user_journey_funnel_id` */
  userJourneyFunnelId?: string
  /** field 12, wire `caption_added` */
  captionAdded?: boolean
  /** field 13, wire `user_journey_event_ms` */
  userJourneyEventMs?: number
  /** field 14, wire `unified_session_id` */
  unifiedSessionId?: string
  /** field 15, wire `is_forward_flow` */
  isForwardFlow?: boolean
  /** field 16, wire `message_selected_count` */
  messageSelectedCount?: number
  /** field 17, wire `has_music` */
  hasMusic?: boolean
  /** field 21, wire `has_caption_prefilled` */
  hasCaptionPrefilled?: boolean
  /** field 22, wire `has_bot_imagine_images` */
  hasBotImagineImages?: boolean
  /** field 23, wire `prefilled_caption_removed` */
  prefilledCaptionRemoved?: boolean
  /** field 24, wire `share_content_user_journey_entry_point` */
  shareContentUserJourneyEntryPoint?: SHARECONTENTUSERJOURNEYENTRYPOINT
  /** field 25, wire `has_status_recipient` */
  hasStatusRecipient?: boolean
  /** field 27, wire `forward_user_journey_funnel_id` */
  forwardUserJourneyFunnelId?: string
}