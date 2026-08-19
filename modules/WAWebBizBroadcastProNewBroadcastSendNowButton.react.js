__d("WAWebBizBroadcastProNewBroadcastSendNowButton.react", [
	"WAWebBizBroadcastsCreationStrings",
	"WAWebFlex.react",
	"WDSButton.react",
	"WDSTooltip.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(11), n = e.disabled, a = e.disabledReason, i = e.loading, l = e.onSend, u;
		t[0] !== i ? (u = o("WAWebBizBroadcastsCreationStrings").getSendNowButtonLabel(i), t[0] = i, t[1] = u) : u = t[1];
		var c;
		t[2] !== n || t[3] !== i || t[4] !== l || t[5] !== u ? (c = s.jsx(r("WDSButton.react"), {
			variant: "filled",
			size: "medium",
			type: "default",
			disabled: n,
			loading: i,
			onPress: l,
			label: u,
			testid: "biz-broadcasts-pro-send-now-button"
		}), t[2] = n, t[3] = i, t[4] = l, t[5] = u, t[6] = c) : c = t[6];
		var d = c, m;
		return t[7] !== d || t[8] !== n || t[9] !== a ? (m = s.jsx(o("WAWebFlex.react").FlexRow, { children: a != null ? s.jsx(r("WDSTooltip.react"), {
			disabled: !n,
			label: a,
			children: d
		}) : d }), t[7] = d, t[8] = n, t[9] = a, t[10] = m) : m = t[10], m;
	}
	l.default = u;
}), 98);
