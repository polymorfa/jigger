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
	"react-compiler-runtime",
	"useMergeRefs",
	"useWAWebEventTargetValue",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useMemo, p = u.useRef, _ = u.useState, f = "#3a3c3c", g = {
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
	}, h = {
		isContextInPopoutWindow: !0,
		popoverPortalEl: null,
		documentEl: document,
		windowEl: window,
		isDocPip: !1
	}, y = 640, C = y / (y * (3 / 4) + 60), b = 48, v = 16, S = 4 / 3, R = {
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
	}, L = 250, E = .8;
	function k(e) {
		var t, n = o("react-compiler-runtime").c(132), a = e.ref, i = e.animationStartStyle, l = e.msg, u = (t = l == null ? void 0 : l.isVideoCall) != null ? t : !1, c = o("WAWebThemeContext").useIsDarkTheme(), m = p(null), f = r("useMergeRefs")(a, m), v = p(null), k = p(null), q = p(null), U = p(null), V;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (V = function(t) {
			U.current == null && (U.current = t);
		}, n[0] = V) : V = n[0];
		var H = V, G = p(!1), z = p(!1), j = _(null), K = j[0], Q = j[1], X = _(null), Y = X[0], J = X[1], Z;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (Z = function(t) {
			J(t);
		}, n[1] = Z) : Z = n[1];
		var ee = Z, te = _(!1), ne = te[0], re = te[1], oe;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (oe = function() {
			re(!0);
		}, n[2] = oe) : oe = n[2];
		var ae = oe, ie;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (ie = function() {
			re(!1);
		}, n[3] = ie) : ie = n[3];
		var le = ie, se = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, "change:isVideo", B), ue = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, "change:state", O), ce;
		n[4] !== ue ? (ce = o("WAWebVoipCallStateUtils").isCallIncoming(ue), n[4] = ue, n[5] = ce) : ce = n[5];
		var de = ce, me = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, "change:shouldShowPostCallSurvey", F), pe;
		n[6] === Symbol.for("react.memo_cache_sentinel") ? (pe = function() {
			var e, t;
			return (e = v.current) == null || e.cancelDefaultHeightEnforcement(), (t = v.current) == null || t.markExternalResizeInProgress(!0), o("WAWebVoipUiPopoutWindowPortalContainer.react").getIsCallActiveInPopoutWindow();
		}, n[6] = pe) : pe = n[6];
		var _e = r("useWAWebEventTargetValue")(o("WAWebVoipUiPopoutWindowPortalContainer.react").WAWebVoipUiPopoutWindowEventEmitter, "setPopoutWindowProps", pe), fe = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, "change:videoState", A), ge = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, "participantVideoStateChange change:videoState change:selfVideoState", w), he = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, "change:callLinkState change:state", M), ye = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), "change:pendingCallLink", N), Ce;
		n[7] === Symbol.for("react.memo_cache_sentinel") ? (Ce = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.PENDING_OUTGOING_CALL), n[7] = Ce) : Ce = n[7];
		var be = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), Ce, P), ve;
		n[8] === Symbol.for("react.memo_cache_sentinel") ? (ve = function() {
			var e = r("WAWebCallCollection").activeCall, t = e != null && e.isCallLink && (e.getState() === o("WAWebVoipWaCallEnums").CallState.ConnectedLonely || o("WAWebVoipGatingUtils").isSmoothCallLinkLobbyEnabled() && !r("WAWebEnvironment").isGuest && e.isConnectingToCallLinkLobby());
			if (t) {
				var n, a;
				(n = v.current) == null || n.cancelDefaultHeightEnforcement(), (a = v.current) == null || a.markExternalResizeInProgress(!0);
			}
			return t;
		}, n[8] = ve) : ve = n[8];
		var Se = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, "change:state change:callLinkState", ve), Re;
		n[9] !== ue ? (Re = o("WAWebVoipCallStateUtils").isCallActive(ue), n[9] = ue, n[10] = Re) : Re = n[10];
		var Le = Re, Ee = Se && !Le && !_e, ke;
		n[11] !== _e || n[12] !== Se ? (ke = o("WAWebVoipGatingUtils").isSmoothCallLinkLobbyEnabled() && Se && !_e, n[11] = _e, n[12] = Se, n[13] = ke) : ke = n[13];
		var Ie = ke, Te = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, "change:isGroup", $), De;
		n[14] === Symbol.for("react.memo_cache_sentinel") ? (De = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.GROUP_CALL_PARTICIPANT_STATES), n[14] = De) : De = n[14];
		var xe = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, De, x), $e;
		n[15] === Symbol.for("react.memo_cache_sentinel") ? ($e = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.PEER_JID), n[15] = $e) : $e = n[15];
		var Pe = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, $e, D), Ne = Pe ? R.PUSH_NAME_LINE_EXTRA_HEIGHT : 0, Me;
		n[16] !== ue || n[17] !== Te ? (Me = o("WAWebVoipLobbyUtils").isLobbyApplicableForCallState(Te, ue), n[16] = ue, n[17] = Te, n[18] = Me) : Me = n[18];
		var we = Me, Ae = se || u || ge, Fe = Ae && Te && xe > 2 && !_e && !we && !he && !me, Oe = fe && !_e && !we && !Se && !Fe, Be;
		n[19] !== Oe ? (Be = Oe ? W(S, y) : C, n[19] = Oe, n[20] = Be) : Be = n[20];
		var We = Be, qe;
		n[21] !== xe || n[22] !== _e || n[23] !== he || n[24] !== we || n[25] !== ye || n[26] !== be || n[27] !== Ne || n[28] !== me || n[29] !== Ee || n[30] !== Ae || n[31] !== Fe || n[32] !== Ie ? (me ? qe = R.MIN_SURVEY_HEIGHT : _e ? qe = R.MIN_MOVE_CALL_HERE_HEIGHT + Ne : Ie ? qe = R.MIN_VIDEO_CALL_HEIGHT : he ? qe = Ae ? R.MIN_CALL_LINK_VIDEO_PREVIEW_HEIGHT : R.MIN_CALL_LINK_AUDIO_PREVIEW_HEIGHT : ye != null ? qe = ye.isVideo ? R.MIN_CALL_LINK_VIDEO_PREVIEW_HEIGHT : R.MIN_CALL_LINK_AUDIO_PREVIEW_HEIGHT : be != null ? qe = be.isVideo ? R.MIN_VIDEO_CALL_HEIGHT : R.MIN_VOICE_CALL_HEIGHT : we ? qe = Ae ? R.MIN_VIDEO_CALL_LOBBY_HEIGHT : R.MIN_VOICE_CALL_LOBBY_HEIGHT : Ee ? qe = R.MIN_VIDEO_CALL_HEIGHT : Fe ? qe = R.MIN_GROUP_AUDIO_CALL_HEIGHT : Ae ? qe = R.MIN_VIDEO_CALL_HEIGHT : xe > 2 ? qe = R.MIN_GROUP_AUDIO_CALL_HEIGHT : qe = R.MIN_VOICE_CALL_HEIGHT + Ne, n[21] = xe, n[22] = _e, n[23] = he, n[24] = we, n[25] = ye, n[26] = be, n[27] = Ne, n[28] = me, n[29] = Ee, n[30] = Ae, n[31] = Fe, n[32] = Ie, n[33] = qe) : qe = n[33];
		var Ue;
		n[34] !== we || n[35] !== Ee || n[36] !== Ae || n[37] !== Ie ? (Ie ? Ue = R.LOBBY_SELF_PREVIEW_WIDTH + R.SHARE_PANEL_WIDTH : we ? Ue = R.MIN_VIDEO_CALL_WIDTH : Ee ? Ue = R.LOBBY_SELF_PREVIEW_WIDTH + R.SHARE_PANEL_WIDTH : Ae ? Ue = R.MIN_VIDEO_CALL_WIDTH : Ue = R.MIN_VOICE_CALL_WIDTH, n[34] = we, n[35] = Ee, n[36] = Ae, n[37] = Ie, n[38] = Ue) : Ue = n[38];
		var Ve;
		Ie || Ee ? Ve = R.LOBBY_SELF_PREVIEW_WIDTH + R.SHARE_PANEL_WIDTH : Ae ? Ve = R.INITIAL_VIDEO_CALL_WIDTH : Ve = R.INITIAL_VOICE_CALL_WIDTH;
		var He;
		n[39] !== Ve ? (He = { width: Ve }, n[39] = Ve, n[40] = He) : He = n[40];
		var Ge = He, ze;
		n[41] === Symbol.for("react.memo_cache_sentinel") ? (ze = function(t, n, r) {
			var e = m.current;
			if (e) {
				var o = e.offsetHeight;
				q.current = {
					width: t,
					height: o
				};
			}
		}, n[41] = ze) : ze = n[41];
		var je = ze, Ke = T, Qe = I, Xe;
		n[42] !== _e || n[43] !== Le || n[44] !== Se || n[45] !== qe || n[46] !== Ue || n[47] !== Ne ? (Xe = function() {
			var e = G.current;
			if (G.current = _e, _e && !e) {
				var t;
				m.current && (k.current = {
					width: m.current.offsetWidth,
					height: m.current.offsetHeight
				});
				var n = {
					width: Math.max((t = U.current) != null ? t : Ue, Ue),
					height: R.MIN_MOVE_CALL_HERE_HEIGHT + Ne
				};
				Q(n);
			} else if (!_e && e) {
				var r = k.current || q.current;
				if (r) {
					var o = Se && !Le, a = o ? Math.max(qe, R.MIN_VIDEO_CALL_HEIGHT) : qe, i = {
						width: Math.max(r.width, Ue),
						height: Math.max(r.height, a)
					};
					Q(i), k.current = null;
				}
			}
		}, n[42] = _e, n[43] = Le, n[44] = Se, n[45] = qe, n[46] = Ue, n[47] = Ne, n[48] = Xe) : Xe = n[48];
		var Ye;
		n[49] !== _e || n[50] !== Le || n[51] !== Se || n[52] !== qe || n[53] !== Ue || n[54] !== Ne ? (Ye = [
			_e,
			Ue,
			qe,
			Ne,
			Se,
			Le
		], n[49] = _e, n[50] = Le, n[51] = Se, n[52] = qe, n[53] = Ue, n[54] = Ne, n[55] = Ye) : Ye = n[55], d(Xe, Ye);
		var Je, Ze;
		n[56] !== ue || n[57] !== _e || n[58] !== he || n[59] !== de || n[60] !== we || n[61] !== Ae ? (Je = function() {
			if (we && !he) {
				var e = m.current;
				if (e) {
					var t = e.offsetWidth, n = e.offsetHeight, r = de || ue === o("WAWebVoipWaCallEnums").CallState.Rejoining;
					if (r) {
						if (Ae) {
							var a, i, l = Math.max(t, R.MIN_VIDEO_CALL_WIDTH), s = o("WAWebVoipLobbyHeightUtils").calculateIncomingGroupVideoLobbyHeight(0, !1, !0, l);
							(a = v.current) == null || a.cancelDefaultHeightEnforcement(), (i = v.current) == null || i.markExternalResizeInProgress(!0), Q({
								width: l,
								height: s
							});
						} else t < R.MIN_VIDEO_CALL_WIDTH && Q({
							width: R.MIN_VIDEO_CALL_WIDTH,
							height: n
						});
						return;
					}
					var u = Ae ? R.MIN_VIDEO_CALL_LOBBY_HEIGHT : R.MIN_VOICE_CALL_LOBBY_HEIGHT, c = {
						width: Math.max(t, R.MIN_VIDEO_CALL_WIDTH),
						height: Math.max(n, u)
					};
					Q(c);
				}
			} else {
				var d = z.current;
				if (z.current = Ae, Ae && !d && !_e) {
					var p = m.current;
					if (p) {
						var _ = p.offsetWidth, f = p.offsetHeight, g = _ < R.MIN_VIDEO_CALL_WIDTH || f < R.MIN_VIDEO_CALL_HEIGHT;
						if (g) {
							var h, y;
							(h = v.current) == null || h.cancelDefaultHeightEnforcement(), (y = v.current) == null || y.markExternalResizeInProgress(!0);
						}
						var C = {
							width: Math.max(_, R.MIN_VIDEO_CALL_WIDTH),
							height: Math.max(f, R.MIN_VIDEO_CALL_HEIGHT)
						};
						Q(C);
					}
				}
			}
		}, Ze = [
			Ae,
			_e,
			we,
			de,
			ue,
			he
		], n[56] = ue, n[57] = _e, n[58] = he, n[59] = de, n[60] = we, n[61] = Ae, n[62] = Je, n[63] = Ze) : (Je = n[62], Ze = n[63]), d(Je, Ze);
		var et;
		n[64] !== Ee ? (et = o("WAWebVoipGatingUtils").isSmoothCallLinkLobbyEnabled() ? !1 : Ee, n[64] = Ee, n[65] = et) : et = n[65];
		var tt = p(et), nt = p(0), rt = p(0), ot;
		n[66] !== _e || n[67] !== he || n[68] !== we ? (ot = function(t) {
			var e, n, r = t.connectedParticipantCount, a = t.hasNoParticipants, i = t.isExpanded, l = t.isVideoCall;
			if (!(!we || _e || he)) {
				var s = m.current;
				if (s) {
					var u = s.offsetWidth, c = l ? o("WAWebVoipLobbyHeightUtils").calculateIncomingGroupVideoLobbyHeight(r, i, a, u) : o("WAWebVoipLobbyHeightUtils").calculateIncomingGroupAudioLobbyHeight(r, i, a);
					(e = v.current) == null || e.cancelDefaultHeightEnforcement(), (n = v.current) == null || n.markExternalResizeInProgress(!0), Q({
						width: u,
						height: c
					});
				}
			}
		}, n[66] = _e, n[67] = he, n[68] = we, n[69] = ot) : ot = n[69], o("useWAWebListener").useListener(o("WAWebVoipLobbyHeightUtils").WAWebVoipLobbyPanelStateEmitter, "panelStateChanged", ot);
		var at, it;
		n[70] !== _e || n[71] !== Ne || n[72] !== Ee || n[73] !== Ae ? (at = function() {
			var e = tt.current;
			if (tt.current = Ee, !_e) {
				var t = m.current;
				if (t) {
					var n = t.offsetWidth, a = t.offsetHeight, i = R.SHARE_PANEL_WIDTH, l = parseFloat(t.style.left) || 0;
					if (Ee && !e) {
						var s, u;
						(s = v.current) == null || s.cancelDefaultHeightEnforcement(), (u = v.current) == null || u.markExternalResizeInProgress(!0);
						var c = Math.max(n, R.LOBBY_SELF_PREVIEW_WIDTH + i), d = c - n;
						nt.current = d;
						var p = Math.max(a, R.MIN_VIDEO_CALL_HEIGHT), _ = p - a;
						if (rt.current = _, d === 0 && _ === 0) return;
						var f = {
							width: c,
							height: p
						};
						r("WAWebL10N").isRTL() && (f.left = Math.max(o("WAWebPipFloatingVideoPlayer.react").CALLING_MARGIN_X, l - d)), Q(f);
					} else if (!Ee && e) {
						var g, h, y = nt.current;
						nt.current = 0;
						var C = rt.current;
						if (rt.current = 0, y === 0 && C === 0) return;
						(g = v.current) == null || g.cancelDefaultHeightEnforcement(), (h = v.current) == null || h.markExternalResizeInProgress(!0);
						var b = Ae ? R.MIN_VIDEO_CALL_WIDTH : R.MIN_VOICE_CALL_WIDTH, S = Math.max(n - y, b), L = n - S, E = Ae ? R.MIN_VIDEO_CALL_HEIGHT : R.MIN_VOICE_CALL_HEIGHT + Ne, k = Math.max(a - C, E), I = {
							width: S,
							height: k
						};
						r("WAWebL10N").isRTL() && (I.left = l + L), Q(I);
					}
				}
			}
		}, it = [
			Ee,
			_e,
			Ae,
			Ne
		], n[70] = _e, n[71] = Ne, n[72] = Ee, n[73] = Ae, n[74] = at, n[75] = it) : (at = n[74], it = n[75]), d(at, it);
		var lt = p(!1), st = xe > 2 && !Ae && !we && !_e, ut, ct;
		n[76] !== Ne || n[77] !== Ee || n[78] !== Ae || n[79] !== st ? (ut = function() {
			var e = lt.current;
			if (lt.current = st, st !== e) {
				var t = m.current;
				if (t) {
					var n = t.offsetWidth, r = t.offsetHeight;
					if (st) {
						var o = R.MIN_GROUP_AUDIO_CALL_HEIGHT;
						if (r !== o) {
							var a, i;
							(a = v.current) == null || a.cancelDefaultHeightEnforcement(), (i = v.current) == null || i.markExternalResizeInProgress(!0), Q({
								width: n,
								height: o
							});
						}
					} else if (!Ae && !Ee) {
						var l = R.MIN_VOICE_CALL_HEIGHT + Ne;
						if (r > l) {
							var s, u;
							(s = v.current) == null || s.cancelDefaultHeightEnforcement(), (u = v.current) == null || u.markExternalResizeInProgress(!0), Q({
								width: n,
								height: l
							});
						}
					}
				}
			}
		}, ct = [
			st,
			Ae,
			Ne,
			Ee
		], n[76] = Ne, n[77] = Ee, n[78] = Ae, n[79] = st, n[80] = ut, n[81] = ct) : (ut = n[80], ct = n[81]), d(ut, ct);
		var dt = p(null), mt, pt;
		n[82] !== xe || n[83] !== Y || n[84] !== _e || n[85] !== Fe ? (mt = function() {
			var e, t;
			if (!Fe || _e || Y == null) {
				dt.current = null;
				return;
			}
			var n = m.current;
			if (n) {
				var r = n.offsetWidth, a = Math.min(xe, Y), i = dt.current;
				if (dt.current = xe, !(i != null && !o("WAWebVoipGridLayoutCalculator").hasCanonicalGridShapeChanged(i, xe, Y))) {
					var l = Math.max(R.MIN_GROUP_AUDIO_CALL_HEIGHT, o("WAWebVoipGridLayoutCalculator").calculateGroupVideoGridContentHeight(r, a) + b), s = n.offsetHeight;
					Math.abs(s - l) < 1 || ((e = v.current) == null || e.cancelDefaultHeightEnforcement(), (t = v.current) == null || t.markExternalResizeInProgress(!0), Q({
						width: r,
						height: l
					}));
				}
			}
		}, pt = [
			Fe,
			xe,
			Y,
			_e
		], n[82] = xe, n[83] = Y, n[84] = _e, n[85] = Fe, n[86] = mt, n[87] = pt) : (mt = n[86], pt = n[87]), d(mt, pt);
		var _t = p(we), ft, gt;
		n[88] !== xe || n[89] !== _e || n[90] !== we || n[91] !== Ne || n[92] !== Ae ? (ft = function() {
			var e = _t.current;
			if (_t.current = we, e && !we) {
				if (Ae || xe > 2 || _e) return;
				var t = m.current;
				if (!t) return;
				var n = t.offsetWidth, r = t.offsetHeight, o = R.MIN_VOICE_CALL_HEIGHT + Ne;
				if (r > o) {
					var a, i;
					(a = v.current) == null || a.cancelDefaultHeightEnforcement(), (i = v.current) == null || i.markExternalResizeInProgress(!0), Q({
						width: n,
						height: o
					});
				}
			}
		}, gt = [
			we,
			Ae,
			xe,
			_e,
			Ne
		], n[88] = xe, n[89] = _e, n[90] = we, n[91] = Ne, n[92] = Ae, n[93] = ft, n[94] = gt) : (ft = n[93], gt = n[94]), d(ft, gt);
		var ht = p(We), yt, Ct;
		n[95] !== Oe || n[96] !== We ? (yt = function() {
			var e, t, n = ht.current;
			if (ht.current = We, !(!Oe || n === We)) {
				var r = m.current;
				if (r) {
					var o = r.offsetWidth, a = o / We;
					(e = v.current) == null || e.cancelDefaultHeightEnforcement(), (t = v.current) == null || t.markExternalResizeInProgress(!0), Q({
						width: o,
						height: a
					});
				}
			}
		}, Ct = [We, Oe], n[95] = Oe, n[96] = We, n[97] = yt, n[98] = Ct) : (yt = n[97], Ct = n[98]), d(yt, Ct);
		var bt = r("WAWebEnvironment").isGuest || ne, vt, St;
		n[99] !== bt ? (vt = function() {
			if (!bt && m.current != null) {
				var e = m.current;
				e.style.transform = "scale(" + E + ")", e.style.opacity = "0", window.requestAnimationFrame(function() {
					r("WAWebVelocityAnimate")(e, {
						scale: [1, E],
						opacity: [1, 0]
					}, {
						duration: L,
						easing: "easeOutElastic"
					}).finally(function() {
						e.style.transform = "", e.style.opacity = "";
					});
				});
			}
		}, St = [bt], n[99] = bt, n[100] = vt, n[101] = St) : (vt = n[100], St = n[101]), d(vt, St);
		var Rt = de || _e || we || he || st, Lt;
		n[102] !== ne ? (Lt = {
			isFullScreen: ne,
			enterFullScreen: ae,
			exitFullScreen: le
		}, n[102] = ne, n[103] = Lt) : Lt = n[103];
		var Et = Lt, kt = l != null ? o("WAWebFrontendMsgGetters").getChat(l) : null, It = kt != null ? o("WAWebMuteCollection").MuteCollection.get(kt.id) : null, Tt = It != null && o("WAWebMuteGetters").getIsCallMuted(It), Dt = r("WAWebCallCollection").activeCall;
		if (Te && Tt && (de || o("WAWebVoipCallStateUtils").isCallTerminal(ue) && (Dt == null ? void 0 : Dt.wasEverConnected) !== !0 && (Dt == null ? void 0 : Dt.outgoing) !== !0)) return null;
		if (bt) {
			var xt;
			n[104] === Symbol.for("react.memo_cache_sentinel") ? (xt = s.jsx(o("WAWebVoipPopoutModalManagerWrapper.react").VoipPopoutModalManagerWrapper, { type: o("WAWebVoipPopoutModalManagerWrapper.react").ModalType }), n[104] = xt) : xt = n[104];
			var $t;
			n[105] === Symbol.for("react.memo_cache_sentinel") ? ($t = { className: "xixxii4 x13vifvy x1ey2m1c x1o0tod xtijo5x x67bb7w" }, n[105] = $t) : $t = n[105];
			var Pt;
			n[106] !== l ? (Pt = l != null ? s.jsx(o("WAWebVoipUiLoadable").WAWebVoipUiLoadable, { callLogMsg: l }) : s.jsx(o("WAWebVoipUiLoadable").WAWebVoipUiLoadable, { callLogMsg: null }), n[106] = l, n[107] = Pt) : Pt = n[107];
			var Nt;
			n[108] !== f || n[109] !== Pt ? (Nt = s.jsxs(r("WAWebVoipUiPopoutWindowContext").Provider, {
				value: h,
				children: [xt, s.jsx("div", babelHelpers.extends({ ref: f }, $t, { children: Pt }))]
			}), n[108] = f, n[109] = Pt, n[110] = Nt) : Nt = n[110];
			var Mt;
			return n[111] !== Et || n[112] !== Nt ? (Mt = s.jsx(r("WAWebVoipFullScreenContext").Provider, {
				value: Et,
				children: Nt
			}), n[111] = Et, n[112] = Nt, n[113] = Mt) : Mt = n[113], Mt;
		}
		var wt = Rt ? !0 : void 0, At = c && g.voipBorder, Ft;
		n[114] !== At ? (Ft = [
			g.moveResizeContainer,
			g.voipBorderRadius,
			At,
			o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus
		], n[114] = At, n[115] = Ft) : Ft = n[115];
		var Ot;
		n[116] !== l ? (Ot = s.jsx(r("WAWebVoipGridPageSizeContext").Provider, {
			value: ee,
			children: l != null ? s.jsx(o("WAWebVoipUiLoadable").WAWebVoipUiLoadable, { callLogMsg: l }) : s.jsx(o("WAWebVoipUiLoadable").WAWebVoipUiLoadable, { callLogMsg: null })
		}), n[116] = l, n[117] = Ot) : Ot = n[117];
		var Bt;
		n[118] !== i || n[119] !== K || n[120] !== Ge || n[121] !== f || n[122] !== qe || n[123] !== Ue || n[124] !== wt || n[125] !== Ft || n[126] !== Ot || n[127] !== We ? (Bt = s.jsx(o("WAWebPipFloatingVideoPlayer.react").FloatingVideoPlayer, {
			ref: f,
			aspectRatio: We,
			initialPiPStyle: Ge,
			animationStartStyle: i,
			enableDragBar: !1,
			dragCursor: "grab",
			minWidthOverride: Ue,
			minHeightOverride: qe,
			moveResizeRef: v,
			independentResize: !0,
			useChatListPanelPositioning: !0,
			disableResize: wt,
			onResize: je,
			onResizeEnd: Ke,
			onMoveEnd: Qe,
			onInitialWidthCalculated: H,
			externalResize: K,
			moveResizeContainerXstyle: Ft,
			children: Ot
		}), n[118] = i, n[119] = K, n[120] = Ge, n[121] = f, n[122] = qe, n[123] = Ue, n[124] = wt, n[125] = Ft, n[126] = Ot, n[127] = We, n[128] = Bt) : Bt = n[128];
		var Wt;
		return n[129] !== Et || n[130] !== Bt ? (Wt = s.jsx(r("WAWebVoipFullScreenContext").Provider, {
			value: Et,
			children: Bt
		}), n[129] = Et, n[130] = Bt, n[131] = Wt) : Wt = n[131], Wt;
	}
	function I() {
		o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.VOIP_WINDOW_DRAG);
	}
	function T() {
		o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.VOIP_WINDOW_RESIZE);
	}
	function D() {
		var e = r("WAWebCallCollection").activeCall;
		if (e == null || e.isGroup) return !1;
		var t = e.peerJid != null ? o("WAWebContactCollection").ContactCollection.get(e.peerJid) : null;
		return o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(t);
	}
	function x() {
		var e, t;
		return (e = (t = r("WAWebCallCollection").activeCall) == null || (t = t.groupCallParticipantsConnected) == null ? void 0 : t.length) != null ? e : 0;
	}
	function $() {
		var e, t;
		return (e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.isGroup) != null ? e : !1;
	}
	function P() {
		return r("WAWebCallCollection").pendingOutgoingCall;
	}
	function N() {
		return r("WAWebCallCollection").pendingCallLink;
	}
	function M() {
		var e, t;
		return (e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.isInCallLinkPreview()) != null ? e : !1;
	}
	function w() {
		var e = r("WAWebCallCollection").activeCall;
		if (e == null || !e.isGroup) return !1;
		if (o("WAWebVoipVideoStateUtils").isVideoEnabled(e.selfVideoState)) return !0;
		for (var t of (n = e.groupCallParticipantsConnected) != null ? n : []) {
			var n;
			if (o("WAWebVoipVideoStateUtils").isVideoEnabled(e.getParticipantVideoState(t))) return !0;
		}
		return !1;
	}
	function A() {
		var e, t;
		return (e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.shouldShowPeerVideo()) != null ? e : !1;
	}
	function F() {
		var e, t;
		return (e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.shouldShowPostCallSurvey) != null ? e : !1;
	}
	function O() {
		var e;
		return (e = r("WAWebCallCollection").activeCall) == null ? void 0 : e.getState();
	}
	function B() {
		var e, t;
		return (e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.isVideo) != null ? e : !1;
	}
	function W(e, t) {
		var n = t / e, r = n + b + v;
		return t / r;
	}
	l.default = k;
}), 98);
