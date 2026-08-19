__d("WAWebBizAdCreationCreativeMediaView.react", [
	"fbt",
	"FBLogger",
	"WAWebBizAdCreationMediaValidationUtils",
	"WAWebBizAdCreationStage1WAUploadUtils",
	"WAWebConfirmPopup.react",
	"WAWebFlex.react",
	"WAWebMediaEditorEnumsThemes",
	"WAWebMediaEditorLoadable.react",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebToast.react",
	"WAWebToastManager",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useCallback, d = { mediaEditorModalContainer: {
		backgroundColor: "x1280gxy",
		borderTopColor: "x1pyc6se",
		borderInlineEndColor: "x1mlb2bo",
		borderBottomColor: "x16pkwpw",
		borderInlineStartColor: "xqe4bef",
		borderStartStartRadius: "xyi3aci",
		borderStartEndRadius: "xwf5gio",
		borderEndEndRadius: "x1p453bz",
		borderEndStartRadius: "x1suzm8a",
		borderTopStyle: "x13fuv20",
		borderInlineEndStyle: "x18b5jzi",
		borderBottomStyle: "x1q0q8m5",
		borderInlineStartStyle: "x1t7ytsu",
		borderTopWidth: "x178xt8z",
		borderInlineEndWidth: "x1lun4ml",
		borderBottomWidth: "xso031l",
		borderInlineStartWidth: "xpilrb4",
		height: "xb8htw9",
		top: "x13vifvy",
		insetInlineEnd: "xtijo5x",
		bottom: "x1ey2m1c",
		insetInlineStart: "x1o0tod",
		marginTop: "xr1yuqi",
		marginInlineEnd: "x11t971q",
		marginBottom: "x4ii5y1",
		marginInlineStart: "xvc5jky",
		overflowX: "x6ikm8r",
		overflowY: "x10wlt62",
		position: "x10l6tqk",
		width: "xg0jo4d",
		zIndex: "xbpklzw",
		$$css: !0
	} };
	function m(e) {
		var t = o("react-compiler-runtime").c(19), n = e.mediaCollection, a = e.mediaMimeTypes, i = e.onMediaUploadComplete, l = e.onMediaUploadFailure, c = e.onRender, m = e.onSelectedMediaSave, g = e.suportedMediaTypes, h;
		t[0] !== n ? (h = function() {
			if (n.getPreviewableMedias().length === 0) {
				o("WAWebModalManager").ModalManager.closeMedia();
				return;
			}
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				cancelText: s._(
					/*BTDS*/
					""
				),
				okText: s._(
					/*BTDS*/
					""
				),
				onCancel: o("WAWebModalManager").closeModalManager,
				onOK: _,
				onOverlayClick: o("WAWebModalManager").closeModalManager,
				title: s._(
					/*BTDS*/
					""
				),
				children: s._(
					/*BTDS*/
					""
				)
			}));
		}, t[0] = n, t[1] = h) : h = t[1];
		var y = h, C = p, b;
		t[2] !== n || t[3] !== i || t[4] !== l || t[5] !== m ? (b = async function(t) {
			if (!C(t)) {
				l(), o("WAWebModalManager").ModalManager.closeMedia();
				return;
			}
			m(n), o("WAWebBizAdCreationStage1WAUploadUtils").uploadAdCreativeMediaToWA(n, i, l), o("WAWebModalManager").ModalManager.closeMedia();
		}, t[2] = n, t[3] = i, t[4] = l, t[5] = m, t[6] = b) : b = t[6];
		var v = b, S;
		t[7] !== n || t[8] !== g ? (S = function(t) {
			var e = o("WAWebBizAdCreationMediaValidationUtils").maybePruneNewAttachments(n, t);
			for (var r of e.pruneActions) o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: o("WAWebBizAdCreationMediaValidationUtils").PRUNE_TOAST_MESSAGES[r]() }));
			return e.shouldClearExisting && n.reset(), n.processAttachments(e.attachments, void 0, g, o("WAWebBizAdCreationMediaValidationUtils").MAX_IMAGE_COUNT);
		}, t[7] = n, t[8] = g, t[9] = S) : S = t[9];
		var R = S, L;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (L = u.jsx("div", { className: "x1honnu5 x5yr21d x1o0tod xixxii4 x13vifvy xh8yej3 xbpklzw" }), t[10] = L) : L = t[10];
		var E;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (E = { surface: "ad-creation-flow-media-composer" }, t[11] = E) : E = t[11];
		var k;
		return t[12] !== y || t[13] !== R || t[14] !== v || t[15] !== n || t[16] !== a || t[17] !== c ? (k = u.jsxs(u.Fragment, { children: [L, u.jsx(o("WAWebFlex.react").FlexColumn, {
			testid: "biz_native_ads_media_editor_modal",
			xstyle: d.mediaEditorModalContainer,
			children: u.jsx(o("WAWebMediaEditorLoadable.react").MediaEditorLoadable, {
				canViewOnce: !1,
				hdEligible: !0,
				initCaption: null,
				maxNumberOfMedia: o("WAWebBizAdCreationMediaValidationUtils").MAX_IMAGE_COUNT,
				mediaCollection: n,
				mimes: a,
				onClose: y,
				onDropText: r("WAWebNoop"),
				onProcessAttachments: R,
				onRender: c,
				onSendMedia: v,
				renderCaptionInput: f,
				sendAsSticker: !1,
				theme: o("WAWebMediaEditorEnumsThemes").MediaTheme.AD_CREATION,
				tsNavigationData: E
			})
		})] }), t[12] = y, t[13] = R, t[14] = v, t[15] = n, t[16] = a, t[17] = c, t[18] = k) : k = t[18], k;
	}
	function p(e) {
		if (!e || e.length === 0) return r("FBLogger")("wa_ctwa_web").mustfix("No media provided for sending"), !1;
		var t = [], n = e.every(function(e, n) {
			return !e || !e.media ? (t.length < 3 && t.push(n), !1) : !0;
		});
		return t.length > 0 && r("FBLogger")("wa_ctwa_web").mustfix("Invalid media items at " + t.length + " indices"), n;
	}
	function _() {
		o("WAWebModalManager").ModalManager.close(), o("WAWebModalManager").ModalManager.closeMedia();
	}
	function f() {
		return u.jsx(u.Fragment, {});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = m;
}), 226);
