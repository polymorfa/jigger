__d("MAWMediaGalleryEBTaggingUtils", ["LSThreadMediaGalleryGroup", "gkx"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e() {
		return r("gkx")("13725");
	}
	function s(e) {
		return u(e) != null;
	}
	function u(e) {
		return e === r("LSThreadMediaGalleryGroup").PHOTOS_AND_VIDEOS ? r("LSThreadMediaGalleryGroup").PHOTOS_AND_VIDEOS : e === r("LSThreadMediaGalleryGroup").FILES_ONLY ? r("LSThreadMediaGalleryGroup").FILES_ONLY : void 0;
	}
	l.isMediaGalleryEBTaggingRestoreEnabled = e, l.isMediaGalleryGroupSupportedForTaggedRestore = s, l.toMediaGalleryGroupForTaggedRestore = u;
}), 98);
