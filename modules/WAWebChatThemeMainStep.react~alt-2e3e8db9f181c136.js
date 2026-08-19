__d("WAWebChatThemeMainStep.react", [
	"fbt",
	"WAWebChatInfoDrawerRow.react",
	"WAWebChatThemeGrid.react",
	"WAWebChatThemePreviewChip.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WDSButton.react",
	"WDSIconIcRefresh.react",
	"WDSIconIcWallpaper.react",
	"WDSIconWdsIcChat.react",
	"WDSMenuBarItem.react",
	"WDSSectionDivider.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.activeWallpaperId, n = e.chatThemeModule, a = e.chipRenderState, i = e.currentThemeId, l = e.doodleToggleRow, c = e.isDoodleEnabled, d = e.isLoading, m = e.isResetDisabled, p = e.onClose, _ = e.onPushAllThemes, f = e.onPushColor, g = e.onPushWallpaper, h = e.onReset, y = e.onSelect, C = e.pickerItems, b = e.pickerRowSplit, v = e.solidWallpaperHex, S = e.themeMode, R = s._(
			/*BTDS*/
			""
		);
		return u.jsxs("div", {
			className: "x78zum5 xdt5ytf x5yr21d",
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				title: s._(
					/*BTDS*/
					""
				),
				onBack: p,
				focusBackOrCancel: !0,
				menu: u.jsx(r("WDSMenuBarItem.react"), {
					disabled: m,
					testid: "chat_theme_reset_btn",
					icon: r("WDSIconIcRefresh.react"),
					onClick: h,
					title: s._(
						/*BTDS*/
						""
					)
				})
			}), u.jsx(r("WAWebDrawerBody.react"), { children: u.jsxs(r("WAWebDrawerSection.react"), {
				animation: !1,
				theme: "full-height",
				children: [
					u.jsx("div", {
						className: "x1iw51ew xde1mab x1p57kb1 x12xbjc7",
						children: u.jsx(r("WDSSectionDivider.react"), { header: {
							title: R,
							type: "emphasized",
							subtitle: s._(
								/*BTDS*/
								""
							),
							action: u.jsx(r("WDSButton.react"), {
								variant: "outline",
								size: "small",
								testid: "chat-theme-view-all-btn",
								label: s._(
									/*BTDS*/
									""
								),
								onPress: _
							})
						} })
					}),
					d ? null : u.jsx(r("WAWebChatThemeGrid.react"), {
						compact: !0,
						currentThemeId: i,
						currentWallpaperId: t,
						horizontal: !0,
						onSelect: y,
						rowSplit: b,
						showDoodle: c,
						solidWallpaperHex: v,
						pickerItems: C,
						themeMode: S
					}),
					l,
					u.jsx("div", {
						className: "x1iw51ew xde1mab xl7twdi",
						children: u.jsx(r("WDSSectionDivider.react"), {
							divider: !0,
							header: {
								title: s._(
									/*BTDS*/
									""
								),
								type: "emphasized"
							}
						})
					}),
					u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
						testid: "chat-color-item",
						icon: u.jsx(r("WDSIconWdsIcChat.react"), {}),
						onClick: f,
						side: u.jsx(r("WAWebChatThemePreviewChip.react"), {
							variant: "color",
							chatThemeModule: n,
							currentThemeId: i,
							themeMode: S
						}),
						title: u.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, { title: s._(
							/*BTDS*/
							""
						) })
					}),
					u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
						testid: "wallpaper-item",
						icon: u.jsx(r("WDSIconIcWallpaper.react"), {}),
						onClick: g,
						side: u.jsx(r("WAWebChatThemePreviewChip.react"), {
							variant: "wallpaper",
							activeWallpaperId: t,
							chatThemeModule: n,
							chipRenderState: a,
							currentThemeId: i,
							themeMode: S
						}),
						title: u.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, { title: s._(
							/*BTDS*/
							""
						) })
					})
				]
			}) })]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
