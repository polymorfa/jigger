__d("WAWebBizAdCreationDragDropOverlay.react", [
	"fbt",
	"Promise",
	"WAWebBizAdCreationConfigContext",
	"WAWebBizAdCreationLWIMediaUpload",
	"WAWebBizAdCreationLinkWAMediaToStatus",
	"WAWebBizAdCreationMediaCollectionReducer",
	"WAWebBizAdCreationStage1WAUploadUtils",
	"WAWebDataTransfer",
	"WAWebFlex.react",
	"WDSText.react",
	"err",
	"getWAWebBizAdCreationCreativeCarouselReducer",
	"react",
	"useWAWebBizAdCreationSpecDispatcherContext",
	"withWAWebBizAdCreationSpecContext"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useContext, _ = d.useRef, f = d.useState, g = { overlayInner: {
		backgroundColor: "x6egj2d",
		borderTopColor: "xx42vgk",
		borderInlineEndColor: "xbogo7e",
		borderBottomColor: "x120ee7l",
		borderInlineStartColor: "x1vb5itz",
		borderStartStartRadius: "x6nvzda",
		borderStartEndRadius: "x4i4b9w",
		borderEndEndRadius: "xhl9efl",
		borderEndStartRadius: "xj65ea0",
		borderTopStyle: "xlya59e",
		borderInlineEndStyle: "xwy3id5",
		borderBottomStyle: "xpvcztv",
		borderInlineStartStyle: "x11nt7xy",
		borderTopWidth: "xmn4e3e",
		borderInlineEndWidth: "x1if355w",
		borderBottomWidth: "x2x41l1",
		borderInlineStartWidth: "xct1zlm",
		boxSizing: "x9f619",
		rowGap: "x129bwdz",
		columnGap: "x1trrmfo",
		height: "x5yr21d",
		width: "xh8yej3",
		$$css: !0
	} };
	function h(t) {
		var a, i = t.adAccountID, l = t.children, u = t.currentLocallyUploadedMediaCollection, d = f(!1), h = d[0], y = d[1], C = f(!1), b = C[0], v = C[1], S = _(0), R = p(r("WAWebBizAdCreationConfigContext")), L = (a = R == null ? void 0 : R.pageID) != null ? a : "", E = r("useWAWebBizAdCreationSpecDispatcherContext")([r("getWAWebBizAdCreationCreativeCarouselReducer"), r("WAWebBizAdCreationMediaCollectionReducer")]), k = m(function() {
			E({ type: "media_collection_reducer.revert_to_last_successfully_uploaded_media_collection" });
		}, [E]), I = m(function(e) {
			E({
				mediaCollection: e,
				type: "media_collection_reducer.update_media_collection"
			});
		}, [E]), T = m(function(t) {
			(e || (e = n("Promise"))).all([r("WAWebBizAdCreationLWIMediaUpload")(t, L, i), r("WAWebBizAdCreationLinkWAMediaToStatus")(t)]).then(function(e) {
				var t = e[0];
				E({
					carouselCardsData: t,
					type: "creative_carousel_reducer.set_carousel_cards"
				});
			}).catch(function(e) {
				throw k(), r("err")("Media upload mutation failure: " + String(e) + ". Please check LWI media upload and WA Media to Status link.");
			});
		}, [
			i,
			E,
			k,
			L
		]), D = m(function(e) {
			e.preventDefault(), e.stopPropagation(), S.current = 0, y(!1);
			var t = new (r("WAWebDataTransfer"))(e.dataTransfer);
			t.hasType("Files") && o("WAWebBizAdCreationStage1WAUploadUtils").handleFileDrop(e, u, T, k, I, v);
		}, [
			u,
			T,
			k,
			I
		]), x = m(function(e) {
			e.preventDefault(), e.stopPropagation();
		}, []), $ = m(function(e) {
			e.preventDefault(), e.stopPropagation(), S.current += 1;
			var t = new (r("WAWebDataTransfer"))(e.dataTransfer);
			t.hasType("Files") && y(!0);
		}, []), P = m(function(e) {
			e.preventDefault(), e.stopPropagation(), S.current -= 1, S.current === 0 && y(!1);
		}, []);
		return c.jsxs("div", {
			"aria-label": s._(
				/*BTDS*/
				""
			),
			onDragEnter: $,
			onDragLeave: P,
			onDragOver: x,
			onDrop: D,
			role: "region",
			children: [l, h ? c.jsx("div", {
				className: "x1280gxy x9f619 x5yr21d x1o0tod x1sk1jro x1evaxtz x1ci70gm x1m4z3lf xixxii4 x13vifvy xh8yej3 x1bkdxzg",
				children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "center",
					justify: "center",
					xstyle: g.overlayInner,
					children: [c.jsx(r("WDSText.react"), {
						colorName: "contentDefault",
						type: "Headline1",
						children: s._(
							/*BTDS*/
							""
						)
					}), c.jsx(r("WDSText.react"), {
						colorName: "contentDeemphasized",
						type: "Body2",
						children: s._(
							/*BTDS*/
							""
						)
					})]
				})
			}) : null]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	var y = r("withWAWebBizAdCreationSpecContext")(h, function(e) {
		return {
			adAccountID: e.adAccountData.legacyAccountID,
			currentLocallyUploadedMediaCollection: e.currentLocallyUploadedMediaCollection
		};
	});
	l.default = y;
}), 226);
