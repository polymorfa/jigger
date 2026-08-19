__d("MAWReplyBuilder", [
	"MAWReplyBuilder_Forward",
	"MAWReplyBuilder_HighlightsTabPostReply",
	"MAWReplyBuilder_LightweightStatus",
	"MAWReplyBuilder_Message",
	"MAWReplyBuilder_PostMention",
	"MAWReplyBuilder_ProducerStoryReply",
	"MAWReplyBuilder_Story",
	"MAWReplyBuilder_StoryMention"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = {
		FB_POST_MENTION: o("MAWReplyBuilder_PostMention").MAWReplyBuilder_PostMention,
		FB_PRODUCER_STORY_REPLY: o("MAWReplyBuilder_ProducerStoryReply").MAWReplyBuilder_ProducerStoryReply,
		FB_STORY_MENTION: o("MAWReplyBuilder_StoryMention").MAWReplyBuilder_StoryMention,
		FORWARD: o("MAWReplyBuilder_Forward").MAWReplyBuilder_Forward,
		HIGHLIGHTS_TAB_POST_REPLY: o("MAWReplyBuilder_HighlightsTabPostReply").MAWReplyBuilder_HighlightsTabPostReply,
		LIGHTWEIGHT_STATUS: o("MAWReplyBuilder_LightweightStatus").MAWReplyBuilder_LightweightStatus,
		MESSAGE: o("MAWReplyBuilder_Message").MAWReplyBuilder_Message,
		STORY: o("MAWReplyBuilder_Story").MAWReplyBuilder_StoryReply
	};
	function s(t) {
		return e[t];
	}
	function u(e) {
		var t = s(e.replyType);
		return t.buildReplyUserId(e);
	}
	l.getReplyBuilder = s, l.getReplyUserIdNew = u;
}), 98);
