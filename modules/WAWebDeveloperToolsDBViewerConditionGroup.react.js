__d("WAWebDeveloperToolsDBViewerConditionGroup.react", [
	"WAWebDeveloperToolsArrayUtils",
	"WAWebDeveloperToolsDBViewerButton.react",
	"WAWebDeveloperToolsDBViewerConditionRule.react",
	"WAWebDeveloperToolsLoadTable",
	"WAWebFlex.react",
	"WAWebPlusIcon.react",
	"WAWebText.react",
	"WAWebXIcon.react",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = { paddingInlineEnd10: {
		paddingInlineEnd: "x2vl965",
		$$css: !0
	} }, c = {
		fullWidth: {
			minWidth: "xgqtt45",
			$$css: !0
		},
		groupContainer: {
			minWidth: "xppr10f",
			$$css: !0
		},
		groupBorder: {
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			borderTopWidth: "x1ktv7sr",
			borderInlineEndWidth: "x142x0oa",
			borderBottomWidth: "xv7zg05",
			borderInlineStartWidth: "x12dgle5",
			borderTopColor: "xx42vgk",
			borderInlineEndColor: "xbogo7e",
			borderBottomColor: "x120ee7l",
			borderInlineStartColor: "x1vb5itz",
			$$css: !0
		}
	};
	function d(e) {
		var t, n = e.columns, a = e.group, i = e.nestedLevel, l = e.onChangeConditions, u = function(t, n) {
			var e = babelHelpers.extends({}, a);
			p(n) || n === 0 ? e.conditions.splice(n, 1, t) : e.conditions = [].concat(a.conditions, [t]), l(e);
		}, _ = function(t) {
			var e = a.conditions.slice(), n = babelHelpers.extends({}, a);
			n.conditions = [].concat(e.slice(0, t), e.slice(t + 1)), l(n);
		};
		return s.jsx((t = o("WAWebFlex.react")).FlexItem, {
			xstyle: c.fullWidth,
			children: s.jsxs(t.FlexItem, {
				xstyle: [
					o("WDSPaddings.stylex").wdsPaddings.padding16,
					c.groupBorder,
					c.groupContainer
				],
				children: [
					s.jsxs(t.FlexRow, {
						align: "center",
						gap: 8,
						xstyle: o("WDSPaddings.stylex").wdsPaddings.padding4,
						justify: "all",
						children: [s.jsxs(t.FlexRow, {
							gap: 4,
							children: [s.jsx(o("WAWebText.react").WAWebTextTitle, {
								color: "primary",
								children: a.conditionKey
							}), s.jsx(o("WAWebText.react").WAWebTextTitle, {
								color: "secondary",
								children: "of the following"
							})]
						}), s.jsx(r("WAWebDeveloperToolsDBViewerButton.react"), {
							disabled: o("WAWebDeveloperToolsArrayUtils").isEmptyArray(a.conditions) && i === 1,
							xstyle: o("WDSPaddings.stylex").wdsPaddings.padding2,
							light: !0,
							onClick: function() {
								l(null);
							},
							children: s.jsx(o("WAWebXIcon.react").XIcon, {})
						})]
					}),
					s.jsx(o("WAWebFlex.react").FlexColumn, {
						gap: 4,
						children: a.conditions.map(function(e, t) {
							var a = (t + 1) * i;
							return s.jsx(o("WAWebFlex.react").FlexItem, {
								xstyle: c.fullWidth,
								children: s.jsx(o("WAWebFlex.react").FlexRow, {
									xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingStart32,
									children: e.type === "RULE" ? s.jsx(r("WAWebDeveloperToolsDBViewerConditionRule.react"), {
										columns: n,
										onChangeConditions: function(n) {
											u(n, t);
										},
										handleRemove: function() {
											return _(t);
										},
										conditionField: e
									}) : s.jsx(d, {
										columns: n,
										onChangeConditions: function(n) {
											return p(n) ? u(n, t) : _(t);
										},
										group: e,
										nestedLevel: i + 1
									})
								})
							}, "nested-condition-" + a);
						})
					}),
					s.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						xstyle: [c.fullWidth, o("WDSPaddings.stylex").wdsPaddings.paddingTop12],
						gap: 8,
						children: [
							s.jsx(m, {
								field: {
									type: "RULE",
									key: n[0].name,
									match: o("WAWebDeveloperToolsLoadTable").FilterMatch.Unset,
									value: ""
								},
								label: "Field",
								onAddCondition: u
							}),
							s.jsx(m, {
								field: {
									type: "GROUP",
									conditionKey: o("WAWebDeveloperToolsLoadTable").MapKey.All,
									conditions: []
								},
								label: "All",
								onAddCondition: u
							}),
							s.jsx(m, {
								field: {
									type: "GROUP",
									conditionKey: o("WAWebDeveloperToolsLoadTable").MapKey.Any,
									conditions: []
								},
								label: "Any",
								onAddCondition: u
							})
						]
					})
				]
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = o("react-compiler-runtime").c(9), n = e.field, a = e.label, i = e.onAddCondition, l;
		t[0] !== n || t[1] !== i ? (l = function() {
			return i(n);
		}, t[0] = n, t[1] = i, t[2] = l) : l = t[2];
		var c;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (c = s.jsx(o("WAWebPlusIcon.react").PlusIcon, {}), t[3] = c) : c = t[3];
		var d;
		t[4] !== a ? (d = s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: u.paddingInlineEnd10,
			children: [c, a]
		}), t[4] = a, t[5] = d) : d = t[5];
		var m;
		return t[6] !== l || t[7] !== d ? (m = s.jsx(r("WAWebDeveloperToolsDBViewerButton.react"), {
			xstyle: o("WDSPaddings.stylex").wdsPaddings.padding0,
			light: !0,
			onClick: l,
			children: d
		}), t[6] = l, t[7] = d, t[8] = m) : m = t[8], m;
	}
	function p(e) {
		return !!e;
	}
	l.default = d;
}), 98);
