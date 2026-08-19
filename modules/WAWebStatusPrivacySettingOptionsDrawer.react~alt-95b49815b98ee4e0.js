__d("WAWebStatusPrivacySettingOptionsDrawer.react", [
	"fbt",
	"WAWebAccountLinkingConstants",
	"WAWebCrosspostingAutoShareAction",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebLoadingDrawer.react",
	"WAWebPrivacyVisibilityOption.react",
	"WAWebSettingsGetters",
	"WAWebStatusGatingUtils",
	"WAWebStatusPostingUtils",
	"WAWebStatusPrivacyReshareSettings.react",
	"WAWebText.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUserPrefsStatusType",
	"WDSFontTokenStyles",
	"WDSIconWdsIcLogoFacebook.react",
	"WDSIconWdsIcLogoInstagram.react",
	"WDSSwitch.react",
	"asyncToGeneratorRuntime",
	"justknobx",
	"react",
	"stylex",
	"useWAWebSettingsValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = {
		crosspostLabel: {
			color: "x14ug900",
			$$css: !0
		},
		crosspostFooter: {
			color: "xhslqc4",
			paddingTop: "x1p57kb1",
			$$css: !0
		}
	};
	function m(t) {
		var a = t.isModal, i = a === void 0 ? !1 : a, l = t.onAllowListClick, u = t.onBack, m = t.onClose, p = t.onContactClick, _ = t.onDenyListClick, f = t.ref, g = t.statusPostingPrivacyConfig, h = o("useWAWebSettingsValues").useSettingsValues([
			o("WAWebSettingsGetters").getIsFBLinked,
			o("WAWebSettingsGetters").getIsIGLinked,
			o("WAWebSettingsGetters").getLinkState,
			o("WAWebSettingsGetters").getShareToFB,
			o("WAWebSettingsGetters").getShareToIG
		]), y = h[0], C = h[1], b = h[2], v = h[3], S = h[4], R = b === o("WAWebAccountLinkingConstants").AccountLinkState.Active, L = o("WAWebStatusGatingUtils").isStatusResharePosterSideEnabled(), E = r("justknobx")._("2695"), k = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				try {
					yield o("WAWebCrosspostingAutoShareAction").toggleCrosspostAutoShare("fb", e);
				} catch (e) {
					o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }));
				}
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), I = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				try {
					yield o("WAWebCrosspostingAutoShareAction").toggleCrosspostAutoShare("ig", e);
				} catch (e) {
					o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }));
				}
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), T = s._(
			/*BTDS*/
			""
		), D = s._(
			/*BTDS*/
			""
		), x = s._(
			/*BTDS*/
			""
		);
		if (!g) return c.jsx(r("WAWebDrawer.react"), {
			ref: f,
			children: c.jsx(r("WAWebLoadingDrawer.react"), {
				title: T,
				error: !1
			})
		});
		var $ = g.setting, P = s._(
			/*BTDS*/
			""
		), N = o("WAWebStatusPostingUtils").formatStatusSetting(g), M = o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL;
		i && (M = o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP);
		var w;
		return u ? w = { onBack: u } : m && (w = { onCancel: m }), c.jsxs(r("WAWebDrawer.react"), {
			ref: f,
			testid: "status-privacy-settings-drawer",
			tsNavigationData: { surface: "status-audience-selector" },
			children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, babelHelpers.extends({
				testid: "drawer-title",
				title: T,
				type: M,
				focusBackOrCancel: !0
			}, w)), c.jsxs(r("WAWebDrawerBody.react"), { children: [
				c.jsxs(r("WAWebDrawerSection.react"), {
					theme: "padding-no-vertical",
					animation: !1,
					children: [c.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
						margin: [20, 0],
						color: "wdsContentDeemphasized",
						weight: "bold",
						children: P
					}), c.jsxs("div", {
						role: "radiogroup",
						"aria-label": P,
						children: [
							c.jsx(r("WAWebPrivacyVisibilityOption.react"), {
								text: s._(
									/*BTDS*/
									""
								),
								subText: s._(
									/*BTDS*/
									""
								),
								selected: $ === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact,
								testid: "status-contacts-everyone",
								onClick: p
							}),
							c.jsx(r("WAWebPrivacyVisibilityOption.react"), {
								text: s._(
									/*BTDS*/
									""
								),
								subText: $ === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList ? N : s._(
									/*BTDS*/
									""
								),
								testid: "status-contacts-except",
								selected: $ === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList,
								onClick: _
							}),
							c.jsx(r("WAWebPrivacyVisibilityOption.react"), {
								text: s._(
									/*BTDS*/
									""
								),
								subText: $ === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList ? N : s._(
									/*BTDS*/
									""
								),
								testid: "status-contacts-share-with",
								selected: $ === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList,
								onClick: l
							})
						]
					})]
				}),
				L && c.jsx(r("WAWebStatusPrivacyReshareSettings.react"), {}),
				R && (y || C) && c.jsxs(r("WAWebDrawerSection.react"), {
					theme: "padding-no-vertical",
					animation: !1,
					children: [c.jsx("div", { className: "xso031l x1q0q8m5 x120ee7l" }), c.jsxs("div", {
						className: "x1p57kb1",
						children: [
							y && c.jsxs("div", {
								className: "x78zum5 x6s0dn4 x1qughib x1xrf6ya xscbp6u x1ypdohk",
								role: "button",
								tabIndex: 0,
								onClick: function() {
									k(!v);
								},
								onKeyDown: function(t) {
									(t.key === "Enter" || t.key === " ") && (t.preventDefault(), k(!v));
								},
								"data-testid": "share-to-facebook-privacy-settings-item",
								children: [c.jsxs("div", {
									className: "x78zum5 x6s0dn4 xs2akgl",
									children: [c.jsx("div", {
										className: "x78zum5 x6s0dn4 xl56j7k xhslqc4",
										children: c.jsx(r("WDSIconWdsIcLogoFacebook.react"), {})
									}), c.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSFontTokenStyles").WDSFontTokenStyles.Body1, d.crosspostLabel), { children: D }))]
								}), c.jsx(r("WDSSwitch.react"), {
									value: v,
									"aria-label": D.toString()
								})]
							}),
							C && c.jsxs("div", {
								className: "x78zum5 x6s0dn4 x1qughib x1xrf6ya xscbp6u x1ypdohk",
								role: "button",
								tabIndex: 0,
								onClick: function() {
									I(!S);
								},
								onKeyDown: function(t) {
									(t.key === "Enter" || t.key === " ") && (t.preventDefault(), I(!S));
								},
								"data-testid": "share-to-instagram-privacy-settings-item",
								children: [c.jsxs("div", {
									className: "x78zum5 x6s0dn4 xs2akgl",
									children: [c.jsx("div", {
										className: "x78zum5 x6s0dn4 xl56j7k xhslqc4",
										children: c.jsx(r("WDSIconWdsIcLogoInstagram.react"), {})
									}), c.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSFontTokenStyles").WDSFontTokenStyles.Body1, d.crosspostLabel), { children: x }))]
								}), c.jsx(r("WDSSwitch.react"), {
									value: S,
									"aria-label": x.toString()
								})]
							}),
							c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSFontTokenStyles").WDSFontTokenStyles.Body2, d.crosspostFooter), { children: E ? s._(
								/*BTDS*/
								""
							) : s._(
								/*BTDS*/
								""
							) }))
						]
					})]
				})
			] })]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
