__d("MAWMediaType", ["WAServerMediaType"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		switch (e) {
			case "XMA": return "xma-image";
			case "EphemeralScreenshotAction":
			case "Raven":
			case "RavenAction":
			case "EditAction":
			case "NoteReply":
			case "BumpExistingMessage":
			case "DeleteThread": return null;
			default: return o("WAServerMediaType").getMediaType(e);
		}
	}
	l.getMediaType = e;
}), 98);
