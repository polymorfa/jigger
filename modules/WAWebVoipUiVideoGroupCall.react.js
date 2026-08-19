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
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(127), a = t.activeOverride, i = t.callState, l = t.getPeerReconnectingState, s = t.groupCallParticipantsConnected, c = t.groupChat, d = t.groupParticipantsWithoutSelf, _ = t.isCompactLayout, S = t.isGroupAudioCall, L = t.isLinkedGroupCall, P = t.isSelfScreenSharing, N = t.layoutMode, M = t.onActiveOverrideChange, w = t.onPinParticipant, A = t.pinnedParticipantJid, F = t.screenSharingPeerJid, O = a === void 0 ? null : a, B = i === void 0 ? null : i, W = c === void 0 ? null : c, q = d === void 0 ? h : d, U = _ === void 0 ? !1 : _, V = S === void 0 ? !1 : S, H = L === void 0 ? !1 : L, G = N === void 0 ? "grid" : N, z = A === void 0 ? null : A, j = F === void 0 ? null : F, K = f(null), Q = m(r("WAWebVoipUiPopoutWindowContext"));
		r("useWAWebOnUnmount")(o("WAWebUserPrefsVoip").clearLandingPageColorIndex);
		var X;
		e: {
			var Y = r("WAWebCallCollection").activeCall;
			if (Y == null || !Y.isCallLink) {
				X = !1;
				break e;
			}
			var J;
			n[0] === Symbol.for("react.memo_cache_sentinel") ? (J = o("WAWebUserPrefsMeUser").isMeAccount(Y.callLinkCreatorJid), n[0] = J) : J = n[0], X = J;
		}
		var Z = X, ee = g($), te = ee[0], ne = r("useWAWebMeasure")(), re = ne[0], oe = ne[1], ae = oe.width, ie = g(te), le = ie[0], se = ie[1], ue;
		n[1] !== ae || n[2] !== te || n[3] !== le ? (ue = o("WAWebVoipGridPageSize").getResponsiveGridPageSize(te, ae, le), n[1] = ae, n[2] = te, n[3] = le, n[4] = ue) : ue = n[4];
		var ce = ue;
		ce !== le && se(ce);
		var de = m(r("WAWebVoipGridPageSizeContext")), me, pe;
		n[5] !== ae || n[6] !== G || n[7] !== ce || n[8] !== le || n[9] !== de ? (me = function() {
			de == null || de(G === "grid" && ae > 0 && ce === le ? le : null);
		}, pe = [
			ae,
			G,
			ce,
			le,
			de
		], n[5] = ae, n[6] = G, n[7] = ce, n[8] = le, n[9] = de, n[10] = me, n[11] = pe) : (me = n[10], pe = n[11]), p(me, pe);
		var _e;
		n[12] !== de ? (_e = function() {
			de == null || de(null);
		}, n[12] = de, n[13] = _e) : _e = n[13], r("useWAWebOnUnmount")(_e);
		var fe;
		n[14] !== s ? (fe = s.length > 16 ? s.slice(0, 16) : s, n[14] = s, n[15] = fe) : fe = n[15];
		var ge = fe, he = ge.length, ye = Q.isContextInPopoutWindow, Ce = Q.isDocPip, be = V && (!ye || Ce), ve = g(V), Se = ve[0], Re = ve[1], Le = g(0), Ee = Le[0], ke = Le[1], Ie = g(0), Te = Ie[0], De = Ie[1], xe = Ee !== Te;
		Se !== V && (Re(V), !V && !ye && !Ce ? ke(x) : De(Ee));
		var $e;
		n[16] !== Ee ? ($e = function() {
			De(Ee);
		}, n[16] = Ee, n[17] = $e) : $e = n[17];
		var Pe = o("useWAWebTimeout").useManualTimeout($e), Ne = Pe[0], Me = Pe[1], we, Ae;
		n[18] !== Me || n[19] !== Ee || n[20] !== Te || n[21] !== Ne ? (we = function() {
			Ee !== Te ? Ne(o("WAWebMoveResizeConstants").MIN_HEIGHT_CHANGE_ANIMATION_DURATION) : Me();
		}, Ae = [
			Ee,
			Te,
			Ne,
			Me
		], n[18] = Me, n[19] = Ee, n[20] = Te, n[21] = Ne, n[22] = we, n[23] = Ae) : (we = n[22], Ae = n[23]), p(we, Ae);
		var Fe = r("useWAWebMeasure")(), Oe = Fe[0], Be = Fe[1], We = Be.width, qe = g(y), Ue = qe[0], Ve = qe[1], He = r("useWAWebMeasure")(), Ge = He[0], ze = He[1], je = ze.height > 0 ? ze.height + Ue : 0, Ke = je > 0 ? Math.min(C, Math.max(y, Math.floor(je / 2))) : C;
		Ue > Ke && Ve(Ke);
		var Qe;
		e: {
			if (We <= 0) {
				Qe = null;
				break e;
			}
			var Xe = Math.max(0, We - 2 * v), Ye = Math.max(1, Math.floor((Xe + b) / (Ue + b)));
			Qe = Math.min(te, Ye);
		}
		var Je = Qe, Ze = r("useWAWebVoipGroupCallOrdering")(O, s, P, G, ge, M, le, z, j, Je), et = Ze.currentDominantSpeaker, tt = Ze.nonDominantSpeakers, nt = Ze.pagedParticipants, rt = Ze.screenSharerJid, ot = he > le, at = ot ? Math.max(1, nt.pages.length) : 1, it = g(0), lt = it[0], st = it[1], ut = Math.min(lt, at - 1), ct;
		n[24] === Symbol.for("react.memo_cache_sentinel") ? (ct = function() {
			st(D);
		}, n[24] = ct) : ct = n[24];
		var dt = ct, mt;
		n[25] === Symbol.for("react.memo_cache_sentinel") ? (mt = function() {
			st(T);
		}, n[25] = mt) : mt = n[25];
		var pt = mt, _t;
		if (n[26] !== ut || n[27] !== nt.pages) {
			var ft;
			_t = (ft = nt.pages[ut]) != null ? ft : [], n[26] = ut, n[27] = nt.pages, n[28] = _t;
		} else _t = n[28];
		var gt = _t, ht = gt.length > 0 ? gt : ge, yt = ht.length, Ct = r("useWAWebVoipDynamicGridLayout")(yt, ot, be, ye, le, ye ? Q.windowEl : void 0), bt = Ct.dynamicCellWidth, vt = Ct.dynamicColumns, St = Ct.gridAlignItems, Rt = Ct.gridJustifyContent, Lt = Ct.gridMeasureRef, Et = Ct.gridTemplateColumns, kt = Ct.gridTemplateRows, It = Ct.isMeasured, Tt = Ct.measuredWidth, Dt = be && vt > 0, xt = Dt ? he > vt : ot, $t = Dt ? Math.max(1, Math.ceil(he / vt)) : at, Pt = Math.min(lt, $t - 1);
		Pt !== lt && st(Pt);
		var Nt;
		e: {
			if (Dt) {
				var Mt = Pt * vt, wt;
				n[29] !== vt || n[30] !== ge || n[31] !== Mt ? (wt = ge.slice(Mt, Mt + vt), n[29] = vt, n[30] = ge, n[31] = Mt, n[32] = wt) : wt = n[32], Nt = wt;
				break e;
			}
			Nt = ht;
		}
		var At = Nt, Ft = At.length, Ot = Tt > 0 && Tt < o("WAWebVoipGroupCallGridConstants").NARROW_PAGINATION_THRESHOLD_PX, Bt = !Ot && ye && !Ce, Wt = Bt ? "medium" : "small", qt = vt > 0 ? Ft % vt : 0, Ut = qt > 0 && !xt && !be, Vt = Ut ? Ft - qt : -1, Ht = !It && !be && (Ft === 3 || Ft === 5 || Ft === 7), Gt;
		xt ? Gt = R.gridContainerPaginated(o("WAWebVoipGroupCallGridConstants").getPaginationReservedWidth(Tt), It) : ye ? Gt = R.gridContainerPopout : Gt = R.gridContainer;
		var zt;
		n[33] !== et || n[34] !== P ? (zt = P && et != null && o("WAWebUserPrefsMeUser").isMeAccount(et), n[33] = et, n[34] = P, n[35] = zt) : zt = n[35];
		var jt = zt, Kt = et != null && !o("WAWebUserPrefsMeUser").isMeAccount(et) && rt != null && et.equals(rt), Qt = tt.length + (jt || Kt ? 1 : 0), Xt = tt.length > 0 || Kt, Yt = g(!1), Jt = Yt[0], Zt = Yt[1], en = o("WAWebVoipShouldShowDominantTooSmall").shouldShowDominantTooSmall(G, ye, Xt, ze.height, Ue, Jt);
		en !== Jt && Zt(en);
		var tn, nn;
		n[36] !== Jt || n[37] !== ye ? (tn = function() {
			if (ye) return o("WAWebVoipWindowConstants").updateSpeakerDominantTooSmall(Jt), I;
		}, nn = [ye, Jt], n[36] = Jt, n[37] = ye, n[38] = tn, n[39] = nn) : (tn = n[38], nn = n[39]), p(tn, nn);
		var rn;
		e: {
			if (We <= 0) {
				rn = Math.min(te, Qt);
				break e;
			}
			var on = Qt, an = on * Ue + (on - 1) * b;
			if (an <= We) {
				rn = Math.min(te, on);
				break e;
			}
			var ln = We - 2 * v;
			rn = Math.min(te, Math.max(1, Math.floor((ln + b) / (Ue + b))));
		}
		var sn = rn, un = o("WAWebVoipSpeakerModeStripPagination").getSpeakerModeStripPageOneCapacity({
			isPeerScreenShareDominant: Kt,
			isSelfStripInjected: jt,
			stripVisibleCount: sn
		}), cn;
		if (n[40] !== tt || n[41] !== un) {
			e: {
				if (tt.length <= un) {
					cn = tt;
					break e;
				}
				var dn = tt.findIndex(k);
				if (dn === -1) {
					cn = tt;
					break e;
				}
				var mn = [].concat(tt), pn = mn.splice(dn, 1), _n = pn[0];
				mn.splice(un - 1, 0, _n), cn = mn;
			}
			n[40] = tt, n[41] = un, n[42] = cn;
		} else cn = n[42];
		var fn = cn, gn = fn.length > un, hn = gn ? 1 + Math.ceil((fn.length - un) / sn) : 1, yn = g(0), Cn = yn[0], bn = yn[1], vn = Math.min(Cn, Math.max(0, hn - 1));
		vn !== Cn && bn(vn);
		var Sn = g(G), Rn = Sn[0], Ln = Sn[1];
		G !== Rn && (Ln(G), G === "speaker" && bn(0));
		var En;
		e: {
			if (vn === 0) {
				var kn;
				n[43] !== un || n[44] !== fn ? (kn = fn.slice(0, un), n[43] = un, n[44] = fn, n[45] = kn) : kn = n[45], En = kn;
				break e;
			}
			var In = un + (vn - 1) * sn, Tn;
			n[46] !== In || n[47] !== fn || n[48] !== sn ? (Tn = fn.slice(In, In + sn), n[46] = In, n[47] = fn, n[48] = sn, n[49] = Tn) : Tn = n[49], En = Tn;
		}
		var Dn = En, xn;
		n[50] !== hn ? (xn = function() {
			bn(function(e) {
				return Math.min(e + 1, hn - 1);
			});
		}, n[50] = hn, n[51] = xn) : xn = n[51];
		var $n = xn, Pn;
		n[52] === Symbol.for("react.memo_cache_sentinel") ? (Pn = function() {
			bn(E);
		}, n[52] = Pn) : Pn = n[52];
		var Nn = Pn;
		r("useWAWebVoipGroupCallRxSubscription")(et, G, At, z, rt, Dn);
		var Mn;
		if (G === "speaker") {
			var wn;
			n[53] !== vn || n[54] !== et || n[55] !== Ge || n[56] !== Ke || n[57] !== l || n[58] !== s || n[59] !== W || n[60] !== $n || n[61] !== U || n[62] !== Ce || n[63] !== ye || n[64] !== P || n[65] !== tt || n[66] !== w || n[67] !== z || n[68] !== rt || n[69] !== Oe || n[70] !== gn || n[71] !== Ue || n[72] !== hn || n[73] !== Dn ? (wn = et != null ? u.jsx(r("WAWebVoipUiSpeakerModeLayout.react"), {
				clampedStripPage: vn,
				currentDominantSpeaker: et,
				dominantMeasureRef: Ge,
				getPeerReconnectingState: l,
				groupCallParticipantsConnected: s,
				groupChat: W,
				handleStripNextPage: $n,
				handleStripPrevPage: Nn,
				isCompactLayout: U,
				isDocPip: Ce,
				isInPopout: ye,
				isSelfScreenSharing: P,
				nonDominantSpeakers: tt,
				onPinParticipant: w,
				pinnedParticipantJid: z,
				screenSharerJid: rt,
				setStripTilePx: Ve,
				stripMeasureRef: Oe,
				stripNeedsPagination: gn,
				stripTileMaxPx: Ke,
				stripTileMinPx: y,
				stripTilePx: Ue,
				stripTotalPages: hn,
				visibleStripParticipants: Dn
			}) : null, n[53] = vn, n[54] = et, n[55] = Ge, n[56] = Ke, n[57] = l, n[58] = s, n[59] = W, n[60] = $n, n[61] = U, n[62] = Ce, n[63] = ye, n[64] = P, n[65] = tt, n[66] = w, n[67] = z, n[68] = rt, n[69] = Oe, n[70] = gn, n[71] = Ue, n[72] = hn, n[73] = Dn, n[74] = wn) : wn = n[74], Mn = wn;
		} else {
			var An;
			n[75] !== be ? (An = {
				0: { className: "x6s0dn4 x78zum5 x1q0g3np x5yr21d xl56j7k x6ikm8r x10wlt62 xh8yej3" },
				1: { className: "x6s0dn4 x78zum5 x1q0g3np xl56j7k x6ikm8r x10wlt62 xh8yej3 x1r8uery x1iyjqo2 xs83m0k xt7dq6l x2lwn1j" }
			}[!!be << 0], n[75] = be, n[76] = An) : An = n[76];
			var Fn;
			n[77] === Symbol.for("react.memo_cache_sentinel") ? (Fn = { className: "x6s0dn4 x78zum5 x1iyjqo2 xs83m0k x5yr21d xl56j7k xeuugli" }, n[77] = Fn) : Fn = n[77];
			var On;
			n[78] !== Pt || n[79] !== $t || n[80] !== xt || n[81] !== Wt || n[82] !== Ot ? (On = xt && u.jsx("div", babelHelpers.extends({}, {
				0: { className: "x6s0dn4 x78zum5 x5yr21d xl56j7k x10l6tqk x13vifvy x1useyqa xrp34fr x1eu7cjg" },
				1: { className: "x6s0dn4 x78zum5 x5yr21d xl56j7k x10l6tqk x13vifvy xrp34fr xgd8bvy x1eu7cjg" }
			}[!!Ot << 0], { children: u.jsx(o("WAWebVoipGroupCallPaginationControls.react").WAWebVoipGroupCallPrevPageButton, {
				currentPage: Pt,
				onPrevPage: pt,
				size: Wt,
				totalPages: $t,
				xstyle: Ot ? R.paginationButtonNarrow : R.paginationButton
			}) })), n[78] = Pt, n[79] = $t, n[80] = xt, n[81] = Wt, n[82] = Ot, n[83] = On) : On = n[83];
			var Bn;
			n[84] !== bt || n[85] !== At || n[86] !== xt || n[87] !== l || n[88] !== s || n[89] !== W || n[90] !== Ut || n[91] !== U || n[92] !== It || n[93] !== P || n[94] !== qt || n[95] !== Vt || n[96] !== w || n[97] !== z || n[98] !== rt || n[99] !== Ht || n[100] !== be ? (Bn = u.jsx(r("WAWebVoipUiGridTiles.react"), {
				dynamicCellWidth: bt,
				getPeerReconnectingState: l,
				groupCallParticipantsConnected: s,
				groupChat: W,
				hasPartialLastRow: Ut,
				isCompactLayout: U,
				isMeasured: It,
				isSelfCallLinkCreator: Z,
				isSelfScreenSharing: P,
				lastRowItemCount: qt,
				lastRowStartIndex: Vt,
				onPinParticipant: w,
				pageParticipants: At,
				pinnedParticipantJid: z,
				screenSharerJid: rt,
				shouldCenterLastRow: Ht,
				useHorizontalLayout: be,
				usePagination: xt
			}), n[84] = bt, n[85] = At, n[86] = xt, n[87] = l, n[88] = s, n[89] = W, n[90] = Ut, n[91] = U, n[92] = It, n[93] = P, n[94] = qt, n[95] = Vt, n[96] = w, n[97] = z, n[98] = rt, n[99] = Ht, n[100] = be, n[101] = Bn) : Bn = n[101];
			var Wn;
			n[102] !== Pt || n[103] !== $t || n[104] !== xt || n[105] !== Wt || n[106] !== Ot ? (Wn = xt && u.jsx("div", babelHelpers.extends({}, {
				0: { className: "x6s0dn4 x78zum5 x5yr21d xl56j7k x10l6tqk x13vifvy x1useyqa xrp34fr x2hswfz" },
				1: { className: "x6s0dn4 x78zum5 x5yr21d xl56j7k x10l6tqk x13vifvy xrp34fr xgd8bvy x2hswfz" }
			}[!!Ot << 0], { children: u.jsx(o("WAWebVoipGroupCallPaginationControls.react").WAWebVoipGroupCallNextPageButton, {
				currentPage: Pt,
				onNextPage: dt,
				size: Wt,
				totalPages: $t,
				xstyle: Ot ? R.paginationButtonNarrow : R.paginationButton
			}) })), n[102] = Pt, n[103] = $t, n[104] = xt, n[105] = Wt, n[106] = Ot, n[107] = Wn) : Wn = n[107], Mn = u.jsx("div", babelHelpers.extends({ ref: re }, An, { children: u.jsx("div", babelHelpers.extends({ ref: Lt }, Fn, { children: u.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(Gt, R.gridLayout(be ? "stretch" : "center", St, Dt ? "repeat(" + Math.min(vt, Ft) + ", " + bt + "px)" : Et, kt, Rt, It || be && !xt ? "stretch" : "center")), { children: [
				On,
				Bn,
				Wn
			] })) })) }));
		}
		var qn;
		n[108] === Symbol.for("react.memo_cache_sentinel") ? (qn = [R.container, R.containerRelative], n[108] = qn) : qn = n[108];
		var Un;
		n[109] !== B || n[110] !== W || n[111] !== q || n[112] !== Ce || n[113] !== ye || n[114] !== H || n[115] !== be ? (Un = be && (!ye || Ce) && u.jsxs("div", {
			className: "x6s0dn4 x78zum5 xdt5ytf x129bwdz x1trrmfo xl56j7k x16ovd2e xh8yej3",
			children: [u.jsx("span", {
				className: "x17t9dm2 x1f6kntn x2b8uid x193iq5w x9f619 xdx6fka xvtqlqk x6ikm8r x10wlt62 xlyipyv xuxw1ft",
				children: H && W != null ? u.jsx(o("WAWebName.react").Name, { chat: W }) : o("WAWebParticipantListUtils").formatParticipantWidsPreserveOrder(o("WAWebCallLogUtils").sortParticipantWidsByPriority(q, null), !0)
			}), u.jsx("span", {
				className: "x1ks1olk x1pg5gke x2b8uid",
				children: u.jsx(r("WAWebCallTimer.react"), { callState: B })
			})]
		}), n[109] = B, n[110] = W, n[111] = q, n[112] = Ce, n[113] = ye, n[114] = H, n[115] = be, n[116] = Un) : Un = n[116];
		var Vn;
		n[117] !== B || n[118] !== W || n[119] !== q || n[120] !== H || n[121] !== xe ? (Vn = xe && B != null && u.jsxs("div", babelHelpers.extends({ "aria-hidden": !0 }, (e || (e = r("stylex"))).props(o("WAWebVoipUiBodyStyles").WAWebVoipUiBodyStyles.audioToVideoOverlayBase, R.horizontalLayoutHeader), {
			"data-testid": "voip_group_audio_to_video_overlay",
			children: [u.jsx("span", {
				"data-testid": "voip_group_audio_to_video_overlay_title",
				className: "x17t9dm2 x1f6kntn x2b8uid x193iq5w x9f619 xdx6fka xvtqlqk x6ikm8r x10wlt62 xlyipyv xuxw1ft",
				children: H && W != null ? u.jsx(o("WAWebName.react").Name, { chat: W }) : o("WAWebParticipantListUtils").formatParticipantWidsPreserveOrder(o("WAWebCallLogUtils").sortParticipantWidsByPriority(q, null), !0)
			}), u.jsx("span", {
				"data-testid": "voip_group_audio_to_video_overlay_timer",
				className: "x1ks1olk x1pg5gke x2b8uid",
				children: u.jsx(r("WAWebCallTimer.react"), { callState: B })
			})]
		})), n[117] = B, n[118] = W, n[119] = q, n[120] = H, n[121] = xe, n[122] = Vn) : Vn = n[122];
		var Hn;
		return n[123] !== Mn || n[124] !== Un || n[125] !== Vn ? (Hn = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			ref: K,
			align: "center",
			justify: "center",
			xstyle: qn,
			grow: 1,
			testid: "voip-container-group-call",
			children: [
				Un,
				Mn,
				Vn
			]
		}), n[123] = Mn, n[124] = Un, n[125] = Vn, n[126] = Hn) : Hn = n[126], Hn;
	}
	function E(e) {
		return Math.max(e - 1, 0);
	}
	function k(e) {
		return o("WAWebUserPrefsMeUser").isMeAccount(e);
	}
	function I() {
		return o("WAWebVoipWindowConstants").updateSpeakerDominantTooSmall(!1);
	}
	function T(e) {
		return Math.max(e - 1, 0);
	}
	function D(e) {
		return e + 1;
	}
	function x(e) {
		return e + 1;
	}
	function $() {
		return o("WAWebVoipGridPageSize").getGridParticipantsPerPage();
	}
	l.default = L;
}), 98);
