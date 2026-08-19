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
	"useWAWebArchivedChatsActivityIndicator"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.activeNavBarItem, n = e.updateActiveNavBarItem, a = o("useWAWebArchivedChatsActivityIndicator").useArchivedChatsActivityIndicator(), i = a.unreadCount, l = t === o("WAWebNavBarTypes").NavBarItems.Archived, c = async function() {
			if (!l) {
				var e = await o("WAWebDrawerManager").DrawerManager.openDrawerLeftAsync(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? { descriptorType: "archived" } : u.jsx(o("WAWebArchivedFlowLoadable").ArchivedFlowLoadable, { onEnd: o("WAWebDrawerManager").closeDrawerLeft }), {
					focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
					transition: "pop-drawer-fast",
					focusOnUnMount: !0
				});
				e && (n(o("WAWebNavBarTypes").NavBarItems.Archived), o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.ARCHIVED));
			}
		}, d = s._(
			/*BTDS*/
			""
		), m = r(l ? "WDSIconIcArchiveFilled.react" : "WDSIconIcArchive.react");
		return u.jsx(r("WDSMenuBarItem.react"), {
			icon: m,
			title: d,
			testid: "navbar-item-archived",
			isActive: l,
			onClick: c,
			activityIndicator: i > 0 ? { count: i } : void 0,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
