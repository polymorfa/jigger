__d("WAWebExternalBetaDrawerButton.react", [
	"fbt",
	"WAWebHelpItemIcon.react",
	"WAWebMenuItems.react",
	"WAWebPrimaryFeatures",
	"WAWebText.react",
	"WDSSwitch.react",
	"cr:23046",
	"react",
	"react-compiler-runtime",
	"useWAWebABPropConfigValue",
	"useWAWebExternalBetaOptIn"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c() {
		var e = o("react-compiler-runtime").c(12), t = o("useWAWebExternalBetaOptIn").useExternalBetaOptIn(), a = t[0], i = t[1], l = o("useWAWebABPropConfigValue").useABPropConfigValue("external_beta_can_join");
		if (!l || !o("WAWebPrimaryFeatures").primaryFeatureEnabled("external_web_beta_opt_in") || n("cr:23046") != null && n("cr:23046").isWindowsHybridEnabled()) return null;
		var c;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (c = s._(
			/*BTDS*/
			""
		), e[0] = c) : c = e[0];
		var d;
		e[1] !== i ? (d = function(t, n) {
			n.stopPropagation(), n.preventDefault(), i();
		}, e[1] = i, e[2] = d) : d = e[2];
		var m;
		e[3] !== a || e[4] !== d ? (m = u.jsx(r("WDSSwitch.react"), {
			"aria-label": c,
			value: a,
			onChange: d
		}), e[3] = a, e[4] = d, e[5] = m) : m = e[5];
		var p = m, _;
		e[6] === Symbol.for("react.memo_cache_sentinel") ? (_ = u.jsx(o("WAWebHelpItemIcon.react").HelpItemIcon, { iconType: o("WAWebHelpItemIcon.react").HelpItemIconType.Beta }), e[6] = _) : _ = e[6];
		var f;
		e[7] === Symbol.for("react.memo_cache_sentinel") ? (f = u.jsx(o("WAWebText.react").WAWebTextMuted, {
			textWrap: "wrap",
			children: s._(
				/*BTDS*/
				""
			)
		}), e[7] = f) : f = e[7];
		var g;
		e[8] === Symbol.for("react.memo_cache_sentinel") ? (g = s._(
			/*BTDS*/
			""
		), e[8] = g) : g = e[8];
		var h;
		return e[9] !== p || e[10] !== i ? (h = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: "help-join-beta",
			testid: "li-join-beta",
			onSelect: i,
			detailLeft: _,
			secondary: f,
			detailRight: p,
			primary: g
		}), e[9] = p, e[10] = i, e[11] = h) : h = e[11], h;
	}
	l.default = c;
}), 226);
