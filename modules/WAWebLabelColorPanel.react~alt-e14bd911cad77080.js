__d("WAWebLabelColorPanel.react", [
	"WAWebDropdown.react",
	"WAWebFlex.react",
	"WAWebL10N",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WDSPaddings.stylex",
	"react",
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
		var n = t.anchor, a = t.onClose, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = c.jsx(d, {
			colors: i.colors,
			selectedIndex: i.selectedIndex,
			onSelect: i.onSelect
		});
		return c.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "LabelColorPicker",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: a,
			children: c.jsx(r("WAWebUimUieMenu.react"), { contextMenu: {
				menu: l,
				type: o("WAWebDropdown.react").MenuType.LabelColorPicker,
				anchor: n,
				offsetX: r("WAWebL10N").isRTL() ? 9 : -9,
				offsetY: 2
			} })
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.LabelColorPicker = d, l.LabelColorPopup = m;
}), 98);
