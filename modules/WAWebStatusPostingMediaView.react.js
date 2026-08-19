__d("WAWebStatusPostingMediaView.react", [
	"fbt",
	"WALogger",
	"WAWebAttachMediaModel",
	"WAWebFindChatAction",
	"WAWebLogStatusPost",
	"WAWebLogStatusPosterActions",
	"WAWebMediaEditorEnumsThemes",
	"WAWebMediaEditorForChatLoadable.react",
	"WAWebModalManager",
	"WAWebMsgGetters",
	"WAWebNewsletterMetadataCollection",
	"WAWebNewsletterStatusSelectorButton.react",
	"WAWebNoop",
	"WAWebPrepareMessageSendingAction",
	"WAWebStatusChangePrivacyPopup.react",
	"WAWebStatusPrivacySettingButton.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUiIdleEventBus",
	"WAWebUserPrefsStatusType",
	"WAWebWamEnumStatusPostOrigin",
	"WAWebWamEnumStatusPostResult",
	"asyncToGeneratorRuntime",
	"react",
	"useWAWebStatusPrivacySettingConfig"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m = d || (d = o("react")), p = d, _ = p.useEffect, f = p.useRef, g = p.useState;
	function h(t) {
		var a = t.chat, i = t.entryPoint, l = t.forwardedNewsletterMessageInfo, d = t.initCaption, p = t.isNewsletterStatus, h = p === void 0 ? !1 : p, C = t.mediaCollection, b = t.newsletterWid, v = t.onCancel, S = t.onComplete, R = t.onRender, L = t.onSend, E = t.statusAttributions, k = t.statusPosterActionsLogger, I = t.statusPostOrigin, T = o("useWAWebStatusPrivacySettingConfig").useWAWebStatusPrivacySettingConfig(), D = T.audienceTracking, x = T.setStatusPostingPrivacyConfig, $ = T.statusPostingPrivacyConfig, P = T.trackAudienceSelectorClicked, N = f(0), M = g(b != null ? b : null), w = M[0], A = M[1], F = null;
		h ? F = m.jsx(r("WAWebNewsletterStatusSelectorButton.react"), {
			readonly: b != null,
			selectedNewsletterWid: w,
			onNewsletterSelected: A,
			type: "media"
		}) : F = m.jsx(r("WAWebStatusPrivacySettingButton.react"), {
			onAudienceSelectorClicked: P,
			statusPostingPrivacyConfig: $,
			setStatusPostingPrivacyConfig: x,
			type: "media"
		});
		var O = h && w == null;
		_(function() {
			k == null || k.logStatusReadyScreenImp(o("WAWebLogStatusPosterActions").STATUS_CONTENT_TYPE.PHOTO);
		}, [k]);
		var B = function(t) {
			t === void 0 && (t = !0), t && W(), S == null || S(!1), v == null || v(), C.mediaPickerStatsLogger.logCancel(), k == null || k.logComposerXoutTapped(), o("WAWebModalManager").ModalManager.closeMedia();
		}, W = function() {
			a && a.setAttachMediaContents(null);
		}, q = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
				k == null || k.logPostSendTap(o("WAWebLogStatusPosterActions").STATUS_CONTENT_TYPE.PHOTO);
				var d = a;
				if (w != null && w !== a.id) try {
					var p = yield o("WAWebFindChatAction").findOrCreateLatestChat(w, "statusComposeBox");
					d = p.chat;
				} catch (t) {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
						"Failed to resolve chat for newsletter ",
						": ",
						""
					])), String(w), t).sendLogs("sendStatusMedia-chat-resolution-failed");
					return;
				}
				w == null && ($ == null ? void 0 : $.setting) === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList && ($ == null ? void 0 : $.allowList.length) === 0 ? o("WAWebModalManager").ModalManager.open(m.jsx(r("WAWebStatusChangePrivacyPopup.react"), {
					statusPostingPrivacyConfig: $,
					setStatusPostingPrivacyConfig: x
				})) : (o("WAWebUiIdleEventBus").UiIdleEventBus.once("ui_idle", function() {
					t.forEach(function(e) {
						var t = e.media, n = {};
						n.type = t.type, n.caption = t.caption, n.addEvenWhilePreparing = t.previewable && t.state === o("WAWebAttachMediaModel").ATTACH_MEDIA_STATE.PROCESSING, w != null && (n.isNewsletterStatus = !0), E != null && (n.statusAttributions = E), l != null && (n.forwardedNewsletterMessageInfo = l), k != null && (n.statusPostFunnelContext = {
							sessionId: k.sessionId,
							entryPoint: i
						});
						var a = N.current, s = w, c = s != null ? r("WAWebNewsletterMetadataCollection").get(s) : null, m = s != null, p = {
							statusPostOrigin: m ? o("WAWebWamEnumStatusPostOrigin").STATUS_POST_ORIGIN.CHANNEL_THREAD_SCREEN : I != null ? I : o("WAWebWamEnumStatusPostOrigin").STATUS_POST_ORIGIN.STATUS_TAB_CAMERA,
							mediaType: o("WAWebLogStatusPost").getStatusMediaType(t.type),
							hasCaption: !!t.caption,
							hasFilters: t.hasFilter,
							isCropped: t.isCropped,
							isNewsletterStatus: m,
							isRotated: t.isRotated,
							isVideoManuallyTrimmed: t.isVideoManuallyTrimmed,
							isVideoMuted: t.isVideoMuted,
							isVideoTrimmed: t.isVideoTrimmed,
							newsletterWid: s != null ? s : void 0,
							perPostStatusPrivacySetting: s == null ? $ == null ? void 0 : $.setting : void 0,
							retryCount: a,
							statusAudienceSelectorClicked: D.statusAudienceSelectorClicked,
							statusAudienceSelectorUpdated: D.statusAudienceSelectorUpdated,
							statusAudienceSize: m ? c == null ? void 0 : c.size : y($)
						};
						t.sendToChat({
							chat: d,
							options: n
						}).then(function(e) {
							var t, n, r, a, i = e.msg ? o("WAWebMsgGetters").isStatusWithMusic(e.msg) : !1, l = (t = (n = e.msg) == null || (n = n.contextInfo) == null || (n = n.statusAttributions) == null ? void 0 : n.some(function(e) {
								return e.statusReshare != null;
							})) != null ? t : !1;
							o("WAWebLogStatusPost").logStatusPost(babelHelpers.extends({
								statusPostResult: o("WAWebLogStatusPost").getStatusPostResult(e.messageSendResult),
								msg: e.msg,
								newsletterStatusId: m && (r = (a = e.msg) == null ? void 0 : a.serverId) != null ? r : void 0,
								statusContainsMusic: i,
								isReshare: l
							}, p));
						}).catch(function(e) {
							o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Media status posting failed with error ", ""])), e).sendLogs("sendStatusMedia-failed", { sampling: .01 }), o("WAWebLogStatusPost").logStatusPost(babelHelpers.extends({ statusPostResult: o("WAWebWamEnumStatusPostResult").STATUS_POST_RESULT.ERROR_UNKNOWN }, p));
						});
					}), o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["sendStatusMedia: sent ", " media items to chat"])), t.length), W();
				}), N.current += 1, S == null || S(!0), L == null || L(), C.mediaPickerStatsLogger.logSend({ isViewOnce: !1 }), o("WAWebModalManager").ModalManager.closeMedia(), o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, {
					msg: s._(
						/*BTDS*/
						""
					),
					id: o("WAWebToast.react").genId()
				})));
			});
			return function(n, r) {
				return t.apply(this, arguments);
			};
		})();
		return o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(a), m.jsx("div", {
			className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1larqbn xbpklzw x78zum5",
			children: m.jsx(o("WAWebMediaEditorForChatLoadable.react").MediaEditorForChatLoadable, {
				theme: o("WAWebMediaEditorEnumsThemes").MediaTheme.STATUS,
				chat: a,
				onClose: B,
				onRender: R,
				initCaption: d != null ? d : null,
				onSendMedia: q,
				mediaCollection: C,
				sendAsSticker: !1,
				onDropText: r("WAWebNoop"),
				submitAccessory: F,
				isSubmitDisabled: O,
				tsNavigationData: { surface: "status-composer-media" }
			})
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		if (e != null) switch (e.setting) {
			case o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList: return e.allowList.length;
			case o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList: return e.denyList.length;
			default: return;
		}
	}
	l.default = h;
}), 226);
