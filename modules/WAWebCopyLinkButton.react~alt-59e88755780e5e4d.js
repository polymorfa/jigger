__d("WAWebCopyLinkButton.react", [
	"fbt",
	"WAWebCopyToClipboard",
	"WAWebDrawerButton.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WDSIconIcContentCopy.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { icon: {
		color: "xw63xux",
		$$css: !0
	} };
	function d(e, t) {
		var n = document.getElementById(e);
		n && o("WAWebCopyToClipboard").copyElementContentsToClipboard(n) ? o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
			/*BTDS*/
			""
		) })) : o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
			/*BTDS*/
			""
		) })), t != null && t();
	}
	function m(e) {
		var t = e.divider, n = e.elementId, a = e.onClick;
		if (!document.queryCommandSupported("copy")) return null;
		var i = r("WDSIconIcContentCopy.react");
		return u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
			testid: "li-copy-link",
			icon: u.jsx(i, { xstyle: c.icon }),
			onClick: function() {
				return d(n, a);
			},
			divider: t,
			children: s._(
				/*BTDS*/
				""
			)
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
