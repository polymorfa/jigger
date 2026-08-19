__d("WDSNativeImageCarousel.react", [
	"fbt",
	"$InternalEnum",
	"WDNativeImageComponentConstant",
	"WDSNativeImage.react",
	"WDSNativeScrollable.react",
	"WDSNativeSwipeable.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useMemo, f = d.useRef, g = d.useState, h = n("$InternalEnum").Mirrored(["DOTS", "BAR"]), y = 1, C = 4 / 3, b = 16 / 9, v = {
		"1:1": y,
		"4:3": C,
		"16:9": b
	}, S = {
		horizontalScrollContainer: {
			overflowX: "xw2csxc",
			overflowY: "x10wlt62",
			whiteSpace: "xuxw1ft",
			scrollSnapType: "xhfbhpw",
			width: "xh8yej3",
			aspectRatio: "x1plog1",
			"::-webkit-scrollbar_display": "xfk6m8",
			scrollbarWidth: "x1rohswg",
			$$css: !0
		},
		horizontalScrollContainerBorder: {
			borderTopWidth: "x10b6y01",
			borderInlineEndWidth: "x1vs7ofh",
			borderBottomWidth: "x8mxp1h",
			borderInlineStartWidth: "xnh1d43",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "xx42vgk",
			borderInlineEndColor: "xbogo7e",
			borderBottomColor: "x120ee7l",
			borderInlineStartColor: "x1vb5itz",
			width: "x50u2dq",
			height: "xxpcjqh",
			$$css: !0
		},
		image: {
			borderStartStartRadius: "x15mokao",
			borderStartEndRadius: "x1ga7v0g",
			borderEndEndRadius: "x16uus16",
			borderEndStartRadius: "xbiv7yw",
			width: "xh8yej3",
			height: "x5yr21d",
			$$css: !0
		},
		roundBorder: {
			borderStartStartRadius: "xpgljz4",
			borderStartEndRadius: "x1jmugne",
			borderEndEndRadius: "x37x3mu",
			borderEndStartRadius: "x1iudza5",
			$$css: !0
		}
	};
	function R(t) {
		var n = t.ScrollableComponent, a = n === void 0 ? o("WDSNativeScrollable.react").WDSNativeScrollable : n, i = t.altText, l = t.aspectRatio, s = l === void 0 ? "1:1" : l, u = t.dataTestId, d = u === void 0 ? "wa-flows-image-carousel" : u, C = t.hasRoundBorder, b = C === void 0 ? !0 : C, R = t.height, L = t.images, E = t.isRTL, T = E === void 0 ? !0 : E, D = t.loading, x = D === void 0 ? !1 : D, $ = t.onImageClick, P = t.platform, N = P === void 0 ? "ios" : P, M = t.scaleType, w = M === void 0 ? o("WDNativeImageComponentConstant").IMAGE_DEFAULT_SCALE_TYPE : M, A = t.trackerType, F = A === void 0 ? h.DOTS : A, O = t.width, B = f(null), W = f(null), q = g(0), U = q[0], V = q[1], H = g(0), G = H[0], z = H[1], j = g(0), K = j[0], Q = j[1], X = _(function() {
			var e;
			return (e = v[s]) != null ? e : y;
		}, [s]);
		p(function() {
			L.length > 1 && W.current && z(W.current.clientWidth / L.length);
		}, [L.length]);
		var Y = m(function(e) {
			if (F === h.BAR && B.current && W.current) {
				var t = e.currentTarget.scrollLeft, n = t / (B.current.scrollWidth - B.current.clientWidth), r = W.current.clientWidth - G;
				V(r * n);
			}
			if (F === h.DOTS && B.current) {
				var o = B.current.scrollLeft, a = B.current.offsetWidth;
				Q(Math.round(o / a));
			}
		}, [G, F]), J = _(function() {
			return {
				height: R != null ? R : "100%",
				aspectRatio: R != null ? null : X != null ? X : 1
			};
		}, [R, X]), Z = m(function(e, t) {
			var n = I(e.altText, i, t, L.length), r = c.jsx(o("WDSNativeImage.react").WDSNativeImage, {
				enableTransition: !1,
				width: O,
				height: R != null ? R : null,
				aspectRatio: X,
				scaleType: w,
				src: e.src,
				altText: n,
				loading: x,
				xstyle: S.image,
				platform: N
			});
			return c.jsx("div", {
				className: "xh8yej3 x5yr21d x1hdbdi8 xgv127d x1rg5ohu",
				children: $ != null ? c.jsx("button", {
					className: "xjbqb8w x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1ablsmz x2srbyp x124gthr x1so1q23 x1n9nrnd x1a9iy0e x16ju80z x1i6f4sb xh8yej3 x5yr21d x1i10hfl",
					"aria-label": k(n),
					onClick: function() {
						return $ == null ? void 0 : $(t);
					},
					children: r
				}) : r
			}, "item_detail_image_" + t);
		}, [
			i,
			R,
			L.length,
			x,
			$,
			N,
			X,
			w,
			O
		]);
		return L.length === 0 ? null : c.jsx("section", {
			"data-testid": void 0,
			children: c.jsxs(r("WDSNativeSwipeable.react"), {
				isRTL: T,
				children: [c.jsx(a, {
					nativeDraggingControl: !0,
					nativeDraggingOnOverscroll: !1,
					children: c.jsx("div", {
						ref: B,
						className: (e || (e = r("stylex")))([
							b && S.roundBorder,
							S.horizontalScrollContainer,
							b && S.horizontalScrollContainerBorder
						]),
						style: J,
						onScroll: Y,
						"data-testid": void 0,
						children: L.map(Z)
					})
				}), L.length > 1 && c.jsxs("div", babelHelpers.extends({}, {
					0: { className: "x1n2onr6 x3m8u43 xaw3xnq xh8yej3 xam5rvr x19ous0n x78zum5 xl56j7k x1cpjm7i x1hmns74 x1wlytlt x1rmj1tg xszcg87 xxlwren" },
					1: { className: "x1n2onr6 x3m8u43 xaw3xnq xh8yej3 xam5rvr x19ous0n x78zum5 xl56j7k x1cpjm7i x1hmns74 x1wlytlt x1rmj1tg xszcg87 xxlwren xnh6gb5 xi0d610 x19dx85c x1frlw4p" }
				}[!!b << 0], { children: [F === h.BAR && c.jsx("div", {
					ref: W,
					className: "x1plvlek xryxfnj x4qatp2 xa6g792 xdtshbk x1n2onr6 x1nwpe0i x36qwtl x1xrb9t9",
					"data-testid": void 0,
					children: c.jsx("div", {
						"data-testid": void 0,
						className: "x1n2onr6 x36qwtl xkqq1k2 x91jh78 x1xkn691 x4oqio7 x12peec7",
						style: {
							left: U,
							width: G
						}
					})
				}), F === h.DOTS && L.map(function(e, t) {
					return c.jsx("div", babelHelpers.extends({ "data-testid": void 0 }, {
						0: { className: "xq36fz5 xx63ema x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1y9jxqc x13w557r xluz5af x75nbue x1lbixdm x12peec7 x197sbye x19991ni x1d8287x" },
						1: { className: "xq36fz5 xx63ema x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1y9jxqc x13w557r xluz5af x75nbue x1lbixdm x12peec7 x19991ni x1d8287x x1hc1fzr" }
					}[(K === t) << 0]), t);
				})] }))]
			})
		});
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e, t) {
		return s._(
			/*BTDS*/
			"",
			[s._param("index", e + 1), s._param("totalNumber", t)]
		);
	}
	function E() {
		return s._(
			/*BTDS*/
			""
		);
	}
	function k(e) {
		return s._(
			/*BTDS*/
			"",
			[s._param("label", e)]
		);
	}
	function I(e, t, n, r) {
		var o, a = (o = e != null ? e : t) != null ? o : null, i = L(n, r).toString(), l = r > 1 ? E().toString() : null;
		return (a != null ? a + ". " : "") + (i + " ") + (l != null ? l : "");
	}
	l.TWDSNativeImageCarouselTrackerType = h, l.WDSNativeImageCarousel = R;
}), 226);
