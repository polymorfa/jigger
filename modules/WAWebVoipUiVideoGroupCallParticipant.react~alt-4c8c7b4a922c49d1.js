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
		var n, a = t.accentColor, i = t.canRemoveParticipant, l = i === void 0 ? !1 : i, u = t.forceVideoOff, d = u === void 0 ? !1 : u, h = t.forceVideoOn, C = h === void 0 ? !1 : h, v = t.initialPeerReconnectingState, S = t.isCompactLayout, R = S === void 0 ? !1 : S, L = t.isDominantSpeaker, E = L === void 0 ? !1 : L, k = t.isHorizontalLayout, I = k === void 0 ? !1 : k, T = t.isPaginated, D = T === void 0 ? !1 : T, x = t.isPinned, $ = x === void 0 ? !1 : x, P = t.isScreenShareTile, N = P === void 0 ? !1 : P, M = t.isSelfScreenSharing, w = M === void 0 ? !1 : M, A = t.isStripTile, F = A === void 0 ? !1 : A, O = t.onPinParticipant, B = t.onReadyToDisplay, W = t.participantJid, q = t.peerJid, U = f(null), V = f(null), H = o("useWAWebHover").useWAWebHover(V), G = o("WAWebUserPrefsMeUser").isMeAccount(W), z = g(!1), j = z[0], K = z[1], Q = m(function(e) {
			K(e);
		}, []), X = g(!1), Y = X[0], J = X[1], Z = m(function() {
			J(!0);
		}, []), ee = m(function(e) {
			var t, n = e.relatedTarget;
			(!(n instanceof Node) || !((t = V.current) != null && t.contains(n))) && J(!1);
		}, []), te = H || j || Y, ne = _(function() {
			var e = r("WAWebCallCollection").activeCall;
			return e == null ? null : e.getParticipantVideoState(W);
		}, [W]), re = g(o("WAWebVoipVideoStateUtils").isVideoInactive(ne)), oe = re[0], ae = re[1], ie = g(o("WAWebVoipVideoStateUtils").isVideoPaused(ne)), le = ie[0], se = ie[1], ue = g(W), ce = ue[0], de = ue[1];
		W.equals(ce) || (de(W), ae(o("WAWebVoipVideoStateUtils").isVideoInactive(ne)), se(o("WAWebVoipVideoStateUtils").isVideoPaused(ne))), p(function() {
			var e = r("WAWebCallCollection").activeCall;
			if (e != null) {
				var t = e.isGroup, n = function(t) {
					var e = t.participantJid, n = t.videoState;
					e.equals(W) && (ae(o("WAWebVoipVideoStateUtils").isVideoInactive(n)), se(o("WAWebVoipVideoStateUtils").isVideoPaused(n)));
				};
				e.on("participantVideoStateChange", n);
				var a = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.VIDEO_STATE), i = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.SELF_VIDEO_STATE), l = function() {
					var t = e.getParticipantVideoState(W);
					ae(o("WAWebVoipVideoStateUtils").isVideoInactive(t)), se(o("WAWebVoipVideoStateUtils").isVideoPaused(t));
				};
				return t || (e.on(a, l), e.on(i, l)), function() {
					e.off("participantVideoStateChange", n), t || (e.off(a, l), e.off(i, l));
				};
			}
		}, [W]);
		var me = !C && (d || oe), pe = !C && le, _e = _(function() {
			var e = r("WAWebCallCollection").activeCall;
			return e == null ? !1 : e.isParticipantMicMuted(W);
		}, [W]), fe = g(_e), ge = fe[0], he = fe[1];
		p(function() {
			var e = r("WAWebCallCollection").activeCall;
			if (e != null) {
				var t = e.isGroup, n = function(t) {
					var e = t.isMuted, n = t.participantJid;
					n.equals(W) && he(e);
				};
				e.on("participantMicStateChange", n);
				var a = function() {
					he(e.isParticipantMicMuted(W));
				}, i = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.SELF_MIC_MUTED), l = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.PEER_MIC_MUTED);
				return t || (e.on(i, a), e.on(l, a)), function() {
					e.off("participantMicStateChange", n), t || (e.off(i, a), e.off(l, a));
				};
			}
		}, [W]);
		var ye = _(function() {
			var e, t = r("WAWebCallCollection").activeCall;
			return t == null ? null : (e = t.getReactionForParticipant(W)) != null ? e : null;
		}, [W]), Ce = g(ye), be = Ce[0], ve = Ce[1];
		p(function() {
			var e = r("WAWebCallCollection").activeCall;
			if (e != null) {
				var t = function() {
					var t = e.getReactionForParticipant(W);
					ve(t != null ? t : null);
				};
				return e.on(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.REACTION_STATES), t), function() {
					e.off(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.REACTION_STATES), t);
				};
			}
		}, [W]);
		var Se = r("useWAWebVoipParticipantHandRaised")(function() {
			return W;
		}), Re = g(v), Le = Re[0], Ee = Re[1];
		p(function() {
			var e = r("WAWebCallCollection").activeCall;
			if (e != null) {
				var t = function() {
					var t = e.getPeerReconnectingState(W);
					Ee(t);
				};
				return e.on(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.PEER_RECONNECTING), t), function() {
					e.off(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.PEER_RECONNECTING), t);
				};
			}
		}, [W]);
		var ke = r("useWAWebVoipAudioLevel")("participant", W), Ie = ke > 0, Te = b(W), De = (n = o("useWAWebContactValues").useOptionalContactValues(o("WAWebVoipGatingUtils").isGuestViewer() ? W : null, [o("WAWebFrontendContactGetters").getDisplayName])) == null ? void 0 : n[0], xe = Te != null ? o("WAWebFrontendContactGetters").getFormattedShortName(Te) : null, $e = De != null ? De : xe, Pe = (function(e) {
			return (typeof e == "object" && e !== null || typeof e == "function") && e.isScreenShareTile === !0 && e.isSelf === !0 ? s._(
				/*BTDS*/
				""
			) : (typeof e == "object" && e !== null || typeof e == "function") && e.isScreenShareTile === !0 && e.isSelf === !1 ? s._(
				/*BTDS*/
				"",
				[s._param("name", $e)]
			) : (typeof e == "object" && e !== null || typeof e == "function") && e.isSelf === !0 ? s._(
				/*BTDS*/
				""
			) : $e;
		})({
			isScreenShareTile: N,
			isSelf: G
		}), Ne = $e != null && $e !== "", Me = (function(e) {
			if ((typeof e == "object" && e !== null || typeof e == "function") && e.isPinned === !0 && e.hasParticipantName === !0) return s._(
				/*BTDS*/
				"",
				[s._param("name", $e)]
			);
			if ((typeof e == "object" && e !== null || typeof e == "function") && e.isPinned === !0 && e.hasParticipantName === !1) return s._(
				/*BTDS*/
				""
			);
			if ((typeof e == "object" && e !== null || typeof e == "function") && e.isPinned === !1 && e.hasParticipantName === !0) return s._(
				/*BTDS*/
				"",
				[s._param("name", $e)]
			);
			if ((typeof e == "object" && e !== null || typeof e == "function") && e.isPinned === !1 && e.hasParticipantName === !1) return s._(
				/*BTDS*/
				""
			);
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})({
			hasParticipantName: Ne,
			isPinned: $
		}), we = te && (G || Ne);
		return c.jsxs("div", babelHelpers.extends({
			ref: V,
			onFocus: G ? void 0 : Z,
			onBlur: G ? void 0 : ee
		}, (e || (e = r("stylex"))).props([
			y.participantWrapper,
			I && y.participantWrapperHorizontal,
			D && y.participantWrapperPaginated,
			Ie && y.participantWrapperSpeaking,
			Ie && !me && y.participantWrapperSpeakingWhite,
			Ie && me && a != null && y.participantWrapperSpeakingColor(a),
			E && y.speakerModeDominantParticipantWrapper,
			F && y.speakerModeStripParticipantWrapper
		]), { children: [
			c.jsx(o("WAWebVoipUiVideoCallPeerVideo.react").WAWebVoipUiVideoCallPeerVideo, {
				accentColor: a,
				callState: null,
				canvasContainerRef: V,
				isCompactLayout: R,
				isDominantSpeaker: E,
				isGroupCall: !0,
				isHandRaised: Se,
				isHorizontalLayout: I,
				isScreenShareTile: N,
				isSelf: G,
				isSelfScreenSharing: w,
				isStripTile: F,
				onReadyToDisplay: B,
				participantName: $e,
				peerJid: q,
				peerMicMuted: ge,
				peerReconnectingState: Le,
				peerVideoPaused: pe,
				peerVideoMuted: me,
				reaction: be,
				showMicIndicator: me || F,
				userId: W,
				ref: U
			}),
			!me && !F && (ge || we) && c.jsx(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: [y.participantInfoOverlay, te && !G && y.participantInfoOverlayWithActions],
				children: c.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					xstyle: [
						y.participantInfoBadge,
						te && ge && y.participantInfoBadgeIconAndName,
						te && !ge && y.participantInfoBadgeNameOnly
					],
					children: [ge && c.jsx(o("WAWebFlex.react").FlexRow, {
						align: "center",
						justify: "center",
						shrink: 0,
						xstyle: y.participantInfoMicIconWrapper,
						children: c.jsx(r("WDSIconIcMicOffFilled.react"), {
							height: 20,
							width: 20,
							xstyle: y.participantInfoMicIcon
						})
					}), we && c.jsx("div", {
						className: "x1v1lzd6 xeuugli x6ikm8r x10wlt62",
						children: c.jsx(r("WDSText.react"), {
							type: "Body2Emphasized",
							colorName: "persistentAlwaysWhite",
							maxLines: 1,
							children: Pe
						})
					})]
				})
			}),
			F && we && !Se && be == null && c.jsx(o("WAWebFlex.react").FlexRow, {
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
						children: Pe
					})
				})
			}),
			!G && c.jsxs(o("WAWebFlex.react").FlexRow, {
				xstyle: [F ? y.participantActionsOverlayStrip : y.participantActionsOverlay, !te && y.participantActionsOverlayHidden],
				children: [O != null && c.jsx(r("WDSTooltip.react"), {
					label: $ ? s._(
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
						Icon: r($ ? "WDSIconIcKeepOffFilled.react" : "WDSIconIcPushPinFilled.react"),
						onPress: O,
						"aria-label": Me,
						xstyle: y.mediaButtonFocusRing
					})
				}), !o("WAWebVoipGatingUtils").isGuestViewer() && c.jsx(r("WAWebVoipParticipantActionsDropdown.react"), {
					canRemoveParticipant: l,
					isParticipantMuted: ge,
					participantJid: W,
					onOpenChange: Q
				})]
			})
		] }));
	}
	C.displayName = C.name + " [from " + i.id + "]";
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
