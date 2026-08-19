export const WamThreadInteractionDataNotification = 6412 as const

export interface ThreadInteractionDataNotificationEvent {
  /** field 1, wire `group_size_bucket` */
  groupSizeBucket?: CLIENTGROUPSIZEBUCKET
  /** field 2, wire `group_type_client` */
  groupTypeClient?: GROUPTYPECLIENT
  /** field 3, wire `is_a_group` */
  isAGroup?: boolean
  /** field 4, wire `thread_ds` */
  threadDs?: string
  /** field 6, wire `total_link_reshare_message_notif_shown` */
  totalLinkReshareMessageNotifShown?: number
  /** field 7, wire `total_link_reshare_message_notif_shown_fb` */
  totalLinkReshareMessageNotifShownFb?: number
  /** field 8, wire `total_link_reshare_message_notif_shown_ig` */
  totalLinkReshareMessageNotifShownIg?: number
  /** field 9, wire `total_link_reshare_message_notif_tap_to_open` */
  totalLinkReshareMessageNotifTapToOpen?: number
  /** field 10, wire `total_link_reshare_message_notif_tap_to_open_fb` */
  totalLinkReshareMessageNotifTapToOpenFb?: number
  /** field 11, wire `total_link_reshare_message_notif_tap_to_open_ig` */
  totalLinkReshareMessageNotifTapToOpenIg?: number
  /** field 12, wire `total_message_reminder_notif_shown` */
  totalMessageReminderNotifShown?: number
  /** field 13, wire `total_message_reminder_notif_tap_to_open` */
  totalMessageReminderNotifTapToOpen?: number
  /** field 14, wire `total_notif_mark_as_read` */
  totalNotifMarkAsRead?: number
  /** field 15, wire `total_notif_missed_call_voip_callback` */
  totalNotifMissedCallVoipCallback?: number
  /** field 16, wire `total_notif_missed_call_voip_message` */
  totalNotifMissedCallVoipMessage?: number
  /** field 17, wire `total_notif_others` */
  totalNotifOthers?: number
  /** field 18, wire `total_notif_reply` */
  totalNotifReply?: number
  /** field 19, wire `total_notif_rtc_voip_accept` */
  totalNotifRtcVoipAccept?: number
  /** field 20, wire `total_notif_rtc_voip_decline` */
  totalNotifRtcVoipDecline?: number
  /** field 21, wire `total_notif_show_preview` */
  totalNotifShowPreview?: number
  /** field 22, wire `total_notif_shown` */
  totalNotifShown?: number
  /** field 23, wire `total_notif_tap_to_open` */
  totalNotifTapToOpen?: number
  /** field 24, wire `thread_id` */
  threadId?: string
  /** field 25, wire `thread_id_by_lid` */
  threadIdByLid?: string
  /** field 26, wire `thread_creation_date` */
  threadCreationDate?: string
}