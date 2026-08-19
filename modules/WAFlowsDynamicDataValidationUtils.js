__d("WAFlowsDynamicDataValidationUtils", ["WAFlowsError", "isImageSizeUnderLimit"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n) {
		if (t && Array.isArray(n.dataSource)) {
			var r = n.dataSource.every(function(t) {
				try {
					return t.image != null ? o("isImageSizeUnderLimit").isImageSizeUnderLimit(t.image, e) : !0;
				} catch (e) {
					throw new (o("WAFlowsError")).WAFlowsInvalidBase64ValueToDecodeError("Cannot decode the given value for the image src");
				}
			});
			return r;
		}
		return !0;
	}
	l.getImageSizeInDataSourceValidation = e;
}), 98);
