__d("WAWebProductCatalogProductImageViewFlow.react", [
	"Keys",
	"WAWebModalManager",
	"WAWebProductCatalogLogEvents",
	"WAWebProductCatalogProductImageViewerModal.react",
	"WAWebProductCatalogProductThumb.react",
	"WAWebStateUtils",
	"WAWebVelocityAnimate",
	"WAWebVelocityTransitionGroup",
	"react",
	"useWAWebListener",
	"useWAWebPrevious",
	"useWAWebRenderCallbacks"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useRef, p = u.useState, _ = {
		viewerThumbs: {
			display: "x78zum5",
			width: "xh8yej3",
			overflowX: "x14aock7",
			$$css: !0
		},
		paddingVert8: {
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			$$css: !0
		}
	};
	function f(e) {
		var t = e.activeProductImage, n = e.product, a = e.productImageCollection, i = e.sessionId, l = m(!1), u = m(null), f = m(null), g = m(null), h = a.toArray(), y = p(function() {
			return h.indexOf(t);
		}), C = y[0], b = y[1], v = p(!1), S = v[0], R = v[1], L = r("useWAWebPrevious")(n), E = r("useWAWebPrevious")(i), k = r("useWAWebPrevious")(C), I = c(function(e) {
			e !== C && (o("WAWebProductCatalogLogEvents").logImageNavigate({
				product: o("WAWebStateUtils").unproxy(n),
				catalogSessionId: i
			}), o("WAWebProductCatalogLogEvents").logImageListClick({
				product: o("WAWebStateUtils").unproxy(n),
				catalogSessionId: i
			})), b(e);
		}, [
			C,
			n,
			i
		]), T = c(function(e, t) {
			if (e && e.stopPropagation(), !S) {
				var n = h.length, r = C + t, o = r < 0 ? n - 1 : r % n;
				I(o);
			}
		}, [
			C,
			I,
			S,
			h.length
		]), D = function(t) {
			t && t.preventDefault(), t.keyCode === r("Keys").LEFT ? T(t, -1) : t.keyCode === r("Keys").RIGHT && T(t, 1);
		};
		o("useWAWebListener").useListener(window, "keydown", D);
		var x = function(t) {
			var e;
			t === void 0 && (t = !1);
			var n = f.current, o = (e = g.current) == null ? void 0 : e.firstChild, a = u.current;
			if (!(!n || !o || !a)) {
				var i = 0;
				a instanceof HTMLElement && (i = a.clientWidth / 2 - n.clientWidth / 2), r("WAWebVelocityAnimate")(a, "stop");
				var l = 0;
				t && (l = 300), r("WAWebVelocityAnimate")(a, "scroll", {
					duration: l,
					container: o,
					offset: i,
					axis: "x",
					easing: [
						.1,
						.82,
						.25,
						1
					]
				});
			}
		};
		r("useWAWebRenderCallbacks")({ onMount: function() {
			x(), f.current && r("WAWebVelocityAnimate")(f.current, {
				opacity: [1, 0],
				translateY: ["0%", "100%"]
			}, {
				duration: 300,
				delay: 100,
				easing: [
					.1,
					.82,
					.25,
					1
				]
			}), o("WAWebProductCatalogLogEvents").logImageCarouselModalView({
				product: o("WAWebStateUtils").unproxy(n),
				catalogSessionId: i
			});
		} });
		var $ = function(t) {
			R(t);
		}, P = function() {
			o("WAWebModalManager").ModalManager.closeMedia();
		}, N = function() {
			f.current && r("WAWebVelocityAnimate")(f.current, {
				opacity: [0, 1],
				translateY: ["100%", "0%"]
			}, {
				duration: 300,
				easing: [
					.1,
					.82,
					.25,
					1
				]
			});
		};
		d(function() {
			k !== C && (x(!0), o("WAWebProductCatalogLogEvents").logFullImageView({
				product: o("WAWebStateUtils").unproxy(n),
				catalogSessionId: i
			}));
		}, [
			C,
			k,
			L,
			E,
			n,
			i
		]);
		var M = h.length, w = C > 0 ? function(e) {
			return T(e, -1);
		} : null, A = C + 1 < M ? function(e) {
			return T(e, 1);
		} : null;
		return s.jsxs("div", {
			className: S ? "img-zoomed-in" : null,
			children: [s.jsx("div", babelHelpers.extends({}, {
				0: { className: "x10l6tqk x1ey2m1c x1qralhi x9f619 x78zum5 xdt5ytf x6s0dn4 x1nhvcw1 xh8yej3 xpyat2d x6ikm8r x10wlt62 x178xt8z x13fuv20 xx42vgk xg01cxk xqu7myx" },
				1: { className: "x10l6tqk x1ey2m1c x1qralhi x9f619 x78zum5 xdt5ytf x6s0dn4 x1nhvcw1 xh8yej3 xpyat2d x6ikm8r x10wlt62 x178xt8z x13fuv20 xx42vgk xqu7myx x1yn0zye xvdu4fi" }
			}[!!S << 0], {
				ref: f,
				children: s.jsx("div", {
					ref: g,
					className: "xh8yej3",
					dir: "ltr",
					children: s.jsxs(r("WAWebVelocityTransitionGroup"), {
						xstyle: [_.viewerThumbs, _.paddingVert8],
						transitionName: "thumb-scale",
						children: [
							s.jsx("div", { className: "x1mkiy5m" }, "padding-left"),
							h.map(function(e, t) {
								var n = t === C;
								return s.jsx(o("WAWebProductCatalogProductThumb.react").ProductThumb, {
									theme: "viewerFlow",
									active: n,
									ref: n ? u : null,
									mediaData: e.mediaData,
									onClick: function() {
										return I(t);
									}
								}, "product-image-" + t);
							}),
							s.jsx("div", { className: "x1mkiy5m" }, "padding-right")
						]
					})
				})
			})), s.jsx(r("WAWebProductCatalogProductImageViewerModal.react"), {
				mediaData: h[C].mediaData,
				productImage: h[C],
				onBack: P,
				onExitAnimation: N,
				onNext: A,
				onPrev: w,
				onImgZoomIn: $,
				getZoomNode: e.getZoomNode,
				zoomIn: l.current,
				isImgZoomedIn: S,
				product: n
			})]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 98);
