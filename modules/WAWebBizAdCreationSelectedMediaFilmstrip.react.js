__d("WAWebBizAdCreationSelectedMediaFilmstrip.react", [
	"CometDraggableList.react",
	"CometDraggableListItemKeyboardHandler.react",
	"FBLogger",
	"WAWebBizAdCreationConfigContext",
	"WAWebBizAdCreationCreativeFilmstripMediaThumbnail.react",
	"WAWebBizAdCreationCreativeMediaView.react",
	"WAWebBizAdCreationCreativeSelectedMediaNullState.react",
	"WAWebBizAdCreationLoggerContext",
	"WAWebBizAdCreationMediaCollectionReducer",
	"WAWebBizAdCreationMediaValidationUtils",
	"WAWebBizAdCreationSelectMediaButton.react",
	"WAWebBizAdCreationStage2LWIUploadUtils",
	"WAWebBizAdLogger",
	"WAWebKeyboardTabUtils",
	"WAWebModalManager",
	"WAWebToast.react",
	"WAWebToastManager",
	"getErrorSafe",
	"getWAWebBizAdCreationCreativeCarouselReducer",
	"react",
	"useWAWebBizAdCreationSpecDispatcherContext",
	"useWAWebForceUpdate",
	"useWAWebIsKeyboardUser",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useContext, m = u.useMemo, p = u.useState, _ = { draggableList: {
		columnGap: "x1s70e7g",
		flexWrap: "x1a02dak",
		rowGap: "x1qvou4u",
		$$css: !0
	} };
	function f(e) {
		"use no forget";
		var t, n = e.adAccountID, a = e.mediaCollection, i = e.setMediaUploadFailed, l = e.setUploadingMediaIds, u = e.uploadingMediaIds, f = u.size > 0, g = p(null), h = g[0], y = g[1], C = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), b = d(r("WAWebBizAdCreationConfigContext")), v = (t = b == null ? void 0 : b.pageID) != null ? t : "", S = r("useWAWebBizAdCreationSpecDispatcherContext")([r("getWAWebBizAdCreationCreativeCarouselReducer"), r("WAWebBizAdCreationMediaCollectionReducer")]);
		o("useWAWebListener").useListener(a, ["remove", "reset"], C);
		var R = d(r("WAWebBizAdCreationLoggerContext")), L = c(function(e) {
			if (l(new Set()), R != null) {
				var t, o;
				r("WAWebBizAdLogger").logCritical({
					adAccountID: n,
					event: "creative_editor_modal_upload_media_failure",
					extra: {
						error_message: (t = e == null ? void 0 : e.message) != null ? t : "Unknown error",
						error_name: (o = e == null ? void 0 : e.name) != null ? o : "Error"
					},
					loggerContext: R
				});
			}
			S({ type: "media_collection_reducer.revert_to_last_successfully_uploaded_media_collection" }), i(!0);
		}, [
			n,
			R,
			S,
			i,
			l
		]), E = c(function(e, t) {
			t != null && t.size > 0 && l(t), S({
				mediaCollection: e,
				type: "media_collection_reducer.update_media_collection"
			});
		}, [S, l]), k = c(function(e, t) {
			o("WAWebBizAdCreationStage2LWIUploadUtils").performPartialStage2LWIUpload(e, v, n).then(function(e) {
				var n = e.failedIndices, r = e.successfulResults;
				if (r.length === 0) {
					L();
					return;
				}
				if (n.length > 0) {
					var a = t.getPreviewableMedias(), i = n.map(function(e) {
						return a[e];
					});
					for (var u of i) t.remove(u);
					o("WAWebToastManager").ToastManager.open(s.jsx(o("WAWebToast.react").Toast, { msg: o("WAWebBizAdCreationStage2LWIUploadUtils").LWI_PARTIAL_UPLOAD_FAILURE_TOAST_MSG() }));
				}
				S({
					carouselCardsData: r,
					type: "creative_carousel_reducer.set_carousel_cards"
				}), l(new Set());
			}).catch(function(e) {
				L(), r("FBLogger")("wa_ctwa_web").catching(r("getErrorSafe")(e)).mustfix("Media upload mutation failure");
			});
		}, [
			n,
			S,
			L,
			v,
			l
		]), I = c(function(e, t) {
			var l = a.getPreviewableMedias().length;
			R != null && r("WAWebBizAdLogger").logCritical({
				adAccountID: n,
				event: "change_media",
				extra: {
					action: "edit",
					media_count: l,
					media_index: e
				},
				loggerContext: R
			}), y(e), i(!1), o("WAWebBizAdCreationMediaValidationUtils").deepCloneMediaCollection(a).then(function(e) {
				var n = a.indexOf(t);
				if (n !== -1) {
					var i = e.at(n);
					i && e.setActive(i);
				}
				var l = s.jsx(r("WAWebBizAdCreationCreativeMediaView.react"), {
					mediaCollection: e,
					mediaMimeTypes: o("WAWebBizAdCreationMediaValidationUtils").ALLOWED_MIME_TYPES,
					onMediaUploadComplete: k,
					onMediaUploadFailure: L,
					onSelectedMediaSave: E,
					suportedMediaTypes: o("WAWebBizAdCreationMediaValidationUtils").SUPPORTED_MEDIA_TYPES
				});
				o("WAWebModalManager").ModalManager.openMedia(l, {
					blockClose: !0,
					focusType: { type: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
					transition: "status-modal"
				});
			}).catch(function() {
				r("FBLogger")("wa_ctwa_web").mustfix("failed to clone media collection");
			}).finally(function() {
				y(null);
			});
		}, [
			n,
			R,
			k,
			L,
			E,
			a,
			i
		]), T = c(function(e, t) {
			var o = a.getPreviewableMedias().length;
			R != null && r("WAWebBizAdLogger").logCritical({
				adAccountID: n,
				event: "remove_image_asset",
				extra: {
					action: "delete",
					media_count: o,
					media_index: e
				},
				loggerContext: R
			}), a.remove(t), S({
				cardIndex: e,
				type: "creative_carousel_reducer.remove_carousel_card"
			});
		}, [
			n,
			R,
			S,
			a
		]), D = a.getPreviewableMedias(), x = r("useWAWebIsKeyboardUser")(), $ = x.isKeyboardUser, P = m(function() {
			var e = D.length > 1;
			return D.map(function(t, n) {
				var o = s.jsx(r("WAWebBizAdCreationCreativeFilmstripMediaThumbnail.react"), {
					attachMedia: t,
					disabled: h != null || f,
					loading: h === n,
					onDeleteClick: function(t) {
						return T(n, t);
					},
					onEditClick: function(t) {
						return I(n, t);
					},
					uploading: u.has(t.id)
				});
				return !e || $ ? s.jsx("div", { children: o }, t.id) : s.jsx(r("CometDraggableListItemKeyboardHandler.react"), { children: o }, t.id);
			});
		}, [
			D,
			h,
			f,
			u,
			$,
			I,
			T
		]), N = m(function() {
			return o("WAWebBizAdCreationMediaValidationUtils").canAddMoreAttachments(a) ? [].concat(P, [s.jsx("div", {
				className: "xt0e3qv",
				children: s.jsx(r("WAWebBizAdCreationSelectMediaButton.react"), {
					adAccountID: n,
					mediaCollection: a,
					onMediaUploadComplete: k,
					onMediaUploadFailure: L,
					onSelectedMediaSave: E,
					setMediaUploadFailed: i
				})
			}, "add-media-button")]) : P;
		}, [
			P,
			a,
			n,
			k,
			L,
			E,
			i
		]), M = D.length, w = c(function(e, t, n) {
			t >= M || n >= M || (a.reorder(t, n), S({
				fromIndex: t,
				toIndex: n,
				type: "creative_carousel_reducer.reorder_carousel_card"
			}), a.trigger("reset", a));
		}, [
			a,
			S,
			M
		]);
		return D.length === 0 ? s.jsx(r("WAWebBizAdCreationCreativeSelectedMediaNullState.react"), {
			adAccountID: n,
			mediaCollection: a,
			onMediaUploadComplete: k,
			onMediaUploadFailure: L,
			onSelectedMediaSave: E,
			setMediaUploadFailed: i
		}) : s.jsx("div", {
			className: "x6s0dn4 x1s70e7g x78zum5 x1q0g3np x1a02dak x1qvou4u",
			children: D.length > 1 ? s.jsx(r("CometDraggableList.react"), {
				direction: "horizontal",
				items: N,
				onReorder: w,
				xstyle: _.draggableList
			}) : s.jsxs(s.Fragment, { children: [P, o("WAWebBizAdCreationMediaValidationUtils").canAddMoreAttachments(a) ? s.jsx(r("WAWebBizAdCreationSelectMediaButton.react"), {
				adAccountID: n,
				mediaCollection: a,
				onMediaUploadComplete: k,
				onMediaUploadFailure: L,
				onSelectedMediaSave: E,
				setMediaUploadFailed: i
			}) : null] })
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 98);
