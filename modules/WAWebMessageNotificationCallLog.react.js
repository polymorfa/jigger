__d("WAWebMessageNotificationCallLog.react", [
	"fbt",
	"WAWebCallCollection",
	"WAWebCallLogEntryCell.react",
	"WAWebCallLogMsgData.flow",
	"WAWebCallLogUtils",
	"WAWebClock",
	"WAWebDesktopUpsellCallingMissedCall.react",
	"WAWebDesktopUpsellCallingUnavailablePopover.react",
	"WAWebDesktopUpsellPlatformAwareHooks",
	"WAWebDesktopUpsellUtils",
	"WAWebDropdownV2.react",
	"WAWebFlex.react",
	"WAWebFrontendMsgGetters",
	"WAWebL10N",
	"WAWebMessageAuthor.react",
	"WAWebMessageMeta.react",
	"WAWebMsgGetters",
	"WAWebPopover.react",
	"WAWebUnstyledButton.react",
	"WAWebUserPrefsMeUser",
	"WAWebVoipGatingUtils",
	"WAWebVoipOngoingCallCollection",
	"WAWebVoipWaCallEnums",
	"WDSPaddings.stylex",
	"WDSText.react",
	"countWhere",
	"nullthrows",
	"react",
	"react-compiler-runtime",
	"useWAWebEventTargetValue",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useImperativeHandle, p = d.useRef;
	function _(e, t, n, r, o) {
		return r ? s._(
			/*BTDS*/
			""
		) : e && !o ? t ? s._(
			/*BTDS*/
			""
		) : n ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		) : t ? s._(
			/*BTDS*/
			""
		) : n ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.callId, n = e.callOutcome, a = e.callParticipants, i = e.duration, l = e.finalCallOutcome, u = e.isAdHocGroupCall, c = e.isGroupCall, d = e.isSentByMe, m = e.selfOtherDeviceConnected, p = e.shouldShowDesktopUpsell, _ = e.userDesktopOs, f = function() {
			if (!o("WAWebVoipGatingUtils").isDeviceSwitchingEnabled() || m !== !0) return !1;
			var e = r("WAWebCallCollection").activeCall;
			return !(e != null && e.id === t);
		}, g = f() && o("WAWebVoipGatingUtils").isDeviceSwitchEntryPointShown();
		if (o("WAWebVoipGatingUtils").isCallingEnabled() && !p) {
			var h, y = o("WAWebClock").Clock.callDurationStrSimple(i != null ? i : 0), C = a != null ? r("countWhere")(a, function(e) {
				return e.outcome === o("WAWebVoipWaCallEnums").CallParticipantState.Connected;
			}) : 0, b = (h = a == null ? void 0 : a.some(function(e) {
				return e.participant.isLid();
			})) != null ? h : !1, v = b ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow() : o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(), S = a != null ? r("countWhere")(a, function(e) {
				var t;
				return !((t = e.participant) != null && t.equals(v));
			}) : 0;
			return n === o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing ? c ? u ? g ? s._(
				/*BTDS*/
				"",
				[s._plural(S, "invited-count")]
			) : f() ? s._(
				/*BTDS*/
				"",
				[s._plural(S, "invited-count")]
			) : s._(
				/*BTDS*/
				"",
				[s._plural(S, "invited-count")]
			) : g ? s._(
				/*BTDS*/
				"",
				[s._param("joined-count", C)]
			) : f() ? s._(
				/*BTDS*/
				"",
				[s._plural(C, "joined-count")]
			) : s._(
				/*BTDS*/
				"",
				[s._param("joined-count", C)]
			) : l === o("WAWebCallLogMsgData.flow").CallOutcome.Completed ? s._(
				/*BTDS*/
				""
			) : C > 1 ? g ? s._(
				/*BTDS*/
				""
			) : f() ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			) : (n === o("WAWebCallLogMsgData.flow").CallOutcome.Missed || n === o("WAWebCallLogMsgData.flow").CallOutcome.Rejected || n === o("WAWebCallLogMsgData.flow").CallOutcome.Canceled) && d && !c ? s._(
				/*BTDS*/
				""
			) : n === o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere ? s._(
				/*BTDS*/
				""
			) : n === o("WAWebCallLogMsgData.flow").CallOutcome.Failed ? s._(
				/*BTDS*/
				""
			) : u ? s._(
				/*BTDS*/
				"",
				[s._plural(S, "invited-count")]
			) : n === o("WAWebCallLogMsgData.flow").CallOutcome.Missed && c ? s._(
				/*BTDS*/
				"",
				[s._param("time", y), s._param("joined-count", C)]
			) : n === o("WAWebCallLogMsgData.flow").CallOutcome.Completed ? c ? s._(
				/*BTDS*/
				"",
				[s._param("time", y), s._param("joined-count", C)]
			) : s._(
				/*BTDS*/
				"",
				[s._param("time", y)]
			) : s._(
				/*BTDS*/
				""
			);
		} else if (p === !0 && _) switch (_) {
			case o("WAWebDesktopUpsellUtils").UserDesktopOs.MACOS: return d ? c ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			) : c ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
			case o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS: return d ? c ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			) : c ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
		}
		return s._(
			/*BTDS*/
			""
		);
	}
	f.displayName = f.name + " [from " + i.id + "]";
	var g = {
		innerBubble: {
			height: "xr931m4",
			borderStartStartRadius: "x1liijdw",
			borderStartEndRadius: "xu342n7",
			borderEndEndRadius: "xelbjmh",
			borderEndStartRadius: "x16pgt24",
			backgroundColor: "x1bu39yj",
			$$css: !0
		},
		roundIconContainer: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			width: "x14qfxbe",
			height: "xc9qbxq",
			backgroundColor: "x1ew7x2d",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			$$css: !0
		},
		titleText: {
			fontSize: "x1jchvi3",
			$$css: !0
		}
	};
	function h(t) {
		var n = o("react-compiler-runtime").c(32), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, u = l.msg, d;
		if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
			var h;
			d = [
				(h = o("WAWebMsgGetters")).getIsVideoCall,
				h.getIsMissedCall,
				h.getIsSentByMe,
				h.getCallOutcome,
				h.getIsCallLink,
				h.getIsGroupCall,
				h.getIsAdHocGroupCall,
				h.getCallParticipants,
				h.getFinalCallOutcome,
				o("WAWebFrontendMsgGetters").getSenderObj,
				h.getCallDuration,
				h.getIsCallSilenced,
				h.getCallId,
				h.getSelfOtherDeviceConnected
			], n[3] = d;
		} else d = n[3];
		var y = o("useWAWebMsgValues").useMsgValues(a.msg.id, d), C = y[0], b = y[1], v = y[2], S = y[3], R = y[4], L = y[5], E = y[6], k = y[7], I = y[8], T = y[9], D = y[10], x = y[11], $ = y[12], P = y[13], N = p(null), M;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (M = function() {
			var e;
			(e = N.current) == null || e.click();
		}, n[4] = M) : M = n[4];
		var w = M, A;
		n[5] === Symbol.for("react.memo_cache_sentinel") ? (A = function() {
			return { handleKeyActivation: w };
		}, n[5] = A) : A = n[5], m(i, A);
		var F = o("WAWebDesktopUpsellUtils").getUserDesktopOs(), O = o("WAWebDesktopUpsellPlatformAwareHooks").useWAWebDesktopUpsellPlatformCheck(), B = o("WAWebDesktopUpsellPlatformAwareHooks").useWAWebDesktopUpsellPlatformAwareOsVersionCheck(), W;
		n[6] === Symbol.for("react.memo_cache_sentinel") ? (W = o("WAWebVoipGatingUtils").isCallingEnabled(), n[6] = W) : W = n[6];
		var q = W, U;
		n[7] === Symbol.for("react.memo_cache_sentinel") ? (U = o("WAWebVoipGatingUtils").isGroupCallingEnabled(), n[7] = U) : U = n[7];
		var V = U, H = O && !q || B && L && !V, G = o("WAWebCallLogUtils").getIsSelfConnected(k), z = o("WAWebCallLogUtils").getIsMissedCallOrNotConnected(b, G, v, S, I), j;
		n[8] !== $ ? (j = function() {
			return $ != null ? o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.getByCallId($) : null;
		}, n[8] = $, n[9] = j) : j = n[9];
		var K = r("useWAWebEventTargetValue")(o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection, "all", j), Q = K != null || S === o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing && I !== o("WAWebCallLogMsgData.flow").CallOutcome.Completed, X = _(z, E, C, x, Q), Y = X;
		if (H) if (E) {
			var J;
			n[10] === Symbol.for("react.memo_cache_sentinel") ? (J = s._(
				/*BTDS*/
				""
			), n[10] = J) : J = n[10], Y = J;
		} else if (C) {
			var Z;
			n[11] === Symbol.for("react.memo_cache_sentinel") ? (Z = s._(
				/*BTDS*/
				""
			), n[11] = Z) : Z = n[11], Y = Z;
		} else {
			var ee;
			n[12] === Symbol.for("react.memo_cache_sentinel") ? (ee = s._(
				/*BTDS*/
				""
			), n[12] = ee) : ee = n[12], Y = ee;
		}
		var te;
		n[13] === Symbol.for("react.memo_cache_sentinel") ? (te = {
			0: { className: "x10l6tqk x1n327nk x12zx8bi x1inkcgm" },
			1: { className: "x10l6tqk x1n327nk x12zx8bi x1inkcgm xtrg13t" }
		}[!!r("WAWebL10N").isRTL() << 0], n[13] = te) : te = n[13];
		var ne;
		n[14] !== u ? (ne = c.jsx("div", babelHelpers.extends({}, te, { children: c.jsx(o("WAWebMessageMeta.react").Meta, { msg: u }) })), n[14] = u, n[15] = ne) : ne = n[15];
		var re = ne, oe = f({
			callId: $,
			callOutcome: S,
			callParticipants: k,
			duration: D,
			finalCallOutcome: I,
			isAdHocGroupCall: E,
			isGroupCall: L,
			isSentByMe: v,
			selfOtherDeviceConnected: P,
			shouldShowDesktopUpsell: H,
			userDesktopOs: F
		}), ae;
		n[16] !== u || n[17] !== a.displayAuthor || n[18] !== T ? (ae = a.displayAuthor === !0 && T != null ? c.jsx("div", {
			className: "x1sbwfh8 x1yc453h",
			children: c.jsx(r("WAWebMessageAuthor.react"), {
				msg: u,
				contact: T,
				stopClickPropagation: !0
			})
		}) : null, n[16] = u, n[17] = a.displayAuthor, n[18] = T, n[19] = ae) : ae = n[19];
		var ie = ae, le;
		n[20] === Symbol.for("react.memo_cache_sentinel") ? (le = { className: "x9f619 x87ps6o x3orp4s xfssnsy x123j3cw xaso8d8 x1gabggj" }, n[20] = le) : le = n[20];
		var se;
		n[21] === Symbol.for("react.memo_cache_sentinel") ? (se = [g.innerBubble, o("WDSPaddings.stylex").wdsPaddings.paddingHor12], n[21] = se) : se = n[21];
		var ue = R != null ? R : !1, ce;
		n[22] !== z || n[23] !== Q || n[24] !== v || n[25] !== C || n[26] !== ue ? (ce = c.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: g.roundIconContainer,
			padding: 2,
			children: c.jsx(o("WAWebCallLogEntryCell.react").CallLogIcon, {
				iconHeight: 22,
				isMissedCall: z,
				isVideoCall: C,
				isFromMe: v,
				isCallLink: ue,
				isOngoingCall: Q
			})
		}), n[22] = z, n[23] = Q, n[24] = v, n[25] = C, n[26] = ue, n[27] = ce) : ce = n[27];
		var de;
		n[28] !== Y ? (de = c.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: g.titleText,
			children: Y
		}), n[28] = Y, n[29] = de) : de = n[29];
		var me = c.jsxs("div", babelHelpers.extends({ "data-testid": "call-log-system-message" }, le, { children: [
			ie,
			c.jsxs(o("WAWebFlex.react").FlexRow, {
				xstyle: se,
				align: "center",
				children: [ce, c.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingStart12,
					justify: "evenly",
					rowGap: 4,
					children: [de, c.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: oe
					})]
				})]
			}),
			re
		] }));
		if (H === !0) {
			var pe = v ? c.jsx(r("WAWebDesktopUpsellCallingUnavailablePopover.react"), {
				userDesktopOs: r("nullthrows")(F),
				isGroupCall: L
			}) : c.jsx(r("WAWebDesktopUpsellCallingMissedCall.react"), {
				userDesktopOs: r("nullthrows")(F),
				isGroupCall: L,
				isMissedCall: b
			}), _e;
			return n[30] !== pe ? (_e = c.jsx(o("WAWebDropdownV2.react").DropdownV2, {
				target: N,
				alignment: o("WAWebPopover.react").PopoverAlignment.Center,
				position: o("WAWebPopover.react").PopoverPosition.Top,
				buffer: 12,
				material: !0,
				children: pe
			}), n[30] = pe, n[31] = _e) : _e = n[31], c.jsxs(r("WAWebUnstyledButton.react"), {
				ref: N,
				children: [_e, me]
			});
		}
		return me;
	}
	l.default = h;
}), 226);
