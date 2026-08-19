__d("WAWebSubgroupHiddenVisibilityModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WAWebText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { paddingBottom20: {
		paddingBottom: "xv6tirj",
		$$css: !0
	} };
	function d() {
		var e = s._(
			/*BTDS*/
			""
		), t = s._(
			/*BTDS*/
			""
		), n = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
			href: o("WAWebFaqUrl").getCommunityGroupsVisibilityFaqUrl(),
			children: s._(
				/*BTDS*/
				""
			)
		}), r = s._(
			/*BTDS*/
			"",
			[s._param("learn-more-link", n)]
		);
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: o("WAWebModalManager").closeModalManager,
			title: e,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [u.jsx(o("WAWebText.react").WAWebTextMuted, {
				xstyle: c.paddingBottom20,
				children: t
			}), u.jsx(o("WAWebText.react").WAWebTextMuted, { children: r })] })
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
