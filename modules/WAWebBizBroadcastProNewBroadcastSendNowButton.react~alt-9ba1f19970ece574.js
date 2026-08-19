__d("WAWebBizBroadcastProNewBroadcastSendNowButton.react", [
	"WAWebBizBroadcastsCreationStrings",
	"WAWebFlex.react",
	"WDSButton.react",
	"WDSTooltip.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.disabled, n = e.disabledReason, a = e.loading, i = e.onSend, l = s.jsx(r("WDSButton.react"), {
			variant: "filled",
			size: "medium",
			type: "default",
			disabled: t,
			loading: a,
			onPress: i,
			label: o("WAWebBizBroadcastsCreationStrings").getSendNowButtonLabel(a),
			testid: "biz-broadcasts-pro-send-now-button"
		});
		return s.jsx(o("WAWebFlex.react").FlexRow, { children: n != null ? s.jsx(r("WDSTooltip.react"), {
			disabled: !t,
			label: n,
			children: l
		}) : l });
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
