__d("WAWebAutoDownloadSettings.react", [
	"fbt",
	"WAWebDrawerButton.react",
	"WAWebDrawerSection.react",
	"WAWebEnvironment",
	"WAWebRefreshIcon.react",
	"WAWebSettingsCheckList.react",
	"WAWebText.react",
	"WAWebUserPrefsGeneral",
	"WDSPaddings.stylex",
	"react",
	"useWAWebSettingSync",
	"useWAWebToggle"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		paddingInline30: {
			paddingInlineStart: "x162tt16",
			paddingInlineEnd: "x5zjp28",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		paddingInlineStart5: {
			paddingInlineStart: "xaso8d8",
			$$css: !0
		}
	}, d = { disclaimer: {
		borderTopColor: "xx42vgk",
		borderTopStyle: "x13fuv20",
		borderTopWidth: "x178xt8z",
		$$css: !0
	} };
	function m() {
		var e, t, n, a = (n = o("useWAWebSettingSync")).useSettingSync("isPhotosAutodownloadEnabled", function(e) {
			return o("WAWebUserPrefsGeneral").setAutoDownloadPhotos(e);
		}), i = n.useSettingSync("isAudiosAutodownloadEnabled", function(e) {
			return o("WAWebUserPrefsGeneral").setAutoDownloadAudio(e);
		}), l = n.useSettingSync("isVideosAutodownloadEnabled", function(e) {
			return o("WAWebUserPrefsGeneral").setAutoDownloadVideos(e);
		}), m = n.useSettingSync("isDocumentsAutodownloadEnabled", function(e) {
			return o("WAWebUserPrefsGeneral").setAutoDownloadDocuments(e);
		}), p = (e = r("useWAWebToggle"))((t = o("WAWebUserPrefsGeneral")).getAutoDownloadPhotos, a), _ = p[0], f = p[1], g = e(t.getAutoDownloadAudio, i), h = g[0], y = g[1], C = e(t.getAutoDownloadVideos, l), b = C[0], v = C[1], S = e(t.getAutoDownloadDocuments, m), R = S[0], L = S[1], E = r("WAWebEnvironment").isWindows ? !(_ && h && b && R) : !(_ && h && !b && !R), k = function() {
			E && (!_ && f(), !h && y(), r("WAWebEnvironment").isWindows ? (!b && v(), !R && L()) : (b && v(), R && L()));
		};
		return u.jsxs(u.Fragment, { children: [u.jsxs(r("WAWebDrawerSection.react"), {
			animation: !1,
			xstyle: [c.paddingInline30, o("WDSPaddings.stylex").wdsPaddings.paddingVer20],
			children: [
				u.jsx(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
					testid: "option-photos",
					id: "photos",
					checked: _,
					onChange: f,
					children: s._(
						/*BTDS*/
						""
					)
				}),
				u.jsx(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
					testid: "option-audio",
					id: "audio",
					checked: h,
					onChange: y,
					children: s._(
						/*BTDS*/
						""
					)
				}),
				u.jsx(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
					testid: "option-videos",
					id: "videos",
					checked: b,
					onChange: v,
					children: s._(
						/*BTDS*/
						""
					)
				}),
				u.jsx(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
					testid: "option-documents",
					id: "documents",
					checked: R,
					onChange: L,
					children: s._(
						/*BTDS*/
						""
					)
				}),
				u.jsx(o("WAWebText.react").WAWebTextMuted, {
					xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingTop20, d.disclaimer],
					children: s._(
						/*BTDS*/
						""
					)
				})
			]
		}), u.jsx(r("WAWebDrawerSection.react"), {
			animation: !1,
			xstyle: c.paddingInlineStart5,
			children: u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
				onClick: k,
				icon: u.jsx(o("WAWebRefreshIcon.react").RefreshIcon, {}),
				disabled: !E,
				children: s._(
					/*BTDS*/
					""
				)
			})
		})] });
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
