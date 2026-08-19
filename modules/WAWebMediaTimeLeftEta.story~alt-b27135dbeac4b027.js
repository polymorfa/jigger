__d("WAWebMediaTimeLeftEta.story", [
	"WAWebMediaTimeLeftEta.react",
	"react",
	"useWAWebInterval"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState;
	function c() {
		var e = 15728640, t = u(0), n = t[0], o = t[1], a = r("useWAWebInterval")(function() {
			o(function(t) {
				return t < e ? t + .5 * 1024 * 1024 : t;
			});
		}, 1e3), i = a[0], l = a[1], c = function() {
			return o(0);
		};
		return s.jsxs("div", { children: [
			s.jsx("button", {
				onClick: i,
				children: "Start"
			}),
			s.jsx("br", {}),
			s.jsx("button", {
				onClick: l,
				children: "Stop"
			}),
			s.jsx("br", {}),
			s.jsx("button", {
				onClick: c,
				children: "Reset"
			}),
			s.jsx("br", {}),
			s.jsx("br", {}),
			s.jsx(r("WAWebMediaTimeLeftEta.react"), {
				loadedSize: n,
				size: e
			})
		] });
	}
	c.displayName = c.name + " [from " + i.id + "]";
	var d = {
		storyName: "WAWebMediaTimeLeftEta",
		component: r("WAWebMediaTimeLeftEta.react"),
		description: "Time Left ETA",
		examples: [{
			example: c,
			title: "Basic"
		}]
	};
	l.default = d;
}), 98);
