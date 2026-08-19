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
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(9), n = e.activeNavBarItem, a = e.updateActiveNavBarItem, i, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = o("WAWebUserPrefsMeUser").getMaybeMePnUser(), l = ["isAuthorizedAgent"], t[0] = i, t[1] = l) : (i = t[0], l = t[1]);
		var c = o("WAWebUseBusinessProfile.react").useBusinessProfile(i, l), d = n === o("WAWebNavBarTypes").NavBarItems.TeamLink, m;
		t[2] !== d || t[3] !== a ? (m = function() {
			d || (a(o("WAWebNavBarTypes").NavBarItems.TeamLink), o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(o("WAWebTeamLinkDrawerLoadable").WAWebTeamLinkDrawerLoadable, { onBack: o("WAWebDrawerManager").closeDrawerLeft }), {
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
				transition: "pop-drawer-fast",
				focusOnUnMount: !0
			}));
		}, t[2] = d, t[3] = a, t[4] = m) : m = t[4];
		var p = m, _;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (_ = s._(
			/*BTDS*/
			""
		), t[5] = _) : _ = t[5];
		var f = _;
		if (o("WAWebBizCoexGatingUtils").authAgentFeatureControlEnabled() && (c == null ? void 0 : c.isAuthorizedAgent) === !0) return null;
		var g;
		return t[6] !== p || t[7] !== d ? (g = u.jsx(r("WDSMenuBarItem.react"), {
			icon: r("WDSIconIcGroup.react"),
			title: f,
			testid: "navbar-item-teamlink",
			isActive: d,
			onClick: p,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		}), t[6] = p, t[7] = d, t[8] = g) : g = t[8], g;
	}
	l.default = c;
}), 226);
