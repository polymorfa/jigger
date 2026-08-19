__d("WAWebMusicAttributionModalLoadable.react", [
	"JSResourceForInteraction",
	"WAWebLazyLoadedRetriable",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = r("WAWebLazyLoadedRetriable")(async function() {
		var e = await r("JSResourceForInteraction")("WAWebMusicStatusAttribution.react").__setRef("WAWebMusicAttributionModalLoadable.react").load();
		return e.showMusicStatusAttributionModal;
	}, "MusicStatusAttributionModal");
	async function c(e) {
		var t = e.closeModal, n = e.isFullscreen, r = e.msg, o = e.musicMetadata, a = e.renderModal, i = e.statusMediaController, l = await u();
		return l({
			closeModal: t,
			isFullscreen: n,
			msg: r,
			musicMetadata: o,
			renderModal: a,
			statusMediaController: i
		});
	}
	l.showMusicStatusAttributionModalLoadable = c;
}), 98);
