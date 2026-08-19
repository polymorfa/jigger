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
	"react-compiler-runtime",
	"useWAWebListener",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState;
	function d(e, t, n, r, a, i, l) {
		var u, d, p, _, f = o("react-compiler-runtime").c(54), g;
		f[0] !== e.id || f[1] !== n ? (g = function() {
			var t;
			return (t = n ? o("WAWebStatusCollection").StatusCollection.get(e.id) : null) != null ? t : null;
		}, f[0] = e.id, f[1] = n, f[2] = g) : g = f[2];
		var h = c(g), y = h[0], C = h[1], b = c(e.id), v = b[0], S = b[1];
		if (e.id !== v) {
			var R;
			S(e.id), C((R = n ? o("WAWebStatusCollection").StatusCollection.get(e.id) : null) != null ? R : null);
		}
		var L;
		f[3] === Symbol.for("react.memo_cache_sentinel") ? (L = [
			"add",
			"remove",
			"change:msgsChanged"
		], f[3] = L) : L = f[3];
		var E;
		f[4] !== e.id ? (E = function() {
			var t;
			return C((t = o("WAWebStatusCollection").StatusCollection.get(e.id)) != null ? t : null);
		}, f[4] = e.id, f[5] = E) : E = f[5], o("useWAWebListener").useListener(n ? o("WAWebStatusCollection").StatusCollection : null, L, E);
		var k;
		f[6] !== e.id || f[7] !== t ? (k = function() {
			var n;
			return (n = t ? o("WAWebStatusCollection").StatusCollection.get(e.id) : null) != null ? n : null;
		}, f[6] = e.id, f[7] = t, f[8] = k) : k = f[8];
		var I = c(k), T = I[0], D = I[1];
		if (e.id !== v) {
			var x;
			D((x = t ? o("WAWebStatusCollection").StatusCollection.get(e.id) : null) != null ? x : null);
		}
		var $;
		f[9] === Symbol.for("react.memo_cache_sentinel") ? ($ = [
			"add",
			"remove",
			"change:msgsChanged"
		], f[9] = $) : $ = f[9];
		var P;
		f[10] !== e.id ? (P = function() {
			var t;
			return D((t = o("WAWebStatusCollection").StatusCollection.get(e.id)) != null ? t : null);
		}, f[10] = e.id, f[11] = P) : P = f[11], o("useWAWebListener").useListener(t ? o("WAWebStatusCollection").StatusCollection : null, $, P);
		var N;
		f[12] !== e.id || f[13] !== a ? (N = function() {
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
		}, f[12] = e.id, f[13] = a, f[14] = N) : N = f[14];
		var M = N, w = c(M), A = w[0], F = w[1];
		e.id !== v && F(M());
		var O;
		f[15] === Symbol.for("react.memo_cache_sentinel") ? (O = [
			"add",
			"remove",
			"change:msgsChanged"
		], f[15] = O) : O = f[15];
		var B;
		f[16] !== M ? (B = function() {
			return F(M());
		}, f[16] = M, f[17] = B) : B = f[17], o("useWAWebListener").useListener(a ? o("WAWebStatusCollection").StatusCollection : null, O, B);
		var W = (u = y != null ? y : A) != null ? u : T, q;
		f[18] === Symbol.for("react.memo_cache_sentinel") ? (q = ["unreadCount", "totalCount"], f[18] = q) : q = f[18];
		var U = o("useWAWebModelValues").useOptionalModelValues(W, q), V = (d = U == null ? void 0 : U.totalCount) != null ? d : 0, H = (p = U == null ? void 0 : U.unreadCount) != null ? p : 0, G;
		f[19] !== W || f[20] !== V || f[21] !== H || f[22] !== r ? (G = W != null && !r && V > 0 ? {
			totalCount: V,
			viewedCount: V - H
		} : void 0, f[19] = W, f[20] = V, f[21] = H, f[22] = r, f[23] = G) : G = f[23];
		var z = G, j;
		f[24] === Symbol.for("react.memo_cache_sentinel") ? (j = s._(
			/*BTDS*/
			""
		), f[24] = j) : j = f[24];
		var K = j, Q = m, X;
		f[25] !== e.id ? (X = function() {
			o("WAWebOpenStatusQuotedFlow").fetchAndOpenNewsletterStatus({
				newsletterJid: o("WAJids").toNewsletterJid(e.id.toString()),
				statusModelId: e.id,
				rowSection: o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.CHANNEL_THREAD_SCREEN,
				rowIndex: 0
			});
		}, f[25] = e.id, f[26] = X) : X = f[26];
		var Y = X, J;
		f[27] !== T || f[28] !== r || f[29] !== y || f[30] !== l || f[31] !== Y || f[32] !== A ? (J = function() {
			if (y != null && !r) {
				Y();
				return;
			}
			var e = A != null ? A : T;
			if (e != null && !r) {
				Q(e);
				return;
			}
			l();
		}, f[27] = T, f[28] = r, f[29] = y, f[30] = l, f[31] = Y, f[32] = A, f[33] = J) : J = f[33];
		var Z = J, ee;
		f[34] !== r || f[35] !== y || f[36] !== l || f[37] !== Y || f[38] !== A ? (ee = function() {
			if (y != null && !r) {
				Y();
				return;
			}
			if (A != null && !r) {
				Q(A);
				return;
			}
			l();
		}, f[34] = r, f[35] = y, f[36] = l, f[37] = Y, f[38] = A, f[39] = ee) : ee = f[39];
		var te = ee, ne;
		f[40] !== W || f[41] !== z || f[42] !== y || f[43] !== Y ? (ne = z != null && W != null ? {
			type: "viewStatus",
			onPress: function() {
				if (y != null) {
					Y();
					return;
				}
				Q(W);
			},
			label: K
		} : void 0, f[40] = W, f[41] = z, f[42] = y, f[43] = Y, f[44] = ne) : ne = f[44];
		var re = ne, oe = i && re != null, ae = (_ = W == null ? void 0 : W.id) != null ? _ : null, ie;
		return f[45] !== z || f[46] !== Z || f[47] !== te || f[48] !== y || f[49] !== oe || f[50] !== re || f[51] !== ae || f[52] !== A ? (ie = {
			activeStatusId: ae,
			chatStatusRing: z,
			handleAvatarClick: Z,
			handleLegacyAvatarClick: te,
			newsletterStatus: y,
			shouldUseStatusAvatarInteraction: oe,
			statusInteraction: re,
			userStatus: A
		}, f[45] = z, f[46] = Z, f[47] = te, f[48] = y, f[49] = oe, f[50] = re, f[51] = ae, f[52] = A, f[53] = ie) : ie = f[53], ie;
	}
	function m(e) {
		o("WAWebModalManager").ModalManager.openMedia(u.jsx(o("WAWebStatusQuotedFlowLoadable").StatusQuotedFlowLoadable, {
			status: e,
			onClose: p,
			rowSection: o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.CHAT_TOP_BAR,
			rowIndex: 0
		}), { transition: "status-modal" });
	}
	function p() {
		return o("WAWebModalManager").ModalManager.closeMedia();
	}
	l.useWAWebConversationHeaderStatus = d;
}), 226);
