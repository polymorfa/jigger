__d("WAWebMediaEditorToolbarFilterOption.react", [
	"ReactKonva",
	"WAWebFlex.react",
	"WAWebMediaEditorUtilsFilters",
	"WDSIconIcCheck.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e = ["composition", "overlay"], s, u = s || (s = o("react")), c = s, d = c.useEffect, m = c.useState, p = { checkmarkIconStyle: {
		position: "x10l6tqk",
		color: "x1awj2ng",
		opacity: "x1hc1fzr",
		zIndex: "xhtitgo",
		$$css: !0
	} };
	function _(t) {
		var n, a = t.filter, i = t.imageUrl, l = t.onFilterChange, s = t.onHover, c = t.selected, _ = {
			0: "x1nxh6w3 x1v9usgg x1u78mur x2b8uid x1vvkbs x1mzt3pk x1tiyuxx",
			1: "x1nxh6w3 x1v9usgg x1u78mur x2b8uid x1vvkbs x1mzt3pk x1tiyuxx x1fh42yi"
		}[!!c << 0], f = (n = o("WAWebMediaEditorUtilsFilters")).getFilterValue(a), g = f.toString() + " filter", h = m(null), y = h[0], C = h[1];
		d(function() {
			i && (y == null || y.cache());
		}, [i, y]);
		var b = function() {
			return l(a);
		}, v = function() {
			return s(a);
		}, S = function() {
			return s(null);
		}, R = n.getKonvaFilters(a), L = n.getFilterPresets(a), E = L.composition, k = L.overlay, I = babelHelpers.objectWithoutPropertiesLoose(L, e);
		return u.jsx(o("WAWebFlex.react").FlexColumn, { children: u.jsxs("div", {
			"data-testid": "filter-option-" + String(a).toLowerCase(),
			className: "x1n2onr6 x1247r65 x1mgsydn x78zum5 xdt5ytf x6s0dn4",
			onClick: b,
			onKeyPress: b,
			onTouchStart: b,
			role: "button",
			tabIndex: 0,
			"aria-label": g,
			"aria-pressed": c,
			onMouseOver: v,
			onMouseLeave: S,
			onFocus: v,
			onBlur: S,
			children: [u.jsxs("div", {
				className: "x1n2onr6 x1useyqa xsdox4t xbrszos xea3l6g x18isctg x2q3nzr x6ikm8r x10wlt62 x1277o0a x14snt5h x18br7mf",
				children: [u.jsx(o("ReactKonva").Stage, {
					width: n.IMAGE_DIMENSION,
					height: n.IMAGE_DIMENSION,
					children: u.jsx(o("ReactKonva").Layer, { children: i && u.jsxs(o("ReactKonva").Group, { children: [u.jsx(o("ReactKonva").Image, babelHelpers.extends({
						ref: C,
						image: i,
						width: o("WAWebMediaEditorUtilsFilters").IMAGE_DIMENSION,
						height: o("WAWebMediaEditorUtilsFilters").IMAGE_DIMENSION,
						crop: {
							x: Math.max((i.width - i.height) / 2, 0),
							y: Math.max((i.height - i.width) / 2, 0),
							width: Math.min(i.width, i.height),
							height: Math.min(i.width, i.height)
						},
						filters: R
					}, I)), u.jsx(o("ReactKonva").Rect, {
						width: o("WAWebMediaEditorUtilsFilters").IMAGE_DIMENSION,
						height: o("WAWebMediaEditorUtilsFilters").IMAGE_DIMENSION,
						fill: k,
						globalCompositeOperation: E
					})] }) })
				}), c && u.jsx("div", {
					className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1jxbiih x18km98s xbrszos xea3l6g x18isctg x2q3nzr x78zum5 x6s0dn4 xl56j7k x1vjfegm",
					children: u.jsx(r("WDSIconIcCheck.react"), { xstyle: p.checkmarkIconStyle })
				})]
			}), u.jsx("span", {
				className: _,
				children: f
			})]
		}) });
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 98);
