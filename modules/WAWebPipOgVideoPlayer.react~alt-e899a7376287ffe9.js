__d("WAWebPipOgVideoPlayer.react", [
	"WAWebPipConst",
	"WAWebPipSharedVideoPlayer.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e = [
		"autoPlay",
		"ogVideoInfo",
		"onAspectRatio",
		"onClose",
		"onError",
		"onVideoDimensions",
		"onVideoEnded",
		"startTime"
	], s, u = s || (s = o("react"));
	function c(t) {
		var n = t.autoPlay, r = t.ogVideoInfo, a = t.onAspectRatio, i = t.onClose, l = t.onError, s = t.onVideoDimensions, c = t.onVideoEnded, d = t.startTime, m = babelHelpers.objectWithoutPropertiesLoose(t, e);
		return u.jsx(o("WAWebPipSharedVideoPlayer.react").WrappedSharedVideoPlayer, {
			type: o("WAWebPipConst").PlayerType.OG_FLOATER,
			ogVideoInfo: r,
			startTime: d,
			onClose: i,
			onVideoEnded: c,
			onError: l,
			onAspectRatio: a,
			onVideoDimensions: s,
			autoPlay: n,
			disablePiPControls: m.disablePiPControls,
			onRefSet: m.onRefSet,
			onVideoMetadataChange: m.onVideoMetadataChange,
			onSetFullscreenToggleCallback: m.onSetFullscreenToggleCallback
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
