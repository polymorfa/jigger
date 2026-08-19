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
		var t = e.callLogMsg, n = e.callState, a = e.canRemoveParticipant, i = a === void 0 ? !1 : a, l = e.getActivityContainer, c = e.isCallLinkLobby, h = c === void 0 ? !1 : c, y = e.isCompactLayout, C = y === void 0 ? !1 : y, b = e.isGroupCall, v = b === void 0 ? !1 : b, S = e.isScreenShareBannerVisible, R = S === void 0 ? !1 : S, L = e.isScreenShareTile, E = L === void 0 ? !1 : L, k = e.isSelfHandRaised, I = k === void 0 ? !1 : k, T = e.isSelfScreenSharing, D = e.isVideoMuted, x = D === void 0 ? !1 : D, $ = e.peerJid, P = $ === void 0 ? "" : $, N = e.peerMicMuted, M = N === void 0 ? !1 : N, w = e.peerReconnectingState, A = e.peerVideoPaused, F = A === void 0 ? !1 : A, O = e.selfMicMuted, B = O === void 0 ? !1 : O, W = e.selfReaction, q = e.showPeerVideo, U = q === void 0 ? !0 : q, V = e.showSelfPreview, H = V === void 0 ? !0 : V, G = e.videoAnimateInDelay, z = G === void 0 ? 0 : G, j = m(r("WAWebVoipUiPopoutWindowContext")), K = r("useWAWebVoipVideoCallContainerSize")(j.isContextInPopoutWindow, j.windowEl), Q = K.canvasContainerCallbackRef, X = K.canvasContainerRef, Y = K.containerSize, J = _(null), Z = d(function() {
			var e;
			return (e = l == null ? void 0 : l()) != null ? e : X.current;
		}, [X, l]), ee = o("useWAWebHover").useWAWebHover(X), te = f(!1), ne = te[0], re = te[1], oe = d(function(e) {
			re(e);
		}, []), ae = _(null), ie = f(!1), le = ie[0], se = ie[1], ue = d(function() {
			se(!0);
		}, []), ce = d(function(e) {
			var t, n = e.relatedTarget;
			(!(n instanceof Node) || !((t = ae.current) != null && t.contains(n))) && se(!1);
		}, []), de = o("WAWebVoipCallStateUtils").isCallActive(n), me = r("useWAWebVoipPeerHasReceivedFrame")(P), pe = p(function() {
			if (P == null || P === "") return null;
			try {
				return o("WAWebWidFactory").createUserWidOrThrow(P);
			} catch (e) {
				return null;
			}
		}, [P]), _e = v && !h && pe != null && (ee || ne || le), fe = _e && !o("WAWebVoipGatingUtils").isGuestViewer(), ge = r("useWAWebVoipVideoCallDerivedState")(t, n, Y, h, I, x, P, H), he = ge.centeredSelfPreviewHeight, ye = ge.centeredSelfPreviewWidth, Ce = ge.chat, be = ge.effectivePeerHandRaised, ve = ge.effectiveSelfHandRaised, Se = ge.isCallOutgoing, Re = ge.isCallRinging, Le = ge.lobbyAccentColor, Ee = ge.outgoingGroupCallNameOverride, ke = ge.outgoingGroupCallParticipants, Ie = ge.peerParticipantName, Te = ge.peerReaction, De = ge.peerUserId, xe = ge.selfPreviewHeight, $e = ge.selfPreviewWidth, Pe = ge.shouldShowCenteredPreview, Ne = ge.unnamedGroupCallNameOverride;
		r("useWAWebVoipVideoCallCanvasPolling")(J, X, j.isContextInPopoutWindow);
		var Me = !v && Ce != null ? u.jsx(o("WAWebName.react").Name, {
			chat: Ce,
			elevatedPushNamesEnabled: !0,
			ellipsify: !0,
			showNotifyName: !0,
			unknownUserLogContext: "in_call"
		}) : null;
		return u.jsxs("div", {
			ref: Q,
			className: "x1n2onr6 x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d x6ikm8r x10wlt62 x12xbjc7 x12h1iku",
			children: [
				!Pe && u.jsxs("div", babelHelpers.extends({}, {
					0: { className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d" },
					1: { className: "x1n2onr6 xh8yej3 x5yr21d x78zum5 x6s0dn4 xl56j7k" }
				}[!!j.isContextInPopoutWindow << 0], { children: [
					u.jsx(o("WAWebVoipUiVideoCallPeerVideo.react").WAWebVoipUiVideoCallPeerVideo, {
						ref: J,
						canvasContainerRef: X,
						isCompactLayout: C,
						isScreenShareBannerVisible: R,
						isScreenShareTile: E,
						peerMicMuted: M,
						peerVideoPaused: F,
						peerVideoMuted: !U,
						peerJid: P,
						callLogMsg: t,
						callState: n,
						peerReconnectingState: w,
						userId: De
					}),
					u.jsx(r("WAWebVoipRaisedHandDisplay.react"), {
						emojiSize: "large",
						isHandRaised: be,
						participantName: Ie,
						spacing: "large"
					}),
					u.jsx(r("WAWebVoipReactionDisplay.react"), {
						emojiSize: "large",
						reaction: Te,
						shouldHaveOffset: be,
						spacing: "large"
					})
				] })),
				Pe && u.jsx(u.Fragment, { children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "center",
					justify: "center",
					xstyle: [g.centeredPreviewOverlay, j.isContextInPopoutWindow && g.centeredPreviewOverlayPopout],
					children: [u.jsx("div", {
						className: "x1of6sz5 x1ua1l7f",
						children: u.jsx(r("WAWebVoipUiVideoCallCenteredParticipantInfo.react"), {
							callLogMsg: t,
							callState: n,
							chatId: Ce == null ? void 0 : Ce.id,
							isCallLinkLobby: h,
							isCompactLayout: C,
							outgoingGroupCallNameOverride: Ee,
							outgoingGroupCallParticipants: ke,
							unnamedGroupCallNameOverride: Ne
						})
					}), u.jsx(o("WAWebVoipUiVideoCallSelfPreview.react").WAWebVoipUiVideoCallSelfPreview, {
						accentColor: Le,
						floating: !1,
						containerRef: null,
						isSelfHandRaised: ve,
						nameOverride: h ? s._(
							/*BTDS*/
							""
						) : void 0,
						width: ye,
						height: he,
						isSelfScreenSharing: T,
						isVideoMuted: x,
						selfMicMuted: B
					})]
				}) }),
				H && !Pe && u.jsx(o("WAWebVoipUiVideoCallSelfPreview.react").WAWebVoipUiVideoCallSelfPreview, {
					floating: !0,
					containerRef: J,
					width: $e,
					height: xe,
					isSelfHandRaised: ve,
					isVideoMuted: x,
					selfMicMuted: B,
					isSelfScreenSharing: T,
					shouldAnimate: !0,
					animateInDelay: z,
					selfReaction: W
				}),
				de && U && me && u.jsx(r("WAWebVoipCallHeader.react"), {
					callState: n,
					getActivityContainer: Z,
					isCompactLayout: C,
					isMenuOpen: ne,
					name: Me
				}),
				!Re && !Se && u.jsxs("div", {
					ref: ae,
					role: "toolbar",
					onFocus: ue,
					onBlur: ce,
					className: "x6s0dn4 x1trrmfo x78zum5 x1q0g3np xa3bivy x10l6tqk xymx5cc x1jeq31z",
					children: [fe && pe != null && u.jsx(r("WAWebVoipParticipantActionsDropdown.react"), {
						canRemoveParticipant: i,
						isParticipantMuted: M,
						participantJid: pe,
						onOpenChange: oe
					}), u.jsx(r("WAWebVoipEncryptionButton.react"), {
						inline: !0,
						tonal: fe
					})]
				})
			]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
