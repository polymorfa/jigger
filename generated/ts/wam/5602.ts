export const WamWaFsSingleEmojiMessageDaily = 5602 as const

export interface WaFsSingleEmojiMessageDailyEvent {
  /** field 1, wire `animated_emoji_enabled` */
  animatedEmojiEnabled?: boolean
  /** field 2, wire `animated_emoji_receive_cnt` */
  animatedEmojiReceiveCnt?: number
  /** field 3, wire `animated_emoji_send_cnt` */
  animatedEmojiSendCnt?: number
  /** field 4, wire `emoji_click_cnt` */
  emojiClickCnt?: number
  /** field 5, wire `emoji_reply_count` */
  emojiReplyCount?: number
  /** field 6, wire `pause_animation_cnt` */
  pauseAnimationCnt?: number
  /** field 7, wire `replay_animation_cnt` */
  replayAnimationCnt?: number
  /** field 8, wire `single_emoji_receive_cnt` */
  singleEmojiReceiveCnt?: number
  /** field 9, wire `single_emoji_send_cnt` */
  singleEmojiSendCnt?: number
}