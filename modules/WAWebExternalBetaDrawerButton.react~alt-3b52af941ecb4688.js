__d("WAWebExternalBetaDrawerButton.react", [
	"fbt",
	"WAWebHelpItemIcon.react",
	"WAWebMenuItems.react",
	"WAWebPrimaryFeatures",
	"WAWebText.react",
	"WDSSwitch.react",
	"cr:23046",
	"react",
	"useWAWebABPropConfigValue",
	"useWAWebExternalBetaOptIn"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c() {
		var e = o("useWAWebExternalBetaOptIn").useExternalBetaOptIn(), t = e[0], a = e[1], i = o("useWAWebABPropConfigValue").useABPropConfigValue("external_beta_can_join");
		if (!i || !o("WAWebPrimaryFeatures").primaryFeatureEnabled("external_web_beta_opt_in") || n("cr:23046") != null && n("cr:23046").isWindowsHybridEnabled()) return null;
		var l = u.jsx(r("WDSSwitch.react"), {
			"aria-label": s._(
				/*BTDS*/
				""
			),
			value: t,
			onChange: function(t, n) {
				n.stopPropagation(), n.preventDefault(), a();
			}
		});
		return u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: "help-join-beta",
			testid: "li-join-beta",
			onSelect: a,
			detailLeft: u.jsx(o("WAWebHelpItemIcon.react").HelpItemIcon, { iconType: o("WAWebHelpItemIcon.react").HelpItemIconType.Beta }),
			secondary: u.jsx(o("WAWebText.react").WAWebTextMuted, {
				textWrap: "wrap",
				children: s._(
					/*BTDS*/
					""
				)
			}),
			detailRight: l,
			primary: s._(
				/*BTDS*/
				""
			)
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
