__d("WAWebAttachMenuPopupItemPhotos.react", [
	"fbt",
	"$InternalEnum",
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
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { refreshedIcon: {
		color: "xsadat2",
		$$css: !0
	} }, d = n("$InternalEnum").Mirrored([
		"PHOTOS",
		"VIDEOS",
		"PHOTOS_AND_VIDEOS"
	]);
	async function m(e) {
		var t, n, r, a = (t = e.aiThreads) == null || (t = t.getFirstActivated()) == null ? void 0 : t.id, i = a != null ? await o("WAWebChatThreadLogging").getThreadIDHMAC(a) : null;
		return {
			aiSessionId: (n = o("WAWebThreadJourneyLogger").ThreadJourneyLogger.getAiSessionId()) != null ? n : void 0,
			metaAiConversationThreadId: i != null ? i : void 0,
			unifiedSessionId: (r = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId()) != null ? r : void 0
		};
	}
	function p(e) {
		return e === d.PHOTOS ? o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.IMAGE : e === d.VIDEOS ? o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.VIDEO : e === d.PHOTOS_AND_VIDEOS ? o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.MIXED : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	async function _(e, t) {
		o("WAWebLogImagineAction").logImagineAction({
			action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION.MEDIA_INPUT_CLICK,
			mediaType: p(t),
			eventContext: await m(e)
		});
	}
	async function f(e, t) {
		o("WAWebLogImagineAction").logImagineAction({
			action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION.MEDIA_INPUT_GALLERY_CLICK,
			mediaType: p(t),
			eventContext: await m(e)
		});
	}
	async function g(e) {
		var t = await Promise.all(e), n = !1, r = !1;
		for (var a of t) {
			var i = o("WAWebFileUtils").typeFromMimetype(a.file.type);
			i === o("WAWebFileUtils").FILETYPE.IMAGE ? n = !0 : i === o("WAWebFileUtils").FILETYPE.VIDEO && (r = !0);
		}
		return n && r ? o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.MIXED : r ? o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.VIDEO : o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.IMAGE;
	}
	async function h(e, t) {
		o("WAWebLogImagineAction").logImagineAction({
			action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION.MEDIA_INPUT_GALLERY_SELECTION_CONFIRMED,
			mediaType: await g(t),
			eventContext: await m(e)
		});
	}
	function y(e) {
		var t = e.chat, n = e.dismissMenu, r = e.mediaSelectionType, a = e.multiple, i = e.onMediaPick;
		o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(t), o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachMenuClick(t, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.PHOTO_AND_VIDEO_LIBRARY), o("WAWebChatGetters").getIsMetaAiBot(o("WAWebStateUtils").unproxy(t)) && _(t, r);
		var l = r === d.PHOTOS ? o("WAWebAttachMenuFilePicker").FilePickerMimeType.IMAGE : r === d.VIDEOS ? o("WAWebAttachMenuFilePicker").FilePickerMimeType.VIDEO : r === d.PHOTOS_AND_VIDEOS ? o("WAWebAttachMenuFilePicker").FilePickerMimeType.MEDIA : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + r);
		})(), s = o("WAWebChatGetters").getIsMetaAiBot(o("WAWebStateUtils").unproxy(t));
		s && f(t, r), o("WAWebAttachMenuFilePicker").createFilePicker({
			accept: l,
			multiple: a,
			transformAttachment: function(t) {
				return { file: t };
			}
		}, function(e) {
			s && h(t, e), i(e);
		}, n);
	}
	function C(e) {
		var t = o("react-compiler-runtime").c(11), n = e.chat, a = e.dismissMenu, i = e.mediaSelectionType, l = e.multiple, m = e.onMediaPick, p;
		t[0] !== i ? (p = i === d.PHOTOS ? s._(
			/*BTDS*/
			""
		) : i === d.VIDEOS ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[0] = i, t[1] = p) : p = t[1];
		var _ = p, f;
		t[2] !== n || t[3] !== a || t[4] !== i || t[5] !== l || t[6] !== m ? (f = function() {
			y({
				chat: n,
				dismissMenu: a,
				mediaSelectionType: i,
				multiple: l,
				onMediaPick: m
			});
		}, t[2] = n, t[3] = a, t[4] = i, t[5] = l, t[6] = m, t[7] = f) : f = t[7];
		var g = f, h;
		return t[8] !== g || t[9] !== _ ? (h = u.jsx(r("WDSMenuItem.react"), {
			testid: "mi-attach-media",
			onPress: g,
			Icon: r("WDSIconIcFilterFilled.react"),
			iconXstyle: c.refreshedIcon,
			title: _
		}), t[8] = g, t[9] = _, t[10] = h) : h = t[10], h;
	}
	l.MediaSelectionType = d, l.AttachMenuPopupItemPhotos = C;
}), 226);
