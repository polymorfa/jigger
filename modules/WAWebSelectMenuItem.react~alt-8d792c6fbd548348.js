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
		var n = t.middlecontainerXStyle, a = t.onMouseEnter, i = t.onMouseLeave, l = t.theme, s = l === void 0 ? "select" : l, c = babelHelpers.objectWithoutPropertiesLoose(t, e), d = p(g);
		if (d == null) throw r("err")("[menu] `SelectMenuItem` must be used inside of a `SelectMenuItemGroup`");
		var m = d.selection.has(c.optionId), _, f;
		return d.isMultiselect ? (_ = "multi-select", f = y(m, s)) : (_ = "single-select", f = C(m, s)), u.jsx(o("WAWebCellMenuItem.react").CellV2MenuItem, babelHelpers.extends({ detailRight: f }, c, {
			middleContainerXStyle: n,
			onMouseEnter: a,
			onMouseLeave: i,
			type: _
		}));
	}
	b.displayName = b.name + " [from " + i.id + "]", l.SelectMenuItemGroup = h, l.SelectMenuItem = b;
}), 98);
