__d("MAWParseXMAUnsupportedMessageType", [
	"MWXMAV2IsDataclassLiveLocationXMA",
	"MWXMAV2XmaDataClass",
	"WAArmadilloXMA.pb"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n) {
		if (n === void 0 && (n = !1), e == null) return null;
		if (n) return "paymentsTransactionMessage";
		switch (e) {
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.MSG_LOCATION_SHARING:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.MSG_LOCATION_SHARING_V2: return o("MWXMAV2IsDataclassLiveLocationXMA").isDataclassLiveLocationXMA(o("MWXMAV2XmaDataClass").parseXmaDataClass(t)) ? "liveLocationMessage" : "locationMessage";
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.MSG_CONTACT:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.MSG_AI_CONTACT: return "contactShareMessage";
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_STORY_MENTION: return "storyMentionMessage";
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_POST_MENTION: return "postMentionMessage";
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.MSG_MEMORIES_SHARE: return "messengerMemory";
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_MISSED_AUDIO_CALL:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_MISSED_VIDEO_CALL:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_GROUP_AUDIO_CALL:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_GROUP_VIDEO_CALL:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_MISSED_GROUP_AUDIO_CALL:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_MISSED_GROUP_VIDEO_CALL:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_AUDIO_CALL:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_VIDEO_CALL: return "rtcMessage";
			default: return null;
		}
	}
	l.getXMAUnsupportedMessageType = e;
}), 98);
