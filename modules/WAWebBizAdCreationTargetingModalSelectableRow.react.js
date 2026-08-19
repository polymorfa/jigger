__d("WAWebBizAdCreationTargetingModalSelectableRow.react", [
	"WAWebFlex.react",
	"WDSButton.react",
	"WDSIconIcEdit.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(1), n;
		return t[0] === Symbol.for("react.memo_cache_sentinel") ? (n = s.jsx(r("WDSIconIcEdit.react"), {
			colorName: "contentDeemphasized",
			height: 20,
			width: 20
		}), t[0] = n) : n = t[0], n;
	}
	function c(e) {
		var t = o("react-compiler-runtime").c(16), n = e.ariaLabel, a = e.onEditClick, i = e.subtitle, l = e.testid, c = e.title, d = e.xstyle, m;
		t[0] !== c ? (m = s.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1Emphasized",
			children: c
		}), t[0] = c, t[1] = m) : m = t[1];
		var p;
		t[2] !== i ? (p = s.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body2",
			children: i
		}), t[2] = i, t[3] = p) : p = t[3];
		var _;
		t[4] !== m || t[5] !== p ? (_ = s.jsxs(o("WAWebFlex.react").FlexColumn, { children: [m, p] }), t[4] = m, t[5] = p, t[6] = _) : _ = t[6];
		var f = n ? String(n) : void 0, g = l != null ? l + "_edit_button" : void 0, h;
		t[7] !== a || t[8] !== f || t[9] !== g ? (h = s.jsx(r("WDSButton.react"), {
			Icon: u,
			"aria-label": f,
			onPress: a,
			size: "medium",
			testid: g,
			variant: "borderless"
		}), t[7] = a, t[8] = f, t[9] = g, t[10] = h) : h = t[10];
		var y;
		return t[11] !== _ || t[12] !== h || t[13] !== l || t[14] !== d ? (y = s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "all",
			testid: l,
			xstyle: d,
			children: [_, h]
		}), t[11] = _, t[12] = h, t[13] = l, t[14] = d, t[15] = y) : y = t[15], y;
	}
	l.default = c;
}), 98);
