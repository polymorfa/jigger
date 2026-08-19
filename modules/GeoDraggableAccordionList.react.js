__d("GeoDraggableAccordionList.react", [
	"GeoPrivateBaseDraggableContainer.react",
	"GeoPrivateBaseList.react",
	"GeoPrivateDraggableAccordionListContainer.react",
	"GeoPrivateDraggableAccordionListItem.react",
	"GeoPrivateMakeComponent",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useMemo;
	function c(e) {
		var t = o("react-compiler-runtime").c(18), n = e.children, a = e.draggableAccordionListXStyle, i = e.itemIDs, l = e.onReorder, u;
		t[0] !== n ? (u = new Map(), s.Children.forEach(n, function(e) {
			u.set(e.props.itemID, e);
		}), t[0] = n, t[1] = u) : u = t[1];
		var c;
		if (t[2] !== u || t[3] !== i) {
			var d;
			t[5] !== u ? (d = function(t) {
				return u.has(t);
			}, t[5] = u, t[6] = d) : d = t[6], c = i.filter(d), t[2] = u, t[3] = i, t[4] = c;
		} else c = t[4];
		var m = c, p;
		t[7] !== u || t[8] !== m ? (p = [u, m], t[7] = u, t[8] = m, t[9] = p) : p = t[9];
		var _ = p, f = _[0], g = _[1], h;
		t[10] !== f || t[11] !== a ? (h = s.jsx(r("GeoPrivateBaseDraggableContainer.react"), { children: function(t) {
			var e = t.items;
			return s.jsx(r("GeoPrivateBaseList.react"), {
				xstyle: a,
				children: e.map(function(e, t) {
					var n, o = (n = f.get(e)) == null ? void 0 : n.props;
					return o != null ? s.createElement(r("GeoPrivateDraggableAccordionListItem.react"), babelHelpers.extends({}, o, {
						index: t,
						item: o.item,
						key: e
					})) : null;
				})
			});
		} }), t[10] = f, t[11] = a, t[12] = h) : h = t[12];
		var y;
		return t[13] !== g || t[14] !== i || t[15] !== l || t[16] !== h ? (y = s.jsx(r("GeoPrivateDraggableAccordionListContainer.react"), {
			filteredItemIDs: g,
			itemIDs: i,
			onReorder: l,
			children: h
		}), t[13] = g, t[14] = i, t[15] = l, t[16] = h, t[17] = y) : y = t[17], y;
	}
	var d = o("GeoPrivateMakeComponent").makeGeoComponent("GeoDraggableAccordionList", c);
	l.default = d;
}), 98);
