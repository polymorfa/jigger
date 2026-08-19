__d("WAWebBizAdCreationErrorModal.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WDSButton.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = {
		container: {
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			rowGap: "x1j3ira4",
			$$css: !0
		},
		headerText: {
			alignSelf: "xkh2ocl",
			textAlign: "x2b8uid",
			$$css: !0
		}
	};
	function d(e) {
		var t = o("react-compiler-runtime").c(7), n = e.errorMessage, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = s._(
			/*BTDS*/
			""
		), t[0] = a) : a = t[0];
		var i = a, l;
		t[1] !== n ? (l = n != null ? n : s._(
			/*BTDS*/
			""
		), t[1] = n, t[2] = l) : l = t[2];
		var d = l, p;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (p = u.jsx(m, {}), t[3] = p) : p = t[3];
		var _;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (_ = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Headline1",
			xstyle: c.headerText,
			children: i
		}), t[4] = _) : _ = t[4];
		var f;
		return t[5] !== d ? (f = u.jsx(o("WAWebModal.react").Modal, {
			actions: p,
			type: o("WAWebModal.react").ModalTheme.BizToolsAdCreationSuccess,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: c.container,
				children: [_, u.jsx(r("WDSText.react"), {
					colorName: "contentDeemphasized",
					textAlign: "center",
					type: "Body2",
					children: d
				})]
			})
		}), t[5] = d, t[6] = f) : f = t[6], f;
	}
	function m() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = u.jsx(r("WDSButton.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			onPress: o("WAWebModalManager").closeModalManager,
			size: "medium",
			testid: "error-modal-try-again-button",
			variant: "filled"
		}), e[0] = t) : t = e[0], t;
	}
	l.default = d;
}), 226);
