__d("MWMediaManagerTypes", ["MessagingAttachmentType"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		switch (e) {
			case "animated_image": return r("MessagingAttachmentType").ANIMATED_IMAGE;
			case "image": return r("MessagingAttachmentType").IMAGE;
			case "video": return r("MessagingAttachmentType").VIDEO;
			case "audio": return r("MessagingAttachmentType").AUDIO;
			case "document": return r("MessagingAttachmentType").FILE;
			default: return null;
		}
	}
	l.getMessagingAttachmentTypeFromMediaMetadataAttachmentType = e;
}), 98);
