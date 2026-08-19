__d("WAWebCommerceQuantityControls.story", [
	"WAWebCommonQuantityControls.react",
	"WAWebShowroomUtils",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState;
	function c(e) {
		var t = e.initQuantity, n = e.isCollapsed, o = u(t), a = o[0], i = o[1];
		return s.jsx(r("WAWebCommonQuantityControls.react"), {
			quantity: a,
			isCollapsed: n,
			onAddOneClick: function() {
				return i(a + 1);
			},
			onRemoveOneClick: function() {
				return i(a - 1);
			}
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	var d = {
		storyName: "WAWebCommerceQuantityControls",
		component: r("WAWebCommonQuantityControls.react"),
		description: "Commerce product catalog widget for product quantity controls.",
		examples: [
			{
				title: "Quantity of 0",
				description: "Shows state with 0 quantity",
				templateStyle: o("WAWebShowroomUtils").compactPreview,
				example: function() {
					return s.jsx(c, { initQuantity: 0 });
				}
			},
			{
				title: "Quantity of 7",
				description: "Shows state with extended controls and one-digit number",
				templateStyle: o("WAWebShowroomUtils").compactPreview,
				example: function() {
					return s.jsx(c, { initQuantity: 7 });
				}
			},
			{
				title: "Quantity of 99",
				description: "Shows state with extended controls and two-digit number",
				templateStyle: o("WAWebShowroomUtils").compactPreview,
				example: function() {
					return s.jsx(c, { initQuantity: 99 });
				}
			},
			{
				title: "Quantity of 0 collapsed",
				description: "Shows state in collapsed mode and 0 quantity",
				templateStyle: o("WAWebShowroomUtils").compactPreview,
				example: function() {
					return s.jsx(c, {
						initQuantity: 0,
						isCollapsed: !0
					});
				}
			},
			{
				title: "Quantity of 7 collapsed",
				description: "Shows state in collapsed mode and one-digit number",
				templateStyle: o("WAWebShowroomUtils").compactPreview,
				example: function() {
					return s.jsx(c, {
						initQuantity: 7,
						isCollapsed: !0
					});
				}
			},
			{
				title: "Quantity of 99 collapsed",
				description: "Shows state in collapsed mode and two-digit number",
				templateStyle: o("WAWebShowroomUtils").compactPreview,
				example: function() {
					return s.jsx(c, {
						initQuantity: 99,
						isCollapsed: !0
					});
				}
			}
		]
	};
	l.default = d;
}), 98);
