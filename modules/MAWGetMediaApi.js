__d("MAWGetMediaApi", [
	"MAWDbMediaTxns",
	"MAWDexieTable",
	"MAWIndexedDb",
	"MAWTransactionMode",
	"MWFBLogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = function(t) {
		var e = t.media, n = t.xmaMediaType;
		return e == null ? null : {
			media: e,
			xmaMediaType: n
		};
	}, c = o("MAWIndexedDb").makeMsgrTransactor({ media: (s = o("MAWTransactionMode")).READONLY }, "getMediaByPlaintextHash", function(e) {
		return function(t) {
			return o("MAWDbMediaTxns").maybeGetMediaFromPlaintextHash(e, t);
		};
	}), d = o("MAWIndexedDb").makeMsgrTransactor({ media: s.READONLY }, "getMediaByMediaId", function(e) {
		return function(t) {
			return o("MAWDbMediaTxns").maybeGetMediaFromMediaId(e, t);
		};
	}), m = o("MAWIndexedDb").makeMsgrTransactor({
		media: s.READONLY,
		xma: s.READONLY
	}, "getMediaByXMAId", function(t) {
		return function(n) {
			return t.xma.get(n).then(function(r) {
				return r == null ? (o("MWFBLogger").MWMediaLogger().tags(["downloadMediaForUI"]).MUSTFIX(e || (e = babelHelpers.taggedTemplateLiteralLoose(["cannot find xma with xmaId ", ""])), n), []) : o("MAWDexieTable").dexieAll([
					o("MAWDbMediaTxns").maybeGetMediaFromMediaId(t, r.defaultPreviewMediaId).then(function(e) {
						return u({
							media: e,
							xmaMediaType: "preview"
						});
					}),
					o("MAWDbMediaTxns").maybeGetMediaFromMediaId(t, r.headerMediaId).then(function(e) {
						return u({
							media: e,
							xmaMediaType: "headerImage"
						});
					}),
					o("MAWDbMediaTxns").maybeGetMediaFromMediaId(t, r.faviconMediaId).then(function(e) {
						return u({
							media: e,
							xmaMediaType: "favicon"
						});
					})
				]);
			});
		};
	});
	l.getMediaByPlaintextHash = c, l.getMediaByMediaId = d, l.getMediaByXMAId = m;
}), 98);
