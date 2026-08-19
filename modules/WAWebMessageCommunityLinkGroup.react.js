__d("WAWebMessageCommunityLinkGroup.react", [
	"fbt",
	"WAWebGroupMetadataCollection",
	"WAWebMessageCommunityCard.react",
	"WAWebMessageCommunityLinkGroupTitle.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t, n, a = o("react-compiler-runtime").c(27), i = e.author, l = e.chat, c = e.clickable, d = e.templateParams, m = d[0], p;
		if (a[0] !== m) {
			var _ = r("WAWebGroupMetadataCollection").get(m);
			p = _ == null ? void 0 : _.participants.iAmAdmin(), a[0] = m, a[1] = p;
		} else p = a[1];
		var f = p, g = (t = l.groupMetadata) == null ? void 0 : t.membershipApprovalMode, h = (n = l.groupMetadata) == null ? void 0 : n.hiddenSubgroup, y;
		if (h === !0) {
			var C;
			a[2] === Symbol.for("react.memo_cache_sentinel") ? (C = s._(
				/*BTDS*/
				""
			), a[2] = C) : C = a[2], y = C;
		} else if (g === !0) {
			var b;
			a[3] === Symbol.for("react.memo_cache_sentinel") ? (b = s._(
				/*BTDS*/
				""
			), a[3] = b) : b = a[3], y = b;
		} else {
			var v;
			a[4] === Symbol.for("react.memo_cache_sentinel") ? (v = s._(
				/*BTDS*/
				""
			), a[4] = v) : v = a[4], y = v;
		}
		var S;
		a[5] === Symbol.for("react.memo_cache_sentinel") ? (S = s._(
			/*BTDS*/
			""
		), a[5] = S) : S = a[5];
		var R;
		a[6] === Symbol.for("react.memo_cache_sentinel") ? (R = s._(
			/*BTDS*/
			""
		), a[6] = R) : R = a[6];
		var L;
		a[7] !== y ? (L = [
			S,
			y,
			R
		], a[7] = y, a[8] = L) : L = a[8];
		var E = L, k;
		a[9] === Symbol.for("react.memo_cache_sentinel") ? (k = s._(
			/*BTDS*/
			""
		), a[9] = k) : k = a[9];
		var I;
		a[10] !== y ? (I = [k, y], a[10] = y, a[11] = I) : I = a[11];
		var T = I, D;
		a[12] !== f ? (D = f === !0 ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), a[12] = f, a[13] = D) : D = a[13];
		var x = D, $ = l.id, P;
		a[14] !== i || a[15] !== c || a[16] !== d ? (P = o("WAWebMessageCommunityLinkGroupTitle.react").communityLinkGroupTitle({
			templateParams: d,
			clickable: c,
			author: i
		}), a[14] = i, a[15] = c, a[16] = d, a[17] = P) : P = a[17];
		var N = f === !0 ? T : E, M;
		a[18] !== N ? (M = u.jsx(o("WAWebMessageCommunityCard.react").BulletedList, { items: N }), a[18] = N, a[19] = M) : M = a[19];
		var w = !f, A;
		return a[20] !== l.id || a[21] !== m || a[22] !== x || a[23] !== M || a[24] !== w || a[25] !== P ? (A = u.jsx(o("WAWebMessageCommunityCard.react").MessageCommunityCard, {
			communityId: m,
			subgroupId: $,
			title: P,
			body: M,
			footer: x,
			openNavigation: w
		}), a[20] = l.id, a[21] = m, a[22] = x, a[23] = M, a[24] = w, a[25] = P, a[26] = A) : A = a[26], A;
	}
	l.MessageCommunityLinkGroup = c;
}), 226);
