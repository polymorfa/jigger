__d("WAWebNewsletterInfoDevToolsSection.react", [
	"WAWebChatInfoDrawerSection.react",
	"WAWebDevOnlyBadge.react",
	"WAWebExternalLink.react",
	"WAWebText.react",
	"WAWebURLUtils",
	"WAWebWid",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = { marginTop10: {
		marginTop: "x1anpbxc",
		$$css: !0
	} };
	function c(e) {
		var t = e.chat, n = r("WAWebWid").user(t.id) || "", a = r("WAWebURLUtils").build("https://www.internalfb.com/intern/whatsapp/admin/channel_info", { cid: n });
		return s.jsx(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
			title: s.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, { label: "Developer Section" }),
			xstyle: u.marginTop10,
			children: s.jsx(o("WAWebText.react").WAWebTextTitle, {
				as: "span",
				children: s.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: a,
					children: "Admin Tool - Channel Info"
				})
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
