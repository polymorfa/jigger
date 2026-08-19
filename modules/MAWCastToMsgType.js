__d("MAWCastToMsgType", ["MAWMsgType"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		switch (e) {
			case "image": return o("MAWMsgType").MSG_TYPE.IMAGE;
			case "video": return o("MAWMsgType").MSG_TYPE.VIDEO;
			case "gif": return o("MAWMsgType").MSG_TYPE.GIF;
			case "sticker": return o("MAWMsgType").MSG_TYPE.STICKER;
			case "file": return o("MAWMsgType").MSG_TYPE.DOCUMENT_FILE;
			case "audio": return o("MAWMsgType").MSG_TYPE.PTT;
			case "xma": return o("MAWMsgType").MSG_TYPE.XMA;
		}
	}
	l.castMsgrServerMediaTypeToMsgType = e;
}), 98);
