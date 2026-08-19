__d("WAWebKeyboardRotateFocus.react", [
	"WAWebFocusTracer",
	"WAWebKeyboardConstants",
	"WAWebKeyboardTabUtils",
	"react",
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
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.allowEscape, l = a.focusType, s = c(null), m = r("useMergeRefs")(n, s), p = r("useWAWebIsKeyboardUser")(), f = p.setIsKeyboardUser, g = function(t) {
			if (!(t.metaKey || t.ctrlKey)) {
				var e = s.current, n;
				if (t.key === o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.TAB) {
					if (i === !0 && e != null && d(e, l, !t.shiftKey)) return;
					t.stopPropagation(), t.preventDefault(), f(!0), e != null && (n = o("WAWebKeyboardTabUtils").getNextTabbableElement(e, t.shiftKey ? o("WAWebKeyboardTabUtils").TabDirection.BACKWARD : o("WAWebKeyboardTabUtils").TabDirection.FORWARD, l));
				} else e != null && e === document.activeElement && (n = o("WAWebKeyboardTabUtils").getNextTabbableElement(e, o("WAWebKeyboardTabUtils").TabDirection.FORWARD, l, function(e) {
					return e.nodeName.toLowerCase() === "input";
				}));
				n != null && _(n);
			}
		};
		return u.jsx("div", {
			ref: m,
			style: a.style,
			className: "x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod",
			onKeyDown: g,
			tabIndex: -1,
			children: a.children
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	var p = m;
	function _(e) {
		r("WAWebFocusTracer").focus(e);
	}
	l.RotateFocus = p;
}), 98);
