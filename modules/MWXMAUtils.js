__d("MWXMAUtils", ["I64", "LSXmaContentType"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = new Set([
		"xma_rtc_video",
		"xma_rtc_missed_video",
		"xma_rtc_missed_group_video",
		"xma_rtc_ended_video",
		"xma_rtc_new_video_default",
		"xma_rtc_new_video_from_fb_share",
		"xma_rtc_new_video_from_fb_video_share",
		"xma_rtc_new_video_from_cowatch_share",
		"xma_rtc_cowatch_start_video",
		"xma_rtc_audio",
		"xma_rtc_missed_audio",
		"xma_rtc_missed_group_audio",
		"xma_rtc_ended_audio",
		"xma_rtc_new_audio_default",
		"xma_rtc_new_audio_from_fb_share",
		"xma_rtc_new_audio_from_fb_video_share",
		"xma_rtc_new_audio_from_cowatch_share"
	]);
	function u(e) {
		return s.has(e);
	}
	function c(t) {
		return (e || (e = o("I64"))).to_int32(t != null ? t : (e || (e = o("I64"))).zero) === r("LSXmaContentType").MSG_LOCATION_SHARING || (e || (e = o("I64"))).to_int32(t != null ? t : (e || (e = o("I64"))).zero) === r("LSXmaContentType").MSG_LOCATION_SHARING_V2;
	}
	function d(t) {
		return (e || (e = o("I64"))).to_int32(t != null ? t : (e || (e = o("I64"))).zero) === r("LSXmaContentType").MSG_CONTACT || (e || (e = o("I64"))).to_int32(t != null ? t : (e || (e = o("I64"))).zero) === r("LSXmaContentType").MSG_AI_CONTACT;
	}
	function m(t) {
		return (e || (e = o("I64"))).to_int32(t != null ? t : (e || (e = o("I64"))).zero) === r("LSXmaContentType").FB_POST_MENTION;
	}
	function p(t) {
		return (e || (e = o("I64"))).to_int32(t != null ? t : (e || (e = o("I64"))).zero) === r("LSXmaContentType").MSG_MEMORIES_SHARE;
	}
	function _(t) {
		var n = (e || (e = o("I64"))).to_int32(t != null ? t : (e || (e = o("I64"))).zero);
		return n === r("LSXmaContentType").RTC_AUDIO_CALL || n === r("LSXmaContentType").RTC_VIDEO_CALL || n === r("LSXmaContentType").RTC_MISSED_AUDIO_CALL || n === r("LSXmaContentType").RTC_MISSED_VIDEO_CALL || n === r("LSXmaContentType").RTC_GROUP_AUDIO_CALL || n === r("LSXmaContentType").RTC_GROUP_VIDEO_CALL || n === r("LSXmaContentType").RTC_MISSED_GROUP_AUDIO_CALL || n === r("LSXmaContentType").RTC_MISSED_GROUP_VIDEO_CALL || n === r("LSXmaContentType").RTC_ONGOING_AUDIO_CALL || n === r("LSXmaContentType").RTC_ONGOING_VIDEO_CALL;
	}
	function f(t) {
		return (e || (e = o("I64"))).to_int32(t != null ? t : (e || (e = o("I64"))).zero) === r("LSXmaContentType").MSG_PRIVATE_XMA;
	}
	function g(t) {
		return (e || (e = o("I64"))).to_int32(t != null ? t : (e || (e = o("I64"))).zero) === r("LSXmaContentType").FB_STORY_MENTION;
	}
	function h(e, t) {
		if (e == null) return !1;
		try {
			var n = JSON.parse(e), r = n.content;
			if ((r == null ? void 0 : r.__typename) === "XMSGXmaSingleContent") {
				var o, a = (o = r.custom_template_data) == null ? void 0 : o.__typename;
				return a != null && t.includes(a);
			}
			return (r == null ? void 0 : r.__typename) === "XMSGXmaMultiContent" ? r.list.some(function(e) {
				var n, r = (n = e.custom_template_data) == null ? void 0 : n.__typename;
				return r != null && t.includes(r);
			}) : !1;
		} catch (e) {
			return !1;
		}
	}
	l.isRTCXMA = u, l.isLocationShareXMA = c, l.isContactShareXMA = d, l.isXMAContentTypeFbPostMention = m, l.isXMAContentTypeMemoriesShare = p, l.isXMAContentTypeRTC = _, l.isPrivateXMA = f, l.isStoryMentionXMA = g, l.containsAnyOfXmaTemplateTypes = h;
}), 98);
