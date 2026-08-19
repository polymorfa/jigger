__d("WAWebKeyboardListHotKeys.react", [
	"WALogger",
	"WAWebFocusTracer",
	"WAWebKeyboardHotKeys.react",
	"WAWebUim",
	"WAWebUimUie.react",
	"react",
	"react-compiler-runtime",
	"useWAWebIsKeyboardUser"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useEffect, m = c.useRef, p = "focusable-list-item";
	function _(t) {
		var n = o("react-compiler-runtime").c(48), a = t["aria-label"], i = t.children, l = t.className, s = t.dataTab, c = t.getDefaultFocusItem, _ = t.getPriorityFocusItem, h = t.handlers, y = t.onBeforeEnd, C = t.removeTabIndexFocusInside, b = t.role, v = t.tabIndex, S = v === void 0 ? 0 : v, R = r("useWAWebIsKeyboardUser")(), L = R.isKeyboardUser, E = m(null), k = m(null), I = m(null), T = m(!1), D = m(!1), x = m(!1), $;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? ($ = function() {
			return E.current ? Array.from(E.current.getElementsByClassName(p)) : [];
		}, n[0] = $) : $ = n[0];
		var P = $, N;
		n[1] !== _ ? (N = function(t) {
			var e = _ == null ? void 0 : _();
			e && e === t && (x.current = !0), r("WAWebFocusTracer").focus(t, { preventScroll: !1 });
		}, n[1] = _, n[2] = N) : N = n[2];
		var M = N, w;
		n[3] !== M || n[4] !== c ? (w = function(n) {
			var t = P();
			if (t.length !== 0) {
				var r;
				if (I.current) {
					var a = t.indexOf(I.current);
					a !== -1 && (a + n < 0 ? r = t[0] : r = t[a + n]);
				}
				if (!r) {
					var i = I.current ? null : c == null ? void 0 : c(t);
					r = i != null ? i : t[t.length - 1];
				}
				var l = r;
				f(l) || (o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[ListHotKeys] item missing tabIndex attr"]))), g(l)), M(l);
			}
		}, n[3] = M, n[4] = c, n[5] = w) : w = n[5];
		var A = w, F;
		n[6] === Symbol.for("react.memo_cache_sentinel") ? (F = function() {
			var e = P();
			return e.length > 0 ? e[e.length - 1] : null;
		}, n[6] = F) : F = n[6];
		var O = F, B;
		n[7] !== M || n[8] !== _ || n[9] !== y ? (B = async function() {
			y && await y();
			var e = O(), t = _ == null ? void 0 : _();
			t && !x.current ? M(t) : e && M(e);
		}, n[7] = M, n[8] = _, n[9] = y, n[10] = B) : B = n[10];
		var W = B, q;
		n[11] !== A ? (q = function(t) {
			t.preventDefault(), A(-1);
		}, n[11] = A, n[12] = q) : q = n[12];
		var U = q, V;
		n[13] !== A ? (V = function(t) {
			t.preventDefault(), A(1);
		}, n[13] = A, n[14] = V) : V = n[14];
		var H = V, G;
		n[15] !== W ? (G = function(t) {
			t.preventDefault(), W();
		}, n[15] = W, n[16] = G) : G = n[16];
		var z = G, j;
		n[17] !== A ? (j = function() {
			A(0);
		}, n[17] = A, n[18] = j) : j = n[18];
		var K = j, Q;
		n[19] !== C ? (Q = function(t) {
			t.setAttribute("tabIndex", "0"), C === !0 && t.addEventListener("focusin", function(e) {
				e.target !== t && t.setAttribute("tabIndex", "-1");
			}), I.current && I.current !== t && I.current.setAttribute("tabIndex", "-1"), I.current = t;
		}, n[19] = C, n[20] = Q) : Q = n[20];
		var X = Q, Y;
		n[21] !== K || n[22] !== M || n[23] !== c || n[24] !== _ || n[25] !== L || n[26] !== X ? (Y = function(t) {
			var e = t.target;
			if (E.current === e) {
				var n;
				if (L) {
					var r = _ == null ? void 0 : _();
					!D.current && r && !c ? M(r) : K();
				}
				(n = k.current) == null || n.activate();
			} else e instanceof HTMLElement && e.classList.contains(p) && X(e);
			T.current = !0, D.current = !0;
		}, n[21] = K, n[22] = M, n[23] = c, n[24] = _, n[25] = L, n[26] = X, n[27] = Y) : Y = n[27];
		var J = Y, Z;
		n[28] === Symbol.for("react.memo_cache_sentinel") ? (Z = function(t) {
			T.current = !1;
		}, n[28] = Z) : Z = n[28];
		var ee = Z, te;
		n[29] === Symbol.for("react.memo_cache_sentinel") ? (te = function() {
			E.current && !E.current.contains(document.activeElement) && r("WAWebFocusTracer").focus(E.current);
		}, n[29] = te) : te = n[29];
		var ne = te, re;
		n[30] === Symbol.for("react.memo_cache_sentinel") ? (re = function() {
			x.current = !1, T.current && I.current && E.current && !E.current.contains(I.current) && r("WAWebFocusTracer").focus(E.current);
		}, n[30] = re) : re = n[30], d(re, void 0);
		var oe;
		n[31] !== H || n[32] !== z || n[33] !== U || n[34] !== h ? (oe = babelHelpers.extends({}, h, {
			up: U,
			down: H,
			end: z,
			"command+down": z
		}), n[31] = H, n[32] = z, n[33] = U, n[34] = h, n[35] = oe) : oe = n[35];
		var ae = oe, ie = L ? null : ne, le;
		n[36] !== a || n[37] !== i || n[38] !== l || n[39] !== s || n[40] !== J || n[41] !== ae || n[42] !== b || n[43] !== S ? (le = u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			tabIndex: S,
			handlers: ae,
			className: l,
			"data-tab": s,
			onFocus: J,
			onBlur: ee,
			ref: E,
			role: b,
			"aria-label": a,
			children: i
		}), n[36] = a, n[37] = i, n[38] = l, n[39] = s, n[40] = J, n[41] = ae, n[42] = b, n[43] = S, n[44] = le) : le = n[44];
		var se;
		return n[45] !== ie || n[46] !== le ? (se = u.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "ListHotKeys",
			ref: k,
			uimState: o("WAWebUim").UIMState.PASSIVE,
			requestFocus: ie,
			children: le
		}), n[45] = ie, n[46] = le, n[47] = se) : se = n[47], se;
	}
	function f(e) {
		return e.hasAttribute("tabIndex");
	}
	function g(e) {
		e.setAttribute("tabIndex", "-1");
	}
	l.LIST_FOCUSABLE_ITEM_CLASS_NAME = p, l.ListHotKeys = _;
}), 98);
