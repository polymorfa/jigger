__d("WAWebCopiableText.react", [
	"WAWebBox.react",
	"WAWebCopyToClipboard",
	"WAWebText.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WDSIconIcContentCopy.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState, c = { icon: {
		height: "x1q3kd3q",
		$$css: !0
	} };
	function d(e) {
		var t = e.children, n = e.showOnHover, a = e.text, i = u(!1), l = i[0], d = i[1], m = function(t) {
			t.stopPropagation(), o("WAWebCopyToClipboard").copyTextToClipboard(a), o("WAWebToastManager").ToastManager.open(s.jsx(o("WAWebToast.react").Toast, { msg: "Copied \"" + a + "\" to clipboard" }));
		}, p = function() {
			return d(!0);
		}, _ = function() {
			return d(!1);
		};
		return s.jsxs(r("WAWebBox.react"), {
			flex: !0,
			align: "center",
			onMouseEnter: p,
			onMouseLeave: _,
			children: [s.jsx(r("WAWebBox.react"), {
				as: "span",
				textWrap: "ellipsis",
				children: t
			}), (n !== !0 || l) && s.jsx(o("WAWebText.react").WAWebClickableText, {
				onClick: m,
				highlightOnHover: !0,
				title: "Copy \"" + a + "\" to clipboard",
				children: s.jsx(r("WDSIconIcContentCopy.react"), { iconXstyle: c.icon })
			})]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
