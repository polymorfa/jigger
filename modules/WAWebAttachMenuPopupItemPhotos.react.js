__d("WAWebAttachMenuPopupItemPhotos.react", [
	"fbt",
	"$InternalEnum",
	"Promise",
	"WAWebAttachMenuFilePicker",
	"WAWebAttachmentMenuLogger",
	"WAWebChatGetters",
	"WAWebChatThreadLogging",
	"WAWebFileUtils",
	"WAWebLogImagineAction",
	"WAWebPrepareMessageSendingAction",
	"WAWebStateUtils",
	"WAWebThreadJourneyLogger",
	"WAWebUnifiedSession",
	"WAWebWamEnumImagineAction",
	"WAWebWamEnumImagineMediaType",
	"WDSIconIcFilterFilled.react",
	"WDSMenuItem.react",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = { refreshedIcon: {
		color: "xsadat2",
		$$css: !0
	} }, m = n("$InternalEnum").Mirrored([
		"PHOTOS",
		"VIDEOS",
		"PHOTOS_AND_VIDEOS"
	]);
	function p(e) {
		return _.apply(this, arguments);
	}
	function _() {
		return _ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t, n, r, a = (t = e.aiThreads) == null || (t = t.getFirstActivated()) == null ? void 0 : t.id, i = a != null ? yield o("WAWebChatThreadLogging").getThreadIDHMAC(a) : null;
			return {
				aiSessionId: (n = o("WAWebThreadJourneyLogger").ThreadJourneyLogger.getAiSessionId()) != null ? n : void 0,
				metaAiConversationThreadId: i != null ? i : void 0,
				unifiedSessionId: (r = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId()) != null ? r : void 0
			};
		}), _.apply(this, arguments);
	}
	function f(e) {
		return e === m.PHOTOS ? o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.IMAGE : e === m.VIDEOS ? o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.VIDEO : e === m.PHOTOS_AND_VIDEOS ? o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.MIXED : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	function g(e, t) {
		return h.apply(this, arguments);
	}
	function h() {
		return h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			o("WAWebLogImagineAction").logImagineAction({
				action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION.MEDIA_INPUT_CLICK,
				mediaType: f(t),
				eventContext: yield p(e)
			});
		}), h.apply(this, arguments);
	}
	function y(e, t) {
		return C.apply(this, arguments);
	}
	function C() {
		return C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			o("WAWebLogImagineAction").logImagineAction({
				action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION.MEDIA_INPUT_GALLERY_CLICK,
				mediaType: f(t),
				eventContext: yield p(e)
			});
		}), C.apply(this, arguments);
	}
	function b(e) {
		return v.apply(this, arguments);
	}
	function v() {
		return v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var r = yield (e || (e = n("Promise"))).all(t), a = !1, i = !1;
			for (var l of r) {
				var s = o("WAWebFileUtils").typeFromMimetype(l.file.type);
				s === o("WAWebFileUtils").FILETYPE.IMAGE ? a = !0 : s === o("WAWebFileUtils").FILETYPE.VIDEO && (i = !0);
			}
			return a && i ? o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.MIXED : i ? o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.VIDEO : o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.IMAGE;
		}), v.apply(this, arguments);
	}
	function S(e, t) {
		return R.apply(this, arguments);
	}
	function R() {
		return R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			o("WAWebLogImagineAction").logImagineAction({
				action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION.MEDIA_INPUT_GALLERY_SELECTION_CONFIRMED,
				mediaType: yield b(t),
				eventContext: yield p(e)
			});
		}), R.apply(this, arguments);
	}
	function L(e) {
		var t = e.chat, n = e.dismissMenu, r = e.mediaSelectionType, a = e.multiple, i = e.onMediaPick;
		o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(t), o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachMenuClick(t, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.PHOTO_AND_VIDEO_LIBRARY), o("WAWebChatGetters").getIsMetaAiBot(o("WAWebStateUtils").unproxy(t)) && g(t, r);
		var l = r === m.PHOTOS ? o("WAWebAttachMenuFilePicker").FilePickerMimeType.IMAGE : r === m.VIDEOS ? o("WAWebAttachMenuFilePicker").FilePickerMimeType.VIDEO : r === m.PHOTOS_AND_VIDEOS ? o("WAWebAttachMenuFilePicker").FilePickerMimeType.MEDIA : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + r);
		})(), s = o("WAWebChatGetters").getIsMetaAiBot(o("WAWebStateUtils").unproxy(t));
		s && y(t, r), o("WAWebAttachMenuFilePicker").createFilePicker({
			accept: l,
			multiple: a,
			transformAttachment: function(t) {
				return { file: t };
			}
		}, function(e) {
			s && S(t, e), i(e);
		}, n);
	}
	function E(e) {
		var t = o("react-compiler-runtime").c(11), n = e.chat, a = e.dismissMenu, i = e.mediaSelectionType, l = e.multiple, u = e.onMediaPick, p;
		t[0] !== i ? (p = i === m.PHOTOS ? s._(
			/*BTDS*/
			""
		) : i === m.VIDEOS ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[0] = i, t[1] = p) : p = t[1];
		var _ = p, f;
		t[2] !== n || t[3] !== a || t[4] !== i || t[5] !== l || t[6] !== u ? (f = function() {
			L({
				chat: n,
				dismissMenu: a,
				mediaSelectionType: i,
				multiple: l,
				onMediaPick: u
			});
		}, t[2] = n, t[3] = a, t[4] = i, t[5] = l, t[6] = u, t[7] = f) : f = t[7];
		var g = f, h;
		return t[8] !== g || t[9] !== _ ? (h = c.jsx(r("WDSMenuItem.react"), {
			testid: "mi-attach-media",
			onPress: g,
			Icon: r("WDSIconIcFilterFilled.react"),
			iconXstyle: d.refreshedIcon,
			title: _
		}), t[8] = g, t[9] = _, t[10] = h) : h = t[10], h;
	}
	l.MediaSelectionType = m, l.AttachMenuPopupItemPhotos = E;
}), 226);
