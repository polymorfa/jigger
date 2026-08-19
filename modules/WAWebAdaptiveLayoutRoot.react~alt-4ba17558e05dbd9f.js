__d("WAWebAdaptiveLayoutRoot.react", ["WAWebAdaptiveLayoutContext.react", "react"], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useMemo, c = [
		"chatlist",
		"conversation",
		"right"
	];
	function d(e) {
		var t = e.children, n = e.conversationOpen, o = e.leftDrawerOpen, a = e.mode, i = e.rightDrawerOpen, l = u(function() {
			return {
				mode: a,
				isNarrow: a === "narrow"
			};
		}, [a]), d = "chatlist";
		return a === "narrow" && (i ? d = "right" : o ? d = "left" : n && (d = "conversation")), s.jsx(r("WAWebAdaptiveLayoutContext.react").Provider, {
			value: l,
			children: s.Children.map(t, function(e, t) {
				var n = c[t], r = a === "narrow" && (n == null || d !== n);
				return s.jsx("div", babelHelpers.extends({}, {
					0: { className: "xjp7ctv" },
					1: { className: "x1s85apg" }
				}[!!r << 0], { children: e }));
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
