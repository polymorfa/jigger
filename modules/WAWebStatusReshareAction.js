__d("WAWebStatusReshareAction", [
	"fbt",
	"Promise",
	"WALogger",
	"WAWebAttachMediaCollection",
	"WAWebCreateTextStatusFlow.react",
	"WAWebLogStatusPosterActions",
	"WAWebMediaInMemoryBlobCache",
	"WAWebMediaOpaqueData",
	"WAWebModalManager",
	"WAWebMsgGetters",
	"WAWebMsgType",
	"WAWebNewsletterMetadataCollection",
	"WAWebProtobufsStatusAttributions.pb",
	"WAWebStatusJidUtils",
	"WAWebStatusPosterActionsLogger",
	"WAWebStatusPostingMediaView.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebWamEnumMediaPickerOriginType",
	"WAWebWamEnumStatusPostOrigin",
	"WAWebWamEnumWebcRmrReasonCode",
	"WAWebWidFactory",
	"asyncToGeneratorRuntime",
	"err",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react"));
	function m(e) {
		var t, n, a = (t = e.mediaData) == null ? void 0 : t.mediaBlob;
		return a instanceof r("WAWebMediaOpaqueData") ? a.forceToBlob() : ((n = e.mediaData) == null ? void 0 : n.filehash) != null ? o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(e.mediaData.filehash) : null;
	}
	function p(e) {
		return _.apply(this, arguments);
	}
	function _() {
		return _ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			return new (u || (u = (n("Promise"))))(function(t, n) {
				var o = document.createElement("video");
				o.muted = !0, o.playsInline = !0;
				var a = URL.createObjectURL(e);
				o.src = a, o.onloadedmetadata = function() {
					var e = o.captureStream();
					for (var i of e.getAudioTracks()) e.removeTrack(i);
					var l = [], s = new MediaRecorder(e, { mimeType: "video/mp4" });
					s.ondataavailable = function(e) {
						e.data.size > 0 && l.push(e.data);
					}, s.onstop = function() {
						URL.revokeObjectURL(a), t(new Blob(l, { type: "video/mp4" }));
					}, s.onerror = function() {
						URL.revokeObjectURL(a), n(r("err")("Failed to strip audio from video"));
					}, s.start(), o.playbackRate = 16, o.play().catch(function(e) {
						URL.revokeObjectURL(a), n(e);
					}), o.onended = function() {
						s.stop();
					};
				}, o.onerror = function() {
					URL.revokeObjectURL(a), n(r("err")("Failed to load video for audio stripping"));
				};
			});
		}), _.apply(this, arguments);
	}
	function f(e) {
		return g.apply(this, arguments);
	}
	function g() {
		return g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t, n = e.blobData, r = e.blobType, a = e.hasMusicAttribution, i = e.msg, l = i.type === o("WAWebMsgType").MSG_TYPE.VIDEO ? "video/mp4" : "image/jpeg", s = r || ((t = i.mediaData) == null ? void 0 : t.mimetype) || l, u = new Blob([n], { type: s });
			if (a && i.type === o("WAWebMsgType").MSG_TYPE.VIDEO) try {
				u = yield p(u);
			} catch (e) {}
			var c = i.type === o("WAWebMsgType").MSG_TYPE.VIDEO ? ".mp4" : ".jpg", d = "reshared-media" + c, m = new File([u], d, { type: s });
			return {
				file: m,
				filename: d,
				mimetype: s
			};
		}), g.apply(this, arguments);
	}
	function h(e) {
		var t = [{
			type: o("WAWebProtobufsStatusAttributions.pb").StatusAttribution$Type.RESHARE,
			statusReshare: {
				source: o("WAWebProtobufsStatusAttributions.pb").StatusAttribution$StatusReshare$Source.INTERNAL_RESHARE,
				metadata: { hasMultipleReshares: !1 }
			}
		}], n = e.id.remote, r = e.serverId;
		return o("WAWebMsgGetters").getIsNewsletterStatus(e) && r != null && n.isNewsletter() && t.push({
			type: o("WAWebProtobufsStatusAttributions.pb").StatusAttribution$Type.RESHARE,
			statusReshare: {
				source: o("WAWebProtobufsStatusAttributions.pb").StatusAttribution$StatusReshare$Source.CHANNEL_RESHARE,
				metadata: {
					channelJid: o("WAWebWidFactory").asNewsletterWidOrThrow(n).toString(),
					channelMessageId: r
				}
			}
		}), t;
	}
	function y(e) {
		var t, n = e.id.remote, a = e.serverId;
		return !o("WAWebMsgGetters").getIsNewsletterStatus(e) || a == null || !n.isNewsletter() ? null : {
			newsletterId: o("WAWebWidFactory").asNewsletterWidOrThrow(n),
			serverMessageId: a,
			newsletterName: (t = r("WAWebNewsletterMetadataCollection").get(n)) == null ? void 0 : t.name
		};
	}
	function C(e, t, n, r, o) {
		return b.apply(this, arguments);
	}
	function b() {
		return b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, a, i) {
			var l;
			try {
				var s;
				(s = e.mediaData) != null && s.mediaBlob || (yield e.downloadMedia({
					downloadEvenIfExpensive: !0,
					rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.SEND_TO_CHAT,
					isUserInitiated: !0
				}));
			} catch (e) {
				return !1;
			}
			var u = m(e);
			if (u == null) return !1;
			var c = yield u.arrayBuffer(), p = yield f({
				blobData: c,
				blobType: u.type,
				hasMusicAttribution: n,
				msg: e
			}), _ = p.file, g = p.filename, h = p.mimetype, y = o("WAWebStatusJidUtils").getStatusChat(), C = (l = e.caption) != null ? l : null, b = new (r("WAWebAttachMediaCollection"))({ chatParticipantCount: y.getParticipantCount() });
			y.setAttachMediaContents(b);
			var v = {
				file: _,
				filename: g,
				mimetype: h
			}, S = function() {
				var e = y.attachMediaContents;
				e != null && e.processAttachmentsForChat([v], o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE.STATUS_TAB_CAMERA_PHOTO_LIBRARY, y);
			};
			return o("WAWebModalManager").ModalManager.openMedia(d.jsx(r("WAWebStatusPostingMediaView.react"), {
				chat: y,
				entryPoint: o("WAWebLogStatusPosterActions").STATUS_CREATION_ENTRY_POINT.STATUS_POST_RESHARE,
				initCaption: C != null ? { text: C } : null,
				mediaCollection: b,
				onRender: S,
				statusPostOrigin: o("WAWebWamEnumStatusPostOrigin").STATUS_POST_ORIGIN.STATUS_RESHARE,
				statusAttributions: t,
				forwardedNewsletterMessageInfo: a,
				statusPosterActionsLogger: new (o("WAWebStatusPosterActionsLogger")).StatusPosterActionsLogger(i)
			}), { transition: "status-modal" }), !0;
		}), b.apply(this, arguments);
	}
	var v = [
		o("WAWebMsgType").MSG_TYPE.CHAT,
		o("WAWebMsgType").MSG_TYPE.IMAGE,
		o("WAWebMsgType").MSG_TYPE.VIDEO
	];
	function S(e) {
		return v.includes(e);
	}
	function R(e) {
		return L.apply(this, arguments);
	}
	function L() {
		return L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var n, a, i = (n = t.statusAttributions) != null ? n : [], l = i.some(function(e) {
				return e.type === o("WAWebProtobufsStatusAttributions.pb").StatusAttribution$Type.MUSIC;
			}), u = i.filter(function(e) {
				return e.type !== o("WAWebProtobufsStatusAttributions.pb").StatusAttribution$Type.RESHARE && e.type !== o("WAWebProtobufsStatusAttributions.pb").StatusAttribution$Type.MUSIC && e.type !== o("WAWebProtobufsStatusAttributions.pb").StatusAttribution$Type.STATUS_CLOSE_SHARING && e.type !== o("WAWebProtobufsStatusAttributions.pb").StatusAttribution$Type.STATUS_MENTION && e.type !== o("WAWebProtobufsStatusAttributions.pb").StatusAttribution$Type.NEWSLETTER_STATUS;
			}), c = [].concat(u, h(t)), m = y(t), p = o("WAWebLogStatusPosterActions").createStatusPostingSessionId();
			o("WAWebStatusPosterActionsLogger").logStatusEntrypointTap(o("WAWebLogStatusPosterActions").STATUS_CREATION_ENTRY_POINT.STATUS_POST_RESHARE, p);
			var _ = !1;
			switch (t.type) {
				case o("WAWebMsgType").MSG_TYPE.CHAT:
					o("WAWebModalManager").ModalManager.openMedia(d.jsx(r("WAWebCreateTextStatusFlow.react"), {
						entryPoint: o("WAWebLogStatusPosterActions").STATUS_CREATION_ENTRY_POINT.STATUS_POST_RESHARE,
						statusPostingSessionId: p,
						initialText: (a = t.body) != null ? a : "",
						initialColor: t.backgroundColor,
						initialFont: t.font,
						statusAttributions: c,
						forwardedNewsletterMessageInfo: m
					}), { transition: "status-modal" }), _ = !0;
					break;
				case o("WAWebMsgType").MSG_TYPE.IMAGE:
				case o("WAWebMsgType").MSG_TYPE.VIDEO:
					_ = yield C(t, c, l, m, p);
					break;
				case o("WAWebMsgType").MSG_TYPE.ALBUM:
				case o("WAWebMsgType").MSG_TYPE.AUDIO:
				case o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE:
				case o("WAWebMsgType").MSG_TYPE.BIZ_CONTENT_PLACEHOLDER:
				case o("WAWebMsgType").MSG_TYPE.BIZ_COVER_PHOTO:
				case o("WAWebMsgType").MSG_TYPE.BROADCAST_NOTIFICATION:
				case o("WAWebMsgType").MSG_TYPE.BUTTONS_RESPONSE:
				case o("WAWebMsgType").MSG_TYPE.CALL_LOG:
				case o("WAWebMsgType").MSG_TYPE.CIPHERTEXT:
				case o("WAWebMsgType").MSG_TYPE.COMMENT:
				case o("WAWebMsgType").MSG_TYPE.DEBUG:
				case o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER:
				case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
				case o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION:
				case o("WAWebMsgType").MSG_TYPE.EVENT_CREATION:
				case o("WAWebMsgType").MSG_TYPE.EVENT_EDIT_ENCRYPTED:
				case o("WAWebMsgType").MSG_TYPE.EVENT_RESPONSE:
				case o("WAWebMsgType").MSG_TYPE.GP2:
				case o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE:
				case o("WAWebMsgType").MSG_TYPE.GUEST_UPSELL_SYSTEM_MSG:
				case o("WAWebMsgType").MSG_TYPE.HISTORY_BUNDLE:
				case o("WAWebMsgType").MSG_TYPE.HSM:
				case o("WAWebMsgType").MSG_TYPE.INTERACTIVE:
				case o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE:
				case o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT:
				case o("WAWebMsgType").MSG_TYPE.LIST:
				case o("WAWebMsgType").MSG_TYPE.LIST_RESPONSE:
				case o("WAWebMsgType").MSG_TYPE.LOADING_MEDIA:
				case o("WAWebMsgType").MSG_TYPE.LOCATION:
				case o("WAWebMsgType").MSG_TYPE.MESSAGE_EDIT_ENCRYPTED:
				case o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE:
				case o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_NOTICE:
				case o("WAWebMsgType").MSG_TYPE.MULTI_VCARD:
				case o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW:
				case o("WAWebMsgType").MSG_TYPE.NEWSLETTER_ADMIN_INVITE:
				case o("WAWebMsgType").MSG_TYPE.NEWSLETTER_FOLLOWER_INVITE:
				case o("WAWebMsgType").MSG_TYPE.NEWSLETTER_NOTIFICATION:
				case o("WAWebMsgType").MSG_TYPE.NEWSLETTER_QUESTION_RESPONSE:
				case o("WAWebMsgType").MSG_TYPE.NOTIFICATION:
				case o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE:
				case o("WAWebMsgType").MSG_TYPE.ORDER:
				case o("WAWebMsgType").MSG_TYPE.OVERSIZED:
				case o("WAWebMsgType").MSG_TYPE.PAYMENT:
				case o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE:
				case o("WAWebMsgType").MSG_TYPE.PINNED_MESSAGE:
				case o("WAWebMsgType").MSG_TYPE.POLL_ADD_OPTION_DECRYPTED:
				case o("WAWebMsgType").MSG_TYPE.POLL_ADD_OPTION_ENCRYPTED:
				case o("WAWebMsgType").MSG_TYPE.POLL_CREATION:
				case o("WAWebMsgType").MSG_TYPE.POLL_EDIT_ENCRYPTED:
				case o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT:
				case o("WAWebMsgType").MSG_TYPE.POLL_UPDATE:
				case o("WAWebMsgType").MSG_TYPE.PRODUCT:
				case o("WAWebMsgType").MSG_TYPE.PROTOCOL:
				case o("WAWebMsgType").MSG_TYPE.PTT:
				case o("WAWebMsgType").MSG_TYPE.PTV:
				case o("WAWebMsgType").MSG_TYPE.QUARANTINED:
				case o("WAWebMsgType").MSG_TYPE.REACTION:
				case o("WAWebMsgType").MSG_TYPE.REACTION_ENC:
				case o("WAWebMsgType").MSG_TYPE.REQUEST_PHONE_NUMBER:
				case o("WAWebMsgType").MSG_TYPE.REVOKED:
				case o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE:
				case o("WAWebMsgType").MSG_TYPE.STATUS:
				case o("WAWebMsgType").MSG_TYPE.STATUS_NOTIFICATION:
				case o("WAWebMsgType").MSG_TYPE.STICKER:
				case o("WAWebMsgType").MSG_TYPE.STICKER_PACK:
				case o("WAWebMsgType").MSG_TYPE.TEMPLATE_BUTTON_REPLY:
				case o("WAWebMsgType").MSG_TYPE.UNKNOWN:
				case o("WAWebMsgType").MSG_TYPE.VCARD:
				default:
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[StatusReshare] unexpected msg type for reshare: ", ""])), t.type).sendLogs("status-reshare-unexpected-type");
					break;
			}
			l && _ && o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) }));
		}), L.apply(this, arguments);
	}
	l.isReshareableStatusType = S, l.openStatusReshareComposer = R;
}), 226);
