__d("WAWebMuteRow.react", [
	"fbt",
	"WAWebChatGetters",
	"WAWebChatInfoDrawerRow.react",
	"WAWebClock",
	"WAWebCmd",
	"WAWebConfirmPopup.react",
	"WAWebDrawerBlock.react",
	"WAWebModalManager",
	"WAWebMuteGetters",
	"WAWebSettingsGetters",
	"WAWebStateUtils",
	"WAWebText.react",
	"WAWebUnmuteNotificationsRefreshedIcon.react",
	"WAWebWamEnumChannelEventSurface",
	"WAWebWamEnumMuteEntryPoint",
	"WDSSwitch.react",
	"react",
	"useWAWebChatValues",
	"useWAWebMuteValues",
	"useWAWebSettingsValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.chat, n = e.containerXstyle, a = e.mute, i = e.showIcon, l = i === void 0 ? !0 : i, c = o("useWAWebChatValues").useChatValues(t.id, [
			o("WAWebChatGetters").getId,
			o("WAWebChatGetters").getIsGroup,
			o("WAWebChatGetters").getMuteExpiration,
			o("WAWebChatGetters").getArchive,
			o("WAWebChatGetters").getIsNewsletter
		]), d = c[0], m = c[1], p = c[2], _ = c[3], f = c[4], g = o("useWAWebMuteValues").useMuteValues(a.id, [o("WAWebMuteGetters").getIsMuted]), h = g[0], y = o("useWAWebSettingsValues").useSettingsValues([o("WAWebSettingsGetters").getShowArchiveV2]), C = y[0], b = function(n) {
			f ? o("WAWebCmd").Cmd.newsletterMuteToggle(d, n, { eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE }) : o("WAWebCmd").Cmd.muteChatFromEntryPoint(o("WAWebStateUtils").unproxy(t), n, o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT.CONTACT_INFO);
		}, v = function() {
			b(!1), o("WAWebModalManager").ModalManager.close();
		}, S = function() {
			if (f) return v();
			var e = m ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				onOK: v,
				okText: s._(
					/*BTDS*/
					""
				),
				onCancel: o("WAWebModalManager").closeModalManager,
				cancelText: s._(
					/*BTDS*/
					""
				),
				tsNavigationData: {
					surface: "unknown",
					viewName: "unmute-chat"
				},
				children: e
			}));
		};
		if (_ && C) return u.jsx(r("WAWebDrawerBlock.react"), { children: u.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
			/*BTDS*/
			""
		) }) });
		var R = h ? S : function() {
			b(!0);
		}, L = f ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), E = h ? L : s._(
			/*BTDS*/
			""
		), k;
		if (h && p && !f) {
			var I = o("WAWebClock").Clock.untilStr(p);
			k = u.jsx(o("WAWebText.react").WAWebTextMuted, { children: I });
		}
		var T = "", D = u.jsx(r("WDSSwitch.react"), {
			tabIndex: -1,
			"aria-label": T,
			value: h
		}), x = u.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, { title: E }), $ = u.jsx(o("WAWebUnmuteNotificationsRefreshedIcon.react").UnmuteNotificationsRefreshedIcon, {});
		return u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
			icon: l ? $ : null,
			testid: "block-mute",
			side: D,
			onClick: R,
			title: x,
			secondaryTitle: k,
			containerXstyle: n
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
