__d("WAWebPttAudioPlayedStatus", [
	"WAWebAck",
	"WAWebAudioStatusIcon.react",
	"WAWebFrontendMsgGetters",
	"WAWebMsgGetters",
	"WAWebPttStatusIconStyleable.react",
	"react",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		bgIncoming: {
			fill: "x1yd6tts",
			$$css: !0
		},
		bgOutgoing: {
			fill: "xnbcrc8",
			$$css: !0
		},
		iconBlue: {
			color: "x100la0o",
			$$css: !0
		},
		iconGray: {
			color: "x1bbjyja",
			$$css: !0
		},
		iconGreen: {
			color: "x1x3uvgb",
			$$css: !0
		}
	};
	function c(e) {
		var t = e.msg, n = o("useWAWebMsgValues").useMsgValues(t.id, [
			o("WAWebMsgGetters").getAck,
			o("WAWebMsgGetters").getIsSentByMe,
			o("WAWebFrontendMsgGetters").getAsPttLike
		]), r = n[0], a = n[1], i = n[2], l = r === o("WAWebAck").ACK.PLAYED, c = a ? u.bgOutgoing : u.bgIncoming, m = d(l, a);
		return s.jsx("div", {
			className: "xexx8yu xrw5ot4 x18d9i69 x7coems",
			children: s.jsx("div", {
				className: "x11uqc5h x78zum5 x6s0dn4",
				children: t.type === "ptt" || i ? s.jsx(o("WAWebPttStatusIconStyleable.react").PttStatusIconStyleable, { innerStyles: {
					background: c,
					primary: m
				} }) : s.jsx(o("WAWebAudioStatusIcon.react").AudioStatusIcon, { innerStyles: {
					background: c,
					primary: m
				} })
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e, t) {
		return e ? u.iconBlue : t ? u.iconGray : u.iconGreen;
	}
	l.default = c;
}), 98);
