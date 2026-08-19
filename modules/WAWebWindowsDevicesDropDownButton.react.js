__d("WAWebWindowsDevicesDropDownButton.react", [
	"WAWebButton.react",
	"WAWebDropdownV2.react",
	"WAWebFlex.react",
	"WAWebIcChevronDownMenuIcon.react",
	"WAWebMenuItems.react",
	"WAWebSelectMenuItem.react",
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(29), n = e.devices, r = e.icon, a = e.label, i = e.onDeviceChange, l = e.selectedDeviceId, c = r, m;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (m = s.createRef(), t[0] = m) : m = t[0];
		var p = m, _;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (_ = { className: "x78zum5 xdt5ytf x1xmf6yo x1xegmmw x1e56ztr x13fj5qh" }, t[1] = _) : _ = t[1];
		var f;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (f = { className: "x1e56ztr xhslqc4" }, t[2] = f) : f = t[2];
		var g;
		t[3] !== a ? (g = s.jsx("label", babelHelpers.extends({ htmlFor: "device-select" }, f, { children: a })), t[3] = a, t[4] = g) : g = t[4];
		var h;
		t[5] !== c ? (h = s.jsx(c, {
			width: 24,
			height: 24,
			iconXstyle: u.iconColor
		}), t[5] = c, t[6] = h) : h = t[6];
		var y;
		if (t[7] !== n || t[8] !== l) {
			var C;
			y = ((C = n.find(function(e) {
				return e.deviceId === l;
			})) == null ? void 0 : C.label) || "Device " + l, t[7] = n, t[8] = l, t[9] = y;
		} else y = t[9];
		var b;
		t[10] !== y ? (b = s.jsx(o("WAWebFlex.react").FlexItem, {
			marginStart: 8,
			grow: 1,
			justify: "stretch",
			align: "center",
			xstyle: u.buttonTextContent,
			children: y
		}), t[10] = y, t[11] = b) : b = t[11];
		var v;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (v = s.jsx(o("WAWebIcChevronDownMenuIcon.react").IcChevronDownMenuIcon, {}), t[12] = v) : v = t[12];
		var S;
		t[13] !== h || t[14] !== b ? (S = s.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
			ref: p,
			borderStyles: u.button,
			children: s.jsxs(o("WAWebFlex.react").FlexRow, {
				justify: "all",
				align: "center",
				grow: 1,
				xstyle: u.buttonContent,
				children: [
					h,
					b,
					v
				]
			})
		}), t[13] = h, t[14] = b, t[15] = S) : S = t[15];
		var R;
		t[16] !== n ? (R = n.map(d), t[16] = n, t[17] = R) : R = t[17];
		var L;
		t[18] !== i || t[19] !== l || t[20] !== R ? (L = s.jsx(o("WAWebSelectMenuItem.react").SelectMenuItemGroup, {
			multiselect: !1,
			initialSelection: l,
			onSelect: i,
			children: R
		}), t[18] = i, t[19] = l, t[20] = R, t[21] = L) : L = t[21];
		var E;
		t[22] !== l || t[23] !== L ? (E = s.jsx(o("WAWebDropdownV2.react").DropdownV2Menu, {
			position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
			alignment: o("WAWebDropdownV2.react").PopoverAlignment.Center,
			minWidth: 320,
			initHandling: "click",
			initialActiveOptionId: l,
			target: p,
			children: L
		}), t[22] = l, t[23] = L, t[24] = E) : E = t[24];
		var k;
		return t[25] !== E || t[26] !== g || t[27] !== S ? (k = s.jsxs("div", babelHelpers.extends({}, _, { children: [
			g,
			S,
			E
		] })), t[25] = E, t[26] = g, t[27] = S, t[28] = k) : k = t[28], k;
	}
	function d(e) {
		return s.jsx(o("WAWebMenuItems.react").SelectMenuItem, {
			optionId: e.deviceId,
			primary: e.label || "Device " + e.deviceId
		}, e.deviceId);
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = c;
}), 98);
