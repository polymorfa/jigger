__d("WAWebCallLogDataUsageText.react", [
	"fbt",
	"WAWebL10nFilesize",
	"WAWebMsgGetters",
	"WAWebVoipGatingUtils",
	"WDSText.react",
	"react",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t, n = e.msg, a = o("useWAWebMsgValues").useMsgValues(n.id, [
			(t = o("WAWebMsgGetters")).getBytesSent,
			t.getBytesReceived,
			t.getIsAdHocGroupCall,
			t.getIsCallLink,
			t.getIsGroupMsg
		]), i = a[0], l = a[1], c = a[2], d = a[3], m = a[4];
		if (!o("WAWebVoipGatingUtils").isCallInfoOptimizationsEnabledForCallType({
			isAdHocGroupCall: c,
			isCallLink: d,
			isGroup: m
		}) || i == null || l == null) return null;
		var p = i + l;
		if (p <= 0) return null;
		var _ = o("WAWebL10nFilesize").getL10nFilesize(p);
		return u.jsx("span", {
			"aria-label": s._(
				/*BTDS*/
				"",
				[s._param("size", _)]
			),
			"data-testid": "call_log_entry_data_usage",
			children: u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: _
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
