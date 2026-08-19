__d("WAWebMoveResizeComponent.react", [
	"fbt",
	"WAShiftTimer",
	"WAWebCmd",
	"WAWebDragTextureIcon.react",
	"WAWebMoveResizeComponentHandlers",
	"WAWebMoveResizeComponentHooks",
	"WAWebMoveResizeComponentUtils",
	"WAWebMoveResizeConstants",
	"WAWebMoveResizeDragArea.react",
	"WAWebMoveResizeLogic",
	"WAWebMoveResizeResizers.react",
	"WAWebVelocityAnimate",
	"WDSColorStyles.stylex",
	"nullthrows",
	"react",
	"stylex",
	"useLazyRef",
	"useMergeRefs",
	"useWAWebDebouncedCallback",
	"useWAWebListener",
	"useWAWebOnUnmount",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["moveResizeRef", "ref"], u, c, d = c || (c = o("react")), m = c, p = m.useEffect, _ = m.useImperativeHandle, f = m.useMemo, g = m.useRef, h = m.useState, y = 12, C = {
		moveResizeComponentInnerContainer: {
			position: "x1n2onr6",
			height: "x5yr21d",
			$$css: !0
		},
		topContentMoveable: {
			paddingTop: "x16ovd2e",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x1ktfvgn",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		dragBarSvg: {
			marginTop: "xdj266r",
			marginBottom: "xat24cr",
			marginInlineStart: "xvc5jky",
			marginInlineEnd: "x11t971q",
			$$css: !0
		}
	};
	function b(t) {
		var n = t.moveResizeRef, a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.animationStartStyle, c = i.aspectRatio, m = i.dragCursor, b = m === void 0 ? "move" : m, v = i.escapeConversationHeader, S = i.initialStyle, R = i.margin, L = i.minWidth, E = i.onMove, k = i.onMoveStop, I = i.onResize, T = r("useWAWebUnmountSignal")(), D = g(null), x = g(!1);
		_(n, function() {
			return {
				cancelDefaultHeightEnforcement: function() {
					D.current == null && (D.current = new AbortController()), D.current.abort();
				},
				markExternalResizeInProgress: function(t) {
					x.current = t;
				}
			};
		});
		var $ = function() {
			return S ? {
				width: S.width,
				left: S.left,
				bottom: S.bottom
			} : {
				width: L,
				left: R.x,
				bottom: R.y
			};
		}, P = f(function() {
			var e;
			v && o("WAWebCmd").Cmd.getConversationHeaderOffset(function(t) {
				e = t == null ? void 0 : t.right;
			});
			var t = $(), n = t.width / c;
			i.independentResize === !0 && i.minHeight != null && (n = i.minHeight);
			var r = {
				resizeDirection: o("WAWebMoveResizeComponentUtils").ResizeDirections.TOP,
				currentAction: o("WAWebMoveResizeComponentUtils").UserActions.IDLE,
				resizeStartMousePosition: {
					x: 0,
					y: 0
				},
				resizeStartPiPStyle: {
					width: 0,
					bottom: 0,
					left: 0
				},
				moveStartMousePosition: {
					x: 0,
					y: 0
				},
				moveStartPositionStyle: {
					left: 0,
					bottom: 0
				},
				previousWindowSize: {
					height: window.innerHeight,
					width: window.innerWidth
				},
				previousConvPanelRightBorder: e,
				initialHeight: n
			};
			return l ? babelHelpers.extends({}, r, l) : babelHelpers.extends({}, r, t);
		}, []), N = h(P.width), M = N[0], w = N[1], A = h(P.initialHeight), F = A[0], O = A[1], B = h(P.bottom), W = B[0], q = B[1], U = g(P.bottom), V = h(P.left), H = V[0], G = V[1], z = g(P.left), j = h(i.independentResize === !0), K = j[0], Q = j[1], X = h(c), Y = X[0], J = X[1];
		if (i.independentResize === !0 !== K) {
			var Z = Y;
			if (Q(i.independentResize === !0), J(c), i.independentResize === !0 && !K) {
				var ee = M / Z;
				Math.abs(F - ee) > 1 && O(ee);
			}
		} else c !== Y && J(c);
		var te = h(P.resizeDirection), ne = te[0], re = te[1], oe = h(P.currentAction), ae = oe[0], ie = oe[1], le = g(P.currentAction), se = h(P.resizeStartMousePosition), ue = se[0], ce = se[1], de = h(P.resizeStartPiPStyle), me = de[0], pe = de[1], _e = h(P.width / c), fe = _e[0], ge = _e[1], he = g(P.moveStartMousePosition), ye = g(P.moveStartPositionStyle), Ce = h(P.previousWindowSize), be = Ce[0], ve = Ce[1], Se = h(P.previousConvPanelRightBorder), Re = Se[0], Le = Se[1], Ee = g(null), ke = g(null), Ie = r("useMergeRefs")(a, ke), Te = g(null), De = g(null), xe = r("useLazyRef")(function() {
			return new (o("WAShiftTimer")).ShiftTimer(function(e) {
				e.left && G(e.left), e.bottom && q(e.bottom), e.width && w(e.width);
			});
		}), $e = function(t) {
			return function(e) {
				e.button === 0 && (re(t), le.current = o("WAWebMoveResizeComponentUtils").UserActions.RESIZE, ie(o("WAWebMoveResizeComponentUtils").UserActions.RESIZE), i.onResizeStart == null || i.onResizeStart(), pe({
					width: M,
					left: H,
					bottom: W
				}), ge(F), ce({
					x: e.clientX,
					y: e.clientY
				})), e.stopPropagation();
			};
		}, Pe = g(!1), Ne = function(t) {
			t.target instanceof Element && t.target.closest("input, textarea, [contenteditable=\"true\"]") != null || (t.button === 0 && (le.current = o("WAWebMoveResizeComponentUtils").UserActions.MOVE, ie(o("WAWebMoveResizeComponentUtils").UserActions.MOVE), Pe.current = !1, ye.current = {
				left: H,
				bottom: W
			}, he.current = {
				x: t.clientX,
				y: t.clientY
			}), t.stopPropagation());
		}, Me = function() {
			return {
				top: window.innerHeight - W - M / c,
				left: H,
				bottom: window.innerHeight - W,
				right: H + M
			};
		}, we = function() {
			var e = Me();
			k == null || k(e);
		}, Ae = o("WAWebMoveResizeComponentHooks").useDimensionAnimation({
			componentRef: ke,
			unmountSignal: T
		}, w, O, q, G), Fe = Ae.animateDimensionChange, Oe = Ae.updateDimensionState, Be = function() {
			var e, t, n = ((e = Te.current) == null ? void 0 : e.offsetHeight) != null ? Te.current.offsetHeight - y : 0, r = ((t = De.current) == null ? void 0 : t.offsetHeight) != null ? De.current.offsetHeight - y : 0;
			return {
				extraTopContentHeight: n,
				extraBottomContentHeight: r
			};
		}, We = function(t) {
			var e = Be(), n = e.extraBottomContentHeight, r = e.extraTopContentHeight;
			switch (le.current) {
				case o("WAWebMoveResizeComponentUtils").UserActions.IDLE: return;
				case o("WAWebMoveResizeComponentUtils").UserActions.RESIZE: {
					var a = o("WAWebMoveResizeComponentHandlers").processResizeAction({
						resizeDirection: ne,
						resizeStartMousePosition: ue,
						clientX: t.clientX,
						clientY: t.clientY,
						aspectRatio: c,
						independentResize: i.independentResize === !0,
						minWidth: L,
						minHeight: i.minHeight,
						margin: R,
						resizeStartPiPStyle: me,
						resizeStartHeight: fe,
						width: M,
						extraTopContentHeight: r,
						extraBottomContentHeight: n,
						moveStartPositionStyle: ye.current
					});
					w(a.resizedWidth), O(a.resizedHeight), G(a.resizedLeft), q(a.resizedBottom), I && I(a.resizedWidth, a.resizedLeft, a.resizedBottom);
					break;
				}
				case o("WAWebMoveResizeComponentUtils").UserActions.MOVE: {
					Pe.current || (Pe.current = !0, i.onMoveStart == null || i.onMoveStart());
					var l = o("WAWebMoveResizeComponentHandlers").processMoveAction({
						clientX: t.clientX,
						clientY: t.clientY,
						moveStartMousePosition: he.current,
						moveStartPositionStyle: ye.current,
						width: M,
						height: F,
						aspectRatio: c,
						margin: R,
						minWidth: L,
						independentResize: i.independentResize === !0,
						extraTopContentHeight: r,
						extraBottomContentHeight: n,
						resizeStartPiPStyle: me
					});
					G(l.movedLeft), q(l.movedBottom), E && E(l.movedLeft, l.movedBottom);
					break;
				}
			}
		}, qe = function(t) {
			le.current === o("WAWebMoveResizeComponentUtils").UserActions.RESIZE ? (x.current = !1, i.onResizeEnd == null || i.onResizeEnd()) : le.current === o("WAWebMoveResizeComponentUtils").UserActions.MOVE && Pe.current && (i.onMoveEnd == null || i.onMoveEnd()), Pe.current = !1, le.current = o("WAWebMoveResizeComponentUtils").UserActions.IDLE, ie(o("WAWebMoveResizeComponentUtils").UserActions.IDLE);
		}, Ue = o("WAWebMoveResizeComponentHooks").createEscapeOverlapHandler({
			componentRef: ke,
			unmountSignal: T,
			aspectRatio: c,
			width: M,
			left: H,
			bottom: W,
			margin: R,
			setLeft: G,
			setBottom: q,
			getRect: Me
		});
		p(function() {
			if (S) {
				if (Ee.current) {
					xe.current.onOrAfter(o("WAWebMoveResizeConstants").INITIAL_RENDER_ANIMATION_DURATION, S);
					return;
				}
				var e = S.width, t = S.left + e - (M + H), n = S.bottom + e / c - (W + M / c);
				Math.abs(t) < .1 && Math.abs(n) < .1 && (S.left && G(S.left), S.bottom && q(S.bottom), S.width && w(S.width));
			}
		}, [c]);
		var Ve = function() {
			return i.independentResize === !0 || x.current === !0 ? {
				width: M,
				height: F
			} : {
				width: M,
				height: M / c
			};
		}, He = r("useWAWebDebouncedCallback")(function() {
			if (le.current === o("WAWebMoveResizeComponentUtils").UserActions.IDLE) {
				var e = Be(), t = e.extraBottomContentHeight, n = e.extraTopContentHeight, r = o("WAWebMoveResizeComponentHandlers").calculateWindowResizeState({
					width: M,
					height: F,
					independentResize: i.independentResize === !0,
					bottom: W,
					left: H,
					aspectRatio: i.aspectRatio,
					margin: i.margin,
					minWidth: i.minWidth,
					extraTopContentHeight: n,
					extraBottomContentHeight: t,
					previousWindowSize: be,
					previousConvPanelRightBorder: Re,
					escapeConversationHeader: i.escapeConversationHeader,
					getConversationHeaderOffset: function(t) {
						return o("WAWebCmd").Cmd.getConversationHeaderOffset(t);
					}
				});
				r.hasChanges && (q(r.bottom), G(r.left), w(r.width), r.height != null && O(r.height), ve(r.previousWindowSize), Le(r.previousConvPanelRightBorder));
			}
		}, 50);
		p(function() {
			if (!l) {
				He();
				return;
			}
			var e = $(), t = l.width / c, n = l.height, a = n / t, i = (t - n) / 2 / a, s = babelHelpers.extends({}, e, {
				height: e.width / c,
				scaleY: [1, a],
				translateY: [0, i]
			}), u = r("WAWebVelocityAnimate")(r("nullthrows")(ke.current), s, {
				easing: "easeInOutQuart",
				duration: o("WAWebMoveResizeConstants").INITIAL_RENDER_ANIMATION_DURATION
			});
			Ee.current = u.then(function() {
				T.aborted || (Ee.current = null, G(e.left), q(e.bottom), w(e.width), He());
			});
		}, []), r("useWAWebOnUnmount")(function() {
			xe.current.cancel();
		});
		var Ge = g(i.minWidth), ze = g(i.minHeight);
		p(function() {
			var e, t, n = Ge.current !== i.minWidth, r = ze.current !== i.minHeight;
			if (Ge.current = i.minWidth, ze.current = i.minHeight, !(!n && !r)) {
				if ((e = D.current) != null && e.signal.aborted) {
					D.current = new AbortController();
					return;
				}
				var a = i.independentResize === !0 ? F : M / i.aspectRatio, l = (t = i.minHeight) != null ? t : i.minWidth / i.aspectRatio, s = i.independentResize === !0;
				if (M < i.minWidth || s && a < l) {
					var u = window.innerWidth - 2 * i.margin.x, c = M < i.minWidth ? Math.min(i.minWidth, Math.max(0, u)) : M, d = s ? Math.max(a, l) : c / i.aspectRatio, m = window.innerHeight - 2 * i.margin.y, p = W;
					W + d > m + i.margin.y && (p = Math.max(i.margin.y, m + i.margin.y - d));
					var _ = o("WAWebMoveResizeLogic").clampLeftToBounds(z.current, c, i.margin.x), f = _.adjustedLeft, g = _.needsAdjustment, h = d - a, y = h > 0 && ke.current != null;
					if (y) {
						var C = {
							height: [d, a],
							bottom: [p, W]
						}, b = {
							width: c,
							height: i.independentResize === !0 ? d : void 0,
							bottom: p
						};
						g && (C.left = f, b.left = f), Fe(C, b);
					} else {
						var v = {
							width: c,
							height: i.independentResize === !0 ? d : void 0,
							bottom: p
						};
						g && (v.left = f), Oe(v);
					}
				}
			}
		}, [
			i.minWidth,
			i.minHeight,
			i.aspectRatio,
			i.margin,
			i.independentResize,
			M,
			F,
			W,
			Fe,
			Oe
		]), p(function() {
			U.current = W;
		}, [W]), p(function() {
			z.current = H;
		}, [H]), p(function() {
			var e = i.externalResize;
			if (e != null) {
				var t = Be(), n = t.extraBottomContentHeight, r = t.extraTopContentHeight, a = window.innerWidth - 2 * i.margin.x, l = window.innerHeight - 2 * i.margin.y - r - n, s = Math.min(e.width, Math.max(0, a)), u = Math.min(e.height, Math.max(0, l)), c = e.left, d = U.current, m = z.current, p = o("WAWebMoveResizeLogic").clampBottomToBounds(d, u, i.margin.y, r, n), _ = p.adjustedBottom, f = p.needsAdjustment, g = c != null ? c : m, h = o("WAWebMoveResizeLogic").clampLeftToBounds(g, s, i.margin.x), y = h.adjustedLeft, C = h.needsAdjustment, b = {
					height: u,
					width: s
				}, v = {
					width: s,
					height: u
				};
				f && (b.bottom = [_, d], v.bottom = _), (c != null || C) && (b.left = y, v.left = y), Fe(b, v), x.current = !1;
			}
		}, [
			i.externalResize,
			i.margin,
			Fe
		]), o("useWAWebListener").useListener(window, "mousemove", We), o("useWAWebListener").useListener(window, "mouseup", qe), o("useWAWebListener").useListener(window, "resize", He), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "floater_escape_overlap", Ue);
		var je = i.enableDragBar === !0, Ke = Ve(), Qe = i.disableResize, Xe = i.independentResize, Ye = i.minHeight, Je = i.onMoveEnd, Ze = i.onMoveStart, et = i.onResizeEnd, tt = i.onResizeStart, nt = o("WAWebMoveResizeComponentHooks").useKeyboardNavigation({
			width: M,
			height: F,
			left: H,
			bottom: W,
			aspectRatio: c,
			minWidth: L,
			minHeightProp: Ye,
			margin: R,
			disableResize: Qe,
			independentResize: Xe,
			setWidth: w,
			setHeight: O,
			setLeft: G,
			setBottom: q,
			onResizeStart: tt,
			onResize: I,
			onResizeEnd: et,
			onMoveStart: Ze,
			onMove: E,
			onMoveEnd: Je
		}), rt = {
			width: Ke.width,
			height: Ke.height,
			bottom: W + "px",
			left: H + "px"
		};
		return d.jsxs("div", {
			"data-testid": "move_resize_component",
			ref: Ie,
			role: "application",
			"aria-label": s._(
				/*BTDS*/
				""
			),
			tabIndex: 0,
			className: "xixxii4",
			style: rt,
			onKeyDown: nt,
			onMouseEnter: i.onMouseEnter,
			onMouseLeave: i.onMouseLeave,
			onFocus: i.onFocus,
			onBlur: i.onBlur,
			children: [
				je || i.topContent != null ? d.jsxs("div", babelHelpers.extends({ ref: Te }, {
					0: { className: "x10l6tqk xtijo5x x1o0tod x9f619 x1rdoygx x1gy68qi x5lk768 xzp2c5a x6nl9eh x1a5l9x9 x1e7945m x11o6v7j x1weeur4 xwhdwdg" },
					2: { className: "x10l6tqk xtijo5x x1o0tod x9f619 x1rdoygx x5lk768 xzp2c5a x6nl9eh x1a5l9x9 x1e7945m x11o6v7j x1weeur4 xwhdwdg xtvc7gp" },
					1: { className: "x10l6tqk xtijo5x x1o0tod x9f619 x1rdoygx x1gy68qi x5lk768 xzp2c5a x6nl9eh x1a5l9x9 x1e7945m x11o6v7j xwhdwdg xrnddhk" },
					3: { className: "x10l6tqk xtijo5x x1o0tod x9f619 x1rdoygx x5lk768 xzp2c5a x6nl9eh x1a5l9x9 x1e7945m x11o6v7j xwhdwdg xtvc7gp xrnddhk" }
				}[(i.extraContentVisible === !0) << 1 | (i.extraContentVisible === !0) << 0], { children: [
					je ? d.jsx(r("WAWebMoveResizeDragArea.react"), {
						xstyle: C.topContentMoveable,
						onMouseDown: Ne,
						onMouseUp: we,
						currentAction: ae,
						dragCursor: b,
						children: d.jsx(o("WAWebDragTextureIcon.react").DragTextureIcon, {
							xstyle: o("WDSColorStyles.stylex").WDSColorStyles.persistentAlwaysWhite,
							iconXstyle: C.dragBarSvg
						})
					}) : null,
					i.topContent,
					d.jsx(r("WAWebMoveResizeResizers.react"), {
						getResizeCallback: $e,
						currentAction: ae,
						directions: o("WAWebMoveResizeComponentUtils").RISIZE_TOP_DIRECTIONS
					})
				] })) : null,
				i.bottomContent != null ? d.jsxs("div", babelHelpers.extends({
					ref: De,
					style: { top: i.extraContentVisible !== !0 && De.current ? "calc(100% - " + De.current.offsetHeight + "px)" : null }
				}, {
					0: { className: "x10l6tqk xtijo5x x1o0tod x9f619 x1rdoygx x1gy68qi x5lk768 xwa60dl xrxd3a7 x1iw51ew xde1mab x10b6aqq x47corl x1bczwif x17un8ov x7vuprf x1mg3h75" },
					2: { className: "x10l6tqk xtijo5x x1o0tod x9f619 x1rdoygx x5lk768 xwa60dl xrxd3a7 x1iw51ew xde1mab x10b6aqq x47corl x1bczwif x17un8ov x7vuprf x1mg3h75 xtvc7gp" },
					1: { className: "x10l6tqk xtijo5x x1o0tod x9f619 x1rdoygx x1gy68qi x5lk768 xrxd3a7 x1iw51ew xde1mab x10b6aqq x1bczwif x17un8ov x7vuprf x1mg3h75 xetwxw6 x71s49j" },
					3: { className: "x10l6tqk xtijo5x x1o0tod x9f619 x1rdoygx x5lk768 xrxd3a7 x1iw51ew xde1mab x10b6aqq x1bczwif x17un8ov x7vuprf x1mg3h75 xtvc7gp xetwxw6 x71s49j" }
				}[(i.extraContentVisible === !0) << 1 | (i.extraContentVisible === !0) << 0], { children: [
					d.jsx("div", { className: "x10l6tqk x13vifvy x1o0tod xtijo5x x1ey2m1c x1rdoygx x1bczwif x17un8ov x7vuprf x1mg3h75 xwhdwdg" }),
					i.bottomContent,
					d.jsx(r("WAWebMoveResizeResizers.react"), {
						getResizeCallback: $e,
						currentAction: ae,
						directions: o("WAWebMoveResizeComponentUtils").RISIZE_BOTTOM_DIRECTIONS
					})
				] })) : null,
				i.disableResize ? null : d.jsx(r("WAWebMoveResizeResizers.react"), {
					getResizeCallback: $e,
					currentAction: ae,
					directions: i.topContent != null ? o("WAWebMoveResizeComponentUtils").RISIZE_SIDE_DIRECTIONS : void 0
				}),
				d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props([C.moveResizeComponentInnerContainer, i.xstyle]), { children: d.jsxs(r("WAWebMoveResizeDragArea.react"), {
					onMouseDown: Ne,
					onMouseUp: we,
					currentAction: ae,
					disabled: i.enableDragBar,
					dragCursor: b,
					children: [i.children, ae !== o("WAWebMoveResizeComponentUtils").UserActions.IDLE ? d.jsx("div", { className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d" }) : null]
				}) }))
			]
		});
	}
	b.displayName = b.name + " [from " + i.id + "]", l.default = b;
}), 226);
