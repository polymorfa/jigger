__d("WAWebPipOgVideoPlayer.react", [
	"WAWebPipConst",
	"WAWebPipSharedVideoPlayer.react",
	"react",
	"react-compiler-runtime"
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
		var n = o("react-compiler-runtime").c(23), r, a, i, l, s, c, d, m, p;
		n[0] !== t ? (r = t.autoPlay, a = t.ogVideoInfo, i = t.onAspectRatio, l = t.onClose, s = t.onError, c = t.onVideoDimensions, d = t.onVideoEnded, p = t.startTime, m = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = r, n[2] = a, n[3] = i, n[4] = l, n[5] = s, n[6] = c, n[7] = d, n[8] = m, n[9] = p) : (r = n[1], a = n[2], i = n[3], l = n[4], s = n[5], c = n[6], d = n[7], m = n[8], p = n[9]);
		var _;
		return n[10] !== r || n[11] !== a || n[12] !== i || n[13] !== l || n[14] !== s || n[15] !== c || n[16] !== d || n[17] !== m.disablePiPControls || n[18] !== m.onRefSet || n[19] !== m.onSetFullscreenToggleCallback || n[20] !== m.onVideoMetadataChange || n[21] !== p ? (_ = u.jsx(o("WAWebPipSharedVideoPlayer.react").WrappedSharedVideoPlayer, {
			type: o("WAWebPipConst").PlayerType.OG_FLOATER,
			ogVideoInfo: a,
			startTime: p,
			onClose: l,
			onVideoEnded: d,
			onError: s,
			onAspectRatio: i,
			onVideoDimensions: c,
			autoPlay: r,
			disablePiPControls: m.disablePiPControls,
			onRefSet: m.onRefSet,
			onVideoMetadataChange: m.onVideoMetadataChange,
			onSetFullscreenToggleCallback: m.onSetFullscreenToggleCallback
		}), n[10] = r, n[11] = a, n[12] = i, n[13] = l, n[14] = s, n[15] = c, n[16] = d, n[17] = m.disablePiPControls, n[18] = m.onRefSet, n[19] = m.onSetFullscreenToggleCallback, n[20] = m.onVideoMetadataChange, n[21] = p, n[22] = _) : _ = n[22], _;
	}
	l.default = c;
}), 98);
