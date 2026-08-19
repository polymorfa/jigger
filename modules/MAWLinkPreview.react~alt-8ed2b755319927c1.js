__d("MAWLinkPreview.react", [
	"MAWLinkPreviewCard.react",
	"MAWParseLinkPreviewXMAData",
	"MWPComposerDraftMessages",
	"ReQL",
	"ReQLSuspense",
	"react",
	"useReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react"));
	function c(t) {
		var n = t.isReplying, a = t.threadKey, l = t.threadType, s = (e || (e = r("useReStore")))(), c = o("ReQLSuspense").useArray(function() {
			return o("ReQL").fromTableAscending(s.tables.e2ee_composer_draft_link_preview).filter(function(e) {
				var t;
				return e.draftId === ((t = o("MWPComposerDraftMessages").getDraftMessage(a)) == null ? void 0 : t.id);
			});
		}, [s.tables.e2ee_composer_draft_link_preview, a], i.id + ":32"), d = c.length > 0 ? c[0] : void 0, m = o("MAWParseLinkPreviewXMAData").parseLinkPreviewXMAData(d);
		return (d == null ? void 0 : d.draftId) == null || m == null ? null : u.jsx(r("MAWLinkPreviewCard.react"), {
			draftID: d == null ? void 0 : d.draftId,
			isReplying: n,
			linkPreview: d,
			threadType: l,
			xmaData: m
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
