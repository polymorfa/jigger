__d("WAWebBizAdCertificationDialog.react", [
	"fbt",
	"CometRelay",
	"WAWebBizAdCertificationContent.react",
	"WAWebBizAdLogger",
	"WAWebConfirmPopup.react",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebXIcon.react",
	"WDSButton.react",
	"react",
	"react-compiler-runtime",
	"useWAWebBizAdCertifyMutation"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useRef, p = c.useState, _ = {
		footer: {
			borderTopColor: "xx42vgk",
			borderTopStyle: "x13fuv20",
			borderTopWidth: "x178xt8z",
			columnGap: "xs2akgl",
			paddingTop: "x1p57kb1",
			$$css: !0
		},
		header: {
			columnGap: "xs2akgl",
			$$css: !0
		},
		root: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			maxHeight: "x1izscxj",
			paddingTop: "xl7twdi",
			paddingInlineEnd: "xyo0t3i",
			paddingBottom: "xvg22vi",
			paddingInlineStart: "xb0esv5",
			rowGap: "x1f0uite",
			width: "xht4xr3",
			$$css: !0
		}
	};
	function f(e) {
		var t = o("react-compiler-runtime").c(21), n = e.adAccountID, a = e.loggerContext, i = e.onAccept, l = e.onClose, c = p(!1), f = c[0], g = c[1], h = m(!1), y = r("useWAWebBizAdCertifyMutation")(), C, b;
		t[0] !== n || t[1] !== a ? (C = function() {
			a != null && !h.current && (h.current = !0, r("WAWebBizAdLogger").log({
				adAccountID: n,
				event: "non_discrimination_modal_impression",
				loggerContext: a
			}));
		}, b = [n, a], t[0] = n, t[1] = a, t[2] = C, t[3] = b) : (C = t[2], b = t[3]), d(C, b);
		var v;
		t[4] !== l ? (v = function() {
			o("WAWebModalManager").ModalManager.close(), l();
		}, t[4] = l, t[5] = v) : v = t[5];
		var S = v, R;
		t[6] !== n || t[7] !== y || t[8] !== a || t[9] !== i ? (R = function() {
			a != null && r("WAWebBizAdLogger").log({
				adAccountID: n,
				event: "consent_non_discrimination",
				loggerContext: a
			}), g(!0), y(function() {
				g(!1), o("WAWebModalManager").ModalManager.close(), i();
			}, function(e) {
				g(!1);
			});
		}, t[6] = n, t[7] = y, t[8] = a, t[9] = i, t[10] = R) : R = t[10];
		var L = R, E;
		t[11] !== S ? (E = u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: _.header,
			children: u.jsx(r("WDSButton.react"), {
				Icon: o("WAWebXIcon.react").XIcon,
				onPress: S,
				size: "medium",
				variant: "borderless"
			})
		}), t[11] = S, t[12] = E) : E = t[12];
		var k;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (k = u.jsx("div", {
			className: "x1iyjqo2 xs83m0k x2lwn1j x1odjw0f",
			children: u.jsx(r("WAWebBizAdCertificationContent.react"), {})
		}), t[13] = k) : k = t[13];
		var I;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (I = s._(
			/*BTDS*/
			""
		), t[14] = I) : I = t[14];
		var T;
		t[15] !== L || t[16] !== f ? (T = u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "end",
			xstyle: _.footer,
			children: u.jsx(r("WDSButton.react"), {
				label: I,
				loading: f,
				onPress: L,
				size: "medium",
				variant: "filled"
			})
		}), t[15] = L, t[16] = f, t[17] = T) : T = t[17];
		var D;
		return t[18] !== E || t[19] !== T ? (D = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: _.root,
			children: [
				E,
				k,
				T
			]
		}), t[18] = E, t[19] = T, t[20] = D) : D = t[20], D;
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(8), n = e.adAccountID, r = e.environment, a = e.loggerContext, i = e.onAccept, l = e.onClose, s;
		t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== l ? (s = u.jsx(f, {
			adAccountID: n,
			loggerContext: a,
			onAccept: i,
			onClose: l
		}), t[0] = n, t[1] = a, t[2] = i, t[3] = l, t[4] = s) : s = t[4];
		var c;
		return t[5] !== r || t[6] !== s ? (c = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			type: o("WAWebModal.react").ModalTheme.Auto,
			children: u.jsx(o("CometRelay").RelayEnvironmentProvider, {
				environment: r,
				children: s
			})
		}), t[5] = r, t[6] = s, t[7] = c) : c = t[7], c;
	}
	l.default = g;
}), 226);
