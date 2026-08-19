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
	"useAsyncReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = (e || (e = o("react"))).useEffect, m = new Set();
	function p(e) {
		var t = e.attachment, n = e.mediaRenderQpl, o = e.mediaStatus, a = e.statusKey, i = r("useAsyncReStore")();
		d(function() {
			f(t, n, o, a, i);
		}, [
			i,
			t,
			n,
			o,
			a
		]);
	}
	function _(e) {
		var t = r("useAsyncReStore")();
		d(function() {
			e.forEach(function(e) {
				var n = e.attachment, r = e.mediaRenderQpl, o = e.mediaStatus, a = e.statusKey;
				f(n, r, o, a, t, !0);
			});
		}, [t, e]);
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
