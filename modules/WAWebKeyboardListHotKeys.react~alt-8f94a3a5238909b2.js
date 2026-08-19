__d("WAWebKeyboardListHotKeys.react", [
	"WALogger",
	"WAWebFocusTracer",
	"WAWebKeyboardHotKeys.react",
	"WAWebUim",
	"WAWebUimUie.react",
	"asyncToGeneratorRuntime",
	"react",
	"useWAWebIsKeyboardUser"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useEffect, m = c.useRef, p = "focusable-list-item";
	function _(t) {
		var a = t["aria-label"], i = t.children, l = t.className, s = t.dataTab, c = t.getDefaultFocusItem, _ = t.getPriorityFocusItem, h = t.handlers, y = t.onBeforeEnd, C = t.removeTabIndexFocusInside, b = t.role, v = t.tabIndex, S = v === void 0 ? 0 : v, R = r("useWAWebIsKeyboardUser")(), L = R.isKeyboardUser, E = m(null), k = m(null), I = m(null), T = m(!1), D = m(!1), x = m(!1), $ = function() {
			return E.current ? Array.from(E.current.getElementsByClassName(p)) : [];
		}, P = function(t) {
			var e = _ == null ? void 0 : _();
			e && e === t && (x.current = !0), r("WAWebFocusTracer").focus(t, { preventScroll: !1 });
		}, N = function(n) {
			var t = $();
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
				f(l) || (o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[ListHotKeys] item missing tabIndex attr"]))), g(l)), P(l);
			}
		}, M = function() {
			var e = $();
			return e.length > 0 ? e[e.length - 1] : null;
		}, w = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				y && (yield y());
				var e = M(), t = _ == null ? void 0 : _();
				t && !x.current ? P(t) : e && P(e);
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), A = function(t) {
			t.preventDefault(), N(-1);
		}, F = function(t) {
			t.preventDefault(), N(1);
		}, O = function(t) {
			t.preventDefault(), w();
		}, B = function() {
			N(0);
		}, W = function(t) {
			t.setAttribute("tabIndex", "0"), C === !0 && t.addEventListener("focusin", function(e) {
				e.target !== t && t.setAttribute("tabIndex", "-1");
			}), I.current && I.current !== t && I.current.setAttribute("tabIndex", "-1"), I.current = t;
		}, q = function(t) {
			var e = t.target;
			if (E.current === e) {
				var n;
				if (L) {
					var r = _ == null ? void 0 : _();
					!D.current && r && !c ? P(r) : B();
				}
				(n = k.current) == null || n.activate();
			} else e instanceof HTMLElement && e.classList.contains(p) && W(e);
			T.current = !0, D.current = !0;
		}, U = function(t) {
			T.current = !1;
		}, V = function() {
			E.current && !E.current.contains(document.activeElement) && r("WAWebFocusTracer").focus(E.current);
		};
		d(function() {
			x.current = !1, T.current && I.current && E.current && !E.current.contains(I.current) && r("WAWebFocusTracer").focus(E.current);
		}, void 0);
		var H = babelHelpers.extends({}, h, {
			up: A,
			down: F,
			end: O,
			"command+down": O
		});
		return u.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "ListHotKeys",
			ref: k,
			uimState: o("WAWebUim").UIMState.PASSIVE,
			requestFocus: L ? null : V,
			children: u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
				tabIndex: S,
				handlers: H,
				className: l,
				"data-tab": s,
				onFocus: q,
				onBlur: U,
				ref: E,
				role: b,
				"aria-label": a,
				children: i
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
