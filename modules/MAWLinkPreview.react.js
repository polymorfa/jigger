__d("MAWLinkPreview.react", [
	"MAWLinkPreviewCard.react",
	"MAWParseLinkPreviewXMAData",
	"MWPComposerDraftMessages",
	"ReQL",
	"ReQLSuspense",
	"react",
	"react-compiler-runtime",
	"useReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react"));
	function c(t) {
		var n = o("react-compiler-runtime").c(12), a = t.isReplying, l = t.threadKey, s = t.threadType, c = (e || (e = r("useReStore")))(), d, m;
		n[0] !== c.tables.e2ee_composer_draft_link_preview || n[1] !== l ? (d = function() {
			return o("ReQL").fromTableAscending(c.tables.e2ee_composer_draft_link_preview).filter(function(e) {
				var t;
				return e.draftId === ((t = o("MWPComposerDraftMessages").getDraftMessage(l)) == null ? void 0 : t.id);
			});
		}, m = [c.tables.e2ee_composer_draft_link_preview, l], n[0] = c.tables.e2ee_composer_draft_link_preview, n[1] = l, n[2] = d, n[3] = m) : (d = n[2], m = n[3]);
		var p = o("ReQLSuspense").useArray(d, m, i.id + ":32"), _ = p.length > 0 ? p[0] : void 0, f;
		n[4] !== _ ? (f = o("MAWParseLinkPreviewXMAData").parseLinkPreviewXMAData(_), n[4] = _, n[5] = f) : f = n[5];
		var g = f;
		if ((_ == null ? void 0 : _.draftId) == null || g == null) return null;
		var h = _ == null ? void 0 : _.draftId, y;
		return n[6] !== a || n[7] !== _ || n[8] !== h || n[9] !== s || n[10] !== g ? (y = u.jsx(r("MAWLinkPreviewCard.react"), {
			draftID: h,
			isReplying: a,
			linkPreview: _,
			threadType: s,
			xmaData: g
		}), n[6] = a, n[7] = _, n[8] = h, n[9] = s, n[10] = g, n[11] = y) : y = n[11], y;
	}
	l.default = c;
}), 98);
