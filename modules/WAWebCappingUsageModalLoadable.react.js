__d("WAWebCappingUsageModalLoadable.react", [
	"JSResourceForInteraction",
	"WAWebLoadingModal.react",
	"WAWebModalLoadable",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = r("WAWebModalLoadable")(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
		return (yield r("JSResourceForInteraction")("WAWebCappingUsageModal.react").__setRef("WAWebCappingUsageModalLoadable.react").load()).CappingUsageModal;
	}), "CappingUsageModal", function(e) {
		return s.jsx(r("WAWebLoadingModal.react"), { error: !!e.error });
	});
	l.CappingUsageModalLoadable = u;
}), 98);
