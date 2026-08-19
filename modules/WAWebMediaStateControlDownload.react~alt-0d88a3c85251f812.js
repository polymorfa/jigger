__d("WAWebMediaStateControlDownload.react", [
	"WAWebL10nFilesize",
	"WAWebMediaStateControlSharedStyles",
	"WDSIconIcDownload.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useImperativeHandle, m = c.useRef;
	function p(t) {
		var n = t.filesize, a = n === void 0 ? 0 : n, i = t.onClick, l = t.ref, s = t.tabIndex, c = s === void 0 ? 0 : s, p = m();
		return d(l, function() {
			return { getElement: function() {
				return p.current;
			} };
		}), a > 0 ? u.jsx("div", babelHelpers.extends({ ref: p }, (e || (e = r("stylex"))).props(r("WAWebMediaStateControlSharedStyles").controls), {
			"data-testid": "media-state-download",
			children: u.jsxs("button", babelHelpers.extends({ tabIndex: c }, e.props(r("WAWebMediaStateControlSharedStyles").btnMeta, r("WAWebMediaStateControlSharedStyles").cursorPointer), {
				onClick: i,
				children: [u.jsx(r("WDSIconIcDownload.react"), { xstyle: r("WAWebMediaStateControlSharedStyles").iconMeta }), u.jsx("span", { children: o("WAWebL10nFilesize").getL10nFilesize(a) })]
			}))
		})) : u.jsx("div", babelHelpers.extends({ ref: p }, (e || (e = r("stylex"))).props(r("WAWebMediaStateControlSharedStyles").controls), {
			"data-testid": "media-state-download",
			children: u.jsx("button", babelHelpers.extends({ tabIndex: c }, e.props(r("WAWebMediaStateControlSharedStyles").button, r("WAWebMediaStateControlSharedStyles").cursorPointer), {
				onClick: i,
				children: u.jsx(r("WDSIconIcDownload.react"), {})
			}))
		}));
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
