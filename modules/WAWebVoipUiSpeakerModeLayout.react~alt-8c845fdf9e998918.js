__d("WAWebVoipUiSpeakerModeLayout.react", [
	"fbt",
	"WAWebCallCollection",
	"WAWebFlex.react",
	"WAWebUserPrefsMeUser",
	"WAWebVoipEventConstants",
	"WAWebVoipGroupCallAccentColor",
	"WAWebVoipGroupCallPaginationControls.react",
	"WAWebVoipScreenShareStreamKey",
	"WAWebVoipSelfScreenSharePlaceholder.react",
	"WAWebVoipUiPopoutWindowContext",
	"WAWebVoipUiVideoGroupCallParticipant.react",
	"WAWebVoipVideoRendererInterface",
	"react",
	"stylex",
	"useWAWebEventTargetValue",
	"useWAWebHover"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useContext, _ = d.useEffect, f = d.useRef, g = d.useState, h = 8, y = {
		flexShrink: "x2lah0s",
		$$css: !0
	}, C = {
		speakerModeContainer: {
			boxSizing: "x9f619",
			height: "x5yr21d",
			paddingInlineStart: "x12w63v0",
			paddingInlineEnd: "x1nzty39",
			paddingLeft: null,
			paddingRight: null,
			paddingTop: "x16ovd2e",
			width: "xh8yej3",
			$$css: !0
		},
		speakerModeTopStrip: {
			boxSizing: "x9f619",
			columnGap: "x1trrmfo",
			display: "x78zum5",
			justifyContent: "xl56j7k",
			width: "xh8yej3",
			$$css: !0
		},
		speakerModeDominantContainer: {
			alignItems: "x6s0dn4",
			display: "x78zum5",
			flexDirection: "x1q0g3np",
			flexGrow: "x1iyjqo2",
			flexShrink: "xs83m0k",
			justifyContent: "xl56j7k",
			minHeight: "x2lwn1j",
			minWidth: "xeuugli",
			width: "xh8yej3",
			$$css: !0
		},
		speakerModeDominantMinHeight: function(t) {
			return [{
				minHeight: t != null ? "x82snj4" : t,
				$$css: !0
			}, { "--x-minHeight": (function(e) {
				return typeof e == "number" ? e + "px" : e != null ? e : void 0;
			})(t) }];
		},
		speakerModeDominantTile: {
			height: "x5yr21d",
			maxHeight: "xmz0i5r",
			maxWidth: "x193iq5w",
			minHeight: "x2lwn1j",
			position: "x1n2onr6",
			width: "xh8yej3",
			$$css: !0
		},
		speakerModeStripPaginatedContainer: {
			alignItems: "x6s0dn4",
			boxSizing: "x9f619",
			columnGap: "x1trrmfo",
			display: "x78zum5",
			flexDirection: "x1q0g3np",
			justifyContent: "xl56j7k",
			width: "xh8yej3",
			$$css: !0
		},
		speakerModeStripTilesArea: {
			alignItems: "x6s0dn4",
			columnGap: "x1trrmfo",
			display: "x78zum5",
			flexShrink: "xs83m0k",
			height: "x5yr21d",
			justifyContent: "xl56j7k",
			minWidth: "xeuugli",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		paginationButton: {
			height: "x10w6t97",
			width: "x1td3qas",
			$$css: !0
		},
		stripContainerHeight: function(t) {
			return [{
				height: t != null ? "x16ye13r" : t,
				$$css: !0
			}, { "--x-height": (function(e) {
				return typeof e == "number" ? e + "px" : e != null ? e : void 0;
			})(t) }];
		},
		stripTile: function(t) {
			return [
				y,
				{
					height: t != null ? "x16ye13r" : t,
					maxWidth: t != null ? "xf68679" : t,
					width: t != null ? "x5lhr3w" : t,
					$$css: !0
				},
				{
					"--x-height": (function(e) {
						return typeof e == "number" ? e + "px" : e != null ? e : void 0;
					})(t),
					"--x-maxWidth": (function(e) {
						return typeof e == "number" ? e + "px" : e != null ? e : void 0;
					})(t),
					"--x-width": (function(e) {
						return typeof e == "number" ? e + "px" : e != null ? e : void 0;
					})(t)
				}
			];
		}
	};
	function b(t) {
		var n = t.clampedStripPage, a = t.currentDominantSpeaker, i = t.dominantMeasureRef, l = t.getPeerReconnectingState, s = t.groupCallParticipantsConnected, u = t.groupChat, d = u === void 0 ? null : u, p = t.handleStripNextPage, f = t.handleStripPrevPage, g = t.isCompactLayout, h = t.isDocPip, y = t.isInPopout, b = t.isSelfScreenSharing, E = t.nonDominantSpeakers, I = t.onPinParticipant, T = t.pinnedParticipantJid, D = T === void 0 ? null : T, x = t.screenSharerJid, $ = x === void 0 ? null : x, P = t.setStripTilePx, N = t.stripMeasureRef, M = t.stripNeedsPagination, w = t.stripTileMaxPx, A = t.stripTileMinPx, F = t.stripTilePx, O = t.stripTotalPages, B = t.visibleStripParticipants, W = $ != null && !o("WAWebUserPrefsMeUser").isMeAccount(a) && a.equals($), q = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.SCREEN_SHARE_STATES), function() {
			var e, t, n, i;
			return [W && ((e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.isPeerDualStreaming(a)) != null ? e : !1), o("WAWebUserPrefsMeUser").isMeAccount(a) && b && ((n = (i = r("WAWebCallCollection").activeCall) == null ? void 0 : i.isSelfDualStreaming()) != null ? n : !1)];
		}, [
			W,
			a,
			b
		]), U = q[0], V = q[1], H = W || o("WAWebUserPrefsMeUser").isMeAccount(a) && b, G = L(a, U || V), z = l ? l(a) : null, j = R({
			dominantJid: G,
			dominantSpeaker: a,
			isDominantScreenSharer: H,
			isInPopout: y,
			isSelfScreenSharing: b,
			screenSharerJid: $
		}), K = S(j), Q = K.displayedTarget, X = K.onPendingReady, Y = K.pendingTarget;
		_(function() {
			(Y == null ? void 0 : Y.isPlaceholder) === !0 && X(Y.key);
		}, [X, Y]);
		var J = Y == null ? void 0 : Y.key, Z = m(function() {
			J != null && X(J);
		}, [X, J]), ee = y && !h ? "medium" : "small", te = E.length > 0 || W;
		return c.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: C.speakerModeContainer,
			children: [
				te && c.jsxs("div", babelHelpers.extends({ ref: N }, (e || (e = r("stylex"))).props(M ? C.speakerModeStripPaginatedContainer : C.speakerModeTopStrip, C.stripContainerHeight(F)), { children: [
					M && c.jsx("div", {
						className: "x6s0dn4 x78zum5 x2lah0s x5yr21d xl56j7k x1n2onr6 x1useyqa xrp34fr",
						children: c.jsx(o("WAWebVoipGroupCallPaginationControls.react").WAWebVoipGroupCallPrevPageButton, {
							currentPage: n,
							onPrevPage: f,
							size: ee,
							totalPages: O,
							xstyle: C.paginationButton
						})
					}),
					c.jsxs(o("WAWebFlex.react").FlexRow, {
						gap: 4,
						justify: "center",
						shrink: 1,
						grow: 0,
						xstyle: M ? C.speakerModeStripTilesArea : void 0,
						children: [
							B.map(function(t) {
								var n = o("WAWebUserPrefsMeUser").isMeAccount(t), a = n ? o("WAWebVoipVideoRendererInterface").selfPreviewJid : t.toString(), i = l ? l(t) : null, u = r("WAWebVoipGroupCallAccentColor")(d, t, s);
								return c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(C.stripTile(F)), { children: c.jsx(r("WAWebVoipUiVideoGroupCallParticipant.react"), {
									accentColor: u,
									initialPeerReconnectingState: i,
									isCompactLayout: g,
									isPinned: D != null && t.equals(D),
									isSelfScreenSharing: b,
									isStripTile: !0,
									onPinParticipant: I != null ? function() {
										return I(t);
									} : void 0,
									participantJid: t,
									peerJid: a
								}) }), t.toString());
							}),
							b && o("WAWebUserPrefsMeUser").isMeAccount(a) && n === 0 && c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(C.stripTile(F)), { children: c.jsx(r("WAWebVoipUiVideoGroupCallParticipant.react"), {
								accentColor: r("WAWebVoipGroupCallAccentColor")(d, a, s),
								forceVideoOff: !V,
								initialPeerReconnectingState: null,
								isCompactLayout: g,
								isSelfScreenSharing: b,
								isStripTile: !0,
								participantJid: a,
								peerJid: o("WAWebVoipVideoRendererInterface").selfPreviewJid
							}) }), "self-screen-share-strip-tile"),
							W && n === 0 && c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(C.stripTile(F)), { children: c.jsx(r("WAWebVoipUiVideoGroupCallParticipant.react"), {
								accentColor: r("WAWebVoipGroupCallAccentColor")(d, a, s),
								forceVideoOff: !U,
								initialPeerReconnectingState: z,
								isCompactLayout: g,
								isPinned: D != null && a.equals(D),
								isStripTile: !0,
								onPinParticipant: I != null ? function() {
									return I(a);
								} : void 0,
								participantJid: a,
								peerJid: a.toString()
							}) }), "screen-share-sharer-strip-tile")
						]
					}),
					M && c.jsx("div", {
						className: "x6s0dn4 x78zum5 x2lah0s x5yr21d xl56j7k x1n2onr6 x1useyqa xrp34fr",
						children: c.jsx(o("WAWebVoipGroupCallPaginationControls.react").WAWebVoipGroupCallNextPageButton, {
							currentPage: n,
							onNextPage: p,
							size: ee,
							totalPages: O,
							xstyle: C.paginationButton
						})
					})
				] })),
				te && c.jsx(k, {
					maxPx: w,
					minPx: A,
					setStripTilePx: P,
					stripTilePx: F
				}),
				c.jsx("div", babelHelpers.extends({ ref: i }, (e || (e = r("stylex"))).props(C.speakerModeDominantContainer, te && C.speakerModeDominantMinHeight(F)), { children: c.jsxs(o("WAWebFlex.react").FlexItem, {
					grow: 1,
					xstyle: C.speakerModeDominantTile,
					children: [Y != null && c.jsx(v, {
						getPeerReconnectingState: l,
						groupCallParticipantsConnected: s,
						groupChat: d,
						isCompactLayout: g,
						isDisplayed: !1,
						isSelfScreenSharing: b,
						onPinParticipant: I,
						onReadyToDisplay: Z,
						pinnedParticipantJid: D,
						target: Y
					}, Y.key), c.jsx(v, {
						getPeerReconnectingState: l,
						groupCallParticipantsConnected: s,
						groupChat: d,
						isCompactLayout: g,
						isDisplayed: !0,
						isSelfScreenSharing: b,
						onPinParticipant: I,
						pinnedParticipantJid: D,
						target: Q
					}, Q.key)]
				}) }))
			]
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = e.getPeerReconnectingState, n = e.groupCallParticipantsConnected, o = e.groupChat, a = e.isCompactLayout, i = e.isDisplayed, l = e.isSelfScreenSharing, s = e.onPinParticipant, u = e.onReadyToDisplay, d = e.pinnedParticipantJid, m = e.target, p = m.participantJid;
		return c.jsx("div", babelHelpers.extends({
			"aria-hidden": i ? void 0 : !0,
			"data-testid": i ? "voip_speaker_mode_dominant_displayed" : "voip_speaker_mode_dominant_pending",
			inert: i ? void 0 : !0
		}, {
			0: { className: "x5yr21d x13vifvy xtijo5x x1ey2m1c x1o0tod x10l6tqk xh8yej3" },
			2: { className: "x5yr21d x13vifvy xtijo5x x1ey2m1c x1o0tod x10l6tqk xh8yej3 x1vjfegm" },
			1: { className: "x5yr21d x13vifvy xtijo5x x1ey2m1c x1o0tod x10l6tqk xh8yej3 x47corl x1ja2u2z" },
			3: { className: "x5yr21d x13vifvy xtijo5x x1ey2m1c x1o0tod x10l6tqk xh8yej3 x47corl x1ja2u2z" }
		}[!!i << 1 | !i << 0], { children: m.isPlaceholder ? c.jsx(r("WAWebVoipSelfScreenSharePlaceholder.react"), {}) : c.jsx(r("WAWebVoipUiVideoGroupCallParticipant.react"), {
			accentColor: r("WAWebVoipGroupCallAccentColor")(o, p, n),
			forceVideoOn: m.forceVideoOn,
			initialPeerReconnectingState: t ? t(p) : null,
			isCompactLayout: a,
			isDominantSpeaker: !0,
			isScreenShareTile: m.isScreenShareTile,
			isSelfScreenSharing: l,
			isPinned: d != null && p.equals(d),
			onPinParticipant: s != null ? function() {
				return s(p);
			} : void 0,
			onReadyToDisplay: u,
			participantJid: p,
			peerJid: m.peerJid
		}) }));
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		var t = g({
			displayedTarget: e,
			pendingKey: null,
			readyKey: null
		}), n = t[0], r = t[1], o = n.displayedTarget, a = n.pendingKey, i = n.readyKey, l = o.key;
		e.key === l ? (a != null || i != null) && r({
			displayedTarget: e,
			pendingKey: null,
			readyKey: null
		}) : a === e.key && i === e.key ? r({
			displayedTarget: e,
			pendingKey: null,
			readyKey: null
		}) : e.key !== a && r({
			displayedTarget: o,
			pendingKey: e.key,
			readyKey: null
		});
		var s = m(function(e) {
			r(function(t) {
				return t.pendingKey !== e ? t : babelHelpers.extends({}, t, { readyKey: e });
			});
		}, []);
		return {
			displayedTarget: e.key === l ? e : o,
			onPendingReady: s,
			pendingTarget: a === e.key ? e : null
		};
	}
	function R(e) {
		var t = e.dominantJid, n = e.dominantSpeaker, r = e.isDominantScreenSharer, a = e.isInPopout, i = e.isSelfScreenSharing, l = e.screenSharerJid, s = l != null && n.equals(l), u = i && o("WAWebUserPrefsMeUser").isMeAccount(n) && a, c = (function(e) {
			return (typeof e == "object" && e !== null || typeof e == "function") && e.isPlaceholder === !0 ? "placeholder" : (typeof e == "object" && e !== null || typeof e == "function") && e.isDominantScreenSharer === !0 ? "screen" : "camera";
		})({
			isDominantScreenSharer: r,
			isPlaceholder: u
		});
		return {
			forceVideoOn: r,
			isPlaceholder: u,
			isScreenShareTile: s,
			key: n.toString() + "|" + t + "|" + c,
			participantJid: n,
			peerJid: t
		};
	}
	function L(e, t) {
		var n = o("WAWebUserPrefsMeUser").isMeAccount(e) ? o("WAWebVoipVideoRendererInterface").selfPreviewJid : e.toString();
		return t ? o("WAWebVoipScreenShareStreamKey").getScreenShareStreamKey(n) : n;
	}
	function E(e) {
		var t = e.max, n = e.min, r = e.value;
		return Math.min(t, Math.max(n, r));
	}
	function k(e) {
		var t = e.maxPx, n = e.minPx, a = e.setStripTilePx, i = e.stripTilePx, l = p(r("WAWebVoipUiPopoutWindowContext")), u = l.documentEl, d = f(null), y = g(!1), C = y[0], b = y[1], v = o("useWAWebHover").useWAWebHover(d), S = f(null), R = m(function(e) {
			var r = S.current;
			if (r != null) {
				var o = e.clientY - r.startY, i = E({
					max: t,
					min: n,
					value: r.startPx + o
				});
				a(i);
			}
		}, [
			t,
			n,
			a
		]), L = m(function() {
			S.current = null, b(!1);
		}, []);
		_(function() {
			if (!(!C || u == null)) return u.addEventListener("mousemove", R), u.addEventListener("mouseup", L), function() {
				u.removeEventListener("mousemove", R), u.removeEventListener("mouseup", L);
			};
		}, [
			u,
			R,
			L,
			C
		]);
		function k(e) {
			S.current = {
				startPx: i,
				startY: e.clientY
			}, b(!0), e.currentTarget.focus(), e.stopPropagation(), e.preventDefault();
		}
		function I(e) {
			var r = null;
			e.key === "ArrowDown" || e.key === "ArrowRight" ? r = E({
				max: t,
				min: n,
				value: i + h
			}) : e.key === "ArrowUp" || e.key === "ArrowLeft" ? r = E({
				max: t,
				min: n,
				value: i - h
			}) : e.key === "Home" ? r = n : e.key === "End" && (r = t), r != null && r !== i && (e.preventDefault(), a(r));
		}
		return c.jsx("div", {
			className: "x6s0dn4 x9f619 xyozgr7 x78zum5 x2lah0s x1kpxq89 xl56j7k x5ve5x3 x87ps6o xh8yej3",
			"aria-label": s._(
				/*BTDS*/
				""
			),
			"aria-orientation": "vertical",
			"aria-valuemax": t,
			"aria-valuemin": n,
			"aria-valuenow": i,
			"data-testid": "voip_speaker_mode_strip_resize_handle",
			onKeyDown: I,
			onMouseDown: k,
			ref: d,
			role: "slider",
			tabIndex: 0,
			children: c.jsx("div", babelHelpers.extends({}, {
				0: { className: "x1518k6t xbrszos xea3l6g x18isctg x2q3nzr xqu0tyb xg01cxk x3a6vul x1fu8urw" },
				1: { className: "x1518k6t xbrszos xea3l6g x18isctg x2q3nzr xqu0tyb x3a6vul x1fu8urw x197sbye" }
			}[!!(v || C) << 0]))
		});
	}
	k.displayName = k.name + " [from " + i.id + "]", l.default = b;
}), 226);
