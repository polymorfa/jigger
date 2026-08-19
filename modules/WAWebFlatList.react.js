__d("WAWebFlatList.react", [
	"MetaConfig",
	"WACustomError",
	"WAWebFocusTracer",
	"WAWebIdleTaskRunner",
	"WAWebKeyboardHotKeys.react",
	"WAWebListItem.react",
	"WAWebVelocityTransitionGroup",
	"clamp",
	"err",
	"gkx",
	"react",
	"stylex",
	"useWAWebAnimationFrames",
	"useWAWebDebouncedCallback",
	"useWAWebStableCallback"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u, c = u || (u = o("react")), d = u, m = d.createRef, p = d.useEffect, _ = d.useImperativeHandle, f = d.useLayoutEffect, g = d.useRef, h = d.useState, y = {
		viewport: {
			position: "x1n2onr6",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		verticalListViewport: {
			marginTop: "x1y332i5",
			$$css: !0
		},
		horizontalListViewport: {
			height: "x5yr21d",
			$$css: !0
		}
	}, C = 72, b = 72, v = 150, S = 1e6, R = (function(e) {
		function t(t) {
			var n = r("gkx")("26258") ? "" : t.itemKey;
			return e.call(this, "Unknown data encountered while rendering. " + n) || this;
		}
		return babelHelpers.inheritsLoose(t, e), t;
	})(o("WACustomError").CustomError);
	function L(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.role, l = a.itemRole, u = l === void 0 ? "listitem" : l, d = a.flatListController, R = a.direction, L = a.itemEnterAnimationsEnabled, D = L === void 0 ? !1 : L, x = a.onPointerEventsOff, $ = a.onPointerEventsOn, P = a.disablePointerEventsOnScroll, N = P === void 0 ? !0 : P, M = a.reorderAnimationsEnabled, w = M === void 0 ? !0 : M, A = a.renderItem, F = a.defaultItemWidth, O = F === void 0 ? C : F, B = a.defaultItemHeight, W = B === void 0 ? b : B, q = a.extraItems, U = q === void 0 ? 5 : q, V = a.forceConsistentRenderCount, H = V === void 0 ? !0 : V, G = a.testid, z = a.containerXstyles, j = a.viewportXstyles, K = a.handleKeyboardNavigation, Q = K === void 0 ? !1 : K, X = a.focusableItemSelector, Y = a.initialActiveOptionId, J = a.tabIndex, Z = a.targetWindow, ee = E(a.data, R, O, W), te = ee.enhancedData, ne = ee.listLength, re = g(null), oe = g(!0), ae = g(null), ie = h(0), le = ie[0], se = ie[1], ue = h(0), ce = ue[0], de = ue[1], me = h(0), pe = me[0], _e = me[1], fe = h(0), ge = fe[0], he = fe[1], ye = h(0), Ce = ye[0], be = ye[1], ve = h(ne), Se = ve[0], Re = ve[1], Le = g(0), Ee = function(t) {
			var e = t != null ? t : {}, n = e.scrollFromStart, o = n === void 0 ? pe : n, a = e.offsetFromStart, i = a === void 0 ? ge : a, l = e.bodyDimension, s = l === void 0 ? Ce : l;
			if (s === void 0 || i === void 0) throw r("err")("FlatList:Computing FlatList without a valid Container");
			for (var u = 0, c = 0; c < te.length; c++) {
				var d = te[c], m = k(d, R, O, W);
				if (i + d.offset + m > o) {
					u = c;
					break;
				}
			}
			var p = te.length - 1, _ = 0;
			te.length > 0 && (_ = H ? Math.min(te[u].offset + s, ne) : Math.min(o + s, ne + i));
			for (var f = u; f < te.length; f++) {
				var g = te[f], h = k(g, R, O, W);
				if (i + g.offset + h >= _) {
					p = f;
					break;
				}
			}
			var y = U, C = U - u;
			C > 0 && (y += C);
			var b = U, v = p + U - te.length;
			return v > 0 && (b += v), {
				firstIndex: Math.max(u - b, 0),
				lastIndex: Math.min(p + y, te.length - 1)
			};
		}, ke = r("useWAWebStableCallback")(function(e) {
			var t = re.current;
			if (t) {
				var n = R === "horizontal" ? t.getBoundingClientRect().left - e.position.left : t.getBoundingClientRect().top - e.position.top, r = Math.max(n, 0), o = R === "horizontal" ? e.width : e.height, a = Ee({
					offsetFromStart: r,
					bodyDimension: o
				});
				se(a.firstIndex), de(a.lastIndex), he(r), be(o);
			}
		}), Ie = h(!1), Te = Ie[0], De = Ie[1], xe = g(!1), $e = r("useWAWebDebouncedCallback")(function() {
			if (Te) return $e();
			ae.current != null && (o("WAWebIdleTaskRunner").UIBusyTasks.clearBusy(ae.current), ae.current = null), $ == null || $();
			var e = re.current;
			e && (e.style.pointerEvents = "auto"), oe.current = !1;
		}, v), Pe = function() {
			if (ae.current = o("WAWebIdleTaskRunner").UIBusyTasks.setBusy(ae.current), !oe.current) {
				x == null || x();
				var e = re.current;
				e && (e.style.pointerEvents = "none"), oe.current = !0;
			}
		};
		r("useWAWebAnimationFrames")(function() {
			N === !0 && Pe();
			var e = d.getScrollFromStart();
			if (e == null) throw r("err")("FlatList:ScrollEvent thrown while container is unmounted");
			var t = Math.max(e, 0), n = Ee({ scrollFromStart: t });
			se(n.firstIndex), de(n.lastIndex), _e(t), xe.current || (De(!1), N === !0 && $e());
		}, {
			active: Te,
			targetWindow: Z
		});
		var Ne = function() {
			Te ? xe.current = !0 : (xe.current = !1, De(!0));
		};
		f(function() {
			return d.registerList({
				handleLayout: ke,
				handleScroll: Ne
			}), function() {
				d.unregisterList();
			};
		}, []);
		var Me = Ee();
		Me.firstIndex !== le && se(Me.firstIndex), Me.lastIndex !== ce && de(Me.lastIndex), ne !== Se && (!D || ne > Se) && Re(ne);
		var we = function(t, n) {
			if (n === void 0 && (n = 0), t < 0 || t >= te.length) throw r("err")("Flatlist: Invalid index for scrolling: " + t + ". Data length: " + te.length);
			var e = te[t].offset;
			(e < pe - n || e > pe + Ce + n) && d.setScrollFromStart(e);
		}, Ae = function() {
			var e;
			(e = re.current) == null || e.focus();
		};
		_(n, function() {
			return {
				scrollIntoViewIfNeeded: we,
				setFocus: Ae
			};
		});
		var Fe = R === "horizontal" ? { width: Se } : { height: Se }, Oe = function() {
			Re(ne);
		}, Be = g(new Map()), We = g(new Map()), qe = function(t, n, o) {
			var e = R === "horizontal" ? { width: I(n, O) } : { height: T(n, W) }, i;
			return r("MetaConfig")._("351") ? (i = We.current.get(n.dataIndex), i == null && (i = m(), We.current.set(n.dataIndex, i))) : i = m(), a.handleKeyboardNavigation === !0 && Be.current.set(n.dataIndex, i), c.jsx(r("WAWebListItem.react"), {
				ref: i,
				data: babelHelpers.extends({}, n, e),
				animate: w,
				zIndex: r("MetaConfig")._("351") ? S - n.dataIndex : te.length - o - 1,
				renderItem: A,
				listDirection: R,
				testid: "list-item-" + o,
				role: u,
				onFocus: function() {
					Le.current = n.dataIndex;
				},
				index: n.dataIndex
			}, t);
		}, Ue = te.slice(le, ce + 1), Ve = Ue.map(function(e, t) {
			return qe(e.itemKey, e, t);
		}), He = function(t) {
			var e;
			return (e = re.current) != null && e.contains(document.activeElement) && document.activeElement !== re.current ? Le.current + t : 0;
		}, Ge = function(t, n) {
			if (n === void 0 && (n = 0), typeof X == "string" && t != null) {
				var e = ze(), o = t.querySelectorAll(X);
				if (e === -1) return r("WAWebFocusTracer").focus(o[0]);
				var a = e + n;
				return r("WAWebFocusTracer").focus(o[r("clamp")(a, 0, o.length - 1)]);
			}
		}, ze = function(t) {
			var e, n;
			if (typeof X != "string") return -1;
			var r = t != null ? t : (e = Be.current.get(Le.current)) == null ? void 0 : e.current, o = (n = r == null ? void 0 : r.querySelectorAll(X)) != null ? n : [], a = Array.from(o).findIndex(function(e) {
				return e === document.activeElement;
			});
			return a;
		}, je = function(t) {
			t.preventDefault();
			var e = He(-1), n = Be.current.get(e);
			n != null && n.current && Ge(n.current);
		}, Ke = function(t) {
			t.preventDefault();
			var e = He(1), n = Be.current.get(e);
			n != null && n.current && Ge(n.current);
		}, Qe = function(t, n) {
			t.preventDefault();
			var e = Be.current.get(Le.current);
			e != null && e.current && Ge(e.current, n);
		}, Xe = function(t) {
			return Qe(t, -1);
		}, Ye = function(t) {
			return Qe(t, 1);
		}, Je;
		Q && R === "vertical" ? Je = {
			up: je,
			down: Ke,
			right: Ye,
			left: Xe
		} : Q && R === "horizontal" && (Je = {
			left: je,
			right: Ke
		}), p(function() {
			var e = te.findIndex(function(e) {
				return e.itemKey === Y;
			});
			e != null && e > -1 && we(e);
		}, []);
		var Ze;
		z != null && (Ze = (s || (s = r("stylex")))(z));
		var et = -1;
		return J != null ? et = J : Q === !0 && (et = 0), c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			tabIndex: et,
			handlers: Je,
			className: Ze,
			"data-testid": G,
			onFocus: function() {
				if (Q && re.current === document.activeElement) {
					var e = Be.current.get(Le.current);
					e != null && e.current && Ge(e.current);
				}
			},
			ref: re,
			children: c.jsx("div", {
				"aria-label": a["aria-label"],
				className: (s || (s = r("stylex")))(R === "horizontal" && y.horizontalListViewport, R === "vertical" && y.verticalListViewport, y.viewport, j),
				role: i,
				"aria-rowcount": a["aria-rowcount"],
				"aria-colcount": a["aria-colcount"],
				style: Fe,
				children: D ? c.jsx(r("WAWebVelocityTransitionGroup"), {
					transitionName: "fade",
					onAnimationComplete: Oe,
					children: Ve
				}) : Ve
			})
		});
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E(e, t, n, r) {
		var o = 0, a = 0, i = e.map(function(e) {
			var i = babelHelpers.extends({}, e, {
				offset: o,
				dataIndex: a
			}), l = k(e, t, n, r);
			return o += l, a++, i;
		});
		return {
			enhancedData: i,
			listLength: o
		};
	}
	function k(e, t, n, r) {
		return t === "horizontal" ? I(e, n) : T(e, r);
	}
	function I(e, t) {
		return e.width != null && e.width > 0 ? e.width : t;
	}
	function T(e, t) {
		return e.height != null && e.height > 0 ? e.height : t;
	}
	l.DEFAULT_ITEM_HEIGHT = b, l.UnknownDataError = R, l.FlatList = L;
}), 98);
