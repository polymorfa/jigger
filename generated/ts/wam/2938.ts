export const WamPttDaily = 2938 as const

export interface PttDailyEvent {
  /** field 1, wire `ptt_record_individual` */
  pttRecordIndividual?: number
  /** field 2, wire `ptt_record_group` */
  pttRecordGroup?: number
  /** field 3, wire `ptt_record_broadcast` */
  pttRecordBroadcast?: number
  /** field 4, wire `ptt_send_individual` */
  pttSendIndividual?: number
  /** field 5, wire `ptt_send_group` */
  pttSendGroup?: number
  /** field 6, wire `ptt_send_broadcast` */
  pttSendBroadcast?: number
  /** field 7, wire `ptt_cancel_individual` */
  pttCancelIndividual?: number
  /** field 8, wire `ptt_cancel_group` */
  pttCancelGroup?: number
  /** field 9, wire `ptt_cancel_broadcast` */
  pttCancelBroadcast?: number
  /** field 10, wire `ptt_lock_individual` */
  pttLockIndividual?: number
  /** field 11, wire `ptt_lock_group` */
  pttLockGroup?: number
  /** field 12, wire `ptt_lock_broadcast` */
  pttLockBroadcast?: number
  /** field 13, wire `ptt_draft_review_individual` */
  pttDraftReviewIndividual?: number
  /** field 14, wire `ptt_draft_review_group` */
  pttDraftReviewGroup?: number
  /** field 15, wire `ptt_draft_review_broadcast` */
  pttDraftReviewBroadcast?: number
  /** field 16, wire `ptt_playback_individual` */
  pttPlaybackIndividual?: number
  /** field 17, wire `ptt_playback_group` */
  pttPlaybackGroup?: number
  /** field 18, wire `ptt_playback_broadcast` */
  pttPlaybackBroadcast?: number
  /** field 19, wire `ptt_fastplayback_individual` */
  pttFastplaybackIndividual?: number
  /** field 20, wire `ptt_fastplayback_group` */
  pttFastplaybackGroup?: number
  /** field 21, wire `ptt_fastplayback_broadcast` */
  pttFastplaybackBroadcast?: number
  /** field 22, wire `ptt_paused_record_broadcast` */
  pttPausedRecordBroadcast?: number
  /** field 23, wire `ptt_paused_record_group` */
  pttPausedRecordGroup?: number
  /** field 24, wire `ptt_paused_record_individual` */
  pttPausedRecordIndividual?: number
  /** field 25, wire `ptt_stop_tap_broadcast` */
  pttStopTapBroadcast?: number
  /** field 26, wire `ptt_stop_tap_group` */
  pttStopTapGroup?: number
  /** field 27, wire `ptt_stop_tap_individual` */
  pttStopTapIndividual?: number
  /** field 29, wire `ptt_out_of_chat_broadcast` */
  pttOutOfChatBroadcast?: number
  /** field 30, wire `ptt_out_of_chat_group` */
  pttOutOfChatGroup?: number
  /** field 31, wire `ptt_out_of_chat_individual` */
  pttOutOfChatIndividual?: number
  /** field 32, wire `ptt_cancel_newsletter` */
  pttCancelNewsletter?: number
  /** field 33, wire `ptt_draft_review_newsletter` */
  pttDraftReviewNewsletter?: number
  /** field 34, wire `ptt_fastplayback_newsletter` */
  pttFastplaybackNewsletter?: number
  /** field 35, wire `ptt_lock_newsletter` */
  pttLockNewsletter?: number
  /** field 36, wire `ptt_out_of_chat_newsletter` */
  pttOutOfChatNewsletter?: number
  /** field 37, wire `ptt_paused_record_newsletter` */
  pttPausedRecordNewsletter?: number
  /** field 38, wire `ptt_playback_newsletter` */
  pttPlaybackNewsletter?: number
  /** field 39, wire `ptt_record_newsletter` */
  pttRecordNewsletter?: number
  /** field 40, wire `ptt_send_newsletter` */
  pttSendNewsletter?: number
  /** field 41, wire `ptt_stop_tap_newsletter` */
  pttStopTapNewsletter?: number
  /** field 42, wire `ptt_cancel_interop` */
  pttCancelInterop?: number
  /** field 43, wire `ptt_draft_review_interop` */
  pttDraftReviewInterop?: number
  /** field 44, wire `ptt_fastplayback_interop` */
  pttFastplaybackInterop?: number
  /** field 45, wire `ptt_lock_interop` */
  pttLockInterop?: number
  /** field 46, wire `ptt_out_of_chat_interop` */
  pttOutOfChatInterop?: number
  /** field 47, wire `ptt_paused_record_interop` */
  pttPausedRecordInterop?: number
  /** field 48, wire `ptt_playback_interop` */
  pttPlaybackInterop?: number
  /** field 49, wire `ptt_record_interop` */
  pttRecordInterop?: number
  /** field 50, wire `ptt_send_interop` */
  pttSendInterop?: number
  /** field 51, wire `ptt_stop_tap_interop` */
  pttStopTapInterop?: number
}