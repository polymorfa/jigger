__d("WAWebPttComposer.react", [
	"$InternalEnum",
	"WAWebAttachMediaViewOnceInChat.react",
	"WAWebChatGetters",
	"WAWebClock",
	"WAWebCmd",
	"WAWebFrontendChatGetters",
	"WAWebMsgType",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterWamoSubMessageType",
	"WAWebNewsletterWamoSubMessageTypePopup.react",
	"WAWebNewsletterWamoSubUtils",
	"WAWebPttCancelButton.react",
	"WAWebPttComposerRecordingSession",
	"WAWebPttComposerRecordingSessionGetters",
	"WAWebPttComposerWaveform.react",
	"WAWebPttMessageUserJourneyLogger",
	"WAWebPttPauseResumeRecordingButton.react",
	"WAWebPttPlayPauseButton.react",
	"WAWebPttSendButton.react",
	"WAWebPttTsExternalLogger",
	"WAWebQuestions.flow",
	"WAWebRecordingSessionStateEnum",
	"WAWebTabOrder",
	"WAWebUserPrefsMeUser",
	"WAWebVelocityTransitionGroup",
	"err",
	"nullthrows",
	"react",
	"useWAWebChatValues",
	"useWAWebEventTargetValue",
	"useWAWebListener",
	"useWAWebOnUnmount",
	"useWAWebPttRecordingSessionValues",
	"useWAWebSetModelValue",
	"useWAWebStableCallback"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useRef, p = u.useState, _ = n("$InternalEnum").Mirrored(["RECORDER", "PREVIEW"]), f = { viewOnceButtonSpacing: {
		marginInlineEnd: "xqf2s3x",
		$$css: !0
	} };
	function g(e) {
		var t, n = e.chat, a = e.onComplete, i = e.recordingSession, l = m(), u = m(), g = p(function() {
			switch (i.recordingState) {
				case o("WAWebRecordingSessionStateEnum").RecordingSessionState.PAUSED: return _.PREVIEW;
				case o("WAWebRecordingSessionStateEnum").RecordingSessionState.RECORDING: return _.RECORDER;
				default: throw r("err")("Invalid recording session state: " + i.recordingState);
			}
		}), C = g[0], b = g[1], v = (t = o("useWAWebChatValues").useOptionalChatValues(n.id, [
			o("WAWebChatGetters").getIsNewsletter,
			o("WAWebFrontendChatGetters").getNewsletterMetadata,
			o("WAWebFrontendChatGetters").getComposeQuotedMsg
		])) != null ? t : [
			!1,
			null,
			null
		], S = v[0], R = v[1], L = v[2], E = p(null), k = E[0], I = E[1], T = p(function() {
			return C === _.PREVIEW ? i.getAudioForPlayback() : null;
		}), D = T[0], x = T[1];
		d(function() {
			if (D != null) return o("WAWebPttTsExternalLogger").attachPttPlayTimeSpentLogger(D.getAudio());
		}, [D]);
		var $ = function() {
			x(null), D == null || D.dispose();
		}, P = D == null ? void 0 : D.getAudio(), N = m(), M = m(), w = m(i);
		w.current = i;
		var A = r("useWAWebEventTargetValue")(i, "change:duration", function() {
			return Math.floor(i.duration);
		}), F = p(function() {
			return Math.floor((P == null ? void 0 : P.currentTime) || 0);
		}), O = F[0], B = F[1], W = p(function() {
			return ((P == null ? void 0 : P.currentTime) || 0) === 0;
		}), q = W[0], U = W[1], V = function(t) {
			B(Math.floor(t)), U(t === 0);
		};
		o("useWAWebListener").useListener(P, "timeupdate", function() {
			var e;
			V((e = P == null ? void 0 : P.currentTime) != null ? e : 0);
		});
		var H = p(null), G = H[0], z = H[1], j = o("useWAWebPttRecordingSessionValues").usePttRecordingSessionValues(i, [
			o("WAWebPttComposerRecordingSessionGetters").getExceedsMinDuration,
			o("WAWebPttComposerRecordingSessionGetters").getIsRecording,
			o("WAWebPttComposerRecordingSessionGetters").getIsViewOnce
		]), K = j[0], Q = j[1], X = j[2], Y = o("useWAWebSetModelValue").useSetModelValue(i, "isViewOnce"), J = p(X), Z = J[0], ee = J[1], te = function() {
			ee(!1), Y(!X);
		};
		o("useWAWebListener").useListener(i, "change:recordingState", function() {
			(i.recordingState === o("WAWebRecordingSessionStateEnum").RecordingSessionState.STOPPED || i.recordingState === o("WAWebRecordingSessionStateEnum").RecordingSessionState.ERROR) && a();
		});
		var ne = r("useWAWebEventTargetValue")(P, ["play", "pause"], function() {
			return P != null && !P.paused;
		}), re = h(), oe = function() {
			i.stop(o("WAWebPttComposerRecordingSession").RecordingSessionStopReason.CANCEL_BUTTON), o("WAWebPttMessageUserJourneyLogger").PttMessageUserJourneyLogger.delete(n.id, L != null);
		};
		d(function() {
			Q && self.setTimeout(function() {
				var e;
				(e = N.current) == null || e.focus();
			}, 100);
		}, [Q]), d(function() {
			C === _.PREVIEW && (w.current.markDraftPreviewSeen(), self.setTimeout(function() {
				var e;
				(e = M.current) == null || e.focus();
			}, 100));
		}, [C]), r("useWAWebOnUnmount")(function() {
			P == null || P.pause(), $(), i.pause();
		});
		var ae = function(n) {
			i.send({
				isQuestion: e.questionType === o("WAWebQuestions.flow").QuestionType.Question,
				isViewOnce: X,
				isWamoSub: n,
				questionReplyQuotedMessage: e.questionReplyQuotedMessage,
				threadId: e.threadId
			});
		}, ie = function() {
			if (K) {
				var t = u.current;
				if (S && o("WAWebNewsletterWamoSubUtils").newsletterSupportsSubscriptions(R) && t && o("WAWebNewsletterGatingUtils").isWamoSubCreatorExperienceSupported()) {
					var r = function(t) {
						ae(t === o("WAWebNewsletterWamoSubMessageType").NewsletterWamoSubMessageType.WamoSub);
					};
					I({
						popupAnchorEl: t,
						handleSelect: r
					});
				} else ae();
				e.onSend == null || e.onSend(), o("WAWebPttMessageUserJourneyLogger").PttMessageUserJourneyLogger.send(n.id, L != null);
			}
		};
		o("useWAWebListener").useListener(i, "change:recordingState", function() {
			if (!o("WAWebPttComposerRecordingSessionGetters").getIsRecording(i) && i.recordingState === o("WAWebRecordingSessionStateEnum").RecordingSessionState.PAUSED) {
				$();
				var e = i.getAudioForPlayback();
				x(e), V(0), b(_.PREVIEW);
			}
		});
		var le = function() {
			i.incrementPauseButtonCount(), i.pause(), o("WAWebPttMessageUserJourneyLogger").PttMessageUserJourneyLogger.pause(n.id, L != null);
		}, se = function() {
			(async function() {
				P == null || P.pause(), b(_.RECORDER);
				var e = await i.resume();
				e || b(_.PREVIEW), o("WAWebPttMessageUserJourneyLogger").PttMessageUserJourneyLogger.resume(n.id, L != null);
			})();
		}, ue = function() {
			var e = r("nullthrows")(P);
			e.paused ? (e.play(), i.incrementDraftPlayCount()) : e.pause();
		};
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "pause_ptt_recording", function() {
			var e = C === _.RECORDER ? le : se;
			e();
		}), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "send_ptt_recording", ie), o("useWAWebListener").useListener(P, "ended", function() {
			r("nullthrows")(P).load();
		});
		var ce = c(function() {
			var e;
			return (e = P == null ? void 0 : P.currentTime) != null ? e : 0;
		}, [P]), de = r("useWAWebStableCallback")(function() {
			return i.getPreciseDuration();
		}), me = r("useWAWebStableCallback")(function() {
			return i.duration;
		}), pe = r("useWAWebStableCallback")(function() {
			return i.getLiveWaveformSamples();
		}), _e = r("useWAWebStableCallback")(function() {
			return i.getCorrectedWaveformSamples();
		}), fe = r("useWAWebStableCallback")(function(e) {
			V(e), z(null), r("nullthrows")(P).currentTime = e, i.incrementDraftSeekCount();
		}), ge = r("useWAWebStableCallback")(function(e) {
			z(Math.floor(e));
		}), he = s.jsx("div", {
			className: "x78zum5 xqf2s3x",
			children: s.jsx(r("WAWebPttPauseResumeRecordingButton.react"), {
				recording: C === _.RECORDER,
				confirmOnMouseUp: re,
				tabOrder: o("WAWebTabOrder").TAB_ORDER.PTT_BUTTON,
				onConfirm: C === _.RECORDER ? le : se
			})
		}), ye = s.jsxs("div", {
			className: "x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod x78zum5 x6s0dn4",
			children: [
				s.jsx("div", { className: "x170jfvy x1fsd2vl x1b0f5k1 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1uvdrpn x14mko6t" }),
				s.jsx(y, { time: A }),
				s.jsx("div", {
					className: "x78zum5 x1iyjqo2 xs83m0k x1r8uery x1sikpz7 x1sa5p1d x1wbi8v6",
					children: s.jsx(o("WAWebPttComposerWaveform.react").Waveform, {
						location: o("WAWebPttComposerWaveform.react").WaveformLocation.DRAFT_PREVIEW,
						sampleRate: i.getWaveformSampleRate(),
						getSamples: pe,
						getCurrentTime: ce,
						getDuration: de,
						live: Q,
						mode: o("WAWebPttComposerWaveform.react").WaveformMode.RECORDER,
						onSeek: ge,
						onSeekEnd: fe,
						tabIndex: o("WAWebTabOrder").TAB_ORDER.PTT_BUTTON
					})
				})
			]
		}), Ce = !n.contact.isEnterprise && !o("WAWebUserPrefsMeUser").isMeAccount(n.contact.id) ? s.jsx(r("WAWebAttachMediaViewOnceInChat.react"), {
			chat: n,
			containerXstyle: f.viewOnceButtonSpacing,
			mediaType: o("WAWebMsgType").MSG_TYPE.PTT,
			onChange: te,
			isOn: X,
			disabled: !1,
			shouldShowNux: C === _.PREVIEW,
			dataTab: o("WAWebTabOrder").TAB_ORDER.PTT_BUTTON,
			shouldSkipNuxAndToast: Z
		}) : null, be = G != null ? G : q ? A : O, ve = s.jsxs("div", {
			className: "x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod x78zum5 x6s0dn4 x14mko6t x1y3qizg x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x15unhv1 x1s194ge xvp2sfm x11hqq3w x13tw7jo xbm2e5w xgdig0o xj3boke xzt5al7 x1kukv79 x11ahuha x972fbf x10w94by x1qhh985 x14e42zd",
			children: [
				s.jsx(r("WAWebPttPlayPauseButton.react"), {
					ref: M,
					theme: "compose-box",
					paused: !ne,
					tabOrder: o("WAWebTabOrder").TAB_ORDER.PTT_BUTTON,
					onConfirm: ue
				}),
				s.jsx("div", {
					className: "x78zum5 x1iyjqo2 xs83m0k x1r8uery x1sikpz7 xf6vk7d x1hm9lzh",
					children: s.jsx(o("WAWebPttComposerWaveform.react").Waveform, {
						location: o("WAWebPttComposerWaveform.react").WaveformLocation.DRAFT_PREVIEW,
						sampleRate: i.getWaveformSampleRate(),
						getSamples: _e,
						getCurrentTime: ce,
						getDuration: me,
						live: ne,
						mode: o("WAWebPttComposerWaveform.react").WaveformMode.PREVIEW,
						onSeek: ge,
						onSeekEnd: fe,
						tabIndex: o("WAWebTabOrder").TAB_ORDER.PTT_BUTTON
					})
				}),
				s.jsx(y, { time: be })
			]
		}), Se = function(t) {
			t.key === "Escape" && (t.stopPropagation(), oe());
		};
		return s.jsxs("div", {
			onKeyDown: Se,
			ref: l,
			className: "x78zum5 x6s0dn4 xh8yej3 x19ygybj",
			tabIndex: 0,
			children: [
				s.jsx(r("WAWebPttCancelButton.react"), {
					ref: N,
					confirmOnMouseUp: re,
					onConfirm: oe,
					tabOrder: o("WAWebTabOrder").TAB_ORDER.PTT_BUTTON
				}),
				s.jsx("div", {
					className: "x1n2onr6 x78zum5 x1iyjqo2 xs83m0k x1r8uery x6s0dn4 x5yr21d",
					children: s.jsxs(r("WAWebVelocityTransitionGroup"), {
						transitionName: "fade",
						children: [C === _.RECORDER ? ye : null, C === _.PREVIEW ? ve : null]
					})
				}),
				he,
				Ce,
				s.jsx(r("WAWebPttSendButton.react"), {
					ref: u,
					disabled: !K && !Q,
					confirmOnMouseUp: re,
					onConfirm: ie,
					tabOrder: o("WAWebTabOrder").TAB_ORDER.PTT_BUTTON
				}),
				k != null && s.jsx(r("WAWebNewsletterWamoSubMessageTypePopup.react"), {
					handleSelect: k.handleSelect,
					popupAnchorEl: k.popupAnchorEl,
					onDismiss: function() {
						return I(null);
					}
				})
			]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h() {
		var e = p(!1), t = e[0], n = e[1], r = 250;
		return d(function() {
			var e = self.setTimeout(function() {
				n(!0);
			}, r), t = function() {
				n(!1), o();
			};
			window.addEventListener("mouseup", t);
			var o = function() {
				window.removeEventListener("mouseup", t), self.clearTimeout(e);
			};
			return o;
		}, []), t;
	}
	function y(e) {
		var t = e.time;
		return s.jsx("div", {
			className: "x2c5eco xunn93x",
			role: "timer",
			children: o("WAWebClock").Clock.durationStr(t)
		});
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = g;
}), 98);
