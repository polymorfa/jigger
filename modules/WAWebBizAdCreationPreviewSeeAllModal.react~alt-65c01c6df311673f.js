__d("WAWebBizAdCreationPreviewSeeAllModal.react", [
	"WAWebBizAdPreviewContent.react",
	"WAWebConfirmPopup.react",
	"WAWebModal.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = 420, c = 620, d = { root: {
		height: "x13041zz",
		width: "x3p9ev8",
		$$css: !0
	} };
	function m(e) {
		var t = e.adAccountID, n = e.loggerContext, a = e.onClose, i = e.previewData;
		return s.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			type: o("WAWebModal.react").ModalTheme.Auto,
			children: s.jsx(r("WAWebBizAdPreviewContent.react"), {
				adAccountID: t,
				loggerContext: n,
				onClose: a,
				previewData: i,
				xstyle: d.root
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
