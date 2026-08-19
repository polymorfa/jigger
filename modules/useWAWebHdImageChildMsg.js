__d("useWAWebHdImageChildMsg", [
	"WAWebMediaGatingUtils",
	"WAWebMessageAssociation.flow",
	"react",
	"react-compiler-runtime",
	"useWAWebAssociatedMessages"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (e || (e = o("react"))).useMemo;
	function u(e, t) {
		var n = o("react-compiler-runtime").c(5), r = o("useWAWebAssociatedMessages").useHiddenAssociatedMessages(e), a;
		n[0] !== r ? (a = r.find(c), n[0] = r, n[1] = a) : a = n[1];
		var i = a, l;
		if (n[2] !== i || n[3] !== t) {
			var s;
			l = i != null && (t == null || ((s = i.mediaData) == null ? void 0 : s.mediaStage) === t) && o("WAWebMediaGatingUtils").isHdImageDualUploadConsumptionEnabled() ? i : null, n[2] = i, n[3] = t, n[4] = l;
		} else l = n[4];
		var u = l;
		return u;
	}
	function c(e) {
		return e.associationType === o("WAWebMessageAssociation.flow").MessageAssociationType.HD_IMAGE_DUAL_UPLOAD;
	}
	l.useHdImageChildMsg = u;
}), 98);
