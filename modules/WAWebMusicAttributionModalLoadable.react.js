__d("WAWebMusicAttributionModalLoadable.react", [
	"JSResourceForInteraction",
	"WAWebLazyLoadedRetriable",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
		var e = yield r("JSResourceForInteraction")("WAWebMusicStatusAttribution.react").__setRef("WAWebMusicAttributionModalLoadable.react").load();
		return e.showMusicStatusAttributionModal;
	}), "MusicStatusAttributionModal");
	function c(e) {
		return d.apply(this, arguments);
	}
	function d() {
		return d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.closeModal, n = e.isFullscreen, r = e.msg, o = e.musicMetadata, a = e.renderModal, i = e.statusMediaController, l = yield u();
			return l({
				closeModal: t,
				isFullscreen: n,
				msg: r,
				musicMetadata: o,
				renderModal: a,
				statusMediaController: i
			});
		}), d.apply(this, arguments);
	}
	l.showMusicStatusAttributionModalLoadable = c;
}), 98);
