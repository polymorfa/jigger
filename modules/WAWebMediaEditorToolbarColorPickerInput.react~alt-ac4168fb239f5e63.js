__d("WAWebMediaEditorToolbarColorPickerInput.react", [
	"WAWebCopyPasteSelectable.react",
	"WAWebKeyboardHotKeys.react",
	"WAWebMediaEditorToolbarColor.react",
	"WAWebMediaEditorToolbarColorChip.react",
	"WAWebMediaEditorToolbarColorPickerConsts",
	"WAWebMediaEditorUtilsColor",
	"WDSPaddings.stylex",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useEffect, m = c.useRef, p = c.useState, _ = { paddingBlock10: {
		paddingTop: "x889kno",
		paddingBottom: "x1a8lsjc",
		$$css: !0
	} }, f = {
		container: {
			alignItems: "x6s0dn4",
			boxSizing: "x9f619",
			display: "x78zum5",
			justifyContent: "x1nhvcw1",
			$$css: !0
		},
		defaultHeight: {
			minHeight: "x7ywyr2",
			$$css: !0
		},
		compactHeight: {
			maxHeight: "x1aa1le3",
			$$css: !0
		},
		input: {
			backgroundColor: "xjbqb8w",
			borderTopStyle: "x1ejq31n",
			borderInlineEndStyle: "x18oe1m7",
			borderBottomStyle: "x1sy0etr",
			borderInlineStartStyle: "xstzfhl",
			color: "x14ug900",
			fontSize: "x6prxxf",
			lineHeight: "x1fc57z9",
			outline: "x1a2a7pz",
			$$css: !0
		}
	};
	function g(t) {
		var n = t.color, a = t.onColorPickerClose, i = t.onChangeColor, l = t.theme, s = l === void 0 ? o("WAWebMediaEditorToolbarColor.react").Theme.Default : l, c = m(null), g = p(n.toHex()), h = g[0], y = g[1], C = p(!1), b = C[0], v = C[1];
		d(function() {
			b || y(n.toHex());
		}, [n, b]);
		var S = function(t) {
			var e = t.target.value;
			if (y(e), !(!e || !o("WAWebMediaEditorUtilsColor").isValidHex(e))) {
				var n = o("WAWebMediaEditorUtilsColor").Color.fromHex(e);
				i(n);
			}
		}, R = function() {
			v(!1);
		}, L = function() {
			v(!0);
		};
		return u.jsxs("div", {
			className: (e || (e = r("stylex")))([f.container, s === o("WAWebMediaEditorToolbarColor.react").Theme.Default ? [f.defaultHeight, o("WDSPaddings.stylex").wdsPaddings.paddingHor8] : f.compactHeight]),
			style: {
				width: o("WAWebMediaEditorToolbarColorPickerConsts").CONTAINER_WIDTH,
				height: o("WAWebMediaEditorToolbarColorPickerConsts").INPUT_HEIGHT
			},
			children: [u.jsx(r("WAWebMediaEditorToolbarColorChip.react"), {
				withBorder: !0,
				primaryColor: n,
				selected: !1,
				theme: "medium"
			}), u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
				handlers: { enter: a },
				children: u.jsx(o("WAWebCopyPasteSelectable.react").SelectableDiv, {
					selectable: !0,
					children: u.jsx("input", babelHelpers.extends({
						type: "text",
						ref: c
					}, e.props([
						f.input,
						_.paddingBlock10,
						o("WDSPaddings.stylex").wdsPaddings.paddingHor8
					]), {
						value: h,
						onChange: S,
						onBlur: R,
						onFocus: L
					}))
				})
			})]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 98);
