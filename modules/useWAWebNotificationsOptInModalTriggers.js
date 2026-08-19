__d("useWAWebNotificationsOptInModalTriggers", [
	"WAShiftTimer",
	"WATimeUtils",
	"WAWebABProps",
	"WAWebChatCollection",
	"WAWebModalManager",
	"WAWebNotificationsMissedCallTracker",
	"WAWebNotificationsModalVariant",
	"WAWebNotificationsOptInGating",
	"WAWebNux",
	"WAWebNuxAction",
	"WAWebOpenNotificationsOptInModal",
	"WAWebUserPrefsNotifications",
	"WAWebWhatsNewGatingUtils",
	"WAWebWhatsNewNux",
	"nullthrows",
	"react",
	"react-compiler-runtime",
	"useLazyRef",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useRef;
	function d() {
		m(), f(), g();
	}
	function m() {
		var e = o("react-compiler-runtime").c(3), t = r("useLazyRef")(p), n, a;
		e[0] !== t ? (n = function() {
			var e;
			if (o("WAWebNotificationsOptInGating").isNotificationsOptInEligible((e = window.Notification) == null ? void 0 : e.permission)) {
				var n = t.current;
				return n.onOrBefore(o("WAWebNotificationsModalVariant").POST_LOAD_OPT_IN_DELAY_MS, void 0), (function() {
					n.cancel();
				});
			}
		}, a = [t], e[0] = t, e[1] = n, e[2] = a) : (n = e[1], a = e[2]), u(n, a);
	}
	function p() {
		return new (o("WAShiftTimer")).ShiftTimer(_);
	}
	function _() {
		var e;
		o("WAWebNotificationsOptInGating").isNotificationsOptInEligible((e = window.Notification) == null ? void 0 : e.permission) && o("WAWebNotificationsOptInGating").shouldShowOptInModalNow() && (o("WAWebWhatsNewGatingUtils").isWhatsNewAutoModalEnabled() && o("WAWebWhatsNewNux").shouldShowWhatsNewNux(o("WAWebWhatsNewGatingUtils").getWhatsNewAutoModalCooldownDays()) || o("WAWebNotificationsModalVariant").getNotificationsModalVariant() === o("WAWebNotificationsModalVariant").NotificationsModalVariant.TimeBased && C(o("WAWebNotificationsModalVariant").NotificationsOptInModalCopy.PostLoad));
	}
	function f() {
		var e = o("react-compiler-runtime").c(1), t = c(null), n;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (n = function() {
			var e;
			if (o("WAWebNotificationsOptInGating").isNotificationsOptInEligible((e = window.Notification) == null ? void 0 : e.permission)) {
				if (document.visibilityState === "hidden") {
					t.current = o("WAWebChatCollection").ChatCollection.getUnreadCount();
					return;
				}
				var n = t.current;
				t.current = null;
				var a = o("WAWebChatCollection").ChatCollection.getUnreadCount(), i = o("WAWebNotificationsModalVariant").getNotificationsModalVariant(), l = o("WAWebNotificationsModalVariant").shouldShowReturnToUnreadOptInModal({
					variant: i,
					hasNewUnreadWhileHidden: n != null && a > n,
					hasOptInNuxBeenShown: !o("WAWebNotificationsOptInGating").shouldShowOptInModalNow()
				});
				l && C(o("WAWebNotificationsModalVariant").NotificationsOptInModalCopy.MissedMessages, a - r("nullthrows")(n));
			}
		}, e[0] = n) : n = e[0], o("useWAWebListener").useListener(document, "visibilitychange", n);
	}
	function g() {
		o("useWAWebListener").useListener(document, "visibilitychange", h);
	}
	function h() {
		var e;
		if (!document.hidden && o("WAWebNotificationsOptInGating").isNotificationsOptInEligible((e = window.Notification) == null ? void 0 : e.permission)) {
			var t = o("WAWebNotificationsModalVariant").getNotificationsModalVariant(), n = o("WAWebNotificationsModalVariant").shouldShowAfterMissedCallOptInModal({
				variant: t,
				getHasRecentMissedCallWhileHidden: y,
				hasOptInNuxBeenShown: !o("WAWebNotificationsOptInGating").shouldShowOptInModalNow()
			});
			n && C(o("WAWebNotificationsModalVariant").NotificationsOptInModalCopy.MissedCall);
		}
	}
	function y() {
		return o("WAWebNotificationsMissedCallTracker").consumeRecentMissedCallWhileHidden(o("WATimeUtils").unixTime());
	}
	function C(e, t) {
		o("WAWebModalManager").ModalManager.exists(function(n) {
			n || o("WAWebOpenNotificationsOptInModal").openNotificationsOptInModal(o("WAWebABProps").getABPropConfigValue("web_notifications_banner_new_logic_enabled"), e, {
				missedCount: t,
				onModalResolved: function() {
					o("WAWebNuxAction").viewNux(o("WAWebNux").NUX.NOTIFICATIONS_OPT_IN), o("WAWebUserPrefsNotifications").recordOptInModalShown();
				}
			});
		});
	}
	l.default = d;
}), 98);
