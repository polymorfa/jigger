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
		var n, a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.msg, u = o("useWAWebMsgValues").useMsgValues(i.msg.id, [
			(n = o("WAWebMsgGetters")).getIsVideoCall,
			n.getIsMissedCall,
			n.getIsSentByMe,
			n.getCallOutcome,
			n.getIsCallLink,
			n.getIsGroupCall,
			n.getIsAdHocGroupCall,
			n.getCallParticipants,
			n.getFinalCallOutcome,
			o("WAWebFrontendMsgGetters").getSenderObj,
			n.getCallDuration,
			n.getIsCallSilenced,
			n.getCallId,
			n.getSelfOtherDeviceConnected
		]), d = u[0], h = u[1], y = u[2], C = u[3], b = u[4], v = u[5], S = u[6], R = u[7], L = u[8], E = u[9], k = u[10], I = u[11], T = u[12], D = u[13], x = p(null), $ = function() {
			var e;
			(e = x.current) == null || e.click();
		};
		m(a, function() {
			return { handleKeyActivation: $ };
		});
		var P = o("WAWebDesktopUpsellUtils").getUserDesktopOs(), N = o("WAWebDesktopUpsellPlatformAwareHooks").useWAWebDesktopUpsellPlatformCheck(), M = o("WAWebDesktopUpsellPlatformAwareHooks").useWAWebDesktopUpsellPlatformAwareOsVersionCheck(), w = o("WAWebVoipGatingUtils").isCallingEnabled(), A = o("WAWebVoipGatingUtils").isGroupCallingEnabled(), F = N && !w || M && v && !A, O = o("WAWebCallLogUtils").getIsSelfConnected(R), B = o("WAWebCallLogUtils").getIsMissedCallOrNotConnected(h, O, y, C, L), W = r("useWAWebEventTargetValue")(o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection, "all", function() {
			return T != null ? o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.getByCallId(T) : null;
		}), q = W != null || C === o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing && L !== o("WAWebCallLogMsgData.flow").CallOutcome.Completed, U = _(B, S, d, I, q), V = U;
		F && (S ? V = s._(
			/*BTDS*/
			""
		) : d ? V = s._(
			/*BTDS*/
			""
		) : V = s._(
			/*BTDS*/
			""
		));
		var H = c.jsx("div", babelHelpers.extends({}, {
			0: { className: "x10l6tqk x1n327nk x12zx8bi x1inkcgm" },
			1: { className: "x10l6tqk x1n327nk x12zx8bi x1inkcgm xtrg13t" }
		}[!!r("WAWebL10N").isRTL() << 0], { children: c.jsx(o("WAWebMessageMeta.react").Meta, { msg: l }) })), G = f({
			callId: T,
			callOutcome: C,
			callParticipants: R,
			duration: k,
			finalCallOutcome: L,
			isAdHocGroupCall: S,
			isGroupCall: v,
			isSentByMe: y,
			selfOtherDeviceConnected: D,
			shouldShowDesktopUpsell: F,
			userDesktopOs: P
		}), z = i.displayAuthor === !0 && E != null ? c.jsx("div", {
			className: "x1sbwfh8 x1yc453h",
			children: c.jsx(r("WAWebMessageAuthor.react"), {
				msg: l,
				contact: E,
				stopClickPropagation: !0
			})
		}) : null, j = c.jsxs("div", {
			"data-testid": "call-log-system-message",
			className: "x9f619 x87ps6o x3orp4s xfssnsy x123j3cw xaso8d8 x1gabggj",
			children: [
				z,
				c.jsxs(o("WAWebFlex.react").FlexRow, {
					xstyle: [g.innerBubble, o("WDSPaddings.stylex").wdsPaddings.paddingHor12],
					align: "center",
					children: [c.jsx(o("WAWebFlex.react").FlexItem, {
						xstyle: g.roundIconContainer,
						padding: 2,
						children: c.jsx(o("WAWebCallLogEntryCell.react").CallLogIcon, {
							iconHeight: 22,
							isMissedCall: B,
							isVideoCall: d,
							isFromMe: y,
							isCallLink: b != null ? b : !1,
							isOngoingCall: q
						})
					}), c.jsxs(o("WAWebFlex.react").FlexColumn, {
						xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingStart12,
						justify: "evenly",
						rowGap: 4,
						children: [c.jsx(o("WAWebFlex.react").FlexItem, {
							xstyle: g.titleText,
							children: V
						}), c.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							children: G
						})]
					})]
				}),
				H
			]
		});
		if (F === !0) {
			var K = y ? c.jsx(r("WAWebDesktopUpsellCallingUnavailablePopover.react"), {
				userDesktopOs: r("nullthrows")(P),
				isGroupCall: v
			}) : c.jsx(r("WAWebDesktopUpsellCallingMissedCall.react"), {
				userDesktopOs: r("nullthrows")(P),
				isGroupCall: v,
				isMissedCall: h
			});
			return c.jsxs(r("WAWebUnstyledButton.react"), {
				ref: x,
				children: [c.jsx(o("WAWebDropdownV2.react").DropdownV2, {
					target: x,
					alignment: o("WAWebPopover.react").PopoverAlignment.Center,
					position: o("WAWebPopover.react").PopoverPosition.Top,
					buffer: 12,
					material: !0,
					children: K
				}), j]
			});
		}
		return j;
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
