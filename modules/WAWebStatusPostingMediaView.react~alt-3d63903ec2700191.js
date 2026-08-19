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
	"react",
	"useWAWebStatusPrivacySettingConfig"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m = d || (d = o("react")), p = d, _ = p.useEffect, f = p.useRef, g = p.useState;
	function h(t) {
		var n = t.chat, a = t.entryPoint, i = t.forwardedNewsletterMessageInfo, l = t.initCaption, d = t.isNewsletterStatus, p = d === void 0 ? !1 : d, h = t.mediaCollection, C = t.newsletterWid, b = t.onCancel, v = t.onComplete, S = t.onRender, R = t.onSend, L = t.statusAttributions, E = t.statusPosterActionsLogger, k = t.statusPostOrigin, I = o("useWAWebStatusPrivacySettingConfig").useWAWebStatusPrivacySettingConfig(), T = I.audienceTracking, D = I.setStatusPostingPrivacyConfig, x = I.statusPostingPrivacyConfig, $ = I.trackAudienceSelectorClicked, P = f(0), N = g(C != null ? C : null), M = N[0], w = N[1], A = null;
		p ? A = m.jsx(r("WAWebNewsletterStatusSelectorButton.react"), {
			readonly: C != null,
			selectedNewsletterWid: M,
			onNewsletterSelected: w,
			type: "media"
		}) : A = m.jsx(r("WAWebStatusPrivacySettingButton.react"), {
			onAudienceSelectorClicked: $,
			statusPostingPrivacyConfig: x,
			setStatusPostingPrivacyConfig: D,
			type: "media"
		});
		var F = p && M == null;
		_(function() {
			E == null || E.logStatusReadyScreenImp(o("WAWebLogStatusPosterActions").STATUS_CONTENT_TYPE.PHOTO);
		}, [E]);
		var O = function(t) {
			t === void 0 && (t = !0), t && B(), v == null || v(!1), b == null || b(), h.mediaPickerStatsLogger.logCancel(), E == null || E.logComposerXoutTapped(), o("WAWebModalManager").ModalManager.closeMedia();
		}, B = function() {
			n && n.setAttachMediaContents(null);
		}, W = async function(l, d) {
			E == null || E.logPostSendTap(o("WAWebLogStatusPosterActions").STATUS_CONTENT_TYPE.PHOTO);
			var t = n;
			if (M != null && M !== n.id) try {
				var p = await o("WAWebFindChatAction").findOrCreateLatestChat(M, "statusComposeBox");
				t = p.chat;
			} catch (t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
					"Failed to resolve chat for newsletter ",
					": ",
					""
				])), String(M), t).sendLogs("sendStatusMedia-chat-resolution-failed");
				return;
			}
			M == null && (x == null ? void 0 : x.setting) === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList && (x == null ? void 0 : x.allowList.length) === 0 ? o("WAWebModalManager").ModalManager.open(m.jsx(r("WAWebStatusChangePrivacyPopup.react"), {
				statusPostingPrivacyConfig: x,
				setStatusPostingPrivacyConfig: D
			})) : (o("WAWebUiIdleEventBus").UiIdleEventBus.once("ui_idle", function() {
				l.forEach(function(e) {
					var n = e.media, l = {};
					l.type = n.type, l.caption = n.caption, l.addEvenWhilePreparing = n.previewable && n.state === o("WAWebAttachMediaModel").ATTACH_MEDIA_STATE.PROCESSING, M != null && (l.isNewsletterStatus = !0), L != null && (l.statusAttributions = L), i != null && (l.forwardedNewsletterMessageInfo = i), E != null && (l.statusPostFunnelContext = {
						sessionId: E.sessionId,
						entryPoint: a
					});
					var s = P.current, c = M, d = c != null ? r("WAWebNewsletterMetadataCollection").get(c) : null, m = c != null, p = {
						statusPostOrigin: m ? o("WAWebWamEnumStatusPostOrigin").STATUS_POST_ORIGIN.CHANNEL_THREAD_SCREEN : k != null ? k : o("WAWebWamEnumStatusPostOrigin").STATUS_POST_ORIGIN.STATUS_TAB_CAMERA,
						mediaType: o("WAWebLogStatusPost").getStatusMediaType(n.type),
						hasCaption: !!n.caption,
						hasFilters: n.hasFilter,
						isCropped: n.isCropped,
						isNewsletterStatus: m,
						isRotated: n.isRotated,
						isVideoManuallyTrimmed: n.isVideoManuallyTrimmed,
						isVideoMuted: n.isVideoMuted,
						isVideoTrimmed: n.isVideoTrimmed,
						newsletterWid: c != null ? c : void 0,
						perPostStatusPrivacySetting: c == null ? x == null ? void 0 : x.setting : void 0,
						retryCount: s,
						statusAudienceSelectorClicked: T.statusAudienceSelectorClicked,
						statusAudienceSelectorUpdated: T.statusAudienceSelectorUpdated,
						statusAudienceSize: m ? d == null ? void 0 : d.size : y(x)
					};
					n.sendToChat({
						chat: t,
						options: l
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
				}), o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["sendStatusMedia: sent ", " media items to chat"])), l.length), B();
			}), P.current += 1, v == null || v(!0), R == null || R(), h.mediaPickerStatsLogger.logSend({ isViewOnce: !1 }), o("WAWebModalManager").ModalManager.closeMedia(), o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, {
				msg: s._(
					/*BTDS*/
					""
				),
				id: o("WAWebToast.react").genId()
			})));
		};
		return o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(n), m.jsx("div", {
			className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1larqbn xbpklzw x78zum5",
			children: m.jsx(o("WAWebMediaEditorForChatLoadable.react").MediaEditorForChatLoadable, {
				theme: o("WAWebMediaEditorEnumsThemes").MediaTheme.STATUS,
				chat: n,
				onClose: O,
				onRender: S,
				initCaption: l != null ? l : null,
				onSendMedia: W,
				mediaCollection: h,
				sendAsSticker: !1,
				onDropText: r("WAWebNoop"),
				submitAccessory: A,
				isSubmitDisabled: F,
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
