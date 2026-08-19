__d("WAWebWindowsGeneralSettingsDrawer.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebErrorBoundary.react",
	"WAWebHybridUtils",
	"WAWebModalManager",
	"WAWebSettingsCheckList.react",
	"WAWebSettingsSyncBridge",
	"WAWebText.react",
	"WAWebWindowsFontSizeDropdownButton.react",
	"WAWebWindowsGeneralSettingsHelpers",
	"WAWebWindowsHybridBridgeFactory",
	"WAWebWindowsHybridBridgeInitiator",
	"WAWebWindowsLanguageDropdownButton.react",
	"WAWebWindowsSettingsBanner.react",
	"WAWebWindowsUserPrefsSystemTray",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState, p = {
		drawerTitleFirst: {
			paddingTop: "xexx8yu",
			$$css: !0
		},
		drawerTitle: {
			paddingTop: "x1p57kb1",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		drawerContainer: {
			marginBottom: "xcytdqz",
			$$css: !0
		},
		marginBottom20: {
			marginBottom: "xdqhqc9",
			$$css: !0
		}
	};
	function _(e) {
		var t = e.onClose, n = e.ref, a = m(o("WAWebWindowsUserPrefsSystemTray").IsSystemTrayEnabled()), i = a[0], l = a[1], c = m(!0), _ = c[0], g = c[1], h = m(!1), y = h[0], C = h[1], b = o("WAWebHybridUtils").isHybridFontSizeDropdownEnabled();
		d(function() {
			var e, t = (e = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge(r("WAWebWindowsHybridBridgeInitiator").WAWebWindowsGeneralSettingsDrawer)) == null ? void 0 : e.systemIntegrationsBridge;
			t != null && t.getStartupTaskState().then(function(e) {
				g(e === "Enabled"), C(e !== "Enabled" && e !== "Disabled" && e !== "EnabledByPolicy");
			});
		}, []);
		var v = function(t) {
			var e = function() {
				l(t), o("WAWebWindowsUserPrefsSystemTray").setIsSystemTrayEnabled(t), o("WAWebSettingsSyncBridge").sendSettingChange("minimizeToTray", t);
			};
			if (!t) {
				o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
					title: s._(
						/*BTDS*/
						""
					),
					okButtonType: "secondary",
					onOK: function() {
						e(), o("WAWebModalManager").closeModalManager();
					},
					onCancel: o("WAWebModalManager").closeModalManager,
					tsNavigationData: {
						surface: "unknown",
						viewName: "windows-settings"
					},
					children: s._(
						/*BTDS*/
						""
					)
				}));
				return;
			}
			e();
		}, S = function(t) {
			var e, n = (e = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge(r("WAWebWindowsHybridBridgeInitiator").WAWebWindowsGeneralSettingsDrawer)) == null ? void 0 : e.systemIntegrationsBridge;
			n != null && (n.updateStartupTask(t), g(t), o("WAWebSettingsSyncBridge").sendSettingChange("startAtLogin", t));
		}, R = u.jsx(r("WAWebWindowsSettingsBanner.react"), {
			title: s._(
				/*BTDS*/
				""
			),
			content: s._(
				/*BTDS*/
				""
			),
			buttonContent: s._(
				/*BTDS*/
				""
			),
			onClick: f,
			xstyle: p.marginBottom20
		});
		return u.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			theme: "settings",
			testid: "general-settings-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "windows-general-settings"
			},
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				testid: "drawer-title-general",
				title: o("WAWebWindowsGeneralSettingsHelpers").getGeneralSettingsTitle(),
				onBack: t,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				focusBackOrCancel: !0
			}), u.jsxs(r("WAWebDrawerBody.react"), { children: [
				y && R,
				u.jsxs(r("WAWebDrawerSection.react"), {
					theme: "padding-no-vertical",
					title: o("WAWebWindowsGeneralSettingsHelpers").getStartupAndCloseSectionTitle(),
					xstyle: p.drawerContainer,
					titleXStyle: [p.drawerTitle, p.drawerTitleFirst],
					animation: !1,
					children: [u.jsx(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
						testid: "start-at-toggle",
						id: "start-at-toggle",
						checked: _,
						disabled: y,
						checkboxRightAligned: !0,
						onChange: function() {
							return S(!_);
						},
						children: o("WAWebWindowsGeneralSettingsHelpers").getStartAtSettingsTitle()
					}), u.jsxs(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
						testid: "system-tray-toggle",
						id: "system-tray-toggle",
						checked: i,
						checkboxRightAligned: !0,
						onChange: function() {
							return v(!i);
						},
						children: [o("WAWebWindowsGeneralSettingsHelpers").getSystemTraySettingsTitle(), u.jsx(o("WAWebText.react").WAWebTextMuted, { children: o("WAWebWindowsGeneralSettingsHelpers").getSystemTraySettingsHintText() })]
					})]
				}),
				u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
					name: "language-selector",
					children: u.jsx(r("WAWebDrawerSection.react"), {
						xstyle: p.drawerContainer,
						theme: "padding-no-vertical",
						title: o("WAWebWindowsGeneralSettingsHelpers").getLanguageSectionSettingsTitle(),
						testid: "language-section",
						titleXStyle: p.drawerTitle,
						animation: !1,
						children: u.jsx(r("WAWebWindowsLanguageDropdownButton.react"), {})
					})
				}),
				b && u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
					name: "font-size-selector",
					children: u.jsx(r("WAWebDrawerSection.react"), {
						xstyle: p.drawerContainer,
						theme: "padding-no-vertical",
						title: o("WAWebWindowsGeneralSettingsHelpers").getFontSizeSectionSettingsTitle(),
						testid: "font-size-section",
						titleXStyle: p.drawerTitle,
						animation: !1,
						children: u.jsx(r("WAWebWindowsFontSizeDropdownButton.react"), {})
					})
				})
			] })]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f() {
		window.open("ms-settings:startupapps");
	}
	l.default = _;
}), 226);
