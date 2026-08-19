export const WamPsChannelPostForward = 4746 as const

export interface PsChannelPostForwardEvent {
  /** field 1, wire `channel_forward_group_type` */
  channelForwardGroupType?: MESSAGECHATTYPE
  /** field 2, wire `cid` */
  cid?: string
  /** field 3, wire `media_type` */
  mediaType?: MEDIATYPE
  /** field 4, wire `post_id` */
  postId?: string
  /** field 6, wire `channel_forward_content_type` */
  channelForwardContentType?: CHANNELFORWARDCONTENTTYPE
  /** field 7, wire `destination_channel_id` */
  destinationChannelId?: string
  /** field 8, wire `destination_post_id` */
  destinationPostId?: string
  /** field 9, wire `is_second_order` */
  isSecondOrder?: boolean
}