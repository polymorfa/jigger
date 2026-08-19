__d("WAWebNewsletterFullPendingInvitesList.react", [
	"fbt",
	"WAWebBoolFunc",
	"WAWebContactsModal.react",
	"react",
	"react-compiler-runtime",
	"useWAWebNewsletterPendingInvites",
	"useWAWebNewsletterSubscribersContextMenu"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(17), n = e.newsletter, a = e.onCancel, i = e.onVerification, l = o("useWAWebNewsletterPendingInvites").useNewsletterPendingInvites(n), c;
		t[0] !== l ? (c = new Map(l.map(m)), t[0] = l, t[1] = c) : c = t[1];
		var p;
		t[2] !== n || t[3] !== i || t[4] !== c ? (p = {
			chat: n,
			isFullModal: !0,
			onVerification: i,
			followerInformation: c,
			newsletter: n
		}, t[2] = n, t[3] = i, t[4] = c, t[5] = p) : p = t[5];
		var _ = o("useWAWebNewsletterSubscribersContextMenu").useNewsletterSubscribersContextMenu(p), f = _[0], g = _[1], h;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (h = s._(
			/*BTDS*/
			""
		), t[6] = h) : h = t[6];
		var y;
		t[7] !== l ? (y = new Map(l.map(d)), t[7] = l, t[8] = y) : y = t[8];
		var C;
		t[9] !== g || t[10] !== a || t[11] !== l || t[12] !== y ? (C = u.jsx(r("WAWebContactsModal.react"), {
			title: h,
			onCancel: a,
			contacts: l,
			isParentGroup: !0,
			newsletterRoles: y,
			openContextOnClick: !0,
			contextEnabled: o("WAWebBoolFunc").returnFalse,
			contextMenu: o("WAWebBoolFunc").returnTrue,
			onContext: g
		}), t[9] = g, t[10] = a, t[11] = l, t[12] = y, t[13] = C) : C = t[13];
		var b;
		return t[14] !== C || t[15] !== f ? (b = u.jsxs(u.Fragment, { children: [C, f] }), t[14] = C, t[15] = f, t[16] = b) : b = t[16], b;
	}
	function d(e) {
		return [e.id, {
			pendingInvitee: !0,
			adminProfile: null
		}];
	}
	function m(e) {
		return [e.id, { newsletterRole: null }];
	}
	l.default = c;
}), 226);
