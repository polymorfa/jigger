__d("WAWebEventsMessageComponent.react", [
	"fbt",
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebCastToEventCreationMsg",
	"WAWebChatThemeModeContext",
	"WAWebContactCollection",
	"WAWebDisplayType",
	"WAWebDrawerManager",
	"WAWebEmojiText.react",
	"WAWebEventInfoFlowLoadable",
	"WAWebEventUtils",
	"WAWebEventsCreateEventModalFlow.react",
	"WAWebEventsGatingUtils",
	"WAWebEventsRSVPPopup.react",
	"WAWebExpandableText.react",
	"WAWebFacePile.react",
	"WAWebFbtIntlList",
	"WAWebFlex.react",
	"WAWebFormatEventDateString",
	"WAWebFrontendContactGetters",
	"WAWebFrontendMsgGetters",
	"WAWebJoinEventCallAction",
	"WAWebKeyboardTabUtils",
	"WAWebL10N",
	"WAWebMessageBubbleActions.react",
	"WAWebMessageDeeperContainer.react",
	"WAWebMessageMeta.react",
	"WAWebMessageTextBubble.react",
	"WAWebModalManager",
	"WAWebMsgGetters",
	"WAWebProtobufsE2E.pb",
	"WAWebSendEventResponseMsgAction",
	"WAWebUnstyledButton.react",
	"WAWebUserPrefsMeUser",
	"WAWebVoipGatingUtils",
	"WAWebWarningIcon.react",
	"WDSFontTokenStyles",
	"WDSIconIcCalendarMonth.react",
	"WDSIconIcExpandMore.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"compactMap",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebEventResponses",
	"useWAWebMsgValues",
	"useWAWebUIM"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.createRef, p = d.useContext, _ = d.useRef, f = {
		marginBlock1: {
			marginTop: "xvijh9v",
			marginBottom: "x1ty9z65",
			$$css: !0
		},
		paddingInlineStart14: {
			paddingInlineStart: "x1onr9mi",
			$$css: !0
		}
	}, g = {
		unstyledButton: {
			width: "xh8yej3",
			textAlign: "x1yc453h",
			$$css: !0
		},
		deepContainer: {
			cursor: "xmper1u",
			width: "x10rsq8x",
			position: "x1n2onr6",
			display: "x78zum5",
			$$css: !0
		},
		icon: {
			color: "x1v5yvga",
			$$css: !0
		},
		iconDisabled: {
			color: "xshy2n",
			$$css: !0
		},
		iconThemed: {
			color: "x14ug900",
			$$css: !0
		},
		iconContainer: {
			width: "x14qfxbe",
			height: "xc9qbxq",
			backgroundColor: "x4wrhlh",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			$$css: !0
		},
		iconContainerVibrantOutgoing: {
			backgroundColor: "x1bu39yj",
			$$css: !0
		},
		iconContainerThemed: {
			backgroundColor: "x1ew7x2d",
			$$css: !0
		},
		eventDetailText: {
			color: "xhslqc4",
			$$css: !0
		},
		facepileBorderIncoming: {
			borderTopColor: "x1dla3ec",
			borderInlineEndColor: "x1b76cva",
			borderBottomColor: "xoht4n3",
			borderInlineStartColor: "xd1k3aj",
			$$css: !0
		},
		facepileBorderOutgoing: {
			borderTopColor: "x1dla3ec",
			borderInlineEndColor: "x1b76cva",
			borderBottomColor: "xoht4n3",
			borderInlineStartColor: "xd1k3aj",
			$$css: !0
		},
		invalidEventWarning: {
			alignItems: "x6s0dn4",
			borderStartStartRadius: "xbrszos",
			borderStartEndRadius: "xea3l6g",
			borderEndEndRadius: "x18isctg",
			borderEndStartRadius: "x2q3nzr",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			$$css: !0
		},
		invalidEventWarningBorderReceiver: {
			borderTopColor: "xx42vgk",
			borderInlineEndColor: "xbogo7e",
			borderBottomColor: "x120ee7l",
			borderInlineStartColor: "x1vb5itz",
			$$css: !0
		},
		invalidEventWarningBorderSender: {
			borderTopColor: "xx42vgk",
			borderInlineEndColor: "xbogo7e",
			borderBottomColor: "x120ee7l",
			borderInlineStartColor: "x1vb5itz",
			$$css: !0
		},
		warningIcon: {
			color: "x1kt8ij1",
			$$css: !0
		},
		fullWidth: {
			width: "xh8yej3",
			$$css: !0
		},
		flex: {
			display: "x78zum5",
			$$css: !0
		}
	};
	function h(e) {
		if (e != null && e.includes("/video/")) return s._(
			/*BTDS*/
			""
		);
		if (e != null && e.includes("/voice/")) return s._(
			/*BTDS*/
			""
		);
	}
	function y(e) {
		var t = e.eventResponse, n = e.isEventCanceled, r = e.isSentByMe, a = e.showJoinCall, i;
		return n ? i = s._(
			/*BTDS*/
			""
		) : a ? i = s._(
			/*BTDS*/
			""
		) : r ? i = s._(
			/*BTDS*/
			""
		) : t === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.GOING ? i = s._(
			/*BTDS*/
			""
		) : t === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.MAYBE ? i = s._(
			/*BTDS*/
			""
		) : t === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.NOT_GOING ? i = s._(
			/*BTDS*/
			""
		) : i = s._(
			/*BTDS*/
			""
		), i;
	}
	function C(e, t) {
		var n = e.eventDescription, a = e.eventEndTime, i = e.eventLocation, l = e.eventName, u = e.eventStartTime, c;
		if ((i == null ? void 0 : i.name) != null || (i == null ? void 0 : i.address) != null) {
			var d;
			c = (d = i.name) != null ? d : i.address;
		}
		var m = r("WAWebFbtIntlList")(r("compactMap")(t, function(e) {
			var t = o("WAWebContactCollection").ContactCollection.get(e.sender);
			if (t != null) return o("WAWebFrontendContactGetters").getFormattedName(t);
		}), r("WAWebFbtIntlList").CONJUNCTIONS.AND, r("WAWebFbtIntlList").DELIMITERS.COMMA), p;
		t.length > 0 && (p = s._(
			/*BTDS*/
			"",
			[s._plural(t.length, "number"), s._param("event-attendees-names-readout", m)]
		));
		var _ = o("WAWebFormatEventDateString").getEventDateStringFor(u, a);
		return s._(
			/*BTDS*/
			"",
			[
				s._param("event-name", l),
				s._param("event-description", n != null ? n + "." : ""),
				s._param("event-time", _),
				s._param("event-location", c != null ? c + "." : ""),
				s._param("event-attendees", p)
			]
		);
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(t) {
		var n, a, i = o("react-compiler-runtime").c(91), l = t.chat, u = t.displayAuthor, d = t.displayType, b = t.msg, E = t.quotedMsg, k;
		if (i[0] === Symbol.for("react.memo_cache_sentinel")) {
			var I;
			k = [
				(I = o("WAWebMsgGetters")).getEventName,
				I.getEventStartTime,
				I.getEventEndTime,
				I.getEventLocation,
				I.getEventJoinLink,
				I.getEventInvalidated,
				I.getIsEventCanceled,
				I.getEventIsScheduledCall,
				I.getIsSentByMe
			], i[0] = k;
		} else k = i[0];
		var T = o("useWAWebMsgValues").useMsgValues(b.id, r("WAWebCastToEventCreationMsg"), k), D = T[0], x = T[1], $ = T[2], P = T[3], N = T[4], M = T[5], w = T[6], A = T[7], F = T[8], O = r("useWAWebUIM")(), B = p(r("WAWebChatThemeModeContext")), W = B.isThemed, q = B.isVibrant, U = o("useWAWebEventResponses").useEventResponses(b), V;
		if (i[1] !== D) {
			var H;
			V = D.slice(0, (H = o("WAWebEventsGatingUtils").getEventsNameLengthLimit()) != null ? H : 100), i[1] = D, i[2] = V;
		} else V = i[2];
		var G = V, z = o("WAWebEventUtils").shouldShowEventAsPassed(x, $), j = w || z, K = M || j, Q = q && F, X = c.jsx(r("WDSIconIcCalendarMonth.react"), { xstyle: [
			g.icon,
			K && g.iconDisabled,
			!K && W && g.iconThemed
		] }), Y;
		i[3] === Symbol.for("react.memo_cache_sentinel") ? (Y = m(), i[3] = Y) : Y = i[3];
		var J = Y, Z = _(null);
		if (D == null) return null;
		var ee;
		i[4] !== l || i[5] !== b || i[6] !== O ? (ee = function() {
			o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
				descriptorType: "event_info",
				chat: l,
				msg: b
			} : c.jsx(o("WAWebEventInfoFlowLoadable").EventInfoFlowLoadable, {
				chat: l,
				msg: b,
				onEnd: o("WAWebDrawerManager").closeDrawerRight
			}, "event-info-drawer-" + b.id.toString()), {
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
				uim: O
			});
		}, i[4] = l, i[5] = b, i[6] = O, i[7] = ee) : ee = i[7];
		var te = ee, ne = async function(t) {
			if (ke) N != null && await o("WAWebJoinEventCallAction").joinEventCall({
				callLink: N,
				chat: l
			});
			else if (F) {
				var e;
				o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebEventsCreateEventModalFlow.react"), {
					preselectedChat: l,
					prefilledData: {
						eventName: D,
						eventDescription: b.eventDescription,
						eventStartTime: o("WAWebEventUtils").eventTimeToUnixTime(x),
						eventEndTime: $ != null ? o("WAWebEventUtils").eventTimeToUnixTime($) : void 0,
						eventLocationName: (e = P == null ? void 0 : P.name) != null ? e : P == null ? void 0 : P.address,
						eventCallType: o("WAWebEventUtils").getEventCallLinkType(N)
					},
					existingEventMsg: b,
					showLocationField: !A
				}));
			} else {
				var n;
				(n = J.current) == null || n.open(t);
			}
		}, re;
		i[8] !== b ? (re = async function(t) {
			o("WAWebSendEventResponseMsgAction").sendEventResponseMsg(t, b);
		}, i[8] = b, i[9] = re) : re = i[9];
		var oe = re, ae;
		i[10] === Symbol.for("react.memo_cache_sentinel") ? (ae = [o("WDSPaddings.stylex").wdsPaddings.paddingVer2, g.fullWidth], i[10] = ae) : ae = i[10];
		var ie;
		i[11] !== b ? (ie = o("WAWebMsgGetters").getInitialPageSize(b), i[11] = b, i[12] = ie) : ie = i[12];
		var le;
		i[13] !== b || i[14] !== G ? (le = function(t) {
			var e = t.textLimit;
			return c.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: G,
				dirMismatch: o("WAWebFrontendMsgGetters").getRtl(b) !== r("WAWebL10N").isRTL(),
				direction: "auto",
				selectable: !0,
				textLimit: e,
				xstyle: [o("WDSFontTokenStyles").WDSFontTokenStyles.Body1Emphasized, g.flex]
			});
		}, i[13] = b, i[14] = G, i[15] = le) : le = i[15];
		var se;
		i[16] !== ie || i[17] !== le || i[18] !== G ? (se = c.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: ae,
			children: c.jsx(o("WAWebExpandableText.react").ExpandableText, {
				text: G,
				textLimit: ie,
				children: le
			})
		}), i[16] = ie, i[17] = le, i[18] = G, i[19] = se) : se = i[19];
		var ue = se, ce;
		i[20] !== $ || i[21] !== x ? (ce = o("WAWebFormatEventDateString").getEventDateStringFor(x, $), i[20] = $, i[21] = x, i[22] = ce) : ce = i[22];
		var de = ce, me;
		i[23] !== de || i[24] !== x ? (me = x != null ? c.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: [
				o("WDSFontTokenStyles").WDSFontTokenStyles.Body2,
				g.eventDetailText,
				f.marginBlock1
			],
			children: s._(
				/*BTDS*/
				"",
				[s._param("Event-starttime-string", de)]
			)
		}) : null, i[23] = de, i[24] = x, i[25] = me) : me = i[25];
		var pe = me, _e, fe = (n = P == null ? void 0 : P.name) != null ? n : P == null ? void 0 : P.address;
		if (fe != null) {
			var ge;
			i[26] === Symbol.for("react.memo_cache_sentinel") ? (ge = [
				o("WDSFontTokenStyles").WDSFontTokenStyles.Body2,
				g.eventDetailText,
				g.fullWidth,
				f.marginBlock1
			], i[26] = ge) : ge = i[26];
			var he;
			i[27] === Symbol.for("react.memo_cache_sentinel") ? (he = [g.fullWidth, g.flex], i[27] = he) : he = i[27];
			var ye;
			i[28] !== fe ? (ye = c.jsx(o("WAWebFlex.react").FlexRow, {
				xstyle: ge,
				children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
					text: fe,
					direction: "auto",
					selectable: !0,
					xstyle: he
				})
			}), i[28] = fe, i[29] = ye) : ye = i[29], _e = ye;
		}
		var Ce, be;
		i[30] !== N ? (be = h(N), i[30] = N, i[31] = be) : be = i[31];
		var ve = be;
		if (ve != null) {
			var Se;
			i[32] === Symbol.for("react.memo_cache_sentinel") ? (Se = [
				o("WDSFontTokenStyles").WDSFontTokenStyles.Body2,
				g.eventDetailText,
				f.marginBlock1
			], i[32] = Se) : Se = i[32];
			var Re;
			i[33] !== ve ? (Re = c.jsx(o("WAWebFlex.react").FlexRow, {
				xstyle: Se,
				children: ve
			}), i[33] = ve, i[34] = Re) : Re = i[34], Ce = Re;
		}
		var Le = U.find(L), Ee = !w && (A || (Le == null ? void 0 : Le.eventResponse) === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.GOING && o("WAWebEventUtils").eventIsJoinable(x)), ke = N != null && Ee && o("WAWebVoipGatingUtils").isGroupCallingEnabled(), Ie = o("WAWebEventUtils").shouldDisableInteractionForEvent({
			isSentByMe: F,
			isEventCanceled: w,
			eventInvalidated: M,
			isEventPassed: z,
			showJoinCall: ke
		}), Te;
		if (i[35] !== U || i[36] !== F || i[37] !== b.id) {
			var De = U.filter(R);
			if (Te = null, De.length > 0) {
				var xe = De.sort(S).map(v).slice(0, 3), $e = F ? g.facepileBorderOutgoing : g.facepileBorderIncoming, Pe;
				i[39] === Symbol.for("react.memo_cache_sentinel") ? (Pe = [
					o("WDSFontTokenStyles").WDSFontTokenStyles.Body2,
					g.eventDetailText,
					g.fullWidth,
					f.marginBlock1
				], i[39] = Pe) : Pe = i[39];
				var Ne;
				i[40] !== b.id ? (Ne = b.id.toString(), i[40] = b.id, i[41] = Ne) : Ne = i[41];
				var Me;
				i[42] !== $e || i[43] !== xe || i[44] !== Ne ? (Me = c.jsx(r("WAWebFacePile.react"), {
					keyName: Ne,
					idsOrUrls: xe,
					borderColor: $e,
					faceSize: 18
				}), i[42] = $e, i[43] = xe, i[44] = Ne, i[45] = Me) : Me = i[45];
				var we;
				i[46] === Symbol.for("react.memo_cache_sentinel") ? (we = (e || (e = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginStart4), i[46] = we) : we = i[46];
				var Ae = s._(
					/*BTDS*/
					"",
					[s._param("number-of-participants-going", De.length, [0, De.length])]
				), Fe;
				i[47] !== Ae ? (Fe = c.jsx("div", babelHelpers.extends({}, we, { children: Ae })), i[47] = Ae, i[48] = Fe) : Fe = i[48];
				var Oe;
				i[49] !== Me || i[50] !== Fe ? (Oe = c.jsxs(o("WAWebFlex.react").FlexRow, {
					xstyle: Pe,
					children: [Me, Fe]
				}), i[49] = Me, i[50] = Fe, i[51] = Oe) : Oe = i[51], Te = Oe;
			}
			i[35] = U, i[36] = F, i[37] = b.id, i[38] = Te;
		} else Te = i[38];
		var Be = y({
			eventResponse: (a = Le == null ? void 0 : Le.eventResponse) != null ? a : o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.UNKNOWN,
			isSentByMe: F,
			showJoinCall: ke,
			isEventCanceled: w
		}), We;
		i[52] === Symbol.for("react.memo_cache_sentinel") ? (We = { className: "x3nfvp2 x6s0dn4" }, i[52] = We) : We = i[52];
		var qe;
		i[53] === Symbol.for("react.memo_cache_sentinel") ? (qe = c.jsx(r("WDSIconIcExpandMore.react"), {
			height: 18,
			displayInline: !0
		}), i[53] = qe) : qe = i[53];
		var Ue;
		i[54] !== Be ? (Ue = c.jsxs("span", babelHelpers.extends({}, We, { children: [Be, qe] })), i[54] = Be, i[55] = Ue) : Ue = i[55];
		var Ve = Ue, He;
		i[56] !== E ? (He = E ? c.jsx("div", {
			className: "xahult9",
			children: E
		}) : null, i[56] = E, i[57] = He) : He = i[57];
		var Ge = He, ze;
		i[58] !== d ? (ze = o("WAWebDisplayType").isWideDisplay(d), i[58] = d, i[59] = ze) : ze = i[59];
		var je;
		i[60] !== U || i[61] !== b ? (je = C(b, U), i[60] = U, i[61] = b, i[62] = je) : je = i[62];
		var Ke;
		i[63] === Symbol.for("react.memo_cache_sentinel") ? (Ke = [
			g.deepContainer,
			o("WDSPaddings.stylex").wdsPaddings.padding8,
			o("WDSPaddings.stylex").wdsPaddings.paddingBottom12
		], i[63] = Ke) : Ke = i[63];
		var Qe = Q && g.iconContainerVibrantOutgoing, Xe = !Q && W && g.iconContainerThemed, Ye;
		i[64] !== Qe || i[65] !== Xe ? (Ye = [
			g.iconContainer,
			Qe,
			Xe
		], i[64] = Qe, i[65] = Xe, i[66] = Ye) : Ye = i[66];
		var Je;
		i[67] === Symbol.for("react.memo_cache_sentinel") ? (Je = [o("WDSPaddings.stylex").wdsPaddings.paddingStart8, g.fullWidth], i[67] = Je) : Je = i[67];
		var Ze = _e, et = Ce, tt = Te, nt;
		i[68] === Symbol.for("react.memo_cache_sentinel") ? (nt = { className: "x10l6tqk x9q68il xy1j3rs" }, i[68] = nt) : nt = i[68];
		var rt;
		i[69] !== b ? (rt = c.jsx("div", babelHelpers.extends({}, nt, { children: c.jsx(o("WAWebMessageMeta.react").Meta, { msg: b }) })), i[69] = b, i[70] = rt) : rt = i[70];
		var ot;
		i[71] !== Ce || i[72] !== Te || i[73] !== _e || i[74] !== ue || i[75] !== rt || i[76] !== pe ? (ot = c.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: Je,
			padding: 2,
			children: [
				ue,
				pe,
				Ze,
				et,
				tt,
				rt
			]
		}), i[71] = Ce, i[72] = Te, i[73] = _e, i[74] = ue, i[75] = rt, i[76] = pe, i[77] = ot) : ot = i[77];
		var at;
		i[78] !== M || i[79] !== F ? (at = M && c.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: [
				g.invalidEventWarning,
				F ? g.invalidEventWarningBorderSender : g.invalidEventWarningBorderReceiver,
				o("WDSMargins.stylex").wdsMargins.marginTop4,
				o("WDSPaddings.stylex").wdsPaddings.paddingVer8,
				f.paddingInlineStart14,
				o("WDSPaddings.stylex").wdsPaddings.paddingEnd12
			],
			children: [c.jsx(o("WAWebWarningIcon.react").WarningIcon, {
				width: 19,
				height: 17,
				iconXstyle: g.warningIcon
			}), c.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSFontTokenStyles").WDSFontTokenStyles.Body3, o("WDSMargins.stylex").wdsMargins.marginStart8), {
				"data-testid": "invalid-event-bubble-warning",
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		}), i[78] = M, i[79] = F, i[80] = at) : at = i[80];
		var it = Le == null ? void 0 : Le.eventResponse, lt;
		i[81] !== oe || i[82] !== it ? (lt = c.jsx(r("WAWebEventsRSVPPopup.react"), {
			currentResponse: it,
			onClick: oe,
			controlPopupRef: J,
			triggerRef: Z
		}), i[81] = oe, i[82] = it, i[83] = lt) : lt = i[83];
		var st = ke || F || w ? Be : Ve, ut;
		i[84] !== ne ? (ut = function(t) {
			ne(t);
		}, i[84] = ne, i[85] = ut) : ut = i[85];
		var ct = !ke && Ie, dt;
		return i[86] !== Be || i[87] !== st || i[88] !== ut || i[89] !== ct ? (dt = c.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
			ref: Z,
			theme: o("WAWebMessageBubbleActions.react").BubbleActionsTheme.EVENT_CREATION,
			items: [{
				label: st,
				title: Be,
				onClick: ut,
				disabled: ct,
				testid: "event-rsvp-respond"
			}]
		}), i[86] = Be, i[87] = st, i[88] = ut, i[89] = ct, i[90] = dt) : dt = i[90], c.jsxs(r("WAWebMessageTextBubble.react"), {
			testid: "event-creation-msg",
			msg: b,
			displayType: d,
			displayAuthor: u,
			hideMeta: !0,
			useFixedWidth: !ze,
			ariaLabel: je,
			children: [
				Ge,
				c.jsxs(r("WAWebUnstyledButton.react"), {
					onClick: te,
					xstyle: g.unstyledButton,
					children: [c.jsxs(r("WAWebMessageDeeperContainer.react"), {
						xstyle: Ke,
						outgoingMsg: F,
						children: [c.jsx(o("WAWebFlex.react").FlexColumn, {
							xstyle: Ye,
							shrink: 0,
							align: "center",
							justify: "center",
							padding: 2,
							children: X
						}), ot]
					}), at]
				}),
				lt,
				dt
			]
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		return e.sender;
	}
	function S(e, t) {
		return t.senderTimestampMs - e.senderTimestampMs;
	}
	function R(e) {
		return e.eventResponse === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.GOING;
	}
	function L(e) {
		return o("WAWebUserPrefsMeUser").isMeAccount(e.sender);
	}
	l.getEventCallString = h, l.getEventRespondButtonText = y, l.Event = b;
}), 226);
