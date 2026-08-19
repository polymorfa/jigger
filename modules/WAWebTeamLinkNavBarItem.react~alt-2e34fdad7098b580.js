__d("WAWebTeamLinkNavBarItem.react", [
	"fbt",
	"WAWebBizCoexGatingUtils",
	"WAWebDrawerManager",
	"WAWebKeyboardTabUtils",
	"WAWebNavBarTypes",
	"WAWebTeamLinkDrawerLoadable",
	"WAWebUseBusinessProfile.react",
	"WAWebUserPrefsMeUser",
	"WDSIconIcGroup.react",
	"WDSMenuBarItem.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.activeNavBarItem, n = e.updateActiveNavBarItem, a = o("WAWebUseBusinessProfile.react").useBusinessProfile(o("WAWebUserPrefsMeUser").getMaybeMePnUser(), ["isAuthorizedAgent"]), i = t === o("WAWebNavBarTypes").NavBarItems.TeamLink, l = function() {
			i || (n(o("WAWebNavBarTypes").NavBarItems.TeamLink), o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(o("WAWebTeamLinkDrawerLoadable").WAWebTeamLinkDrawerLoadable, { onBack: o("WAWebDrawerManager").closeDrawerLeft }), {
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
				transition: "pop-drawer-fast",
				focusOnUnMount: !0
			}));
		}, c = r("WDSIconIcGroup.react"), d = s._(
			/*BTDS*/
			""
		);
		return o("WAWebBizCoexGatingUtils").authAgentFeatureControlEnabled() && (a == null ? void 0 : a.isAuthorizedAgent) === !0 ? null : u.jsx(r("WDSMenuBarItem.react"), {
			icon: c,
			title: d,
			testid: "navbar-item-teamlink",
			isActive: i,
			onClick: l,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
