__d("WAWebSelectMenuItem.react", [
	"WAWebCellMenuItem.react",
	"WAWebCheckboxRoundCheckedIcon.react",
	"WAWebCheckboxRoundUncheckedIcon.react",
	"WAWebMenuController.react",
	"WDSIconIcCheck.react",
	"WDSIconIcRadioButtonChecked.react",
	"WDSIconIcRadioButtonUnchecked.react",
	"err",
	"react",
	"react-compiler-runtime",
	"useWAWebListener",
	"useWAWebSet"
], (function(t, n, r, o, a, i, l) {
	var e = [
		"middlecontainerXStyle",
		"onMouseEnter",
		"onMouseLeave",
		"theme"
	], s, u = s || (s = o("react")), c = s, d = c.Children, m = c.createContext, p = c.useContext, _ = c.useEffect, f = { tealColor: {
		color: "x1v5yvga",
		$$css: !0
	} }, g = m(null);
	function h(e) {
		var t = e.children, n = e.initialSelection, r = e.multiselect, a = o("WAWebMenuController.react").useMenu(), i = o("useWAWebSet").useSet(), l = i[0], s = i[1], c = s.clear, m = s.toggle, p = d.map(t, function(e) {
			return e.props.optionId;
		}), f = async function(n, o) {
			var t;
			r === !0 ? t = await m(n) : t = await c([n]), e.onSelect == null || e.onSelect(n, o, t);
		};
		o("useWAWebListener").useListener(a.events, "select", async function(e, t) {
			p.includes(e) && await f(e, t);
		}), _(function() {
			if (n != null) {
				var e = Array.isArray(n) ? n : [n];
				c(e);
			}
		}, []);
		var h = {
			selection: l,
			isMultiselect: r === !0
		};
		return u.jsx(g.Provider, {
			value: h,
			children: t
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e, t) {
		switch (t) {
			case "select": return e ? u.jsx(o("WAWebCheckboxRoundCheckedIcon.react").CheckboxRoundCheckedIcon, {}) : u.jsx(o("WAWebCheckboxRoundUncheckedIcon.react").CheckboxRoundUncheckedIcon, {});
			case "radio": return e ? u.jsx(r("WDSIconIcRadioButtonChecked.react"), {
				height: 20,
				width: 20,
				testid: "checkbox-round-radio-checked"
			}) : u.jsx(r("WDSIconIcRadioButtonUnchecked.react"), {
				height: 20,
				width: 20,
				testid: "checkbox-round-passive"
			});
		}
	}
	function C(e, t) {
		switch (t) {
			case "select": return e ? u.jsx(r("WDSIconIcCheck.react"), { iconXstyle: f.tealColor }) : null;
			case "radio": return e ? u.jsx(r("WDSIconIcRadioButtonChecked.react"), {
				iconXstyle: f.tealColor,
				height: 20,
				width: 20,
				testid: "checkbox-round-radio-checked"
			}) : u.jsx(r("WDSIconIcRadioButtonUnchecked.react"), {
				height: 20,
				width: 20,
				testid: "checkbox-round-passive"
			});
		}
	}
	function b(t) {
		var n = o("react-compiler-runtime").c(19), a, i, l, s, c;
		n[0] !== t ? (a = t.middlecontainerXStyle, i = t.onMouseEnter, l = t.onMouseLeave, c = t.theme, s = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = c) : (a = n[1], i = n[2], l = n[3], s = n[4], c = n[5]);
		var d = c === void 0 ? "select" : c, m = p(g);
		if (m == null) throw r("err")("[menu] `SelectMenuItem` must be used inside of a `SelectMenuItemGroup`");
		var _, f;
		if (n[6] !== s.optionId || n[7] !== m.isMultiselect || n[8] !== m.selection || n[9] !== d) {
			var h = m.selection.has(s.optionId);
			m.isMultiselect ? (f = "multi-select", _ = y(h, d)) : (f = "single-select", _ = C(h, d)), n[6] = s.optionId, n[7] = m.isMultiselect, n[8] = m.selection, n[9] = d, n[10] = _, n[11] = f;
		} else _ = n[10], f = n[11];
		var b;
		return n[12] !== _ || n[13] !== a || n[14] !== i || n[15] !== l || n[16] !== s || n[17] !== f ? (b = u.jsx(o("WAWebCellMenuItem.react").CellV2MenuItem, babelHelpers.extends({ detailRight: _ }, s, {
			middleContainerXStyle: a,
			onMouseEnter: i,
			onMouseLeave: l,
			type: f
		})), n[12] = _, n[13] = a, n[14] = i, n[15] = l, n[16] = s, n[17] = f, n[18] = b) : b = n[18], b;
	}
	l.SelectMenuItemGroup = h, l.SelectMenuItem = b;
}), 98);
