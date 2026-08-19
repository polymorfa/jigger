__d("WAWebDeveloperToolsDBViewerBaseTable.react", [
	"WAWebCopyToClipboard",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUnstyledButton.react",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = {
		cell: {
			textAlign: "x1yc453h",
			width: "xezivpi",
			overflowWrap: "xj0a0fe",
			maxWidth: "xw5ewwj",
			maxHeight: "xkgu5aw",
			overflowX: "x14aock7",
			overflowY: "x1rife3k",
			":hover_textDecoration": "xt0b8zv",
			$$css: !0
		},
		oddRow: {
			backgroundColor: "xy57btm",
			$$css: !0
		},
		center: {
			textAlign: "x2b8uid",
			$$css: !0
		},
		paddingAll12: {
			paddingTop: "x1xrf6ya",
			paddingInlineEnd: "xde1mab",
			paddingBottom: "xscbp6u",
			paddingInlineStart: "x1iw51ew",
			$$css: !0
		},
		paddingHoriz24: {
			paddingInlineStart: "xb0esv5",
			paddingInlineEnd: "xyo0t3i",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		}
	};
	function d(e) {
		var t = o("react-compiler-runtime").c(3), n = e.children, r;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = { className: "xh8yej3" }, t[0] = r) : r = t[0];
		var a;
		return t[1] !== n ? (a = u.jsx("table", babelHelpers.extends({}, r, { children: n })), t[1] = n, t[2] = a) : a = t[2], a;
	}
	function m(e) {
		var t = o("react-compiler-runtime").c(3), n = e.children, r;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = u.jsx("th", {
			className: "x1xrf6ya xde1mab xscbp6u x1iw51ew x1yc453h x7wzq59 x13vifvy x1q7yeco xk4n5i7 x1fsd2vl",
			children: "#"
		}), t[0] = r) : r = t[0];
		var a;
		return t[1] !== n ? (a = u.jsx("thead", { children: u.jsxs("tr", { children: [r, n] }) }), t[1] = n, t[2] = a) : a = t[2], a;
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(3), n = e.value, r;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = { className: "x1iw51ew xde1mab x1yc453h x7wzq59 x13vifvy x1q7yeco xk4n5i7" }, t[0] = r) : r = t[0];
		var a;
		return t[1] !== n ? (a = u.jsx("th", babelHelpers.extends({}, r, { children: n })), t[1] = n, t[2] = a) : a = t[2], a;
	}
	function _(t) {
		var n = o("react-compiler-runtime").c(8), a = t.displayValue, i = t.rowIdx, l = t.value, s = f, d;
		n[0] !== i ? (d = (e || (e = r("stylex"))).props(s(i), c.paddingHoriz24, c.paddingAll12), n[0] = i, n[1] = d) : d = n[1];
		var m = a != null ? a : l, p;
		n[2] !== m || n[3] !== l ? (p = u.jsx(y, {
			copyValue: l,
			displayValue: m
		}), n[2] = m, n[3] = l, n[4] = p) : p = n[4];
		var _;
		return n[5] !== d || n[6] !== p ? (_ = u.jsx("td", babelHelpers.extends({}, d, { children: p })), n[5] = d, n[6] = p, n[7] = _) : _ = n[7], _;
	}
	function f(e) {
		return e % 2 === 1 ? c.oddRow : null;
	}
	function g(t) {
		var n = o("react-compiler-runtime").c(9), a = t.copy, i = t.displayValue, l = t.rowIdx, s = t.value, d = a === void 0 ? !0 : a, m = h, p;
		n[0] !== l ? (p = (e || (e = r("stylex"))).props(m(l), c.center), n[0] = l, n[1] = p) : p = n[1];
		var _;
		n[2] !== d || n[3] !== i || n[4] !== s ? (_ = d ? u.jsx(y, {
			copyValue: s,
			displayValue: i != null ? i : s
		}) : s, n[2] = d, n[3] = i, n[4] = s, n[5] = _) : _ = n[5];
		var f;
		return n[6] !== p || n[7] !== _ ? (f = u.jsx("td", babelHelpers.extends({}, p, { children: _ })), n[6] = p, n[7] = _, n[8] = f) : f = n[8], f;
	}
	function h(e) {
		return e % 2 === 1 ? c.oddRow : null;
	}
	function y(e) {
		var t = o("react-compiler-runtime").c(5), n = e.copyValue, a = e.displayValue, i;
		t[0] !== n ? (i = async function() {
			await o("WAWebCopyToClipboard").copyTextToClipboard(typeof n == "string" ? n : JSON.stringify(n)), o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: b(n) + " copied" }));
		}, t[0] = n, t[1] = i) : i = t[1];
		var l;
		return t[2] !== a || t[3] !== i ? (l = u.jsx(r("WAWebUnstyledButton.react"), {
			onClick: i,
			xstyle: c.cell,
			children: a
		}), t[2] = a, t[3] = i, t[4] = l) : l = t[4], l;
	}
	var C = 30;
	function b(e, t) {
		return t === void 0 && (t = C), e.length < t ? e : JSON.stringify(e).substring(0, t) + "...";
	}
	l.DBViewerTable = d, l.DBViewerHeader = m, l.DBViewerColumn = p, l.DBViewerCell = _, l.DBViewerCellIndex = g, l.trunc = b;
}), 98);
