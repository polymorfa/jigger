__d("MAWDownloadMediaForUI", [
	"MAWMediaDownloadStatus",
	"MAWMediaDownloadStatusForUI",
	"MWFBLogger",
	"MpsMediaEntryCache",
	"MpsMediaManagerV2",
	"Promise",
	"WAErrorMessage",
	"WAHashUtils",
	"WAMediaManager",
	"WAPromiseManagement",
	"WAResultOrError",
	"WAStartMediaDownloadQplFlow",
	"asyncToGeneratorRuntime",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = o("MWFBLogger").MWMediaLogger().tags(["downloadMediaForUI"]);
	function m(e) {
		return (c || (c = n("Promise"))).all(e.media.map((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = yield p(e);
				return {
					arg: e,
					result: t
				};
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})()));
	}
	function p(t) {
		return _(t).catch(function(t) {
			return d.catching(r("getErrorSafe")(t)).MUSTFIX(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Runtime error"]))), o("WAResultOrError").makeError("runtime-error");
		});
	}
	var _ = o("WAPromiseManagement").cacheWhilePending(function(e) {
		var t;
		switch (e.type) {
			case "mediaId": return "mediaId-" + e.mediaId.toString() + "-" + ((t = e.downloadType) != null ? t : "fullsizeAndPreview");
			case "xmaId": return "xmaId-" + e.xmaId.toString();
			default: {
				var n;
				return e.type, "plaintextHash-" + e.plaintextHash + "-" + ((n = e.downloadType) != null ? n : "fullsizeAndPreview");
			}
		}
	}, f);
	function f(e) {
		return g.apply(this, arguments);
	}
	function g() {
		return g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t, n = h(e);
			if (d.DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["start downloadMediaForUILayout. ", ""])), n), e.type !== "plaintextHash") return d.MUSTFIX(u || (u = babelHelpers.taggedTemplateLiteralLoose(["downloadMediaForUILayout: args.type is not plaintextHash"]))), o("WAResultOrError").makeError("missing-media");
			var a = e.plaintextHash, i = o("WAStartMediaDownloadQplFlow").startMediaDownloadQplFlow({
				downloadEntry: "UILayout",
				e2eePlatform: (t = o("MpsMediaEntryCache").getEntry(a)) == null ? void 0 : t.e2eePlatform,
				msgType: null,
				protocolMsgId: null,
				triggerUIView: e.triggerUIView
			});
			o("MAWMediaDownloadStatusForUI").sendUIStatusDownloading(a, "download_and_handle_media"), o("MAWMediaDownloadStatusForUI").sendMediaDownloadStatusToUI({
				details: "download_and_handle_media",
				hash: a,
				status: r("MAWMediaDownloadStatus").DOWNLOADING,
				type: "main"
			});
			var l = o("MpsMediaManagerV2").mpsMediaManager().enqueueDownloadFullSizeAndPreview({
				fullSizePlaintextHash: a,
				mediaDownloadFlow: i,
				priority: o("WAMediaManager").MediaTaskPriority.HIGH
			}), c = l.fullsizePromise, m = l.previewPromise;
			m.then(function() {
				o("MAWMediaDownloadStatusForUI").sendMediaDownloadStatusToUI({
					details: "handle_media_download_success",
					hash: a,
					status: r("MAWMediaDownloadStatus").SUCCESS,
					type: "preview"
				});
			});
			var p = yield c;
			return p.success === !1 ? (i.endFail("handle_media_download_fail", { string: { failReason: p.payload == null ? p.error : o("WAErrorMessage").maybeGetMessageFromError(p.payload) } }), o("MAWMediaDownloadStatusForUI").sendUIStatusFailure(a, p.error), o("WAResultOrError").makeError("runtime-error")) : (i.addPoint("handle_media_download_end"), i.endSuccess(), o("MAWMediaDownloadStatusForUI").sendUIStatusSuccess(a, p.value.validatedResult), o("WAResultOrError").makeResult());
		}), g.apply(this, arguments);
	}
	function h(e) {
		switch (e.type) {
			case "mediaId": return "mediaId: " + e.mediaId.toString();
			case "xmaId": return "xmaId: " + e.xmaId.toString();
			default: return e.type, "plaintextHash: " + o("WAHashUtils").sanitisePlaintextHash(e.plaintextHash);
		}
	}
	l.bulkDownloadMediaForUI = m, l.downloadMediaForUI = p;
}), 98);
