__d("WAWebDeveloperToolsDBViewerRowFilter.react", [
	"WAWebCellMenuItem.react",
	"WAWebDeveloperToolsArrayUtils",
	"WAWebDeveloperToolsDBViewerButton.react",
	"WAWebDeveloperToolsDBViewerDropdown.react",
	"WAWebDeveloperToolsDBViewerTableSelector.react",
	"WAWebDeveloperToolsDBViewerUpdateFilters",
	"WAWebDeveloperToolsDividerWithText.react",
	"WAWebDeveloperToolsLoadTable",
	"WAWebDeveloperToolsPopoverPill.react",
	"WAWebEmojiText.react",
	"WAWebFilterIcon.react",
	"WAWebFlex.react",
	"WAWebMenu.react",
	"WAWebSearchInput",
	"WAWebText.react",
	"WAWebVisualRadio.react",
	"WAWebXIcon.react",
	"react",
	"useWAWebDeveloperToolsDBViewerColumnSearch"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = {
		popoverContainer: {
			maxHeight: "x9ybwvh",
			minWidth: "x1htk8sl",
			$$css: !0
		},
		fullWidth: {
			width: "xh8yej3",
			$$css: !0
		},
		noScroll: {
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		paddingAll8: {
			paddingTop: "x16ovd2e",
			paddingInlineEnd: "x1nzty39",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x12w63v0",
			$$css: !0
		}
	};
	function c(e) {
		var t = e.columns, n = e.filters, a = e.onFilterChange, i = async function() {
			await a([].concat(n, [{
				key: t[0].name,
				value: null,
				match: o("WAWebDeveloperToolsLoadTable").FilterMatch.Unset
			}]));
		}, l = o("WAWebDeveloperToolsArrayUtils").isNonEmptyArray(n), c = "Filters " + (l ? "| " + n.length : "");
		return s.jsx(o("WAWebDeveloperToolsPopoverPill.react").DeveloperToolsPopoverPill, {
			disabled: o("WAWebDeveloperToolsArrayUtils").isEmptyArray(t),
			xstyle: u.popoverContainer,
			active: l,
			label: s.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				gap: 8,
				children: [s.jsx(o("WAWebFilterIcon.react").FilterIcon, {
					height: 20,
					width: 20
				}), c]
			}),
			children: s.jsxs(o("WAWebFlex.react").FlexColumn, { children: [s.jsxs(o("WAWebFlex.react").FlexRow, {
				xstyle: u.fullWidth,
				grow: 1,
				shrink: 0,
				gap: 8,
				children: [s.jsx(r("WAWebDeveloperToolsDBViewerButton.react"), {
					fullWidth: !0,
					onClick: i,
					children: "Add Filter"
				}), s.jsx(r("WAWebDeveloperToolsDBViewerButton.react"), {
					disabled: o("WAWebDeveloperToolsArrayUtils").isEmptyArray(n),
					fullWidth: !0,
					onClick: function() {
						return a([]);
					},
					children: "Reset Filters"
				})]
			}), s.jsx(o("WAWebFlex.react").FlexColumn, {
				xstyle: u.fullWidth,
				children: n.map(function(e, r) {
					var i, l = e.key, u = e.match, c = e.value;
					return s.jsxs(E, {
						showDivider: !o("WAWebDeveloperToolsArrayUtils").isLastItemInArray(n, r),
						children: [s.jsxs(o("WAWebFlex.react").FlexRow, {
							justify: "start",
							gap: 4,
							grow: 1,
							children: [
								s.jsx(d, {
									label: l,
									fields: t,
									filterIndex: r,
									filters: n,
									onFilterChange: a
								}),
								s.jsx(_, {
									filterIndex: r,
									columns: t,
									filters: n,
									match: u,
									onFilterChange: a
								}),
								s.jsx(g, {
									filterIndex: r,
									filters: n,
									match: u,
									value: (i = c == null ? void 0 : c.toString()) != null ? i : "",
									onFilterChange: a
								}),
								s.jsx(C, {
									filterIndex: r,
									match: u,
									onFilterChange: a,
									filters: n,
									value: c
								}),
								s.jsx(b, {
									filterIndex: r,
									match: u,
									onFilterChange: a,
									filters: n,
									value: c
								}),
								s.jsx(v, {
									filterIndex: r,
									match: u,
									onFilterChange: a,
									filters: n,
									value: c
								})
							]
						}), s.jsx(k, { updateFilters: function() {
							return o("WAWebDeveloperToolsDBViewerUpdateFilters").updateFilters(r, n, a);
						} })]
					}, "" + l + r);
				})
			})] })
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e) {
		var t = e.fields, n = e.filterIndex, a = e.filters, i = e.label, l = e.onFilterChange, c = r("useWAWebDeveloperToolsDBViewerColumnSearch")(t), d = c.formatters, m = c.searchResults, p = c.setQuery;
		return s.jsxs(r("WAWebDeveloperToolsDBViewerDropdown.react"), {
			label: i,
			children: [s.jsx(o("WAWebSearchInput").SearchInput, {
				placeholder: "Search fields",
				onSearch: p
			}), s.jsx(o("WAWebFlex.react").FlexColumn, {
				xstyle: u.fullWidth,
				grow: 1,
				shrink: 0,
				children: m.map(function(e, t) {
					var r = e.name, i = e.type;
					return s.jsx(R, {
						type: i,
						formatters: d,
						onSelect: function() {
							return o("WAWebDeveloperToolsDBViewerUpdateFilters").updateFilters(n, a, l, babelHelpers.extends({}, a[n], {
								key: r,
								match: o("WAWebDeveloperToolsLoadTable").FilterMatch.Unset,
								value: null
							}));
						},
						filter: r,
						selected: a[n].key === r
					}, "" + r + n + "-" + t);
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
		var t, n = e.columns, a = e.filterIndex, i = e.filters, l = e.match, u = e.onFilterChange, c = (t = n.find(function(e) {
			return e.name === i[a].key;
		})) == null ? void 0 : t.type, d = m(c), _ = p(d);
		return s.jsxs(r("WAWebDeveloperToolsDBViewerDropdown.react"), {
			label: String(l),
			children: [
				s.jsx(r("WAWebDeveloperToolsDividerWithText.react"), { text: "SUGGESTED" }),
				d.map(function(e, t) {
					return s.jsx(f, {
						filter: e,
						filterIndex: a,
						filters: i,
						onFilterChange: u,
						selected: l === e
					}, "" + o("WAWebDeveloperToolsLoadTable").formatFilterMatch(e) + a + "-" + t);
				}),
				o("WAWebDeveloperToolsArrayUtils").isNonEmptyArray(_) && s.jsxs(s.Fragment, { children: [s.jsx(r("WAWebDeveloperToolsDividerWithText.react"), { text: "OTHER" }), _.map(function(e, t) {
					return s.jsx(f, {
						filter: e,
						filterIndex: a,
						filters: i,
						onFilterChange: u,
						selected: l === e
					}, "" + o("WAWebDeveloperToolsLoadTable").formatFilterMatch(e) + a + "-" + t);
				})] })
			]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.filter, n = e.filterIndex, r = e.filters, a = e.onFilterChange, i = e.selected;
		return s.jsx(R, {
			onSelect: function() {
				return o("WAWebDeveloperToolsDBViewerUpdateFilters").updateFilters(n, r, a, babelHelpers.extends({}, r[n], {
					match: t,
					value: null
				}));
			},
			filter: o("WAWebDeveloperToolsLoadTable").formatFilterMatch(t),
			selected: i
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = e.filterIndex, n = e.filters, r = e.match, a = e.onFilterChange, i = e.value;
		return o("WAWebDeveloperToolsLoadTable").StringFilters.includes(r) && s.jsx("input", {
			className: "xh8yej3 xy57btm x14ug900 x1gnnpzl xyi3aci xwf5gio x1p453bz x1suzm8a xx42vgk xbogo7e x120ee7l x1vb5itz x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1ktv7sr x142x0oa xv7zg05 x12dgle5",
			type: "text",
			value: i,
			onChange: function(r) {
				return o("WAWebDeveloperToolsDBViewerUpdateFilters").updateFilters(t, n, a, babelHelpers.extends({}, n[t], { value: r.currentTarget.value }));
			}
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	var h = [o("WAWebDeveloperToolsLoadTable").FilterMatch.IsEmpty, o("WAWebDeveloperToolsLoadTable").FilterMatch.Bool], y = [!0, !1];
	function C(e) {
		var t = e.filterIndex, n = e.filters, a = e.match, i = e.onFilterChange, l = e.value;
		return h.includes(a) && s.jsx(r("WAWebDeveloperToolsDBViewerDropdown.react"), {
			label: String(l != null ? l : "Select Boolean"),
			children: y.map(function(e, r) {
				return s.jsx(R, {
					onSelect: function() {
						return o("WAWebDeveloperToolsDBViewerUpdateFilters").updateFilters(t, n, i, babelHelpers.extends({}, n[t], { value: e }));
					},
					filter: JSON.stringify(e),
					selected: l === e
				}, "" + JSON.stringify(e) + t + "-" + r);
			})
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = e.filterIndex, n = e.filters, r = e.match, a = e.onFilterChange, i = e.value;
		return o("WAWebDeveloperToolsLoadTable").NumberFilters.includes(r) && s.jsx("input", {
			className: "xh8yej3 xy57btm x14ug900 x1gnnpzl xyi3aci xwf5gio x1p453bz x1suzm8a xx42vgk xbogo7e x120ee7l x1vb5itz x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1ktv7sr x142x0oa xv7zg05 x12dgle5",
			type: "number",
			value: i == null ? void 0 : i.toString(),
			onChange: function(r) {
				return o("WAWebDeveloperToolsDBViewerUpdateFilters").updateFilters(t, n, a, babelHelpers.extends({}, n[t], { value: r.currentTarget.value }));
			}
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = e.filterIndex, n = e.filters, a = e.match, i = e.onFilterChange, l = e.value;
		if (o("WAWebDeveloperToolsLoadTable").DateFilters.includes(a)) {
			var c = a === o("WAWebDeveloperToolsLoadTable").FilterMatch.DateIs, d = l != null ? new Date(l.toString()).toLocaleDateString("en-US", {
				weekday: "short",
				day: "numeric",
				month: "short",
				year: "numeric",
				hour: c ? void 0 : "numeric",
				minute: c ? void 0 : "numeric"
			}) : "Choose Date", m = async function(r) {
				var e = r.currentTarget.value;
				await o("WAWebDeveloperToolsDBViewerUpdateFilters").updateFilters(t, n, i, babelHelpers.extends({}, n[t], { value: e })), r.stopPropagation();
			};
			return s.jsx(r("WAWebDeveloperToolsDBViewerDropdown.react"), {
				xstyle: u.noScroll,
				label: d,
				children: s.jsx(s.Fragment, { children: c ? s.jsx(S, {
					value: l,
					type: "date",
					handleDateChange: m
				}) : s.jsx(S, {
					value: l,
					type: "datetime-local",
					handleDateChange: m
				}) })
			});
		}
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		var t = e.handleDateChange, n = e.type, r = e.value, o = s.createRef(), a = function() {
			var e, t;
			(e = o.current) == null || e.focus(), (t = o.current) == null || t.showPicker();
		};
		return s.jsx("input", {
			ref: o,
			className: "xx42vgk xbogo7e x120ee7l x1vb5itz x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1ktv7sr x142x0oa xv7zg05 x12dgle5 x16ovd2e x1nzty39 x12xbjc7 x12w63v0 x14wt824 x14ug900 x1jzhcrs x12ol6y4 x180vkcf x1khw62d x709u02",
			type: n,
			name: "Date Filter",
			value: r == null ? void 0 : r.toString(),
			onChange: t,
			onClick: a
		});
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e) {
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
						}), s.jsx(L, { type: i })]
					})
				})
			})
		});
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		var t = e.type;
		return t != null && t !== "undefined" && s.jsx(o("WAWebText.react").WAWebTextSmall, { children: t });
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E(e) {
		var t = e.children, n = e.showDivider;
		return s.jsxs(o("WAWebFlex.react").FlexItem, {
			xstyle: u.fullWidth,
			children: [s.jsx(o("WAWebFlex.react").FlexRow, {
				xstyle: u.paddingAll8,
				justify: "all",
				align: "center",
				gap: 4,
				grow: 1,
				shrink: 0,
				children: t
			}), s.jsx(o("WAWebDeveloperToolsDBViewerTableSelector.react").Divider, { show: n })]
		});
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k(e) {
		var t = e.updateFilters;
		return s.jsx(r("WAWebDeveloperToolsDBViewerButton.react"), {
			light: !0,
			onClick: t,
			children: s.jsx(o("WAWebXIcon.react").XIcon, {})
		});
	}
	k.displayName = k.name + " [from " + i.id + "]", l.DeveloperToolsDBViewerRowFilter = c, l.Selector = R, l.DisplayType = L;
}), 98);
