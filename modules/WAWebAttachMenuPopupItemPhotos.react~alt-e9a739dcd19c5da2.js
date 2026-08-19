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
	"react"
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
		var t = e.chat, n = e.dismissMenu, o = e.mediaSelectionType, a = e.multiple, i = e.onMediaPick, l = o === m.PHOTOS ? s._(
			/*BTDS*/
			""
		) : o === m.VIDEOS ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), u = function() {
			L({
				chat: t,
				dismissMenu: n,
				mediaSelectionType: o,
				multiple: a,
				onMediaPick: i
			});
		};
		return c.jsx(r("WDSMenuItem.react"), {
			testid: "mi-attach-media",
			onPress: u,
			Icon: r("WDSIconIcFilterFilled.react"),
			iconXstyle: d.refreshedIcon,
			title: l
		});
	}
	E.displayName = E.name + " [from " + i.id + "]", l.MediaSelectionType = m, l.AttachMenuPopupItemPhotos = E;
}), 226);
