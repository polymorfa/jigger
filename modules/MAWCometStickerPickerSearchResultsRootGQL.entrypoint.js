__d("MAWCometStickerPickerSearchResultsRootGQL.entrypoint", ["JSResourceForInteraction", "WebPixelRatio"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = {
		getPreloadProps: function(t) {
			var e = t.searchQuery, n = t.stickerWidth;
			return { extraProps: {
				scale: o("WebPixelRatio").get(),
				searchQuery: e,
				stickerWidth: typeof n == "number" ? Math.floor(n) : n
			} };
		},
		root: r("JSResourceForInteraction")("MAWCometStickerPickerSearchResultsRootGQL.react").__setRef("MAWCometStickerPickerSearchResultsRootGQL.entrypoint")
	};
	l.default = e;
}), 98);
