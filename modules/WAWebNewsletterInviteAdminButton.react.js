__d("WAWebNewsletterInviteAdminButton.react", [
	"fbt",
	"WAWebCellV2.react",
	"WAWebNewsletterAdminSelectionFlow.react",
	"WAWebNewsletterGatingUtils",
	"WAWebPlusIcon.react",
	"WAWebRoundShape.react",
	"WAWebText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useCallback;
	function d(e) {
		var t, n = o("react-compiler-runtime").c(5), r = e.chat, a;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (a = ["newsletterMetadata"], n[0] = a) : a = n[0];
		var i = o("useWAWebModelValues").useModelValues(r, a), l;
		n[1] !== i ? (l = function() {
			o("WAWebNewsletterAdminSelectionFlow.react").startAdminInviteFlow({ chat: i });
		}, n[1] = i, n[2] = l) : l = n[2];
		var s = l;
		if (!o("WAWebNewsletterGatingUtils").isNewsletterCreationEnabled() || !((t = i.newsletterMetadata) != null && t.iAmOwner())) return null;
		var c;
		return n[3] !== s ? (c = u.jsx(m, { onInviteAdmin: s }), n[3] = s, n[4] = c) : c = n[4], c;
	}
	function m(e) {
		var t = o("react-compiler-runtime").c(4), n = e.onInviteAdmin, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = u.jsx(r("WAWebRoundShape.react"), {
			theme: "group-modal",
			children: u.jsx(o("WAWebPlusIcon.react").PlusIcon, { directional: !0 })
		}), t[0] = a) : a = t[0];
		var i = a, l;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (l = u.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, { children: s._(
			/*BTDS*/
			""
		) }), t[1] = l) : l = t[1];
		var c;
		return t[2] !== n ? (c = u.jsx(r("WAWebCellV2.react"), {
			testid: "add-newsletter-admin",
			detailLeft: i,
			primary: l,
			onClick: n,
			size: "medium",
			isRefresh: !0
		}), t[2] = n, t[3] = c) : c = t[3], c;
	}
	l.default = d;
}), 226);
