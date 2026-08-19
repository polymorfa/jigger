__d("validateMAWMediaAndComposeEntryForProtoMsg", ["FBLogger", "WAMediaUtils"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		if (t == null) throw r("FBLogger")("messenger_web").mustfixThrow("DbMedia is null in validateMediaAndComposeEntryForProtoMsg");
		var n = null;
		if (e != null && t.mediaId != null) {
			if (!t.msgIds.includes(e)) throw r("FBLogger")("messenger_web").mustfixThrow("the media (" + t.mediaId + ") is not linked to the msg (" + e + ")");
			n = t.mediaEntries.get(e);
		} else n = t.mediaEntry;
		if (n == null) throw r("FBLogger")("messenger_web").mustfixThrow("media entry not found in validateMediaAndComposeEntryForProtoMsg");
		var o = t.plaintextHash, a = s(o, n);
		return [t, a];
	}
	function s(e, t) {
		var n = o("WAMediaUtils").mediaEntryDataToRawData(e, t);
		if (n.fileSha256 == null || n.mediaKey == null || n.fileEncSha256 == null || n.directPath == null || n.mediaKeyTimestamp == null) throw r("FBLogger")("messenger_web").mustfixThrow("missing fields in mediaEntryData");
		return babelHelpers.extends({}, n, {
			directPath: n.directPath,
			fileEncSha256: n.fileEncSha256,
			fileSha256: n.fileSha256,
			mediaKey: n.mediaKey,
			mediaKeyTimestamp: n.mediaKeyTimestamp
		});
	}
	l.validateMAWMediaAndComposeEntryForProtoMsg = e, l.validateMediaEntry = s;
}), 98);
