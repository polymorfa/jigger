__d("MAWSecureComposer.react", [
	"fbt",
	"LSMessagingThreadTypeUtil",
	"MAWLinkPreview.react",
	"MAWSecureComposerText",
	"MAWSecureThreadNonAddressableContactBanner.react",
	"MAWSecureTypingState",
	"MAWSupportedFileTypes",
	"MAWVoiceClipLimit",
	"MWBlockedComposerLogging",
	"MWEditMessageOnUpArrowPlugin.react",
	"MWPReplyContext.react",
	"MWPUseVoiceRecorderV2",
	"MWV2ComposerEditContainer.react",
	"MWV2ComposerReplyView.react",
	"MWV2ComposerView.react",
	"MWVoiceRecordQpl",
	"MessengerMSplitFlag",
	"WebUXLoggingSurfaceContextProvider",
	"emptyFunction",
	"gkx",
	"react",
	"requireDeferred",
	"useCometAlertDialog",
	"useMAWEditMessageData",
	"useMAWSendSecureMessageV2",
	"useMWMediaManager",
	"useMWPComposerEditor",
	"useMWV2FileDropzoneRegisterHandler"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useContext, p = c.useState, _ = r("requireDeferred")("MWChatAudioLog").__setRef("MAWSecureComposer.react"), f = function() {
		return o("MWVoiceRecordQpl").createVoiceRecordQpl({ surface: "secure" });
	}, g = r("gkx")("19021");
	function h() {
		_.onReady(function(e) {
			return e.logClickStartRecording();
		});
	}
	function y() {
		_.onReady(function(e) {
			return e.logBrowserDenyAccess();
		});
	}
	function C(e) {
		var t = e.afterSendMessage, n = t === void 0 ? r("emptyFunction") : t, a = e.isPreviewThread, i = e.thread, l = m(o("MWPReplyContext.react").MWPReplyContext), c = l.reply, _ = r("useMAWEditMessageData")(), C = r("useCometAlertDialog")(), b = d(function() {
			return C({
				body: s._(
					/*BTDS*/
					""
				),
				title: s._(
					/*BTDS*/
					""
				)
			});
		}, [C]), v = r("useMWMediaManager")({
			onUploadFailure: b,
			thread: i
		}), S = v.handleFileRemove, R = v.handleFileSelect, L = v.mediaStaging, E = v.onHdMediaToggled, k = v.resetAttachments, I = r("useMAWSendSecureMessageV2")(i, n, k), T = o("MAWSecureTypingState").useOnTypingStateChanged(i.authorityLevel, i.threadKey, i.threadType);
		r("useMWV2FileDropzoneRegisterHandler")(R);
		var D = p(!1), x = D[0], $ = D[1], P = o("LSMessagingThreadTypeUtil").isArmadilloSecureOneToOne(i.threadType) && g && !r("MessengerMSplitFlag").is_msplit_account;
		o("MWBlockedComposerLogging").useLogMWBlockedComposerReason(i.threadKey, x ? o("MWBlockedComposerLogging").ComposerBlockingReason.ARMADILLO_RECEIVER_NON_ADDRESSABLE_ON_WA : o("MWBlockedComposerLogging").ComposerBlockingReason.NOT_BLOCKED);
		var N = r("useMWPComposerEditor")({
			composerEntrypointForLogging: "MAWSecureComposer.lexical",
			getTextFromEditorState: o("MAWSecureComposerText").getTextFromEditorState,
			isPreviewThread: a,
			mediaStaging: L,
			onSendMessage: I,
			onTypingStateChanged: T,
			threadKey: i.threadKey,
			threadType: i.threadType
		}), M = N.editor, w = N.editorElementRef, A = N.hasStuffToSend, F = N.sendMessage, O = o("MWPUseVoiceRecorderV2").useVoiceRecorder({
			createVoiceRecordQpl: f,
			isSecureThread: !0,
			logBrowserDenyAccess: y,
			logClickStartRecording: h,
			maxDuration: o("MAWVoiceClipLimit").getMAWMaxVoiceClipDurationInSeconds(!0)
		});
		return u.jsx(o("WebUXLoggingSurfaceContextProvider").WebUXLoggingSurfaceContextProvider, {
			value: "secure_composer",
			children: u.jsxs("div", {
				"data-testid": void 0,
				children: [
					c != null ? u.jsx(o("MWV2ComposerReplyView.react").MWV2ComposerReplyView, {
						messageId: c.messageId,
						messageThreadKey: c.threadKey,
						messageTimestamp: c.timestampMs,
						thread: i
					}) : null,
					u.jsx(r("MAWLinkPreview.react"), {
						isReplying: c != null,
						threadKey: i.threadKey,
						threadType: i.threadType
					}),
					u.jsx(r("MAWSecureThreadNonAddressableContactBanner.react"), {
						setHideComposerEditor: $,
						thread: i
					}),
					_ != null && u.jsx(r("MWV2ComposerEditContainer.react"), { editMessageData: _ }),
					x || _ != null ? null : u.jsx(o("MWV2ComposerView.react").MWV2ComposerView, {
						editor: M,
						editorElementRef: w,
						hasStuffToSend: A,
						isAiBotMentionsEnabled: P,
						isMentionsPluginEnabled: !0,
						mediaStaging: L,
						onAttachmentRemoved: S,
						onAttachmentsAdded: R,
						onHdMediaToggled: E,
						onSendMessage: I,
						policyProduct: "messaging_lightswitch",
						sendMessage: F,
						supportedFileTypes: o("MAWSupportedFileTypes").supportedFileTypes,
						surface: "mwp_maw_secure_composer",
						thread: i,
						voiceRecorder: O
					}),
					_ == null && u.jsx(r("MWEditMessageOnUpArrowPlugin.react"), {
						editor: M,
						hasStuffToSend: A,
						thread: i
					})
				]
			})
		});
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = C;
}), 226);
