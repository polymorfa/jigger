__d("WAWebChatsSettingsDrawer.react", [
	"fbt",
	"WAWebAnimatedEmojiGatingUtils",
	"WAWebCappingUsageModalLoadable.react",
	"WAWebChatPreferenceCollection",
	"WAWebChatThemeGatingUtils",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebIndividualNewChatMessageCappingLimitGatingUtils",
	"WAWebMenu.react",
	"WAWebMenuItems.react",
	"WAWebSettingsFBT",
	"WAWebSettingsHierarchy",
	"WAWebThemeContext",
	"WDSDialogBridge",
	"WDSIconIcChevronRight.react",
	"react",
	"useWAWebModelValues",
	"useWAWebSettingSync"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useContext, d = { sectionTitle: {
		paddingTop: "x1cnzs8",
		paddingBottom: "xx6bls6",
		paddingInlineStart: "xdx6fka",
		paddingInlineEnd: "xvtqlqk",
		paddingLeft: null,
		paddingRight: null,
		$$css: !0
	} };
	function m(e) {
		var t = e.systemThemeMode, n = e.theme;
		return t ? o("WAWebSettingsFBT").themeSystemLabel() : n === "dark" ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t, n = e.onClickChatTheme, a = e.onClickMediaAutoDownload, i = e.onClickMediaUploadQuality, l = e.onClickTheme, p = e.onClickWallpaper, _ = e.onClose, f = e.ref, g = c(o("WAWebThemeContext").ThemeContext), h = o("useWAWebModelValues").useModelValues(r("WAWebChatPreferenceCollection").getDefault(), [
			"spellcheck",
			"transformTextEmoji",
			"enterIsSend",
			"autoplayAnimatedImages"
		]), y = o("useWAWebSettingSync").useSettingSync("replaceTextWithEmoji", function(e) {
			h.set("transformTextEmoji", e);
		}), C = o("useWAWebSettingSync").useSettingSync("isSpellCheckEnabled", function(e) {
			h.set("spellcheck", e);
		}), b = function(t) {
			C(t);
		}, v = function(t) {
			y(t);
		}, S = o("useWAWebSettingSync").useSettingSync("isEnterToSendEnabled", function(e) {
			h.set("enterIsSend", e);
		}), R = function(t) {
			S(t);
		}, L = function(t) {
			h.set("autoplayAnimatedImages", t);
		}, E = (t = o("WAWebSettingsFBT")).spellCheckTitle(), k = t.spellCheckSubtitle(), I = t.emojiReplacementTitle(), T = t.emojiReplacementSubtitle(), D = t.enterIsSendTitle(), x = t.enterIsSendSubtitle(), $ = s._(
			/*BTDS*/
			""
		), P = s._(
			/*BTDS*/
			""
		), N = function() {
			o("WDSDialogBridge").openWDSDialog(u.jsx(o("WAWebCappingUsageModalLoadable.react").CappingUsageModalLoadable, {}));
		}, M = s._(
			/*BTDS*/
			""
		);
		return u.jsxs(r("WAWebDrawer.react"), {
			ref: f,
			theme: "striped",
			testid: "chats-settings-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "chats-settings"
			},
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				testid: "drawer-title-chats",
				title: t.chatsTitle(),
				onBack: _,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				focusBackOrCancel: !0
			}), u.jsx(r("WAWebDrawerBody.react"), { children: u.jsxs(o("WAWebMenu.react").WAWebMenu, {
				size: "medium",
				border: "bottom-partial",
				allowTabNavigation: !0,
				children: [u.jsxs(r("WAWebDrawerSection.react"), {
					theme: "no-padding",
					title: s._(
						/*BTDS*/
						""
					),
					titleXStyle: d.sectionTitle,
					animation: !1,
					children: [
						u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
							optionId: "theme",
							testid: o("WAWebSettingsHierarchy").ThemeSettingsItem.testid,
							onSelect: l,
							primary: o("WAWebSettingsHierarchy").ThemeSettingsItem.title(),
							secondary: m(g),
							detailRight: u.jsx(r("WDSIconIcChevronRight.react"), {
								colorName: "contentDeemphasized",
								directional: !0
							}),
							ariaLabel: o("WAWebSettingsHierarchy").ThemeSettingsItem.title().toString()
						}),
						!o("WAWebChatThemeGatingUtils").isChatThemesEnabled() && u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
							optionId: "wallpaper",
							testid: "li-wallpaper",
							onSelect: p,
							primary: M,
							detailRight: u.jsx(r("WDSIconIcChevronRight.react"), {
								colorName: "contentDeemphasized",
								directional: !0
							}),
							ariaLabel: M.toString()
						}),
						o("WAWebChatThemeGatingUtils").isChatThemesEnabled() && u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
							optionId: "chat-theme",
							testid: "li-chat-theme",
							onSelect: n,
							primary: o("WAWebSettingsFBT").chatThemeTitle(),
							detailRight: u.jsx(r("WDSIconIcChevronRight.react"), {
								colorName: "contentDeemphasized",
								directional: !0
							}),
							ariaLabel: o("WAWebSettingsFBT").chatThemeTitle().toString()
						})
					]
				}), u.jsxs(r("WAWebDrawerSection.react"), {
					theme: "no-padding",
					title: s._(
						/*BTDS*/
						""
					),
					titleXStyle: d.sectionTitle,
					animation: !1,
					children: [
						u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
							optionId: "media-upload-quality",
							testid: o("WAWebSettingsHierarchy").MediaUploadQualitySettingsItem.testid,
							onSelect: i,
							primary: o("WAWebSettingsHierarchy").MediaUploadQualitySettingsItem.title(),
							detailRight: u.jsx(r("WDSIconIcChevronRight.react"), {
								colorName: "contentDeemphasized",
								directional: !0
							}),
							ariaLabel: o("WAWebSettingsHierarchy").MediaUploadQualitySettingsItem.title().toString()
						}),
						u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
							optionId: "media-auto-download",
							testid: o("WAWebSettingsHierarchy").MediaAutoDownloadSettingsItem.testid,
							onSelect: a,
							primary: o("WAWebSettingsHierarchy").MediaAutoDownloadSettingsItem.title(),
							detailRight: u.jsx(r("WDSIconIcChevronRight.react"), {
								colorName: "contentDeemphasized",
								directional: !0
							}),
							ariaLabel: o("WAWebSettingsHierarchy").MediaAutoDownloadSettingsItem.title().toString()
						}),
						o("WAWebIndividualNewChatMessageCappingLimitGatingUtils").isIndividualNewChatMessageCappingEnabled() && u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
							optionId: "new-chats-started",
							testid: "li-new-chats-started",
							onSelect: N,
							primary: s._(
								/*BTDS*/
								""
							),
							detailRight: u.jsx(r("WDSIconIcChevronRight.react"), {
								colorName: "contentDeemphasized",
								directional: !0
							}),
							ariaLabel: s._(
								/*BTDS*/
								""
							)
						}),
						u.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
							optionId: "spellcheck",
							testid: "option-spellcheck",
							on: h.spellcheck,
							onSelect: b,
							primary: E,
							secondary: k,
							ariaLabel: s._(
								/*BTDS*/
								"",
								[s._param("title", E), s._param("description", k)]
							)
						}),
						u.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
							optionId: "emoji",
							testid: "option-emoji",
							on: h.transformTextEmoji,
							onSelect: v,
							primary: I,
							secondary: T,
							ariaLabel: s._(
								/*BTDS*/
								"",
								[s._param("title", I), s._param("description", T)]
							)
						}),
						u.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
							optionId: "enter",
							testid: "option-enter",
							on: h.enterIsSend,
							onSelect: R,
							primary: D,
							secondary: x,
							ariaLabel: s._(
								/*BTDS*/
								"",
								[s._param("title", D), s._param("description", x)]
							)
						}),
						o("WAWebAnimatedEmojiGatingUtils").isAnimatedEmojiEnabled() && u.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
							optionId: "animated-images",
							testid: "autoplay-animated-images",
							on: h.autoplayAnimatedImages,
							onSelect: L,
							primary: $,
							secondary: P,
							ariaLabel: s._(
								/*BTDS*/
								"",
								[s._param("title", $), s._param("description", P)]
							)
						})
					]
				})]
			}) })]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
