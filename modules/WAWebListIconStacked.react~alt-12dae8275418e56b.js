__d("WAWebListIconStacked.react", [
	"WAWebLabelCollection",
	"WAWebListUtils",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = 2, d = 12, m = 9, p = { container: {
		display: "x3nfvp2",
		alignItems: "x6s0dn4",
		position: "x1n2onr6",
		flexShrink: "x2lah0s",
		$$css: !0
	} };
	function _(t) {
		var n = t.horizontalOffset, o = n === void 0 ? m : n, a = t.labelIds, i = t.size, l = i === void 0 ? d : i, s = t.xstyle;
		if (a.length === 0) return null;
		var _ = f(a);
		if (_.length === 0) return null;
		var g = _.slice(0, c), h = g.length === 1 ? l : l + (g.length - 1) * o;
		if (g.length === 1) return u.jsx("span", babelHelpers.extends({ "data-testid": "list-icon-stacked" }, (e || (e = r("stylex"))).props(p.container, s), {
			style: {
				width: h,
				height: l
			},
			children: u.jsx("span", {
				className: "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x2lah0s x10l6tqk xhtitgo",
				style: {
					backgroundColor: g[0],
					width: l,
					height: l,
					left: 0
				}
			})
		}));
		var y = l / 2 - o, C = l / 2, b = l / 2 + 2.5;
		return u.jsxs("span", babelHelpers.extends({ "data-testid": "list-icon-stacked" }, (e || (e = r("stylex"))).props(p.container, s), {
			style: {
				width: h,
				height: l
			},
			children: [u.jsx("span", {
				className: "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x2lah0s x10l6tqk x1vjfegm",
				style: {
					backgroundColor: g[1],
					width: l,
					height: l,
					left: o,
					maskImage: "radial-gradient(circle at " + y + "px " + C + "px, transparent 0, transparent " + b + "px, black " + b + "px)",
					WebkitMaskImage: "radial-gradient(circle at " + y + "px " + C + "px, transparent 0, transparent " + b + "px, black " + b + "px)"
				}
			}), u.jsx("span", {
				className: "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x2lah0s x10l6tqk xhtitgo",
				style: {
					backgroundColor: g[0],
					width: l,
					height: l,
					left: 0
				}
			})]
		}));
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = [].concat(e).filter(function(e) {
			return !Number.isNaN(parseInt(e, 10));
		}).sort(function(e, t) {
			return parseInt(t, 10) - parseInt(e, 10);
		}), n = t.length >= c ? t : e, r = [];
		for (var a of n) {
			if (r.length >= c) break;
			var i = o("WAWebLabelCollection").LabelCollection.get(a);
			if (i != null) {
				var l = i.colorIndex != null ? o("WAWebListUtils").colorIndexToHex(i.colorIndex) : i.color;
				l != null && r.push(l);
			}
		}
		return r;
	}
	l.default = _;
}), 98);
