__d("MAWParseScreenshotActionMsg", [
	"FBLogger",
	"MAWExternalId",
	"MAWMsgType",
	"WAAckLevel",
	"WAArmadilloApplication.pb",
	"WAJids"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t = e.content, n = e.meta, a = t.screenshotAction;
		if (a == null) throw r("FBLogger")("messenger_web").mustfixThrow("screenshotAction has no content");
		var i = a.screenshotType;
		if (i == null) throw r("FBLogger")("messenger_web").mustfixThrow("Missing screenshot type in payload");
		if (![o("WAArmadilloApplication.pb").ARMADILLO_CONTENT_SCREENSHOT_ACTION_SCREENSHOT_TYPE.SCREENSHOT_IMAGE, o("WAArmadilloApplication.pb").ARMADILLO_CONTENT_SCREENSHOT_ACTION_SCREENSHOT_TYPE.SCREEN_RECORDING].includes(i)) throw r("FBLogger")("messenger_web").mustfixThrow("Received unexpected screenshot action type");
		var l = {
			ack: o("WAAckLevel").ACK.SENT,
			id: {
				author: o("WAJids").AUTHOR_SYSTEM,
				chat: n.id.chat,
				externalId: o("MAWExternalId").generateExternalId()
			},
			msgContent: {
				adminMsgContent: [],
				adminType: "youEphemeralTakeScreenshot",
				screenshotActionType: i
			},
			ts: n.serverTs,
			type: o("MAWMsgType").EPHEMERAL_SCREENSHOT_ACTION
		};
		return {
			contentTypeForLogging: "screenshotAction",
			unstoredMedia: null,
			unstoredMsg: l,
			unstoredQuotedMedia: null,
			unstoredXMA: null
		};
	}
	l.parseEphemeralScreenshotActionProtocol = e;
}), 98);
