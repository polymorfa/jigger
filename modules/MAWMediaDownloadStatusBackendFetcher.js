__d("MAWMediaDownloadStatusBackendFetcher", [
	"I64",
	"LSAuthorityLevel",
	"LSIntEnum",
	"MAWBridgeSendAndReceive",
	"MAWDbMedia",
	"MAWMediaSetClientMediaStatus",
	"MessagingAttachmentType",
	"ODS",
	"WAHashUtils",
	"isReceiverFetchSticker",
	"promiseDone",
	"react",
	"react-compiler-runtime",
	"useAsyncReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = (e || (e = o("react"))).useEffect, m = new Set();
	function p(e) {
		var t = o("react-compiler-runtime").c(7), n = e.attachment, a = e.mediaRenderQpl, i = e.mediaStatus, l = e.statusKey, s = r("useAsyncReStore")(), u, c;
		t[0] !== n || t[1] !== s || t[2] !== a || t[3] !== i || t[4] !== l ? (u = function() {
			f(n, a, i, l, s);
		}, c = [
			s,
			n,
			a,
			i,
			l
		], t[0] = n, t[1] = s, t[2] = a, t[3] = i, t[4] = l, t[5] = u, t[6] = c) : (u = t[5], c = t[6]), d(u, c);
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(4), n = r("useAsyncReStore")(), a, i;
		t[0] !== e || t[1] !== n ? (a = function() {
			e.forEach(function(e) {
				var t = e.attachment, r = e.mediaRenderQpl, o = e.mediaStatus, a = e.statusKey;
				f(t, r, o, a, n, !0);
			});
		}, i = [n, e], t[0] = e, t[1] = n, t[2] = a, t[3] = i) : (a = t[2], i = t[3]), d(a, i);
	}
	function f(e, t, n, a, i, l) {
		if (l === void 0 && (l = !1), !(e == null || a == null)) {
			var d = r("isReceiverFetchSticker")(e), p = (s || (s = o("I64"))).equal(e.attachmentType, (u || (u = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").XMA)), _ = e.transportKey === "FBBroker" || e.transportKey === "FBLegacyBroker", f = !_ && (s || (s = o("I64"))).to_int32(e.authorityLevel) === r("LSAuthorityLevel").OPTIMISTIC, g = n != null, h = p || f || _ || d || g || m.has(a);
			if (h) {
				(c || (c = o("ODS"))).bumpEntityKey(3185, "media_initial_download_status", (l ? "bulk" : "single") + ".skip"), t == null || t.addPoint("skip_fetch_download_status");
				return;
			}
			var y = isNaN(a);
			(c || (c = o("ODS"))).bumpEntityKey(3185, "media_initial_download_status", (l ? "bulk" : "single") + ".request." + (y ? "plaintext" : "media_id")), t == null || t.addPoint("request_download_status"), m.add(a);
			var C = y ? o("MAWBridgeSendAndReceive").sendAndReceive("backend", "getMediaDownloadStatusByPlaintextHash", {
				plaintextHash: o("WAHashUtils").stringToPlaintextHash(a),
				qplInstanceKey: t == null ? void 0 : t.getInstanceKey()
			}) : o("MAWBridgeSendAndReceive").sendAndReceive("backend", "getMediaDownloadStatusByMediaId", {
				mediaId: o("MAWDbMedia").convertNumberToMediaId(parseInt(a, 10)),
				qplInstanceKey: t == null ? void 0 : t.getInstanceKey()
			});
			r("promiseDone")(C.then(function(e) {
				e != null && o("MAWMediaSetClientMediaStatus").call(i, a, e);
			}));
		}
	}
	l.useFetchInitialDownloadStatus = p, l.useFetchInitialDownloadStatusBulk = _;
}), 98);
