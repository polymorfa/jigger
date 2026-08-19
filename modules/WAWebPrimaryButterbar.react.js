__d("WAWebPrimaryButterbar.react", [
	"fbt",
	"WATimeUtils",
	"WAWebABProps",
	"WAWebBackgroundSyncReporter",
	"WAWebDrawerManager",
	"WAWebEnvironment",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebMuteCollection",
	"WAWebNotificationConstants",
	"WAWebNotificationsFlow.react",
	"WAWebNotificationsM1Butterbar.react",
	"WAWebNotificationsOptInGating",
	"WAWebOfflineButterbar.react",
	"WAWebOfflineProgressButterbar.react",
	"WAWebPushNotificationsGatingUtils",
	"WAWebResumeButterbar.react",
	"WAWebSettingsFBT",
	"WAWebSocketConstants",
	"WAWebSocketModel",
	"WAWebStreamModel",
	"WAWebTabOrder",
	"WAWebUpdater",
	"WAWebUserPrefsNotifications",
	"WAWebWamEnumOnboardSources",
	"WAWebWamEnumWebcButterbarActionType",
	"WAWebWamEnumWebcButterbarBbType",
	"WAWebWebcButterbarEventWamEvent",
	"WDSBanner.react",
	"WDSIconIcRefresh.react",
	"WDSIconIcSync.react",
	"cr:11133",
	"cr:11135",
	"cr:17163",
	"cr:474",
	"react",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useState, _ = (e = n("cr:11135")) != null ? e : {}, f = _.chatlistReadySignal, g = _.isChatlistRowsLoading, h = null;
	function y(e) {
		"use no forget";
		var t = e.displayInfo, a = e.isHardRefresh, i = e.needsUpdate, l = e.notifyPermission, u = e.onEnableOfflineNotifications, d = e.onRequestPermissions, _ = e.onShowNotifyDelay, y = e.ref, R = e.showNotify, L = e.showResumeProgress, E = null, k = null, I = p(o("WAWebSocketModel").Socket.stream), T = I[0], D = I[1], x = p(function() {
			return (n("cr:11133") == null ? void 0 : n("cr:11133")()) === !0 && (g == null ? void 0 : g()) === !0;
		}), $ = x[0], P = x[1];
		m(function() {
			if (!(!$ || f == null)) {
				var e = !0;
				return f.getPromise().then(function() {
					e && P(!1);
				}), function() {
					e = !1;
				};
			}
		}, [$]);
		var N = function() {
			return !o("WAWebMuteCollection").MuteCollection.getGlobalNotificationsEnabled() && !o("WAWebMuteCollection").MuteCollection.getGlobalGroupNotificationsEnabled() && !o("WAWebMuteCollection").MuteCollection.getGlobalStatusNotificationsEnabled();
		}, M = p(N), w = M[0], A = M[1], F = p(function() {
			return o("WAWebNotificationsOptInGating").shouldShowNotificationSettingsV2Butterbar(!0, !0);
		}), O = F[0], B = F[1], W = p(function() {
			return o("WAWebNotificationsOptInGating").shouldShowNotificationSettingsV2Butterbar(!0);
		}), q = W[0], U = W[1], V = p(function() {
			var e;
			return (e = o("WAWebUserPrefsNotifications").getOfflineNotificationsBBStatus().isDismissed) != null ? e : !1;
		}), H = V[0], G = V[1];
		if (o("useWAWebListener").useListener(o("WAWebSocketModel").Socket, "change:stream", function() {
			D(o("WAWebSocketModel").Socket.stream);
		}), o("useWAWebListener").useListener(o("WAWebMuteCollection").MuteCollection, "change:notificationsEnabled", function() {
			A(N());
		}), n("cr:17163") != null && n("cr:17163").shouldShowBrokenHybrid2559Modal() && n("cr:474")) return c.jsx(n("cr:474"), {});
		switch (t) {
			case o("WAWebStreamModel").StreamInfo.OFFLINE:
				k = o("WAWebWamEnumWebcButterbarBbType").WEBC_BUTTERBAR_BB_TYPE.OFFLINE, E = c.jsx(r("WAWebOfflineButterbar.react"), {}, "bbar");
				break;
			case o("WAWebStreamModel").StreamInfo.OPENING:
			case o("WAWebStreamModel").StreamInfo.CONNECTING:
				if ($) break;
				k = o("WAWebWamEnumWebcButterbarBbType").WEBC_BUTTERBAR_BB_TYPE.RESUME_CONNECTING, E = c.jsx(r("WAWebResumeButterbar.react"), {}, "bbar");
				break;
			case o("WAWebStreamModel").StreamInfo.NORMAL:
				if (r("WAWebEnvironment").isWindows && T === o("WAWebSocketConstants").SOCKET_STREAM.DISCONNECTED) {
					k = o("WAWebWamEnumWebcButterbarBbType").WEBC_BUTTERBAR_BB_TYPE.OFFLINE, E = c.jsx(r("WAWebOfflineButterbar.react"), {}, "bbar");
					break;
				}
				break;
			case o("WAWebStreamModel").StreamInfo.RESUMING: {
				k = null, E = c.jsx("div", {
					className: "x1380le5 xefnzgg x1uvdrpn x14mko6t",
					children: c.jsx(r("WDSBanner.react"), {
						type: "warning",
						title: s._(
							/*BTDS*/
							""
						),
						body: s._(
							/*BTDS*/
							""
						),
						actionText: s._(
							/*BTDS*/
							""
						),
						onAction: b
					})
				});
				break;
			}
			default: break;
		}
		E == null && L && (k = o("WAWebWamEnumWebcButterbarBbType").WEBC_BUTTERBAR_BB_TYPE.RESUME_LOADING_MSGS_PROGRESS, E = c.jsx(r("WAWebOfflineProgressButterbar.react"), {})), E == null && i && !r("WAWebEnvironment").isWindows && !a && (k = o("WAWebWamEnumWebcButterbarBbType").WEBC_BUTTERBAR_BB_TYPE.UPDATE_DUE_TO_SOFT_MIN, E = c.jsx("div", {
			className: "x1380le5 xefnzgg x1uvdrpn x14mko6t",
			children: c.jsx(r("WDSBanner.react"), {
				ref: y,
				type: "default",
				title: s._(
					/*BTDS*/
					""
				),
				body: s._(
					/*BTDS*/
					""
				),
				actionText: s._(
					/*BTDS*/
					""
				),
				icon: r("WDSIconIcRefresh.react"),
				onAction: function() {
					S(o("WAWebWamEnumWebcButterbarBbType").WEBC_BUTTERBAR_BB_TYPE.UPDATE_DUE_TO_SOFT_MIN, o("WAWebWamEnumWebcButterbarActionType").WEBC_BUTTERBAR_ACTION_TYPE.CLICK_CTA), C();
				},
				tabOrder: o("WAWebTabOrder").TAB_ORDER.BUTTER_BAR
			}, "bbar")
		}));
		var z = !1;
		if (E == null && window.Notification && !r("WAWebEnvironment").isWindows && (l !== o("WAWebNotificationConstants").PERMISSION_ALLOWED || w) && (z = o("WAWebABProps").getABPropConfigValue("web_notifications_banner_new_logic_enabled")), E == null) {
			var j = l === o("WAWebNotificationConstants").PERMISSION_ALLOWED, K = o("WAWebABProps").getABPropConfigValue("wa_web_enable_granular_notifications"), Q = o("WAWebNotificationsOptInGating").shouldShowNotificationsOptInModal(l), X = function() {
				k != null && v(k), o("WAWebUserPrefsNotifications").setWebNotificationsBBStatus({
					isDismissed: !0,
					lastDismissTime: o("WATimeUtils").unixTime()
				}), U(!1), B(!1), A(N());
			}, Y = function() {
				k != null && S(k, o("WAWebWamEnumWebcButterbarActionType").WEBC_BUTTERBAR_ACTION_TYPE.CLICK_CTA), r("WAWebEnvironment").isWindows || o("WAWebBackgroundSyncReporter").logBackgroundSyncAdoptionEvent({
					offboardSource: null,
					onboardSource: o("WAWebWamEnumOnboardSources").ONBOARD_SOURCES.WEB_NOTIFICATION_BUTTERBAR
				}), w && o("WAWebDrawerManager").DrawerManager.openDrawerLeft(c.jsx(o("WAWebNotificationsFlow.react").NotificationsFlow, { onEnd: function() {
					o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(), A(N());
				} })), !j && !r("WAWebEnvironment").isWindows && d(z);
			};
			if (r("WAWebEnvironment").isWindows && K && O && w) k = o("WAWebWamEnumWebcButterbarBbType").WEBC_BUTTERBAR_BB_TYPE.NOTIFICATION_DISABLED, E = c.jsx(r("WAWebNotificationsM1Butterbar.react"), {
				onDismiss: X,
				onAction: Y,
				bannerVariant: 4,
				ref: y
			});
			else if (window.Notification && (o("WAWebPushNotificationsGatingUtils").canShowNotificationsBanner(l, z) || w) && q) if (Q) k = null;
			else if (R) {
				k = o("WAWebWamEnumWebcButterbarBbType").WEBC_BUTTERBAR_BB_TYPE.NOTIFICATION;
				var J = o("WAWebABProps").getABPropConfigValue("web_notifications_banner_variant"), Z = l === o("WAWebNotificationConstants").PERMISSION_DENIED;
				z && J > 0 && K && (Z || j && w) && (J = 4, k = o("WAWebWamEnumWebcButterbarBbType").WEBC_BUTTERBAR_BB_TYPE.NOTIFICATION_DISABLED), E = c.jsx(r("WAWebNotificationsM1Butterbar.react"), {
					onDismiss: X,
					onAction: Y,
					bannerVariant: J,
					ref: y
				});
			} else _();
			else if (!R && o("WAWebPushNotificationsGatingUtils").canEnableOfflineNotifications() && window.Notification && l !== o("WAWebNotificationConstants").PERMISSION_DENIED && E == null) {
				var ee = o("WAWebUserPrefsNotifications").getOfflineNotificationsBBStatus(), te = ee.firstSeenTime, ne = o("WAWebUserPrefsNotifications").getGlobalOfflineNotifications();
				!H && (!ne || l === o("WAWebNotificationConstants").PERMISSION_DEFAULT) && (te == null && (te = o("WATimeUtils").unixTime(), o("WAWebUserPrefsNotifications").setOfflineNotificationsBBStatus({
					isDismissed: !1,
					firstSeenTime: te
				})), o("WATimeUtils").unixTime() - te <= 7 * o("WATimeUtils").DAY_SECONDS && (k = o("WAWebWamEnumWebcButterbarBbType").WEBC_BUTTERBAR_BB_TYPE.OFFLINE_NOTIFICATION, E = c.jsx("div", {
					className: "x1380le5 xefnzgg x1uvdrpn x14mko6t",
					children: c.jsx(r("WDSBanner.react"), {
						type: "default",
						icon: r("WDSIconIcSync.react"),
						title: s._(
							/*BTDS*/
							""
						),
						body: o("WAWebSettingsFBT").offlineSyncSubtitle(),
						actionText: s._(
							/*BTDS*/
							""
						),
						onAction: function() {
							S(o("WAWebWamEnumWebcButterbarBbType").WEBC_BUTTERBAR_BB_TYPE.OFFLINE_NOTIFICATION, o("WAWebWamEnumWebcButterbarActionType").WEBC_BUTTERBAR_ACTION_TYPE.CLICK_CTA), o("WAWebBackgroundSyncReporter").logBackgroundSyncAdoptionEvent({
								offboardSource: null,
								onboardSource: o("WAWebWamEnumOnboardSources").ONBOARD_SOURCES.BACKGROUND_SYNC_BUTTERBAR
							}), u();
						},
						onDismiss: function() {
							v(o("WAWebWamEnumWebcButterbarBbType").WEBC_BUTTERBAR_BB_TYPE.OFFLINE_NOTIFICATION), o("WAWebUserPrefsNotifications").setOfflineNotificationsBBStatus({ isDismissed: !0 }), G(!0);
						}
					}, "bbar")
				})));
			}
		}
		return E != null && k && h !== k && (h != null && S(h, o("WAWebWamEnumWebcButterbarActionType").WEBC_BUTTERBAR_ACTION_TYPE.AUTO_DISMISS), h = k, S(k, o("WAWebWamEnumWebcButterbarActionType").WEBC_BUTTERBAR_ACTION_TYPE.IMPRESSION)), E;
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C() {
		o("WAWebUpdater").Updater.restart();
	}
	function b() {
		o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getCannotConnectFaqUrl());
	}
	function v(e) {
		h = null, S(e, o("WAWebWamEnumWebcButterbarActionType").WEBC_BUTTERBAR_ACTION_TYPE.CLICK_DISMISS);
	}
	function S(e, t) {
		new (o("WAWebWebcButterbarEventWamEvent")).WebcButterbarEventWamEvent({
			webcButterbarType: e,
			webcButterbarAction: t
		}).commit();
	}
	l.default = y;
}), 226);
