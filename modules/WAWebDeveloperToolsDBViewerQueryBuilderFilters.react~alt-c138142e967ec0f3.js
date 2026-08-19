__d("WAWebDeveloperToolsDBViewerQueryBuilderFilters.react", [
	"WAWebCellMenuItem.react",
	"WAWebDeveloperToolsArrayUtils",
	"WAWebDeveloperToolsDBViewerDropdown.react",
	"WAWebDeveloperToolsDBViewerRowFilter.react",
	"WAWebDeveloperToolsDividerWithText.react",
	"WAWebDeveloperToolsLoadTable",
	"WAWebEmojiText.react",
	"WAWebFlex.react",
	"WAWebMenu.react",
	"WAWebSearchInput",
	"WAWebVisualRadio.react",
	"react",
	"useWAWebDeveloperToolsDBViewerColumnSearch"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = { fullWidth: {
		width: "xh8yej3",
		$$css: !0
	} }, c = [o("WAWebDeveloperToolsLoadTable").BoolFilter];
	function d(e) {
		var t = e.conditionField, n = e.fields, a = e.label, i = e.onChangeConditions, l = r("useWAWebDeveloperToolsDBViewerColumnSearch")(n), c = l.formatters, d = l.searchResults, m = l.setQuery;
		return s.jsxs(r("WAWebDeveloperToolsDBViewerDropdown.react"), {
			label: a,
			children: [s.jsx(o("WAWebSearchInput").SearchInput, {
				placeholder: "Search fields",
				onSearch: m
			}), s.jsx(o("WAWebFlex.react").FlexColumn, {
				xstyle: u.fullWidth,
				grow: 1,
				shrink: 0,
				children: d.map(function(e, n) {
					var r = e.name, a = e.type;
					return s.jsx(S, {
						type: a,
						formatters: c,
						onSelect: function() {
							i(babelHelpers.extends({}, t, {
								key: r,
								value: null,
								match: o("WAWebDeveloperToolsLoadTable").FilterMatch.Unset
							}));
						},
						filter: r,
						selected: t.key === r
					}, r + "$-" + n);
				})
			})]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		switch (e) {
			case "string": return o("WAWebDeveloperToolsLoadTable").StringFilters;
			case "boolean": return [o("WAWebDeveloperToolsLoadTable").BoolFilter];
			case "number": return o("WAWebDeveloperToolsLoadTable").NumberFilters;
			case "date": return o("WAWebDeveloperToolsLoadTable").DateFilters;
			default: return o("WAWebDeveloperToolsLoadTable").AllFilters;
		}
	}
	function p(e) {
		return o("WAWebDeveloperToolsLoadTable").AllFilters.filter(function(t) {
			return !e.includes(t);
		});
	}
	function _(e) {
		var t, n = e.columns, a = e.conditionField, i = e.onChangeConditions, l = a.key, u = a.match, c = (t = n.find(function(e) {
			return e.name === l;
		})) == null ? void 0 : t.type, d = m(c), _ = p(d);
		return s.jsxs(r("WAWebDeveloperToolsDBViewerDropdown.react"), {
			label: o("WAWebDeveloperToolsLoadTable").formatFilterMatch(u),
			children: [
				s.jsx(r("WAWebDeveloperToolsDividerWithText.react"), { text: "SUGGESTED" }),
				d.map(function(e, t) {
					return s.jsx(g, {
						filter: e,
						conditionField: a,
						onChangeConditions: i,
						selected: u === e
					}, o("WAWebDeveloperToolsLoadTable").formatFilterMatch(e) + "-" + t);
				}),
				o("WAWebDeveloperToolsArrayUtils").isNonEmptyArray(_) && s.jsxs(s.Fragment, { children: [s.jsx(r("WAWebDeveloperToolsDividerWithText.react"), { text: "OTHER" }), _.map(function(e, t) {
					return s.jsx(g, {
						filter: e,
						conditionField: a,
						onChangeConditions: i,
						selected: u === e
					}, o("WAWebDeveloperToolsLoadTable").formatFilterMatch(e) + "-" + t);
				})] })
			]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e, t) {
		switch (!0) {
			case o("WAWebDeveloperToolsLoadTable").StringFilters.includes(e) && o("WAWebDeveloperToolsLoadTable").StringFilters.includes(t):
			case o("WAWebDeveloperToolsLoadTable").NumberFilters.includes(e) && o("WAWebDeveloperToolsLoadTable").NumberFilters.includes(t):
			case o("WAWebDeveloperToolsLoadTable").DateFilters.includes(e) && o("WAWebDeveloperToolsLoadTable").DateFilters.includes(t):
			case c.includes(e) && c.includes(t): return !0;
			default: return !1;
		}
	}
	function g(e) {
		var t = e.conditionField, n = e.filter, r = e.onChangeConditions, a = e.selected, i = t.match, l = t.value;
		return s.jsx(S, {
			onSelect: function() {
				var e = f(n, i);
				r(babelHelpers.extends({}, t, {
					match: n,
					value: e ? l : null
				}));
			},
			filter: o("WAWebDeveloperToolsLoadTable").formatFilterMatch(n),
			selected: a
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.conditionField, n = e.onChangeConditions, r = t.match, a = t.value;
		return o("WAWebDeveloperToolsLoadTable").StringFilters.includes(r) && s.jsx("input", {
			className: "xh8yej3 xy57btm x14ug900 x1gnnpzl xyi3aci xwf5gio x1p453bz x1suzm8a xx42vgk xbogo7e x120ee7l x1vb5itz x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1ktv7sr x142x0oa xv7zg05 x12dgle5",
			type: "text",
			value: a == null ? void 0 : a.toString(),
			onChange: function(r) {
				return n(babelHelpers.extends({}, t, { value: r.currentTarget.value }));
			}
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	var y = [o("WAWebDeveloperToolsLoadTable").FilterMatch.IsEmpty, o("WAWebDeveloperToolsLoadTable").FilterMatch.Bool], C = [!0, !1];
	function b(e) {
		var t = e.conditionField, n = e.onChangeConditions, o = t.match, a = t.value;
		return y.includes(o) && s.jsx(r("WAWebDeveloperToolsDBViewerDropdown.react"), {
			label: String(a != null ? a : "Select Boolean"),
			children: C.map(function(e, r) {
				return s.jsx(S, {
					onSelect: function() {
						return n(babelHelpers.extends({}, t, { value: e }));
					},
					filter: JSON.stringify(e),
					selected: a === e
				}, JSON.stringify(e) + "-" + r);
			})
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = e.conditionField, n = e.onChangeConditions, r = t.match, a = t.value;
		return o("WAWebDeveloperToolsLoadTable").NumberFilters.includes(r) && s.jsx("input", {
			className: "xh8yej3 xy57btm x14ug900 x1gnnpzl xyi3aci xwf5gio x1p453bz x1suzm8a xx42vgk xbogo7e x120ee7l x1vb5itz x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1ktv7sr x142x0oa xv7zg05 x12dgle5",
			type: "number",
			value: a == null ? void 0 : a.toString(),
			onChange: function(r) {
				return n(babelHelpers.extends({}, t, { value: r.currentTarget.value }));
			}
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		var t = e.filter, n = e.formatters, r = e.onSelect, a = e.selected, i = e.type;
		return s.jsx(o("WAWebFlex.react").FlexRow, {
			grow: 1,
			shrink: 0,
			align: "center",
			xstyle: u.fullWidth,
			children: s.jsx(o("WAWebMenu.react").WAWebMenu, {
				autoScroll: !1,
				minWidth: 300,
				children: s.jsx(o("WAWebCellMenuItem.react").CellV2MenuItem, {
					type: "single-select",
					onSelect: r,
					detailLeft: s.jsx(o("WAWebVisualRadio.react").WAWebVisualRadio, { checked: a }),
					optionId: t,
					primary: s.jsxs(o("WAWebFlex.react").FlexColumn, {
						gap: 2,
						children: [s.jsx(o("WAWebEmojiText.react").EmojiText, {
							formatters: n,
							className: a ? "xk4n5i7" : null,
							text: t
						}), s.jsx(o("WAWebDeveloperToolsDBViewerRowFilter.react").DisplayType, { type: i })]
					})
				})
			})
		});
	}
	S.displayName = S.name + " [from " + i.id + "]", l.FieldSelector = d, l.FilterSelector = _, l.StringInput = h, l.BooleanFilter = b, l.NumberFilter = v;
}), 98);
