__d("WAWebMediaEditorToolbarColor.story", [
	"WAWebFlex.react",
	"WAWebMediaEditorEnumsColors",
	"WAWebMediaEditorToolbarColor.react",
	"WAWebMediaEditorToolbarColorIntegrated.react",
	"WAWebMediaEditorToolbarColorPicker.react",
	"WAWebNoop",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState;
	function c(e) {
		var t = e.integrated, n = t === void 0 ? !1 : t, a = e.selectedColor, i = a === void 0 ? o("WAWebMediaEditorEnumsColors").getColorValue(o("WAWebMediaEditorEnumsColors").ColorType.WHITE) : a, l = e.withSlider, c = l === void 0 ? !1 : l, d = e.withTransparent, m = d === void 0 ? !1 : d, p = u(i), _ = p[0], f = p[1], g = m ? o("WAWebMediaEditorEnumsColors").getAllColorsAndTransparent().map(function(e) {
			return { primaryColor: o("WAWebMediaEditorEnumsColors").getColorValue(e) };
		}) : o("WAWebMediaEditorEnumsColors").getAllColors().map(function(e) {
			return { primaryColor: o("WAWebMediaEditorEnumsColors").getColorValue(e) };
		});
		return s.jsx(o("WAWebFlex.react").FlexRow, { children: n ? s.jsx(s.Fragment, { children: c ? s.jsx(o("WAWebMediaEditorToolbarColorIntegrated.react").IntegratedColorToolbar, {
			selectedColor: _,
			onColorSelect: f,
			strokeProps: {
				strokeWidth: 50,
				onStrokeWidthSelect: r("WAWebNoop")
			}
		}) : s.jsx(o("WAWebMediaEditorToolbarColorIntegrated.react").IntegratedColorToolbar, {
			selectedColor: _,
			onColorSelect: f
		}) }) : s.jsx(o("WAWebMediaEditorToolbarColor.react").ColorToolbar, {
			selectedColor: _,
			colors: g,
			onColorSelect: f
		}) });
	}
	c.displayName = c.name + " [from " + i.id + "]";
	var d = {
		storyName: "WAWebMediaEditorToolbarColor",
		component: r("WAWebMediaEditorToolbarColorPicker.react"),
		description: "Color Picker component with hex input & color chips",
		examples: [
			{
				example: function() {
					return s.jsx(c, {});
				},
				title: "Default Color Picker"
			},
			{
				example: function() {
					return s.jsx(c, { withTransparent: !0 });
				},
				title: "Color Picker with transparent option"
			},
			{
				example: function() {
					return s.jsx(c, { integrated: !0 });
				},
				title: "Color Picker with integrated Color Panel (used in shapes toolbar in the media editor)"
			},
			{
				example: function() {
					return s.jsx(c, {
						integrated: !0,
						withSlider: !0
					});
				},
				title: "Color Picker with integrated Color Panel and slider (used in shapes toolbar in the media editor for stroke color & width)"
			}
		]
	};
	l.default = d;
}), 98);
