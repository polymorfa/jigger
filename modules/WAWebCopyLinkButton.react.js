__d("WAWebCopyLinkButton.react", [
	"fbt",
	"WAWebCopyToClipboard",
	"WAWebDrawerButton.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WDSIconIcContentCopy.react",
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(8), n = e.divider, a = e.elementId, i = e.onClick;
		if (!document.queryCommandSupported("copy")) return null;
		var l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = u.jsx(r("WDSIconIcContentCopy.react"), { xstyle: c.icon }), t[0] = l) : l = t[0];
		var m;
		t[1] !== a || t[2] !== i ? (m = function() {
			return d(a, i);
		}, t[1] = a, t[2] = i, t[3] = m) : m = t[3];
		var p;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
			/*BTDS*/
			""
		), t[4] = p) : p = t[4];
		var _;
		return t[5] !== n || t[6] !== m ? (_ = u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
			testid: "li-copy-link",
			icon: l,
			onClick: m,
			divider: n,
			children: p
		}), t[5] = n, t[6] = m, t[7] = _) : _ = t[7], _;
	}
	l.default = m;
}), 226);
