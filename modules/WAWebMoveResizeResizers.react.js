__d("WAWebMoveResizeResizers.react", [
	"WAWebL10N",
	"WAWebMoveResizeComponentUtils",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "-6px", d = "12px", m = {
		resizer: {
			position: "x10l6tqk",
			zIndex: "x1bkdxzg",
			$$css: !0
		},
		topResizer: {
			top: "xtu2xtp",
			insetInlineStart: "x1o0tod",
			left: null,
			right: null,
			width: "xh8yej3",
			height: "x1kpxq89",
			cursor: "x1e5i8e3",
			$$css: !0
		},
		bottomResizer: {
			bottom: "xsugpx9",
			insetInlineStart: "x1o0tod",
			left: null,
			right: null,
			width: "xh8yej3",
			height: "x1kpxq89",
			cursor: "x1e5i8e3",
			$$css: !0
		},
		leftResizer: {
			top: "x13vifvy",
			insetInlineStart: "x1w1ezjj",
			left: null,
			right: null,
			width: "xsmyaan",
			height: "x5yr21d",
			cursor: "x7eptgl",
			$$css: !0
		},
		rightResizer: {
			top: "x13vifvy",
			insetInlineEnd: "x1euzuty",
			left: null,
			right: null,
			width: "xsmyaan",
			height: "x5yr21d",
			cursor: "x7eptgl",
			$$css: !0
		},
		topRightResizer: {
			top: "xtu2xtp",
			insetInlineEnd: "x1euzuty",
			left: null,
			right: null,
			width: "xsmyaan",
			height: "x1kpxq89",
			cursor: "x1yl03ai",
			$$css: !0
		},
		topLeftResizer: {
			top: "xtu2xtp",
			insetInlineStart: "x1w1ezjj",
			left: null,
			right: null,
			width: "xsmyaan",
			height: "x1kpxq89",
			cursor: "x16djdpl",
			$$css: !0
		},
		bottomRightResizer: {
			insetInlineEnd: "x1euzuty",
			left: null,
			right: null,
			bottom: "xsugpx9",
			width: "xsmyaan",
			height: "x1kpxq89",
			cursor: "x16djdpl",
			$$css: !0
		},
		bottomLeftResizer: {
			bottom: "xsugpx9",
			insetInlineStart: "x1w1ezjj",
			left: null,
			right: null,
			width: "xsmyaan",
			height: "x1kpxq89",
			cursor: "x1yl03ai",
			$$css: !0
		},
		defaultCursor: {
			cursor: "xt0e3qv",
			$$css: !0
		}
	};
	function p(e) {
		return e === o("WAWebMoveResizeComponentUtils").ResizeDirections.LEFT ? m.leftResizer : e === o("WAWebMoveResizeComponentUtils").ResizeDirections.BOTTOM ? m.bottomResizer : e === o("WAWebMoveResizeComponentUtils").ResizeDirections.RIGHT ? m.rightResizer : e === o("WAWebMoveResizeComponentUtils").ResizeDirections.TOP ? m.topResizer : e === o("WAWebMoveResizeComponentUtils").ResizeDirections.TOP_LEFT ? m.topLeftResizer : e === o("WAWebMoveResizeComponentUtils").ResizeDirections.TOP_RIGHT ? m.topRightResizer : e === o("WAWebMoveResizeComponentUtils").ResizeDirections.BOTTOM_LEFT ? m.bottomLeftResizer : e === o("WAWebMoveResizeComponentUtils").ResizeDirections.BOTTOM_RIGHT ? m.bottomRightResizer : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	function _(e) {
		return r("WAWebL10N").isRTL() ? e === o("WAWebMoveResizeComponentUtils").ResizeDirections.LEFT ? o("WAWebMoveResizeComponentUtils").ResizeDirections.RIGHT : e === o("WAWebMoveResizeComponentUtils").ResizeDirections.RIGHT ? o("WAWebMoveResizeComponentUtils").ResizeDirections.LEFT : e === o("WAWebMoveResizeComponentUtils").ResizeDirections.TOP_LEFT ? o("WAWebMoveResizeComponentUtils").ResizeDirections.TOP_RIGHT : e === o("WAWebMoveResizeComponentUtils").ResizeDirections.TOP_RIGHT ? o("WAWebMoveResizeComponentUtils").ResizeDirections.TOP_LEFT : e === o("WAWebMoveResizeComponentUtils").ResizeDirections.BOTTOM_LEFT ? o("WAWebMoveResizeComponentUtils").ResizeDirections.BOTTOM_RIGHT : e === o("WAWebMoveResizeComponentUtils").ResizeDirections.BOTTOM_RIGHT ? o("WAWebMoveResizeComponentUtils").ResizeDirections.BOTTOM_LEFT : e : e;
	}
	function f(t) {
		var n = o("react-compiler-runtime").c(9), a = t.currentAction, i = t.directions, l = t.getResizeCallback, s;
		n[0] !== i ? (s = i === void 0 ? Array.from(o("WAWebMoveResizeComponentUtils").ResizeDirections.members()) : i, n[0] = i, n[1] = s) : s = n[1];
		var c = s, d;
		if (n[2] !== a || n[3] !== c || n[4] !== l) {
			var f;
			n[6] !== a || n[7] !== l ? (f = function(n) {
				var t = l(_(n));
				return u.jsx("div", babelHelpers.extends({ "data-testid": "move_resize_component_resizer_" + n }, (e || (e = r("stylex"))).props([
					p(n),
					m.resizer,
					a === o("WAWebMoveResizeComponentUtils").UserActions.RESIZE && m.defaultCursor
				]), { onMouseDown: t }), n);
			}, n[6] = a, n[7] = l, n[8] = f) : f = n[8], d = c.map(f), n[2] = a, n[3] = c, n[4] = l, n[5] = d;
		} else d = n[5];
		return d;
	}
	l.default = f;
}), 98);
