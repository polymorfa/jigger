__d("WAWebProfileDrawerHeader.react", [
	"fbt",
	"WAWebBizProfileGatingUtils",
	"WAWebBusinessProfileLabels",
	"WAWebCloseRefreshedIcon.react",
	"WAWebDrawerManager",
	"WDSButton.react",
	"WDSIconIcVisibility.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = {
		title: {
			flexGrow: "x1iyjqo2",
			$$css: !0
		},
		buttonPreview: {
			width: "x2pejg6",
			$$css: !0
		},
		buttonSave: {
			width: "x2pejg6",
			$$css: !0
		}
	};
	function d(e) {
		var t = e.hasChanges, n = t === void 0 ? !1 : t, a = e.isSaving, i = a === void 0 ? !1 : a, l = e.onClose, d = e.onSave, m = e.saveDisabled, p = m === void 0 ? !1 : m, _ = e.title, f = function() {
			l ? l() : o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
		}, g = function() {
			d && d();
		}, h = _ != null ? _ : o("WAWebBusinessProfileLabels").getProfileTitleLabel(), y = o("WAWebBusinessProfileLabels").getPreviewButtonLabel(), C = o("WAWebBusinessProfileLabels").getSaveButtonLabel(), b = o("WAWebBizProfileGatingUtils").businessProfilePreviewEnabled();
		return u.jsxs("header", {
			className: "x6s0dn4 xw6alqk x1o4lnc x1t7ytsu xpilrb4 x9f619 x78zum5 x1okw0bk x8a3fw1 x1aj3ljl x1peatla x1iw51ew xde1mab xh8yej3",
			"data-testid": "profile-drawer-header",
			children: [
				u.jsx(r("WDSButton.react"), {
					size: "medium",
					variant: "borderless",
					Icon: o("WAWebCloseRefreshedIcon.react").CloseRefreshedIcon,
					onPress: f,
					"aria-label": s._(
						/*BTDS*/
						""
					)
				}),
				u.jsx(r("WDSText.react"), {
					type: "Body1",
					colorName: "contentDefault",
					xstyle: c.title,
					children: h
				}),
				b && u.jsx(r("WDSButton.react"), {
					Icon: r("WDSIconIcVisibility.react"),
					label: y,
					variant: "outline",
					xstyle: c.buttonPreview
				}),
				u.jsx(r("WDSButton.react"), {
					label: C,
					xstyle: c.buttonSave,
					onPress: g,
					disabled: !n || i || p
				})
			]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
