__d("WAWebCheckMediaExistence", [
	"WALogger",
	"WAWebEventsWaitForBbEvent",
	"WAWebMediaMmsV4Download",
	"WAWebMmsMediaTypes"
], (function(t, n, r, o, a, i, l) {
	var e;
	async function s(t) {
		if (await u(t), !t.mediaObject) {
			o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
				"checkExistence msg without mediaObject, id: ",
				" type: ",
				""
			])), t.id.toString(), t.type).sendLogs("media-fault: checkExistence msg without mediaObject");
			return;
		}
		await o("WAWebMediaMmsV4Download").checkExistence({
			mimetype: t.mimetype,
			mediaObject: t.mediaObject,
			mediaType: o("WAWebMmsMediaTypes").getMsgMediaType(t)
		});
	}
	async function u(e) {
		e.mediaData != null && e.mediaData.filehash && !e.isUnsentPhoneMsg() || (e.waitForPhoneUploadPromise || (e.waitForPhoneUploadPromise = r("WAWebEventsWaitForBbEvent")(e.mediaData, "change:mediaStage change:filehash", function() {
			return !!e.mediaData.filehash && !e.isUnsentPhoneMsg();
		})), await e.waitForPhoneUploadPromise, e.waitForPhoneUploadPromise = null);
	}
	l.checkMediaExistence = s;
}), 98);
