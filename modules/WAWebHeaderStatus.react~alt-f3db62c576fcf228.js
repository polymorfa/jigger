__d("WAWebHeaderStatus.react", [
	"fbt",
	"WAJids",
	"WAWebApiContact",
	"WAWebModalManager",
	"WAWebOpenStatusQuotedFlow",
	"WAWebStatusCollection",
	"WAWebStatusGatingUtils",
	"WAWebStatusQuotedFlowLoadable",
	"WAWebWamEnumStatusRowSection",
	"WAWebWidFactory",
	"react",
	"useWAWebListener",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState;
	function d(e, t, n, r, a, i, l) {
		var d, m, p, _, f = c(function() {
			var t;
			return (t = n ? o("WAWebStatusCollection").StatusCollection.get(e.id) : null) != null ? t : null;
		}), g = f[0], h = f[1], y = c(e.id), C = y[0], b = y[1];
		if (e.id !== C) {
			var v;
			b(e.id), h((v = n ? o("WAWebStatusCollection").StatusCollection.get(e.id) : null) != null ? v : null);
		}
		o("useWAWebListener").useListener(n ? o("WAWebStatusCollection").StatusCollection : null, [
			"add",
			"remove",
			"change:msgsChanged"
		], function() {
			var t;
			return h((t = o("WAWebStatusCollection").StatusCollection.get(e.id)) != null ? t : null);
		});
		var S = c(function() {
			var n;
			return (n = t ? o("WAWebStatusCollection").StatusCollection.get(e.id) : null) != null ? n : null;
		}), R = S[0], L = S[1];
		if (e.id !== C) {
			var E;
			L((E = t ? o("WAWebStatusCollection").StatusCollection.get(e.id) : null) != null ? E : null);
		}
		o("useWAWebListener").useListener(t ? o("WAWebStatusCollection").StatusCollection : null, [
			"add",
			"remove",
			"change:msgsChanged"
		], function() {
			var t;
			return L((t = o("WAWebStatusCollection").StatusCollection.get(e.id)) != null ? t : null);
		});
		var k = function() {
			if (!a) return null;
			var t = o("WAWebStatusCollection").StatusCollection.get(e.id);
			if (t != null) return o("WAWebStatusGatingUtils").isStatusRingOutsideChatlistEnabled() ? t : null;
			if (e.id.isRegularUser()) {
				var n = o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(e.id));
				if (n != null) {
					var r, i = (r = o("WAWebStatusCollection").StatusCollection.get(o("WAWebWidFactory").asUserWidOrThrow(n))) != null ? r : null;
					return i != null && o("WAWebStatusGatingUtils").isStatusRingOutsideChatlistEnabled() ? i : null;
				}
			}
			return null;
		}, I = c(k), T = I[0], D = I[1];
		e.id !== C && D(k()), o("useWAWebListener").useListener(a ? o("WAWebStatusCollection").StatusCollection : null, [
			"add",
			"remove",
			"change:msgsChanged"
		], function() {
			return D(k());
		});
		var x = (d = g != null ? g : T) != null ? d : R, $ = o("useWAWebModelValues").useOptionalModelValues(x, ["unreadCount", "totalCount"]), P = (m = $ == null ? void 0 : $.totalCount) != null ? m : 0, N = (p = $ == null ? void 0 : $.unreadCount) != null ? p : 0, M = x != null && !r && P > 0 ? {
			totalCount: P,
			viewedCount: P - N
		} : void 0, w = s._(
			/*BTDS*/
			""
		), A = function(t) {
			o("WAWebModalManager").ModalManager.openMedia(u.jsx(o("WAWebStatusQuotedFlowLoadable").StatusQuotedFlowLoadable, {
				status: t,
				onClose: function() {
					return o("WAWebModalManager").ModalManager.closeMedia();
				},
				rowSection: o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.CHAT_TOP_BAR,
				rowIndex: 0
			}), { transition: "status-modal" });
		}, F = function() {
			o("WAWebOpenStatusQuotedFlow").fetchAndOpenNewsletterStatus({
				newsletterJid: o("WAJids").toNewsletterJid(e.id.toString()),
				statusModelId: e.id,
				rowSection: o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.CHANNEL_THREAD_SCREEN,
				rowIndex: 0
			});
		}, O = function() {
			if (g != null && !r) {
				F();
				return;
			}
			var e = T != null ? T : R;
			if (e != null && !r) {
				A(e);
				return;
			}
			l();
		}, B = function() {
			if (g != null && !r) {
				F();
				return;
			}
			if (T != null && !r) {
				A(T);
				return;
			}
			l();
		}, W = M != null && x != null ? {
			type: "viewStatus",
			onPress: function() {
				if (g != null) {
					F();
					return;
				}
				A(x);
			},
			label: w
		} : void 0, q = i && W != null;
		return {
			activeStatusId: (_ = x == null ? void 0 : x.id) != null ? _ : null,
			chatStatusRing: M,
			handleAvatarClick: O,
			handleLegacyAvatarClick: B,
			newsletterStatus: g,
			shouldUseStatusAvatarInteraction: q,
			statusInteraction: W,
			userStatus: T
		};
	}
	l.useWAWebConversationHeaderStatus = d;
}), 226);
