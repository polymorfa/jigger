__d("WAWebPttMessageComponent.react", [
	"WAWebDetailImage.react",
	"WAWebFrontendMsgGetters",
	"WAWebMessageAuthor.react",
	"WAWebMsgGetters",
	"WAWebPttAudioBubble.react",
	"WAWebPttAudioMediaState.react",
	"WAWebPttAudioPlayedStatus",
	"react",
	"useWAWebMsgDownloadMedia",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.enableKbSeekSpeedChange, n = t === void 0 ? !1 : t, a = e.msg, i = o("useWAWebMsgValues").useMsgValues(e.msg.id, [
			o("WAWebFrontendMsgGetters").getSenderObj,
			o("WAWebMsgGetters").getId,
			o("WAWebFrontendMsgGetters").getMsgSenderId
		]), l = i[0], u = i[1], c = i[2];
		o("useWAWebMsgDownloadMedia").useMsgDownloadMedia(a);
		var d = e.displayAuthor ? s.jsx(r("WAWebMessageAuthor.react"), {
			msg: a,
			contact: l,
			displayType: e.displayType
		}) : null;
		return s.jsx(r("WAWebPttAudioBubble.react"), {
			msg: a,
			quotedMsg: e.quotedMsg,
			author: d,
			status: s.jsx(r("WAWebPttAudioPlayedStatus"), { msg: a }),
			player: s.jsx(r("WAWebPttAudioMediaState.react"), {
				msg: e.msg,
				mediaData: e.mediaData,
				displayType: e.displayType,
				enableKbSeekSpeedChange: n
			}),
			avatar: s.jsx(o("WAWebDetailImage.react").DetailImage, {
				id: c,
				size: 55
			}),
			displayType: e.displayType
		});
	}
	u.displayName = u.name + " [from " + i.id + "]";
	var c = u;
	l.Ptt = c;
}), 98);
