__d("WAWebKeyboardListHotKeys.react", [
	"WALogger",
	"WAWebFocusTracer",
	"WAWebKeyboardHotKeys.react",
	"WAWebUim",
	"WAWebUimUie.react",
	"react",
	"useWAWebIsKeyboardUser"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useEffect, m = c.useRef, p = "focusable-list-item";
	function _(t) {
		var n = t["aria-label"], a = t.children, i = t.className, l = t.dataTab, s = t.getDefaultFocusItem, c = t.getPriorityFocusItem, _ = t.handlers, h = t.onBeforeEnd, y = t.removeTabIndexFocusInside, C = t.role, b = t.tabIndex, v = b === void 0 ? 0 : b, S = r("useWAWebIsKeyboardUser")(), R = S.isKeyboardUser, L = m(null), E = m(null), k = m(null), I = m(!1), T = m(!1), D = m(!1), x = function() {
			return L.current ? Array.from(L.current.getElementsByClassName(p)) : [];
		}, $ = function(t) {
			var e = c == null ? void 0 : c();
			e && e === t && (D.current = !0), r("WAWebFocusTracer").focus(t, { preventScroll: !1 });
		}, P = function(n) {
			var t = x();
			if (t.length !== 0) {
				var r;
				if (k.current) {
					var a = t.indexOf(k.current);
					a !== -1 && (a + n < 0 ? r = t[0] : r = t[a + n]);
				}
				if (!r) {
					var i = k.current ? null : s == null ? void 0 : s(t);
					r = i != null ? i : t[t.length - 1];
				}
				var l = r;
				f(l) || (o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[ListHotKeys] item missing tabIndex attr"]))), g(l)), $(l);
			}
		}, N = function() {
			var e = x();
			return e.length > 0 ? e[e.length - 1] : null;
		}, M = async function() {
			h && await h();
			var e = N(), t = c == null ? void 0 : c();
			t && !D.current ? $(t) : e && $(e);
		}, w = function(t) {
			t.preventDefault(), P(-1);
		}, A = function(t) {
			t.preventDefault(), P(1);
		}, F = function(t) {
			t.preventDefault(), M();
		}, O = function() {
			P(0);
		}, B = function(t) {
			t.setAttribute("tabIndex", "0"), y === !0 && t.addEventListener("focusin", function(e) {
				e.target !== t && t.setAttribute("tabIndex", "-1");
			}), k.current && k.current !== t && k.current.setAttribute("tabIndex", "-1"), k.current = t;
		}, W = function(t) {
			var e = t.target;
			if (L.current === e) {
				var n;
				if (R) {
					var r = c == null ? void 0 : c();
					!T.current && r && !s ? $(r) : O();
				}
				(n = E.current) == null || n.activate();
			} else e instanceof HTMLElement && e.classList.contains(p) && B(e);
			I.current = !0, T.current = !0;
		}, q = function(t) {
			I.current = !1;
		}, U = function() {
			L.current && !L.current.contains(document.activeElement) && r("WAWebFocusTracer").focus(L.current);
		};
		d(function() {
			D.current = !1, I.current && k.current && L.current && !L.current.contains(k.current) && r("WAWebFocusTracer").focus(L.current);
		}, void 0);
		var V = babelHelpers.extends({}, _, {
			up: w,
			down: A,
			end: F,
			"command+down": F
		});
		return u.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "ListHotKeys",
			ref: E,
			uimState: o("WAWebUim").UIMState.PASSIVE,
			requestFocus: R ? null : U,
			children: u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
				tabIndex: v,
				handlers: V,
				className: i,
				"data-tab": l,
				onFocus: W,
				onBlur: q,
				ref: L,
				role: C,
				"aria-label": n,
				children: a
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		return e.hasAttribute("tabIndex");
	}
	function g(e) {
		e.setAttribute("tabIndex", "-1");
	}
	l.LIST_FOCUSABLE_ITEM_CLASS_NAME = p, l.ListHotKeys = _;
}), 98);
