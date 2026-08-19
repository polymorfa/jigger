__d("WAWebKeyboardRotateFocus.react", [
	"WAWebFocusTracer",
	"WAWebKeyboardConstants",
	"WAWebKeyboardTabUtils",
	"react",
	"react-compiler-runtime",
	"useMergeRefs",
	"useWAWebIsKeyboardUser"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u = s || (s = o("react")), c = s.useRef;
	function d(e, t, n) {
		var r = o("WAWebKeyboardTabUtils").getTabbableElements(e, t), a = e.ownerDocument.activeElement, i = r.findIndex(function(e) {
			return e === a;
		});
		if (i === -1) {
			for (var l = r.length - 1; l >= 0; l--) if (r[l].contains(a)) {
				i = l;
				break;
			}
		}
		return n && i === r.length - 1 || !n && i === 0;
	}
	function m(t) {
		var n = o("react-compiler-runtime").c(13), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, s = l.allowEscape, m = l.focusType, _ = c(null), g = r("useMergeRefs")(i, _), h = r("useWAWebIsKeyboardUser")(), y = h.setIsKeyboardUser, C;
		n[3] !== s || n[4] !== m || n[5] !== y ? (C = function(t) {
			if (!(t.metaKey || t.ctrlKey)) {
				var e = _.current, n;
				if (t.key === o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.TAB) {
					if (s === !0 && e != null && d(e, m, !t.shiftKey)) return;
					t.stopPropagation(), t.preventDefault(), y(!0), e != null && (n = o("WAWebKeyboardTabUtils").getNextTabbableElement(e, t.shiftKey ? o("WAWebKeyboardTabUtils").TabDirection.BACKWARD : o("WAWebKeyboardTabUtils").TabDirection.FORWARD, m));
				} else e != null && e === document.activeElement && (n = o("WAWebKeyboardTabUtils").getNextTabbableElement(e, o("WAWebKeyboardTabUtils").TabDirection.FORWARD, m, p));
				n != null && f(n);
			}
		}, n[3] = s, n[4] = m, n[5] = y, n[6] = C) : C = n[6];
		var b = C, v = a.style, S;
		n[7] === Symbol.for("react.memo_cache_sentinel") ? (S = "x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod", n[7] = S) : S = n[7];
		var R;
		return n[8] !== b || n[9] !== g || n[10] !== a.children || n[11] !== a.style ? (R = u.jsx("div", {
			ref: g,
			style: v,
			className: S,
			onKeyDown: b,
			tabIndex: -1,
			children: a.children
		}), n[8] = b, n[9] = g, n[10] = a.children, n[11] = a.style, n[12] = R) : R = n[12], R;
	}
	function p(e) {
		return e.nodeName.toLowerCase() === "input";
	}
	var _ = m;
	function f(e) {
		r("WAWebFocusTracer").focus(e);
	}
	l.RotateFocus = _;
}), 98);
