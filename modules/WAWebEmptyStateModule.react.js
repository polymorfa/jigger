__d("WAWebEmptyStateModule.react", [
	"WAWebABProps",
	"WAWebFilePicker.react",
	"WAWebQuickActionLogging",
	"WAWebTabOrder",
	"WDSActionTile.react",
	"WDSButton.react",
	"WDSFlex.stylex",
	"WDSText.react",
	"WDSTextLayout.react",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useVisibility"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s.useRef, d = {
		wrapper: {
			backgroundColor: "xs1q97v",
			width: "xh8yej3",
			height: "x5yr21d",
			textAlign: "x2b8uid",
			pointerEvents: "x67bb7w",
			$$css: !0
		},
		titleCardWrapper: {
			maxWidth: "x1rjt51p",
			backgroundColor: "x1280gxy",
			borderStartStartRadius: "x1g83kfv",
			borderStartEndRadius: "x3qq2k7",
			borderEndEndRadius: "x2x8art",
			borderEndStartRadius: "x1qor8vf",
			paddingTop: "xl7twdi",
			paddingInlineEnd: "xyo0t3i",
			paddingBottom: "xvg22vi",
			paddingInlineStart: "xb0esv5",
			marginTop: "x98l61r",
			marginInlineEnd: "xviac27",
			marginBottom: "x1ua1l7f",
			marginInlineStart: "xlese2p",
			boxSizing: "x9f619",
			height: "xg7h5cd",
			$$css: !0
		},
		titleCardWrapperLegacy: {
			rowGap: "x1j3ira4",
			columnGap: "xrdqr27",
			$$css: !0
		}
	};
	function m(t) {
		var n = o("react-compiler-runtime").c(27), a = t.titleCard, i;
		if (a.Illustration) {
			var l;
			n[0] !== a.Illustration ? (l = u.jsx(a.Illustration, {
				height: 88,
				width: 132
			}), n[0] = a.Illustration, n[1] = l) : l = n[1], i = l;
		} else a.animation && (i = a.animation);
		if (!o("WAWebABProps").getABPropConfigValue("wds_web_text_layout")) {
			var s;
			n[2] === Symbol.for("react.memo_cache_sentinel") ? (s = (e || (e = r("stylex"))).props(d.titleCardWrapper, d.titleCardWrapperLegacy, o("WDSFlex.stylex").wdsFlex.flexColumn, o("WDSFlex.stylex").wdsFlex.alignCenter), n[2] = s) : s = n[2];
			var c = i, m;
			n[3] === Symbol.for("react.memo_cache_sentinel") ? (m = (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexColumn, o("WDSFlex.stylex").wdsFlex.gapSingle), n[3] = m) : m = n[3];
			var p;
			n[4] !== a.title ? (p = u.jsx(r("WDSText.react"), {
				colorName: "contentDefault",
				type: "Headline2",
				robotoPropValue: 3,
				children: a.title
			}), n[4] = a.title, n[5] = p) : p = n[5];
			var _;
			n[6] !== a.description ? (_ = u.jsx(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				type: "Body2",
				children: a.description
			}), n[6] = a.description, n[7] = _) : _ = n[7];
			var f;
			n[8] !== p || n[9] !== _ ? (f = u.jsxs("div", babelHelpers.extends({}, m, { children: [p, _] })), n[8] = p, n[9] = _, n[10] = f) : f = n[10];
			var g;
			n[11] !== a.actionButtonClickHandler || n[12] !== a.actionButtonLabel ? (g = u.jsx(r("WDSButton.react"), {
				tabOrder: o("WAWebTabOrder").TAB_ORDER.EMPTY_STATE,
				type: "default",
				variant: "tonal",
				size: "small",
				label: a.actionButtonLabel,
				onPress: a.actionButtonClickHandler
			}), n[11] = a.actionButtonClickHandler, n[12] = a.actionButtonLabel, n[13] = g) : g = n[13];
			var h;
			return n[14] !== i || n[15] !== f || n[16] !== g ? (h = u.jsxs("div", babelHelpers.extends({}, s, { children: [
				c,
				f,
				g
			] })), n[14] = i, n[15] = f, n[16] = g, n[17] = h) : h = n[17], h;
		}
		var y;
		n[18] === Symbol.for("react.memo_cache_sentinel") ? (y = { className: "x1rjt51p x1280gxy x1g83kfv x3qq2k7 x2x8art x1qor8vf xl7twdi xyo0t3i xvg22vi xb0esv5 x98l61r xviac27 x1ua1l7f xlese2p x9f619 xg7h5cd" }, n[18] = y) : y = n[18];
		var C;
		n[19] !== a.actionButtonClickHandler || n[20] !== a.actionButtonLabel ? (C = {
			label: a.actionButtonLabel,
			onPress: a.actionButtonClickHandler,
			variant: "tonal",
			size: "small",
			tabOrder: o("WAWebTabOrder").TAB_ORDER.EMPTY_STATE
		}, n[19] = a.actionButtonClickHandler, n[20] = a.actionButtonLabel, n[21] = C) : C = n[21];
		var b;
		return n[22] !== i || n[23] !== C || n[24] !== a.description || n[25] !== a.title ? (b = u.jsx("div", babelHelpers.extends({ "data-testid": "intro_panel_v2_title_card" }, y, { children: u.jsx(r("WDSTextLayout.react"), {
			illustration: i,
			headline: a.title,
			body: a.description,
			actionsWidth: "hug",
			primaryAction: C
		}) })), n[22] = i, n[23] = C, n[24] = a.description, n[25] = a.title, n[26] = b) : b = n[26], b;
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(18), n = e.Icon, a = e.actionId, i = e.clickHandler, l = e.disabled, s = e.filePicker, d = e.numActionsVisible, m = e.slotPosition, p = e.surface, _ = e.testid, f = e.title, g = p === void 0 ? "chats" : p, h = c(), y;
		t[0] !== a || t[1] !== i || t[2] !== s || t[3] !== d || t[4] !== m || t[5] !== g ? (y = function() {
			if (a != null && m != null && d != null && o("WAWebQuickActionLogging").logQuickActionTap(g, a, m, d), s != null) {
				var e;
				(e = h.current) == null || e.open();
				return;
			}
			i == null || i();
		}, t[0] = a, t[1] = i, t[2] = s, t[3] = d, t[4] = m, t[5] = g, t[6] = y) : y = t[6];
		var C = y, b = _ != null ? _ : "intro-panel-empty-state-action-tile", v;
		t[7] !== n || t[8] !== l || t[9] !== C || t[10] !== b || t[11] !== f ? (v = u.jsx(r("WDSActionTile.react"), {
			Icon: n,
			disabled: l,
			label: f,
			onPress: C,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.EMPTY_STATE,
			testid: b
		}), t[7] = n, t[8] = l, t[9] = C, t[10] = b, t[11] = f, t[12] = v) : v = t[12];
		var S;
		t[13] !== s ? (S = s != null ? u.jsx(r("WAWebFilePicker.react"), babelHelpers.extends({ ref: h }, s)) : null, t[13] = s, t[14] = S) : S = t[14];
		var R;
		return t[15] !== v || t[16] !== S ? (R = u.jsxs("div", { children: [v, S] }), t[15] = v, t[16] = S, t[17] = R) : R = t[17], R;
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(15), n = e.surface, a = e.wdsActions, i = n === void 0 ? "chats" : n, l = a.length, s;
		t[0] !== l || t[1] !== i || t[2] !== a ? (s = { onVisible: function() {
			o("WAWebQuickActionLogging").logQuickActionSurfaceView(i, l), a.forEach(function(e, t) {
				e.actionId != null && o("WAWebQuickActionLogging").logQuickActionImpression({
					actionId: e.actionId,
					numActionsVisible: l,
					slotPosition: t,
					surface: i
				});
			});
		} }, t[0] = l, t[1] = i, t[2] = a, t[3] = s) : s = t[3];
		var c = r("useVisibility")(s), d = c[0], m;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (m = { className: "x78zum5 xl56j7k x1f0uite xs2akgl x98l61r" }, t[4] = m) : m = t[4];
		var _;
		if (t[5] !== l || t[6] !== i || t[7] !== a) {
			var f;
			t[9] !== l || t[10] !== i ? (f = function(t, n) {
				return u.jsx(p, babelHelpers.extends({}, t, {
					surface: i,
					slotPosition: n,
					numActionsVisible: l
				}), t.title.toString());
			}, t[9] = l, t[10] = i, t[11] = f) : f = t[11], _ = a.map(f), t[5] = l, t[6] = i, t[7] = a, t[8] = _;
		} else _ = t[8];
		var g;
		return t[12] !== d || t[13] !== _ ? (g = u.jsx("div", babelHelpers.extends({ ref: d }, m, {
			"data-testid": "intro-panel-empty-state-action-tile-group",
			children: _
		})), t[12] = d, t[13] = _, t[14] = g) : g = t[14], g;
	}
	function f(t) {
		var n = o("react-compiler-runtime").c(9), a = t.banner, i = t.titleCard, l = t.wdsActions, s;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (s = (e || (e = r("stylex"))).props(d.wrapper, o("WDSFlex.stylex").wdsFlex.flexCenter, o("WDSFlex.stylex").wdsFlex.flexColumn), n[0] = s) : s = n[0];
		var c;
		n[1] !== i ? (c = i && u.jsx(m, { titleCard: i }), n[1] = i, n[2] = c) : c = n[2];
		var p;
		n[3] !== l ? (p = u.jsx(_, { wdsActions: l }), n[3] = l, n[4] = p) : p = n[4];
		var f;
		return n[5] !== a || n[6] !== c || n[7] !== p ? (f = u.jsxs("section", babelHelpers.extends({ "data-testid": "intro-panel" }, s, { children: [
			a,
			c,
			p
		] })), n[5] = a, n[6] = c, n[7] = p, n[8] = f) : f = n[8], f;
	}
	l.default = f;
}), 98);
