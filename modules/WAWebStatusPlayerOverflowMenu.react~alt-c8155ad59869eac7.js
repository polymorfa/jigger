__d("WAWebStatusPlayerOverflowMenu.react", [
	"fbt",
	"WAWebAccountLinkingConstants",
	"WAWebContactGetters",
	"WAWebCrossposting.flow",
	"WAWebCrosspostingConfig",
	"WAWebDeleteRefreshedIcon.react",
	"WAWebMsgGetters",
	"WAWebMuteNotificationsRefreshedIcon.react",
	"WAWebSettingsGetters",
	"WAWebStatusGatingUtils",
	"WAWebTabOrder",
	"WAWebUnmuteNotificationsRefreshedIcon.react",
	"WDSIconIcDownload.react",
	"WDSIconIcMoreVert.react",
	"WDSIconIcThumbDown.react",
	"WDSIconIcVisibility.react",
	"WDSIconIcVisibilityOff.react",
	"WDSIconWdsIcLogoFacebook.react",
	"WDSIconWdsIcLogoInstagram.react",
	"WDSMenu.react",
	"WDSMenuBarItem.react",
	"WDSMenuItem.react",
	"react",
	"useWAWebContactValues",
	"useWAWebSettingsValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.contact, n = e.crosspostingInfo, a = e.msg, i = e.onCrosspost, l = e.onDelete, c = e.onDownload, d = e.onMuteOrUnmute, m = e.onOverflowMenuDismissed, p = e.onOverflowMenuShown, _ = e.onReport, f = o("useWAWebSettingsValues").useSettingsValues([
			o("WAWebSettingsGetters").getIsFBLinked,
			o("WAWebSettingsGetters").getIsIGLinked,
			o("WAWebSettingsGetters").getLinkState
		]), g = f[0], h = f[1], y = f[2], C = function(t) {
			return o("WAWebContactGetters").getIsMe(t) && y === o("WAWebAccountLinkingConstants").AccountLinkState.Active;
		}, b = [], v = u.jsx(r("WDSMenuItem.react"), {
			onPress: _,
			testid: "status-player-header-overflow-menu-report",
			Icon: r("WDSIconIcThumbDown.react"),
			title: s._(
				/*BTDS*/
				""
			)
		}, "status-player-header-overflow-menu-report");
		if (!o("WAWebMsgGetters").getIsSentByMe(a) && !o("WAWebContactGetters").getIsPSA(t) && b.push(v), c != null && b.push(u.jsx(r("WDSMenuItem.react"), {
			onPress: c,
			testid: "status-player-header-overflow-menu-save",
			Icon: r("WDSIconIcDownload.react"),
			title: s._(
				/*BTDS*/
				""
			)
		}, "status-player-header-overflow-menu-save")), o("WAWebContactGetters").getIsMe(t) && b.push(u.jsx(r("WDSMenuItem.react"), {
			onPress: l,
			testid: "status-player-header-overflow-menu-revoke",
			Icon: o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon,
			title: s._(
				/*BTDS*/
				""
			)
		}, "status-player-header-overflow-menu-revoke")), C(t)) {
			var S = function(t) {
				var e = t.destination === o("WAWebCrossposting.flow").CrosspostingDestination.FACEBOOK && g || t.destination === o("WAWebCrossposting.flow").CrosspostingDestination.INSTAGRAM && h;
				if (!e) return 1;
				var a = o("WAWebCrosspostingConfig").isCrosspostedToDestination(n, t.destination), l = o("WAWebCrosspostingConfig").isPendingCrosspostingToDestination(n, t.destination);
				if (!a && !l) {
					var s = t.destination === o("WAWebCrossposting.flow").CrosspostingDestination.FACEBOOK ? r("WDSIconWdsIcLogoFacebook.react") : r("WDSIconWdsIcLogoInstagram.react");
					b.push(u.jsx(r("WDSMenuItem.react"), {
						onPress: function() {
							return i(t.gqlValue);
						},
						testid: "status-player-header-overflow-menu-crosspost-" + t.keySuffix,
						Icon: s,
						title: t.getLabel()
					}, "status-player-header-overflow-menu-crosspost-" + t.keySuffix));
				}
			};
			for (var R of o("WAWebCrosspostingConfig").CROSSPOSTING_DESTINATION_CONFIG) S(R);
		}
		var L = o("useWAWebContactValues").useContactValues(t.id, [o("WAWebContactGetters").getCalculatedStatusMute]), E = L[0];
		if (!o("WAWebMsgGetters").getIsSentByMe(a) && !o("WAWebContactGetters").getIsPSA(t)) {
			var k, I, T, D, x, $ = function() {
				d(!E);
			};
			E ? (D = o("WAWebUnmuteNotificationsRefreshedIcon.react").UnmuteNotificationsRefreshedIcon, x = r("WDSIconIcVisibility.react"), I = s._(
				/*BTDS*/
				""
			), k = s._(
				/*BTDS*/
				""
			), T = "status-player-header-overflow-menu-unmute") : (D = o("WAWebMuteNotificationsRefreshedIcon.react").MuteNotificationsRefreshedIcon, x = r("WDSIconIcVisibilityOff.react"), I = s._(
				/*BTDS*/
				""
			), k = s._(
				/*BTDS*/
				""
			), T = "status-player-header-overflow-menu-mute");
			var P = o("WAWebStatusGatingUtils").isStatusHideStringEnabled(), N = P ? I : k, M = P ? x : D, w = u.jsx(r("WDSMenuItem.react"), {
				onPress: $,
				testid: T,
				Icon: M,
				title: N
			}, T);
			b.push(w);
		}
		return b.length === 0 ? null : u.jsx(r("WDSMenuBarItem.react"), {
			icon: r("WDSIconIcMoreVert.react"),
			onClick: p,
			onMenuClose: m,
			testid: "status-player-header-overflow-menu-icon",
			tabOrder: o("WAWebTabOrder").TAB_ORDER.STATUS_HEADER_SECTION,
			buttonType: "media",
			title: s._(
				/*BTDS*/
				""
			),
			wdsMenuToRender: u.jsx(r("WDSMenu.react"), {
				testid: "status-player-header-overflow-menu",
				children: b
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
