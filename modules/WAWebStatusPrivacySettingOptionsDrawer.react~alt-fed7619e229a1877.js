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
		var n = t.isModal, a = n === void 0 ? !1 : n, i = t.onAllowListClick, l = t.onBack, u = t.onClose, m = t.onContactClick, p = t.onDenyListClick, _ = t.ref, f = t.statusPostingPrivacyConfig, g = o("useWAWebSettingsValues").useSettingsValues([
			o("WAWebSettingsGetters").getIsFBLinked,
			o("WAWebSettingsGetters").getIsIGLinked,
			o("WAWebSettingsGetters").getLinkState,
			o("WAWebSettingsGetters").getShareToFB,
			o("WAWebSettingsGetters").getShareToIG
		]), h = g[0], y = g[1], C = g[2], b = g[3], v = g[4], S = C === o("WAWebAccountLinkingConstants").AccountLinkState.Active, R = o("WAWebStatusGatingUtils").isStatusResharePosterSideEnabled(), L = r("justknobx")._("2695"), E = async function(t) {
			try {
				await o("WAWebCrosspostingAutoShareAction").toggleCrosspostAutoShare("fb", t);
			} catch (e) {
				o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
			}
		}, k = async function(t) {
			try {
				await o("WAWebCrosspostingAutoShareAction").toggleCrosspostAutoShare("ig", t);
			} catch (e) {
				o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
			}
		}, I = s._(
			/*BTDS*/
			""
		), T = s._(
			/*BTDS*/
			""
		), D = s._(
			/*BTDS*/
			""
		);
		if (!f) return c.jsx(r("WAWebDrawer.react"), {
			ref: _,
			children: c.jsx(r("WAWebLoadingDrawer.react"), {
				title: I,
				error: !1
			})
		});
		var x = f.setting, $ = s._(
			/*BTDS*/
			""
		), P = o("WAWebStatusPostingUtils").formatStatusSetting(f), N = o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL;
		a && (N = o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP);
		var M;
		return l ? M = { onBack: l } : u && (M = { onCancel: u }), c.jsxs(r("WAWebDrawer.react"), {
			ref: _,
			testid: "status-privacy-settings-drawer",
			tsNavigationData: { surface: "status-audience-selector" },
			children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, babelHelpers.extends({
				testid: "drawer-title",
				title: I,
				type: N,
				focusBackOrCancel: !0
			}, M)), c.jsxs(r("WAWebDrawerBody.react"), { children: [
				c.jsxs(r("WAWebDrawerSection.react"), {
					theme: "padding-no-vertical",
					animation: !1,
					children: [c.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
						margin: [20, 0],
						color: "wdsContentDeemphasized",
						weight: "bold",
						children: $
					}), c.jsxs("div", {
						role: "radiogroup",
						"aria-label": $,
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
								selected: x === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact,
								testid: "status-contacts-everyone",
								onClick: m
							}),
							c.jsx(r("WAWebPrivacyVisibilityOption.react"), {
								text: s._(
									/*BTDS*/
									""
								),
								subText: x === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList ? P : s._(
									/*BTDS*/
									""
								),
								testid: "status-contacts-except",
								selected: x === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList,
								onClick: p
							}),
							c.jsx(r("WAWebPrivacyVisibilityOption.react"), {
								text: s._(
									/*BTDS*/
									""
								),
								subText: x === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList ? P : s._(
									/*BTDS*/
									""
								),
								testid: "status-contacts-share-with",
								selected: x === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList,
								onClick: i
							})
						]
					})]
				}),
				R && c.jsx(r("WAWebStatusPrivacyReshareSettings.react"), {}),
				S && (h || y) && c.jsxs(r("WAWebDrawerSection.react"), {
					theme: "padding-no-vertical",
					animation: !1,
					children: [c.jsx("div", { className: "xso031l x1q0q8m5 x120ee7l" }), c.jsxs("div", {
						className: "x1p57kb1",
						children: [
							h && c.jsxs("div", {
								className: "x78zum5 x6s0dn4 x1qughib x1xrf6ya xscbp6u x1ypdohk",
								role: "button",
								tabIndex: 0,
								onClick: function() {
									E(!b);
								},
								onKeyDown: function(t) {
									(t.key === "Enter" || t.key === " ") && (t.preventDefault(), E(!b));
								},
								"data-testid": "share-to-facebook-privacy-settings-item",
								children: [c.jsxs("div", {
									className: "x78zum5 x6s0dn4 xs2akgl",
									children: [c.jsx("div", {
										className: "x78zum5 x6s0dn4 xl56j7k xhslqc4",
										children: c.jsx(r("WDSIconWdsIcLogoFacebook.react"), {})
									}), c.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSFontTokenStyles").WDSFontTokenStyles.Body1, d.crosspostLabel), { children: T }))]
								}), c.jsx(r("WDSSwitch.react"), {
									value: b,
									"aria-label": T.toString()
								})]
							}),
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
								"data-testid": "share-to-instagram-privacy-settings-item",
								children: [c.jsxs("div", {
									className: "x78zum5 x6s0dn4 xs2akgl",
									children: [c.jsx("div", {
										className: "x78zum5 x6s0dn4 xl56j7k xhslqc4",
										children: c.jsx(r("WDSIconWdsIcLogoInstagram.react"), {})
									}), c.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSFontTokenStyles").WDSFontTokenStyles.Body1, d.crosspostLabel), { children: D }))]
								}), c.jsx(r("WDSSwitch.react"), {
									value: v,
									"aria-label": D.toString()
								})]
							}),
							c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSFontTokenStyles").WDSFontTokenStyles.Body2, d.crosspostFooter), { children: L ? s._(
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
