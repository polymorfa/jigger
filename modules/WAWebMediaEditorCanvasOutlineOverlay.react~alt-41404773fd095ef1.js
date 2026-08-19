__d("WAWebMediaEditorCanvasOutlineOverlay.react", [
	"ReactKonva",
	"WAWebMediaConstants",
	"WAWebMediaEditorUtilsColor",
	"cr:10204",
	"react",
	"useWAWebMediaEditorCanvasDraw"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useImperativeHandle, p = u.useRef, _ = u.useState, f = 12, g = 3, h = "#FA6533", y = 12, C = 6, b = "dot-first", v = "dot-last";
	function S(e) {
		var t = e.data, n = e.height, a = e.onCursorChange, i = e.onDone, l = e.onDrawEnd, u = e.ref, S = e.scale, L = e.smoothing, E = e.width, k = p(), I = _(null), T = I[0], D = I[1], x = p(!1), $ = p("crosshair"), P = c(function(e) {
			var t;
			k.current = e, D((t = e == null ? void 0 : e.getStage()) != null ? t : null);
		}, []);
		d(function() {
			a("crosshair");
		}, []), m(u, function() {
			return {
				show: function() {
					var e;
					(e = k.current) == null || e.show();
				},
				hide: function() {
					var e;
					(e = k.current) == null || e.hide();
				}
			};
		});
		var N = function() {
			x.current = !0;
		}, M = function(t) {
			x.current = !1, l(t);
		}, w = function(t) {
			var e = t.target.name() === b, n = x.current, r = e && !n ? "pointer" : "crosshair";
			r !== $.current && ($.current = r, a(r));
		}, A = r("useWAWebMediaEditorCanvasDraw")({
			onDrawStart: N,
			onDrawEnd: M,
			onDone: i,
			onMouseMove: w,
			data: t,
			stage: T,
			minPointDistance: f / S.x,
			clickThreshold: 200,
			boundToStage: !0,
			doneTargets: {
				mousedown: [b, v],
				mouseup: [b]
			},
			pathStyle: {
				color: o("WAWebMediaEditorUtilsColor").Color.White,
				thickness: 0,
				smoothing: L
			}
		}), F = A.cursorPosition, O = A.handlers, B = A.points, W = t.getOutlineLayer().getAllPoints().map(function(e) {
			return t.toScreenPoint(e);
		});
		!L && W.length && W.push(W[W.length - 1]);
		var q = !!B.length;
		q && W.push(B[0]), W.push.apply(W, B);
		var U = [].concat(W);
		!L && U.length && U.push(U[U.length - 1]), F && U.push(F);
		var V = U.flatMap(function(e) {
			return [e.getX(), e.getY()];
		}), H = g / S.x, G = [y / S.x, C / S.x];
		return s.jsxs(o("ReactKonva").Layer, babelHelpers.extends({ ref: P }, O, {
			width: E,
			height: n,
			children: [
				s.jsx(o("ReactKonva").Rect, {
					x: 0,
					y: 0,
					width: E,
					height: n,
					fill: "rgba(0,0,0,0)"
				}),
				s.jsx(o("ReactKonva").Line, {
					points: V,
					lineCap: "round",
					lineJoin: "round",
					stroke: h,
					strokeWidth: H,
					dash: G,
					tension: o("WAWebMediaConstants").MEDIA_EDITOR_OUTLINE_TENSION
				}),
				s.jsx(R, {
					points: W,
					scale: S
				})
			]
		}), "paintCursor");
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e) {
		var t = e.points, n = e.scale;
		if (!t.length) return null;
		var r = t[0], a = t[t.length - 1], i = g / n.x, l;
		return s.jsxs(s.Fragment, { children: [
			l,
			s.jsx(o("ReactKonva").Circle, {
				name: v,
				x: a.getX(),
				y: a.getY(),
				radius: i
			}),
			s.jsx(o("ReactKonva").Circle, {
				x: r.getX(),
				y: r.getY(),
				radius: i,
				stroke: "white"
			}),
			s.jsx(o("ReactKonva").Circle, {
				name: b,
				x: r.getX(),
				y: r.getY(),
				radius: i * 4
			})
		] });
	}
	R.displayName = R.name + " [from " + i.id + "]", l.default = S;
}), 98);
