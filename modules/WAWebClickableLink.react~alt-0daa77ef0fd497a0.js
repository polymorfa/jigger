__d("WAWebClickableLink.react", [
	"WAWebClassnames",
	"WAWebExternalLink.react",
	"react",
	"stylex",
	"useWAWebStaticButtonA11y"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react"));
	function c(t) {
		var n, a = t.ariaLabel, i = t.children, l = t.className, s = t.href, c = t.onClick, d = t.tabIndex, m = t.title, p = t.xstyle, _ = async function(t) {
			s != null && (t.metaKey || t.altKey) || (t.preventDefault(), await c(t));
		}, f = r("useWAWebStaticButtonA11y")(c), g = f[0], h = f[1];
		return u.jsx(o("WAWebExternalLink.react").ExternalLinkEl, babelHelpers.extends({}, h, {
			ref: g,
			"data-testid": (n = t.testid) != null ? n : "clickable-link",
			className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(l, "x1xlr1w8 xt0b8zv xbvygy2 x17f7hit xp30eni xhmieyt", (e || (e = r("stylex")))(p)),
			href: s != null ? s : void 0,
			onClick: _,
			role: "button",
			title: m,
			tabIndex: d != null ? d : void 0,
			"data-tab": t["data-tab"],
			"aria-label": a,
			children: i
		}));
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
