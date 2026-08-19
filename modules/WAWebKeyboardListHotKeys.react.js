__d("WAWebKeyboardListHotKeys.react", [
	"WALogger",
	"WAWebFocusTracer",
	"WAWebKeyboardHotKeys.react",
	"WAWebUim",
	"WAWebUimUie.react",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime",
	"useWAWebIsKeyboardUser"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useEffect, m = c.useRef, p = "focusable-list-item";
	function _(t) {
		var a = o("react-compiler-runtime").c(48), i = t["aria-label"], l = t.children, s = t.className, c = t.dataTab, _ = t.getDefaultFocusItem, h = t.getPriorityFocusItem, y = t.handlers, C = t.onBeforeEnd, b = t.removeTabIndexFocusInside, v = t.role, S = t.tabIndex, R = S === void 0 ? 0 : S, L = r("useWAWebIsKeyboardUser")(), E = L.isKeyboardUser, k = m(null), I = m(null), T = m(null), D = m(!1), x = m(!1), $ = m(!1), P;
		a[0] === Symbol.for("react.memo_cache_sentinel") ? (P = function() {
			return k.current ? Array.from(k.current.getElementsByClassName(p)) : [];
		}, a[0] = P) : P = a[0];
		var N = P, M;
		a[1] !== h ? (M = function(t) {
			var e = h == null ? void 0 : h();
			e && e === t && ($.current = !0), r("WAWebFocusTracer").focus(t, { preventScroll: !1 });
		}, a[1] = h, a[2] = M) : M = a[2];
		var w = M, A;
		a[3] !== w || a[4] !== _ ? (A = function(n) {
			var t = N();
			if (t.length !== 0) {
				var r;
				if (T.current) {
					var a = t.indexOf(T.current);
					a !== -1 && (a + n < 0 ? r = t[0] : r = t[a + n]);
				}
				if (!r) {
					var i = T.current ? null : _ == null ? void 0 : _(t);
					r = i != null ? i : t[t.length - 1];
				}
				var l = r;
				f(l) || (o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[ListHotKeys] item missing tabIndex attr"]))), g(l)), w(l);
			}
		}, a[3] = w, a[4] = _, a[5] = A) : A = a[5];
		var F = A, O;
		a[6] === Symbol.for("react.memo_cache_sentinel") ? (O = function() {
			var e = N();
			return e.length > 0 ? e[e.length - 1] : null;
		}, a[6] = O) : O = a[6];
		var B = O, W;
		a[7] !== w || a[8] !== h || a[9] !== C ? (W = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				C && (yield C());
				var e = B(), t = h == null ? void 0 : h();
				t && !$.current ? w(t) : e && w(e);
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), a[7] = w, a[8] = h, a[9] = C, a[10] = W) : W = a[10];
		var q = W, U;
		a[11] !== F ? (U = function(t) {
			t.preventDefault(), F(-1);
		}, a[11] = F, a[12] = U) : U = a[12];
		var V = U, H;
		a[13] !== F ? (H = function(t) {
			t.preventDefault(), F(1);
		}, a[13] = F, a[14] = H) : H = a[14];
		var G = H, z;
		a[15] !== q ? (z = function(t) {
			t.preventDefault(), q();
		}, a[15] = q, a[16] = z) : z = a[16];
		var j = z, K;
		a[17] !== F ? (K = function() {
			F(0);
		}, a[17] = F, a[18] = K) : K = a[18];
		var Q = K, X;
		a[19] !== b ? (X = function(t) {
			t.setAttribute("tabIndex", "0"), b === !0 && t.addEventListener("focusin", function(e) {
				e.target !== t && t.setAttribute("tabIndex", "-1");
			}), T.current && T.current !== t && T.current.setAttribute("tabIndex", "-1"), T.current = t;
		}, a[19] = b, a[20] = X) : X = a[20];
		var Y = X, J;
		a[21] !== Q || a[22] !== w || a[23] !== _ || a[24] !== h || a[25] !== E || a[26] !== Y ? (J = function(t) {
			var e = t.target;
			if (k.current === e) {
				var n;
				if (E) {
					var r = h == null ? void 0 : h();
					!x.current && r && !_ ? w(r) : Q();
				}
				(n = I.current) == null || n.activate();
			} else e instanceof HTMLElement && e.classList.contains(p) && Y(e);
			D.current = !0, x.current = !0;
		}, a[21] = Q, a[22] = w, a[23] = _, a[24] = h, a[25] = E, a[26] = Y, a[27] = J) : J = a[27];
		var Z = J, ee;
		a[28] === Symbol.for("react.memo_cache_sentinel") ? (ee = function(t) {
			D.current = !1;
		}, a[28] = ee) : ee = a[28];
		var te = ee, ne;
		a[29] === Symbol.for("react.memo_cache_sentinel") ? (ne = function() {
			k.current && !k.current.contains(document.activeElement) && r("WAWebFocusTracer").focus(k.current);
		}, a[29] = ne) : ne = a[29];
		var re = ne, oe;
		a[30] === Symbol.for("react.memo_cache_sentinel") ? (oe = function() {
			$.current = !1, D.current && T.current && k.current && !k.current.contains(T.current) && r("WAWebFocusTracer").focus(k.current);
		}, a[30] = oe) : oe = a[30], d(oe, void 0);
		var ae;
		a[31] !== G || a[32] !== j || a[33] !== V || a[34] !== y ? (ae = babelHelpers.extends({}, y, {
			up: V,
			down: G,
			end: j,
			"command+down": j
		}), a[31] = G, a[32] = j, a[33] = V, a[34] = y, a[35] = ae) : ae = a[35];
		var ie = ae, le = E ? null : re, se;
		a[36] !== i || a[37] !== l || a[38] !== s || a[39] !== c || a[40] !== Z || a[41] !== ie || a[42] !== v || a[43] !== R ? (se = u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			tabIndex: R,
			handlers: ie,
			className: s,
			"data-tab": c,
			onFocus: Z,
			onBlur: te,
			ref: k,
			role: v,
			"aria-label": i,
			children: l
		}), a[36] = i, a[37] = l, a[38] = s, a[39] = c, a[40] = Z, a[41] = ie, a[42] = v, a[43] = R, a[44] = se) : se = a[44];
		var ue;
		return a[45] !== le || a[46] !== se ? (ue = u.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "ListHotKeys",
			ref: I,
			uimState: o("WAWebUim").UIMState.PASSIVE,
			requestFocus: le,
			children: se
		}), a[45] = le, a[46] = se, a[47] = ue) : ue = a[47], ue;
	}
	function f(e) {
		return e.hasAttribute("tabIndex");
	}
	function g(e) {
		e.setAttribute("tabIndex", "-1");
	}
	l.LIST_FOCUSABLE_ITEM_CLASS_NAME = p, l.ListHotKeys = _;
}), 98);
