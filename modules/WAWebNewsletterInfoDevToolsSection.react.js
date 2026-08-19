__d("WAWebNewsletterInfoDevToolsSection.react", [
	"WAWebChatInfoDrawerSection.react",
	"WAWebDevOnlyBadge.react",
	"WAWebExternalLink.react",
	"WAWebText.react",
	"WAWebURLUtils",
	"WAWebWid",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = { marginTop10: {
		marginTop: "x1anpbxc",
		$$css: !0
	} };
	function c(e) {
		var t = o("react-compiler-runtime").c(5), n = e.chat, a;
		if (t[0] !== n.id) {
			var i = r("WAWebWid").user(n.id) || "";
			a = r("WAWebURLUtils").build("https://www.internalfb.com/intern/whatsapp/admin/channel_info", { cid: i }), t[0] = n.id, t[1] = a;
		} else a = t[1];
		var l = a, c;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (c = s.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, { label: "Developer Section" }), t[2] = c) : c = t[2];
		var d;
		return t[3] !== l ? (d = s.jsx(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
			title: c,
			xstyle: u.marginTop10,
			children: s.jsx(o("WAWebText.react").WAWebTextTitle, {
				as: "span",
				children: s.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: l,
					children: "Admin Tool - Channel Info"
				})
			})
		}), t[3] = l, t[4] = d) : d = t[4], d;
	}
	l.default = c;
}), 98);
