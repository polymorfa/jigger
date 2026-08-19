__d("WAWebSticker.react", [
	"fbt",
	"WAAbortError",
	"WAPromiseRaceAbort",
	"WAWebControlledAnimatedSticker.react",
	"WAWebFeatureDetectionDetectWebpSupport",
	"WAWebLottieSticker.react",
	"WAWebMediaBlobProvider",
	"WAWebMediaOpaqueData",
	"WAWebMediaUrlProvider",
	"WAWebMessageUiUtils",
	"WAWebNullFunc",
	"WAWebRgbaCanvas.react",
	"WAWebStickerAnimationCanvas.react",
	"WAWebStickerCreateButton.react",
	"WAWebStickerLikeMsgPlaceholder.react",
	"WAWebStickerUtils",
	"WAWebUnstyledButton.react",
	"getErrorSafe",
	"nullthrows",
	"react",
	"stylex",
	"useLazyRef",
	"useWAWebModelValues",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useImperativeHandle, _ = d.useRef, f = d.useState, g = {
		conversation: {
			width: "xjzf9lu",
			height: "x8sy99",
			$$css: !0
		},
		composeBox: {
			display: "x1lliihq",
			width: "x1mvj0ss",
			height: "x1m6e1of",
			$$css: !0
		},
		composeBoxQuoted: {
			width: "xe3v0yx",
			height: "x1kcu2e4",
			$$css: !0
		},
		quoted: {
			display: "x1lliihq",
			width: "x136w28x",
			height: "xmaiyhc",
			$$css: !0
		},
		stickerPanel: {
			width: "x1hp1aql",
			height: "x6h4ims",
			$$css: !0
		},
		stickerStore: {
			width: "xbndj1g",
			height: "x7q9895",
			$$css: !0
		},
		stickerDetails: {
			width: "x12f94cn",
			height: "xfhbamq",
			$$css: !0
		},
		stickerExpressionsPanel: {
			width: "x1919mjr",
			height: "xxnb739",
			$$css: !0
		},
		outlineTransparent: {
			outlineWidth: "x1qgsegg",
			outlineStyle: "xaatb59",
			outlineColor: "x1uczgqu",
			$$css: !0
		},
		scaleTransition: {
			transitionProperty: "x11xpdln",
			transitionDuration: "x1g2r6go",
			transitionTimingFunction: "xwji4o3",
			willChange: "x1so62im",
			$$css: !0
		},
		hoverScaleSmall: {
			":hover_transform": "xt8homm",
			$$css: !0
		},
		hoverScaleLarge: {
			":hover_transform": "xg0443",
			$$css: !0
		},
		clickable: {
			cursor: "x1ypdohk",
			$$css: !0
		},
		placeholderClickable: {
			cursor: "x1sqbtui",
			$$css: !0
		}
	};
	function h(e) {
		return e === "conversation" ? [g.conversation] : e === "composeBox" ? [g.composeBox] : e === "composeBoxQuoted" ? [g.composeBoxQuoted] : e === "quoted" ? [g.quoted] : e === "stickerPanel" ? [
			g.stickerPanel,
			g.outlineTransparent,
			g.scaleTransition
		] : e === "stickerStore" ? [
			g.stickerStore,
			g.outlineTransparent,
			g.scaleTransition
		] : e === "stickerDetails" ? [g.stickerDetails, g.outlineTransparent] : e === "stickerExpressionsPanel" ? [
			g.stickerExpressionsPanel,
			g.outlineTransparent,
			g.scaleTransition
		] : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	function y(e) {
		var t = e.ref, n = e.className, o = e.controlledAnimatedStickerimageRef, a = e.downloadMedia, i = e.label, l = e.loopAnimation, s = e.mediaData, u = e.onClick, d = e.onEnter, m = e.renderPreview, p = e.startAnimation, _ = e.stickerImgRef, f = function(t) {
			if (t.key === "Enter") return d == null ? void 0 : d(t);
		};
		return s.animationDuration > 0 && !l ? c.jsx(r("WAWebControlledAnimatedSticker.react"), {
			className: n,
			mediaData: s,
			startAnimation: p,
			onClick: u,
			onEnter: f,
			placeholderRenderer: m,
			downloadMedia: a,
			ref: t,
			label: i,
			imageRef: o
		}) : c.jsx(r("WAWebMediaUrlProvider"), {
			mediaData: s,
			placeholderRenderer: m,
			downloadMedia: a,
			children: function(t) {
				return u != null ? c.jsx(r("WAWebUnstyledButton.react"), {
					onClick: u,
					children: c.jsx("img", {
						ref: _,
						className: n,
						draggable: "false",
						src: t,
						alt: i
					})
				}) : c.jsx("img", {
					ref: _,
					className: n,
					draggable: "false",
					src: t,
					alt: i
				});
			}
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = e.className, n = e.controlledAnimatedStickerimageRef, o = e.downloadMedia, a = e.label, i = e.loopAnimation, l = e.mediaData, s = e.onClick, u = e.onEnter, d = e.renderPreview, m = e.startAnimation, p = e.stickerImgRef;
		if (l.animationDuration > 0) {
			var _ = i ? 1 / 0 : l.animationDuration / r("nullthrows")(l.singleLoopDuration);
			return c.jsx(r("WAWebMediaBlobProvider"), {
				mediaData: l,
				render: function(n) {
					return c.jsx(r("WAWebStickerAnimationCanvas.react"), {
						className: t,
						loopAnimation: i,
						maxLoops: _,
						blob: n,
						renderPreview: d,
						startAnimation: m,
						onClick: s
					});
				},
				renderPlaceholder: d,
				downloadMedia: o
			});
		}
		return l.rgbaBuffer ? c.jsx(r("WAWebRgbaCanvas.react"), {
			className: t,
			height: l.rgbaHeight,
			onClick: s,
			rgbaBuffer: l.rgbaBuffer,
			width: l.rgbaWidth
		}) : d();
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(t) {
		var n, o = t.className, a = t.isCreateButton, i = t.mediaData, l = t.onClick, u = t.theme, d = i.preview, m = d instanceof r("WAWebMediaOpaqueData") ? d.url() : null, p = (n = i.emojis) == null ? void 0 : n.join(" "), _ = p != null && p !== "" ? s._(
			/*BTDS*/
			"",
			[s._param("emojis", p)]
		) : s._(
			/*BTDS*/
			""
		);
		return m == null ? a === !0 ? c.jsx(r("WAWebStickerCreateButton.react"), {
			onClick: l,
			theme: u === "stickerExpressionsPanel" ? "stickerExpressionsPanel" : void 0
		}) : c.jsx(r("WAWebStickerLikeMsgPlaceholder.react"), { className: (e || (e = r("stylex")))(h(u), l != null && g.placeholderClickable) }) : c.jsx("img", {
			className: o,
			draggable: "false",
			onClick: l,
			src: m,
			alt: _
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(t) {
		var n = t.animateOnView, a = t.downloadMedia, i = t.forcePlay, l = t.isCreateButton, s = t.isNewMsg, u = t.loopAnimation, d = t.mediaData, m = t.onClick, f = t.onEnter, v = t.ref, R = t.theme, L = o("useWAWebModelValues").useModelValues(d, [
			"animatedAsNewMsg",
			"animationDuration",
			"singleLoopDuration",
			"mediaBlob",
			"preview",
			"renderableUrl",
			"rgbaBuffer",
			"rgbaHeight",
			"rgbaWidth",
			"emojis",
			"mediaStage",
			"extractedLottieSticker",
			"filehash",
			"mimetype",
			"accessibilityLabel"
		]), E = r("useLazyRef")(function() {
			return L.animatedAsNewMsg;
		}), k = E.current, I = S(), T = _(), D = _(), x = _(), $ = _();
		p(v, function() {
			return {
				startAnimation: function() {
					var e;
					(e = D.current) == null || e.startAnimation();
				},
				getImgNode: function() {
					return T.current;
				}
			};
		});
		var P = R === "stickerPanel" || R === "stickerStore" ? g.hoverScaleSmall : R === "stickerExpressionsPanel" ? g.hoverScaleLarge : R === "conversation" || R === "composeBox" || R === "composeBoxQuoted" || R === "quoted" || R === "stickerDetails" ? null : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + R);
		})(), N = (e || (e = r("stylex")))(h(R), m != null && P, m != null && g.clickable), M;
		if (o("WAWebStickerUtils").getStickerFileType(L.mimetype) === o("WAWebStickerUtils").StickerFileType.LOTTIE) M = c.jsx(r("WAWebLottieSticker.react"), {
			mediaData: L,
			startAnimation: !0,
			onClick: m,
			placeholderRenderer: o("WAWebNullFunc").returnNull,
			downloadMedia: a,
			className: N,
			forcePlay: i
		});
		else if (I == null) M = c.jsx(b, {
			isCreateButton: l,
			mediaData: L,
			className: N,
			theme: R,
			onClick: m
		});
		else {
			var w, A = (w = L.emojis) == null ? void 0 : w.join(" "), F = o("WAWebMessageUiUtils").getStickerCustomLabel(L.accessibilityLabel, A), O = n === !0 || s === !0 && !k, B = !!u;
			I ? M = c.jsx(y, {
				ref: D,
				stickerImgRef: x,
				controlledAnimatedStickerimageRef: $,
				className: N,
				mediaData: L,
				loopAnimation: B,
				startAnimation: O,
				renderPreview: function() {
					return c.jsx(b, {
						isCreateButton: l,
						mediaData: L,
						className: N,
						theme: R,
						onClick: m
					});
				},
				onClick: m,
				onEnter: f,
				downloadMedia: a,
				label: F
			}) : M = c.jsx(C, {
				className: N,
				mediaData: L,
				loopAnimation: B,
				startAnimation: O,
				renderPreview: function() {
					return c.jsx(b, {
						isCreateButton: l,
						mediaData: L,
						className: N,
						onClick: m,
						theme: R
					});
				},
				onClick: m,
				downloadMedia: a,
				label: F,
				controlledAnimatedStickerimageRef: $
			});
		}
		return c.jsx("span", {
			ref: T,
			"data-testid": "sticker-container",
			className: "x8sy99",
			children: M
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S() {
		var e = f(o("WAWebFeatureDetectionDetectWebpSupport").getCachedWebpSupport), t = e[0], n = e[1], a = r("useWAWebUnmountSignal")();
		return m(function() {
			t == null && r("WAPromiseRaceAbort")(o("WAWebFeatureDetectionDetectWebpSupport").detectWebpSupport(), a).then(n).catch(function(e) {
				var t = r("getErrorSafe")(e);
				if (t.name !== o("WAAbortError").ABORT_ERROR) throw e;
			});
		}, []), t;
	}
	l.default = v;
}), 226);
