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
	"react"
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
		var t = e.activeNavBarItem, a = e.updateActiveNavBarItem, i = o("WAWebUserPrefsMeUser").getMeUserOrThrow(), l = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (t !== o("WAWebNavBarTypes").NavBarItems.Profile) {
					var e = o("WAWebTextStatusCollection").TextStatusCollection.assertGet(i), l = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.assertGet(i), s = o("WAWebContactCollection").ContactCollection.assertGet(i), c = o("WAWebBizProfileGatingUtils").businessProfileRefreshEnabled();
					if (c) {
						var d = yield o("WAWebDrawerManager").DrawerManager.closeDrawerLeftAsync();
						if (!d) return;
						a(o("WAWebNavBarTypes").NavBarItems.Profile), o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(r("WAWebGetBizProfileDrawerContent")(o("WAWebWamEnumEntryPoint").ENTRY_POINT.NAV_BAR, function() {
							return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
						})), o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.PROFILE);
						return;
					}
					var m = yield o("WAWebDrawerManager").DrawerManager.openDrawerLeftAsync(u.jsx(n("cr:1923"), {
						status: e,
						profilePicThumb: l,
						contact: s,
						conn: o("WAWebConnModel").Conn,
						entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.NAV_BAR,
						onClose: o("WAWebDrawerManager").closeDrawerLeft,
						isInitialStep: !0
					}), {
						focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
						transition: "pop-drawer-fast",
						focusOnUnMount: !0
					});
					m && (a(o("WAWebNavBarTypes").NavBarItems.Profile), o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.PROFILE), o("WAWebDrawerManager").DrawerManager.openDrawerMid(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
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
		})(), m = t === o("WAWebNavBarTypes").NavBarItems.Profile, p = c(function() {
			return u.jsx(o("WAWebDetailImage.react").DetailImage, {
				ariaLabel: s._(
					/*BTDS*/
					""
				),
				testId: "navbar-item-profile-photo",
				theme: "chatlist_header_profile_photo",
				tabIndex: -1,
				id: i,
				size: 28,
				xstyle: [d.profilePictureWrapper, m && d.profilePictureActive]
			});
		}, [i, m]);
		return u.jsx(r("WDSMenuBarItem.react"), {
			testid: "navbar-item-profile",
			customIcon: p,
			title: s._(
				/*BTDS*/
				""
			),
			onClick: l,
			isActive: m,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.ProfileNavBarItem = m;
}), 226);
