__d("MAWLinkPreviewCard.react", [
	"fbt",
	"BaseView.react",
	"ConstUriUtils",
	"E2EELinkPreviewXMADataStatus",
	"E2EELinkPreviewXMADataType",
	"FBNucleusCrossFilled12Icon.react",
	"I64",
	"MAWLinkPreviewDataStatusUtils",
	"MAWLinkPreviewDataTypeUtils",
	"MWLSThreadDisplayContext",
	"MWMediaComposerLinkPreviewXMARenderQpl",
	"MWXIcon_DEPRECATED.react",
	"MWXImage.react",
	"MWXLinkPreviewLoadingIndicator.react",
	"MWXLinkPreviewTruncateText",
	"MWXText.react",
	"MWXTextPairing.react",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime",
	"useReStore"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d = c || (c = o("react")), m = c, p = m.useCallback, _ = m.useEffect, f = {
		container: {
			alignItems: "x6s0dn4",
			display: "x78zum5",
			justifyContent: "x1qughib",
			$$css: !0
		},
		content: {
			alignItems: "x6s0dn4",
			display: "x78zum5",
			justifyContent: "xlqzeqv",
			width: "xh8yej3",
			$$css: !0
		},
		image: {
			borderStartStartRadius: "xjwep3j",
			borderStartEndRadius: "x1t39747",
			borderEndEndRadius: "x1wcsgtt",
			borderEndStartRadius: "x1pczhz8",
			height: "xng8ra",
			marginInlineEnd: "x1sa5p1d",
			objectFit: "xl1xv1r",
			width: "x1247r65",
			$$css: !0
		},
		isReplying: {
			borderTopWidth: "x972fbf",
			$$css: !0
		},
		outerContainer: {
			backgroundColor: "x57kliw",
			borderTopColor: "x8cjs6t",
			borderTopStyle: "x13fuv20",
			borderTopWidth: "x178xt8z",
			paddingInlineStart: "x1gx403c",
			paddingInlineEnd: "x1q3ajuy",
			paddingLeft: null,
			paddingRight: null,
			paddingTop: "x889kno",
			$$css: !0
		},
		textSection: {
			flexShrink: "xs83m0k",
			minWidth: "xeuugli",
			$$css: !0
		}
	};
	function g(t) {
		var a = o("react-compiler-runtime").c(59), l = t.draftID, c = t.isReplying, m = t.linkPreview, p = t.threadType, g = t.xmaData, h = o("MWMediaComposerLinkPreviewXMARenderQpl").useMediaComposerLinkPreviewXMARenderQpl(l, g.url, m.dataType, p), y = (e || (e = r("useReStore")))(), C = o("MWLSThreadDisplayContext").useMWLSThreadDisplayContext() === "ChatTab", b = o("MAWLinkPreviewDataTypeUtils").linkPreviewDataTypeIsOfType(m.dataType, r("E2EELinkPreviewXMADataType").FALLBACK), v = g.author_name, S = g.iframeMediaURL, R = g.title, L = g.url, E;
		if (a[0] !== L) {
			var k;
			E = L != null ? (k = o("ConstUriUtils").getUri(L)) == null ? void 0 : k.getDomain() : "", a[0] = L, a[1] = E;
		} else E = a[1];
		var I = E, T = b ? L : I, D;
		a[2] !== C || a[3] !== T ? (D = o("MWXLinkPreviewTruncateText").truncateText({
			isChatTab: C,
			position: "subtext",
			text: T
		}), a[2] = C, a[3] = T, a[4] = D) : D = a[4];
		var x = D, $ = b ? void 0 : R, P;
		a[5] !== C || a[6] !== $ ? (P = o("MWXLinkPreviewTruncateText").truncateText({
			isChatTab: C,
			position: "headline",
			text: $
		}), a[5] = C, a[6] = $, a[7] = P) : P = a[7];
		var N = P, M = b ? R : v, w;
		a[8] !== C || a[9] !== M ? (w = o("MWXLinkPreviewTruncateText").truncateText({
			isChatTab: C,
			position: "body",
			text: M
		}), a[8] = C, a[9] = M, a[10] = w) : w = a[10];
		var A = w, F = m == null ? void 0 : m.status, O;
		a[11] !== F ? (O = o("MAWLinkPreviewDataStatusUtils").linkPreviewDataStatusIsOfType(F, r("E2EELinkPreviewXMADataStatus").LOADING), a[11] = F, a[12] = O) : O = a[12];
		var B = O, W, q;
		a[13] !== S || a[14] !== B || a[15] !== h ? (W = function() {
			!S && !B ? h == null || h.endSuccessAfterDelay({ bool: { has_media_preview_url: !1 } }) : h == null || h.addPoint("link-preview-card-render");
		}, q = [
			S,
			B,
			h
		], a[13] = S, a[14] = B, a[15] = h, a[16] = W, a[17] = q) : (W = a[16], q = a[17]), _(W, q);
		var U;
		a[18] !== h ? (U = function() {
			h == null || h.endFailAfterDelay("load-image-error");
		}, a[18] = h, a[19] = U) : U = a[19];
		var V = U, H;
		a[20] !== h ? (H = function() {
			h == null || h.endSuccessAfterDelay({ bool: { has_media_preview_url: !0 } });
		}, a[20] = h, a[21] = H) : H = a[21];
		var G = H;
		if (B) {
			h == null || h.addPoint("render_preview_loading_indicator");
			var z = c && f.isReplying, j;
			a[22] !== z ? (j = [f.outerContainer, z], a[22] = z, a[23] = j) : j = a[23];
			var K;
			a[24] !== g.title ? (K = d.jsx(r("BaseView.react"), {
				xstyle: f.container,
				children: d.jsx(r("MWXLinkPreviewLoadingIndicator.react"), { title: g.title })
			}), a[24] = g.title, a[25] = K) : K = a[25];
			var Q;
			return a[26] !== j || a[27] !== K ? (Q = d.jsx(r("BaseView.react"), {
				xstyle: j,
				children: K
			}), a[26] = j, a[27] = K, a[28] = Q) : Q = a[28], Q;
		}
		var X = c && f.isReplying, Y;
		a[29] !== X ? (Y = [f.outerContainer, X], a[29] = X, a[30] = Y) : Y = a[30];
		var J;
		a[31] !== S || a[32] !== V || a[33] !== G ? (J = S != null && d.jsx(r("MWXImage.react"), {
			onError: V,
			onLoad: G,
			src: S,
			xstyle: f.image
		}), a[31] = S, a[32] = V, a[33] = G, a[34] = J) : J = a[34];
		var Z;
		a[35] !== N ? (Z = d.jsx(r("MWXText.react"), {
			isSemanticHeading: !1,
			type: "headline4",
			children: N
		}), a[35] = N, a[36] = Z) : Z = a[36];
		var ee;
		a[37] !== A || a[38] !== x || a[39] !== Z ? (ee = d.jsx(r("BaseView.react"), {
			xstyle: f.textSection,
			children: d.jsx(r("MWXTextPairing.react"), {
				body: A,
				bodyLineLimit: 1,
				headline: Z,
				level: 4,
				meta: x
			})
		}), a[37] = A, a[38] = x, a[39] = Z, a[40] = ee) : ee = a[40];
		var te;
		a[41] !== J || a[42] !== ee ? (te = d.jsxs(r("BaseView.react"), {
			xstyle: f.content,
			children: [J, ee]
		}), a[41] = J, a[42] = ee, a[43] = te) : te = a[43];
		var ne;
		a[44] === Symbol.for("react.memo_cache_sentinel") ? (ne = s._(
			/*BTDS*/
			""
		), a[44] = ne) : ne = a[44];
		var re;
		a[45] !== y || a[46] !== m.data || a[47] !== m.dataType || a[48] !== m.draftId ? (re = function() {
			y.runInTransaction((function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					var t, n;
					yield e.e2ee_composer_draft_link_preview.put({
						data: (t = m.data) != null ? t : void 0,
						dataType: (n = m.dataType) != null ? n : void 0,
						draftId: m.draftId,
						status: (u || (u = o("I64"))).of_int32(r("E2EELinkPreviewXMADataStatus").DISABLED)
					});
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})(), "readwrite", void 0, void 0, i.id + ":189");
		}, a[45] = y, a[46] = m.data, a[47] = m.dataType, a[48] = m.draftId, a[49] = re) : re = a[49];
		var oe;
		a[50] !== ne || a[51] !== re ? (oe = d.jsx(r("MWXIcon_DEPRECATED.react"), {
			"aria-label": ne,
			color: "primary",
			icon: r("FBNucleusCrossFilled12Icon.react"),
			onPress: re
		}), a[50] = ne, a[51] = re, a[52] = oe) : oe = a[52];
		var ae;
		a[53] !== te || a[54] !== oe ? (ae = d.jsxs(r("BaseView.react"), {
			xstyle: f.container,
			children: [te, oe]
		}), a[53] = te, a[54] = oe, a[55] = ae) : ae = a[55];
		var ie;
		return a[56] !== Y || a[57] !== ae ? (ie = d.jsx(r("BaseView.react"), {
			xstyle: Y,
			children: ae
		}), a[56] = Y, a[57] = ae, a[58] = ie) : ie = a[58], ie;
	}
	l.default = g;
}), 226);
