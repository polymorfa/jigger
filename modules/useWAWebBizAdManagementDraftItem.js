__d("useWAWebBizAdManagementDraftItem", [
	"CometRelay",
	"buildWAWebDraftTableItem",
	"react",
	"react-compiler-runtime",
	"useWAWebBizAdDeleteDraftModal",
	"useWAWebBizAdManagementDraftItem_draft.graphql",
	"useWAWebDraftThumbnailUrl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = u.useCallback, d = u.useEffect, m = u.useMemo, p = u.useState, _ = e !== void 0 ? e : e = n("useWAWebBizAdManagementDraftItem_draft.graphql");
	function f(e, t, n, a, i) {
		var l, s, u, c, m, f, g, h, y, C, b, v = o("react-compiler-runtime").c(33), S;
		v[0] !== e ? (S = e != null ? o("CometRelay").readInlineData(_, e) : null, v[0] = e, v[1] = S) : S = v[1];
		var R = S, L = p(!1), E = L[0], k = L[1], I;
		v[2] === Symbol.for("react.memo_cache_sentinel") ? (I = function() {
			return k(!0);
		}, v[2] = I) : I = v[2];
		var T = I, D;
		v[3] !== (R == null ? void 0 : R.id) || v[4] !== E || v[5] !== a ? (D = function() {
			var e = E ? null : R == null ? void 0 : R.id;
			a == null || a(e);
		}, v[3] = R == null ? void 0 : R.id, v[4] = E, v[5] = a, v[6] = D) : D = v[6];
		var x = R == null ? void 0 : R.id, $;
		v[7] !== E || v[8] !== a || v[9] !== x ? ($ = [
			E,
			x,
			a
		], v[7] = E, v[8] = a, v[9] = x, v[10] = $) : $ = v[10], d(D, $);
		var P = r("useWAWebBizAdDeleteDraftModal")(R == null ? void 0 : R.id, T, n), N = R == null || (l = R.spec) == null || (l = l.adgroup_spec) == null || (l = l[0]) == null || (l = l.creative) == null ? void 0 : l.object_story_spec, M = N == null || (s = N.link_data) == null || (s = s.child_attachments) == null || (s = s[0]) == null ? void 0 : s.picture, w = R == null || (u = R.spec) == null || (u = u.ad_account) == null ? void 0 : u.legacy_account_id, A = N == null || (c = N.link_data) == null ? void 0 : c.image_hash, F = N == null || (m = N.link_data) == null ? void 0 : m.picture, O = N == null || (f = N.video_data) == null ? void 0 : f.video_id, B = N == null || (g = N.video_data) == null ? void 0 : g.image_hash, W = N == null || (h = N.video_data) == null ? void 0 : h.image_url, q;
		v[11] !== B || v[12] !== W || v[13] !== M || v[14] !== w || v[15] !== A || v[16] !== F || v[17] !== O ? (q = {
			firstChildPicture: M,
			legacyAdAccountId: w,
			linkImageHash: A,
			linkPicture: F,
			videoId: O,
			videoImageHash: B,
			videoImageUrl: W
		}, v[11] = B, v[12] = W, v[13] = M, v[14] = w, v[15] = A, v[16] = F, v[17] = O, v[18] = q) : q = v[18];
		var U = r("useWAWebDraftThumbnailUrl")(q), V = U.isLoadingThumbnail, H = U.thumbnailUrl, G = (y = N == null || (C = N.link_data) == null ? void 0 : C.message) != null ? y : N == null || (b = N.video_data) == null ? void 0 : b.message, z;
		v[19] !== G || v[20] !== R || v[21] !== H || v[22] !== E || v[23] !== V || v[24] !== i || v[25] !== P || v[26] !== t ? (z = E ? null : r("buildWAWebDraftTableItem")(R, G, H, V, t, function() {
			var e = R == null ? void 0 : R.id;
			e != null && (i == null || i(e, R == null ? void 0 : R.flow_id));
		}, P), v[19] = G, v[20] = R, v[21] = H, v[22] = E, v[23] = V, v[24] = i, v[25] = P, v[26] = t, v[27] = z) : z = v[27];
		var j = z, K;
		v[28] !== j ? (K = j != null ? [j] : [], v[28] = j, v[29] = K) : K = v[29];
		var Q = K, X;
		return v[30] !== j || v[31] !== Q ? (X = {
			draftItem: j,
			pinnedItems: Q
		}, v[30] = j, v[31] = Q, v[32] = X) : X = v[32], X;
	}
	l.default = f;
}), 98);
