__d("WAWebProductCatalogProductImageViewerModal.react", [
	"WATypeUtils",
	"WAWebChevronButton.react",
	"WAWebEmojiText.react",
	"WAWebMediaData",
	"WAWebMediaImage.react",
	"WAWebMediaTypes",
	"WAWebMediaViewerConstants",
	"WAWebObjectFit.react",
	"WAWebPipOgVideoPlayer.react",
	"WAWebProductCatalogProductImageViewerHeader.react",
	"WAWebTextSizeUtils",
	"WAWebUimUie.react",
	"WAWebVelocityAnimate",
	"nullthrows",
	"react",
	"stylex",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useRef, m = c.useState, p = "xekv6nw-B", _ = {
		mediaCaption: {
			flexShrink: "xs83m0k",
			width: "x14atkfc",
			maxWidth: "x14r61f",
			minHeight: "xisnujt",
			maxHeight: "x569fbc",
			overflowY: "x10wlt62",
			color: "xhslqc4",
			wordWrap: "x1vvkbs",
			whiteSpace: "x126k92a",
			transitionDuration: "x1d8287x",
			transitionTimingFunction: "xrix70t",
			$$css: !0
		},
		imgZoomedInMediaCaption: {
			visibility: "xlshs6z",
			opacity: "xg01cxk",
			$$css: !0
		},
		mediaCaptionMargin: {
			marginTop: "x1de0gy",
			$$css: !0
		}
	}, f = 800;
	function g(t) {
		var n = t.getZoomNode, a = t.onBack, i = t.onExitAnimation, l = t.onImgZoomIn, s = t.zoomIn, c = d(null), p = d(!1), g = d(!1), h = d(!1), y = d(null), C = o("useWAWebModelValues").useModelValues(t.mediaData, [
			"mediaStage",
			"renderableUrl",
			"isGif",
			"type"
		]), b = o("useWAWebModelValues").useModelValues(t.product, ["description"]), v = o("useWAWebModelValues").useModelValues(t.productImage, ["videoUrl", "mediaUrl"]), S = m(!1), R = S[0], L = S[1], E = m(function() {
			return C.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED && s && n ? n() : null;
		}), k = E[0], I = m({
			width: f,
			height: f
		}), T = I[0], D = I[1], x = o("WAWebTextSizeUtils").getWAWebTextSizeStyles(), $ = function(t, n) {
			var e = n.getBoundingClientRect(), a = t.getBoundingClientRect(), i = a.top - e.top, l = a.left - e.left, s = t.clientWidth / n.clientWidth, u = (n.clientHeight - t.clientHeight) / 2, d = (n.clientWidth - t.clientWidth) / 2;
			i -= u, l -= d, r("WAWebVelocityAnimate")(n, {
				opacity: [1, 0],
				translateX: [0, l],
				translateY: [0, i],
				scale: [1, s]
			}, {
				duration: o("WAWebMediaViewerConstants").ANIMATION_DURATION,
				easing: [
					.1,
					.82,
					.25,
					1
				]
			}), c.current && r("WAWebVelocityAnimate")(c.current, { opacity: [1, 0] }, { duration: o("WAWebMediaViewerConstants").ANIMATION_DURATION });
		}, P = function(t) {
			if (!p.current) {
				p.current = !0;
				var e = k, n = t.currentTarget;
				!e || !n || !s || n instanceof HTMLElement && $(e, n);
			}
		}, N = function(t) {
			var e = y.current;
			t && e && (h.current = e.getHeightOverflow() > 0 || e.getWidthOverflow() > 0), L(t), l(t);
		}, M = function(t) {
			var e = y.current;
			e && R && e.onClick(t);
		}, w = function(t, n) {
			var e = y.current;
			if (e) {
				var a = e.getInsideContainer();
				if (!(!a || !(a instanceof HTMLElement))) {
					var i = e.getOutsideContainer();
					if (!(!i || !(i instanceof HTMLElement))) {
						var l = e.getTranslatePosition(i, t, n), s = l.translateX, u = l.translateY;
						r("WAWebVelocityAnimate")(a, "stop"), r("WAWebVelocityAnimate")(a, {
							translateX: s,
							translateY: u,
							scale: o("WAWebMediaViewerConstants").ZOOM_IN_FACTOR
						}, { duration: 0 });
					}
				}
			}
		}, A = function(t) {
			h.current && w(t.pageX, t.pageY);
		}, F = function() {
			if (!g.current) {
				g.current = !0, o("WATypeUtils").isFunction(i) && i();
				var e = n();
				if (!e || !(y != null && y.current)) return a();
				var t = r("nullthrows")(y.current.getInsideContainer()), l = t.getBoundingClientRect(), s = e.getBoundingClientRect(), u = s.top - l.top, c = s.left - l.left, d = e.clientWidth / t.clientWidth, m = (t.clientHeight - e.clientHeight) / 2, p = (t.clientWidth - e.clientWidth) / 2;
				u -= m, c -= p, r("WAWebVelocityAnimate")(t, {
					translateX: [c, 0],
					translateY: [u, 0],
					scale: [d, 1]
				}, {
					duration: 200,
					easing: [
						.1,
						.82,
						.25,
						1
					]
				}).then(function() {
					a();
				});
			}
		}, O = function(t) {
			Math.abs(t.deltaY) > 7 && F();
		}, B;
		v.videoUrl != null ? B = u.jsx(r("WAWebObjectFit.react"), {
			type: "scaleDown",
			position: "relative",
			objectPosition: "relative",
			size: T,
			children: u.jsx(r("WAWebPipOgVideoPlayer.react"), {
				autoPlay: !0,
				ogVideoInfo: {
					videoUrl: v.videoUrl,
					previewUrl: ""
				},
				onVideoDimensions: D,
				onClose: F,
				startTime: 0
			})
		}) : B = u.jsx(r("WAWebMediaImage.react"), {
			mediaData: C,
			onLoad: P,
			onImgZoomIn: N,
			ref: y,
			preventDownload: !1
		}, C.renderableUrl);
		var W;
		if (b.description != null && b.description !== "") {
			var q = t.zoomIn && (C.isGif || C.type === r("WAWebMediaData").TYPE.IMAGE);
			W = u.jsx("span", babelHelpers.extends({}, {
				0: {},
				1: { className: "xg01cxk" }
			}[!!q << 0], {
				ref: c,
				children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
					text: b.description,
					className: (e || (e = r("stylex")))(_.mediaCaption, _.mediaCaptionMargin, t.isImgZoomedIn && _.imgZoomedInMediaCaption, x.mediaCaptionTextSize)
				})
			}));
		}
		var U = function(n) {
			t.onPrev == null || t.onPrev(n);
		}, V = function(n) {
			t.onNext == null || t.onNext(n);
		}, H = u.jsx("div", {
			className: "x1n2onr6 xljx1oa xd6izgl",
			children: u.jsx(o("WAWebChevronButton.react").ChevronButton, {
				type: o("WAWebChevronButton.react").ButtonType.Next,
				onClick: V,
				onKeyDown: V,
				disabled: !t.onNext || R
			})
		}), G = u.jsx("div", {
			className: "x1n2onr6 x1v77mdy x6pxu1d",
			children: u.jsx(o("WAWebChevronButton.react").ChevronButton, {
				type: o("WAWebChevronButton.react").ButtonType.Prev,
				onClick: U,
				onKeyDown: U,
				disabled: !t.onPrev || R
			})
		}), z = R ? null : O, j = R ? null : F, K = R ? A : null, Q = R ? M : null, X = {
			onClick: Q,
			onMouseMove: K
		}, Y = {
			onWheel: z,
			onClick: j
		};
		return u.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "ProductViewer",
			escapable: !0,
			requestDismiss: F,
			children: u.jsxs("div", babelHelpers.extends({}, {
				0: { className: "x1pb5qga x78zum5 xdt5ytf xq9ddsv x1280gxy xixxii4 x13vifvy x1o0tod x9f619 xh8yej3 x5yr21d" },
				2: { className: "x127lhb5 xfbpl4g xu90me3 x1pb5qga x78zum5 xdt5ytf xq9ddsv x1280gxy xixxii4 x13vifvy x1o0tod x9f619 xh8yej3 x5yr21d" },
				1: { className: "xzuqxi3 x1pb5qga x78zum5 xdt5ytf xq9ddsv x1280gxy xixxii4 x13vifvy x1o0tod x9f619 xh8yej3 x5yr21d" },
				3: { className: "x127lhb5 xfbpl4g xu90me3 xzuqxi3 x1pb5qga x78zum5 xdt5ytf xq9ddsv x1280gxy xixxii4 x13vifvy x1o0tod x9f619 xh8yej3 x5yr21d" }
			}[!!t.zoomIn << 1 | !!R << 0], { "data-animate-media-viewer": !0 }, X, { children: [u.jsx(r("WAWebProductCatalogProductImageViewerHeader.react"), {
				onClose: F,
				product: b,
				isImgZoomedIn: t.isImgZoomedIn
			}), u.jsxs("div", babelHelpers.extends({
				className: "x9f619 x78zum5 x1iyjqo2 x2lah0s x1q0g3np x6s0dn4 x1qughib x4t50tc x16ovd2e xvpt6g3",
				dir: "ltr"
			}, Y, { children: [
				G,
				u.jsxs("div", babelHelpers.extends({}, {
					0: { className: "x1n2onr6 x78zum5 x6s0dn4 xl56j7k xh8yej3 xeuugli x5yr21d" },
					1: { className: "xdt5ytf x1n2onr6 x78zum5 x6s0dn4 xl56j7k xh8yej3 xeuugli x5yr21d" }
				}[!!W << 0], { children: [u.jsx("div", {
					className: "x1n2onr6 x78zum5 x6s0dn4 xl56j7k xh8yej3 xeuugli x5yr21d",
					children: B
				}), W] })),
				H
			] }))] }))
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 98);
