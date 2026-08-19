__d("WAWebWindowsDevicesDropDownButton.react", [
	"WAWebButton.react",
	"WAWebDropdownV2.react",
	"WAWebFlex.react",
	"WAWebIcChevronDownMenuIcon.react",
	"WAWebMenuItems.react",
	"WAWebSelectMenuItem.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		buttonTextContent: {
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			textOverflow: "xlyipyv",
			textAlign: "x1yc453h",
			color: "x14ug900",
			$$css: !0
		},
		button: {
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "xx42vgk",
			borderInlineEndColor: "xbogo7e",
			borderBottomColor: "x120ee7l",
			borderInlineStartColor: "x1vb5itz",
			$$css: !0
		},
		buttonContent: {
			marginTop: "xdj266r",
			marginInlineEnd: "x1ows92d",
			marginBottom: "xat24cr",
			marginInlineStart: "x1a5kqlc",
			color: "xhslqc4",
			$$css: !0
		},
		iconColor: {
			color: "xhslqc4",
			$$css: !0
		}
	};
	function c(e) {
		var t, n = e.devices, r = e.icon, a = e.label, i = e.onDeviceChange, l = e.selectedDeviceId, c = r, d = s.createRef();
		return s.jsxs("div", {
			className: "x78zum5 xdt5ytf x1xmf6yo x1xegmmw x1e56ztr x13fj5qh",
			children: [
				s.jsx("label", {
					htmlFor: "device-select",
					className: "x1e56ztr xhslqc4",
					children: a
				}),
				s.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
					ref: d,
					borderStyles: u.button,
					children: s.jsxs(o("WAWebFlex.react").FlexRow, {
						justify: "all",
						align: "center",
						grow: 1,
						xstyle: u.buttonContent,
						children: [
							s.jsx(c, {
								width: 24,
								height: 24,
								iconXstyle: u.iconColor
							}),
							s.jsx(o("WAWebFlex.react").FlexItem, {
								marginStart: 8,
								grow: 1,
								justify: "stretch",
								align: "center",
								xstyle: u.buttonTextContent,
								children: ((t = n.find(function(e) {
									return e.deviceId === l;
								})) == null ? void 0 : t.label) || "Device " + l
							}),
							s.jsx(o("WAWebIcChevronDownMenuIcon.react").IcChevronDownMenuIcon, {})
						]
					})
				}),
				s.jsx(o("WAWebDropdownV2.react").DropdownV2Menu, {
					position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
					alignment: o("WAWebDropdownV2.react").PopoverAlignment.Center,
					minWidth: 320,
					initHandling: "click",
					initialActiveOptionId: l,
					target: d,
					children: s.jsx(o("WAWebSelectMenuItem.react").SelectMenuItemGroup, {
						multiselect: !1,
						initialSelection: l,
						onSelect: i,
						children: n.map(function(e) {
							return s.jsx(o("WAWebMenuItems.react").SelectMenuItem, {
								optionId: e.deviceId,
								primary: e.label || "Device " + e.deviceId
							}, e.deviceId);
						})
					})
				})
			]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
