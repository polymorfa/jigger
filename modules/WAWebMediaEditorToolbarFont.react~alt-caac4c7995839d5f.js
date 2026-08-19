__d("WAWebMediaEditorToolbarFont.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebMediaEditorEnumsFonts",
	"WAWebMediaEditorToolbarButton.react",
	"WAWebMediaEditorToolbarFontDropdown.react",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WAWebVelocityTransitionGroup",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useImperativeHandle, p = d.useRef, _ = d.useState, f = { icon: {
		width: "xw4jnvo",
		height: "x1qx5ct2",
		fontSize: "x1nxh6w3",
		color: "x1r3oa16",
		textAlign: "x2b8uid",
		backgroundColor: "x1518k6t",
		borderStartStartRadius: "x1c9tyrk",
		borderStartEndRadius: "xeusxvb",
		borderEndEndRadius: "x1pahc9y",
		borderEndStartRadius: "x1ertn4p",
		$$css: !0
	} };
	function g(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.fonts, l = a.onAlignmentSelect, u = a.onFontSelect, d = a.selectedAlignment, g = a.selectedFont, h = p(null), y = _(null), C = y[0], b = y[1], v = function(t) {
			if (!C && h.current) {
				var e = c.jsx(r("WAWebMediaEditorToolbarFontDropdown.react"), {
					fonts: i,
					selectedFont: g,
					selectedAlignment: d,
					showAlignmentOptions: !0,
					onFontSelect: u,
					onAlignmentSelect: l
				});
				b({
					menu: e,
					anchor: h.current
				});
			}
		}, S = function() {
			b(null);
		}, R = function() {
			return !!C;
		};
		m(n, function() {
			return { isMenuVisible: R };
		});
		var L = !!C, E;
		C && (E = c.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "MediaEditorFontDropdown",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: S,
			children: c.jsx(r("WAWebUimUieMenu.react"), { contextMenu: C })
		}));
		var k = c.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: f.icon,
			style: babelHelpers.extends({}, o("WAWebMediaEditorEnumsFonts").getFontStyle(g)),
			justify: "center",
			align: "center",
			children: c.jsx("div", {
				"aria-hidden": "true",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), I = c.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
			onClick: v,
			icon: k,
			selected: L,
			caret: L ? "down" : "up",
			children: c.jsx("span", {
				className: "x1gabggj",
				children: o("WAWebMediaEditorEnumsFonts").getFontTranslation(g)
			})
		});
		return c.jsxs("div", {
			ref: h,
			className: "x1n2onr6 x2lah0s",
			children: [I, c.jsx(r("WAWebVelocityTransitionGroup"), {
				transitionName: "dropdown",
				children: E
			})]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	var h = g;
	l.Font = h;
}), 226);
