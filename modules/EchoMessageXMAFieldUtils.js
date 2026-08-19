__d("EchoMessageXMAFieldUtils", [
	"$InternalEnum",
	"EchoDecodingUtils",
	"EchoEncodingUtils",
	"WALogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = "XMA-Default-CTA", m = "XMA-Gating-Type", p = "XMA-Header-Subtitle", _ = "XMA-Header-Title", f = "XMA-Is-Tombstoned", g = "XMA-Layout-Type", h = "XMA-Max-Subtitle-Num-Lines", y = "XMA-Max-Title-Num-Lines", C = "XMA-Subtitle-Text", b = "XMA-Target-Expiry", v = "XMA-Target-ID", S = "XMA-Target-Type", R = "XMA-Target-Username", L = "XMA-Title-Text", E = "XMA-Content-Ref", k = "XMA-Dataclass", I = n("$InternalEnum").Mirrored([
		"SINGLE",
		"HSCROLL",
		"VSTACK",
		"PORTRAIT",
		"STANDARD_DXMA",
		"LIST_DXMA",
		"GRID"
	]), T = n("$InternalEnum").Mirrored([
		"NONE",
		"IG_STORY_PHOTO_MENTION",
		"IG_SINGLE_IMAGE_POST_SHARE",
		"IG_MULTIPOST_SHARE",
		"IG_SINGLE_VIDEO_POST_SHARE",
		"IG_STORY_PHOTO_SHARE",
		"IG_STORY_VIDEO_SHARE",
		"IG_CLIPS_SHARE",
		"IG_IGTV_SHARE",
		"IG_SHOP_SHARE",
		"IG_PROFILE_SHARE",
		"IG_STORY_PHOTO_HIGHLIGHT_SHARE",
		"IG_STORY_VIDEO_HIGHLIGHT_SHARE",
		"IG_STORY_REPLY",
		"IG_STORY_REACTION",
		"FB_FEED_SHARE",
		"FB_STORY_REPLY",
		"FB_STORY_SHARE",
		"FB_STORY_MENTION",
		"FB_FEED_VIDEO_SHARE",
		"FB_GAMING_CUSTOM_UPDATE",
		"FB_PRODUCER_STORY_REPLY",
		"FB_PROFILE_DIRECTORY_ITEM",
		"FB_FEED_POST_REACTION_REPLY",
		"MSG_EXTERNAL_LINK_SHARE",
		"MSG_RECEIVER_FETCH",
		"RTC_AUDIO_CALL",
		"RTC_VIDEO_CALL",
		"RTC_MISSED_AUDIO_CALL",
		"RTC_MISSED_VIDEO_CALL",
		"RTC_GROUP_AUDIO_CALL",
		"RTC_GROUP_VIDEO_CALL",
		"FB_EVENT",
		"FB_SHORT",
		"MSG_LOCATION_SHARING",
		"MSG_LOCATION_SHARING_V2",
		"MSG_MEMORIES_SHARE",
		"MSG_MANUS_GROWTH_REFERRAL"
	]), D = n("$InternalEnum").Mirrored([
		"NONE",
		"PRIVATE",
		"SENSITIVE",
		"MISINFORMATION",
		"MEDIA_LABEL",
		"POST_COVER",
		"POST_LABEL",
		"WARNING_SCREENS",
		"INFO",
		"EYE_OFF",
		"NEWS_OFF",
		"WARNING"
	]);
	function x(e, t) {
		t.xmaLayoutType != null && o("EchoEncodingUtils").echoSetStringField(e, g, t.xmaLayoutType), t.xmaTargetType != null && o("EchoEncodingUtils").echoSetStringField(e, S, t.xmaTargetType), o("EchoEncodingUtils").echoSetStringField(e, R, t.xmaTargetUsername), o("EchoEncodingUtils").echoSetStringField(e, v, t.xmaTargetId), t.xmaTargetExpiry != null && o("EchoEncodingUtils").echoSetIntField(e, b, t.xmaTargetExpiry), o("EchoEncodingUtils").echoSetStringField(e, d, t.xmaDefaultCTA), o("EchoEncodingUtils").echoSetStringField(e, _, t.xmaHeaderTitle), o("EchoEncodingUtils").echoSetStringField(e, p, t.xmaHeaderSubtitle), o("EchoEncodingUtils").echoSetStringField(e, L, t.xmaTitleText), o("EchoEncodingUtils").echoSetStringField(e, C, t.xmaSubtitleText), t.xmaMaxTitleNumLines != null && o("EchoEncodingUtils").echoSetIntField(e, y, t.xmaMaxTitleNumLines), t.xmaMaxSubtitleNumLines != null && o("EchoEncodingUtils").echoSetIntField(e, h, t.xmaMaxSubtitleNumLines), t.xmaGatingType != null && o("EchoEncodingUtils").echoSetStringField(e, m, t.xmaGatingType), t.xmaDataclass != null && o("EchoEncodingUtils").echoSetStringField(e, k, t.xmaDataclass), o("EchoEncodingUtils").echoSetBooleanField(e, f, t.xmaIsTombstoned), t.xmaContentRef != null && o("EchoEncodingUtils").echoSetStringField(e, E, t.xmaContentRef);
	}
	function $(t) {
		var n = M(t, f);
		if (n == null) return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web] Missing xmaIsTombstoned from xma fields"]))), null;
		var r = D.cast(o("EchoDecodingUtils").echoDecodeStringField(t, m).result), a = I.cast(o("EchoDecodingUtils").echoDecodeStringField(t, g).result), i = T.cast(o("EchoDecodingUtils").echoDecodeStringField(t, S).result);
		return {
			xmaContentRef: P(t, E),
			xmaDataclass: P(t, k),
			xmaDefaultCTA: P(t, d),
			xmaGatingType: r,
			xmaHeaderSubtitle: P(t, p),
			xmaHeaderTitle: P(t, _),
			xmaIsTombstoned: n,
			xmaLayoutType: a,
			xmaMaxSubtitleNumLines: N(t, h),
			xmaMaxTitleNumLines: N(t, y),
			xmaSubtitleText: P(t, C),
			xmaTargetExpiry: N(t, b),
			xmaTargetId: P(t, v),
			xmaTargetType: i,
			xmaTargetUsername: P(t, R),
			xmaTitleText: P(t, L)
		};
	}
	function P(e, t) {
		var n = o("EchoDecodingUtils").echoDecodeStringField(e, t), r = n.result, a = n.success;
		if (a && r != null) return r;
		o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web] Missing ", " from media fields"])), t);
	}
	function N(e, t) {
		var n = o("EchoDecodingUtils").echoDecodeIntField(e, t), r = n.result, a = n.success;
		if (a && r != null) return r;
		o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web] Missing ", " from xma fields"])), t);
	}
	function M(e, t) {
		var n = o("EchoDecodingUtils").echoDecodeBooleanField(e, t), r = n.result, a = n.success;
		if (a && r != null) return r;
		o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web] Missing ", " from xma fields"])), t);
	}
	l.XMALayoutType = I, l.XMAContentType = T, l.XMAGatingType = D, l.echoMessageSetXMAFields = x, l.decodeXMAFields = $;
}), 98);
