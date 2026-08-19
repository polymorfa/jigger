__d("WAWebRollerCounter.story", [
	"WAWebButton.react",
	"WAWebFlex.react",
	"WAWebRollerCounter.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState;
	function c() {
		var e = u(1), t = e[0], n = e[1], a = function(t) {
			n(function(e) {
				return e + t;
			});
		};
		return s.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "center",
			align: "center",
			children: [
				s.jsx(o("WAWebButton.react").Button, {
					type: "primary",
					onClick: function() {
						return a(1);
					},
					children: "Plus"
				}),
				" ",
				s.jsx(o("WAWebButton.react").Button, {
					type: "primary",
					onClick: function() {
						return a(-1);
					},
					children: "Minus"
				}),
				s.jsx(r("WAWebRollerCounter.react"), {
					counter: t,
					shouldAnimate: !0
				})
			]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d() {
		var e = u(1), t = e[0], n = e[1], a = function(t) {
			n(function(e) {
				return e + t;
			});
		};
		return s.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "center",
			align: "center",
			children: [
				s.jsx(o("WAWebButton.react").Button, {
					type: "primary",
					onClick: function() {
						return a(1);
					},
					children: "Plus"
				}),
				" ",
				s.jsx(o("WAWebButton.react").Button, {
					type: "primary",
					onClick: function() {
						return a(-1);
					},
					children: "Minus"
				}),
				s.jsx(r("WAWebRollerCounter.react"), {
					counter: t,
					shouldAnimate: !0,
					rollerCounterOptions: {
						showAggregateMax: !0,
						showOneToTwoAnimation: !0
					}
				})
			]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	var m = {
		storyName: "WAWebRollerCounter",
		component: r("WAWebRollerCounter.react"),
		description: "Counter with animation",
		examples: [{
			example: function() {
				return s.jsx(c, {});
			},
			title: "Counter that rolls to change number",
			description: "Counter that displays count change with roll animation"
		}, {
			example: function() {
				return s.jsx(d, {});
			},
			title: "Counter that rolls to change number but with options enabled",
			description: "Counter that displays count change with roll animation with options, this are as per reations spec"
		}]
	};
	l.default = m;
}), 98);
