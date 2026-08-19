__d("WAWebNewsletterAdminProfileDetailsDrawer.react", [
	"fbt",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebNewsletterAdminProfileDetailsView.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.newsletterAdminProfile, n = e.onClose;
		return u.jsxs(r("WAWebDrawer.react"), { children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			title: s._(
				/*BTDS*/
				""
			),
			onCancel: n
		}), u.jsx(r("WAWebDrawerBody.react"), { children: u.jsx(r("WAWebDrawerSection.react"), {
			theme: "no-padding",
			children: u.jsx("div", {
				className: "x1sk1jro x1ci70gm",
				children: u.jsx(r("WAWebNewsletterAdminProfileDetailsView.react"), { newsletterAdminProfile: t })
			})
		}) })] });
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
