__d("WAWebCallsTabCallCell.react", [
	"WAWebBoolFunc",
	"WAWebCallLogEntryChatImage.react",
	"WAWebCallLogTitle.react",
	"WAWebChatCell.react",
	"WDSButton.react",
	"WDSIconIcCallFilled.react",
	"WDSIconIcVideocamFilled.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.active, n = e.bottomSpacing, a = n === void 0 ? !1 : n, i = e.buttonDisabled, l = i === void 0 ? !1 : i, u = e.buttonLabel, c = e.buttonVariant, d = e.callLogMsg, m = e.handleKeyboardClick, p = m === void 0 ? !1 : m, _ = e.isVideoCall, f = e.onButtonPress, g = e.onCardClick, h = e.secondary, y = e.testid, C = s.jsx(r("WDSButton.react"), {
			label: u,
			Icon: r(_ ? "WDSIconIcVideocamFilled.react" : "WDSIconIcCallFilled.react"),
			variant: c != null ? c : l ? "outline" : "filled",
			disabled: l,
			onPress: function(t) {
				t.stopPropagation(), f();
			}
		});
		return s.jsx(r("WAWebChatCell.react"), {
			theme: "voip-ongoing-call",
			idle: !0,
			contextEnabled: o("WAWebBoolFunc").returnFalse,
			active: t,
			image: s.jsx(r("WAWebCallLogEntryChatImage.react"), { msg: d }),
			primary: s.jsx(r("WAWebCallLogTitle.react"), { callLogMsg: d }),
			secondary: h,
			detail: C,
			onClick: g != null ? g : void 0,
			handleKeyboardClick: p && g != null,
			testid: y,
			className: {
				0: "xdmi676 x1qafhyn x16ovd2e x12xbjc7",
				2: "xdmi676 x1qafhyn x16ovd2e x12xbjc7 xefnzgg",
				1: "xdmi676 x1qafhyn x16ovd2e x12xbjc7 x1citr7e",
				3: "xdmi676 x1qafhyn x16ovd2e x12xbjc7 xefnzgg x1citr7e"
			}[!!a << 1 | (g != null) << 0]
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
