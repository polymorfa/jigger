__d("WAWebMediaEditorCanvasImage.react", [
	"ReactKonva",
	"WAWebMediaEditorUtilsFilterType",
	"WAWebMediaEditorUtilsFilters",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e = ["composition", "overlay"], s, u = s || (s = o("react")), c = s, d = c.useEffect, m = c.useState;
	function p(t) {
		var n = t.activeFilter, r = n === void 0 ? o("WAWebMediaEditorUtilsFilterType").FilterType.NONE : n, a = t.layer, i = a.getImage(), l = m(null), s = l[0], c = l[1];
		d(function() {
			s == null || s.cache();
		}, [i, s]);
		var p = o("WAWebMediaEditorUtilsFilters").getKonvaFilters(r), _ = o("WAWebMediaEditorUtilsFilters").getFilterPresets(r), f = _.composition, g = _.overlay, h = babelHelpers.objectWithoutPropertiesLoose(_, e);
		return u.jsxs(o("ReactKonva").Group, {
			width: a.getWidth(),
			height: a.getHeight(),
			children: [u.jsx(o("ReactKonva").Image, babelHelpers.extends({
				ref: c,
				width: a.getWidth(),
				height: a.getHeight(),
				image: a.getImage(),
				filters: p
			}, h)), u.jsx(o("ReactKonva").Rect, {
				width: a.getWidth(),
				height: a.getHeight(),
				fill: g,
				globalCompositeOperation: f
			})]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
