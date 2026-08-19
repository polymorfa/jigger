__d("useMAWMediaDownloadStatus", [
	"MAWMediaDownloadStatusUIState",
	"ReQL",
	"ReQLSuspense",
	"emptyHook",
	"react",
	"react-compiler-runtime",
	"useMAWMediaDownloadUIStateDebounced",
	"useMAWMediaValidationResult",
	"useReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = (s || (s = o("react"))).useMemo, c = { useFetchInitialDownloadStatus: r("emptyHook").thatReturnsNull };
	function d(t, n, a) {
		var l = o("react-compiler-runtime").c(17), s = (e || (e = r("useReStore")))(), u = a != null ? a : t == null ? void 0 : t.attachmentFbid, d, m;
		l[0] !== s || l[1] !== u ? (d = function() {
			return u != null ? o("ReQL").fromTableAscending(s.tables.client_media_status).getKeyRange(u) : o("ReQL").empty();
		}, m = [s, u], l[0] = s, l[1] = u, l[2] = d, l[3] = m) : (d = l[2], m = l[3]);
		var p = o("ReQLSuspense").useFirst(d, m, i.id + ":48"), _;
		l[4] !== t || l[5] !== p || l[6] !== u ? (_ = o("MAWMediaDownloadStatusUIState").getNonDebouncedUIStateAndStatus(p, u, t), l[4] = t, l[5] = p, l[6] = u, l[7] = _) : _ = l[7];
		var f = _, g = f.mawMediaStatus, h = f.nonDebouncedUIState, y = f.status, C = r("useMAWMediaDownloadUIStateDebounced")(h), b = r("useMAWMediaValidationResult")(t, n, g), v;
		l[8] !== t || l[9] !== n || l[10] !== y || l[11] !== u ? (v = {
			attachment: t,
			mediaRenderQpl: n,
			mediaStatus: y,
			statusKey: u
		}, l[8] = t, l[9] = n, l[10] = y, l[11] = u, l[12] = v) : v = l[12], c.useFetchInitialDownloadStatus(v);
		var S;
		return l[13] !== C || l[14] !== y || l[15] !== b ? (S = {
			status: y,
			uiState: C,
			validationResult: b
		}, l[13] = C, l[14] = y, l[15] = b, l[16] = S) : S = l[16], S;
	}
	l.default = d;
}), 98);
