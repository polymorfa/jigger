__d("WAWebResizeObserver.story", [
	"WAWebResizeObserver.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useRef, p = u.useState;
	function _() {
		var e = m(), t = p("initial content"), n = t[0], o = t[1], a = c(function() {
			var t = e.current;
			t != null && (t.style.width = parseInt(t.style.width, 10) + 1 + "px", t.style.height = parseInt(t.style.height, 10) + 1 + "px", parseInt(t.style.width, 10) < 160 && window.requestAnimationFrame(a));
		}, []);
		return d(function() {
			a();
		}, [a]), s.jsx("div", {
			style: {
				width: 60,
				height: 40
			},
			ref: e,
			children: s.jsx(r("WAWebResizeObserver.react"), {
				className: "xul9jog x14y7qir x5yr21d x2b8uid xh8yej3",
				onResize: function(t) {
					return o(t.width + "x" + t.height);
				},
				children: n
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f() {
		var e = o("react-compiler-runtime").c(5), t = p("initial content"), n = t[0], a = t[1], i;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (i = {
			width: 100,
			height: 100
		}, e[0] = i) : i = e[0];
		var l, u;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (l = "xul9jog x14y7qir x5yr21d x2b8uid xh8yej3", u = function(t) {
			return a(t.width + "x" + t.height);
		}, e[1] = l, e[2] = u) : (l = e[1], u = e[2]);
		var c;
		return e[3] !== n ? (c = s.jsx("div", {
			style: i,
			children: s.jsx(r("WAWebResizeObserver.react"), {
				className: l,
				onResize: u,
				children: n
			})
		}), e[3] = n, e[4] = c) : c = e[4], c;
	}
	var g = {
		storyName: "WAWebResizeObserver",
		component: r("WAWebResizeObserver.react"),
		description: "Resize Observer component for ",
		examples: [{
			example: f,
			title: "Basic",
			description: "Calculates initial dimensionss on mount."
		}, {
			example: _,
			title: "Updates",
			description: "Updates content when the element changes sizes."
		}]
	};
	l.default = g;
}), 98);
