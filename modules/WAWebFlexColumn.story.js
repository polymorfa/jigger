__d("WAWebFlexColumn.story", [
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
		storyName: "WAWebFlexColumn",
		section: o("WAWebShowroomStory.react").StorySectionType.UTIL,
		component: o("WAWebFlex.react").FlexColumn,
		description: "Flex container, prefer to use <b>FlexRow</b> or <b>FlexColumn</b>",
		examples: [
			{
				example: function() {
					return s.jsxs(o("WAWebFlex.react").FlexColumn, {
						style: d,
						children: [
							s.jsx(c, {}),
							s.jsx(c, {}),
							s.jsx(c, {})
						]
					});
				},
				title: "default",
				description: "FlexColumn: Use for vertical layout."
			},
			{
				example: function() {
					return s.jsxs(o("WAWebFlex.react").FlexColumn, {
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
				description: "FlexColumn: Use for vertical layout."
			},
			{
				example: function() {
					return s.jsxs(o("WAWebFlex.react").FlexColumn, {
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
				description: "FlexColumn: Use for vertical layout."
			},
			{
				example: function() {
					return s.jsxs(o("WAWebFlex.react").FlexColumn, {
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
				description: "FlexColumn: Use for vertical layout."
			},
			{
				example: function() {
					return s.jsxs(o("WAWebFlex.react").FlexColumn, {
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
				description: "FlexColumn: Use for vertical layout."
			}
		]
	};
	l.default = m;
}), 98);
