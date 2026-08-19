__d("WAWebInitChatThreadLogging", [
	"WALogger",
	"WAWebChatThreadLogging",
	"WAWebChatThreadLoggingEventStore",
	"WAWebChatThreadLoggingEventUploader",
	"WAWebChatThreadLoggingLocalstorageMetadataHandler",
	"WAWebUserPrefsMultiDevice"
], (function(t, n, r, o, a, i, l) {
	var e;
	async function s(t) {
		t === void 0 && (t = !0);
		var n = t;
		await o("WAWebUserPrefsMultiDevice").getChatThreadLoggingLastUploadedStartTs() == null && await o("WAWebUserPrefsMultiDevice").setChatThreadLoggingLastUploadedStartTs(0);
		var r = new (o("WAWebChatThreadLoggingLocalstorageMetadataHandler")).ChatThreadLoggingMetadataLocalStorage(), a = n ? new (o("WAWebChatThreadLoggingEventStore")).ChatThreadLoggingEventStoreImpl(r) : {
			handleMessages: function() {
				return Promise.resolve();
			},
			getEvent: function() {
				return Promise.resolve();
			},
			getBeforeInclusive: function() {
				return Promise.resolve([]);
			},
			deleteBeforeInclusive: function() {
				return Promise.resolve(0);
			}
		}, i = n ? new (o("WAWebChatThreadLoggingEventUploader")).ChatThreadLoggingEventUploaderImpl(r, a) : { uploadEvents: function() {
			return Promise.resolve(0);
		} }, l = await r.getOffset();
		l != null && o("WAWebChatThreadLogging").initUploadTimer(l), o("WAWebChatThreadLogging").setChatThreadLoggingState({
			metadataStore: r,
			eventStore: a,
			eventUploader: i
		}), o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["chat thread logging initialized"])));
	}
	l.initChatThreadLogging = s;
}), 98);
