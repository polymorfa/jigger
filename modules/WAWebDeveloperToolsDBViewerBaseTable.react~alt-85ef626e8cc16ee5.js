__d("WAWebDeveloperToolsDBViewerBaseTable.react", [
	"WAWebCopyToClipboard",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUnstyledButton.react",
	"react",
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
		var t = e.children;
		return u.jsx("table", {
			className: "xh8yej3",
			children: t
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = e.children;
		return u.jsx("thead", { children: u.jsxs("tr", { children: [u.jsx("th", {
			className: "x1xrf6ya xde1mab xscbp6u x1iw51ew x1yc453h x7wzq59 x13vifvy x1q7yeco xk4n5i7 x1fsd2vl",
			children: "#"
		}), t] }) });
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.value;
		return u.jsx("th", {
			className: "x1iw51ew xde1mab x1yc453h x7wzq59 x13vifvy x1q7yeco xk4n5i7",
			children: t
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(t) {
		var n = t.displayValue, o = t.rowIdx, a = t.value, i = function(t) {
			return t % 2 === 1 ? c.oddRow : null;
		};
		return u.jsx("td", babelHelpers.extends({}, (e || (e = r("stylex"))).props(i(o), c.paddingHoriz24, c.paddingAll12), { children: u.jsx(g, {
			copyValue: a,
			displayValue: n != null ? n : a
		}) }));
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(t) {
		var n = t.copy, o = n === void 0 ? !0 : n, a = t.displayValue, i = t.rowIdx, l = t.value, s = function(t) {
			return t % 2 === 1 ? c.oddRow : null;
		};
		return u.jsx("td", babelHelpers.extends({}, (e || (e = r("stylex"))).props(s(i), c.center), { children: o ? u.jsx(g, {
			copyValue: l,
			displayValue: a != null ? a : l
		}) : l }));
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = e.copyValue, n = e.displayValue;
		return u.jsx(r("WAWebUnstyledButton.react"), {
			onClick: async function() {
				await o("WAWebCopyToClipboard").copyTextToClipboard(typeof t == "string" ? t : JSON.stringify(t)), o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: y(t) + " copied" }));
			},
			xstyle: c.cell,
			children: n
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	var h = 30;
	function y(e, t) {
		return t === void 0 && (t = h), e.length < t ? e : JSON.stringify(e).substring(0, t) + "...";
	}
	l.DBViewerTable = d, l.DBViewerHeader = m, l.DBViewerColumn = p, l.DBViewerCell = _, l.DBViewerCellIndex = f, l.trunc = y;
}), 98);
