__d("WAWebTextLineClamp.story", ["WAWebTextLineClamp.react", "react"], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		storyName: "WAWebTextLineClamp",
		component: r("WAWebTextLineClamp.react"),
		description: "Component does line clamping (truncating multiple line text); supports different font sizes for single and multiple line cases.",
		examples: [
			{
				example: function() {
					return s.jsx(r("WAWebTextLineClamp.react"), {
						maxLines: 1,
						style: { singleLine: "x1jchvi3 xdpg8n2" },
						children: "Short text"
					});
				},
				title: "Short text, 1 line, configured font sizes",
				description: "Short text taking 1 line. Font size is constant."
			},
			{
				example: function() {
					return s.jsx(r("WAWebTextLineClamp.react"), {
						maxLines: 2,
						children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar luctus leo nec fringilla."
					});
				},
				title: "Medium text, 2 lines max, font sizes are not configured",
				description: "Medium length text taking no more than 2 lines. Font size remains the same."
			},
			{
				example: function() {
					return s.jsx(r("WAWebTextLineClamp.react"), {
						maxLines: 2,
						style: {
							singleLine: "x1jchvi3 xdpg8n2",
							multipleLine: "xboafo0 x1jo673t"
						},
						children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar luctus leo nec fringilla."
					});
				},
				title: "Medium text, 2 lines max, configured font sizes",
				description: "Medium length text taking no more than 2 lines. Font size depends on number of ocupied lines: Single line - 1rem, multiple lines - 0.75rem."
			},
			{
				example: function() {
					return s.jsx(r("WAWebTextLineClamp.react"), {
						maxLines: 1,
						children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar luctus leo nec fringilla. Donec vehicula mattis felis, eget consequat sapien dictum id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar luctus leo nec fringilla. Donec vehicula mattis felis, eget consequat sapien dictum id."
					});
				},
				title: "Long text, 1 line max, font sizes are not configured",
				description: "Long text taking 1 line. Font size is constant."
			},
			{
				example: function() {
					return s.jsx("div", {
						style: { textAlign: "center" },
						children: s.jsx(r("WAWebTextLineClamp.react"), {
							maxLines: 3,
							style: {
								singleLine: "x1jchvi3 xdpg8n2",
								multipleLine: "xboafo0 x1jo673t"
							},
							children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar luctus leo nec fringilla. Donec vehicula mattis felis, eget consequat sapien dictum id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar luctus leo nec fringilla. Donec vehicula mattis felis, eget consequat sapien dictum id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar pulvinar luctus leo nec fringilla. Donec vehicula mattis felis, eget consequat sapien dictum id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar luctus leo nec fringilla. Donec vehicula mattis felis, eget consequat sapien dictum id."
						})
					});
				},
				title: "Long text, 3 lines max, configured font sizes, centered.",
				description: "Long length text taking no more than 3 lines. Font size depends on number of ocupied lines: Single line - 1rem, multiple lines - 0.75rem. Center text alignment style is applied to the upper container."
			}
		]
	};
	l.default = u;
}), 98);
