__d("WAWebClickableLink.react", [
	"WAWebClassnames",
	"WAWebExternalLink.react",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebStaticButtonA11y"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react"));
	function c(t) {
		var n, a = o("react-compiler-runtime").c(18), i = t.ariaLabel, l = t.children, s = t.className, c = t.href, d = t.onClick, m = t.tabIndex, p = t.title, _ = t.xstyle, f;
		a[0] !== c || a[1] !== d ? (f = async function(t) {
			c != null && (t.metaKey || t.altKey) || (t.preventDefault(), await d(t));
		}, a[0] = c, a[1] = d, a[2] = f) : f = a[2];
		var g = f, h = r("useWAWebStaticButtonA11y")(d), y = h[0], C = h[1], b = (n = t.testid) != null ? n : "clickable-link", v;
		a[3] !== s || a[4] !== _ ? (v = o("WAWebClassnames").classnamesConvertMeToStylexPlease(s, "x1xlr1w8 xt0b8zv xbvygy2 x17f7hit xp30eni xhmieyt", (e || (e = r("stylex")))(_)), a[3] = s, a[4] = _, a[5] = v) : v = a[5];
		var S = c != null ? c : void 0, R = m != null ? m : void 0, L = t["data-tab"], E;
		return a[6] !== i || a[7] !== C || a[8] !== l || a[9] !== y || a[10] !== g || a[11] !== b || a[12] !== v || a[13] !== S || a[14] !== R || a[15] !== L || a[16] !== p ? (E = u.jsx(o("WAWebExternalLink.react").ExternalLinkEl, babelHelpers.extends({}, C, {
			ref: y,
			"data-testid": b,
			className: v,
			href: S,
			onClick: g,
			role: "button",
			title: p,
			tabIndex: R,
			"data-tab": L,
			"aria-label": i,
			children: l
		})), a[6] = i, a[7] = C, a[8] = l, a[9] = y, a[10] = g, a[11] = b, a[12] = v, a[13] = S, a[14] = R, a[15] = L, a[16] = p, a[17] = E) : E = a[17], E;
	}
	l.default = c;
}), 98);
