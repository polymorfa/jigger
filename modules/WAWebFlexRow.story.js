__d("WAWebFlexRow.story", [
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebShowroomStory.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		width: 10,
		height: 10,
		margin: 2,
		textIndent: "-1000px",
		background: "red",
		overflow: "hidden"
	};
	function c() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = s.jsx(r("WAWebFlexItem.react"), {
			style: u,
			children: "item"
		}), e[0] = t) : t = e[0], t;
	}
	var d = {
		background: "lightgray",
		padding: 5,
		height: 100,
		width: 100
	}, m = {
		storyName: "WAWebFlexRow",
		section: o("WAWebShowroomStory.react").StorySectionType.UTIL,
		component: o("WAWebFlex.react").FlexRow,
		description: "Horizontal flex container",
		examples: [
			{
				example: function() {
					return s.jsxs(o("WAWebFlex.react").FlexRow, {
						style: d,
						children: [
							s.jsx(c, {}),
							s.jsx(c, {}),
							s.jsx(c, {})
						]
					});
				},
				title: "default",
				description: "FlexRow: Use for horizontal layout."
			},
			{
				example: function() {
					return s.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						style: d,
						children: [
							s.jsx(c, {}),
							s.jsx(c, {}),
							s.jsx(c, {})
						]
					});
				},
				title: "align = \"center\"",
				description: "FlexRow: Use for horizontal layout."
			},
			{
				example: function() {
					return s.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						justify: "center",
						style: d,
						children: [
							s.jsx(c, {}),
							s.jsx(c, {}),
							s.jsx(c, {})
						]
					});
				},
				title: "align = \"center\", justify = \"center\"",
				description: "FlexRow: Use for horizontal layout."
			},
			{
				example: function() {
					return s.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "end",
						style: d,
						children: [
							s.jsx(c, {}),
							s.jsx(c, {}),
							s.jsx(c, {})
						]
					});
				},
				title: "align = \"end\"",
				description: "FlexRow: Use for horizontal layout."
			},
			{
				example: function() {
					return s.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "end",
						justify: "end",
						style: d,
						children: [
							s.jsx(c, {}),
							s.jsx(c, {}),
							s.jsx(c, {})
						]
					});
				},
				title: "align = \"end\", justify = \"end\"",
				description: "FlexRow: Use for horizontal layout."
			}
		]
	};
	l.default = m;
}), 98);
