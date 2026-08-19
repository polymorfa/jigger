__d("WAWebCallsTabCallCell.react", [
	"WAWebBoolFunc",
	"WAWebCallLogEntryChatImage.react",
	"WAWebCallLogTitle.react",
	"WAWebChatCell.react",
	"WDSButton.react",
	"WDSIconIcCallFilled.react",
	"WDSIconIcVideocamFilled.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(24), n = e.active, a = e.bottomSpacing, i = e.buttonDisabled, l = e.buttonLabel, u = e.buttonVariant, c = e.callLogMsg, d = e.handleKeyboardClick, m = e.isVideoCall, p = e.onButtonPress, _ = e.onCardClick, f = e.secondary, g = e.testid, h = a === void 0 ? !1 : a, y = i === void 0 ? !1 : i, C = d === void 0 ? !1 : d, b = r(m ? "WDSIconIcVideocamFilled.react" : "WDSIconIcCallFilled.react"), v = u != null ? u : y ? "outline" : "filled", S;
		t[0] !== p ? (S = function(t) {
			t.stopPropagation(), p();
		}, t[0] = p, t[1] = S) : S = t[1];
		var R;
		t[2] !== y || t[3] !== l || t[4] !== b || t[5] !== v || t[6] !== S ? (R = s.jsx(r("WDSButton.react"), {
			label: l,
			Icon: b,
			variant: v,
			disabled: y,
			onPress: S
		}), t[2] = y, t[3] = l, t[4] = b, t[5] = v, t[6] = S, t[7] = R) : R = t[7];
		var L = R, E, k;
		t[8] !== c ? (E = s.jsx(r("WAWebCallLogEntryChatImage.react"), { msg: c }), k = s.jsx(r("WAWebCallLogTitle.react"), { callLogMsg: c }), t[8] = c, t[9] = E, t[10] = k) : (E = t[9], k = t[10]);
		var I = _ != null ? _ : void 0, T = C && _ != null, D;
		t[11] !== h || t[12] !== _ ? (D = {
			0: "xdmi676 x1qafhyn x16ovd2e x12xbjc7",
			2: "xdmi676 x1qafhyn x16ovd2e x12xbjc7 xefnzgg",
			1: "xdmi676 x1qafhyn x16ovd2e x12xbjc7 x1citr7e",
			3: "xdmi676 x1qafhyn x16ovd2e x12xbjc7 xefnzgg x1citr7e"
		}[!!h << 1 | (_ != null) << 0], t[11] = h, t[12] = _, t[13] = D) : D = t[13];
		var x;
		return t[14] !== n || t[15] !== L || t[16] !== f || t[17] !== I || t[18] !== T || t[19] !== D || t[20] !== E || t[21] !== k || t[22] !== g ? (x = s.jsx(r("WAWebChatCell.react"), {
			theme: "voip-ongoing-call",
			idle: !0,
			contextEnabled: o("WAWebBoolFunc").returnFalse,
			active: n,
			image: E,
			primary: k,
			secondary: f,
			detail: L,
			onClick: I,
			handleKeyboardClick: T,
			testid: g,
			className: D
		}), t[14] = n, t[15] = L, t[16] = f, t[17] = I, t[18] = T, t[19] = D, t[20] = E, t[21] = k, t[22] = g, t[23] = x) : x = t[23], x;
	}
	l.default = u;
}), 98);
