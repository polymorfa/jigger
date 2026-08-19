__d("WAWebPttMessageComponent.react", [
	"WAWebDetailImage.react",
	"WAWebFrontendMsgGetters",
	"WAWebMessageAuthor.react",
	"WAWebMsgGetters",
	"WAWebPttAudioBubble.react",
	"WAWebPttAudioMediaState.react",
	"WAWebPttAudioPlayedStatus",
	"react",
	"react-compiler-runtime",
	"useWAWebMsgDownloadMedia",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(23), n = e.enableKbSeekSpeedChange, a = e.msg, i = n === void 0 ? !1 : n, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = [
			o("WAWebFrontendMsgGetters").getSenderObj,
			o("WAWebMsgGetters").getId,
			o("WAWebFrontendMsgGetters").getMsgSenderId
		], t[0] = l) : l = t[0];
		var u = o("useWAWebMsgValues").useMsgValues(e.msg.id, l), c = u[0], d = u[2];
		o("useWAWebMsgDownloadMedia").useMsgDownloadMedia(a);
		var m;
		t[1] !== a || t[2] !== e.displayAuthor || t[3] !== e.displayType || t[4] !== c ? (m = e.displayAuthor ? s.jsx(r("WAWebMessageAuthor.react"), {
			msg: a,
			contact: c,
			displayType: e.displayType
		}) : null, t[1] = a, t[2] = e.displayAuthor, t[3] = e.displayType, t[4] = c, t[5] = m) : m = t[5];
		var p = m, _;
		t[6] !== a ? (_ = s.jsx(r("WAWebPttAudioPlayedStatus"), { msg: a }), t[6] = a, t[7] = _) : _ = t[7];
		var f;
		t[8] !== i || t[9] !== e.displayType || t[10] !== e.mediaData || t[11] !== e.msg ? (f = s.jsx(r("WAWebPttAudioMediaState.react"), {
			msg: e.msg,
			mediaData: e.mediaData,
			displayType: e.displayType,
			enableKbSeekSpeedChange: i
		}), t[8] = i, t[9] = e.displayType, t[10] = e.mediaData, t[11] = e.msg, t[12] = f) : f = t[12];
		var g;
		t[13] !== d ? (g = s.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: d,
			size: 55
		}), t[13] = d, t[14] = g) : g = t[14];
		var h;
		return t[15] !== p || t[16] !== a || t[17] !== e.displayType || t[18] !== e.quotedMsg || t[19] !== _ || t[20] !== f || t[21] !== g ? (h = s.jsx(r("WAWebPttAudioBubble.react"), {
			msg: a,
			quotedMsg: e.quotedMsg,
			author: p,
			status: _,
			player: f,
			avatar: g,
			displayType: e.displayType
		}), t[15] = p, t[16] = a, t[17] = e.displayType, t[18] = e.quotedMsg, t[19] = _, t[20] = f, t[21] = g, t[22] = h) : h = t[22], h;
	}
	var c = u;
	l.Ptt = c;
}), 98);
