__d("WAWebBrigadingButterBar.react", [
	"fbt",
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebDrawerManager",
	"WAWebSettingsConst",
	"WAWebSettingsFlowLoadable",
	"WAWebTabOrder",
	"WAWebUserPrefsGeneral",
	"WDSBanner.react",
	"WDSIconIcCheckCircle.react",
	"react",
	"useWAWebFocusOnMount"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.onDismiss, n = e.state, a = r("useWAWebFocusOnMount")(), i = o("WAWebUserPrefsGeneral").getUserPrivacySettings(), l = i == null ? void 0 : i.messages, c = n === "ENFORCED" && l === "contacts", d = n === "DETECTED" && l === "all", m = n === "NOT_ENFORCED";
		if (!(c || d || m)) return null;
		var p = s._(
			/*BTDS*/
			""
		), _ = function() {
			o("WAWebDrawerManager").DrawerManager.openDrawerLeft(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
				descriptorType: "settings",
				initialStep: o("WAWebSettingsConst").SettingsSteps.PrivacySettings
			} : u.jsx(o("WAWebSettingsFlowLoadable").SettingsFlowLoadable, {
				onEnd: o("WAWebDrawerManager").closeDrawerLeft,
				initialStep: o("WAWebSettingsConst").SettingsSteps.PrivacySettings
			}));
		}, f, g, h, y, C = "warning";
		switch (n) {
			case "DETECTED": {
				f = p, g = s._(
					/*BTDS*/
					""
				), h = s._(
					/*BTDS*/
					""
				), y = _;
				break;
			}
			case "ENFORCED": {
				f = p, g = s._(
					/*BTDS*/
					""
				), h = s._(
					/*BTDS*/
					""
				), y = _;
				break;
			}
			case "NOT_ENFORCED": {
				f = s._(
					/*BTDS*/
					""
				), g = s._(
					/*BTDS*/
					""
				), C = "default";
				break;
			}
			default: break;
		}
		return g == null ? null : u.jsx("div", {
			ref: a,
			role: "alert",
			tabIndex: -1,
			className: "x1380le5 xefnzgg x1uvdrpn x14mko6t",
			children: u.jsx(r("WDSBanner.react"), {
				type: C,
				title: f,
				body: g,
				actionText: h,
				onAction: y,
				onDismiss: t,
				icon: C === "default" ? r("WDSIconIcCheckCircle.react") : void 0,
				tabOrder: o("WAWebTabOrder").TAB_ORDER.BUTTER_BAR
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
