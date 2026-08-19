__d("WAWebPttComposerRecordingSession", [
	"fbt",
	"invariant",
	"WAAbortError",
	"WALogger",
	"WAMediaCalculateFilehash",
	"WAPromiseRaceAbort",
	"WAPttComposerRecorder",
	"WAPttComposerScaleWaveform",
	"WARandomHex",
	"WAWebAppTracker",
	"WAWebBaseModel",
	"WAWebBotProfileCollection",
	"WAWebBotUtils",
	"WAWebCallCollection",
	"WAWebConfirmPopup.react",
	"WAWebCreateMediaUploadMetrics",
	"WAWebCryptoRandomMediaKey",
	"WAWebFrontendChatGetters",
	"WAWebGetUserMediaErrors",
	"WAWebGuidePopup.react",
	"WAWebMedia",
	"WAWebMediaCapture",
	"WAWebMediaCaptureStreamType",
	"WAWebMediaGetUploadOriginForChat",
	"WAWebMediaHosts",
	"WAWebMediaLoad",
	"WAWebMediaOpaqueData",
	"WAWebMmsClientUploadStreamer",
	"WAWebMmsMediaTypes",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebPresenceChatAction",
	"WAWebPresenceCollection",
	"WAWebPttAudioChannels",
	"WAWebPttAudioManager",
	"WAWebPttComposerRecordingSessionGetters",
	"WAWebPttComposerRecordingStopReason",
	"WAWebPttComposerStreamingEncryptor",
	"WAWebPttDailyUtils",
	"WAWebPttWamEvent",
	"WAWebRecordingSessionStateEnum",
	"WAWebStartMediaUploadQpl",
	"WAWebTimeSpentLoggingExternal",
	"WAWebUploadStreamerRefactorGatingUtils",
	"WAWebWamEnumPttResultType",
	"WAWebWamEnumPttSourceType",
	"WAWebWamEnumTsExternalEventSource",
	"WAWebWamMediaMetricUtils",
	"err",
	"getErrorSafe",
	"nullthrows",
	"react"
], (function(t, n, r, o, a, i, l, s, u) {
	var e, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x, $, P, N, M, w = M || (M = o("react")), A = 1, F = 8.5, O = 64, B = (function(t) {
		function n() {
			for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
			return e = t.call.apply(t, [this].concat(r)) || this, e.id = o("WAWebBaseModel").prop(), e.duration = o("WAWebBaseModel").prop(0), e.exceedsMinDuration = o("WAWebBaseModel").prop(!1), e.isViewOnce = o("WAWebBaseModel").prop(!1), e.recordingState = o("WAWebBaseModel").prop(o("WAWebRecordingSessionStateEnum").RecordingSessionState.NOT_STARTED), e._hasStreamingUploadFailed = o("WAWebBaseModel").prop(!1), e._draftPreviewSeen = o("WAWebBaseModel").prop(!1), e._draftPlayCount = o("WAWebBaseModel").prop(0), e._draftSeekCount = o("WAWebBaseModel").prop(0), e._pauseCount = o("WAWebBaseModel").prop(0), babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
		}
		babelHelpers.inheritsLoose(n, t);
		var a = n.prototype;
		return a.initialize = function() {
			var e = this;
			t.prototype.initialize.call(this);
			var n = null;
			this.on("change:recordingState", function() {
				e._endTsExternalEvent == null || e._endTsExternalEvent(), e._chat != null && (o("WAWebPttComposerRecordingSessionGetters").getIsRecording(e) ? (n = o("WAWebPttAudioChannels").MainAudioChannel.claim(e, function() {
					e.pause();
				}), o("WAWebPresenceChatAction").markRecording(e._chat), e._endTsExternalEvent = o("WAWebTimeSpentLoggingExternal").beginTsExternalEvent(o("WAWebWamEnumTsExternalEventSource").TS_EXTERNAL_EVENT_SOURCE.PTT_RECORD)) : (n == null || n(), o("WAWebPresenceChatAction").markPaused(e._chat)));
			});
		}, a.start = async function() {
			var t = this;
			switch (this.recordingState) {
				case o("WAWebRecordingSessionStateEnum").RecordingSessionState.NOT_STARTED: break;
				case o("WAWebRecordingSessionStateEnum").RecordingSessionState.RECORDING: return !0;
				case o("WAWebRecordingSessionStateEnum").RecordingSessionState.PAUSED: return this.resume();
				case o("WAWebRecordingSessionStateEnum").RecordingSessionState.STOPPED:
				case o("WAWebRecordingSessionStateEnum").RecordingSessionState.ERROR: throw r("err")("Can't start recording from state " + this.recordingState);
			}
			this._uploadQpl = o("WAWebStartMediaUploadQpl").startMediaUploadQpl({
				entryPoint: "PttStreamingUpload",
				mediaType: o("WAWebMmsMediaTypes").MEDIA_TYPES.PTT,
				isStreamingUpload: !0
			});
			var n = r("WAWebCreateMediaUploadMetrics")({
				type: o("WAWebMmsMediaTypes").MEDIA_TYPES.PTT,
				uploadOrigin: r("WAWebMediaGetUploadOriginForChat")(this._chat),
				userUploadAttemptCount: 0,
				forwardedFromWeb: !1,
				isViewOnce: !1,
				uploadQpl: this._uploadQpl
			}), a = n.handleEncryptionStart, i = n.handleEncryptionSuccess, l = n.handleSendMessageStart, s = n.handleStreamUploadStart, u = n.handleUploadAttemptError, f = n.handleUploadAttemptSuccess, g = n.handleUploadError, h = n.handleUploadHostFound, y = n.handleUploadProgress, C = n.handleUploadSuccess;
			this._handleSendMessageStart = l;
			try {
				if (o("WAWebUploadStreamerRefactorGatingUtils").isUploadStreamerRefactorEnabled()) {
					var b = r("WAWebCryptoRandomMediaKey")();
					this._earlyUploadPromise = new Promise(function(e) {
						t._resolveEarlyUploadPromise = e;
					});
					var v = new AbortController();
					this._uploaderAbortController = v;
					var S = await o("WAMediaCalculateFilehash").getRandomFilehash(), R = new (o("WAWebMmsClientUploadStreamer")).UploadStreamer({
						encFilehash: S,
						token: S,
						type: o("WAWebMmsMediaTypes").MEDIA_TYPES.PTT,
						signal: v.signal,
						byteOffset: 0,
						onUploadHostFound: h,
						onUploadAttemptSuccess: f,
						onUploadAttemptError: u,
						onProgress: function(t, n) {
							y(t.loaded + n);
						},
						onStreamUploadStart: s,
						mediaId: o("WAWebWamMediaMetricUtils").generateMediaEventId()
					}, o("WAWebMediaHosts").mediaHosts);
					R.startUploadFromClient(), this._encryptor = await o("WAWebPttComposerStreamingEncryptor").createStreamingEncryptor({
						mediaKey: b.key,
						onChunkEncrypted: async function(a) {
							try {
								await R.uploadChunkFromClient(a);
							} catch (a) {
								var n = r("getErrorSafe")(a);
								if (t._resolveEarlyUploadPromise == null || t._resolveEarlyUploadPromise(null), t._hasStreamingUploadFailed = !0, n.name === o("WAAbortError").ABORT_ERROR) return;
								o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["onChunkEncrypted: ptt-streaming-upload-error"]))).catching(n), o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["PTT Streaming Upload cancelled due to a problem uploading"]))).sendLogs("ptt-streaming-upload-failed"), g(n);
							}
						},
						onEncryptionCompleted: async function(n, a) {
							i();
							try {
								await R.uploadChunkFromClient(new Uint8Array(n));
								var e = await R.finalizeUploadFromClient(a);
								t._resolveEarlyUploadPromise == null || t._resolveEarlyUploadPromise({
									directPath: e.directPath,
									mediaKey: b.key,
									mediaKeyTimestamp: b.timestamp,
									encFilehash: a,
									url: e.url
								}), C();
							} catch (e) {
								var l = r("getErrorSafe")(e);
								if (t._resolveEarlyUploadPromise == null || t._resolveEarlyUploadPromise(null), t._hasStreamingUploadFailed = !0, l.name === o("WAAbortError").ABORT_ERROR) return;
								o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["onEncryptionCompleted: ptt-streaming-upload-error"]))).catching(l), o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["PTT Streaming Upload cancelled due to a problem when finalizing upload"]))).sendLogs("ptt-streaming-upload-failed"), g(l);
							}
						}
					});
				}
			} catch (e) {
				var L;
				throw (L = this._uploadQpl) == null || L.endFailWithError("upload_setup_failed", r("getErrorSafe")(e).message), this._uploadQpl = null, e;
			}
			try {
				var E, k = !0;
				this._recorder = new (r("WAPttComposerRecorder"))({
					createStream: V,
					waveformSampleRate: this.getWaveformSampleRate(),
					onDuration: function(n) {
						t.duration = n, t.exceedsMinDuration = n >= A;
					},
					onPage: function(n, r) {
						if (!(!o("WAWebUploadStreamerRefactorGatingUtils").isUploadStreamerRefactorEnabled() || t._hasStreamingUploadFailed)) try {
							var e;
							k && (a(), k = !1), (e = t._encryptor) == null || e.encryptChunk(n, r);
						} catch (e) {
							o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["PTT Streaming Upload cancelled due to a problem encrypting"]))), t._resolveEarlyUploadPromise == null || t._resolveEarlyUploadPromise(null), t._hasStreamingUploadFailed = !0;
						}
					}
				});
				var I = await this._recorder.start();
				if (I) return this.recordingState = o("WAWebRecordingSessionStateEnum").RecordingSessionState.RECORDING, o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.RecordPTT), o("WAWebPresenceCollection").PresenceCollection.update(this._chat.presence.id), o("WAWebPttDailyUtils").incrementPttDailyCount(o("WAWebPttDailyUtils").PttDailyCountKind.RECORD, r("nullthrows")(o("WAWebFrontendChatGetters").getKind(this._chat))), !0;
				(E = this._uploadQpl) == null || E.endFailWithError("recording_failed", "recorder_did_not_start"), this._uploadQpl = null;
			} catch (e) {
				var T;
				(T = this._uploadQpl) == null || T.endFailWithError("recording_failed", r("getErrorSafe")(e).message), this._uploadQpl = null, o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["PTT Recording Error"]))).catching(r("getErrorSafe")(e));
			}
			return this._endSession(), this.recordingState = o("WAWebRecordingSessionStateEnum").RecordingSessionState.ERROR, !1;
		}, a.getLiveWaveformSamples = function() {
			var e, t;
			return (e = (t = this._recorder) == null ? void 0 : t.getLiveWaveformSamples()) != null ? e : [];
		}, a.getCorrectedWaveformSamples = function() {
			var e, t;
			return (e = (t = this._recorder) == null ? void 0 : t.getCorrectedWaveformSamples()) != null ? e : [];
		}, a.getScaledWaveformSamples = function() {
			return r("WAPttComposerScaleWaveform")(this.getCorrectedWaveformSamples(), O).map(function(e) {
				return Math.floor(e * 100);
			});
		}, a.getPreciseDuration = function() {
			var e, t;
			return (e = (t = this._recorder) == null ? void 0 : t.getPreciseDuration()) != null ? e : 0;
		}, a._endSession = function() {
			var e;
			(e = this._recorder) == null || e.stop();
		}, a._endUploadQpl = function(t) {
			if (this._uploadQpl != null) {
				var e = this._uploadQpl;
				this._uploadQpl = null, t === o("WAWebPttComposerRecordingStopReason").RecordingSessionStopReason.SENT ? this._hasStreamingUploadFailed ? e.endFailWithError("upload_failed", "streaming_upload_failed") : e.endSuccess() : t === o("WAWebPttComposerRecordingStopReason").RecordingSessionStopReason.PTT_TOO_SHORT ? e.endFailWithError("upload_canceled", "ptt_too_short") : t === o("WAWebPttComposerRecordingStopReason").RecordingSessionStopReason.CANCEL_BUTTON ? e.endFailWithError("upload_canceled", "aborted") : e.endFailWithError("upload_canceled", "other");
			}
		}, a.pause = function() {
			if (this.recordingState === o("WAWebRecordingSessionStateEnum").RecordingSessionState.RECORDING) {
				if (!this.exceedsMinDuration) {
					this.stop(o("WAWebPttComposerRecordingStopReason").RecordingSessionStopReason.PTT_TOO_SHORT);
					return;
				}
				this.recordingState = o("WAWebRecordingSessionStateEnum").RecordingSessionState.PAUSED, o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.RecordPTT);
				var e = r("nullthrows")(this._recorder);
				e.pause();
			}
		}, a.resume = async function() {
			switch (this.recordingState) {
				case o("WAWebRecordingSessionStateEnum").RecordingSessionState.RECORDING: return !0;
				case o("WAWebRecordingSessionStateEnum").RecordingSessionState.PAUSED: break;
				case o("WAWebRecordingSessionStateEnum").RecordingSessionState.NOT_STARTED:
				case o("WAWebRecordingSessionStateEnum").RecordingSessionState.STOPPED:
				case o("WAWebRecordingSessionStateEnum").RecordingSessionState.ERROR: throw r("err")("Can't resume recording from state " + this.recordingState);
			}
			this.recordingState = o("WAWebRecordingSessionStateEnum").RecordingSessionState.RECORDING;
			try {
				var e = r("nullthrows")(this._recorder), t = await e.resume();
				return t ? (o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.RecordPTT), !0) : (this.recordingState = o("WAWebRecordingSessionStateEnum").RecordingSessionState.PAUSED, !1);
			} catch (e) {
				return this.recordingState = o("WAWebRecordingSessionStateEnum").RecordingSessionState.ERROR, o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose(["Error resuming recording session"]))).catching(r("getErrorSafe")(e)), !1;
			}
		}, a.stop = function(t) {
			if (this.recordingState !== o("WAWebRecordingSessionStateEnum").RecordingSessionState.STOPPED && (this.recordingState = o("WAWebRecordingSessionStateEnum").RecordingSessionState.STOPPED, o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.RecordPTT), this._endSession(), this._endUploadQpl(t), this._recorder != null)) {
				t === o("WAWebPttComposerRecordingStopReason").RecordingSessionStopReason.SENT ? o("WAWebPttDailyUtils").incrementPttDailyCount(o("WAWebPttDailyUtils").PttDailyCountKind.SEND, r("nullthrows")(o("WAWebFrontendChatGetters").getKind(this._chat))) : this.duration > A && o("WAWebPttDailyUtils").incrementPttDailyCount(o("WAWebPttDailyUtils").PttDailyCountKind.CANCEL, r("nullthrows")(o("WAWebFrontendChatGetters").getKind(this._chat))), t !== o("WAWebPttComposerRecordingStopReason").RecordingSessionStopReason.SENT && this._uploaderAbortController && this._uploaderAbortController.abort();
				var e = U(t);
				e != null && this._sendPttWamEvent(e);
			}
		}, a._getDataForSending = async function() {
			try {
				o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["WAWebPttComposerRecordingSession: _getDataForSending started"])));
				var e = r("nullthrows")(this._recorder), t = await e.getCompleteRecording();
				o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
					"WAWebPttComposerRecordingSession: Got complete recording, size: ",
					" bytes, type: ",
					""
				])), t.size, t.type);
				var n = await r("WAWebMediaOpaqueData").createFromData(t, t.type);
				return o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose(["WAWebPttComposerRecordingSession: Created OpaqueData successfully"]))), n;
			} catch (e) {
				throw o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose(["WAWebPttComposerRecordingSession: Error in _getDataForSending"]))), e;
			}
		}, a._getDataForPlayback = async function() {
			var e = r("nullthrows")(this._recorder), t = await e.getPartialRecording(), n = await o("WAWebMediaLoad").transcode(t);
			return r("WAWebMediaOpaqueData").createFromData(n, n.type);
		}, a.getAudioForPlayback = function() {
			var e = this;
			return new H(function() {
				return e._getDataForPlayback();
			});
		}, a.getWaveformSampleRate = function() {
			return F;
		}, a.send = async function(t) {
			var e = t.isQuestion, n = e === void 0 ? !1 : e, a = t.isViewOnce, i = a === void 0 ? !1 : a, l = t.isWamoSub, s = t.questionReplyQuotedMessage, u = t.threadId;
			try {
				var c, d;
				o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
					"WAWebPttComposerRecordingSession: send started with isViewOnce=",
					", isWamoSub=",
					""
				])), i, l), (c = this._handleSendMessageStart) == null || c.call(this, i), this._recorder || o("WALogger").ERROR(v || (v = babelHelpers.taggedTemplateLiteralLoose(["WAWebPttComposerRecordingSession: Recorder is null in send method"])));
				var m = r("nullthrows")(this._recorder), p = this._chat;
				o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose(["WAWebPttComposerRecordingSession: Getting data for sending"])));
				var _ = r("WAPromiseRaceAbort")(this._getDataForSending(), p.getDeleteSignal()), f = ((d = p.getComposeContents()) == null ? void 0 : d.ctwaContext) || void 0;
				o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
					"WAWebPttComposerRecordingSession: Before prepRawMedia, duration=",
					", waveform samples=",
					""
				])), Math.floor(m.getDuration()), this.getScaledWaveformSamples().length);
				var g;
				try {
					g = o("WAWebMedia").prepRawMedia(_, {
						isPtt: !0,
						precomputedFields: {
							duration: Math.floor(m.getDuration()),
							waveform: new Uint8Array(this.getScaledWaveformSamples())
						}
					}), o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose(["WAWebPttComposerRecordingSession: prepRawMedia completed successfully"])));
				} catch (e) {
					throw o("WALogger").ERROR(E || (E = babelHelpers.taggedTemplateLiteralLoose(["WAWebPttComposerRecordingSession: Error in prepRawMedia"]))), e;
				}
				o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose(["WAWebPttComposerRecordingSession: Early upload promise status: ", ""])), this._earlyUploadPromise ? "exists" : "null");
				var h = null;
				if (o("WAWebBotUtils").isMetaAiBot(p.id)) {
					var y;
					h = (y = o("WAWebBotProfileCollection").BotProfileCollection.get(p.id)) == null ? void 0 : y.personaId;
				}
				try {
					g.sendToChat({
						chat: p,
						earlyUpload: this._earlyUploadPromise,
						options: {
							quotedMsg: p.composeQuotedMsg || void 0,
							addEvenWhilePreparing: !i,
							ctwaContext: f,
							isViewOnce: i,
							isWamoSub: l,
							isQuestion: n,
							questionReplyQuotedMessage: s != null ? s : void 0,
							botPersonaId: h,
							threadId: u
						}
					}), o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose(["WAWebPttComposerRecordingSession: sendToChat called successfully"])));
				} catch (e) {
					throw o("WALogger").ERROR(T || (T = babelHelpers.taggedTemplateLiteralLoose(["WAWebPttComposerRecordingSession: Error in sendToChat:"]))), e;
				}
				p.composeQuotedMsg = null, o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose(["WAWebPttComposerRecordingSession: Stopping recording session with SENT reason"]))), this.stop(o("WAWebPttComposerRecordingStopReason").RecordingSessionStopReason.SENT);
				try {
					await _.catch(o("WAAbortError").catchAbort(r("WAWebNoop"))), o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose(["WAWebPttComposerRecordingSession: getData completed or was aborted"])));
				} catch (e) {
					o("WALogger").ERROR($ || ($ = babelHelpers.taggedTemplateLiteralLoose(["WAWebPttComposerRecordingSession: Error in getData"]))).catching(r("getErrorSafe")(e));
				}
				o("WALogger").LOG(P || (P = babelHelpers.taggedTemplateLiteralLoose(["WAWebPttComposerRecordingSession: send method completed successfully"])));
			} catch (e) {
				throw o("WALogger").ERROR(N || (N = babelHelpers.taggedTemplateLiteralLoose(["WAWebPttComposerRecordingSession: Unhandled error in send method"]))), e;
			}
		}, a._sendPttWamEvent = async function(t) {
			var e, n = r("nullthrows")(this._recorder), a = await n.getCompleteRecording();
			new (o("WAWebPttWamEvent")).PttWamEvent({
				pttSource: o("WAWebWamEnumPttSourceType").PTT_SOURCE_TYPE.FROM_CONVERSATION,
				pttResult: t,
				pttDuration: Math.round(this.duration) * 1e3,
				pttSize: Math.round(((e = a.size) != null ? e : 0) / 1e3) * 1e3,
				pttStop: this._draftPreviewSeen,
				pttDraftPlayCnt: this._draftPlayCount,
				pttDraftSeekCnt: this._draftSeekCount,
				pttPauseCnt: this._pauseCount,
				isMetaAiThread: o("WAWebBotUtils").isMetaAiBot(this._chat.id)
			}).commit();
		}, a.markDraftPreviewSeen = function() {
			this._draftPreviewSeen || (this._draftPreviewSeen = !0, o("WAWebPttDailyUtils").incrementPttDailyCount(o("WAWebPttDailyUtils").PttDailyCountKind.DRAFT_REVIEW, r("nullthrows")(o("WAWebFrontendChatGetters").getKind(this._chat))));
		}, a.incrementDraftPlayCount = function() {
			this._draftPlayCount++;
		}, a.incrementDraftSeekCount = function() {
			this._draftSeekCount++;
		}, a.incrementPauseButtonCount = function() {
			this._pauseCount++, this._pauseCount === 1 && o("WAWebPttDailyUtils").incrementPttDailyCount(o("WAWebPttDailyUtils").PttDailyCountKind.PAUSED_RECORD, r("nullthrows")(o("WAWebFrontendChatGetters").getKind(this._chat)));
		}, a.delete = function() {
			var e;
			(e = this._uploadQpl) == null || e.endCancel(), this._uploadQpl = null, t.prototype.delete.call(this), o("WAWebPttComposerRecordingSessionGetters").clearRecordingSessionGetterCacheFor(this);
		}, n;
	})(o("WAWebBaseModel").BaseModel);
	B.Proxy = "recordingSession";
	var W = o("WAWebBaseModel").defineModel(B);
	function q(e) {
		return new W({
			id: o("WARandomHex").randomHex(8),
			_chat: e.chat
		});
	}
	function U(e) {
		switch (e) {
			case o("WAWebPttComposerRecordingStopReason").RecordingSessionStopReason.SENT: return o("WAWebWamEnumPttResultType").PTT_RESULT_TYPE.SENT;
			case o("WAWebPttComposerRecordingStopReason").RecordingSessionStopReason.PTT_TOO_SHORT: return o("WAWebWamEnumPttResultType").PTT_RESULT_TYPE.TOO_SHORT;
			case o("WAWebPttComposerRecordingStopReason").RecordingSessionStopReason.CANCEL_BUTTON: return o("WAWebWamEnumPttResultType").PTT_RESULT_TYPE.CANCELLED;
			case o("WAWebPttComposerRecordingStopReason").RecordingSessionStopReason.AI_THREAD_SWITCH:
			case o("WAWebPttComposerRecordingStopReason").RecordingSessionStopReason.OTHER: return null;
		}
	}
	async function V(e) {
		if (r("WAWebCallCollection").activeCall) return o("WAWebModalManager").ModalManager.open(w.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: o("WAWebModalManager").closeModalManager,
			children: s._(
				/*BTDS*/
				""
			)
		})), null;
		var t = o("WAWebMediaCapture").start({
			type: o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.MICROPHONE,
			featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOICE_MESSAGES
		}), n = t.asyncStream, a = t.disposeStream;
		e.addEventListener("abort", function() {
			a();
		}, { once: !0 });
		try {
			return await n;
		} catch (e) {
			if (e instanceof o("WAWebGetUserMediaErrors").NotAllowedError) {
				var i;
				return o("WAWebModalManager").ModalManager.open(w.jsx((i = o("WAWebGuidePopup.react")).GuidePopup, {
					messaging: i.Messaging.MIC_FAIL,
					type: i.GuidePopupType.GUIDE_UNBLOCK,
					featureSurface: i.FeatureSurface.VOICE_MESSAGES
				})), null;
			}
			if (e instanceof o("WAWebGetUserMediaErrors").GetUserMediaError) {
				var i;
				return o("WAWebModalManager").ModalManager.open(w.jsx((i = o("WAWebGuidePopup.react")).GuidePopup, {
					messaging: i.Messaging.MIC_MISSING,
					type: i.GuidePopupType.GUIDE_NONE,
					featureSurface: i.FeatureSurface.VOICE_MESSAGES
				})), null;
			}
			throw e;
		}
	}
	var H = (function() {
		function e(e) {
			var t = this;
			this._opaqueDataPromise = e();
			var n = o("WAWebPttAudioManager").AudioManager.createAudioProxy();
			this._audio = n, this._unregisterFromAudioChannel = o("WAWebPttAudioChannels").MainAudioChannel.registerMedia(n), (async function() {
				var e = await t._opaqueDataPromise, n = t._audio;
				n != null && (n.src = e.url());
			})();
		}
		var t = e.prototype;
		return t.getAudio = function() {
			return this._audio != null || u(0, 56371), this._audio;
		}, t.dispose = function() {
			var e = this, t = this._audio;
			t != null && (this._unregisterFromAudioChannel(), this._audio = null, (async function() {
				var t = await e._opaqueDataPromise;
				t.autorelease();
			})());
		}, e;
	})();
	l.RecordingSessionStopReason = o("WAWebPttComposerRecordingStopReason").RecordingSessionStopReason, l.RecordingSession = W, l.createRecordingSession = q, l.AudioResource = H;
}), 226);
