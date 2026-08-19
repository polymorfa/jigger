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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(6), n;
		t[0] !== e ? (n = {
			displayedTarget: e,
			pendingKey: null,
			readyKey: null
		}, t[0] = e, t[1] = n) : n = t[1];
		var r = g(n), a = r[0], i = r[1], l = a.displayedTarget, s = a.pendingKey, u = a.readyKey, c = l.key;
		e.key === c ? (s != null || u != null) && i({
			displayedTarget: e,
			pendingKey: null,
			readyKey: null
		}) : s === e.key && u === e.key ? i({
			displayedTarget: e,
			pendingKey: null,
			readyKey: null
		}) : e.key !== s && i({
			displayedTarget: l,
			pendingKey: e.key,
			readyKey: null
		});
		var d;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (d = function(t) {
			i(function(e) {
				return e.pendingKey !== t ? e : babelHelpers.extends({}, e, { readyKey: t });
			});
		}, t[2] = d) : d = t[2];
		var m = d, p = e.key === c ? e : l, _ = s === e.key ? e : null, f;
		return t[3] !== p || t[4] !== _ ? (f = {
			displayedTarget: p,
			onPendingReady: m,
			pendingTarget: _
		}, t[3] = p, t[4] = _, t[5] = f) : f = t[5], f;
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
		var t = o("react-compiler-runtime").c(31), n = e.maxPx, a = e.minPx, i = e.setStripTilePx, l = e.stripTilePx, u = p(r("WAWebVoipUiPopoutWindowContext")), d = u.documentEl, m = f(null), y = g(!1), C = y[0], b = y[1], v = o("useWAWebHover").useWAWebHover(m), S = f(null), R;
		t[0] !== n || t[1] !== a || t[2] !== i ? (R = function(t) {
			var e = S.current;
			if (e != null) {
				var r = t.clientY - e.startY, o = E({
					max: n,
					min: a,
					value: e.startPx + r
				});
				i(o);
			}
		}, t[0] = n, t[1] = a, t[2] = i, t[3] = R) : R = t[3];
		var L = R, k;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (k = function() {
			S.current = null, b(!1);
		}, t[4] = k) : k = t[4];
		var I = k, T, D;
		t[5] !== d || t[6] !== L || t[7] !== C ? (T = function() {
			if (!(!C || d == null)) return d.addEventListener("mousemove", L), d.addEventListener("mouseup", I), (function() {
				d.removeEventListener("mousemove", L), d.removeEventListener("mouseup", I);
			});
		}, D = [
			d,
			L,
			I,
			C
		], t[5] = d, t[6] = L, t[7] = C, t[8] = T, t[9] = D) : (T = t[8], D = t[9]), _(T, D);
		var x;
		t[10] !== l ? (x = function(t) {
			S.current = {
				startPx: l,
				startY: t.clientY
			}, b(!0), t.currentTarget.focus(), t.stopPropagation(), t.preventDefault();
		}, t[10] = l, t[11] = x) : x = t[11];
		var $ = x, P;
		t[12] !== n || t[13] !== a || t[14] !== i || t[15] !== l ? (P = function(t) {
			var e = null;
			t.key === "ArrowDown" || t.key === "ArrowRight" ? e = E({
				max: n,
				min: a,
				value: l + h
			}) : t.key === "ArrowUp" || t.key === "ArrowLeft" ? e = E({
				max: n,
				min: a,
				value: l - h
			}) : t.key === "Home" ? e = a : t.key === "End" && (e = n), e != null && e !== l && (t.preventDefault(), i(e));
		}, t[12] = n, t[13] = a, t[14] = i, t[15] = l, t[16] = P) : P = t[16];
		var N = P, M, w;
		t[17] === Symbol.for("react.memo_cache_sentinel") ? (M = { className: "x6s0dn4 x9f619 xyozgr7 x78zum5 x2lah0s x1kpxq89 xl56j7k x5ve5x3 x87ps6o xh8yej3" }, w = s._(
			/*BTDS*/
			""
		), t[17] = M, t[18] = w) : (M = t[17], w = t[18]);
		var A;
		t[19] !== C || t[20] !== v ? (A = {
			0: { className: "x1518k6t xbrszos xea3l6g x18isctg x2q3nzr xqu0tyb xg01cxk x3a6vul x1fu8urw" },
			1: { className: "x1518k6t xbrszos xea3l6g x18isctg x2q3nzr xqu0tyb x3a6vul x1fu8urw x197sbye" }
		}[!!(v || C) << 0], t[19] = C, t[20] = v, t[21] = A) : A = t[21];
		var F;
		t[22] !== A ? (F = c.jsx("div", babelHelpers.extends({}, A)), t[22] = A, t[23] = F) : F = t[23];
		var O;
		return t[24] !== N || t[25] !== $ || t[26] !== n || t[27] !== a || t[28] !== l || t[29] !== F ? (O = c.jsx("div", babelHelpers.extends({}, M, {
			"aria-label": w,
			"aria-orientation": "vertical",
			"aria-valuemax": n,
			"aria-valuemin": a,
			"aria-valuenow": l,
			"data-testid": "voip_speaker_mode_strip_resize_handle",
			onKeyDown: N,
			onMouseDown: $,
			ref: m,
			role: "slider",
			tabIndex: 0,
			children: F
		})), t[24] = N, t[25] = $, t[26] = n, t[27] = a, t[28] = l, t[29] = F, t[30] = O) : O = t[30], O;
	}
	l.default = b;
}), 226);
