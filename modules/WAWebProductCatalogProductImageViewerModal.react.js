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
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(107), a = t.getZoomNode, i = t.onBack, l = t.onExitAnimation, s = t.onImgZoomIn, c = t.zoomIn, p = d(null), g = d(!1), h = d(!1), y = d(!1), C = d(null), b;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (b = [
			"mediaStage",
			"renderableUrl",
			"isGif",
			"type"
		], n[0] = b) : b = n[0];
		var v = o("useWAWebModelValues").useModelValues(t.mediaData, b), S;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (S = ["description"], n[1] = S) : S = n[1];
		var R = o("useWAWebModelValues").useModelValues(t.product, S), L;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (L = ["videoUrl", "mediaUrl"], n[2] = L) : L = n[2];
		var E = o("useWAWebModelValues").useModelValues(t.productImage, L), k = m(!1), I = k[0], T = k[1], D;
		n[3] !== a || n[4] !== v.mediaStage || n[5] !== c ? (D = function() {
			return v.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED && c && a ? a() : null;
		}, n[3] = a, n[4] = v.mediaStage, n[5] = c, n[6] = D) : D = n[6];
		var x = m(D), $ = x[0], P;
		n[7] === Symbol.for("react.memo_cache_sentinel") ? (P = {
			width: f,
			height: f
		}, n[7] = P) : P = n[7];
		var N = m(P), M = N[0], w = N[1], A, F, O, B, W, q;
		if (n[8] !== a || n[9] !== I || n[10] !== v || n[11] !== i || n[12] !== l || n[13] !== s || n[14] !== R.description || n[15] !== E.videoUrl || n[16] !== t.isImgZoomedIn || n[17] !== t.zoomIn || n[18] !== M || n[19] !== $ || n[20] !== c) {
			var U = o("WAWebTextSizeUtils").getWAWebTextSizeStyles(), V;
			n[27] === Symbol.for("react.memo_cache_sentinel") ? (V = function(t, n) {
				var e = n.getBoundingClientRect(), a = t.getBoundingClientRect(), i = a.top - e.top, l = a.left - e.left, s = t.clientWidth / n.clientWidth, u = (n.clientHeight - t.clientHeight) / 2, c = (n.clientWidth - t.clientWidth) / 2;
				i = i - u, l = l - c, r("WAWebVelocityAnimate")(n, {
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
				}), p.current && r("WAWebVelocityAnimate")(p.current, { opacity: [1, 0] }, { duration: o("WAWebMediaViewerConstants").ANIMATION_DURATION });
			}, n[27] = V) : V = n[27];
			var H = V, G;
			n[28] !== $ || n[29] !== c ? (G = function(t) {
				if (!g.current) {
					g.current = !0;
					var e = $, n = t.currentTarget;
					!e || !n || !c || n instanceof HTMLElement && H(e, n);
				}
			}, n[28] = $, n[29] = c, n[30] = G) : G = n[30];
			var z = G, j;
			n[31] !== s ? (j = function(t) {
				var e = C.current;
				t && e && (y.current = e.getHeightOverflow() > 0 || e.getWidthOverflow() > 0), T(t), s(t);
			}, n[31] = s, n[32] = j) : j = n[32];
			var K = j, Q;
			n[33] !== I ? (Q = function(t) {
				var e = C.current;
				e && I && e.onClick(t);
			}, n[33] = I, n[34] = Q) : Q = n[34], W = Q;
			var X;
			if (n[35] === Symbol.for("react.memo_cache_sentinel")) {
				var Y = function(t, n) {
					var e = C.current;
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
				};
				X = function(t) {
					y.current && Y(t.pageX, t.pageY);
				}, n[35] = X;
			} else X = n[35];
			O = X;
			var J;
			n[36] !== a || n[37] !== i || n[38] !== l ? (J = function() {
				if (!h.current) {
					h.current = !0, o("WATypeUtils").isFunction(l) && l();
					var e = a();
					if (!e || !(C != null && C.current)) return i();
					var t = r("nullthrows")(C.current.getInsideContainer()), n = t.getBoundingClientRect(), s = e.getBoundingClientRect(), u = s.top - n.top, c = s.left - n.left, d = e.clientWidth / t.clientWidth, m = (t.clientHeight - e.clientHeight) / 2, p = (t.clientWidth - e.clientWidth) / 2;
					u = u - m, c = c - p, r("WAWebVelocityAnimate")(t, {
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
						i();
					});
				}
			}, n[36] = a, n[37] = i, n[38] = l, n[39] = J) : J = n[39], F = J;
			var Z;
			if (n[40] !== F ? (Z = function(t) {
				Math.abs(t.deltaY) > 7 && F();
			}, n[40] = F, n[41] = Z) : Z = n[41], B = Z, E.videoUrl != null) {
				var ee;
				n[42] !== E.videoUrl ? (ee = {
					videoUrl: E.videoUrl,
					previewUrl: ""
				}, n[42] = E.videoUrl, n[43] = ee) : ee = n[43];
				var te;
				n[44] !== F || n[45] !== ee ? (te = u.jsx(r("WAWebPipOgVideoPlayer.react"), {
					autoPlay: !0,
					ogVideoInfo: ee,
					onVideoDimensions: w,
					onClose: F,
					startTime: 0
				}), n[44] = F, n[45] = ee, n[46] = te) : te = n[46];
				var ne;
				n[47] !== te || n[48] !== M ? (ne = u.jsx(r("WAWebObjectFit.react"), {
					type: "scaleDown",
					position: "relative",
					objectPosition: "relative",
					size: M,
					children: te
				}), n[47] = te, n[48] = M, n[49] = ne) : ne = n[49], q = ne;
			} else {
				var re;
				n[50] !== z || n[51] !== K || n[52] !== v ? (re = u.jsx(r("WAWebMediaImage.react"), {
					mediaData: v,
					onLoad: z,
					onImgZoomIn: K,
					ref: C,
					preventDownload: !1
				}, v.renderableUrl), n[50] = z, n[51] = K, n[52] = v, n[53] = re) : re = n[53], q = re;
			}
			if (R.description != null && R.description !== "") {
				var oe = t.zoomIn && (v.isGif || v.type === r("WAWebMediaData").TYPE.IMAGE), ae;
				n[54] !== oe ? (ae = {
					0: {},
					1: { className: "xg01cxk" }
				}[!!oe << 0], n[54] = oe, n[55] = ae) : ae = n[55];
				var ie = u.jsx(o("WAWebEmojiText.react").EmojiText, {
					text: R.description,
					className: (e || (e = r("stylex")))(_.mediaCaption, _.mediaCaptionMargin, t.isImgZoomedIn && _.imgZoomedInMediaCaption, U.mediaCaptionTextSize)
				}), le;
				n[56] !== ae || n[57] !== ie ? (le = u.jsx("span", babelHelpers.extends({}, ae, {
					ref: p,
					children: ie
				})), n[56] = ae, n[57] = ie, n[58] = le) : le = n[58], A = le;
			}
			n[8] = a, n[9] = I, n[10] = v, n[11] = i, n[12] = l, n[13] = s, n[14] = R.description, n[15] = E.videoUrl, n[16] = t.isImgZoomedIn, n[17] = t.zoomIn, n[18] = M, n[19] = $, n[20] = c, n[21] = A, n[22] = F, n[23] = O, n[24] = B, n[25] = W, n[26] = q;
		} else A = n[21], F = n[22], O = n[23], B = n[24], W = n[25], q = n[26];
		var se;
		n[59] !== t ? (se = function(n) {
			t.onPrev == null || t.onPrev(n);
		}, n[59] = t, n[60] = se) : se = n[60];
		var ue = se, ce;
		n[61] !== t ? (ce = function(n) {
			t.onNext == null || t.onNext(n);
		}, n[61] = t, n[62] = ce) : ce = n[62];
		var de = ce, me;
		n[63] === Symbol.for("react.memo_cache_sentinel") ? (me = { className: "x1n2onr6 xljx1oa xd6izgl" }, n[63] = me) : me = n[63];
		var pe = !t.onNext || I, _e;
		n[64] !== de || n[65] !== pe ? (_e = u.jsx("div", babelHelpers.extends({}, me, { children: u.jsx(o("WAWebChevronButton.react").ChevronButton, {
			type: o("WAWebChevronButton.react").ButtonType.Next,
			onClick: de,
			onKeyDown: de,
			disabled: pe
		}) })), n[64] = de, n[65] = pe, n[66] = _e) : _e = n[66];
		var fe = _e, ge;
		n[67] === Symbol.for("react.memo_cache_sentinel") ? (ge = { className: "x1n2onr6 x1v77mdy x6pxu1d" }, n[67] = ge) : ge = n[67];
		var he = !t.onPrev || I, ye;
		n[68] !== ue || n[69] !== he ? (ye = u.jsx("div", babelHelpers.extends({}, ge, { children: u.jsx(o("WAWebChevronButton.react").ChevronButton, {
			type: o("WAWebChevronButton.react").ButtonType.Prev,
			onClick: ue,
			onKeyDown: ue,
			disabled: he
		}) })), n[68] = ue, n[69] = he, n[70] = ye) : ye = n[70];
		var Ce = ye, be = I ? null : B, ve = I ? null : F, Se = I ? O : null, Re = I ? W : null, Le;
		n[71] !== Se || n[72] !== Re ? (Le = {
			onClick: Re,
			onMouseMove: Se
		}, n[71] = Se, n[72] = Re, n[73] = Le) : Le = n[73];
		var Ee = Le, ke;
		n[74] !== ve || n[75] !== be ? (ke = {
			onWheel: be,
			onClick: ve
		}, n[74] = ve, n[75] = be, n[76] = ke) : ke = n[76];
		var Ie = ke, Te;
		n[77] !== I || n[78] !== t.zoomIn ? (Te = {
			0: { className: "x1pb5qga x78zum5 xdt5ytf xq9ddsv x1280gxy xixxii4 x13vifvy x1o0tod x9f619 xh8yej3 x5yr21d" },
			2: { className: "x127lhb5 xfbpl4g xu90me3 x1pb5qga x78zum5 xdt5ytf xq9ddsv x1280gxy xixxii4 x13vifvy x1o0tod x9f619 xh8yej3 x5yr21d" },
			1: { className: "xzuqxi3 x1pb5qga x78zum5 xdt5ytf xq9ddsv x1280gxy xixxii4 x13vifvy x1o0tod x9f619 xh8yej3 x5yr21d" },
			3: { className: "x127lhb5 xfbpl4g xu90me3 xzuqxi3 x1pb5qga x78zum5 xdt5ytf xq9ddsv x1280gxy xixxii4 x13vifvy x1o0tod x9f619 xh8yej3 x5yr21d" }
		}[!!t.zoomIn << 1 | !!I << 0], n[77] = I, n[78] = t.zoomIn, n[79] = Te) : Te = n[79];
		var De;
		n[80] !== F || n[81] !== R || n[82] !== t.isImgZoomedIn ? (De = u.jsx(r("WAWebProductCatalogProductImageViewerHeader.react"), {
			onClose: F,
			product: R,
			isImgZoomedIn: t.isImgZoomedIn
		}), n[80] = F, n[81] = R, n[82] = t.isImgZoomedIn, n[83] = De) : De = n[83];
		var xe;
		n[84] === Symbol.for("react.memo_cache_sentinel") ? (xe = { className: "x9f619 x78zum5 x1iyjqo2 x2lah0s x1q0g3np x6s0dn4 x1qughib x4t50tc x16ovd2e xvpt6g3" }, n[84] = xe) : xe = n[84];
		var $e;
		n[85] !== A ? ($e = {
			0: { className: "x1n2onr6 x78zum5 x6s0dn4 xl56j7k xh8yej3 xeuugli x5yr21d" },
			1: { className: "xdt5ytf x1n2onr6 x78zum5 x6s0dn4 xl56j7k xh8yej3 xeuugli x5yr21d" }
		}[!!A << 0], n[85] = A, n[86] = $e) : $e = n[86];
		var Pe;
		n[87] === Symbol.for("react.memo_cache_sentinel") ? (Pe = { className: "x1n2onr6 x78zum5 x6s0dn4 xl56j7k xh8yej3 xeuugli x5yr21d" }, n[87] = Pe) : Pe = n[87];
		var Ne;
		n[88] !== q ? (Ne = u.jsx("div", babelHelpers.extends({}, Pe, { children: q })), n[88] = q, n[89] = Ne) : Ne = n[89];
		var Me;
		n[90] !== A || n[91] !== $e || n[92] !== Ne ? (Me = u.jsxs("div", babelHelpers.extends({}, $e, { children: [Ne, A] })), n[90] = A, n[91] = $e, n[92] = Ne, n[93] = Me) : Me = n[93];
		var we;
		n[94] !== Ce || n[95] !== Ie || n[96] !== fe || n[97] !== Me ? (we = u.jsxs("div", babelHelpers.extends({}, xe, { dir: "ltr" }, Ie, { children: [
			Ce,
			Me,
			fe
		] })), n[94] = Ce, n[95] = Ie, n[96] = fe, n[97] = Me, n[98] = we) : we = n[98];
		var Ae;
		n[99] !== Ee || n[100] !== Te || n[101] !== De || n[102] !== we ? (Ae = u.jsxs("div", babelHelpers.extends({}, Te, { "data-animate-media-viewer": !0 }, Ee, { children: [De, we] })), n[99] = Ee, n[100] = Te, n[101] = De, n[102] = we, n[103] = Ae) : Ae = n[103];
		var Fe;
		return n[104] !== F || n[105] !== Ae ? (Fe = u.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "ProductViewer",
			escapable: !0,
			requestDismiss: F,
			children: Ae
		}), n[104] = F, n[105] = Ae, n[106] = Fe) : Fe = n[106], Fe;
	}
	l.default = g;
}), 98);
