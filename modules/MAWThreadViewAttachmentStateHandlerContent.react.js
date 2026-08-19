__d("MAWThreadViewAttachmentStateHandlerContent.react", [
	"CometHeroHoldTrigger.react",
	"MAWAttachmentStateHandlerContentBase.react",
	"MWV2AttachmentLoadingPlaceholder.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(23), n = e.attachmentsFromGroupToRetry, a = e.connectBottom, i = e.connectTop, l = e.dbAttachment, u = e.descriptionForLogging, c = e.downloadStatusKeyOverride, d = e.errorComponentRenderer, m = e.errorWithBlurComponentRenderer, p = e.loadingPlaceholderStyle, _ = e.mediaRenderQpl, f = e.outgoing, g = e.placeholderHeight, h = e.placeholderMaxHeight, y = e.placeholderMaxWidth, C = e.placeholderWidth, b = e.shouldDisableAutoTriggerDownload, v = e.successfulComponentRenderer, S = e.xmaMediaType, R = b === void 0 ? !1 : b, L = u + ".MAWThreadViewAttachmentStateHandlerContent", E;
		t[0] !== a || t[1] !== i || t[2] !== (l == null ? void 0 : l.attributionAppName) || t[3] !== p || t[4] !== _ || t[5] !== f || t[6] !== g || t[7] !== h || t[8] !== y || t[9] !== C ? (E = function(t, n) {
			return s.jsxs(s.Fragment, { children: [s.jsx(r("MWV2AttachmentLoadingPlaceholder.react"), {
				connectBottom: a,
				connectTop: i,
				descriptionForLogging: t,
				hasAppAttribution: (l == null ? void 0 : l.attributionAppName) != null,
				height: g,
				maxHeight: h != null ? h : g,
				maxWidth: y != null ? y : C,
				mediaRenderQpl: _,
				outgoing: f,
				width: C,
				xstyle: p
			}), !n && s.jsx(r("CometHeroHoldTrigger.react"), {
				description: t,
				hold: !0
			})] });
		}, t[0] = a, t[1] = i, t[2] = l == null ? void 0 : l.attributionAppName, t[3] = p, t[4] = _, t[5] = f, t[6] = g, t[7] = h, t[8] = y, t[9] = C, t[10] = E) : E = t[10];
		var k;
		return t[11] !== n || t[12] !== l || t[13] !== c || t[14] !== d || t[15] !== m || t[16] !== _ || t[17] !== R || t[18] !== v || t[19] !== L || t[20] !== E || t[21] !== S ? (k = s.jsx(r("MAWAttachmentStateHandlerContentBase.react"), {
			attachmentsFromGroupToRetry: n,
			dbAttachment: l,
			descriptionForLogging: L,
			downloadStatusKeyOverride: c,
			errorComponentRenderer: d,
			errorWithBlurComponentRenderer: m,
			loadingPlaceholderRenderer: E,
			mediaRenderQpl: _,
			shouldDisableAutoTriggerDownload: R,
			successfulComponentRenderer: v,
			xmaMediaType: S
		}), t[11] = n, t[12] = l, t[13] = c, t[14] = d, t[15] = m, t[16] = _, t[17] = R, t[18] = v, t[19] = L, t[20] = E, t[21] = S, t[22] = k) : k = t[22], k;
	}
	l.default = u;
}), 98);
