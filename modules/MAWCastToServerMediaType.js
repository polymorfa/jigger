__d("MAWCastToServerMediaType", [], (function(t, n, r, o, a, i) {
	"use strict";
	function e(e) {
		switch (e) {
			case "document":
			case "image":
			case "xma-image":
			case "video":
			case "ptt":
			case "gif":
			case "sticker": return e;
			default: return null;
		}
	}
	function l(e) {
		switch (e) {
			case "image":
			case "video":
			case "gif":
			case "sticker":
			case "preview": return e;
			case "audio": return "ptt";
			case "xma": return "xma-image";
			case "file": return "document";
		}
	}
	i.castToServerMediaType = e, i.castMsgrServerMediaTypeToServerMediaType = l;
}), 66);
