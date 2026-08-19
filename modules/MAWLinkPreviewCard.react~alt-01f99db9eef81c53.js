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
		var n = o("react-compiler-runtime").c(59), a = t.draftID, l = t.isReplying, c = t.linkPreview, m = t.threadType, p = t.xmaData, g = o("MWMediaComposerLinkPreviewXMARenderQpl").useMediaComposerLinkPreviewXMARenderQpl(a, p.url, c.dataType, m), h = (e || (e = r("useReStore")))(), y = o("MWLSThreadDisplayContext").useMWLSThreadDisplayContext() === "ChatTab", C = o("MAWLinkPreviewDataTypeUtils").linkPreviewDataTypeIsOfType(c.dataType, r("E2EELinkPreviewXMADataType").FALLBACK), b = p.author_name, v = p.iframeMediaURL, S = p.title, R = p.url, L;
		if (n[0] !== R) {
			var E;
			L = R != null ? (E = o("ConstUriUtils").getUri(R)) == null ? void 0 : E.getDomain() : "", n[0] = R, n[1] = L;
		} else L = n[1];
		var k = L, I = C ? R : k, T;
		n[2] !== y || n[3] !== I ? (T = o("MWXLinkPreviewTruncateText").truncateText({
			isChatTab: y,
			position: "subtext",
			text: I
		}), n[2] = y, n[3] = I, n[4] = T) : T = n[4];
		var D = T, x = C ? void 0 : S, $;
		n[5] !== y || n[6] !== x ? ($ = o("MWXLinkPreviewTruncateText").truncateText({
			isChatTab: y,
			position: "headline",
			text: x
		}), n[5] = y, n[6] = x, n[7] = $) : $ = n[7];
		var P = $, N = C ? S : b, M;
		n[8] !== y || n[9] !== N ? (M = o("MWXLinkPreviewTruncateText").truncateText({
			isChatTab: y,
			position: "body",
			text: N
		}), n[8] = y, n[9] = N, n[10] = M) : M = n[10];
		var w = M, A = c == null ? void 0 : c.status, F;
		n[11] !== A ? (F = o("MAWLinkPreviewDataStatusUtils").linkPreviewDataStatusIsOfType(A, r("E2EELinkPreviewXMADataStatus").LOADING), n[11] = A, n[12] = F) : F = n[12];
		var O = F, B, W;
		n[13] !== v || n[14] !== O || n[15] !== g ? (B = function() {
			!v && !O ? g == null || g.endSuccessAfterDelay({ bool: { has_media_preview_url: !1 } }) : g == null || g.addPoint("link-preview-card-render");
		}, W = [
			v,
			O,
			g
		], n[13] = v, n[14] = O, n[15] = g, n[16] = B, n[17] = W) : (B = n[16], W = n[17]), _(B, W);
		var q;
		n[18] !== g ? (q = function() {
			g == null || g.endFailAfterDelay("load-image-error");
		}, n[18] = g, n[19] = q) : q = n[19];
		var U = q, V;
		n[20] !== g ? (V = function() {
			g == null || g.endSuccessAfterDelay({ bool: { has_media_preview_url: !0 } });
		}, n[20] = g, n[21] = V) : V = n[21];
		var H = V;
		if (O) {
			g == null || g.addPoint("render_preview_loading_indicator");
			var G = l && f.isReplying, z;
			n[22] !== G ? (z = [f.outerContainer, G], n[22] = G, n[23] = z) : z = n[23];
			var j;
			n[24] !== p.title ? (j = d.jsx(r("BaseView.react"), {
				xstyle: f.container,
				children: d.jsx(r("MWXLinkPreviewLoadingIndicator.react"), { title: p.title })
			}), n[24] = p.title, n[25] = j) : j = n[25];
			var K;
			return n[26] !== z || n[27] !== j ? (K = d.jsx(r("BaseView.react"), {
				xstyle: z,
				children: j
			}), n[26] = z, n[27] = j, n[28] = K) : K = n[28], K;
		}
		var Q = l && f.isReplying, X;
		n[29] !== Q ? (X = [f.outerContainer, Q], n[29] = Q, n[30] = X) : X = n[30];
		var Y;
		n[31] !== v || n[32] !== U || n[33] !== H ? (Y = v != null && d.jsx(r("MWXImage.react"), {
			onError: U,
			onLoad: H,
			src: v,
			xstyle: f.image
		}), n[31] = v, n[32] = U, n[33] = H, n[34] = Y) : Y = n[34];
		var J;
		n[35] !== P ? (J = d.jsx(r("MWXText.react"), {
			isSemanticHeading: !1,
			type: "headline4",
			children: P
		}), n[35] = P, n[36] = J) : J = n[36];
		var Z;
		n[37] !== w || n[38] !== D || n[39] !== J ? (Z = d.jsx(r("BaseView.react"), {
			xstyle: f.textSection,
			children: d.jsx(r("MWXTextPairing.react"), {
				body: w,
				bodyLineLimit: 1,
				headline: J,
				level: 4,
				meta: D
			})
		}), n[37] = w, n[38] = D, n[39] = J, n[40] = Z) : Z = n[40];
		var ee;
		n[41] !== Y || n[42] !== Z ? (ee = d.jsxs(r("BaseView.react"), {
			xstyle: f.content,
			children: [Y, Z]
		}), n[41] = Y, n[42] = Z, n[43] = ee) : ee = n[43];
		var te;
		n[44] === Symbol.for("react.memo_cache_sentinel") ? (te = s._(
			/*BTDS*/
			""
		), n[44] = te) : te = n[44];
		var ne;
		n[45] !== h || n[46] !== c.data || n[47] !== c.dataType || n[48] !== c.draftId ? (ne = function() {
			h.runInTransaction(async function(e) {
				var t, n;
				await e.e2ee_composer_draft_link_preview.put({
					data: (t = c.data) != null ? t : void 0,
					dataType: (n = c.dataType) != null ? n : void 0,
					draftId: c.draftId,
					status: (u || (u = o("I64"))).of_int32(r("E2EELinkPreviewXMADataStatus").DISABLED)
				});
			}, "readwrite", void 0, void 0, i.id + ":189");
		}, n[45] = h, n[46] = c.data, n[47] = c.dataType, n[48] = c.draftId, n[49] = ne) : ne = n[49];
		var re;
		n[50] !== te || n[51] !== ne ? (re = d.jsx(r("MWXIcon_DEPRECATED.react"), {
			"aria-label": te,
			color: "primary",
			icon: r("FBNucleusCrossFilled12Icon.react"),
			onPress: ne
		}), n[50] = te, n[51] = ne, n[52] = re) : re = n[52];
		var oe;
		n[53] !== ee || n[54] !== re ? (oe = d.jsxs(r("BaseView.react"), {
			xstyle: f.container,
			children: [ee, re]
		}), n[53] = ee, n[54] = re, n[55] = oe) : oe = n[55];
		var ae;
		return n[56] !== X || n[57] !== oe ? (ae = d.jsx(r("BaseView.react"), {
			xstyle: X,
			children: oe
		}), n[56] = X, n[57] = oe, n[58] = ae) : ae = n[58], ae;
	}
	l.default = g;
}), 226);
