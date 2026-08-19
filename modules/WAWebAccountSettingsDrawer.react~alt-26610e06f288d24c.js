__d("WAWebAccountSettingsDrawer.react", [
	"fbt",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebMenu.react",
	"WAWebMenuItems.react",
	"WAWebSettingsFBT",
	"WAWebSettingsHierarchy",
	"WAWebSettingsStepIcon.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t, n = e.onClickRequestAccountInfo, a = e.onClickSecurity, i = e.onClose, l = e.ref;
		return u.jsxs(r("WAWebDrawer.react"), {
			ref: l,
			theme: "settings",
			testid: "account-settings-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "account-settings"
			},
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				testid: "drawer-title-account",
				title: o("WAWebSettingsFBT").accountTitle(),
				onBack: i,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				focusBackOrCancel: !0
			}), u.jsx(r("WAWebDrawerBody.react"), { children: u.jsxs(o("WAWebMenu.react").WAWebMenu, {
				size: "medium",
				colorScheme: "default",
				allowTabNavigation: !0,
				children: [
					u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
						optionId: (t = o("WAWebSettingsHierarchy")).SecuritySettingsItem.id,
						testid: t.SecuritySettingsItem.testid,
						detailLeft: u.jsx(r("WAWebSettingsStepIcon.react"), { setting: t.SecuritySettingsItem.step }),
						onSelect: a,
						primary: s._(
							/*BTDS*/
							""
						),
						searchCriteria: t.SecuritySettingsItem.searchCriteria
					}),
					u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
						optionId: t.RequestAccountInfoSettingsItem.id,
						testid: t.RequestAccountInfoSettingsItem.testid,
						detailLeft: u.jsx(r("WAWebSettingsStepIcon.react"), { setting: t.RequestAccountInfoSettingsItem.step }),
						onSelect: n,
						primary: t.RequestAccountInfoSettingsItem.title(),
						searchCriteria: t.RequestAccountInfoSettingsItem.searchCriteria
					}),
					u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
						optionId: t.DeleteAccountSettingsItem.id,
						testid: t.DeleteAccountSettingsItem.testid,
						detailLeft: u.jsx(r("WAWebSettingsStepIcon.react"), { setting: t.DeleteAccountSettingsItem.step }),
						onSelect: d,
						primary: t.DeleteAccountSettingsItem.title(),
						searchCriteria: t.DeleteAccountSettingsItem.searchCriteria
					})
				]
			}) })]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d() {
		o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getDeleteAccountUrl());
	}
	l.default = c;
}), 226);
