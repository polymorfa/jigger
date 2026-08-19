__d("MAWThreadViewAttachmentStateHandlerContent.react", [
	"CometHeroHoldTrigger.react",
	"MAWAttachmentStateHandlerContentBase.react",
	"MWV2AttachmentLoadingPlaceholder.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.attachmentsFromGroupToRetry, n = e.connectBottom, o = e.connectTop, a = e.dbAttachment, i = e.descriptionForLogging, l = e.downloadStatusKeyOverride, u = e.errorComponentRenderer, c = e.errorWithBlurComponentRenderer, d = e.loadingPlaceholderStyle, m = e.mediaRenderQpl, p = e.outgoing, _ = e.placeholderHeight, f = e.placeholderMaxHeight, g = e.placeholderMaxWidth, h = e.placeholderWidth, y = e.shouldDisableAutoTriggerDownload, C = y === void 0 ? !1 : y, b = e.successfulComponentRenderer, v = e.xmaMediaType;
		return s.jsx(r("MAWAttachmentStateHandlerContentBase.react"), {
			attachmentsFromGroupToRetry: t,
			dbAttachment: a,
			descriptionForLogging: i + ".MAWThreadViewAttachmentStateHandlerContent",
			downloadStatusKeyOverride: l,
			errorComponentRenderer: u,
			errorWithBlurComponentRenderer: c,
			loadingPlaceholderRenderer: function(t, i) {
				return s.jsxs(s.Fragment, { children: [s.jsx(r("MWV2AttachmentLoadingPlaceholder.react"), {
					connectBottom: n,
					connectTop: o,
					descriptionForLogging: t,
					hasAppAttribution: (a == null ? void 0 : a.attributionAppName) != null,
					height: _,
					maxHeight: f != null ? f : _,
					maxWidth: g != null ? g : h,
					mediaRenderQpl: m,
					outgoing: p,
					width: h,
					xstyle: d
				}), !i && s.jsx(r("CometHeroHoldTrigger.react"), {
					description: t,
					hold: !0
				})] });
			},
			mediaRenderQpl: m,
			shouldDisableAutoTriggerDownload: C,
			successfulComponentRenderer: b,
			xmaMediaType: v
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
