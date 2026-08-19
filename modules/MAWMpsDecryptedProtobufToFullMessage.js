__d("MAWMpsDecryptedProtobufToFullMessage", [
	"FBLogger",
	"MAWMpsGenerateMessageFromBackupMessage",
	"MAWMpsGenerateSupplementalFromBackupMessage",
	"MpsTypes",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		var n = [];
		try {
			return e.forEach(function(e) {
				var r;
				if (e != null) {
					var a = o("MAWMpsGenerateMessageFromBackupMessage").generateMessage(e.toplevelProtobuf, t);
					if (a != null) {
						var i = new Map();
						e.supplementalProtobufs.forEach(function(e, t) {
							var n = e.decryptedProtobuf, r = o("MAWMpsGenerateSupplementalFromBackupMessage").generateSupplemental(n);
							r != null && i.set(o("MpsTypes").toSupplementalKey(t), r);
						});
						var l = {
							attachmentData: e.attachmentData,
							expiryTimestampMs: null,
							supplementalProtobufs: i,
							tags: (r = e.tags) != null ? r : [],
							toplevelProtobuf: a
						};
						n.push(l);
					}
				}
			}), n;
		} catch (e) {
			var a = r("getErrorSafe")(e);
			throw r("FBLogger")("wmi_eb").catching(a).mustfix("Runtime error performing decodeAndParseEbProtobufs for MPS: %s", a.message), a;
		}
	}
	l.decryptedProtobufToFullMessage = e;
}), 98);
