__d("MAWConvertMSGDataclassContentTypeToLSXmaContentType", ["LSXmaContentType", "MSGDataclassTypes.flow"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		if (e == null) return null;
		switch (e) {
			case o("MSGDataclassTypes.flow").XmsgXmaContentType.MsgReceiverFetch: return r("LSXmaContentType").MSG_RECEIVER_FETCH;
			case o("MSGDataclassTypes.flow").XmsgXmaContentType.FbFeedShare: return r("LSXmaContentType").FB_FEED_SHARE;
			case o("MSGDataclassTypes.flow").XmsgXmaContentType.FbStoryReply: return r("LSXmaContentType").FB_STORY_REPLY;
			case o("MSGDataclassTypes.flow").XmsgXmaContentType.FbStoryShare: return r("LSXmaContentType").FB_STORY_SHARE;
			case o("MSGDataclassTypes.flow").XmsgXmaContentType.FbStoryMention: return r("LSXmaContentType").FB_STORY_MENTION;
			case o("MSGDataclassTypes.flow").XmsgXmaContentType.FbFeedVideoShare: return r("LSXmaContentType").FB_FEED_VIDEO_SHARE;
			case o("MSGDataclassTypes.flow").XmsgXmaContentType.FbGamingCustomUpdate: return r("LSXmaContentType").FB_GAMING_CUSTOM_UPDATE;
			case o("MSGDataclassTypes.flow").XmsgXmaContentType.FbProducerStoryReply: return r("LSXmaContentType").FB_PRODUCER_STORY_REPLY;
			case o("MSGDataclassTypes.flow").XmsgXmaContentType.FbEvent: return r("LSXmaContentType").FB_EVENT;
			case o("MSGDataclassTypes.flow").XmsgXmaContentType.FbFeedPostPrivateReply: return r("LSXmaContentType").FB_FEED_POST_PRIVATE_REPLY;
			case o("MSGDataclassTypes.flow").XmsgXmaContentType.FbFeedPostReactionReply: return r("LSXmaContentType").FB_FEED_POST_REACTION_REPLY;
			case o("MSGDataclassTypes.flow").XmsgXmaContentType.FbShort: return r("LSXmaContentType").FB_SHORT;
			default: return null;
		}
	}
	l.convertMSGDataclassContentTypeToLSXmaContentType = e;
}), 98);
