__d("WAWebCallLogDataUsageText.react", [
	"fbt",
	"WAWebL10nFilesize",
	"WAWebMsgGetters",
	"WAWebVoipGatingUtils",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(9), n = e.msg, a;
		if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
			var i;
			a = [
				(i = o("WAWebMsgGetters")).getBytesSent,
				i.getBytesReceived,
				i.getIsAdHocGroupCall,
				i.getIsCallLink,
				i.getIsGroupMsg
			], t[0] = a;
		} else a = t[0];
		var l = o("useWAWebMsgValues").useMsgValues(n.id, a), c = l[0], d = l[1], m = l[2], p = l[3], _ = l[4];
		if (!o("WAWebVoipGatingUtils").isCallInfoOptimizationsEnabledForCallType({
			isAdHocGroupCall: m,
			isCallLink: p,
			isGroup: _
		}) || c == null || d == null) return null;
		var f = c + d;
		if (f <= 0) return null;
		var g, h;
		t[1] !== f ? (g = o("WAWebL10nFilesize").getL10nFilesize(f), h = s._(
			/*BTDS*/
			"",
			[s._param("size", g)]
		), t[1] = f, t[2] = g, t[3] = h) : (g = t[2], h = t[3]);
		var y;
		t[4] !== g ? (y = u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			children: g
		}), t[4] = g, t[5] = y) : y = t[5];
		var C;
		return t[6] !== h || t[7] !== y ? (C = u.jsx("span", {
			"aria-label": h,
			"data-testid": "call_log_entry_data_usage",
			children: y
		}), t[6] = h, t[7] = y, t[8] = C) : C = t[8], C;
	}
	l.default = c;
}), 226);
