__d("MAWSecureAttachmentRenderer.react", [
	"CometPlaceholder.react",
	"MAWMsg",
	"MAWSecureAttachment.react",
	"MAWSecurePlaceholder.react",
	"MWPActor.react",
	"MWPMessageParsingUtils",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useCallback;
	function c(e, t, n, a, i, l, u, c) {
		var d = o("MWPMessageParsingUtils").MessageWithAttachments.shouldConnectTop(e, t, "below"), m = o("MWPMessageParsingUtils").MessageWithAttachments.shouldConnectBottom(e, n, "below");
		return s.jsx(r("CometPlaceholder.react"), {
			fallback: null,
			name: "MAWSecureAttachmentRenderer.Suspense",
			children: o("MAWMsg").isMediaMsg(e) || o("MAWMsg").isXMAMsg(e) ? s.jsx(r("MAWSecureAttachment.react"), {
				connectBottom: m,
				connectTop: d,
				hasEmphasisRing: c,
				hasText: l,
				mediaRenderQpl: i,
				message: e,
				outgoing: a
			}) : s.jsx(r("MAWSecurePlaceholder.react"), {
				actorId: u,
				message: e
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e) {
		var t = o("MWPActor.react").useActor(), n = u(function(n, r, o, a, i, l) {
			return c(n, r, o, a, l, i, t, e);
		}, [t, e]);
		return n;
	}
	l.render = c, l.useRenderAttachment = d;
}), 98);
