__d("WAWebChatButterbar.react", [
	"fbt",
	"WALogger",
	"WAShiftTimer",
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebBrigadingButterBar.react",
	"WAWebCmd",
	"WAWebDrawerManager",
	"WAWebGuidePopup.react",
	"WAWebL10N",
	"WAWebLocaleManualUpdateButterbar.react",
	"WAWebModalManager",
	"WAWebMuteCollection",
	"WAWebNoticeButterbar.react",
	"WAWebNoticeModel",
	"WAWebNotificationConstants",
	"WAWebNotificationsFlow.react",
	"WAWebNotificationsOptInModalController",
	"WAWebOfflineHandler",
	"WAWebOfflineResumeTypes",
	"WAWebPDFNLogging",
	"WAWebPrimaryButterbar.react",
	"WAWebStreamModel",
	"WAWebSubscribePushManagerAction",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUserPrefsGeneral",
	"WAWebUserPrefsIndexedDBStorage",
	"WAWebVelocityTransitionGroup",
	"WAWebWamEnumUserNoticeEvent",
	"cr:5037",
	"cr:5735",
	"gkx",
	"nullthrows",
	"react",
	"useLazyRef",
	"useWAWebForceUpdate",
	"useWAWebListener",
	"useWAWebModelValues",
	"useWAWebOnUnmount"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useState, _ = { container: {
		display: "x78zum5",
		flexGrow: "x1c4vz4f",
		flexShrink: "x2lah0s",
		flexBasis: "xdl72j9",
		flexDirection: "xdt5ytf",
		$$css: !0
	} }, f = 1e4;
	function g(t) {
		"use no forget";
		var a, i = t.setShowButterBar, l = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
		o("useWAWebModelValues").useModelValues(t.stream, [
			"displayInfo",
			"needsUpdate",
			"isHardRefresh"
		]), o("useWAWebModelValues").useModelValues(t.notice, [
			"noticeId",
			"blocking",
			"banner",
			"shouldShowButterBar"
		]);
		var u = p((a = window.Notification) == null ? void 0 : a.permission), d = u[0], g = u[1], h = p(!1), y = h[0], C = h[1], b = p(!1), v = b[0], S = b[1], R = p({ detected: !1 }), L = R[0], E = R[1], k = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get("WABrigadingState"), I = p(k), T = I[0], D = I[1], x = p(function() {
			return !1;
		}), $ = x[0], P = x[1], N = p(function() {
			return r("gkx")("26258") ? null : o("WAWebUserPrefsGeneral").getStorageAlert();
		}), M = N[0], w = N[1], A = r("useLazyRef")(function() {
			return new (o("WAShiftTimer")).ShiftTimer(function(e) {
				C(e);
			});
		}), F = p(o("WAWebOfflineHandler").OfflineMessageHandler.getResumeUIProgressBarType() === o("WAWebOfflineResumeTypes").ResumeUIProgressBarType.ButterBar), O = F[0], B = F[1], W = function() {
			A.current.onOrBefore(f, !0);
		}, q = function(t, n) {
			o("WAWebNotificationsOptInModalController").requestNotificationsPermission(t, {
				showGuidePopup: n == null ? void 0 : n.showGuidePopup,
				onPermissionResult: function(t) {
					g(t);
				}
			});
		}, U = function() {
			if (window.Notification && d === o("WAWebNotificationConstants").PERMISSION_ALLOWED) {
				o("WAWebMuteCollection").MuteCollection.setGlobalOfflineNotifications(!0), o("WAWebSubscribePushManagerAction").handleOfflineNotifications(!0), l();
				var t = s._(
					/*BTDS*/
					""
				), n = s._(
					/*BTDS*/
					""
				);
				o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
					msg: t,
					action: {
						actionText: n,
						onAction: function() {
							o("WAWebDrawerManager").DrawerManager.openDrawerLeft(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? { descriptorType: "notifications" } : c.jsx(o("WAWebNotificationsFlow.react").NotificationsFlow, { onEnd: o("WAWebDrawerManager").closeDrawerLeft }));
						}
					}
				}), o("WAWebToastManager").ToastPosition.LEFT);
			} else if (window.Notification && d === o("WAWebNotificationConstants").PERMISSION_DEFAULT) {
				var r;
				o("WAWebModalManager").ModalManager.open(c.jsx((r = o("WAWebGuidePopup.react")).GuidePopup, {
					messaging: r.Messaging.BACKGROUND_SYNC,
					onConfirm: r.guideConfirm,
					onCancel: r.notificationGuideLearnMore,
					type: r.GuidePopupType.GUIDE_ALLOW,
					featureSurface: r.FeatureSurface.NOTIFICATION
				})), window.Notification.requestPermission(function(e) {
					if (o("WAWebModalManager").ModalManager.close(), g(e), e === o("WAWebNotificationConstants").PERMISSION_ALLOWED) {
						var t = o("WAWebMuteCollection").MuteCollection.getGlobalOfflineNotifications();
						t || (o("WAWebMuteCollection").MuteCollection.setGlobalOfflineNotifications(!0), o("WAWebSubscribePushManagerAction").handleOfflineNotifications(!0));
					}
				});
			} else o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[offline-notif] failed: Notification unavailable/denied"])));
		}, V = function() {
			return r("WAWebNoticeModel").shouldShowButterBar && r("WAWebNoticeModel").noticeId != null && r("WAWebNoticeModel").banner != null && r("WAWebNoticeModel").blocking === !1;
		}, H = function() {
			V() && (v || (o("WAWebPDFNLogging").logUserNoticeEvent({
				noticeId: r("WAWebNoticeModel").noticeId,
				noticeContentVersion: r("WAWebNoticeModel").policyVersion,
				noticeEvent: o("WAWebWamEnumUserNoticeEvent").USER_NOTICE_EVENT.BANNER_APPEAR
			}), S(!0)));
		}, G = function() {
			r("gkx")("26258") || w(o("WAWebUserPrefsGeneral").getStorageAlert());
		}, z = function() {
			S(!1);
		}, j = function() {
			P(!1);
		}, K = function() {
			i && i(y || v);
		};
		m(function() {
			K();
		}, []), r("useWAWebOnUnmount")(function() {
			A.current.cancel();
		}), o("useWAWebListener").useListener(r("WAWebNoticeModel"), "change:noticeId", z), o("useWAWebListener").useListener(r("WAWebNoticeModel"), ["change:banner", "change:blocking"], H), o("useWAWebListener").useListener(r("gkx")("26258") ? o("WAWebCmd").Cmd : null, "handle_low_storage_butter_bar", G), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "on_notification_permission_change", function() {
			g(window.Notification.permission);
		}), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "on_brigading_state_change_from_bridge", function(e) {
			D(e);
		}), o("useWAWebListener").useListener(r("WAWebL10N"), "locale_changed_on_phone", function(e) {
			var t = e.currentLocale, n = e.newLocale;
			E(n !== t ? {
				detected: !0,
				newLocale: n
			} : { detected: !1 });
		}), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, ["offline_progress_update_from_bridge", "offline_delivery_end_from_bridge"], function() {
			B(o("WAWebOfflineHandler").OfflineMessageHandler.getResumeUIProgressBarType() === o("WAWebOfflineResumeTypes").ResumeUIProgressBarType.ButterBar);
		});
		var Q = null, X = n("cr:5735") ? c.jsx(n("cr:5735"), { alertType: M }) : null, Y = L.detected ? c.jsx(r("WAWebLocaleManualUpdateButterbar.react"), { locale: L.newLocale }) : null, J = T != null ? c.jsx(r("WAWebBrigadingButterBar.react"), {
			state: T,
			onDismiss: function() {
				o("WAWebUserPrefsGeneral").clearBrigadingstate(), D(null);
			}
		}) : null;
		return c.jsxs(r("WAWebVelocityTransitionGroup"), {
			transitionName: "butterbar",
			xstyle: _.container,
			testid: "chat-butterbar",
			children: [
				J,
				Q,
				X,
				Y,
				c.jsx(r("WAWebNoticeButterbar.react"), {
					shouldShow: V(),
					banner: r("WAWebNoticeModel").banner
				}),
				c.jsx(r("WAWebPrimaryButterbar.react"), {
					displayInfo: o("WAWebStreamModel").Stream.displayInfo,
					needsUpdate: o("WAWebStreamModel").Stream.needsUpdate,
					isHardRefresh: o("WAWebStreamModel").Stream.isHardRefresh,
					showResumeProgress: O,
					showNotify: y,
					notifyPermission: d,
					onShowNotifyDelay: W,
					onRequestPermissions: q,
					onEnableOfflineNotifications: U
				})
			]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.setShowButterBar;
		return c.jsx(g, {
			stream: o("WAWebStreamModel").Stream,
			notice: r("WAWebNoticeModel"),
			setShowButterBar: t
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
