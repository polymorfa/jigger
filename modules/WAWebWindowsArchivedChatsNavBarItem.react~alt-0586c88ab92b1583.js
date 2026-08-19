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
	"asyncToGeneratorRuntime",
	"react",
	"useWAWebArchivedChatsActivityIndicator"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.activeNavBarItem, a = e.updateActiveNavBarItem, i = o("useWAWebArchivedChatsActivityIndicator").useArchivedChatsActivityIndicator(), l = i.unreadCount, c = t === o("WAWebNavBarTypes").NavBarItems.Archived, d = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (!c) {
					var e = yield o("WAWebDrawerManager").DrawerManager.openDrawerLeftAsync(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? { descriptorType: "archived" } : u.jsx(o("WAWebArchivedFlowLoadable").ArchivedFlowLoadable, { onEnd: o("WAWebDrawerManager").closeDrawerLeft }), {
						focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
						transition: "pop-drawer-fast",
						focusOnUnMount: !0
					});
					e && (a(o("WAWebNavBarTypes").NavBarItems.Archived), o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.ARCHIVED));
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), m = s._(
			/*BTDS*/
			""
		), p = r(c ? "WDSIconIcArchiveFilled.react" : "WDSIconIcArchive.react");
		return u.jsx(r("WDSMenuBarItem.react"), {
			icon: p,
			title: m,
			testid: "navbar-item-archived",
			isActive: c,
			onClick: d,
			activityIndicator: l > 0 ? { count: l } : void 0,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
