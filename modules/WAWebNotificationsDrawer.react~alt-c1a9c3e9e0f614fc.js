__d("WAWebNotificationsDrawer.react", [
	"fbt",
	"WALogger",
	"WAWebContextualBannerConfig",
	"WAWebContextualBannerWrapperLoadable",
	"WAWebDoNotDisturbSettings.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebKeyboardRotateFocus.react",
	"WAWebKeyboardTabUtils",
	"WAWebMuteCollection",
	"WAWebNoop",
	"WAWebNotificationConstants",
	"WAWebToast.react",
	"WAWebToastManager",
	"cr:3133",
	"cr:4908",
	"gkx",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m = d || (d = o("react")), p = d, _ = p.useCallback, f = p.useEffect, g = p.useRef, h = p.useState, y = (e = n("cr:3133")) != null ? e : {}, C = y.IsNotificationsEnabledInSystem, b = y.OpenSystemNotificationsSettings;
	function v(e) {
		var t = e.onCancel, a = e.onClose, i = e.onOpenCalls, l = e.onOpenDirectMessages, d = e.onOpenGroupMessages, p = e.onOpenStatusUpdates, y = e.onShowNotificationBannerClick, v = e.onTaskbarNotificationSettingsClick, S = e.ref, R = g(null), L = _(function() {
			var e;
			(e = R.current) == null || e.toggleOfflineNotifications();
		}, []), E = h(!0), k = E[0], I = E[1];
		f(function() {
			var e = r("gkx")("2392"), t = r("gkx")("2633"), n = r("gkx")("337");
			o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
				"[notifications-settings] immediate eligibility GKs off=",
				" on=",
				""
			])), e, t), o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[notifications-settings] laser tier GK=", ""])), n);
		}, []), f(function() {
			if (C) {
				var e = async function() {
					var e = await C();
					I(e);
				};
				e().catch(r("WAWebNoop"));
			}
		}, []);
		var T = n("cr:4908") ? m.jsx(n("cr:4908"), { onOpenSystemNotificationSettingsRequested: function() {
			b == null || b();
		} }) : null;
		return m.jsx(r("WAWebDrawer.react"), {
			ref: S,
			testid: "notifications-settings-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "notifications-settings"
			},
			children: m.jsxs(o("WAWebKeyboardRotateFocus.react").RotateFocus, {
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
				children: [m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					testid: "drawer-title-notifications",
					title: s._(
						/*BTDS*/
						""
					),
					onCancel: t,
					onBack: a,
					type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
					focusBackOrCancel: !0
				}), m.jsxs(r("WAWebDrawerBody.react"), { children: [
					!k && T,
					m.jsx(o("WAWebContextualBannerWrapperLoadable").ContextualBannerWrapperLoadable, { bannerListOrderedByPriority: [{
						id: o("WAWebContextualBannerConfig").ContextualBannerId.BackgroundSyncUpsell,
						onClick: function() {
							var e;
							L(), ((e = window.Notification) == null ? void 0 : e.permission) === o("WAWebNotificationConstants").PERMISSION_ALLOWED && o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, { msg: s._(
								/*BTDS*/
								""
							) }));
						}
					}] }),
					m.jsx(r("WAWebDoNotDisturbSettings.react"), {
						ref: R,
						onOpenCalls: i,
						onOpenDirectMessages: l,
						onOpenGroupMessages: d,
						onOpenStatusUpdates: p,
						onShowNotificationBannerClick: y,
						onTaskbarNotificationSettingsClick: v,
						reactionsMute: o("WAWebMuteCollection").MuteCollection.globalReactionsMute(),
						isNotificationsEnabledInSystem: k
					}, "notifications")
				] })]
			})
		});
	}
	v.displayName = v.name + " [from " + i.id + "]", l.default = v;
}), 226);
