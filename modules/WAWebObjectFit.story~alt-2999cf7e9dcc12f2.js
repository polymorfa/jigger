__d("WAWebObjectFit.story", [
	"WAWebObjectFit.react",
	"WAWebShowroomStory.react",
	"bx",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState, c = r("bx").getURL(r("bx")("9560"));
	function d() {
		var e = u("contain"), t = e[0], n = e[1];
		return s.jsxs(s.Fragment, { children: [
			s.jsx("input", {
				type: "radio",
				name: "fit",
				value: "contain",
				onChange: function() {
					return n("contain");
				},
				id: "contain",
				checked: t === "contain"
			}),
			s.jsx("label", {
				htmlFor: "contain",
				children: "Contain"
			}),
			s.jsx("br", {}),
			s.jsx("input", {
				type: "radio",
				name: "fit",
				value: "cover",
				onChange: function() {
					return n("cover");
				},
				id: "cover",
				checked: t === "cover"
			}),
			s.jsx("label", {
				htmlFor: "cover",
				children: "Cover"
			}),
			s.jsx("br", {}),
			s.jsx("input", {
				type: "radio",
				name: "fit",
				value: "scaleDown",
				onChange: function() {
					return n("scaleDown");
				},
				id: "scaleDown",
				checked: t === "scaleDown"
			}),
			s.jsx("label", {
				htmlFor: "scaleDown",
				children: "Scale Down"
			}),
			s.jsx("br", {}),
			s.jsx("input", {
				type: "radio",
				name: "fit",
				value: "zoomIn",
				onChange: function() {
					return n("zoomIn");
				},
				id: "zoomIn",
				checked: t === "zoomIn"
			}),
			s.jsx("label", {
				htmlFor: "zoomIn",
				children: "Zoom-In"
			}),
			s.jsx("br", {}),
			s.jsx("br", {}),
			s.jsx("div", {
				style: {
					position: "relative",
					width: 200,
					height: 200,
					background: "white"
				},
				children: s.jsx("div", {
					style: {
						position: "absolute",
						width: 200,
						height: 150,
						background: "lightgray",
						overflow: "hidden",
						top: 25
					},
					children: s.jsx(r("WAWebObjectFit.react"), {
						type: t,
						size: {
							width: 150,
							height: 150
						},
						zoomIn: {
							factor: 1.5,
							translateX: 0,
							translateY: 0
						},
						children: s.jsx("img", {
							src: c,
							alt: "test",
							style: {
								width: "100%",
								height: "100%"
							}
						})
					})
				})
			})
		] });
	}
	d.displayName = d.name + " [from " + i.id + "]";
	var m = {
		storyName: "WAWebObjectFit",
		section: o("WAWebShowroomStory.react").StorySectionType.UTIL,
		component: r("WAWebObjectFit.react"),
		description: "\n        Component that implements a functionality similar to CSS's object-fit with some\n        extra functionality like \"Zoom-In\".\n    ",
		examples: [{
			example: d,
			title: "Customizable Object Fit"
		}]
	};
	l.default = m;
}), 98);
