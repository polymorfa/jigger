__d("WAWebLabelColorPanel.react", [
	"WAWebDropdown.react",
	"WAWebFlex.react",
	"WAWebL10N",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = ["anchor", "onClose"], s, u, c = u || (u = o("react"));
	function d(e) {
		var t = e.colors, n = e.onSelect, a = e.selectedIndex, i = 0;
		return c.jsx("div", babelHelpers.extends({ role: "tablist" }, (s || (s = r("stylex"))).props([o("WDSPaddings.stylex").wdsPaddings.paddingHor16, o("WDSPaddings.stylex").wdsPaddings.paddingVer20]), {
			"data-testid": "label-color-picker",
			children: t.map(function(e, t) {
				return c.jsx(o("WAWebFlex.react").FlexRow, {
					className: "xzbgwbi",
					justify: "center",
					children: e.map(function(e) {
						var t, r = i++, l = (t = e.originalIndex) != null ? t : r, s = a === l;
						return c.jsx(o("WAWebFlex.react").FlexRow, {
							justify: "center",
							align: "center",
							children: c.jsx(o("WAWebFlex.react").FlexRow, {
								justify: "center",
								align: "center",
								className: "x9f619 x1n7h9c3 x1s1d1n7 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1hm9lzh x1sa5p1d",
								style: { border: s ? "1.5px solid " + e.hexColor : "" },
								children: c.jsx("button", {
									role: "tab",
									tabIndex: s ? 0 : -1,
									"aria-selected": s,
									"data-testid": "label-color-item-" + l,
									className: {
										0: "x1td3qas x10w6t97 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x13345yd x1kqiigx x1iy4mvq x1nrmj05",
										1: "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x13345yd x1kqiigx x1iy4mvq x1nrmj05 x1ksvffz xqaafxp"
									}[!!s << 0],
									style: { backgroundColor: e.hexColor },
									onClick: function() {
										return n(l);
									}
								})
							})
						}, l);
					})
				}, t);
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(t) {
		var n = o("react-compiler-runtime").c(14), a, i, l;
		n[0] !== t ? (a = t.anchor, i = t.onClose, l = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i, n[3] = l) : (a = n[1], i = n[2], l = n[3]);
		var s;
		n[4] !== l.colors || n[5] !== l.onSelect || n[6] !== l.selectedIndex ? (s = c.jsx(d, {
			colors: l.colors,
			selectedIndex: l.selectedIndex,
			onSelect: l.onSelect
		}), n[4] = l.colors, n[5] = l.onSelect, n[6] = l.selectedIndex, n[7] = s) : s = n[7];
		var u = s, m;
		n[8] !== a || n[9] !== u ? (m = c.jsx(r("WAWebUimUieMenu.react"), { contextMenu: {
			menu: u,
			type: o("WAWebDropdown.react").MenuType.LabelColorPicker,
			anchor: a,
			offsetX: r("WAWebL10N").isRTL() ? 9 : -9,
			offsetY: 2
		} }), n[8] = a, n[9] = u, n[10] = m) : m = n[10];
		var p;
		return n[11] !== i || n[12] !== m ? (p = c.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "LabelColorPicker",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: i,
			children: m
		}), n[11] = i, n[12] = m, n[13] = p) : p = n[13], p;
	}
	l.LabelColorPicker = d, l.LabelColorPopup = m;
}), 98);
