__d("WAWebImagineActionLogger", [
	"WAWebGetMetaAiImagineEventContext",
	"WAWebLogImagineAction",
	"WAWebWamEnumImagineAction",
	"WAWebWamEnumImagineMediaType"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	async function e(e) {
		o("WAWebLogImagineAction").logImagineAction({
			action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION.MEDIA_INPUT_DOCUMENT_CLICK,
			mediaType: o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.DOCUMENT,
			eventContext: await o("WAWebGetMetaAiImagineEventContext").getMetaAiImagineEventContext(e)
		});
	}
	l.logMetaAiDocumentClick = e;
}), 98);
