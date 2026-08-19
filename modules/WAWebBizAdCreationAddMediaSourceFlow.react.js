__d("WAWebBizAdCreationAddMediaSourceFlow.react", [
	"WAWebBizAdCreationAddMediaSourceModal.react",
	"WAWebBizAdCreationCatalogMediaModal.react",
	"WAWebBizNativeAdsGatingUtils",
	"WAWebModalManager",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e, t) {
		if (!o("WAWebBizNativeAdsGatingUtils").nativeAdsCatalogMediaSourceEnabled()) {
			e();
			return;
		}
		function n() {
			o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebBizAdCreationAddMediaSourceModal.react"), {
				onClose: o("WAWebModalManager").closeModalManager,
				onNext: a
			}));
		}
		function a(t) {
			t === "catalog" ? i() : (o("WAWebModalManager").ModalManager.close(), e());
		}
		function i() {
			o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebBizAdCreationCatalogMediaModal.react"), {
				onBack: n,
				onClose: o("WAWebModalManager").closeModalManager,
				onConfirm: l
			}));
		}
		function l(e) {
			o("WAWebModalManager").ModalManager.close(), t == null || t(e);
		}
		n();
	}
	l.openWAWebBizAdCreationAddMediaSource = u;
}), 98);
