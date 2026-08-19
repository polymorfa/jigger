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
	"react-compiler-runtime",
	"useWAWebArchivedChatsActivityIndicator"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(11), a = e.activeNavBarItem, i = e.updateActiveNavBarItem, l = o("useWAWebArchivedChatsActivityIndicator").useArchivedChatsActivityIndicator(), c = l.unreadCount, d = a === o("WAWebNavBarTypes").NavBarItems.Archived, m;
		t[0] !== d || t[1] !== i ? (m = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (!d) {
					var e = yield o("WAWebDrawerManager").DrawerManager.openDrawerLeftAsync(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? { descriptorType: "archived" } : u.jsx(o("WAWebArchivedFlowLoadable").ArchivedFlowLoadable, { onEnd: o("WAWebDrawerManager").closeDrawerLeft }), {
						focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
						transition: "pop-drawer-fast",
						focusOnUnMount: !0
					});
					e && (i(o("WAWebNavBarTypes").NavBarItems.Archived), o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.ARCHIVED));
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), t[0] = d, t[1] = i, t[2] = m) : m = t[2];
		var p = m, _;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (_ = s._(
			/*BTDS*/
			""
		), t[3] = _) : _ = t[3];
		var f = _, g = r(d ? "WDSIconIcArchiveFilled.react" : "WDSIconIcArchive.react"), h;
		t[4] !== c ? (h = c > 0 ? { count: c } : void 0, t[4] = c, t[5] = h) : h = t[5];
		var y;
		return t[6] !== p || t[7] !== g || t[8] !== d || t[9] !== h ? (y = u.jsx(r("WDSMenuBarItem.react"), {
			icon: g,
			title: f,
			testid: "navbar-item-archived",
			isActive: d,
			onClick: p,
			activityIndicator: h,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		}), t[6] = p, t[7] = g, t[8] = d, t[9] = h, t[10] = y) : y = t[10], y;
	}
	l.default = c;
}), 226);
