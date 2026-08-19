__d("CometDraggableList.react", [
	"CometDraggableListKeyboardFocusGroup.react",
	"CometDraggableListKeyboardProvider.react",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useCometDraggableItems"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s.useRef, d = { root: {
		boxSizing: "x9f619",
		paddingTop: "x4p5aij",
		paddingInlineEnd: "x1ccui7m",
		paddingBottom: "x1j85h84",
		paddingInlineStart: "x18pi947",
		position: "x1n2onr6",
		$$css: !0
	} };
	function m(t) {
		var n = o("react-compiler-runtime").c(22), a = t.direction, i = t.disabled, l = t.enableKeyboardInteraction, s = t.expanded, m = t.items, p = t.onReorder, _ = t.placeholderXstyle, f = t.xstyle, g = a === void 0 ? "vertical" : a, h = i === void 0 ? !1 : i, y = l === void 0 ? !1 : l, C = s === void 0 ? !1 : s, b = c(null), v;
		n[0] !== g || n[1] !== h || n[2] !== y || n[3] !== C || n[4] !== m || n[5] !== p || n[6] !== _ ? (v = {
			direction: g,
			disabled: h,
			enableKeyboardInteraction: y,
			expanded: C,
			items: m,
			onReorder: p,
			placeholderXstyle: _
		}, n[0] = g, n[1] = h, n[2] = y, n[3] = C, n[4] = m, n[5] = p, n[6] = _, n[7] = v) : v = n[7];
		var S = r("useCometDraggableItems")(v), R = S.draggableItems, L;
		n[8] !== f ? (L = (e || (e = r("stylex")))(d.root, f), n[8] = f, n[9] = L) : L = n[9];
		var E = g === "vertical" ? "column" : "row", k;
		n[10] !== E ? (k = {
			display: "flex",
			flexDirection: E
		}, n[10] = E, n[11] = k) : k = n[11];
		var I;
		n[12] !== R || n[13] !== L || n[14] !== k ? (I = u.jsx("div", {
			className: L,
			ref: b,
			role: "list",
			style: k,
			children: R
		}), n[12] = R, n[13] = L, n[14] = k, n[15] = I) : I = n[15];
		var T = I, D;
		return n[16] !== g || n[17] !== T || n[18] !== y || n[19] !== m || n[20] !== p ? (D = y ? u.jsx(r("CometDraggableListKeyboardProvider.react"), { children: u.jsx(r("CometDraggableListKeyboardFocusGroup.react"), {
			direction: g,
			items: m,
			onReorder: p,
			children: T
		}) }) : T, n[16] = g, n[17] = T, n[18] = y, n[19] = m, n[20] = p, n[21] = D) : D = n[21], D;
	}
	l.default = m;
}), 98);
