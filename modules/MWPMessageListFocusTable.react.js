__d("MWPMessageListFocusTable.react", [
	"fbt",
	"CometScreenReaderHeading.react",
	"FocusRegion.react",
	"MWMessageTableFocusTable.react",
	"MWV2MessageListIsRowModalContext.react",
	"emptyFunction",
	"focusScopeQueries",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useMemo;
	function p(e, t, n) {
		return t["data-scope"] === "date_break";
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(25), n = e.ariaLabel, a = e.children, i = e.hasMessages, l = e.id, c = e.modal, d = e.onNavigate, m = e.setModal, _ = e.wrapX, f = e.wrapY, g = i === void 0 ? !0 : i, h = d === void 0 ? r("emptyFunction") : d, y = _ === void 0 ? !1 : _, C = f === void 0 ? !1 : f, b;
		t[0] !== h ? (b = function(t) {
			h(t);
			var e = t.type;
			e: switch (e) {
				case "PREV_ROW":
				case "NEXT_ROW": {
					var n = e === "NEXT_ROW", r = Math.trunc(t.currentRowIndex + (n ? 1 : -1)), o = t.getCell(r, t.currentCellIndex);
					if (o == null) return;
					var a = o.scopeRef.current, i = a != null ? a.DO_NOT_USE_queryFirstNode(p) : null;
					if (i == null) return;
					t.preventDefault(), r = Math.trunc(r + (n ? 1 : -1));
					for (var l = !1; !l;) {
						var s = t.getCell(r, t.currentCellIndex);
						if (s == null) l = !0;
						else {
							var u = s.scopeRef.current, c = u != null ? u.DO_NOT_USE_queryFirstNode(p) : null;
							c != null ? r = Math.trunc(r + (n ? 1 : -1)) : (t.focusCell(s), l = !0);
						}
					}
					return;
				}
				case "PAGE_DOWN":
				case "PAGE_UP": break e;
				default: return;
			}
			var d = e === "PAGE_DOWN";
			t.preventDefault();
			for (var m = Math.trunc(t.currentRowIndex + (d ? 1 : -1)), _ = !1; !_;) {
				var f = t.getCell(m, t.currentCellIndex);
				if (f == null) {
					var g = t.getCell(d ? Math.trunc(m - 1) : 0, t.currentCellIndex);
					g != null && t.focusCell(g), _ = !0;
				} else {
					var y = f.scopeRef.current, C = y != null ? y.DO_NOT_USE_queryFirstNode(p) : null;
					C == null ? m = Math.trunc(d ? m + 1 : m - 1) : (t.focusCell(f), _ = !0);
				}
			}
		}, t[0] = h, t[1] = b) : b = t[1];
		var v = b, S;
		e: {
			if (g) {
				var R;
				t[2] === Symbol.for("react.memo_cache_sentinel") ? (R = { className: "x1gp6l83 x18b5jzi x1alpsbp x148vw1v x1t7ytsu xyumdvf x78zum5 xdt5ytf x1iyjqo2 x6ikm8r x10wlt62" }, t[2] = R) : R = t[2];
				var L;
				t[3] !== n || t[4] !== a || t[5] !== l ? (L = u.jsx("div", babelHelpers.extends({
					"aria-label": n,
					"aria-live": "polite",
					"data-testid": void 0,
					id: l
				}, R, {
					role: "log",
					children: a
				})), t[3] = n, t[4] = a, t[5] = l, t[6] = L) : L = t[6], S = L;
				break e;
			}
			var E;
			t[7] === Symbol.for("react.memo_cache_sentinel") ? (E = { className: "x1gp6l83 x18b5jzi x1alpsbp x148vw1v x1t7ytsu xyumdvf x78zum5 xdt5ytf x1iyjqo2 x6ikm8r x10wlt62" }, t[7] = E) : E = t[7];
			var k;
			t[8] !== a || t[9] !== l ? (k = u.jsx("div", babelHelpers.extends({
				"data-testid": void 0,
				id: l
			}, E, { children: a })), t[8] = a, t[9] = l, t[10] = k) : k = t[10], S = k;
		}
		var I = S, T;
		t[11] !== g ? (T = g && u.jsx(r("CometScreenReaderHeading.react"), { children: s._(
			/*BTDS*/
			""
		) }), t[11] = g, t[12] = T) : T = t[12];
		var D;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (D = u.jsx("div", {
			"aria-atomic": "true",
			role: "status",
			className: "xzpqnlu x1hyvwdk xjm9jq1 x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
		}), t[13] = D) : D = t[13];
		var x = c !== "", $;
		t[14] !== I || t[15] !== v || t[16] !== x || t[17] !== y || t[18] !== C ? ($ = u.jsx(o("FocusRegion.react").FocusRegion, {
			recoverFocusQuery: o("MWMessageTableFocusTable.react").scopeQuery,
			stopOnFocusWithinPropagation: !1,
			children: u.jsx(o("MWMessageTableFocusTable.react").FocusTable[0], {
				allowModifiers: !0,
				disabled: x,
				onNavigate: v,
				tabScopeQuery: o("focusScopeQueries").tabbableScopeQuery,
				wrapX: y,
				wrapY: C,
				children: I
			})
		}), t[14] = I, t[15] = v, t[16] = x, t[17] = y, t[18] = C, t[19] = $) : $ = t[19];
		var P;
		return t[20] !== c || t[21] !== m || t[22] !== $ || t[23] !== T ? (P = u.jsxs(o("MWV2MessageListIsRowModalContext.react").MWV2MessageListIsRowModalContextProvider, {
			modal: c,
			setModal: m,
			children: [
				T,
				D,
				$
			]
		}), t[20] = c, t[21] = m, t[22] = $, t[23] = T, t[24] = P) : P = t[24], P;
	}
	l.default = _;
}), 226);
