__d("WAWebVoipUiVideoCall.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebName.react",
	"WAWebVoipCallHeader.react",
	"WAWebVoipCallStateUtils",
	"WAWebVoipEncryptionButton.react",
	"WAWebVoipGatingUtils",
	"WAWebVoipParticipantActionsDropdown.react",
	"WAWebVoipRaisedHandDisplay.react",
	"WAWebVoipReactionDisplay.react",
	"WAWebVoipUiPopoutWindowContext",
	"WAWebVoipUiVideoCallCenteredParticipantInfo.react",
	"WAWebVoipUiVideoCallPeerVideo.react",
	"WAWebVoipUiVideoCallSelfPreview.react",
	"WAWebWidFactory",
	"react",
	"react-compiler-runtime",
	"useWAWebHover",
	"useWAWebVoipPeerHasReceivedFrame",
	"useWAWebVoipVideoCallCanvasPolling",
	"useWAWebVoipVideoCallContainerSize",
	"useWAWebVoipVideoCallDerivedState"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useContext, p = c.useMemo, _ = c.useRef, f = c.useState, g = {
		centeredPreviewOverlay: {
			position: "x10l6tqk",
			top: "xugynej",
			bottom: "x1ey2m1c",
			insetInlineStart: "x4brfc7",
			insetInlineEnd: "x67dgr1",
			left: null,
			right: null,
			zIndex: "x1n327nk",
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			backgroundColor: "x16w0wmm",
			borderStartStartRadius: "x6nvzda",
			borderStartEndRadius: "x4i4b9w",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			$$css: !0
		},
		centeredPreviewOverlayPopout: {
			bottom: "x1t6nodo",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			$$css: !0
		}
	};
	function h(e) {
		var t = o("react-compiler-runtime").c(86), n = e.callLogMsg, a = e.callState, i = e.canRemoveParticipant, l = e.getActivityContainer, c = e.isCallLinkLobby, d = e.isCompactLayout, p = e.isGroupCall, h = e.isScreenShareBannerVisible, y = e.isScreenShareTile, C = e.isSelfHandRaised, b = e.isSelfScreenSharing, v = e.isVideoMuted, S = e.peerJid, R = e.peerMicMuted, L = e.peerReconnectingState, E = e.peerVideoPaused, k = e.selfMicMuted, I = e.selfReaction, T = e.showPeerVideo, D = e.showSelfPreview, x = e.videoAnimateInDelay, $ = i === void 0 ? !1 : i, P = c === void 0 ? !1 : c, N = d === void 0 ? !1 : d, M = p === void 0 ? !1 : p, w = h === void 0 ? !1 : h, A = y === void 0 ? !1 : y, F = C === void 0 ? !1 : C, O = v === void 0 ? !1 : v, B = S === void 0 ? "" : S, W = R === void 0 ? !1 : R, q = E === void 0 ? !1 : E, U = k === void 0 ? !1 : k, V = T === void 0 ? !0 : T, H = D === void 0 ? !0 : D, G = x === void 0 ? 0 : x, z = m(r("WAWebVoipUiPopoutWindowContext")), j = r("useWAWebVoipVideoCallContainerSize")(z.isContextInPopoutWindow, z.windowEl), K = j.canvasContainerCallbackRef, Q = j.canvasContainerRef, X = j.containerSize, Y = _(null), J;
		t[0] !== Q || t[1] !== l ? (J = function() {
			var e;
			return (e = l == null ? void 0 : l()) != null ? e : Q.current;
		}, t[0] = Q, t[1] = l, t[2] = J) : J = t[2];
		var Z = J, ee = o("useWAWebHover").useWAWebHover(Q), te = f(!1), ne = te[0], re = te[1], oe;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (oe = function(t) {
			re(t);
		}, t[3] = oe) : oe = t[3];
		var ae = oe, ie = _(null), le = f(!1), se = le[0], ue = le[1], ce;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (ce = function() {
			ue(!0);
		}, t[4] = ce) : ce = t[4];
		var de = ce, me;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (me = function(t) {
			var e, n = t.relatedTarget;
			(!(n instanceof Node) || !((e = ie.current) != null && e.contains(n))) && ue(!1);
		}, t[5] = me) : me = t[5];
		var pe = me, _e;
		t[6] !== a ? (_e = o("WAWebVoipCallStateUtils").isCallActive(a), t[6] = a, t[7] = _e) : _e = t[7];
		var fe = _e, ge = r("useWAWebVoipPeerHasReceivedFrame")(B), he;
		e: {
			if (B == null || B === "") {
				he = null;
				break e;
			}
			try {
				var ye;
				t[8] !== B ? (ye = o("WAWebWidFactory").createUserWidOrThrow(B), t[8] = B, t[9] = ye) : ye = t[9], he = ye;
			} catch (e) {
				he = null;
			}
		}
		var Ce = he, be = M && !P && Ce != null && (ee || ne || se), ve;
		t[10] !== be ? (ve = be && !o("WAWebVoipGatingUtils").isGuestViewer(), t[10] = be, t[11] = ve) : ve = t[11];
		var Se = ve, Re = r("useWAWebVoipVideoCallDerivedState")(n, a, X, P, F, O, B, H), Le = Re.centeredSelfPreviewHeight, Ee = Re.centeredSelfPreviewWidth, ke = Re.chat, Ie = Re.effectivePeerHandRaised, Te = Re.effectiveSelfHandRaised, De = Re.isCallOutgoing, xe = Re.isCallRinging, $e = Re.lobbyAccentColor, Pe = Re.outgoingGroupCallNameOverride, Ne = Re.outgoingGroupCallParticipants, Me = Re.peerParticipantName, we = Re.peerReaction, Ae = Re.peerUserId, Fe = Re.selfPreviewHeight, Oe = Re.selfPreviewWidth, Be = Re.shouldShowCenteredPreview, We = Re.unnamedGroupCallNameOverride;
		r("useWAWebVoipVideoCallCanvasPolling")(Y, Q, z.isContextInPopoutWindow);
		var qe;
		t[12] !== ke || t[13] !== M ? (qe = !M && ke != null ? u.jsx(o("WAWebName.react").Name, {
			chat: ke,
			elevatedPushNamesEnabled: !0,
			ellipsify: !0,
			showNotifyName: !0,
			unknownUserLogContext: "in_call"
		}) : null, t[12] = ke, t[13] = M, t[14] = qe) : qe = t[14];
		var Ue = qe, Ve;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? (Ve = { className: "x1n2onr6 x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d x6ikm8r x10wlt62 x12xbjc7 x12h1iku" }, t[15] = Ve) : Ve = t[15];
		var He;
		t[16] !== n || t[17] !== a || t[18] !== Q || t[19] !== Ie || t[20] !== N || t[21] !== w || t[22] !== A || t[23] !== B || t[24] !== W || t[25] !== Me || t[26] !== we || t[27] !== L || t[28] !== Ae || t[29] !== q || t[30] !== z.isContextInPopoutWindow || t[31] !== Be || t[32] !== V ? (He = !Be && u.jsxs("div", babelHelpers.extends({}, {
			0: { className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d" },
			1: { className: "x1n2onr6 xh8yej3 x5yr21d x78zum5 x6s0dn4 xl56j7k" }
		}[!!z.isContextInPopoutWindow << 0], { children: [
			u.jsx(o("WAWebVoipUiVideoCallPeerVideo.react").WAWebVoipUiVideoCallPeerVideo, {
				ref: Y,
				canvasContainerRef: Q,
				isCompactLayout: N,
				isScreenShareBannerVisible: w,
				isScreenShareTile: A,
				peerMicMuted: W,
				peerVideoPaused: q,
				peerVideoMuted: !V,
				peerJid: B,
				callLogMsg: n,
				callState: a,
				peerReconnectingState: L,
				userId: Ae
			}),
			u.jsx(r("WAWebVoipRaisedHandDisplay.react"), {
				emojiSize: "large",
				isHandRaised: Ie,
				participantName: Me,
				spacing: "large"
			}),
			u.jsx(r("WAWebVoipReactionDisplay.react"), {
				emojiSize: "large",
				reaction: we,
				shouldHaveOffset: Ie,
				spacing: "large"
			})
		] })), t[16] = n, t[17] = a, t[18] = Q, t[19] = Ie, t[20] = N, t[21] = w, t[22] = A, t[23] = B, t[24] = W, t[25] = Me, t[26] = we, t[27] = L, t[28] = Ae, t[29] = q, t[30] = z.isContextInPopoutWindow, t[31] = Be, t[32] = V, t[33] = He) : He = t[33];
		var Ge;
		t[34] !== n || t[35] !== a || t[36] !== Le || t[37] !== Ee || t[38] !== (ke == null ? void 0 : ke.id) || t[39] !== Te || t[40] !== P || t[41] !== N || t[42] !== b || t[43] !== O || t[44] !== $e || t[45] !== Pe || t[46] !== Ne || t[47] !== z.isContextInPopoutWindow || t[48] !== U || t[49] !== Be || t[50] !== We ? (Ge = Be && u.jsx(u.Fragment, { children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			xstyle: [g.centeredPreviewOverlay, z.isContextInPopoutWindow && g.centeredPreviewOverlayPopout],
			children: [u.jsx("div", {
				className: "x1of6sz5 x1ua1l7f",
				children: u.jsx(r("WAWebVoipUiVideoCallCenteredParticipantInfo.react"), {
					callLogMsg: n,
					callState: a,
					chatId: ke == null ? void 0 : ke.id,
					isCallLinkLobby: P,
					isCompactLayout: N,
					outgoingGroupCallNameOverride: Pe,
					outgoingGroupCallParticipants: Ne,
					unnamedGroupCallNameOverride: We
				})
			}), u.jsx(o("WAWebVoipUiVideoCallSelfPreview.react").WAWebVoipUiVideoCallSelfPreview, {
				accentColor: $e,
				floating: !1,
				containerRef: null,
				isSelfHandRaised: Te,
				nameOverride: P ? s._(
					/*BTDS*/
					""
				) : void 0,
				width: Ee,
				height: Le,
				isSelfScreenSharing: b,
				isVideoMuted: O,
				selfMicMuted: U
			})]
		}) }), t[34] = n, t[35] = a, t[36] = Le, t[37] = Ee, t[38] = ke == null ? void 0 : ke.id, t[39] = Te, t[40] = P, t[41] = N, t[42] = b, t[43] = O, t[44] = $e, t[45] = Pe, t[46] = Ne, t[47] = z.isContextInPopoutWindow, t[48] = U, t[49] = Be, t[50] = We, t[51] = Ge) : Ge = t[51];
		var ze;
		t[52] !== Te || t[53] !== b || t[54] !== O || t[55] !== U || t[56] !== Fe || t[57] !== Oe || t[58] !== I || t[59] !== Be || t[60] !== H || t[61] !== G ? (ze = H && !Be && u.jsx(o("WAWebVoipUiVideoCallSelfPreview.react").WAWebVoipUiVideoCallSelfPreview, {
			floating: !0,
			containerRef: Y,
			width: Oe,
			height: Fe,
			isSelfHandRaised: Te,
			isVideoMuted: O,
			selfMicMuted: U,
			isSelfScreenSharing: b,
			shouldAnimate: !0,
			animateInDelay: G,
			selfReaction: I
		}), t[52] = Te, t[53] = b, t[54] = O, t[55] = U, t[56] = Fe, t[57] = Oe, t[58] = I, t[59] = Be, t[60] = H, t[61] = G, t[62] = ze) : ze = t[62];
		var je;
		t[63] !== Ue || t[64] !== a || t[65] !== Z || t[66] !== ge || t[67] !== fe || t[68] !== N || t[69] !== ne || t[70] !== V ? (je = fe && V && ge && u.jsx(r("WAWebVoipCallHeader.react"), {
			callState: a,
			getActivityContainer: Z,
			isCompactLayout: N,
			isMenuOpen: ne,
			name: Ue
		}), t[63] = Ue, t[64] = a, t[65] = Z, t[66] = ge, t[67] = fe, t[68] = N, t[69] = ne, t[70] = V, t[71] = je) : je = t[71];
		var Ke;
		t[72] !== $ || t[73] !== De || t[74] !== xe || t[75] !== W || t[76] !== Ce || t[77] !== Se ? (Ke = !xe && !De && u.jsxs("div", {
			ref: ie,
			role: "toolbar",
			onFocus: de,
			onBlur: pe,
			className: "x6s0dn4 x1trrmfo x78zum5 x1q0g3np xa3bivy x10l6tqk xymx5cc x1jeq31z",
			children: [Se && Ce != null && u.jsx(r("WAWebVoipParticipantActionsDropdown.react"), {
				canRemoveParticipant: $,
				isParticipantMuted: W,
				participantJid: Ce,
				onOpenChange: ae
			}), u.jsx(r("WAWebVoipEncryptionButton.react"), {
				inline: !0,
				tonal: Se
			})]
		}), t[72] = $, t[73] = De, t[74] = xe, t[75] = W, t[76] = Ce, t[77] = Se, t[78] = Ke) : Ke = t[78];
		var Qe;
		return t[79] !== K || t[80] !== He || t[81] !== Ge || t[82] !== ze || t[83] !== je || t[84] !== Ke ? (Qe = u.jsxs("div", babelHelpers.extends({ ref: K }, Ve, { children: [
			He,
			Ge,
			ze,
			je,
			Ke
		] })), t[79] = K, t[80] = He, t[81] = Ge, t[82] = ze, t[83] = je, t[84] = Ke, t[85] = Qe) : Qe = t[85], Qe;
	}
	l.default = h;
}), 226);
