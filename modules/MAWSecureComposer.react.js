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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(53), n = e.afterSendMessage, a = e.isPreviewThread, i = e.thread, l = n === void 0 ? r("emptyFunction") : n, c = m(o("MWPReplyContext.react").MWPReplyContext), d = c.reply, _ = r("useMAWEditMessageData")(), C = r("useCometAlertDialog")(), b;
		t[0] !== C ? (b = function() {
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
		}, t[0] = C, t[1] = b) : b = t[1];
		var v = b, S;
		t[2] !== v || t[3] !== i ? (S = {
			onUploadFailure: v,
			thread: i
		}, t[2] = v, t[3] = i, t[4] = S) : S = t[4];
		var R = r("useMWMediaManager")(S), L = R.handleFileRemove, E = R.handleFileSelect, k = R.mediaStaging, I = R.onHdMediaToggled, T = R.resetAttachments, D = r("useMAWSendSecureMessageV2")(i, l, T), x = o("MAWSecureTypingState").useOnTypingStateChanged(i.authorityLevel, i.threadKey, i.threadType);
		r("useMWV2FileDropzoneRegisterHandler")(E);
		var $ = p(!1), P = $[0], N = $[1], M;
		t[5] !== i.threadType ? (M = o("LSMessagingThreadTypeUtil").isArmadilloSecureOneToOne(i.threadType) && g && !r("MessengerMSplitFlag").is_msplit_account, t[5] = i.threadType, t[6] = M) : M = t[6];
		var w = M;
		o("MWBlockedComposerLogging").useLogMWBlockedComposerReason(i.threadKey, P ? o("MWBlockedComposerLogging").ComposerBlockingReason.ARMADILLO_RECEIVER_NON_ADDRESSABLE_ON_WA : o("MWBlockedComposerLogging").ComposerBlockingReason.NOT_BLOCKED);
		var A;
		t[7] !== a || t[8] !== k || t[9] !== D || t[10] !== x || t[11] !== i.threadKey || t[12] !== i.threadType ? (A = {
			composerEntrypointForLogging: "MAWSecureComposer.lexical",
			getTextFromEditorState: o("MAWSecureComposerText").getTextFromEditorState,
			isPreviewThread: a,
			mediaStaging: k,
			onSendMessage: D,
			onTypingStateChanged: x,
			threadKey: i.threadKey,
			threadType: i.threadType
		}, t[7] = a, t[8] = k, t[9] = D, t[10] = x, t[11] = i.threadKey, t[12] = i.threadType, t[13] = A) : A = t[13];
		var F = r("useMWPComposerEditor")(A), O = F.editor, B = F.editorElementRef, W = F.hasStuffToSend, q = F.sendMessage, U;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (U = {
			createVoiceRecordQpl: f,
			isSecureThread: !0,
			logBrowserDenyAccess: y,
			logClickStartRecording: h,
			maxDuration: o("MAWVoiceClipLimit").getMAWMaxVoiceClipDurationInSeconds(!0)
		}, t[14] = U) : U = t[14];
		var V = o("MWPUseVoiceRecorderV2").useVoiceRecorder(U), H;
		t[15] !== d || t[16] !== i ? (H = d != null ? u.jsx(o("MWV2ComposerReplyView.react").MWV2ComposerReplyView, {
			messageId: d.messageId,
			messageThreadKey: d.threadKey,
			messageTimestamp: d.timestampMs,
			thread: i
		}) : null, t[15] = d, t[16] = i, t[17] = H) : H = t[17];
		var G = d != null, z;
		t[18] !== G || t[19] !== i.threadKey || t[20] !== i.threadType ? (z = u.jsx(r("MAWLinkPreview.react"), {
			isReplying: G,
			threadKey: i.threadKey,
			threadType: i.threadType
		}), t[18] = G, t[19] = i.threadKey, t[20] = i.threadType, t[21] = z) : z = t[21];
		var j;
		t[22] !== i ? (j = u.jsx(r("MAWSecureThreadNonAddressableContactBanner.react"), {
			setHideComposerEditor: N,
			thread: i
		}), t[22] = i, t[23] = j) : j = t[23];
		var K;
		t[24] !== _ ? (K = _ != null && u.jsx(r("MWV2ComposerEditContainer.react"), { editMessageData: _ }), t[24] = _, t[25] = K) : K = t[25];
		var Q;
		t[26] !== _ || t[27] !== O || t[28] !== B || t[29] !== L || t[30] !== E || t[31] !== W || t[32] !== P || t[33] !== k || t[34] !== I || t[35] !== D || t[36] !== q || t[37] !== w || t[38] !== i || t[39] !== V ? (Q = P || _ != null ? null : u.jsx(o("MWV2ComposerView.react").MWV2ComposerView, {
			editor: O,
			editorElementRef: B,
			hasStuffToSend: W,
			isAiBotMentionsEnabled: w,
			isMentionsPluginEnabled: !0,
			mediaStaging: k,
			onAttachmentRemoved: L,
			onAttachmentsAdded: E,
			onHdMediaToggled: I,
			onSendMessage: D,
			policyProduct: "messaging_lightswitch",
			sendMessage: q,
			supportedFileTypes: o("MAWSupportedFileTypes").supportedFileTypes,
			surface: "mwp_maw_secure_composer",
			thread: i,
			voiceRecorder: V
		}), t[26] = _, t[27] = O, t[28] = B, t[29] = L, t[30] = E, t[31] = W, t[32] = P, t[33] = k, t[34] = I, t[35] = D, t[36] = q, t[37] = w, t[38] = i, t[39] = V, t[40] = Q) : Q = t[40];
		var X;
		t[41] !== _ || t[42] !== O || t[43] !== W || t[44] !== i ? (X = _ == null && u.jsx(r("MWEditMessageOnUpArrowPlugin.react"), {
			editor: O,
			hasStuffToSend: W,
			thread: i
		}), t[41] = _, t[42] = O, t[43] = W, t[44] = i, t[45] = X) : X = t[45];
		var Y;
		return t[46] !== j || t[47] !== K || t[48] !== Q || t[49] !== X || t[50] !== H || t[51] !== z ? (Y = u.jsx(o("WebUXLoggingSurfaceContextProvider").WebUXLoggingSurfaceContextProvider, {
			value: "secure_composer",
			children: u.jsxs("div", {
				"data-testid": void 0,
				children: [
					H,
					z,
					j,
					K,
					Q,
					X
				]
			})
		}), t[46] = j, t[47] = K, t[48] = Q, t[49] = X, t[50] = H, t[51] = z, t[52] = Y) : Y = t[52], Y;
	}
	l.default = C;
}), 226);
