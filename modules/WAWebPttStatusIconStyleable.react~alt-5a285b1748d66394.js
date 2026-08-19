__d("WAWebPttStatusIconStyleable.react", [
	"WAWebSvgComponentBase",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = [
		"height",
		"iconXstyle",
		"innerStyles",
		"name",
		"viewBox",
		"width"
	], s, u, c = u || (u = o("react")), d = "ptt-status";
	function m(t) {
		var n = t.height, a = t.iconXstyle, i = t.innerStyles, l = t.name, u = t.viewBox, m = t.width, p = babelHelpers.objectWithoutPropertiesLoose(t, e), _;
		if (u) {
			var f = u.height, g = f === void 0 ? 0 : f, h = u.width, y = h === void 0 ? 0 : h, C = u.x, b = C === void 0 ? 0 : C, v = u.y, S = v === void 0 ? 0 : v;
			_ = [
				b,
				S,
				y,
				g
			].join(" ");
		}
		var R = 26, L = 19;
		return (n != null || m != null) && (R = n, L = m), c.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({ name: l != null ? l : d }, p, { children: c.jsxs("svg", babelHelpers.extends({
			viewBox: _ != null ? _ : "0 0 19 26",
			height: R,
			width: L,
			preserveAspectRatio: "xMidYMid meet"
		}, (s || (s = r("stylex"))).props(a), {
			version: "1.1",
			x: "0px",
			y: "0px",
			enableBackground: "new 0 0 19 26",
			children: [
				c.jsx("title", { children: l != null ? l : d }),
				c.jsx("path", babelHelpers.extends({ fill: "#FFFFFF" }, s.props(i == null ? void 0 : i.background), { d: "M9.217,24.401c-1.158,0-2.1-0.941-2.1-2.1v-2.366c-2.646-0.848-4.652-3.146-5.061-5.958L2.004,13.62 l-0.003-0.081c-0.021-0.559,0.182-1.088,0.571-1.492c0.39-0.404,0.939-0.637,1.507-0.637h0.3c0.254,0,0.498,0.044,0.724,0.125v-6.27 C5.103,2.913,7.016,1,9.367,1c2.352,0,4.265,1.913,4.265,4.265v6.271c0.226-0.081,0.469-0.125,0.723-0.125h0.3 c0.564,0,1.112,0.233,1.501,0.64s0.597,0.963,0.571,1.526c0,0.005,0.001,0.124-0.08,0.6c-0.47,2.703-2.459,4.917-5.029,5.748v2.378 c0,1.158-0.942,2.1-2.1,2.1H9.217V24.401z" })),
				c.jsx("path", babelHelpers.extends({ fill: "currentColor" }, s.props(i == null ? void 0 : i.primary), { d: "M9.367,15.668c1.527,0,2.765-1.238,2.765-2.765V5.265c0-1.527-1.238-2.765-2.765-2.765 S6.603,3.738,6.603,5.265v7.638C6.603,14.43,7.84,15.668,9.367,15.668z M14.655,12.91h-0.3c-0.33,0-0.614,0.269-0.631,0.598 c0,0,0,0-0.059,0.285c-0.41,1.997-2.182,3.505-4.298,3.505c-2.126,0-3.904-1.521-4.304-3.531C5.008,13.49,5.008,13.49,5.008,13.49 c-0.016-0.319-0.299-0.579-0.629-0.579h-0.3c-0.33,0-0.591,0.258-0.579,0.573c0,0,0,0,0.04,0.278 c0.378,2.599,2.464,4.643,5.076,4.978v3.562c0,0.33,0.27,0.6,0.6,0.6h0.3c0.33,0,0.6-0.27,0.6-0.6V18.73 c2.557-0.33,4.613-2.286,5.051-4.809c0.057-0.328,0.061-0.411,0.061-0.411C15.243,13.18,14.985,12.91,14.655,12.91z" }))
			]
		})) }));
	}
	m.displayName = m.name + " [from " + i.id + "]", l.PttStatusIconStyleable = m;
}), 98);
