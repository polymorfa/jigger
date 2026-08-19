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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(23), n = e.ref, a = e.className, i = e.controlledAnimatedStickerimageRef, l = e.downloadMedia, s = e.label, u = e.loopAnimation, d = e.mediaData, m = e.onClick, p = e.onEnter, _ = e.renderPreview, f = e.startAnimation, g = e.stickerImgRef, h;
		t[0] !== p ? (h = function(t) {
			if (t.key === "Enter") return p == null ? void 0 : p(t);
		}, t[0] = p, t[1] = h) : h = t[1];
		var y = h;
		if (d.animationDuration > 0 && !u) {
			var C;
			return t[2] !== a || t[3] !== i || t[4] !== l || t[5] !== y || t[6] !== s || t[7] !== d || t[8] !== m || t[9] !== n || t[10] !== _ || t[11] !== f ? (C = c.jsx(r("WAWebControlledAnimatedSticker.react"), {
				className: a,
				mediaData: d,
				startAnimation: f,
				onClick: m,
				onEnter: y,
				placeholderRenderer: _,
				downloadMedia: l,
				ref: n,
				label: s,
				imageRef: i
			}), t[2] = a, t[3] = i, t[4] = l, t[5] = y, t[6] = s, t[7] = d, t[8] = m, t[9] = n, t[10] = _, t[11] = f, t[12] = C) : C = t[12], C;
		}
		var b;
		t[13] !== a || t[14] !== s || t[15] !== m || t[16] !== g ? (b = function(t) {
			return m != null ? c.jsx(r("WAWebUnstyledButton.react"), {
				onClick: m,
				children: c.jsx("img", {
					ref: g,
					className: a,
					draggable: "false",
					src: t,
					alt: s
				})
			}) : c.jsx("img", {
				ref: g,
				className: a,
				draggable: "false",
				src: t,
				alt: s
			});
		}, t[13] = a, t[14] = s, t[15] = m, t[16] = g, t[17] = b) : b = t[17];
		var v;
		return t[18] !== l || t[19] !== d || t[20] !== _ || t[21] !== b ? (v = c.jsx(r("WAWebMediaUrlProvider"), {
			mediaData: d,
			placeholderRenderer: _,
			downloadMedia: l,
			children: b
		}), t[18] = l, t[19] = d, t[20] = _, t[21] = b, t[22] = v) : v = t[22], v;
	}
	function C(e) {
		var t = o("react-compiler-runtime").c(20), n = e.className, a = e.downloadMedia, i = e.loopAnimation, l = e.mediaData, s = e.onClick, u = e.renderPreview, d = e.startAnimation;
		if (l.animationDuration > 0) {
			var m = i ? 1 / 0 : l.animationDuration / r("nullthrows")(l.singleLoopDuration), p;
			t[0] !== n || t[1] !== i || t[2] !== m || t[3] !== s || t[4] !== u || t[5] !== d ? (p = function(t) {
				return c.jsx(r("WAWebStickerAnimationCanvas.react"), {
					className: n,
					loopAnimation: i,
					maxLoops: m,
					blob: t,
					renderPreview: u,
					startAnimation: d,
					onClick: s
				});
			}, t[0] = n, t[1] = i, t[2] = m, t[3] = s, t[4] = u, t[5] = d, t[6] = p) : p = t[6];
			var _;
			return t[7] !== a || t[8] !== l || t[9] !== u || t[10] !== p ? (_ = c.jsx(r("WAWebMediaBlobProvider"), {
				mediaData: l,
				render: p,
				renderPlaceholder: u,
				downloadMedia: a
			}), t[7] = a, t[8] = l, t[9] = u, t[10] = p, t[11] = _) : _ = t[11], _;
		}
		if (l.rgbaBuffer) {
			var f;
			return t[12] !== n || t[13] !== l.rgbaBuffer || t[14] !== l.rgbaHeight || t[15] !== l.rgbaWidth || t[16] !== s ? (f = c.jsx(r("WAWebRgbaCanvas.react"), {
				className: n,
				height: l.rgbaHeight,
				onClick: s,
				rgbaBuffer: l.rgbaBuffer,
				width: l.rgbaWidth
			}), t[12] = n, t[13] = l.rgbaBuffer, t[14] = l.rgbaHeight, t[15] = l.rgbaWidth, t[16] = s, t[17] = f) : f = t[17], f;
		}
		var g;
		return t[18] !== u ? (g = u(), t[18] = u, t[19] = g) : g = t[19], g;
	}
	function b(t) {
		var n = o("react-compiler-runtime").c(17), a = t.className, i = t.isCreateButton, l = t.mediaData, u = t.onClick, d = t.theme, m = l.preview, p;
		n[0] !== m ? (p = m instanceof r("WAWebMediaOpaqueData") ? m.url() : null, n[0] = m, n[1] = p) : p = n[1];
		var _ = p, f;
		if (n[2] !== l.emojis) {
			var y, C = (y = l.emojis) == null ? void 0 : y.join(" ");
			f = C != null && C !== "" ? s._(
				/*BTDS*/
				"",
				[s._param("emojis", C)]
			) : s._(
				/*BTDS*/
				""
			), n[2] = l.emojis, n[3] = f;
		} else f = n[3];
		var b = f;
		if (_ == null) {
			if (i === !0) {
				var v = d === "stickerExpressionsPanel" ? "stickerExpressionsPanel" : void 0, S;
				return n[4] !== u || n[5] !== v ? (S = c.jsx(r("WAWebStickerCreateButton.react"), {
					onClick: u,
					theme: v
				}), n[4] = u, n[5] = v, n[6] = S) : S = n[6], S;
			}
			var R;
			n[7] !== u || n[8] !== d ? (R = (e || (e = r("stylex")))(h(d), u != null && g.placeholderClickable), n[7] = u, n[8] = d, n[9] = R) : R = n[9];
			var L;
			return n[10] !== R ? (L = c.jsx(r("WAWebStickerLikeMsgPlaceholder.react"), { className: R }), n[10] = R, n[11] = L) : L = n[11], L;
		}
		var E;
		return n[12] !== b || n[13] !== a || n[14] !== u || n[15] !== _ ? (E = c.jsx("img", {
			className: a,
			draggable: "false",
			onClick: u,
			src: _,
			alt: b
		}), n[12] = b, n[13] = a, n[14] = u, n[15] = _, n[16] = E) : E = n[16], E;
	}
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
