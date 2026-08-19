__d("WAWebFloatingVoipRenderer.react", [
	"WAWebCallCollection",
	"WAWebContactCollection",
	"WAWebElevatedPushNamesFlag",
	"WAWebEnvironment",
	"WAWebFrontendMsgGetters",
	"WAWebL10N",
	"WAWebMuteCollection",
	"WAWebMuteGetters",
	"WAWebPipFloatingVideoPlayer.react",
	"WAWebThemeContext",
	"WAWebVelocityAnimate",
	"WAWebVoipActivityTracker",
	"WAWebVoipCallStateUtils",
	"WAWebVoipEventConstants",
	"WAWebVoipFullScreenContext",
	"WAWebVoipGatingUtils",
	"WAWebVoipGridLayoutCalculator",
	"WAWebVoipGridPageSizeContext",
	"WAWebVoipLobbyHeightUtils",
	"WAWebVoipLobbyUtils",
	"WAWebVoipPopoutModalManagerWrapper.react",
	"WAWebVoipUiLoadable",
	"WAWebVoipUiPopoutWindowContext",
	"WAWebVoipUiPopoutWindowPortalContainer.react",
	"WAWebVoipVideoStateUtils",
	"WAWebVoipWaCallEnums",
	"WDSFocusStateStyles",
	"react",
	"useMergeRefs",
	"useWAWebEventTargetValue",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	var e = [
		"ref",
		"animationStartStyle",
		"msg"
	], s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useEffect, p = c.useMemo, _ = c.useRef, f = c.useState, g = "#3a3c3c", h = {
		moveResizeContainer: {
			pointerEvents: "x47corl",
			$$css: !0
		},
		voipBorderRadius: {
			borderStartStartRadius: "x1g83kfv",
			borderStartEndRadius: "x3qq2k7",
			borderEndEndRadius: "x2x8art",
			borderEndStartRadius: "x1qor8vf",
			$$css: !0
		},
		voipBorder: {
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "x1uaztaz",
			borderInlineEndColor: "xabo58m",
			borderBottomColor: "x28feff",
			borderInlineStartColor: "x1556f1n",
			$$css: !0
		}
	}, y = {
		isContextInPopoutWindow: !0,
		popoverPortalEl: null,
		documentEl: document,
		windowEl: window,
		isDocPip: !1
	}, C = 640, b = C / (C * (3 / 4) + 60), v = 48, S = 16, R = 4 / 3, L = {
		MIN_VOICE_CALL_WIDTH: 400,
		MIN_VOICE_CALL_HEIGHT: 120,
		MIN_VIDEO_CALL_WIDTH: 400,
		MIN_VIDEO_CALL_HEIGHT: 400,
		MIN_SURVEY_HEIGHT: 320,
		MIN_MOVE_CALL_HERE_HEIGHT: 120,
		PUSH_NAME_LINE_EXTRA_HEIGHT: 20,
		MIN_CALL_LINK_VIDEO_PREVIEW_HEIGHT: 400,
		MIN_CALL_LINK_AUDIO_PREVIEW_HEIGHT: 120,
		INITIAL_VOICE_CALL_WIDTH: 500,
		INITIAL_VIDEO_CALL_WIDTH: 500,
		SHARE_PANEL_WIDTH: 280,
		LOBBY_SELF_PREVIEW_WIDTH: 500,
		MIN_VIDEO_CALL_LOBBY_HEIGHT: 452,
		MIN_VOICE_CALL_LOBBY_HEIGHT: 174,
		MIN_GROUP_AUDIO_CALL_HEIGHT: 180
	}, E = 250, k = .8;
	function I(t) {
		var n, a = t.ref, i = t.animationStartStyle, l = t.msg, s = babelHelpers.objectWithoutPropertiesLoose(t, e), c = (n = l == null ? void 0 : l.isVideoCall) != null ? n : !1, g = o("WAWebThemeContext").useIsDarkTheme(), S = _(null), I = r("useMergeRefs")(a, S), D = _(null), x = _(null), $ = _(null), P = _(null), N = function(t) {
			P.current == null && (P.current = t);
		}, M = _(!1), w = _(!1), A = f(null), F = A[0], O = A[1], B = f(null), W = B[0], q = B[1], U = d(function(e) {
			q(e);
		}, []), V = f(!1), H = V[0], G = V[1], z = d(function() {
			G(!0);
		}, []), j = d(function() {
			G(!1);
		}, []), K = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, "change:isVideo", function() {
			var e, t;
			return (e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.isVideo) != null ? e : !1;
		}), Q = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, "change:state", function() {
			var e;
			return (e = r("WAWebCallCollection").activeCall) == null ? void 0 : e.getState();
		}), X = o("WAWebVoipCallStateUtils").isCallIncoming(Q), Y = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, "change:shouldShowPostCallSurvey", function() {
			var e, t;
			return (e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.shouldShowPostCallSurvey) != null ? e : !1;
		}), J = r("useWAWebEventTargetValue")(o("WAWebVoipUiPopoutWindowPortalContainer.react").WAWebVoipUiPopoutWindowEventEmitter, "setPopoutWindowProps", function() {
			var e, t;
			return (e = D.current) == null || e.cancelDefaultHeightEnforcement(), (t = D.current) == null || t.markExternalResizeInProgress(!0), o("WAWebVoipUiPopoutWindowPortalContainer.react").getIsCallActiveInPopoutWindow();
		}), Z = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, "change:videoState", function() {
			var e, t;
			return (e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.shouldShowPeerVideo()) != null ? e : !1;
		}), ee = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, "participantVideoStateChange change:videoState change:selfVideoState", function() {
			var e = r("WAWebCallCollection").activeCall;
			if (e == null || !e.isGroup) return !1;
			if (o("WAWebVoipVideoStateUtils").isVideoEnabled(e.selfVideoState)) return !0;
			for (var t of (n = e.groupCallParticipantsConnected) != null ? n : []) {
				var n;
				if (o("WAWebVoipVideoStateUtils").isVideoEnabled(e.getParticipantVideoState(t))) return !0;
			}
			return !1;
		}), te = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, "change:callLinkState change:state", function() {
			var e, t;
			return (e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.isInCallLinkPreview()) != null ? e : !1;
		}), ne = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), "change:pendingCallLink", function() {
			return r("WAWebCallCollection").pendingCallLink;
		}), re = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.PENDING_OUTGOING_CALL), function() {
			return r("WAWebCallCollection").pendingOutgoingCall;
		}), oe = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, "change:state change:callLinkState", function() {
			var e = r("WAWebCallCollection").activeCall, t = e != null && e.isCallLink && (e.getState() === o("WAWebVoipWaCallEnums").CallState.ConnectedLonely || o("WAWebVoipGatingUtils").isSmoothCallLinkLobbyEnabled() && !r("WAWebEnvironment").isGuest && e.isConnectingToCallLinkLobby());
			if (t) {
				var n, a;
				(n = D.current) == null || n.cancelDefaultHeightEnforcement(), (a = D.current) == null || a.markExternalResizeInProgress(!0);
			}
			return t;
		}), ae = o("WAWebVoipCallStateUtils").isCallActive(Q), ie = oe && !ae && !J, le = o("WAWebVoipGatingUtils").isSmoothCallLinkLobbyEnabled() && oe && !J, se = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, "change:isGroup", function() {
			var e, t;
			return (e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.isGroup) != null ? e : !1;
		}), ue = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.GROUP_CALL_PARTICIPANT_STATES), function() {
			var e, t;
			return (e = (t = r("WAWebCallCollection").activeCall) == null || (t = t.groupCallParticipantsConnected) == null ? void 0 : t.length) != null ? e : 0;
		}), ce = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.PEER_JID), function() {
			var e = r("WAWebCallCollection").activeCall;
			if (e == null || e.isGroup) return !1;
			var t = e.peerJid != null ? o("WAWebContactCollection").ContactCollection.get(e.peerJid) : null;
			return o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(t);
		}), de = ce ? L.PUSH_NAME_LINE_EXTRA_HEIGHT : 0, me = o("WAWebVoipLobbyUtils").isLobbyApplicableForCallState(se, Q), pe = K || c || ee, _e = pe && se && ue > 2 && !J && !me && !te && !Y, fe = Z && !J && !me && !oe && !_e, ge = fe ? T(R, C) : b, he;
		Y ? he = L.MIN_SURVEY_HEIGHT : J ? he = L.MIN_MOVE_CALL_HERE_HEIGHT + de : le ? he = L.MIN_VIDEO_CALL_HEIGHT : te ? he = pe ? L.MIN_CALL_LINK_VIDEO_PREVIEW_HEIGHT : L.MIN_CALL_LINK_AUDIO_PREVIEW_HEIGHT : ne != null ? he = ne.isVideo ? L.MIN_CALL_LINK_VIDEO_PREVIEW_HEIGHT : L.MIN_CALL_LINK_AUDIO_PREVIEW_HEIGHT : re != null ? he = re.isVideo ? L.MIN_VIDEO_CALL_HEIGHT : L.MIN_VOICE_CALL_HEIGHT : me ? he = pe ? L.MIN_VIDEO_CALL_LOBBY_HEIGHT : L.MIN_VOICE_CALL_LOBBY_HEIGHT : ie ? he = L.MIN_VIDEO_CALL_HEIGHT : _e ? he = L.MIN_GROUP_AUDIO_CALL_HEIGHT : pe ? he = L.MIN_VIDEO_CALL_HEIGHT : ue > 2 ? he = L.MIN_GROUP_AUDIO_CALL_HEIGHT : he = L.MIN_VOICE_CALL_HEIGHT + de;
		var ye;
		le ? ye = L.LOBBY_SELF_PREVIEW_WIDTH + L.SHARE_PANEL_WIDTH : me ? ye = L.MIN_VIDEO_CALL_WIDTH : ie ? ye = L.LOBBY_SELF_PREVIEW_WIDTH + L.SHARE_PANEL_WIDTH : pe ? ye = L.MIN_VIDEO_CALL_WIDTH : ye = L.MIN_VOICE_CALL_WIDTH;
		var Ce;
		le || ie ? Ce = L.LOBBY_SELF_PREVIEW_WIDTH + L.SHARE_PANEL_WIDTH : pe ? Ce = L.INITIAL_VIDEO_CALL_WIDTH : Ce = L.INITIAL_VOICE_CALL_WIDTH;
		var be = { width: Ce }, ve = function(t, n, r) {
			var e = S.current;
			if (e) {
				var o = e.offsetHeight;
				$.current = {
					width: t,
					height: o
				};
			}
		}, Se = function() {
			o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.VOIP_WINDOW_RESIZE);
		}, Re = function() {
			o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.VOIP_WINDOW_DRAG);
		};
		m(function() {
			var e = M.current;
			if (M.current = J, J && !e) {
				var t;
				S.current && (x.current = {
					width: S.current.offsetWidth,
					height: S.current.offsetHeight
				});
				var n = {
					width: Math.max((t = P.current) != null ? t : ye, ye),
					height: L.MIN_MOVE_CALL_HERE_HEIGHT + de
				};
				O(n);
			} else if (!J && e) {
				var r = x.current || $.current;
				if (r) {
					var o = oe && !ae, a = o ? Math.max(he, L.MIN_VIDEO_CALL_HEIGHT) : he, i = {
						width: Math.max(r.width, ye),
						height: Math.max(r.height, a)
					};
					O(i), x.current = null;
				}
			}
		}, [
			J,
			ye,
			he,
			de,
			oe,
			ae
		]), m(function() {
			if (me && !te) {
				var e = S.current;
				if (e) {
					var t = e.offsetWidth, n = e.offsetHeight, r = X || Q === o("WAWebVoipWaCallEnums").CallState.Rejoining;
					if (r) {
						if (pe) {
							var a, i, l = Math.max(t, L.MIN_VIDEO_CALL_WIDTH), s = o("WAWebVoipLobbyHeightUtils").calculateIncomingGroupVideoLobbyHeight(0, !1, !0, l);
							(a = D.current) == null || a.cancelDefaultHeightEnforcement(), (i = D.current) == null || i.markExternalResizeInProgress(!0), O({
								width: l,
								height: s
							});
						} else t < L.MIN_VIDEO_CALL_WIDTH && O({
							width: L.MIN_VIDEO_CALL_WIDTH,
							height: n
						});
						return;
					}
					var u = pe ? L.MIN_VIDEO_CALL_LOBBY_HEIGHT : L.MIN_VOICE_CALL_LOBBY_HEIGHT, c = {
						width: Math.max(t, L.MIN_VIDEO_CALL_WIDTH),
						height: Math.max(n, u)
					};
					O(c);
				}
			} else {
				var d = w.current;
				if (w.current = pe, pe && !d && !J) {
					var m = S.current;
					if (m) {
						var p = m.offsetWidth, _ = m.offsetHeight, f = p < L.MIN_VIDEO_CALL_WIDTH || _ < L.MIN_VIDEO_CALL_HEIGHT;
						if (f) {
							var g, h;
							(g = D.current) == null || g.cancelDefaultHeightEnforcement(), (h = D.current) == null || h.markExternalResizeInProgress(!0);
						}
						var y = {
							width: Math.max(p, L.MIN_VIDEO_CALL_WIDTH),
							height: Math.max(_, L.MIN_VIDEO_CALL_HEIGHT)
						};
						O(y);
					}
				}
			}
		}, [
			pe,
			J,
			me,
			X,
			Q,
			te
		]);
		var Le = _(o("WAWebVoipGatingUtils").isSmoothCallLinkLobbyEnabled() ? !1 : ie), Ee = _(0), ke = _(0);
		o("useWAWebListener").useListener(o("WAWebVoipLobbyHeightUtils").WAWebVoipLobbyPanelStateEmitter, "panelStateChanged", function(e) {
			var t, n, r = e.connectedParticipantCount, a = e.hasNoParticipants, i = e.isExpanded, l = e.isVideoCall;
			if (!(!me || J || te)) {
				var s = S.current;
				if (s) {
					var u = s.offsetWidth, c = l ? o("WAWebVoipLobbyHeightUtils").calculateIncomingGroupVideoLobbyHeight(r, i, a, u) : o("WAWebVoipLobbyHeightUtils").calculateIncomingGroupAudioLobbyHeight(r, i, a);
					(t = D.current) == null || t.cancelDefaultHeightEnforcement(), (n = D.current) == null || n.markExternalResizeInProgress(!0), O({
						width: u,
						height: c
					});
				}
			}
		}), m(function() {
			var e = Le.current;
			if (Le.current = ie, !J) {
				var t = S.current;
				if (t) {
					var n = t.offsetWidth, a = t.offsetHeight, i = L.SHARE_PANEL_WIDTH, l = parseFloat(t.style.left) || 0;
					if (ie && !e) {
						var s, u;
						(s = D.current) == null || s.cancelDefaultHeightEnforcement(), (u = D.current) == null || u.markExternalResizeInProgress(!0);
						var c = Math.max(n, L.LOBBY_SELF_PREVIEW_WIDTH + i), d = c - n;
						Ee.current = d;
						var m = Math.max(a, L.MIN_VIDEO_CALL_HEIGHT), p = m - a;
						if (ke.current = p, d === 0 && p === 0) return;
						var _ = {
							width: c,
							height: m
						};
						r("WAWebL10N").isRTL() && (_.left = Math.max(o("WAWebPipFloatingVideoPlayer.react").CALLING_MARGIN_X, l - d)), O(_);
					} else if (!ie && e) {
						var f, g, h = Ee.current;
						Ee.current = 0;
						var y = ke.current;
						if (ke.current = 0, h === 0 && y === 0) return;
						(f = D.current) == null || f.cancelDefaultHeightEnforcement(), (g = D.current) == null || g.markExternalResizeInProgress(!0);
						var C = pe ? L.MIN_VIDEO_CALL_WIDTH : L.MIN_VOICE_CALL_WIDTH, b = Math.max(n - h, C), v = n - b, R = pe ? L.MIN_VIDEO_CALL_HEIGHT : L.MIN_VOICE_CALL_HEIGHT + de, E = Math.max(a - y, R), k = {
							width: b,
							height: E
						};
						r("WAWebL10N").isRTL() && (k.left = l + v), O(k);
					}
				}
			}
		}, [
			ie,
			J,
			pe,
			de
		]);
		var Ie = _(!1), Te = ue > 2 && !pe && !me && !J;
		m(function() {
			var e = Ie.current;
			if (Ie.current = Te, Te !== e) {
				var t = S.current;
				if (t) {
					var n = t.offsetWidth, r = t.offsetHeight;
					if (Te) {
						var o = L.MIN_GROUP_AUDIO_CALL_HEIGHT;
						if (r !== o) {
							var a, i;
							(a = D.current) == null || a.cancelDefaultHeightEnforcement(), (i = D.current) == null || i.markExternalResizeInProgress(!0), O({
								width: n,
								height: o
							});
						}
					} else if (!pe && !ie) {
						var l = L.MIN_VOICE_CALL_HEIGHT + de;
						if (r > l) {
							var s, u;
							(s = D.current) == null || s.cancelDefaultHeightEnforcement(), (u = D.current) == null || u.markExternalResizeInProgress(!0), O({
								width: n,
								height: l
							});
						}
					}
				}
			}
		}, [
			Te,
			pe,
			de,
			ie
		]);
		var De = _(null);
		m(function() {
			var e, t;
			if (!_e || J || W == null) {
				De.current = null;
				return;
			}
			var n = S.current;
			if (n) {
				var r = n.offsetWidth, a = Math.min(ue, W), i = De.current;
				if (De.current = ue, !(i != null && !o("WAWebVoipGridLayoutCalculator").hasCanonicalGridShapeChanged(i, ue, W))) {
					var l = Math.max(L.MIN_GROUP_AUDIO_CALL_HEIGHT, o("WAWebVoipGridLayoutCalculator").calculateGroupVideoGridContentHeight(r, a) + v), s = n.offsetHeight;
					Math.abs(s - l) < 1 || ((e = D.current) == null || e.cancelDefaultHeightEnforcement(), (t = D.current) == null || t.markExternalResizeInProgress(!0), O({
						width: r,
						height: l
					}));
				}
			}
		}, [
			_e,
			ue,
			W,
			J
		]);
		var xe = _(me);
		m(function() {
			var e = xe.current;
			if (xe.current = me, e && !me) {
				if (pe || ue > 2 || J) return;
				var t = S.current;
				if (!t) return;
				var n = t.offsetWidth, r = t.offsetHeight, o = L.MIN_VOICE_CALL_HEIGHT + de;
				if (r > o) {
					var a, i;
					(a = D.current) == null || a.cancelDefaultHeightEnforcement(), (i = D.current) == null || i.markExternalResizeInProgress(!0), O({
						width: n,
						height: o
					});
				}
			}
		}, [
			me,
			pe,
			ue,
			J,
			de
		]);
		var $e = _(ge);
		m(function() {
			var e, t, n = $e.current;
			if ($e.current = ge, !(!fe || n === ge)) {
				var r = S.current;
				if (r) {
					var o = r.offsetWidth, a = o / ge;
					(e = D.current) == null || e.cancelDefaultHeightEnforcement(), (t = D.current) == null || t.markExternalResizeInProgress(!0), O({
						width: o,
						height: a
					});
				}
			}
		}, [ge, fe]);
		var Pe = r("WAWebEnvironment").isGuest || H;
		m(function() {
			if (!Pe && S.current != null) {
				var e = S.current;
				e.style.transform = "scale(" + k + ")", e.style.opacity = "0", window.requestAnimationFrame(function() {
					r("WAWebVelocityAnimate")(e, {
						scale: [1, k],
						opacity: [1, 0]
					}, {
						duration: E,
						easing: "easeOutElastic"
					}).finally(function() {
						e.style.transform = "", e.style.opacity = "";
					});
				});
			}
		}, [Pe]);
		var Ne = X || J || me || te || Te, Me = p(function() {
			return {
				isFullScreen: H,
				enterFullScreen: z,
				exitFullScreen: j
			};
		}, [
			H,
			z,
			j
		]), we = l != null ? o("WAWebFrontendMsgGetters").getChat(l) : null, Ae = we != null ? o("WAWebMuteCollection").MuteCollection.get(we.id) : null, Fe = Ae != null && o("WAWebMuteGetters").getIsCallMuted(Ae), Oe = r("WAWebCallCollection").activeCall;
		return se && Fe && (X || o("WAWebVoipCallStateUtils").isCallTerminal(Q) && (Oe == null ? void 0 : Oe.wasEverConnected) !== !0 && (Oe == null ? void 0 : Oe.outgoing) !== !0) ? null : Pe ? u.jsx(r("WAWebVoipFullScreenContext").Provider, {
			value: Me,
			children: u.jsxs(r("WAWebVoipUiPopoutWindowContext").Provider, {
				value: y,
				children: [u.jsx(o("WAWebVoipPopoutModalManagerWrapper.react").VoipPopoutModalManagerWrapper, { type: o("WAWebVoipPopoutModalManagerWrapper.react").ModalType }), u.jsx("div", {
					ref: I,
					className: "xixxii4 x13vifvy x1ey2m1c x1o0tod xtijo5x x67bb7w",
					children: l != null ? u.jsx(o("WAWebVoipUiLoadable").WAWebVoipUiLoadable, { callLogMsg: l }) : u.jsx(o("WAWebVoipUiLoadable").WAWebVoipUiLoadable, { callLogMsg: null })
				})]
			})
		}) : u.jsx(r("WAWebVoipFullScreenContext").Provider, {
			value: Me,
			children: u.jsx(o("WAWebPipFloatingVideoPlayer.react").FloatingVideoPlayer, {
				ref: I,
				aspectRatio: ge,
				initialPiPStyle: be,
				animationStartStyle: i,
				enableDragBar: !1,
				dragCursor: "grab",
				minWidthOverride: ye,
				minHeightOverride: he,
				moveResizeRef: D,
				independentResize: !0,
				useChatListPanelPositioning: !0,
				disableResize: Ne ? !0 : void 0,
				onResize: ve,
				onResizeEnd: Se,
				onMoveEnd: Re,
				onInitialWidthCalculated: N,
				externalResize: F,
				moveResizeContainerXstyle: [
					h.moveResizeContainer,
					h.voipBorderRadius,
					g && h.voipBorder,
					o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus
				],
				children: u.jsx(r("WAWebVoipGridPageSizeContext").Provider, {
					value: U,
					children: l != null ? u.jsx(o("WAWebVoipUiLoadable").WAWebVoipUiLoadable, { callLogMsg: l }) : u.jsx(o("WAWebVoipUiLoadable").WAWebVoipUiLoadable, { callLogMsg: null })
				})
			})
		});
	}
	I.displayName = I.name + " [from " + i.id + "]";
	function T(e, t) {
		var n = t / e, r = n + v + S;
		return t / r;
	}
	l.default = I;
}), 98);
