__d("WAWebMediaEditorToolbarCropRotate", [
	"fbt",
	"WAWebFlex.react",
	"WAWebMediaEditorRotateLeftIcon.react",
	"WAWebMediaEditorRotateRightIcon.react",
	"WAWebMediaEditorToolbarButton.react",
	"WDSMargins.stylex",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { marginInlineEnd13: {
		marginInlineEnd: "xaw7rza",
		$$css: !0
	} };
	function d(e) {
		var t, n = e.canReset, r = e.onReset, a = e.onRotateCanvas;
		return u.jsxs(o("WAWebFlex.react").FlexRow, { children: [
			u.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
				xstyle: [
					(t = o("WDSMargins.stylex")).wdsMargins.marginVer0,
					t.wdsMargins.marginStart8,
					c.marginInlineEnd13
				],
				icon: u.jsx(o("WAWebMediaEditorRotateLeftIcon.react").MediaEditorRotateLeftIcon, { displayInline: !0 }),
				title: s._(
					/*BTDS*/
					""
				),
				onClick: function() {
					return a(-90);
				}
			}),
			u.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
				xstyle: [t.wdsMargins.marginVer0, t.wdsMargins.marginHor8],
				icon: u.jsx(o("WAWebMediaEditorRotateRightIcon.react").MediaEditorRotateRightIcon, { displayInline: !0 }),
				title: s._(
					/*BTDS*/
					""
				),
				onClick: function() {
					return a(90);
				}
			}),
			u.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
				xstyle: [t.wdsMargins.marginVer0, t.wdsMargins.marginHor8],
				onClick: r,
				disabled: !n,
				children: s._(
					/*BTDS*/
					""
				)
			})
		] });
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
