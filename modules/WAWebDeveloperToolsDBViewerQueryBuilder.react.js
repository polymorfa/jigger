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
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime"
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
		var t = e.columns, a = e.conditions, i = e.loading, l = e.onExecuteQuery, u = e.onGroupChange, p = e.onPageViewChange, _ = d(JSON.stringify(a, null, 2)), h = _[0], y = _[1], C = d("Visual"), b = C[0], v = C[1], S = d(null), R = S[0], L = S[1], E = c(function(e) {
			var t = JSON.stringify(e, null, 2), n = o("WAWebDeveloperToolsQueryTable").isValidConditionSchema(t), r = n.reason, a = n.valid;
			a && (y(t), u(e)), L(r);
		}, [u]), k = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = [{
					type: "GROUP",
					conditionKey: o("WAWebDeveloperToolsLoadTable").MapKey.All,
					conditions: []
				}, {
					type: "GROUP",
					conditionKey: o("WAWebDeveloperToolsLoadTable").MapKey.Any,
					conditions: []
				}];
				y(JSON.stringify(e, null, 2)), L(null), u(e), yield l(e);
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), I = c(function() {
			o("WAWebCopyToClipboard").copyTextToClipboard(JSON.stringify(a)), o("WAWebToastManager").ToastManager.open(s.jsx(o("WAWebToast.react").Toast, { msg: "Query copied" }));
		}, [a]), T = c(function(e) {
			var t = e.target.value, n = o("WAWebDeveloperToolsQueryTable").isValidConditionSchema(t), r = n.reason, a = n.valid;
			if (a) try {
				var i = JSON.parse(t);
				E(i);
			} catch (e) {
				L(r);
			}
			else L(r);
			y(t);
		}, [E]), D = function() {
			try {
				var e = JSON.parse(h);
				JSON.parse(h), y(JSON.stringify(e != null ? e : "", null, 2)), E(e);
			} catch (e) {
				o("WAWebToastManager").ToastManager.open(s.jsx(o("WAWebToast.react").Toast, { msg: "Invalid Query" }));
			}
		}, x = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				yield l(a), p("Table");
			});
			return function() {
				return e.apply(this, arguments);
			};
		})();
		return s.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: m.marginAll8,
			gap: 8,
			children: [
				s.jsx(g, {
					invalidQueryReason: R,
					onFormatQuery: D,
					onQueryCopy: I,
					onResetConditions: k,
					onPageViewChange: v,
					pageView: b,
					userQuery: h
				}),
				b === "Visual" ? s.jsxs(s.Fragment, { children: [s.jsx(r("WAWebDeveloperToolsDBViewerConditionGroup.react"), {
					columns: t,
					group: a[0],
					nestedLevel: 1,
					onChangeConditions: function(t) {
						E([t != null ? t : {
							conditionKey: o("WAWebDeveloperToolsLoadTable").MapKey.All,
							type: "GROUP",
							conditions: []
						}, a[1]]);
					}
				}), s.jsx(r("WAWebDeveloperToolsDBViewerConditionGroup.react"), {
					columns: t,
					onChangeConditions: function(t) {
						E([a[0], t != null ? t : {
							conditionKey: o("WAWebDeveloperToolsLoadTable").MapKey.Any,
							type: "GROUP",
							conditions: []
						}]);
					},
					group: a[1],
					nestedLevel: 1
				})] }) : s.jsx(f, {
					handleQueryChange: T,
					isValidQuery: R == null,
					userQuery: h
				}),
				s.jsx(r("WAWebDeveloperToolsDBViewerButton.react"), {
					disabled: R != null,
					xstyle: m.paddingAll8,
					light: !0,
					loading: i,
					onClick: x,
					children: "Execute Query"
				})
			]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = o("react-compiler-runtime").c(6), n = e.handleQueryChange, r = e.isValidQuery, a = e.userQuery, i;
		t[0] !== r ? (i = {
			0: { className: "xh8yej3 x288g5 x1egiwwb xy57btm x1ey7xld x1f6kntn xzsf02u xyi3aci xwf5gio x1p453bz x1suzm8a x1uvtmcs x1xzn9jg" },
			1: { className: "xh8yej3 x288g5 x1egiwwb xy57btm x1ey7xld x1f6kntn xzsf02u xyi3aci xwf5gio x1p453bz x1suzm8a x1uvtmcs x1xzn9jg x113kvv2 xce17vl x61tcke x1kfnm9f" }
		}[!r << 0], t[0] = r, t[1] = i) : i = t[1];
		var l;
		return t[2] !== n || t[3] !== i || t[4] !== a ? (l = s.jsx(o("WAWebFlex.react").FlexItem, {
			grow: 1,
			shrink: 0,
			xstyle: m.inputContainer,
			children: s.jsx("textarea", babelHelpers.extends({}, i, {
				value: a,
				onChange: n
			}))
		}), t[2] = n, t[3] = i, t[4] = a, t[5] = l) : l = t[5], l;
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(24), n = e.invalidQueryReason, a = e.onFormatQuery, i = e.onPageViewChange, l = e.onQueryCopy, u = e.onResetConditions, c = e.pageView, d = e.userQuery, _;
		t[0] !== i || t[1] !== c ? (_ = s.jsx(r("WAWebDeveloperToolsDBViewerPageViewSelector.react"), {
			onPageViewChange: i,
			currentPage: c,
			pages: p
		}), t[0] = i, t[1] = c, t[2] = _) : _ = t[2];
		var f;
		t[3] !== n || t[4] !== a || t[5] !== c || t[6] !== d ? (f = c === "Manual" && s.jsxs(s.Fragment, { children: [s.jsx(r("WAWebDeveloperToolsDBViewerButton.react"), {
			fixedHeight: !0,
			xstyle: m.paddingAll8,
			light: !0,
			onClick: a,
			children: s.jsxs(o("WAWebFlex.react").FlexRow, {
				gap: 8,
				align: "center",
				children: [s.jsx(o("WAWebDeveloperToolsCustomIcons.react").FormatQueryIconCustom, {}), "Format"]
			})
		}), n != null && d && s.jsx(o("WAWebText.react").WAWebTextTitle, {
			color: "critical",
			children: n
		})] }), t[3] = n, t[4] = a, t[5] = c, t[6] = d, t[7] = f) : f = t[7];
		var g;
		t[8] !== _ || t[9] !== f ? (g = s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 8,
			children: [_, f]
		}), t[8] = _, t[9] = f, t[10] = g) : g = t[10];
		var h = n != null, y;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (y = s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 8,
			children: ["Copy", s.jsx(r("WDSIconIcContentCopy.react"), {
				height: 20,
				width: 20
			})]
		}), t[11] = y) : y = t[11];
		var C;
		t[12] !== l || t[13] !== h ? (C = s.jsx(r("WAWebDeveloperToolsDBViewerButton.react"), {
			fixedHeight: !0,
			xstyle: m.paddingAll8,
			light: !0,
			onClick: l,
			disabled: h,
			children: y
		}), t[12] = l, t[13] = h, t[14] = C) : C = t[14];
		var b;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? (b = s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 8,
			children: ["Reset", s.jsx(o("WAWebRefreshIcon.react").RefreshIcon, {
				height: 20,
				width: 20
			})]
		}), t[15] = b) : b = t[15];
		var v;
		t[16] !== u ? (v = s.jsx(r("WAWebDeveloperToolsDBViewerButton.react"), {
			fixedHeight: !0,
			xstyle: m.paddingAll8,
			light: !0,
			onClick: u,
			children: b
		}), t[16] = u, t[17] = v) : v = t[17];
		var S;
		t[18] !== C || t[19] !== v ? (S = s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 8,
			children: [C, v]
		}), t[18] = C, t[19] = v, t[20] = S) : S = t[20];
		var R;
		return t[21] !== g || t[22] !== S ? (R = s.jsxs(o("WAWebFlex.react").FlexRow, {
			gap: 8,
			xstyle: m.container,
			justify: "all",
			align: "center",
			children: [g, S]
		}), t[21] = g, t[22] = S, t[23] = R) : R = t[23], R;
	}
	l.default = _;
}), 98);
