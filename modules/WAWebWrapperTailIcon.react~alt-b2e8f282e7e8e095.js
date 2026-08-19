__d("WAWebWrapperTailIcon.react", [
	"WAWebSvgComponentBase",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = [
		"height",
		"iconXstyle",
		"name",
		"viewBox",
		"width"
	], s = [
		"height",
		"iconXstyle",
		"name",
		"viewBox",
		"width"
	], u, c, d = c || (c = o("react")), m = "tail-in", p = "tail-out";
	function _(t) {
		var n = t.height, a = t.iconXstyle, i = t.name, l = t.viewBox, s = t.width, c = babelHelpers.objectWithoutPropertiesLoose(t, e), p;
		if (l) {
			var _ = l.height, f = _ === void 0 ? 0 : _, g = l.width, h = g === void 0 ? 0 : g, y = l.x, C = y === void 0 ? 0 : y, b = l.y, v = b === void 0 ? 0 : b;
			p = [
				C,
				v,
				h,
				f
			].join(" ");
		}
		var S = 13, R = 8;
		return (n != null || s != null) && (S = n, R = s), d.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({ name: i != null ? i : m }, c, { children: d.jsxs("svg", babelHelpers.extends({
			viewBox: p != null ? p : "0 0 8 13",
			height: S,
			width: R,
			preserveAspectRatio: "xMidYMid meet"
		}, (u || (u = r("stylex"))).props(a), {
			version: "1.1",
			x: "0px",
			y: "0px",
			enableBackground: "new 0 0 8 13",
			children: [
				d.jsx("title", { children: i != null ? i : m }),
				d.jsx("path", {
					className: "x5eawxs",
					fill: "#0000000",
					d: "M1.533,3.568L8,12.193V1H2.812 C1.042,1,0.474,2.156,1.533,3.568z"
				}),
				d.jsx("path", {
					fill: "currentColor",
					d: "M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"
				})
			]
		})) }));
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.height, n = e.iconXstyle, a = e.name, i = e.viewBox, l = e.width, c = babelHelpers.objectWithoutPropertiesLoose(e, s), m;
		if (i) {
			var _ = i.height, f = _ === void 0 ? 0 : _, g = i.width, h = g === void 0 ? 0 : g, y = i.x, C = y === void 0 ? 0 : y, b = i.y, v = b === void 0 ? 0 : b;
			m = [
				C,
				v,
				h,
				f
			].join(" ");
		}
		var S = 13, R = 8;
		return (t != null || l != null) && (S = t, R = l), d.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({ name: a != null ? a : p }, c, { children: d.jsxs("svg", babelHelpers.extends({
			viewBox: m != null ? m : "0 0 8 13",
			height: S,
			width: R,
			preserveAspectRatio: "xMidYMid meet"
		}, (u || (u = r("stylex"))).props(n), {
			version: "1.1",
			x: "0px",
			y: "0px",
			enableBackground: "new 0 0 8 13",
			children: [
				d.jsx("title", { children: a != null ? a : p }),
				d.jsx("path", {
					className: "x5eawxs",
					d: "M5.188,1H0v11.193l6.467-8.625 C7.526,2.156,6.958,1,5.188,1z"
				}),
				d.jsx("path", {
					fill: "currentColor",
					d: "M5.188,0H0v11.193l6.467-8.625C7.526,1.156,6.958,0,5.188,0z"
				})
			]
		})) }));
	}
	f.displayName = f.name + " [from " + i.id + "]", l.MessageTailInIcon = _, l.MessageTailOutIcon = f;
}), 98);
