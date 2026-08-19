__d("WAWebVoipUiVideoGroupCall.react", [
	"WAWebCallCollection",
	"WAWebCallLogUtils",
	"WAWebCallTimer.react",
	"WAWebFlex.react",
	"WAWebMoveResizeConstants",
	"WAWebName.react",
	"WAWebParticipantListUtils",
	"WAWebUserPrefsMeUser",
	"WAWebUserPrefsVoip",
	"WAWebVoipGridPageSize",
	"WAWebVoipGridPageSizeContext",
	"WAWebVoipGroupCallGridConstants",
	"WAWebVoipGroupCallPaginationControls.react",
	"WAWebVoipShouldShowDominantTooSmall",
	"WAWebVoipSpeakerModeStripPagination",
	"WAWebVoipUiBodyStyles",
	"WAWebVoipUiGridTiles.react",
	"WAWebVoipUiPopoutWindowContext",
	"WAWebVoipUiSpeakerModeLayout.react",
	"WAWebVoipWindowConstants",
	"react",
	"stylex",
	"useWAWebMeasure",
	"useWAWebOnUnmount",
	"useWAWebTimeout",
	"useWAWebVoipDynamicGridLayout",
	"useWAWebVoipGroupCallOrdering",
	"useWAWebVoipGroupCallRxSubscription"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useContext, p = c.useEffect, _ = c.useMemo, f = c.useRef, g = c.useState, h = [], y = 100, C = 160, b = 6, v = 48, S = {
		boxSizing: "x9f619",
		columnGap: "x1trrmfo",
		display: "xrvj5dj",
		height: "x5yr21d",
		maxWidth: "xf68679",
		paddingTop: "x16ovd2e",
		position: "x1n2onr6",
		rowGap: "x129bwdz",
		width: "x5lhr3w",
		$$css: !0
	}, R = {
		container: {
			height: "x5yr21d",
			width: "xh8yej3",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		paginationButton: {
			height: "x10w6t97",
			width: "x1td3qas",
			$$css: !0
		},
		paginationButtonNarrow: {
			height: "xxk0z11",
			width: "xvy4d1p",
			$$css: !0
		},
		gridContainer: {
			boxSizing: "x9f619",
			columnGap: "x1trrmfo",
			display: "xrvj5dj",
			height: "x5yr21d",
			paddingInlineStart: "x12w63v0",
			paddingInlineEnd: "x1nzty39",
			paddingLeft: null,
			paddingRight: null,
			paddingTop: "x16ovd2e",
			rowGap: "x129bwdz",
			width: "xh8yej3",
			$$css: !0
		},
		gridContainerPopout: {
			boxSizing: "x9f619",
			columnGap: "x1trrmfo",
			display: "xrvj5dj",
			height: "x5yr21d",
			paddingInlineStart: "x12w63v0",
			paddingInlineEnd: "x1nzty39",
			paddingLeft: null,
			paddingRight: null,
			paddingTop: "x16ovd2e",
			rowGap: "x129bwdz",
			width: "xh8yej3",
			$$css: !0
		},
		gridContainerPaginated: function(t, n) {
			return [S, {
				"--x-maxWidth": (function(e) {
					return typeof e == "number" ? e + "px" : e != null ? e : void 0;
				})("calc(100% - " + t + "px)"),
				"--x-width": (function(e) {
					return typeof e == "number" ? e + "px" : e != null ? e : void 0;
				})(n ? "fit-content" : "calc(100% - " + t + "px)")
			}];
		},
		gridLayout: function(t, n, r, o, a, i) {
			return [{
				alignContent: t != null ? "xrttalv" : t,
				alignItems: n != null ? "xo0oibl" : n,
				gridTemplateColumns: r != null ? "xqketvx" : r,
				gridTemplateRows: o != null ? "x1xxtoay" : o,
				justifyContent: a != null ? "xbp6zib" : a,
				justifyItems: i != null ? "xkfbwyo" : i,
				$$css: !0
			}, {
				"--x-alignContent": t != null ? t : void 0,
				"--x-alignItems": n != null ? n : void 0,
				"--x-gridTemplateColumns": r != null ? r : void 0,
				"--x-gridTemplateRows": o != null ? o : void 0,
				"--x-justifyContent": a != null ? a : void 0,
				"--x-justifyItems": i != null ? i : void 0
			}];
		},
		horizontalLayoutHeader: {
			alignItems: "x6s0dn4",
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			rowGap: "x129bwdz",
			columnGap: "x1trrmfo",
			justifyContent: "xl56j7k",
			paddingTop: "x16ovd2e",
			width: "xh8yej3",
			$$css: !0
		},
		containerRelative: {
			position: "x1n2onr6",
			$$css: !0
		}
	};
	function L(t) {
		var n = t.activeOverride, a = n === void 0 ? null : n, i = t.callState, l = i === void 0 ? null : i, s = t.getPeerReconnectingState, c = t.groupCallParticipantsConnected, S = t.groupChat, L = S === void 0 ? null : S, E = t.groupParticipantsWithoutSelf, k = E === void 0 ? h : E, I = t.isCompactLayout, T = I === void 0 ? !1 : I, D = t.isGroupAudioCall, x = D === void 0 ? !1 : D, $ = t.isLinkedGroupCall, P = $ === void 0 ? !1 : $, N = t.isSelfScreenSharing, M = t.layoutMode, w = M === void 0 ? "grid" : M, A = t.onActiveOverrideChange, F = t.onPinParticipant, O = t.pinnedParticipantJid, B = O === void 0 ? null : O, W = t.screenSharingPeerJid, q = W === void 0 ? null : W, U = f(null), V = m(r("WAWebVoipUiPopoutWindowContext"));
		r("useWAWebOnUnmount")(o("WAWebUserPrefsVoip").clearLandingPageColorIndex);
		var H = _(function() {
			var e = r("WAWebCallCollection").activeCall;
			return e == null || !e.isCallLink ? !1 : o("WAWebUserPrefsMeUser").isMeAccount(e.callLinkCreatorJid);
		}, []), G = g(function() {
			return o("WAWebVoipGridPageSize").getGridParticipantsPerPage();
		}), z = G[0], j = r("useWAWebMeasure")(), K = j[0], Q = j[1], X = Q.width, Y = g(z), J = Y[0], Z = Y[1], ee = o("WAWebVoipGridPageSize").getResponsiveGridPageSize(z, X, J);
		ee !== J && Z(ee);
		var te = m(r("WAWebVoipGridPageSizeContext"));
		p(function() {
			te == null || te(w === "grid" && X > 0 && ee === J ? J : null);
		}, [
			X,
			w,
			ee,
			J,
			te
		]), r("useWAWebOnUnmount")(function() {
			te == null || te(null);
		});
		var ne = _(function() {
			return c.length > 16 ? c.slice(0, 16) : c;
		}, [c]), re = ne.length, oe = V.isContextInPopoutWindow, ae = V.isDocPip, ie = x && (!oe || ae), le = g(x), se = le[0], ue = le[1], ce = g(0), de = ce[0], me = ce[1], pe = g(0), _e = pe[0], fe = pe[1], ge = de !== _e;
		se !== x && (ue(x), !x && !oe && !ae ? me(function(e) {
			return e + 1;
		}) : fe(de));
		var he = o("useWAWebTimeout").useManualTimeout(function() {
			fe(de);
		}), ye = he[0], Ce = he[1];
		p(function() {
			de !== _e ? ye(o("WAWebMoveResizeConstants").MIN_HEIGHT_CHANGE_ANIMATION_DURATION) : Ce();
		}, [
			de,
			_e,
			ye,
			Ce
		]);
		var be = r("useWAWebMeasure")(), ve = be[0], Se = be[1], Re = Se.width, Le = g(y), Ee = Le[0], ke = Le[1], Ie = r("useWAWebMeasure")(), Te = Ie[0], De = Ie[1], xe = De.height > 0 ? De.height + Ee : 0, $e = xe > 0 ? Math.min(C, Math.max(y, Math.floor(xe / 2))) : C;
		Ee > $e && ke($e);
		var Pe = _(function() {
			if (Re <= 0) return null;
			var e = Math.max(0, Re - 2 * v), t = Math.max(1, Math.floor((e + b) / (Ee + b)));
			return Math.min(z, t);
		}, [
			Re,
			z,
			Ee
		]), Ne = r("useWAWebVoipGroupCallOrdering")(a, c, N, w, ne, A, J, B, q, Pe), Me = Ne.currentDominantSpeaker, we = Ne.nonDominantSpeakers, Ae = Ne.pagedParticipants, Fe = Ne.screenSharerJid, Oe = re > J, Be = Oe ? Math.max(1, Ae.pages.length) : 1, We = g(0), qe = We[0], Ue = We[1], Ve = Math.min(qe, Be - 1), He = d(function() {
			Ue(function(e) {
				return e + 1;
			});
		}, []), Ge = d(function() {
			Ue(function(e) {
				return Math.max(e - 1, 0);
			});
		}, []), ze = _(function() {
			var e, t = (e = Ae.pages[Ve]) != null ? e : [];
			return t.length > 0 ? t : ne;
		}, [
			ne,
			Ae,
			Ve
		]), je = ze.length, Ke = r("useWAWebVoipDynamicGridLayout")(je, Oe, ie, oe, J, oe ? V.windowEl : void 0), Qe = Ke.dynamicCellWidth, Xe = Ke.dynamicColumns, Ye = Ke.gridAlignItems, Je = Ke.gridJustifyContent, Ze = Ke.gridMeasureRef, et = Ke.gridTemplateColumns, tt = Ke.gridTemplateRows, nt = Ke.isMeasured, rt = Ke.measuredWidth, ot = ie && Xe > 0, at = ot ? re > Xe : Oe, it = ot ? Math.max(1, Math.ceil(re / Xe)) : Be, lt = Math.min(qe, it - 1);
		lt !== qe && Ue(lt);
		var st = _(function() {
			if (ot) {
				var e = lt * Xe;
				return ne.slice(e, e + Xe);
			}
			return ze;
		}, [
			ot,
			Xe,
			lt,
			ne,
			ze
		]), ut = st.length, ct = rt > 0 && rt < o("WAWebVoipGroupCallGridConstants").NARROW_PAGINATION_THRESHOLD_PX, dt = !ct && oe && !ae, mt = dt ? "medium" : "small", pt = Xe > 0 ? ut % Xe : 0, _t = pt > 0 && !at && !ie, ft = _t ? ut - pt : -1, gt = !nt && !ie && (ut === 3 || ut === 5 || ut === 7), ht;
		at ? ht = R.gridContainerPaginated(o("WAWebVoipGroupCallGridConstants").getPaginationReservedWidth(rt), nt) : oe ? ht = R.gridContainerPopout : ht = R.gridContainer;
		var yt = N && Me != null && o("WAWebUserPrefsMeUser").isMeAccount(Me), Ct = Me != null && !o("WAWebUserPrefsMeUser").isMeAccount(Me) && Fe != null && Me.equals(Fe), bt = we.length + (yt || Ct ? 1 : 0), vt = we.length > 0 || Ct, St = g(!1), Rt = St[0], Lt = St[1], Et = o("WAWebVoipShouldShowDominantTooSmall").shouldShowDominantTooSmall(w, oe, vt, De.height, Ee, Rt);
		Et !== Rt && Lt(Et), p(function() {
			if (oe) return o("WAWebVoipWindowConstants").updateSpeakerDominantTooSmall(Rt), function() {
				return o("WAWebVoipWindowConstants").updateSpeakerDominantTooSmall(!1);
			};
		}, [oe, Rt]);
		var kt = _(function() {
			if (Re <= 0) return Math.min(z, bt);
			var e = bt, t = e * Ee + (e - 1) * b;
			if (t <= Re) return Math.min(z, e);
			var n = Re - 2 * v;
			return Math.min(z, Math.max(1, Math.floor((n + b) / (Ee + b))));
		}, [
			Re,
			bt,
			z,
			Ee
		]), It = o("WAWebVoipSpeakerModeStripPagination").getSpeakerModeStripPageOneCapacity({
			isPeerScreenShareDominant: Ct,
			isSelfStripInjected: yt,
			stripVisibleCount: kt
		}), Tt = _(function() {
			if (we.length <= It) return we;
			var e = we.findIndex(function(e) {
				return o("WAWebUserPrefsMeUser").isMeAccount(e);
			});
			if (e === -1) return we;
			var t = [].concat(we), n = t.splice(e, 1), r = n[0];
			return t.splice(It - 1, 0, r), t;
		}, [we, It]), Dt = Tt.length > It, xt = Dt ? 1 + Math.ceil((Tt.length - It) / kt) : 1, $t = g(0), Pt = $t[0], Nt = $t[1], Mt = Math.min(Pt, Math.max(0, xt - 1));
		Mt !== Pt && Nt(Mt);
		var wt = g(w), At = wt[0], Ft = wt[1];
		w !== At && (Ft(w), w === "speaker" && Nt(0));
		var Ot = _(function() {
			if (Mt === 0) return Tt.slice(0, It);
			var e = It + (Mt - 1) * kt;
			return Tt.slice(e, e + kt);
		}, [
			Tt,
			Mt,
			kt,
			It
		]), Bt = d(function() {
			Nt(function(e) {
				return Math.min(e + 1, xt - 1);
			});
		}, [xt]), Wt = d(function() {
			Nt(function(e) {
				return Math.max(e - 1, 0);
			});
		}, []);
		r("useWAWebVoipGroupCallRxSubscription")(Me, w, st, B, Fe, Ot);
		var qt;
		return w === "speaker" ? qt = Me != null ? u.jsx(r("WAWebVoipUiSpeakerModeLayout.react"), {
			clampedStripPage: Mt,
			currentDominantSpeaker: Me,
			dominantMeasureRef: Te,
			getPeerReconnectingState: s,
			groupCallParticipantsConnected: c,
			groupChat: L,
			handleStripNextPage: Bt,
			handleStripPrevPage: Wt,
			isCompactLayout: T,
			isDocPip: ae,
			isInPopout: oe,
			isSelfScreenSharing: N,
			nonDominantSpeakers: we,
			onPinParticipant: F,
			pinnedParticipantJid: B,
			screenSharerJid: Fe,
			setStripTilePx: ke,
			stripMeasureRef: ve,
			stripNeedsPagination: Dt,
			stripTileMaxPx: $e,
			stripTileMinPx: y,
			stripTilePx: Ee,
			stripTotalPages: xt,
			visibleStripParticipants: Ot
		}) : null : qt = u.jsx("div", babelHelpers.extends({ ref: K }, {
			0: { className: "x6s0dn4 x78zum5 x1q0g3np x5yr21d xl56j7k x6ikm8r x10wlt62 xh8yej3" },
			1: { className: "x6s0dn4 x78zum5 x1q0g3np xl56j7k x6ikm8r x10wlt62 xh8yej3 x1r8uery x1iyjqo2 xs83m0k xt7dq6l x2lwn1j" }
		}[!!ie << 0], { children: u.jsx("div", {
			ref: Ze,
			className: "x6s0dn4 x78zum5 x1iyjqo2 xs83m0k x5yr21d xl56j7k xeuugli",
			children: u.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(ht, R.gridLayout(ie ? "stretch" : "center", Ye, ot ? "repeat(" + Math.min(Xe, ut) + ", " + Qe + "px)" : et, tt, Je, nt || ie && !at ? "stretch" : "center")), { children: [
				at && u.jsx("div", babelHelpers.extends({}, {
					0: { className: "x6s0dn4 x78zum5 x5yr21d xl56j7k x10l6tqk x13vifvy x1useyqa xrp34fr x1eu7cjg" },
					1: { className: "x6s0dn4 x78zum5 x5yr21d xl56j7k x10l6tqk x13vifvy xrp34fr xgd8bvy x1eu7cjg" }
				}[!!ct << 0], { children: u.jsx(o("WAWebVoipGroupCallPaginationControls.react").WAWebVoipGroupCallPrevPageButton, {
					currentPage: lt,
					onPrevPage: Ge,
					size: mt,
					totalPages: it,
					xstyle: ct ? R.paginationButtonNarrow : R.paginationButton
				}) })),
				u.jsx(r("WAWebVoipUiGridTiles.react"), {
					dynamicCellWidth: Qe,
					getPeerReconnectingState: s,
					groupCallParticipantsConnected: c,
					groupChat: L,
					hasPartialLastRow: _t,
					isCompactLayout: T,
					isMeasured: nt,
					isSelfCallLinkCreator: H,
					isSelfScreenSharing: N,
					lastRowItemCount: pt,
					lastRowStartIndex: ft,
					onPinParticipant: F,
					pageParticipants: st,
					pinnedParticipantJid: B,
					screenSharerJid: Fe,
					shouldCenterLastRow: gt,
					useHorizontalLayout: ie,
					usePagination: at
				}),
				at && u.jsx("div", babelHelpers.extends({}, {
					0: { className: "x6s0dn4 x78zum5 x5yr21d xl56j7k x10l6tqk x13vifvy x1useyqa xrp34fr x2hswfz" },
					1: { className: "x6s0dn4 x78zum5 x5yr21d xl56j7k x10l6tqk x13vifvy xrp34fr xgd8bvy x2hswfz" }
				}[!!ct << 0], { children: u.jsx(o("WAWebVoipGroupCallPaginationControls.react").WAWebVoipGroupCallNextPageButton, {
					currentPage: lt,
					onNextPage: He,
					size: mt,
					totalPages: it,
					xstyle: ct ? R.paginationButtonNarrow : R.paginationButton
				}) }))
			] }))
		}) })), u.jsxs(o("WAWebFlex.react").FlexColumn, {
			ref: U,
			align: "center",
			justify: "center",
			xstyle: [R.container, R.containerRelative],
			grow: 1,
			testid: "voip-container-group-call",
			children: [
				ie && (!oe || ae) && u.jsxs("div", {
					className: "x6s0dn4 x78zum5 xdt5ytf x129bwdz x1trrmfo xl56j7k x16ovd2e xh8yej3",
					children: [u.jsx("span", {
						className: "x17t9dm2 x1f6kntn x2b8uid x193iq5w x9f619 xdx6fka xvtqlqk x6ikm8r x10wlt62 xlyipyv xuxw1ft",
						children: P && L != null ? u.jsx(o("WAWebName.react").Name, { chat: L }) : o("WAWebParticipantListUtils").formatParticipantWidsPreserveOrder(o("WAWebCallLogUtils").sortParticipantWidsByPriority(k, null), !0)
					}), u.jsx("span", {
						className: "x1ks1olk x1pg5gke x2b8uid",
						children: u.jsx(r("WAWebCallTimer.react"), { callState: l })
					})]
				}),
				qt,
				ge && l != null && u.jsxs("div", babelHelpers.extends({ "aria-hidden": !0 }, (e || (e = r("stylex"))).props(o("WAWebVoipUiBodyStyles").WAWebVoipUiBodyStyles.audioToVideoOverlayBase, R.horizontalLayoutHeader), {
					"data-testid": "voip_group_audio_to_video_overlay",
					children: [u.jsx("span", {
						"data-testid": "voip_group_audio_to_video_overlay_title",
						className: "x17t9dm2 x1f6kntn x2b8uid x193iq5w x9f619 xdx6fka xvtqlqk x6ikm8r x10wlt62 xlyipyv xuxw1ft",
						children: P && L != null ? u.jsx(o("WAWebName.react").Name, { chat: L }) : o("WAWebParticipantListUtils").formatParticipantWidsPreserveOrder(o("WAWebCallLogUtils").sortParticipantWidsByPriority(k, null), !0)
					}), u.jsx("span", {
						"data-testid": "voip_group_audio_to_video_overlay_timer",
						className: "x1ks1olk x1pg5gke x2b8uid",
						children: u.jsx(r("WAWebCallTimer.react"), { callState: l })
					})]
				}))
			]
		});
	}
	L.displayName = L.name + " [from " + i.id + "]", l.default = L;
}), 98);
