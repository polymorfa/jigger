__d("WAWebBizBroadcastsSmartCSVImportNoPhoneNumbersDetectedScreen.react", [
	"fbt",
	"WAWebBizBroadcastsTemplateParsingUtils",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSText.react",
	"WDSTextualLink.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = {
		actions: {
			columnGap: "xs2akgl",
			justifyContent: "x13a6bvl",
			marginTop: "x9u28bd",
			width: "xh8yej3",
			$$css: !0
		},
		body: {
			rowGap: "x1qvou4u",
			$$css: !0
		},
		bullet: {
			flexShrink: "x2lah0s",
			$$css: !0
		},
		header: {
			alignItems: "x6s0dn4",
			justifyContent: "x1qughib",
			$$css: !0
		},
		root: {
			boxSizing: "x9f619",
			maxWidth: "x1recik0",
			paddingBottom: "xvg22vi",
			paddingTop: "xl7twdi",
			paddingInlineEnd: "xyo0t3i",
			paddingInlineStart: "xb0esv5",
			rowGap: "x1f0uite",
			width: "xs8rnei",
			$$css: !0
		},
		title: {
			minWidth: "xeuugli",
			$$css: !0
		}
	};
	function d(e) {
		var t = o("react-compiler-runtime").c(25), n = e.onSelectColumns, a = e.onTryAnotherFile, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = u.jsx(r("WDSText.react"), {
			type: "Body1Emphasized",
			colorName: "contentDefault",
			xstyle: c.title,
			children: s._(
				/*BTDS*/
				""
			)
		}), t[0] = i) : i = t[0];
		var l;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (l = s._(
			/*BTDS*/
			""
		), t[1] = l) : l = t[1];
		var d;
		t[2] !== a ? (d = u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: c.header,
			children: [i, u.jsx(r("WDSButton.react"), {
				Icon: r("WDSIconIcClose.react"),
				"aria-label": l,
				onPress: a,
				variant: "borderless",
				testid: "biz-broadcasts-no-phone-numbers-close-button"
			})]
		}), t[2] = a, t[3] = d) : d = t[3];
		var p, _;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (p = u.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: "contentDeemphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}), _ = { className: "x78zum5 xdt5ytf xat24cr xdj266r x12w63v0 x129bwdz" }, t[4] = p, t[5] = _) : (p = t[4], _ = t[5]);
		var f;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (f = u.jsx(m, { children: s._(
			/*BTDS*/
			""
		) }), t[6] = f) : f = t[6];
		var g;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (g = u.jsx(m, { children: s._(
			/*BTDS*/
			""
		) }), t[7] = g) : g = t[7];
		var h;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx(m, { children: s._(
			/*BTDS*/
			""
		) }), t[8] = h) : h = t[8];
		var y;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (y = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: c.body,
			children: [p, u.jsxs("ul", babelHelpers.extends({}, _, { children: [
				f,
				g,
				h,
				u.jsx(m, { children: s._(
					/*BTDS*/
					"",
					[s._implicitParam("=m2", u.jsx(r("WDSTextualLink.react"), babelHelpers.extends({}, o("WAWebBizBroadcastsTemplateParsingUtils").getTemplateLinkProps(), { children: s._(
						/*BTDS*/
						""
					) })))]
				) })
			] }))]
		}), t[9] = y) : y = t[9];
		var C;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (C = s._(
			/*BTDS*/
			""
		), t[10] = C) : C = t[10];
		var b;
		t[11] !== a ? (b = u.jsx(r("WDSButton.react"), {
			label: C,
			onPress: a,
			variant: "borderless",
			testid: "biz-broadcasts-no-phone-numbers-try-another-file-button"
		}), t[11] = a, t[12] = b) : b = t[12];
		var v;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (v = s._(
			/*BTDS*/
			""
		), t[13] = v) : v = t[13];
		var S;
		t[14] !== n ? (S = u.jsx(r("WDSButton.react"), {
			label: v,
			onPress: n,
			variant: "filled",
			testid: "biz-broadcasts-no-phone-numbers-select-columns-button"
		}), t[14] = n, t[15] = S) : S = t[15];
		var R;
		t[16] !== b || t[17] !== S ? (R = u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: c.actions,
			children: [b, S]
		}), t[16] = b, t[17] = S, t[18] = R) : R = t[18];
		var L;
		t[19] !== R || t[20] !== d ? (L = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: c.root,
			children: [
				d,
				y,
				R
			]
		}), t[19] = R, t[20] = d, t[21] = L) : L = t[21];
		var E;
		return t[22] !== a || t[23] !== L ? (E = u.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.Flex,
			onOverlayClick: a,
			testid: "biz-broadcasts-no-phone-numbers-detected-modal",
			children: L
		}), t[22] = a, t[23] = L, t[24] = E) : E = t[24], E;
	}
	function m(e) {
		var t = o("react-compiler-runtime").c(4), n = e.children, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = { className: "x1trrmfo x78zum5 x3ct3a4" }, t[0] = a) : a = t[0];
		var i;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (i = u.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: "contentDeemphasized",
			xstyle: c.bullet,
			children: s._(
				/*BTDS*/
				""
			)
		}), t[1] = i) : i = t[1];
		var l;
		return t[2] !== n ? (l = u.jsxs("li", babelHelpers.extends({}, a, { children: [i, u.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: "contentDeemphasized",
			children: n
		})] })), t[2] = n, t[3] = l) : l = t[3], l;
	}
	l.default = d;
}), 226);
