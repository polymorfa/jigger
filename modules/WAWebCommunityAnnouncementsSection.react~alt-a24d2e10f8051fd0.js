__d("WAWebCommunityAnnouncementsSection.react", [
	"fbt",
	"WAWebABProps",
	"WAWebChatEphemerality",
	"WAWebChatInfoDrawerRow.react",
	"WAWebChatInfoDrawerSection.react",
	"WAWebChatInfoMediaSection.react",
	"WAWebChatInfoPhoneNumberVisibilityIndicator.react",
	"WAWebDrawerSectionRefreshed.react",
	"WAWebEphemeralSettingRow.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebGroupInfoEventsSection.react",
	"WAWebGroupInfoIntegritySection.react",
	"WAWebGroupInfoSeparator.react",
	"WAWebKeepInChatIcon.react",
	"WAWebLimitSharingSettingRow.react",
	"WAWebLimitSharingUIUtils",
	"WAWebMuteRow.react",
	"WAWebMuteUtils",
	"WAWebPencilIcon.react",
	"WAWebPrinaUtils",
	"WAWebReactionsUtils",
	"WAWebSecurityDrawerSection.react",
	"WAWebStarRefreshedIcon.react",
	"WAWebStateUtils",
	"WAWebText.react",
	"WAWebWamEnumPrivacyHighlightSurfaceEnum",
	"WDSPaddings.stylex",
	"nullthrows",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { marginBottom10: {
		marginBottom: "xyorhqc",
		$$css: !0
	} }, d = {
		chatWallpaperIcon: {
			color: "xhslqc4",
			$$css: !0
		},
		secondaryColor: {
			color: "xhslqc4",
			$$css: !0
		}
	};
	function m(e) {
		var t = e.callbacks, n = e.chat, a = u.jsx(r("WAWebChatInfoMediaSection.react"), {
			chat: o("WAWebStateUtils").unproxy(n),
			onMediaGallery: t.onMediaGalleryClick
		}), i = u.jsx(r("WAWebGroupInfoEventsSection.react"), {
			chat: o("WAWebStateUtils").unproxy(n),
			onAllEvents: function() {
				return t.onAllEventsClick(n);
			},
			onEventInfo: function(r) {
				t.onEventInfoClick(r, n);
			}
		}), l = n && o("WAWebChatEphemerality").shouldShowEphemeralSetting(n) ? u.jsx(o("WAWebEphemeralSettingRow.react").EphemeralSettingRow, {
			chat: n,
			groupMetadata: r("nullthrows")(n.groupMetadata),
			onClick: t.onEphemeralClick,
			testid: "community-dm-row"
		}) : null, m = o("WAWebLimitSharingUIUtils").isLimitSharingSettingVisible(n) ? u.jsx(r("WAWebLimitSharingSettingRow.react"), {
			chat: n,
			onClick: function() {
				return t.onLimitSharingClick(n);
			}
		}) : null, _ = u.jsx(p, { handleOnClick: t.onStarredMessagesClick }), f = n.hasKeptMsgs() || o("WAWebChatEphemerality").isEphemeralSettingOn(n) ? u.jsx(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
			titleTestId: "section-kept-messages",
			xstyle: [c.marginBottom10, o("WDSPaddings.stylex").wdsPaddings.paddingHor0],
			children: u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRow, {
				icon: u.jsx(o("WAWebKeepInChatIcon.react").KeepInChatIcon, {
					iconXstyle: d.secondaryColor,
					height: 20
				}),
				onClick: t.onKeptMessagesClick,
				secondaryTitle: r("nullthrows")(n.groupMetadata).restrict ? u.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
					/*BTDS*/
					""
				) }) : null,
				side: "chevron",
				spaced: !0,
				testid: "block-kept-messages",
				title: u.jsx(o("WAWebText.react").WAWebTextTitle, { children: s._(
					/*BTDS*/
					""
				) })
			})
		}) : null, g = u.jsx(r("WAWebSecurityDrawerSection.react"), {
			header: { type: "encryption" },
			highlightSurface: o("WAWebWamEnumPrivacyHighlightSurfaceEnum").PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_GROUP,
			onClick: function() {
				return o("WAWebPrinaUtils").showEncryptionInfoPopup(n);
			},
			text: s._(
				/*BTDS*/
				""
			)
		}), h = o("WAWebMuteUtils").canMute(n.mute) ? u.jsx(r("WAWebMuteRow.react"), {
			chat: n,
			mute: n.mute
		}) : null, y = o("WAWebABProps").getABPropConfigValue("use_per_chat_wallpaper") ? u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRow, {
			icon: u.jsx(o("WAWebPencilIcon.react").PencilIcon, { xstyle: d.chatWallpaperIcon }),
			onClick: t.onWallpaperClick,
			side: "chevron",
			spaced: !0,
			title: u.jsx(o("WAWebText.react").WAWebTextTitle, { children: s._(
				/*BTDS*/
				""
			) })
		}) : null, C = o("WAWebReactionsUtils").isReactionsEnabledInCAG(n) ? u.jsx(o("WAWebChatInfoPhoneNumberVisibilityIndicator.react").PhoneNumberVisibilityIndicatorCag, { chat: n }) : null, b = u.jsx(r("WAWebGroupInfoIntegritySection.react"), {
			chat: n,
			showDeleteOrExit: !1
		}), v = s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m2", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
				href: o("WAWebFaqUrl").getExitCommunityUrl(),
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		), S = u.jsx(r("WAWebDrawerSectionRefreshed.react"), {
			theme: "transparent",
			xstyle: !1,
			children: u.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, { children: v })
		});
		return u.jsxs(u.Fragment, { children: [
			a,
			i,
			_,
			f,
			u.jsxs(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
				xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingHor0, c.marginBottom10],
				children: [
					h,
					y,
					l,
					m,
					g,
					C
				]
			}),
			u.jsx(r("WAWebGroupInfoSeparator.react"), {}),
			b,
			u.jsx(r("WAWebGroupInfoSeparator.react"), {}),
			S
		] });
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.handleOnClick, n = "block-starred-messages", r = s._(
			/*BTDS*/
			""
		), a = {
			testid: n,
			onClick: t,
			title: r
		};
		return u.jsx(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
			titleTestId: "section-starred-messages",
			xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingHor0,
			children: u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, babelHelpers.extends({}, a, { icon: u.jsx(o("WAWebStarRefreshedIcon.react").StarRefreshedIcon, {}) }))
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = m;
}), 226);
