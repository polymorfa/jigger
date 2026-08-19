__d("WAWebPrivacyModeBlurPresetDrawer.react", [
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebPrivacyModeBlurConfig",
	"WAWebPrivacyModeContext",
	"WAWebPrivacyModeSettingsFBT",
	"WAWebPrivacyModeUtils",
	"WAWebPrivacyVisibilityOption.react",
	"WAWebUserPrefsPrivacyMode",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useState, c = { paddingInline30: {
		paddingInlineStart: "x162tt16",
		paddingInlineEnd: "x5zjp28",
		paddingLeft: null,
		paddingRight: null,
		$$css: !0
	} }, d = [
		o("WAWebPrivacyModeBlurConfig").BlurPreset.Off,
		o("WAWebPrivacyModeBlurConfig").BlurPreset.Light,
		o("WAWebPrivacyModeBlurConfig").BlurPreset.Medium,
		o("WAWebPrivacyModeBlurConfig").BlurPreset.Strong
	];
	function m(e) {
		var t = o("react-compiler-runtime").c(23), n = e.category, a = e.onBack, i = o("WAWebPrivacyModeContext").usePrivacyMode(), l = i.updateBlurPreset, m;
		t[0] !== n ? (m = function() {
			return o("WAWebUserPrefsPrivacyMode").getBlurPreset(n);
		}, t[0] = n, t[1] = m) : m = t[1];
		var _ = u(m), f = _[0], g = _[1], h;
		t[2] !== n || t[3] !== l ? (h = function(t) {
			l(n, t), g(t);
		}, t[2] = n, t[3] = l, t[4] = h) : h = t[4];
		var y = h, C;
		t[5] !== n ? (C = p(n), t[5] = n, t[6] = C) : C = t[6];
		var b = C, v;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (v = {
			surface: "unknown",
			viewName: "privacy-blur-preset"
		}, t[7] = v) : v = t[7];
		var S;
		t[8] !== a || t[9] !== b ? (S = s.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			testid: "drawer-title-privacy-blur-preset",
			title: b,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onBack: a,
			focusBackOrCancel: !0
		}), t[8] = a, t[9] = b, t[10] = S) : S = t[10];
		var R;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (R = [c.paddingInline30, o("WDSPaddings.stylex").wdsPaddings.paddingVer20], t[11] = R) : R = t[11];
		var L;
		t[12] !== b ? (L = b.toString(), t[12] = b, t[13] = L) : L = t[13];
		var E;
		t[14] !== f || t[15] !== y ? (E = d.map(function(e) {
			return s.jsx(r("WAWebPrivacyVisibilityOption.react"), {
				text: o("WAWebPrivacyModeUtils").getPresetLabel(e),
				selected: f === e,
				testid: "privacy-blur-preset-" + e,
				onClick: function() {
					return y(e);
				}
			}, e);
		}), t[14] = f, t[15] = y, t[16] = E) : E = t[16];
		var k;
		t[17] !== L || t[18] !== E ? (k = s.jsx(r("WAWebDrawerBody.react"), { children: s.jsx(r("WAWebDrawerSection.react"), {
			animation: !1,
			xstyle: R,
			children: s.jsx("div", {
				role: "radiogroup",
				"aria-label": L,
				children: E
			})
		}) }), t[17] = L, t[18] = E, t[19] = k) : k = t[19];
		var I;
		return t[20] !== S || t[21] !== k ? (I = s.jsxs(r("WAWebDrawer.react"), {
			testid: "privacy-blur-preset-drawer",
			tsNavigationData: v,
			children: [S, k]
		}), t[20] = S, t[21] = k, t[22] = I) : I = t[22], I;
	}
	function p(e) {
		return e === o("WAWebPrivacyModeBlurConfig").BlurCategory.General ? o("WAWebPrivacyModeSettingsFBT").privacyModeGeneralLabel() : o("WAWebPrivacyModeSettingsFBT").privacyModeMediaLabel();
	}
	l.default = m;
}), 98);
