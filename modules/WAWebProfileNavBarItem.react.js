__d("WAWebProfileNavBarItem.react", [
	"fbt",
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebBizProfileGatingUtils",
	"WAWebConnModel",
	"WAWebContactCollection",
	"WAWebDetailImage.react",
	"WAWebDrawerManager",
	"WAWebGetBizProfileDrawerContent",
	"WAWebKeyboardTabUtils",
	"WAWebMidDrawerEmptyState.react",
	"WAWebNavBarLogEvents",
	"WAWebNavBarTypes",
	"WAWebProfilePicThumbCollection",
	"WAWebTextStatusCollection",
	"WAWebUserPrefsMeUser",
	"WAWebWamEnumEntryPoint",
	"WAWebWamEnumWebcNavbarItemLabel",
	"WDSMenuBarItem.react",
	"asyncToGeneratorRuntime",
	"cr:1923",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useMemo, d = {
		profilePictureWrapper: {
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			$$css: !0
		},
		profilePictureActive: {
			outline: "x139wjo3",
			$$css: !0
		}
	};
	function m(e) {
		var t = o("react-compiler-runtime").c(12), a = e.activeNavBarItem, i = e.updateActiveNavBarItem, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = o("WAWebUserPrefsMeUser").getMeUserOrThrow(), t[0] = l) : l = t[0];
		var c = l, m;
		t[1] !== a || t[2] !== i ? (m = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (a !== o("WAWebNavBarTypes").NavBarItems.Profile) {
					var e = o("WAWebTextStatusCollection").TextStatusCollection.assertGet(c), t = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.assertGet(c), l = o("WAWebContactCollection").ContactCollection.assertGet(c), s = o("WAWebBizProfileGatingUtils").businessProfileRefreshEnabled();
					if (s) {
						var d = yield o("WAWebDrawerManager").DrawerManager.closeDrawerLeftAsync();
						if (!d) return;
						i(o("WAWebNavBarTypes").NavBarItems.Profile), o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(r("WAWebGetBizProfileDrawerContent")(o("WAWebWamEnumEntryPoint").ENTRY_POINT.NAV_BAR, p)), o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.PROFILE);
						return;
					}
					var m = yield o("WAWebDrawerManager").DrawerManager.openDrawerLeftAsync(u.jsx(n("cr:1923"), {
						status: e,
						profilePicThumb: t,
						contact: l,
						conn: o("WAWebConnModel").Conn,
						entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.NAV_BAR,
						onClose: o("WAWebDrawerManager").closeDrawerLeft,
						isInitialStep: !0
					}), {
						focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
						transition: "pop-drawer-fast",
						focusOnUnMount: !0
					});
					m && (i(o("WAWebNavBarTypes").NavBarItems.Profile), o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.PROFILE), o("WAWebDrawerManager").DrawerManager.openDrawerMid(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
						descriptorType: "mid_drawer_empty_state",
						navBarItem: o("WAWebNavBarTypes").NavBarItems.Profile
					} : u.jsx(o("WAWebMidDrawerEmptyState.react").MidDrawerEmptyState, { type: o("WAWebNavBarTypes").NavBarItems.Profile }), {
						transition: "none",
						disableRotateFocus: !0
					}));
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), t[1] = a, t[2] = i, t[3] = m) : m = t[3];
		var _ = m, f = a === o("WAWebNavBarTypes").NavBarItems.Profile, g;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (g = s._(
			/*BTDS*/
			""
		), t[4] = g) : g = t[4];
		var h = f && d.profilePictureActive, y;
		t[5] !== h ? (y = u.jsx(o("WAWebDetailImage.react").DetailImage, {
			ariaLabel: g,
			testId: "navbar-item-profile-photo",
			theme: "chatlist_header_profile_photo",
			tabIndex: -1,
			id: c,
			size: 28,
			xstyle: [d.profilePictureWrapper, h]
		}), t[5] = h, t[6] = y) : y = t[6];
		var C = y, b;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (b = s._(
			/*BTDS*/
			""
		), t[7] = b) : b = t[7];
		var v;
		return t[8] !== _ || t[9] !== f || t[10] !== C ? (v = u.jsx(r("WDSMenuBarItem.react"), {
			testid: "navbar-item-profile",
			customIcon: C,
			title: b,
			onClick: _,
			isActive: f,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		}), t[8] = _, t[9] = f, t[10] = C, t[11] = v) : v = t[11], v;
	}
	function p() {
		return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
	}
	l.ProfileNavBarItem = m;
}), 226);
