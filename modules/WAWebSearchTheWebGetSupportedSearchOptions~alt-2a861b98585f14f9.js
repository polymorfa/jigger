__d("WAWebSearchTheWebGetSupportedSearchOptions", [
	"fbt",
	"WALogger",
	"WAWebExternalLink.react",
	"WAWebFrontendMsgGetters",
	"WAWebMediaInMemoryBlobCache",
	"WAWebMiscErrors",
	"WAWebMsgActionCapability",
	"WAWebMsgLinks",
	"WAWebMsgType",
	"WAWebNetworkStatus",
	"WAWebSTWGatingUtils",
	"WAWebSTWImage",
	"WAWebSTWText",
	"WAWebSearchTheWebCommonUtils",
	"WAWebSearchTheWebEventLogger",
	"WAWebWamEnumStwInteraction",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e;
	function u() {
		return s._(
			/*BTDS*/
			""
		);
	}
	function c(t) {
		var n = o("WAWebFrontendMsgGetters").getText(t), a = o("WAWebMsgLinks").getLinksFromMsg(t), i = new Map();
		if (a.length > 0 && o("WAWebSTWGatingUtils").isSearchTheWebURLSearchEnabled()) {
			var l = a[0].href;
			i.set(o("WAWebSearchTheWebCommonUtils").SearchType.URL, { handleSearchAction: function(t) {
				o("WAWebSearchTheWebEventLogger").logSTWEvent(t), o("WAWebExternalLink.react").openExternalLink(o("WAWebSTWText").createUrlSearchLink(l));
			} });
		}
		if (t.type === o("WAWebMsgType").MSG_TYPE.IMAGE && o("WAWebMsgActionCapability").canWamoSubMsgBeSharedByUser(t.unsafe(), o("WAWebFrontendMsgGetters").getChat(t))) {
			var s, c = (s = t.mediaObject) == null ? void 0 : s.filehash;
			if (c != null && o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.has(c)) {
				var m = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(c);
				m != null && i.set(o("WAWebSearchTheWebCommonUtils").SearchType.IMAGE, { handleSearchAction: function(n) {
					o("WAWebSearchTheWebEventLogger").logSTWEvent(n);
					async function t(t) {
						try {
							if (!r("WAWebNetworkStatus").online) throw o("WAWebSearchTheWebCommonUtils").showSearchFailureToast(o("WAWebSearchTheWebCommonUtils").getNoInternetToastMsg()), new (o("WAWebMiscErrors")).GoogleLensApiError(o("WAWebSTWImage").LensApiErrorType.NO_INTERNET_CONNECTION);
							var a = await o("WAWebSTWImage").getImageSearchUrl(t);
							if (a == null) throw new (o("WAWebMiscErrors")).GoogleLensApiError(o("WAWebSTWImage").LensApiErrorType.NO_REDIRECT_URL);
							if (a.includes("consent")) throw new (o("WAWebMiscErrors")).GoogleLensApiError(o("WAWebSTWImage").LensApiErrorType.CONSENT_FORM_IN_URL);
							n.stwInteraction = o("WAWebWamEnumStwInteraction").STW_INTERACTION.IMAGE_SEARCH_REDIRECT, o("WAWebSearchTheWebEventLogger").logSTWEvent(n), o("WAWebExternalLink.react").openExternalLink(a);
						} catch (t) {
							n.stwInteraction = o("WAWebWamEnumStwInteraction").STW_INTERACTION.IMAGE_SEARCH_FAILED, n.stwLensApiErrorType = o("WAWebSTWImage").getImageSearchWamErrorType(r("getErrorSafe")(t)), o("WAWebSearchTheWebEventLogger").logSTWEvent(n), o("WAWebSearchTheWebCommonUtils").showSearchFailureToast(u()), o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Error while running image seach on web"]))).tags("STW");
						}
					}
					return t(m);
				} });
			}
		}
		return n != null && o("WAWebSTWGatingUtils").isSearchTheWebTextSearchEnabled() && d(n, a) && i.set(o("WAWebSearchTheWebCommonUtils").SearchType.TEXT, { handleSearchAction: function(t) {
			o("WAWebSearchTheWebEventLogger").logSTWEvent(t), o("WAWebExternalLink.react").openExternalLink(o("WAWebSTWText").createTextSearchLink(n));
		} }), i;
	}
	function d(e, t) {
		if (t.length === 0) return !0;
		var n = e;
		return t.forEach(function(t) {
			var r = t.href;
			n = e.replace(r, "");
		}), n.trim() !== "";
	}
	l.getSupportedSearchOptions = c;
}), 226);
