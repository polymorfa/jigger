__d("WAWebMessageLoadingMedia.react", [
	"WATimeUtils",
	"WAWebBotTypes",
	"WAWebMediaGenerationFailedContent.react",
	"WAWebMediaHubLoadingSkeletons.react",
	"WAWebMessageCropping",
	"WAWebMsgGetters",
	"react",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = o("WATimeUtils").MINUTE_SECONDS * 2;
	function c(e) {
		return e === "loading_image" ? o("WAWebMessageCropping").DEFAULT_HEIGHT_PICTURE : o("WAWebMessageCropping").DEFAULT_HEIGHT_VIDEO;
	}
	function d(e) {
		var t = e.msg, n = o("useWAWebMsgValues").useMsgValues(t.id, [o("WAWebMsgGetters").getBotEditType, o("WAWebMsgGetters").getT]), r = n[0], a = n[1], i = o("WATimeUtils").unixTime(), l = r === o("WAWebBotTypes").BotMsgEditType.LAST || i - a > u;
		return l ? s.jsx(m, { subtype: t.subtype }) : s.jsx("div", { children: s.jsx(o("WAWebMediaHubLoadingSkeletons.react").WAWebMediaHubLoadingText, {
			width: o("WAWebMessageCropping").DEFAULT_WIDTH,
			height: c(t.subtype)
		}) });
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = e.subtype, n = {
			width: o("WAWebMessageCropping").DEFAULT_WIDTH + "px",
			height: c(t) + "px"
		};
		return s.jsx("div", {
			style: n,
			children: s.jsx(r("WAWebMediaGenerationFailedContent.react"), { isVideo: t !== "loading_image" })
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = d;
}), 98);
