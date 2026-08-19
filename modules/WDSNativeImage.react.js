__d("WDSNativeImage.react", [
	"fbt",
	"WDNativeImageComponentConstant",
	"WDSFlex.stylex",
	"WDSMargins.stylex",
	"WDSNativeImagePlaceholder.react",
	"isImageSizeUnderLimit",
	"react",
	"stylex",
	"unsafeCast"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.startTransition, p = d.unstable_ViewTransition, _ = d.useCallback, f = d.useEffect, g = d.useEffectEvent, h = d.useMemo, y = d.useState, C = {
		containerBorderRadius: {
			borderStartStartRadius: "xpgljz4",
			borderStartEndRadius: "x1jmugne",
			borderEndEndRadius: "x37x3mu",
			borderEndStartRadius: "x1iudza5",
			$$css: !0
		},
		common: {
			"pointer-events": "x47corl",
			$$css: !0
		},
		main: {
			backgroundColor: "xjbqb8w",
			$$css: !0
		},
		container: {
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		noBorder: {
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "x1qhh985",
			borderInlineStartWidth: "x14e42zd",
			$$css: !0
		}
	}, b = new Set([
		"/",
		"i",
		"R",
		"U",
		"P"
	]), v = {
		"/": "jpg",
		i: "png",
		R: "gif",
		U: "webp",
		P: "svg"
	};
	function S(e) {
		var t = e.isBrandingLogo, n = e.maxFileSize, r = e.onBase64Update, a = e.onError, i = e.onUpdate, l = e.src;
		if (l == null || l.length === 0) {
			a();
			return;
		}
		if (l.startsWith(o("WDNativeImageComponentConstant").IMAGE_CDN_ORIGIN_META_CATALOG) || l.includes(o("WDNativeImageComponentConstant").IMAGE_CDN_ORIGIN_WA_WEB)) {
			i(l);
			return;
		}
		if (l[0] != null && b.has(l[0])) {
			if (!t) try {
				var s = o("isImageSizeUnderLimit").isImageSizeUnderLimit(l, n != null ? n : o("WDNativeImageComponentConstant").IMAGE_MAX_SIZE);
				if (!s) {
					a();
					return;
				}
			} catch (e) {
				a();
			}
			r(l);
			return;
		}
		a();
	}
	function R(t) {
		var n = t.altText, a = t.ariaLabel, i = t.enableTransition, l = t.imgSrc, s = t.onError, u = t.onLoad, d = t.styleOverride, m = c.jsx("img", {
			className: (e || (e = r("stylex")))(o("WDSMargins.stylex").wdsMargins.margin0, C.common, C.containerBorderRadius),
			style: d,
			src: l,
			alt: n,
			"aria-label": a,
			onLoad: u,
			onError: s
		});
		return i ? c.jsx(p, {
			enter: "none",
			exit: "none",
			children: m
		}) : m;
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(t) {
		var n = t.altText, a = t.aspectRatio, i = t.enableTransition, l = i === void 0 ? !1 : i, u = t.hasFixedSize, d = u === void 0 ? !1 : u, p = t.height, b = p === void 0 ? o("WDNativeImageComponentConstant").IMAGE_DEFAULT_HEIGHT : p, L = t.isBrandingLogo, E = L === void 0 ? !1 : L, k = t.isImageInPicker, I = k === void 0 ? !1 : k, T = t.loading, D = T === void 0 ? !1 : T, x = t.maxFileSize, $ = t.mediaSize, P = $ === void 0 ? o("WDNativeImageComponentConstant").WDSNativeImageMediaSizeType.REGULAR : $, N = t.onLoadingError, M = t.platform, w = M === void 0 ? "ios" : M, A = t.scaleType, F = A === void 0 ? o("WDNativeImageComponentConstant").IMAGE_DEFAULT_SCALE_TYPE : A, O = t.src, B = t.width, W = t.xstyle, q = y(D), U = q[0], V = q[1], H = y(!1), G = H[0], z = H[1], j = y(null), K = j[0], Q = j[1], X = _(function() {
			V(!1);
		}, []), Y = _(function() {
			N == null || N(), z(!0);
		}, [N]), J = g(function(e) {
			K != null ? m(function() {
				return Q(e);
			}) : Q(e);
		}), Z = g(function(e) {
			var t = v[r("unsafeCast")(e[0])];
			K != null ? m(function() {
				return Q("data:image/" + t + ";base64," + e);
			}) : Q("data:image/" + t + ";base64," + e);
		}), ee = h(function() {
			return n != null ? n : w === "android" || w === "wa_web" ? s._(
				/*BTDS*/
				""
			).toString() : "";
		}, [n, w]);
		if (f(function() {
			S({
				src: O,
				isBrandingLogo: E,
				maxFileSize: x,
				onError: Y,
				onUpdate: J,
				onBase64Update: Z
			});
		}, [
			K,
			E,
			x,
			Y,
			O
		]), E && G) return null;
		var te = {
			objectFit: F,
			height: E ? "100%" : b != null ? b : "inherit",
			width: B != null && B !== 0 ? "min(100%, " + B + "px)" : "100%",
			aspectRatio: B != null && b != null ? void 0 : a
		}, ne = I ? o("WDNativeImageComponentConstant").WDSNativePickerMediaSizeToContainerSize[P] : o("WDNativeImageComponentConstant").WDSNativeNavListMediaSizeToContainerSize[P], re = {
			height: b != null ? b : "inherit",
			width: B != null ? B : "100%"
		}, oe = {
			height: b != null ? b : "inherit",
			width: I ? ne : B != null && B !== 0 ? "min(100%, " + B + "px)" : "100%"
		}, ae = !I || O.length !== 0, ie = c.jsx(r("WDSNativeImagePlaceholder.react"), {
			platform: w,
			isInvalidImage: ae,
			isSmallPreview: I,
			enableImageImprovements: !0
		});
		return c.jsx("div", babelHelpers.extends({ "aria-label": "" }, (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexColumnCenter, !d && C.container, C.containerBorderRadius, !E && [C.main], W, I && (G || U) && C.noBorder), { children: c.jsx("div", {
			className: e(o("WDSFlex.stylex").wdsFlex.flexCenter, o("WDSFlex.stylex").wdsFlex.flexGrow1, o("WDSFlex.stylex").wdsFlex.flexShrink0),
			style: d ? re : oe,
			children: U && !G ? c.jsx(r("WDSNativeImagePlaceholder.react"), {
				platform: w,
				isSmallPreview: I,
				isLoading: U,
				enableImageImprovements: !0
			}) : G ? ie : R({
				enableTransition: l,
				styleOverride: te,
				imgSrc: K,
				altText: n,
				ariaLabel: ee,
				onLoad: X,
				onError: Y
			})
		}) }));
	}
	L.displayName = L.name + " [from " + i.id + "]", l.WDSNativeImage = L;
}), 226);
