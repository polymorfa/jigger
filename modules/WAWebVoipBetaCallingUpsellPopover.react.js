__d("WAWebVoipBetaCallingUpsellPopover.react", [
	"fbt",
	"WAWebFlex.react",
	"WDSButton.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = { paddingBottom14: {
		paddingBottom: "x1g2khh7",
		$$css: !0
	} }, d = {
		container: {
			minWidth: "x1h80ny7",
			$$css: !0
		},
		textContainer: {
			maxWidth: "x1jkqq1h",
			$$css: !0
		},
		buttonContainer: {
			height: "x5yr21d",
			$$css: !0
		}
	};
	function m(e) {
		var t = o("react-compiler-runtime").c(6), n = e.onClick, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = [
			d.container,
			o("WDSPaddings.stylex").wdsPaddings.paddingHor20,
			c.paddingBottom14,
			o("WDSPaddings.stylex").wdsPaddings.paddingTop12
		], t[0] = a) : a = t[0];
		var i;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (i = u.jsx(o("WAWebFlex.react").FlexItem, { children: u.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "contentDefault",
			children: s._(
				/*BTDS*/
				""
			)
		}) }), t[1] = i) : i = t[1];
		var l;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (l = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: d.textContainer,
			children: [i, u.jsx(o("WAWebFlex.react").FlexItem, {
				xstyle: o("WDSMargins.stylex").wdsMargins.marginTop2,
				children: u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					children: s._(
						/*BTDS*/
						""
					)
				})
			})]
		}), t[2] = l) : l = t[2];
		var m;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (m = s._(
			/*BTDS*/
			""
		), t[3] = m) : m = t[3];
		var p;
		return t[4] !== n ? (p = u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: a,
			align: "center",
			justify: "all",
			children: [l, u.jsx(o("WAWebFlex.react").FlexColumn, {
				xstyle: d.buttonContainer,
				align: "center",
				justify: "center",
				children: u.jsx(o("WAWebFlex.react").FlexItem, {
					xstyle: o("WDSMargins.stylex").wdsMargins.marginStart16,
					children: u.jsx(r("WDSButton.react"), {
						variant: "filled",
						size: "medium",
						label: m,
						onPress: n
					})
				})
			})]
		}), t[4] = n, t[5] = p) : p = t[5], p;
	}
	l.default = m;
}), 226);
