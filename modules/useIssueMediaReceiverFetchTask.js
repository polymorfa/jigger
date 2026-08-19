__d("useIssueMediaReceiverFetchTask", [
	"FBLogger",
	"I64",
	"Int64Hooks",
	"LSHandleMediaReceiverFetchResult.nop",
	"LSMediaUrlUtils",
	"MAWBackendReceiverFetchPrefetchExperiment",
	"MAWBridgeSendAndReceive",
	"MAWBridgeUpdateClientMediaStatusHandler",
	"MAWMediaDownloadStatus",
	"WAHashUtils",
	"clearTimeout",
	"fetchGraphQLMediaReceiverFetchData",
	"justknobx",
	"promiseDone",
	"react",
	"react-compiler-runtime",
	"setTimeout",
	"useAsyncReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = e || (e = o("react")), c = u.useEffect, d = u.useRef, m = r("justknobx")._("3314");
	function p(e, t, n, a, l, u, p, _, f) {
		var g = o("react-compiler-runtime").c(25), h = r("useAsyncReStore")(), y = d(!1), C;
		g[0] !== p || g[1] !== _ ? (C = o("LSMediaUrlUtils").hasValidReceiverFetchPreviewUrl(p, _), g[0] = p, g[1] = _, g[2] = C) : C = g[2];
		var b = C, v = d(null), S, R;
		g[3] !== b ? (S = function() {
			var e = v.current;
			return b && r("clearTimeout")(e), (function() {
				r("clearTimeout")(e);
			});
		}, R = [b], g[3] = b, g[4] = S, g[5] = R) : (S = g[4], R = g[5]), c(S, R);
		var L;
		g[6] !== h || g[7] !== b || g[8] !== e || g[9] !== l || g[10] !== u || g[11] !== t || g[12] !== a || g[13] !== n ? (L = function() {
			if (!(!l || !e || a == null || t == null || y.current || b)) {
				y.current = !0, u == null || u.addPoint("media_receiver_fetch_task_start");
				var c = function(n) {
					r("promiseDone")(h, function(e) {
						return o("MAWBridgeUpdateClientMediaStatusHandler").call(e, {
							details: n,
							key: o("WAHashUtils").stringToPlaintextHash(t),
							status: r("MAWMediaDownloadStatus").AUTOMATICALLY_RETRYABLE_TIMEOUT_FAILURE,
							type: "main"
						});
					});
				};
				r("promiseDone")(h, function(e) {
					o("MAWBackendReceiverFetchPrefetchExperiment").isMawBackendReceiverFetchPrefetchEnabled() ? r("promiseDone")(o("MAWBridgeSendAndReceive").sendAndReceive("backend", "getReceiverFetchInfo", {
						receiverFetchId: a,
						receiverFetchType: "sticker"
					}).then(function(l) {
						var u = l == null ? void 0 : l.accessibilitySummaryText, c = l == null ? void 0 : l.previewUrl, d = l == null ? void 0 : l.previewUrlExpirationTimestampMs, m = l == null ? void 0 : l.mimetype, p = l == null ? void 0 : l.previewHeight, _ = l == null ? void 0 : l.previewWidth;
						if (!(c == null || d == null || m == null || _ == null || p == null)) return e.runInTransaction(function(e) {
							return r("LSHandleMediaReceiverFetchResult.nop")(e, 0, a, n, t, c, (s || (s = o("I64"))).of_float(d), m, s.of_int32(_), s.of_int32(p), void 0, u);
						}, "readwrite", void 0, void 0, i.id + ":123");
					}), function() {
						r("clearTimeout")(v.current);
					}, function(e) {
						r("clearTimeout")(v.current), u == null || u.addPoint("media_receiver_fetch_task_fail"), c("media_receiver_fetch_task_fail"), r("FBLogger")("messenger_web_media").catching(e).warn("Failed to issue media receiver fetch task on mount");
					}) : o("fetchGraphQLMediaReceiverFetchData").fetchGraphQLMediaReceiverFetchData(e, t, a, n), v.current = r("setTimeout")(function() {
						u == null || u.addPoint("media_receiver_fetch_task_timeout"), c("media_receiver_fetch_task_timeout");
					}, m);
				}, function(e) {
					r("clearTimeout")(v.current), u == null || u.addPoint("media_receiver_fetch_task_fail"), c("media_receiver_fetch_task_fail"), r("FBLogger")("messenger_web_media").catching(e).warn("Failed to issue media receiver fetch task on mount");
				});
			}
		}, g[6] = h, g[7] = b, g[8] = e, g[9] = l, g[10] = u, g[11] = t, g[12] = a, g[13] = n, g[14] = L) : L = g[14];
		var E;
		g[15] !== f || g[16] !== h || g[17] !== b || g[18] !== e || g[19] !== l || g[20] !== u || g[21] !== t || g[22] !== a || g[23] !== n ? (E = [
			h,
			b,
			l,
			u,
			t,
			a,
			n,
			e,
			f
		], g[15] = f, g[16] = h, g[17] = b, g[18] = e, g[19] = l, g[20] = u, g[21] = t, g[22] = a, g[23] = n, g[24] = E) : E = g[24], o("Int64Hooks").useEffectInt64(L, E);
	}
	l.default = p;
}), 98);
