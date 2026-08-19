__d("WAWebVoipUiVideoGroupCallParticipant.react", [
	"fbt",
	"WAWebApiContact",
	"WAWebCallCollection",
	"WAWebContactCollection",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WAWebUserPrefsMeUser",
	"WAWebVoipEventConstants",
	"WAWebVoipGatingUtils",
	"WAWebVoipParticipantActionsDropdown.react",
	"WAWebVoipUiVideoCallPeerVideo.react",
	"WAWebVoipVideoStateUtils",
	"WAWebWidFactory",
	"WDSButton.react",
	"WDSIconIcKeepOffFilled.react",
	"WDSIconIcMicOffFilled.react",
	"WDSIconIcPushPinFilled.react",
	"WDSText.react",
	"WDSTooltip.react",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebContactValues",
	"useWAWebHover",
	"useWAWebVoipAudioLevel",
	"useWAWebVoipParticipantHandRaised"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useMemo, f = d.useRef, g = d.useState, h = {
		"::after_borderTopColor": "x194n69i",
		"::after_borderInlineEndColor": "xg04ot7",
		"::after_borderBottomColor": "x1t766aj",
		"::after_borderInlineStartColor": "xfwdxvh",
		$$css: !0
	}, y = {
		participantWrapper: {
			alignItems: "x6s0dn4",
			aspectRatio: "x1dltgaz",
			backgroundColor: "x1od0jb8",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			containerType: "x12h1iku",
			display: "x78zum5",
			height: "xt7dq6l",
			justifyContent: "xl56j7k",
			maxHeight: "xmz0i5r",
			maxWidth: "x193iq5w",
			minHeight: "x2lwn1j",
			minWidth: "xeuugli",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			position: "x1n2onr6",
			width: "xh8yej3",
			$$css: !0
		},
		participantWrapperPaginated: {
			aspectRatio: "x3kh6z4",
			height: "x5yr21d",
			$$css: !0
		},
		participantWrapperHorizontal: {
			height: "x5yr21d",
			width: "xh8yej3",
			$$css: !0
		},
		participantWrapperSpeaking: {
			"::after_borderTopColor": "xja8d9p",
			"::after_borderInlineEndColor": "xjdvyu9",
			"::after_borderBottomColor": "x1imp046",
			"::after_borderInlineStartColor": "x1xxv2cj",
			"::after_borderStartStartRadius": "xfijbtm",
			"::after_borderStartEndRadius": "xfenqrj",
			"::after_borderEndEndRadius": "xgy0gl7",
			"::after_borderEndStartRadius": "x19igvu",
			"::after_borderTopStyle": "xynf4tj",
			"::after_borderInlineEndStyle": "xdjs2zz",
			"::after_borderBottomStyle": "x1r9ni5o",
			"::after_borderInlineStartStyle": "xvsnedh",
			"::after_borderTopWidth": "x31ga2r",
			"::after_borderInlineEndWidth": "xbpqnmr",
			"::after_borderBottomWidth": "x13afdcp",
			"::after_borderInlineStartWidth": "xvpsmcx",
			"::after_boxSizing": "xx38sju",
			"::after_content": "x1s928wv",
			"::after_height": "x1wsn0xg",
			"::after_position": "x1j6awrg",
			"::after_top": "x1m1drc7",
			"::after_width": "x4eaejv",
			$$css: !0
		},
		participantWrapperSpeakingColor: function(t) {
			return [h, { "--x-joftei": t != null ? t : void 0 }];
		},
		participantWrapperSpeakingWhite: {
			"::after_borderTopColor": "x1jyw8v8",
			"::after_borderInlineEndColor": "x1956ix0",
			"::after_borderBottomColor": "x1j459go",
			"::after_borderInlineStartColor": "x1rxlf92",
			$$css: !0
		},
		mediaButtonFocusRing: {
			":focus-visible_outlineColor": "xtnn1bt",
			$$css: !0
		},
		participantActionsOverlay: {
			alignItems: "x6s0dn4",
			columnGap: "x1trrmfo",
			insetInlineEnd: "xe9xzdg",
			left: null,
			right: null,
			position: "x10l6tqk",
			top: "xugynej",
			zIndex: "xzkaem6",
			$$css: !0
		},
		participantActionsOverlayHidden: {
			opacity: "xg01cxk",
			pointerEvents: "x47corl",
			$$css: !0
		},
		participantActionsOverlayStrip: {
			alignItems: "x6s0dn4",
			bottom: "x1ey2m1c",
			columnGap: "x1s70e7g",
			insetInlineEnd: "xtijo5x",
			insetInlineStart: "x1o0tod",
			left: null,
			right: null,
			justifyContent: "xl56j7k",
			position: "x10l6tqk",
			top: "x13vifvy",
			zIndex: "xzkaem6",
			$$css: !0
		},
		participantInfoOverlay: {
			insetInlineStart: "x4brfc7",
			left: null,
			right: null,
			position: "x10l6tqk",
			top: "xugynej",
			zIndex: "x1u8a7rm",
			$$css: !0
		},
		participantInfoOverlayWithActions: {
			insetInlineEnd: "x1jndppq x1tg0a1",
			left: null,
			right: null,
			$$css: !0
		},
		participantInfoBadge: {
			backgroundColor: "x1rk1j4g",
			borderStartStartRadius: "x6nvzda",
			borderStartEndRadius: "x4i4b9w",
			borderEndEndRadius: "xhl9efl",
			borderEndStartRadius: "xj65ea0",
			rowGap: "x1b73lln",
			columnGap: "x46w9ns",
			height: "x10w6t97",
			maxWidth: "x1e4dklr",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			textOverflow: "xlyipyv",
			whiteSpace: "xuxw1ft",
			width: "x1td3qas",
			$$css: !0
		},
		participantInfoBadgeIconAndName: {
			paddingInlineEnd: "xde1mab xllm8u2",
			width: "x14atkfc x14uw2lg",
			$$css: !0
		},
		participantInfoBadgeNameOnly: {
			display: "x78zum5 x1v1lzd6",
			justifyContent: "x1nhvcw1",
			paddingInlineEnd: "xde1mab",
			paddingInlineStart: "x1iw51ew",
			width: "x14atkfc",
			$$css: !0
		},
		participantInfoMicIcon: {
			color: "x17t9dm2",
			flexShrink: "x2lah0s",
			$$css: !0
		},
		participantInfoMicIconWrapper: {
			height: "x10w6t97",
			width: "x1td3qas",
			$$css: !0
		},
		participantStripNameOverlay: {
			bottom: "x1t6nodo",
			insetInlineEnd: "x67dgr1",
			insetInlineStart: "x4brfc7",
			left: null,
			right: null,
			pointerEvents: "x47corl",
			position: "x10l6tqk",
			zIndex: "x1u8a7rm",
			$$css: !0
		},
		speakerModeDominantParticipantWrapper: {
			aspectRatio: "x3kh6z4",
			height: "x5yr21d",
			$$css: !0
		},
		speakerModeStripParticipantWrapper: {
			aspectRatio: "x1y5e3q9",
			$$css: !0
		}
	};
	function C(t) {
		var n, a = o("react-compiler-runtime").c(105), i = t.accentColor, l = t.canRemoveParticipant, u = t.forceVideoOff, d = t.forceVideoOn, m = t.initialPeerReconnectingState, _ = t.isCompactLayout, h = t.isDominantSpeaker, C = t.isHorizontalLayout, v = t.isPaginated, S = t.isPinned, R = t.isScreenShareTile, L = t.isSelfScreenSharing, E = t.isStripTile, k = t.onPinParticipant, I = t.onReadyToDisplay, T = t.participantJid, D = t.peerJid, x = l === void 0 ? !1 : l, $ = u === void 0 ? !1 : u, P = d === void 0 ? !1 : d, N = _ === void 0 ? !1 : _, M = h === void 0 ? !1 : h, w = C === void 0 ? !1 : C, A = v === void 0 ? !1 : v, F = S === void 0 ? !1 : S, O = R === void 0 ? !1 : R, B = L === void 0 ? !1 : L, W = E === void 0 ? !1 : E, q = f(null), U = f(null), V = o("useWAWebHover").useWAWebHover(U), H;
		a[0] !== T ? (H = o("WAWebUserPrefsMeUser").isMeAccount(T), a[0] = T, a[1] = H) : H = a[1];
		var G = H, z = g(!1), j = z[0], K = z[1], Q;
		a[2] === Symbol.for("react.memo_cache_sentinel") ? (Q = function(t) {
			K(t);
		}, a[2] = Q) : Q = a[2];
		var X = Q, Y = g(!1), J = Y[0], Z = Y[1], ee;
		a[3] === Symbol.for("react.memo_cache_sentinel") ? (ee = function() {
			Z(!0);
		}, a[3] = ee) : ee = a[3];
		var te = ee, ne;
		a[4] === Symbol.for("react.memo_cache_sentinel") ? (ne = function(t) {
			var e, n = t.relatedTarget;
			(!(n instanceof Node) || !((e = U.current) != null && e.contains(n))) && Z(!1);
		}, a[4] = ne) : ne = a[4];
		var re = ne, oe = V || j || J, ae;
		e: {
			var ie = r("WAWebCallCollection").activeCall;
			if (ie == null) {
				ae = null;
				break e;
			}
			var le;
			a[5] !== T ? (le = ie.getParticipantVideoState(T), a[5] = T, a[6] = le) : le = a[6], ae = le;
		}
		var se = ae, ue;
		a[7] !== se ? (ue = o("WAWebVoipVideoStateUtils").isVideoInactive(se), a[7] = se, a[8] = ue) : ue = a[8];
		var ce = g(ue), de = ce[0], me = ce[1], pe;
		a[9] !== se ? (pe = o("WAWebVoipVideoStateUtils").isVideoPaused(se), a[9] = se, a[10] = pe) : pe = a[10];
		var _e = g(pe), fe = _e[0], ge = _e[1], he = g(T), ye = he[0], Ce = he[1];
		T.equals(ye) || (Ce(T), me(o("WAWebVoipVideoStateUtils").isVideoInactive(se)), ge(o("WAWebVoipVideoStateUtils").isVideoPaused(se)));
		var be, ve;
		a[11] !== T ? (be = function() {
			var e = r("WAWebCallCollection").activeCall;
			if (e != null) {
				var t = e.isGroup, n = function(t) {
					var e = t.participantJid, n = t.videoState;
					e.equals(T) && (me(o("WAWebVoipVideoStateUtils").isVideoInactive(n)), ge(o("WAWebVoipVideoStateUtils").isVideoPaused(n)));
				};
				e.on("participantVideoStateChange", n);
				var a = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.VIDEO_STATE), i = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.SELF_VIDEO_STATE), l = function() {
					var t = e.getParticipantVideoState(T);
					me(o("WAWebVoipVideoStateUtils").isVideoInactive(t)), ge(o("WAWebVoipVideoStateUtils").isVideoPaused(t));
				};
				return t || (e.on(a, l), e.on(i, l)), (function() {
					e.off("participantVideoStateChange", n), t || (e.off(a, l), e.off(i, l));
				});
			}
		}, ve = [T], a[11] = T, a[12] = be, a[13] = ve) : (be = a[12], ve = a[13]), p(be, ve);
		var Se = !P && ($ || de), Re = !P && fe, Le;
		e: {
			var Ee = r("WAWebCallCollection").activeCall;
			if (Ee == null) {
				Le = !1;
				break e;
			}
			var ke;
			a[14] !== T ? (ke = Ee.isParticipantMicMuted(T), a[14] = T, a[15] = ke) : ke = a[15], Le = ke;
		}
		var Ie = Le, Te = g(Ie), De = Te[0], xe = Te[1], $e, Pe;
		a[16] !== T ? ($e = function() {
			var e = r("WAWebCallCollection").activeCall;
			if (e != null) {
				var t = e.isGroup, n = function(t) {
					var e = t.isMuted, n = t.participantJid;
					n.equals(T) && xe(e);
				};
				e.on("participantMicStateChange", n);
				var a = function() {
					xe(e.isParticipantMicMuted(T));
				}, i = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.SELF_MIC_MUTED), l = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.PEER_MIC_MUTED);
				return t || (e.on(i, a), e.on(l, a)), (function() {
					e.off("participantMicStateChange", n), t || (e.off(i, a), e.off(l, a));
				});
			}
		}, Pe = [T], a[16] = T, a[17] = $e, a[18] = Pe) : ($e = a[17], Pe = a[18]), p($e, Pe);
		var Ne;
		e: {
			var Me = r("WAWebCallCollection").activeCall;
			if (Me == null) {
				Ne = null;
				break e;
			}
			var we;
			if (a[19] !== T) {
				var Ae;
				we = (Ae = Me.getReactionForParticipant(T)) != null ? Ae : null, a[19] = T, a[20] = we;
			} else we = a[20];
			Ne = we;
		}
		var Fe = Ne, Oe = g(Fe), Be = Oe[0], We = Oe[1], qe, Ue;
		a[21] !== T ? (qe = function() {
			var e = r("WAWebCallCollection").activeCall;
			if (e != null) {
				var t = function() {
					var t = e.getReactionForParticipant(T);
					We(t != null ? t : null);
				};
				return e.on(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.REACTION_STATES), t), (function() {
					e.off(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.REACTION_STATES), t);
				});
			}
		}, Ue = [T], a[21] = T, a[22] = qe, a[23] = Ue) : (qe = a[22], Ue = a[23]), p(qe, Ue);
		var Ve;
		a[24] !== T ? (Ve = function() {
			return T;
		}, a[24] = T, a[25] = Ve) : Ve = a[25];
		var He = r("useWAWebVoipParticipantHandRaised")(Ve), Ge = g(m), ze = Ge[0], je = Ge[1], Ke, Qe;
		a[26] !== T ? (Ke = function() {
			var e = r("WAWebCallCollection").activeCall;
			if (e != null) {
				var t = function() {
					var t = e.getPeerReconnectingState(T);
					je(t);
				};
				return e.on(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.PEER_RECONNECTING), t), (function() {
					e.off(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.PEER_RECONNECTING), t);
				});
			}
		}, Qe = [T], a[26] = T, a[27] = Ke, a[28] = Qe) : (Ke = a[27], Qe = a[28]), p(Ke, Qe);
		var Xe = r("useWAWebVoipAudioLevel")("participant", T), Ye = Xe > 0, Je = b(T), Ze = (n = o("useWAWebContactValues").useOptionalContactValues(o("WAWebVoipGatingUtils").isGuestViewer() ? T : null, [o("WAWebFrontendContactGetters").getDisplayName])) == null ? void 0 : n[0], et = Je != null ? o("WAWebFrontendContactGetters").getFormattedShortName(Je) : null, tt = Ze != null ? Ze : et, nt;
		a[29] !== tt ? (nt = function(t) {
			return (typeof t == "object" && t !== null || typeof t == "function") && t.isScreenShareTile === !0 && t.isSelf === !0 ? s._(
				/*BTDS*/
				""
			) : (typeof t == "object" && t !== null || typeof t == "function") && t.isScreenShareTile === !0 && t.isSelf === !1 ? s._(
				/*BTDS*/
				"",
				[s._param("name", tt)]
			) : (typeof t == "object" && t !== null || typeof t == "function") && t.isSelf === !0 ? s._(
				/*BTDS*/
				""
			) : tt;
		}, a[29] = tt, a[30] = nt) : nt = a[30];
		var rt;
		a[31] !== O || a[32] !== G ? (rt = {
			isScreenShareTile: O,
			isSelf: G
		}, a[31] = O, a[32] = G, a[33] = rt) : rt = a[33];
		var ot;
		a[34] !== nt || a[35] !== rt ? (ot = nt(rt), a[34] = nt, a[35] = rt, a[36] = ot) : ot = a[36];
		var at = ot, it = tt != null && tt !== "", lt;
		a[37] !== tt ? (lt = function(t) {
			if ((typeof t == "object" && t !== null || typeof t == "function") && t.isPinned === !0 && t.hasParticipantName === !0) return s._(
				/*BTDS*/
				"",
				[s._param("name", tt)]
			);
			if ((typeof t == "object" && t !== null || typeof t == "function") && t.isPinned === !0 && t.hasParticipantName === !1) return s._(
				/*BTDS*/
				""
			);
			if ((typeof t == "object" && t !== null || typeof t == "function") && t.isPinned === !1 && t.hasParticipantName === !0) return s._(
				/*BTDS*/
				"",
				[s._param("name", tt)]
			);
			if ((typeof t == "object" && t !== null || typeof t == "function") && t.isPinned === !1 && t.hasParticipantName === !1) return s._(
				/*BTDS*/
				""
			);
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + t);
		}, a[37] = tt, a[38] = lt) : lt = a[38];
		var st;
		a[39] !== it || a[40] !== F ? (st = {
			hasParticipantName: it,
			isPinned: F
		}, a[39] = it, a[40] = F, a[41] = st) : st = a[41];
		var ut;
		a[42] !== lt || a[43] !== st ? (ut = lt(st), a[42] = lt, a[43] = st, a[44] = ut) : ut = a[44];
		var ct = ut, dt = oe && (G || it), mt = G ? void 0 : te, pt = G ? void 0 : re, _t;
		a[45] !== i || a[46] !== Se || a[47] !== M || a[48] !== w || a[49] !== A || a[50] !== Ye || a[51] !== W ? (_t = (e || (e = r("stylex"))).props([
			y.participantWrapper,
			w && y.participantWrapperHorizontal,
			A && y.participantWrapperPaginated,
			Ye && y.participantWrapperSpeaking,
			Ye && !Se && y.participantWrapperSpeakingWhite,
			Ye && Se && i != null && y.participantWrapperSpeakingColor(i),
			M && y.speakerModeDominantParticipantWrapper,
			W && y.speakerModeStripParticipantWrapper
		]), a[45] = i, a[46] = Se, a[47] = M, a[48] = w, a[49] = A, a[50] = Ye, a[51] = W, a[52] = _t) : _t = a[52];
		var ft = Se || W, gt;
		a[53] !== i || a[54] !== ze || a[55] !== Se || a[56] !== Re || a[57] !== N || a[58] !== M || a[59] !== He || a[60] !== w || a[61] !== O || a[62] !== G || a[63] !== B || a[64] !== W || a[65] !== I || a[66] !== T || a[67] !== tt || a[68] !== D || a[69] !== De || a[70] !== Be || a[71] !== ft ? (gt = c.jsx(o("WAWebVoipUiVideoCallPeerVideo.react").WAWebVoipUiVideoCallPeerVideo, {
			accentColor: i,
			callState: null,
			canvasContainerRef: U,
			isCompactLayout: N,
			isDominantSpeaker: M,
			isGroupCall: !0,
			isHandRaised: He,
			isHorizontalLayout: w,
			isScreenShareTile: O,
			isSelf: G,
			isSelfScreenSharing: B,
			isStripTile: W,
			onReadyToDisplay: I,
			participantName: tt,
			peerJid: D,
			peerMicMuted: De,
			peerReconnectingState: ze,
			peerVideoPaused: Re,
			peerVideoMuted: Se,
			reaction: Be,
			showMicIndicator: ft,
			userId: T,
			ref: q
		}), a[53] = i, a[54] = ze, a[55] = Se, a[56] = Re, a[57] = N, a[58] = M, a[59] = He, a[60] = w, a[61] = O, a[62] = G, a[63] = B, a[64] = W, a[65] = I, a[66] = T, a[67] = tt, a[68] = D, a[69] = De, a[70] = Be, a[71] = ft, a[72] = gt) : gt = a[72];
		var ht;
		a[73] !== Se || a[74] !== G || a[75] !== W || a[76] !== at || a[77] !== De || a[78] !== oe || a[79] !== dt ? (ht = !Se && !W && (De || dt) && c.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: [y.participantInfoOverlay, oe && !G && y.participantInfoOverlayWithActions],
			children: c.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: [
					y.participantInfoBadge,
					oe && De && y.participantInfoBadgeIconAndName,
					oe && !De && y.participantInfoBadgeNameOnly
				],
				children: [De && c.jsx(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "center",
					shrink: 0,
					xstyle: y.participantInfoMicIconWrapper,
					children: c.jsx(r("WDSIconIcMicOffFilled.react"), {
						height: 20,
						width: 20,
						xstyle: y.participantInfoMicIcon
					})
				}), dt && c.jsx("div", {
					className: "x1v1lzd6 xeuugli x6ikm8r x10wlt62",
					children: c.jsx(r("WDSText.react"), {
						type: "Body2Emphasized",
						colorName: "persistentAlwaysWhite",
						maxLines: 1,
						children: at
					})
				})]
			})
		}), a[73] = Se, a[74] = G, a[75] = W, a[76] = at, a[77] = De, a[78] = oe, a[79] = dt, a[80] = ht) : ht = a[80];
		var yt;
		a[81] !== He || a[82] !== W || a[83] !== at || a[84] !== Be || a[85] !== dt ? (yt = W && dt && !He && Be == null && c.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			xstyle: y.participantStripNameOverlay,
			children: c.jsx("div", {
				"data-testid": "voip-strip-participant-name",
				className: "x1rk1j4g x6nvzda x4i4b9w xhl9efl xj65ea0 x193iq5w xeuugli x6ikm8r x10wlt62 x1nzty39 x12w63v0",
				children: c.jsx(r("WDSText.react"), {
					type: "Body2Emphasized",
					colorName: "persistentAlwaysWhite",
					maxLines: 1,
					children: at
				})
			})
		}), a[81] = He, a[82] = W, a[83] = at, a[84] = Be, a[85] = dt, a[86] = yt) : yt = a[86];
		var Ct;
		a[87] !== x || a[88] !== F || a[89] !== G || a[90] !== W || a[91] !== k || a[92] !== T || a[93] !== De || a[94] !== ct || a[95] !== oe ? (Ct = !G && c.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: [W ? y.participantActionsOverlayStrip : y.participantActionsOverlay, !oe && y.participantActionsOverlayHidden],
			children: [k != null && c.jsx(r("WDSTooltip.react"), {
				label: F ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				),
				children: c.jsx(r("WDSButton.react"), {
					testid: "voip-pin-participant-button",
					variant: "tonal",
					type: "media",
					size: "small",
					Icon: r(F ? "WDSIconIcKeepOffFilled.react" : "WDSIconIcPushPinFilled.react"),
					onPress: k,
					"aria-label": ct,
					xstyle: y.mediaButtonFocusRing
				})
			}), !o("WAWebVoipGatingUtils").isGuestViewer() && c.jsx(r("WAWebVoipParticipantActionsDropdown.react"), {
				canRemoveParticipant: x,
				isParticipantMuted: De,
				participantJid: T,
				onOpenChange: X
			})]
		}), a[87] = x, a[88] = F, a[89] = G, a[90] = W, a[91] = k, a[92] = T, a[93] = De, a[94] = ct, a[95] = oe, a[96] = Ct) : Ct = a[96];
		var bt;
		return a[97] !== mt || a[98] !== pt || a[99] !== _t || a[100] !== gt || a[101] !== ht || a[102] !== yt || a[103] !== Ct ? (bt = c.jsxs("div", babelHelpers.extends({
			ref: U,
			onFocus: mt,
			onBlur: pt
		}, _t, { children: [
			gt,
			ht,
			yt,
			Ct
		] })), a[97] = mt, a[98] = pt, a[99] = _t, a[100] = gt, a[101] = ht, a[102] = yt, a[103] = Ct, a[104] = bt) : bt = a[104], bt;
	}
	function b(e) {
		var t = e.isUser() && e.device != null && e.device !== 0 ? o("WAWebWidFactory").asUserWidOrThrow(e) : e, n = o("WAWebContactCollection").ContactCollection.get(t);
		if ((n == null || !n.name) && e.isUser()) {
			var r = o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(e));
			if (r != null) {
				var a = o("WAWebContactCollection").ContactCollection.get(r);
				a != null && (n == null || a.name) && (n = a);
			}
			if (n != null && !n.name && n.phoneNumber) {
				var i = o("WAWebContactCollection").ContactCollection.get(n.phoneNumber);
				i != null && i.name && (n = i);
			}
		}
		return n;
	}
	l.default = C;
}), 226);
