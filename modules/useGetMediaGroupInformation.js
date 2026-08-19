__d("useGetMediaGroupInformation", [
	"I64",
	"MWMessageListDisplayContext.react",
	"ReQL",
	"ReQLSuspense",
	"gkx",
	"react",
	"react-compiler-runtime",
	"shouldUseImageGrouping",
	"useMediaDownloadStatusForGroup",
	"useReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = (u || (u = o("react"))).useMemo, d = 20;
	function m(t, n, a) {
		var l, u, c = o("react-compiler-runtime").c(50), m = (e || (e = r("useReStore")))(), h = t.groupId, y = t.threadKey, C;
		if (c[0] !== t.groupIndex) {
			var b;
			C = (s || (s = o("I64"))).to_int32((b = t.groupIndex) != null ? b : (s || (s = o("I64"))).zero), c[0] = t.groupIndex, c[1] = C;
		} else C = c[1];
		var v = C, S;
		if (c[2] !== t.groupSize) {
			var R;
			S = (s || (s = o("I64"))).to_int32((R = t.groupSize) != null ? R : (s || (s = o("I64"))).zero), c[2] = t.groupSize, c[3] = S;
		} else S = c[3];
		var L = S, E = o("MWMessageListDisplayContext.react").useMWMessageListDisplayContext(), k = E.isPinnedMessageList, I;
		c[4] !== n || c[5] !== t ? (I = r("shouldUseImageGrouping")(t, n), c[4] = n, c[5] = t, c[6] = I) : I = c[6];
		var T = I, D = T && r("gkx")("25111"), x = T ? D ? Math.min(L, d) : Math.min(L, 4) : 0, $, P;
		c[7] !== m || c[8] !== h || c[9] !== T || c[10] !== y ? ($ = function() {
			return T && h != null ? o("ReQL").fromTableDescending(m.tables.messages.index("messageGroupId")).getKeyRange(h).map(function(e) {
				var t, n = (t = o("ReQLSuspense").first(o("ReQL").fromTableDescending(m.tables.attachments).getKeyRange(y, e.messageId), i.id + ":111")) != null ? t : null, r = n != null ? o("ReQLSuspense").first(o("ReQL").fromTableDescending(m.tables.client_media_status).getKeyRange(n.attachmentFbid), i.id + ":118") : void 0;
				return {
					attachment: n,
					mediaStatus: r,
					message: e
				};
			}) : o("ReQL").empty();
		}, P = [
			m,
			h,
			y,
			T
		], c[7] = m, c[8] = h, c[9] = T, c[10] = y, c[11] = $, c[12] = P) : ($ = c[11], P = c[12]);
		var N = o("ReQLSuspense").useArray($, P, i.id + ":103"), M;
		if (c[13] !== N) {
			var w = new Set(), A = N.filter(function(e) {
				return w.has(e.message.messageId) ? !1 : (w.add(e.message.messageId), !0);
			});
			M = A.sort(g), c[13] = N, c[14] = M;
		} else M = c[14];
		var F = M, O = T && F.length >= 1 ? (l = F[0]) == null ? void 0 : l.message : null, B, W;
		c[15] !== m || c[16] !== O || c[17] !== T ? (B = function() {
			if (!T || O == null) return o("ReQL").empty();
			var e = o("ReQL").fromTableAscending(m.tables.messages.index("messageDisplayOrder")).getKeyRange(O.threadKey).bounds({ gte: o("ReQL").key(O.primarySortKey) });
			return e.filter(function(e) {
				return e.groupId !== O.groupId;
			}).filter(f);
		}, W = [
			m,
			O,
			T
		], c[15] = m, c[16] = O, c[17] = T, c[18] = B, c[19] = W) : (B = c[18], W = c[19]);
		var q = o("ReQLSuspense").useFirst(B, W, i.id + ":158"), U = r("useMediaDownloadStatusForGroup")(F, T, a), V = U.attachmentsToRetryDownload, H = U.mediaDownloadErrorsCount, G = U.mediaDownloadStatuses;
		if (T !== !0) return null;
		var z;
		if (c[20] !== ((u = F[0]) == null || (u = u.message) == null ? void 0 : u.groupIndex) || c[21] !== F.length) {
			var j, K, Q;
			z = F.length >= 1 ? (s || (s = o("I64"))).to_int32((j = (K = F[0]) == null || (K = K.message) == null ? void 0 : K.groupIndex) != null ? j : (s || (s = o("I64"))).zero) : 0, c[20] = (Q = F[0]) == null || (Q = Q.message) == null ? void 0 : Q.groupIndex, c[21] = F.length, c[22] = z;
		} else z = c[22];
		var X = z, Y = v === X;
		if (k && !Y) return null;
		var J;
		if (c[23] !== F) {
			J = new Map();
			for (var Z of F) Z.message.groupIndex != null && J.set((s || (s = o("I64"))).to_int32(Z.message.groupIndex), Z);
			c[23] = F, c[24] = J;
		} else J = c[24];
		var ee;
		if (c[25] !== J || c[26] !== x) {
			ee = new Array(x);
			for (var te = 0; te < x; ++te) {
				var ne, re, oe = J.get(te);
				ee[te] = {
					attachment: (ne = oe == null ? void 0 : oe.attachment) != null ? ne : null,
					message: (re = oe == null ? void 0 : oe.message) != null ? re : null
				};
			}
			c[25] = J, c[26] = x, c[27] = ee;
		} else ee = c[27];
		var ae = F != null && F.length > 0 ? F[F.length - 1].message : null, ie = q != null ? q : null, le;
		c[28] !== F ? (le = F.every(_), c[28] = F, c[29] = le) : le = c[29];
		var se;
		c[30] !== F ? (se = F.some(p), c[30] = F, c[31] = se) : se = c[31];
		var ue = F.length !== L, ce = q == null, de;
		return c[32] !== V || c[33] !== h || c[34] !== v || c[35] !== L || c[36] !== Y || c[37] !== D || c[38] !== H || c[39] !== G || c[40] !== F || c[41] !== ee || c[42] !== ie || c[43] !== le || c[44] !== se || c[45] !== ue || c[46] !== ce || c[47] !== ae || c[48] !== x ? (de = {
			attachmentsToRetryDownload: V,
			groupId: h,
			groupIndex: v,
			groupSize: L,
			groupsLastMessage: ae,
			groupsNextMessage: ie,
			hasAllMessagesSent: le,
			hasMissingMedia: se,
			hasMissingMessages: ue,
			isFirstMediaMessageInGroup: Y,
			isGridLayout: D,
			isMediaGroupLastMessage: ce,
			mediaDownloadErrorsCount: H,
			mediaDownloadStatuses: G,
			messagesAndAttachments: F,
			messagesAndAttachmentsShownInGroup: ee,
			tileSize: x
		}, c[32] = V, c[33] = h, c[34] = v, c[35] = L, c[36] = Y, c[37] = D, c[38] = H, c[39] = G, c[40] = F, c[41] = ee, c[42] = ie, c[43] = le, c[44] = se, c[45] = ue, c[46] = ce, c[47] = ae, c[48] = x, c[49] = de) : de = c[49], de;
	}
	function p(e) {
		return e.attachment == null;
	}
	function _(e) {
		return (s || (s = o("I64"))).equal(e.message.sendStatusV2, s.of_int32(2));
	}
	function f(e) {
		return !e.isAdminMessage;
	}
	function g(e, t) {
		var n, r;
		return (s || (s = o("I64"))).to_int32((n = e.message.groupIndex) != null ? n : (s || (s = o("I64"))).zero) - s.to_int32((r = t.message.groupIndex) != null ? r : (s || (s = o("I64"))).zero);
	}
	l.default = m;
}), 98);
