const WamPsChannelPostForward = 4746 // channel: private

type PsChannelPostForwardEvent struct {
	ChannelForwardGroupType MESSAGECHATTYPE `wam:"channel_forward_group_type"` // field 1
	Cid string `wam:"cid"` // field 2
	MediaType MEDIATYPE `wam:"media_type"` // field 3
	PostId string `wam:"post_id"` // field 4
	ChannelForwardContentType CHANNELFORWARDCONTENTTYPE `wam:"channel_forward_content_type"` // field 6
	DestinationChannelId string `wam:"destination_channel_id"` // field 7
	DestinationPostId string `wam:"destination_post_id"` // field 8
	IsSecondOrder bool `wam:"is_second_order"` // field 9
}