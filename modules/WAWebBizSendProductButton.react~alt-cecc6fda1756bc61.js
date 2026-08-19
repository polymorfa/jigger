__d("WAWebBizSendProductButton.react", [
	"fbt",
	"WAWebChatRefreshedIcon.react",
	"WAWebDrawerButton.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { icon: {
		color: "xw63xux",
		$$css: !0
	} };
	function d(e) {
		var t = e.onClick, n = o("WAWebChatRefreshedIcon.react").ChatRefreshedIcon;
		return u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
			testid: "li-share-link",
			icon: u.jsx(n, { xstyle: c.icon }),
			onClick: t,
			children: s._(
				/*BTDS*/
				""
			)
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
