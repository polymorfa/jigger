__d("WAWebDeveloperToolsDBViewerQueryBuilder.react", [
	"WAWebCopyToClipboard",
	"WAWebDeveloperToolsCustomIcons.react",
	"WAWebDeveloperToolsDBViewerButton.react",
	"WAWebDeveloperToolsDBViewerConditionGroup.react",
	"WAWebDeveloperToolsDBViewerPageViewSelector.react",
	"WAWebDeveloperToolsLoadTable",
	"WAWebDeveloperToolsQueryTable",
	"WAWebFlex.react",
	"WAWebRefreshIcon.react",
	"WAWebText.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WDSIconIcContentCopy.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useState, m = {
		container: {
			width: "xh8yej3",
			$$css: !0
		},
		inputContainer: {
			width: "xh8yej3",
			$$css: !0
		},
		marginAll8: {
			marginTop: "x1380le5",
			marginInlineEnd: "xqf2s3x",
			marginBottom: "xefnzgg",
			marginInlineStart: "x150mmf0",
			$$css: !0
		},
		paddingAll8: {
			paddingTop: "x16ovd2e",
			paddingInlineEnd: "x1nzty39",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x12w63v0",
			$$css: !0
		}
	}, p = [{
		id: "Visual",
		icon: s.jsx(o("WAWebDeveloperToolsCustomIcons.react").VisualQueryIconCustom, {})
	}, {
		id: "Manual",
		icon: s.jsx(o("WAWebDeveloperToolsCustomIcons.react").ManualQueryIconCustom, {})
	}];
	function _(e) {
		var t = e.columns, n = e.conditions, a = e.loading, i = e.onExecuteQuery, l = e.onGroupChange, u = e.onPageViewChange, p = d(JSON.stringify(n, null, 2)), _ = p[0], h = p[1], y = d("Visual"), C = y[0], b = y[1], v = d(null), S = v[0], R = v[1], L = c(function(e) {
			var t = JSON.stringify(e, null, 2), n = o("WAWebDeveloperToolsQueryTable").isValidConditionSchema(t), r = n.reason, a = n.valid;
			a && (h(t), l(e)), R(r);
		}, [l]), E = async function() {
			var e = [{
				type: "GROUP",
				conditionKey: o("WAWebDeveloperToolsLoadTable").MapKey.All,
				conditions: []
			}, {
				type: "GROUP",
				conditionKey: o("WAWebDeveloperToolsLoadTable").MapKey.Any,
				conditions: []
			}];
			h(JSON.stringify(e, null, 2)), R(null), l(e), await i(e);
		}, k = c(function() {
			o("WAWebCopyToClipboard").copyTextToClipboard(JSON.stringify(n)), o("WAWebToastManager").ToastManager.open(s.jsx(o("WAWebToast.react").Toast, { msg: "Query copied" }));
		}, [n]), I = c(function(e) {
			var t = e.target.value, n = o("WAWebDeveloperToolsQueryTable").isValidConditionSchema(t), r = n.reason, a = n.valid;
			if (a) try {
				var i = JSON.parse(t);
				L(i);
			} catch (e) {
				R(r);
			}
			else R(r);
			h(t);
		}, [L]), T = function() {
			try {
				var e = JSON.parse(_);
				JSON.parse(_), h(JSON.stringify(e != null ? e : "", null, 2)), L(e);
			} catch (e) {
				o("WAWebToastManager").ToastManager.open(s.jsx(o("WAWebToast.react").Toast, { msg: "Invalid Query" }));
			}
		}, D = async function() {
			await i(n), u("Table");
		};
		return s.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: m.marginAll8,
			gap: 8,
			children: [
				s.jsx(g, {
					invalidQueryReason: S,
					onFormatQuery: T,
					onQueryCopy: k,
					onResetConditions: E,
					onPageViewChange: b,
					pageView: C,
					userQuery: _
				}),
				C === "Visual" ? s.jsxs(s.Fragment, { children: [s.jsx(r("WAWebDeveloperToolsDBViewerConditionGroup.react"), {
					columns: t,
					group: n[0],
					nestedLevel: 1,
					onChangeConditions: function(t) {
						L([t != null ? t : {
							conditionKey: o("WAWebDeveloperToolsLoadTable").MapKey.All,
							type: "GROUP",
							conditions: []
						}, n[1]]);
					}
				}), s.jsx(r("WAWebDeveloperToolsDBViewerConditionGroup.react"), {
					columns: t,
					onChangeConditions: function(t) {
						L([n[0], t != null ? t : {
							conditionKey: o("WAWebDeveloperToolsLoadTable").MapKey.Any,
							type: "GROUP",
							conditions: []
						}]);
					},
					group: n[1],
					nestedLevel: 1
				})] }) : s.jsx(f, {
					handleQueryChange: I,
					isValidQuery: S == null,
					userQuery: _
				}),
				s.jsx(r("WAWebDeveloperToolsDBViewerButton.react"), {
					disabled: S != null,
					xstyle: m.paddingAll8,
					light: !0,
					loading: a,
					onClick: D,
					children: "Execute Query"
				})
			]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.handleQueryChange, n = e.isValidQuery, r = e.userQuery;
		return s.jsx(o("WAWebFlex.react").FlexItem, {
			grow: 1,
			shrink: 0,
			xstyle: m.inputContainer,
			children: s.jsx("textarea", babelHelpers.extends({}, {
				0: { className: "xh8yej3 x288g5 x1egiwwb xy57btm x1ey7xld x1f6kntn xzsf02u xyi3aci xwf5gio x1p453bz x1suzm8a x1uvtmcs x1xzn9jg" },
				1: { className: "xh8yej3 x288g5 x1egiwwb xy57btm x1ey7xld x1f6kntn xzsf02u xyi3aci xwf5gio x1p453bz x1suzm8a x1uvtmcs x1xzn9jg x113kvv2 xce17vl x61tcke x1kfnm9f" }
			}[!n << 0], {
				value: r,
				onChange: t
			}))
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = e.invalidQueryReason, n = e.onFormatQuery, a = e.onPageViewChange, i = e.onQueryCopy, l = e.onResetConditions, u = e.pageView, c = e.userQuery, d = r("WDSIconIcContentCopy.react");
		return s.jsxs(o("WAWebFlex.react").FlexRow, {
			gap: 8,
			xstyle: m.container,
			justify: "all",
			align: "center",
			children: [s.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				gap: 8,
				children: [s.jsx(r("WAWebDeveloperToolsDBViewerPageViewSelector.react"), {
					onPageViewChange: a,
					currentPage: u,
					pages: p
				}), u === "Manual" && s.jsxs(s.Fragment, { children: [s.jsx(r("WAWebDeveloperToolsDBViewerButton.react"), {
					fixedHeight: !0,
					xstyle: m.paddingAll8,
					light: !0,
					onClick: n,
					children: s.jsxs(o("WAWebFlex.react").FlexRow, {
						gap: 8,
						align: "center",
						children: [s.jsx(o("WAWebDeveloperToolsCustomIcons.react").FormatQueryIconCustom, {}), "Format"]
					})
				}), t != null && c && s.jsx(o("WAWebText.react").WAWebTextTitle, {
					color: "critical",
					children: t
				})] })]
			}), s.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				gap: 8,
				children: [s.jsx(r("WAWebDeveloperToolsDBViewerButton.react"), {
					fixedHeight: !0,
					xstyle: m.paddingAll8,
					light: !0,
					onClick: i,
					disabled: t != null,
					children: s.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						gap: 8,
						children: ["Copy", s.jsx(d, {
							height: 20,
							width: 20
						})]
					})
				}), s.jsx(r("WAWebDeveloperToolsDBViewerButton.react"), {
					fixedHeight: !0,
					xstyle: m.paddingAll8,
					light: !0,
					onClick: l,
					children: s.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						gap: 8,
						children: ["Reset", s.jsx(o("WAWebRefreshIcon.react").RefreshIcon, {
							height: 20,
							width: 20
						})]
					})
				})]
			})]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = _;
}), 98);
