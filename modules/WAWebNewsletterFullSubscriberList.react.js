__d("WAWebNewsletterFullSubscriberList.react", [
	"fbt",
	"WAWebBoolFunc",
	"WAWebContactsModal.react",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterSubscriberList.react",
	"WAWebUserPrefsNewsletter",
	"react",
	"react-compiler-runtime",
	"useWAWebNewsletterSubscribers",
	"useWAWebNewsletterSubscribersContextMenu"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useCallback;
	function d(e) {
		var t = o("react-compiler-runtime").c(26), n = e.newsletter, a = e.onCancel, i = e.onTransferOwnershipSelection, l = e.onVerification, c;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (c = o("WAWebNewsletterGatingUtils").getMaxSubscriberNumber(), t[0] = c) : c = t[0];
		var d;
		t[1] !== n ? (d = {
			newsletter: n,
			count: c,
			cacheType: o("WAWebUserPrefsNewsletter").ValidCachedNewsletterSubscriberKeys.FULL,
			includeMeContact: !0
		}, t[1] = n, t[2] = d) : d = t[2];
		var f = o("useWAWebNewsletterSubscribers").useNewsletterSubscribers(d), g = f[0], h;
		t[3] !== g ? (h = new Map(g.map(_)), t[3] = g, t[4] = h) : h = t[4];
		var y = h, C;
		t[5] !== g ? (C = new Map(g.map(p)), t[5] = g, t[6] = C) : C = t[6];
		var b;
		t[7] !== n || t[8] !== i || t[9] !== l || t[10] !== C ? (b = {
			chat: n,
			isFullModal: !0,
			onVerification: l,
			followerInformation: C,
			newsletter: n,
			onTransferOwnershipSelection: i
		}, t[7] = n, t[8] = i, t[9] = l, t[10] = C, t[11] = b) : b = t[11];
		var v = o("useWAWebNewsletterSubscribersContextMenu").useNewsletterSubscribersContextMenu(b), S = v[0], R = v[1], L;
		t[12] !== (n == null ? void 0 : n.newsletterMetadata) ? (L = function(t) {
			return o("WAWebNewsletterSubscriberList.react").showContextForCell(t, n == null ? void 0 : n.newsletterMetadata);
		}, t[12] = n == null ? void 0 : n.newsletterMetadata, t[13] = L) : L = t[13];
		var E = L, k;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (k = s._(
			/*BTDS*/
			""
		), t[14] = k) : k = t[14];
		var I;
		t[15] !== g ? (I = g.map(m), t[15] = g, t[16] = I) : I = t[16];
		var T;
		t[17] !== R || t[18] !== y || t[19] !== a || t[20] !== E || t[21] !== I ? (T = u.jsx(r("WAWebContactsModal.react"), {
			title: k,
			onCancel: a,
			contacts: I,
			newsletterRoles: y,
			isNewsletter: !0,
			openContextOnClick: !0,
			contextEnabled: o("WAWebBoolFunc").returnFalse,
			contextMenu: E,
			onContext: R
		}), t[17] = R, t[18] = y, t[19] = a, t[20] = E, t[21] = I, t[22] = T) : T = t[22];
		var D;
		return t[23] !== T || t[24] !== S ? (D = u.jsxs(u.Fragment, { children: [T, S] }), t[23] = T, t[24] = S, t[25] = D) : D = t[25], D;
	}
	function m(e) {
		var t = e.contact;
		return t;
	}
	function p(e) {
		var t = e.contact, n = e.role;
		return [t.id, { newsletterRole: n }];
	}
	function _(e) {
		var t = e.adminProfile, n = e.contact, r = e.role, o = n.id;
		return [o, {
			role: r,
			adminProfile: t
		}];
	}
	l.default = d;
}), 226);
