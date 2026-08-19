__d("WAWebVoipRaiseHandButton.react", [
	"fbt",
	"WAWebEmoji",
	"WAWebEmoji.react",
	"WDSButton.react",
	"WDSIconIcPanTool.react",
	"WDSTooltip.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e = ["iconXstyle"], u, c = u || (u = o("react")), d = "✋", m = {
		mirrorIcon: {
			display: "x1lliihq",
			transform: "xpk2tj9",
			$$css: !0
		},
		raisedHandEmoji: {
			fontSize: "xngnso2",
			lineHeight: "xo5v014",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		raiseHandActiveButton: {
			minWidth: "x900493",
			paddingInlineStart: "x1c1uobl",
			paddingInlineEnd: "xyri2b",
			$$css: !0
		},
		raiseHandActiveBackground: {
			backgroundColor: "x1od0jb8",
			$$css: !0
		}
	}, p = { button: {
		width: "x1useyqa",
		height: "xsdox4t",
		borderStartStartRadius: "xlr9sxt",
		borderStartEndRadius: "xvvg52n",
		borderEndEndRadius: "xwd4zgb",
		borderEndStartRadius: "xq8v1ta",
		$$css: !0
	} };
	function _(t) {
		var n = o("react-compiler-runtime").c(8), a, i;
		n[0] !== t ? (a = t.iconXstyle, i = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l;
		n[3] !== a ? (l = [m.mirrorIcon, a], n[3] = a, n[4] = l) : l = n[4];
		var s;
		return n[5] !== i || n[6] !== l ? (s = c.jsx(r("WDSIconIcPanTool.react"), babelHelpers.extends({}, i, { iconXstyle: l })), n[5] = i, n[6] = l, n[7] = s) : s = n[7], s;
	}
	function f(e) {
		var t = o("react-compiler-runtime").c(18), n = e.isDisabled, a = e.isSelfHandRaised, i = e.onRaiseHandToggle, l = e.tooltipAnchorRef, u = e.tooltipOwnerDocument, f = n === void 0 ? !1 : n, g = a === void 0 ? !1 : a, h;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (h = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(d), t[0] = h) : h = t[0];
		var y = h, C;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (C = s._(
			/*BTDS*/
			""
		), t[1] = C) : C = t[1];
		var b = C, v;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (v = s._(
			/*BTDS*/
			""
		), t[2] = v) : v = t[2];
		var S = v, R;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (R = y != null ? s._(
			/*BTDS*/
			"",
			[s._param("emoji", c.jsx(r("WAWebEmoji.react"), {
				emoji: y,
				xstyle: m.raisedHandEmoji
			}))]
		) : null, t[3] = R) : R = t[3];
		var L = R, E = g ? b : S, k;
		t[4] !== E || t[5] !== f || t[6] !== i ? (k = c.jsx(r("WDSButton.react"), {
			testid: "voip-raise-hand-toggle-button",
			"aria-label": E,
			"aria-pressed": !1,
			disabled: f,
			onPress: i,
			Icon: _,
			size: "medium",
			variant: "borderless",
			xstyle: p.button
		}), t[4] = E, t[5] = f, t[6] = i, t[7] = k) : k = t[7];
		var I = k, T;
		t[8] !== E || t[9] !== I || t[10] !== f || t[11] !== i ? (T = L != null ? c.jsx(r("WDSButton.react"), {
			type: "media",
			testid: "voip-raise-hand-toggle-button",
			"aria-label": E,
			"aria-pressed": !0,
			disabled: f,
			onPress: i,
			label: L,
			size: "medium",
			variant: "borderless",
			xstyle: [
				p.button,
				m.raiseHandActiveButton,
				m.raiseHandActiveBackground
			]
		}) : I, t[8] = E, t[9] = I, t[10] = f, t[11] = i, t[12] = T) : T = t[12];
		var D = T, x = g ? D : I, $;
		return t[13] !== E || t[14] !== x || t[15] !== l || t[16] !== u ? ($ = c.jsx(r("WDSTooltip.react"), {
			label: E,
			ownerAnchorRef: l,
			ownerDocument: u,
			children: x
		}), t[13] = E, t[14] = x, t[15] = l, t[16] = u, t[17] = $) : $ = t[17], $;
	}
	l.WAWebVoipRaiseHandButton = f;
}), 226);
