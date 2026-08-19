__d("WAWebWindowsArchivedChatsNavBarItem.react", [
	"fbt",
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebArchivedFlowLoadable",
	"WAWebDrawerManager",
	"WAWebKeyboardTabUtils",
	"WAWebNavBarLogEvents",
	"WAWebNavBarTypes",
	"WAWebWamEnumWebcNavbarItemLabel",
	"WDSIconIcArchive.react",
	"WDSIconIcArchiveFilled.react",
	"WDSMenuBarItem.react",
	"react",
	"react-compiler-runtime",
	"useWAWebArchivedChatsActivityIndicator"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(11), n = e.activeNavBarItem, a = e.updateActiveNavBarItem, i = o("useWAWebArchivedChatsActivityIndicator").useArchivedChatsActivityIndicator(), l = i.unreadCount, c = n === o("WAWebNavBarTypes").NavBarItems.Archived, d;
		t[0] !== c || t[1] !== a ? (d = async function() {
			if (!c) {
				var e = await o("WAWebDrawerManager").DrawerManager.openDrawerLeftAsync(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? { descriptorType: "archived" } : u.jsx(o("WAWebArchivedFlowLoadable").ArchivedFlowLoadable, { onEnd: o("WAWebDrawerManager").closeDrawerLeft }), {
					focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
					transition: "pop-drawer-fast",
					focusOnUnMount: !0
				});
				e && (a(o("WAWebNavBarTypes").NavBarItems.Archived), o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.ARCHIVED));
			}
		}, t[0] = c, t[1] = a, t[2] = d) : d = t[2];
		var m = d, p;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
			/*BTDS*/
			""
		), t[3] = p) : p = t[3];
		var _ = p, f = r(c ? "WDSIconIcArchiveFilled.react" : "WDSIconIcArchive.react"), g;
		t[4] !== l ? (g = l > 0 ? { count: l } : void 0, t[4] = l, t[5] = g) : g = t[5];
		var h;
		return t[6] !== m || t[7] !== f || t[8] !== c || t[9] !== g ? (h = u.jsx(r("WDSMenuBarItem.react"), {
			icon: f,
			title: _,
			testid: "navbar-item-archived",
			isActive: c,
			onClick: m,
			activityIndicator: g,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		}), t[6] = m, t[7] = f, t[8] = c, t[9] = g, t[10] = h) : h = t[10], h;
	}
	l.default = c;
}), 226);
