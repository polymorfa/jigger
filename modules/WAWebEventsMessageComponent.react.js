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
	"asyncToGeneratorRuntime",
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
		var a, i, l = o("react-compiler-runtime").c(91), u = t.chat, d = t.displayAuthor, b = t.displayType, E = t.msg, k = t.quotedMsg, I;
		if (l[0] === Symbol.for("react.memo_cache_sentinel")) {
			var T;
			I = [
				(T = o("WAWebMsgGetters")).getEventName,
				T.getEventStartTime,
				T.getEventEndTime,
				T.getEventLocation,
				T.getEventJoinLink,
				T.getEventInvalidated,
				T.getIsEventCanceled,
				T.getEventIsScheduledCall,
				T.getIsSentByMe
			], l[0] = I;
		} else I = l[0];
		var D = o("useWAWebMsgValues").useMsgValues(E.id, r("WAWebCastToEventCreationMsg"), I), x = D[0], $ = D[1], P = D[2], N = D[3], M = D[4], w = D[5], A = D[6], F = D[7], O = D[8], B = r("useWAWebUIM")(), W = p(r("WAWebChatThemeModeContext")), q = W.isThemed, U = W.isVibrant, V = o("useWAWebEventResponses").useEventResponses(E), H;
		if (l[1] !== x) {
			var G;
			H = x.slice(0, (G = o("WAWebEventsGatingUtils").getEventsNameLengthLimit()) != null ? G : 100), l[1] = x, l[2] = H;
		} else H = l[2];
		var z = H, j = o("WAWebEventUtils").shouldShowEventAsPassed($, P), K = A || j, Q = w || K, X = U && O, Y = c.jsx(r("WDSIconIcCalendarMonth.react"), { xstyle: [
			g.icon,
			Q && g.iconDisabled,
			!Q && q && g.iconThemed
		] }), J;
		l[3] === Symbol.for("react.memo_cache_sentinel") ? (J = m(), l[3] = J) : J = l[3];
		var Z = J, ee = _(null);
		if (x == null) return null;
		var te;
		l[4] !== u || l[5] !== E || l[6] !== B ? (te = function() {
			o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
				descriptorType: "event_info",
				chat: u,
				msg: E
			} : c.jsx(o("WAWebEventInfoFlowLoadable").EventInfoFlowLoadable, {
				chat: u,
				msg: E,
				onEnd: o("WAWebDrawerManager").closeDrawerRight
			}, "event-info-drawer-" + E.id.toString()), {
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
				uim: B
			});
		}, l[4] = u, l[5] = E, l[6] = B, l[7] = te) : te = l[7];
		var ne = te, re = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				if (Ie) M != null && (yield o("WAWebJoinEventCallAction").joinEventCall({
					callLink: M,
					chat: u
				}));
				else if (O) {
					var t;
					o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebEventsCreateEventModalFlow.react"), {
						preselectedChat: u,
						prefilledData: {
							eventName: x,
							eventDescription: E.eventDescription,
							eventStartTime: o("WAWebEventUtils").eventTimeToUnixTime($),
							eventEndTime: P != null ? o("WAWebEventUtils").eventTimeToUnixTime(P) : void 0,
							eventLocationName: (t = N == null ? void 0 : N.name) != null ? t : N == null ? void 0 : N.address,
							eventCallType: o("WAWebEventUtils").getEventCallLinkType(M)
						},
						existingEventMsg: E,
						showLocationField: !F
					}));
				} else {
					var n;
					(n = Z.current) == null || n.open(e);
				}
			});
			function t(t) {
				return e.apply(this, arguments);
			}
			return t;
		})(), oe;
		l[8] !== E ? (oe = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				o("WAWebSendEventResponseMsgAction").sendEventResponseMsg(e, E);
			});
			function t(t) {
				return e.apply(this, arguments);
			}
			return t;
		})(), l[8] = E, l[9] = oe) : oe = l[9];
		var ae = oe, ie;
		l[10] === Symbol.for("react.memo_cache_sentinel") ? (ie = [o("WDSPaddings.stylex").wdsPaddings.paddingVer2, g.fullWidth], l[10] = ie) : ie = l[10];
		var le;
		l[11] !== E ? (le = o("WAWebMsgGetters").getInitialPageSize(E), l[11] = E, l[12] = le) : le = l[12];
		var se;
		l[13] !== E || l[14] !== z ? (se = function(t) {
			var e = t.textLimit;
			return c.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: z,
				dirMismatch: o("WAWebFrontendMsgGetters").getRtl(E) !== r("WAWebL10N").isRTL(),
				direction: "auto",
				selectable: !0,
				textLimit: e,
				xstyle: [o("WDSFontTokenStyles").WDSFontTokenStyles.Body1Emphasized, g.flex]
			});
		}, l[13] = E, l[14] = z, l[15] = se) : se = l[15];
		var ue;
		l[16] !== le || l[17] !== se || l[18] !== z ? (ue = c.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: ie,
			children: c.jsx(o("WAWebExpandableText.react").ExpandableText, {
				text: z,
				textLimit: le,
				children: se
			})
		}), l[16] = le, l[17] = se, l[18] = z, l[19] = ue) : ue = l[19];
		var ce = ue, de;
		l[20] !== P || l[21] !== $ ? (de = o("WAWebFormatEventDateString").getEventDateStringFor($, P), l[20] = P, l[21] = $, l[22] = de) : de = l[22];
		var me = de, pe;
		l[23] !== me || l[24] !== $ ? (pe = $ != null ? c.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: [
				o("WDSFontTokenStyles").WDSFontTokenStyles.Body2,
				g.eventDetailText,
				f.marginBlock1
			],
			children: s._(
				/*BTDS*/
				"",
				[s._param("Event-starttime-string", me)]
			)
		}) : null, l[23] = me, l[24] = $, l[25] = pe) : pe = l[25];
		var _e = pe, fe, ge = (a = N == null ? void 0 : N.name) != null ? a : N == null ? void 0 : N.address;
		if (ge != null) {
			var he;
			l[26] === Symbol.for("react.memo_cache_sentinel") ? (he = [
				o("WDSFontTokenStyles").WDSFontTokenStyles.Body2,
				g.eventDetailText,
				g.fullWidth,
				f.marginBlock1
			], l[26] = he) : he = l[26];
			var ye;
			l[27] === Symbol.for("react.memo_cache_sentinel") ? (ye = [g.fullWidth, g.flex], l[27] = ye) : ye = l[27];
			var Ce;
			l[28] !== ge ? (Ce = c.jsx(o("WAWebFlex.react").FlexRow, {
				xstyle: he,
				children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
					text: ge,
					direction: "auto",
					selectable: !0,
					xstyle: ye
				})
			}), l[28] = ge, l[29] = Ce) : Ce = l[29], fe = Ce;
		}
		var be, ve;
		l[30] !== M ? (ve = h(M), l[30] = M, l[31] = ve) : ve = l[31];
		var Se = ve;
		if (Se != null) {
			var Re;
			l[32] === Symbol.for("react.memo_cache_sentinel") ? (Re = [
				o("WDSFontTokenStyles").WDSFontTokenStyles.Body2,
				g.eventDetailText,
				f.marginBlock1
			], l[32] = Re) : Re = l[32];
			var Le;
			l[33] !== Se ? (Le = c.jsx(o("WAWebFlex.react").FlexRow, {
				xstyle: Re,
				children: Se
			}), l[33] = Se, l[34] = Le) : Le = l[34], be = Le;
		}
		var Ee = V.find(L), ke = !A && (F || (Ee == null ? void 0 : Ee.eventResponse) === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.GOING && o("WAWebEventUtils").eventIsJoinable($)), Ie = M != null && ke && o("WAWebVoipGatingUtils").isGroupCallingEnabled(), Te = o("WAWebEventUtils").shouldDisableInteractionForEvent({
			isSentByMe: O,
			isEventCanceled: A,
			eventInvalidated: w,
			isEventPassed: j,
			showJoinCall: Ie
		}), De;
		if (l[35] !== V || l[36] !== O || l[37] !== E.id) {
			var xe = V.filter(R);
			if (De = null, xe.length > 0) {
				var $e = xe.sort(S).map(v).slice(0, 3), Pe = O ? g.facepileBorderOutgoing : g.facepileBorderIncoming, Ne;
				l[39] === Symbol.for("react.memo_cache_sentinel") ? (Ne = [
					o("WDSFontTokenStyles").WDSFontTokenStyles.Body2,
					g.eventDetailText,
					g.fullWidth,
					f.marginBlock1
				], l[39] = Ne) : Ne = l[39];
				var Me;
				l[40] !== E.id ? (Me = E.id.toString(), l[40] = E.id, l[41] = Me) : Me = l[41];
				var we;
				l[42] !== Pe || l[43] !== $e || l[44] !== Me ? (we = c.jsx(r("WAWebFacePile.react"), {
					keyName: Me,
					idsOrUrls: $e,
					borderColor: Pe,
					faceSize: 18
				}), l[42] = Pe, l[43] = $e, l[44] = Me, l[45] = we) : we = l[45];
				var Ae;
				l[46] === Symbol.for("react.memo_cache_sentinel") ? (Ae = (e || (e = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginStart4), l[46] = Ae) : Ae = l[46];
				var Fe = s._(
					/*BTDS*/
					"",
					[s._param("number-of-participants-going", xe.length, [0, xe.length])]
				), Oe;
				l[47] !== Fe ? (Oe = c.jsx("div", babelHelpers.extends({}, Ae, { children: Fe })), l[47] = Fe, l[48] = Oe) : Oe = l[48];
				var Be;
				l[49] !== we || l[50] !== Oe ? (Be = c.jsxs(o("WAWebFlex.react").FlexRow, {
					xstyle: Ne,
					children: [we, Oe]
				}), l[49] = we, l[50] = Oe, l[51] = Be) : Be = l[51], De = Be;
			}
			l[35] = V, l[36] = O, l[37] = E.id, l[38] = De;
		} else De = l[38];
		var We = y({
			eventResponse: (i = Ee == null ? void 0 : Ee.eventResponse) != null ? i : o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.UNKNOWN,
			isSentByMe: O,
			showJoinCall: Ie,
			isEventCanceled: A
		}), qe;
		l[52] === Symbol.for("react.memo_cache_sentinel") ? (qe = { className: "x3nfvp2 x6s0dn4" }, l[52] = qe) : qe = l[52];
		var Ue;
		l[53] === Symbol.for("react.memo_cache_sentinel") ? (Ue = c.jsx(r("WDSIconIcExpandMore.react"), {
			height: 18,
			displayInline: !0
		}), l[53] = Ue) : Ue = l[53];
		var Ve;
		l[54] !== We ? (Ve = c.jsxs("span", babelHelpers.extends({}, qe, { children: [We, Ue] })), l[54] = We, l[55] = Ve) : Ve = l[55];
		var He = Ve, Ge;
		l[56] !== k ? (Ge = k ? c.jsx("div", {
			className: "xahult9",
			children: k
		}) : null, l[56] = k, l[57] = Ge) : Ge = l[57];
		var ze = Ge, je;
		l[58] !== b ? (je = o("WAWebDisplayType").isWideDisplay(b), l[58] = b, l[59] = je) : je = l[59];
		var Ke;
		l[60] !== V || l[61] !== E ? (Ke = C(E, V), l[60] = V, l[61] = E, l[62] = Ke) : Ke = l[62];
		var Qe;
		l[63] === Symbol.for("react.memo_cache_sentinel") ? (Qe = [
			g.deepContainer,
			o("WDSPaddings.stylex").wdsPaddings.padding8,
			o("WDSPaddings.stylex").wdsPaddings.paddingBottom12
		], l[63] = Qe) : Qe = l[63];
		var Xe = X && g.iconContainerVibrantOutgoing, Ye = !X && q && g.iconContainerThemed, Je;
		l[64] !== Xe || l[65] !== Ye ? (Je = [
			g.iconContainer,
			Xe,
			Ye
		], l[64] = Xe, l[65] = Ye, l[66] = Je) : Je = l[66];
		var Ze;
		l[67] === Symbol.for("react.memo_cache_sentinel") ? (Ze = [o("WDSPaddings.stylex").wdsPaddings.paddingStart8, g.fullWidth], l[67] = Ze) : Ze = l[67];
		var et = fe, tt = be, nt = De, rt;
		l[68] === Symbol.for("react.memo_cache_sentinel") ? (rt = { className: "x10l6tqk x9q68il xy1j3rs" }, l[68] = rt) : rt = l[68];
		var ot;
		l[69] !== E ? (ot = c.jsx("div", babelHelpers.extends({}, rt, { children: c.jsx(o("WAWebMessageMeta.react").Meta, { msg: E }) })), l[69] = E, l[70] = ot) : ot = l[70];
		var at;
		l[71] !== be || l[72] !== De || l[73] !== fe || l[74] !== ce || l[75] !== ot || l[76] !== _e ? (at = c.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: Ze,
			padding: 2,
			children: [
				ce,
				_e,
				et,
				tt,
				nt,
				ot
			]
		}), l[71] = be, l[72] = De, l[73] = fe, l[74] = ce, l[75] = ot, l[76] = _e, l[77] = at) : at = l[77];
		var it;
		l[78] !== w || l[79] !== O ? (it = w && c.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: [
				g.invalidEventWarning,
				O ? g.invalidEventWarningBorderSender : g.invalidEventWarningBorderReceiver,
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
		}), l[78] = w, l[79] = O, l[80] = it) : it = l[80];
		var lt = Ee == null ? void 0 : Ee.eventResponse, st;
		l[81] !== ae || l[82] !== lt ? (st = c.jsx(r("WAWebEventsRSVPPopup.react"), {
			currentResponse: lt,
			onClick: ae,
			controlPopupRef: Z,
			triggerRef: ee
		}), l[81] = ae, l[82] = lt, l[83] = st) : st = l[83];
		var ut = Ie || O || A ? We : He, ct;
		l[84] !== re ? (ct = function(t) {
			re(t);
		}, l[84] = re, l[85] = ct) : ct = l[85];
		var dt = !Ie && Te, mt;
		return l[86] !== We || l[87] !== ut || l[88] !== ct || l[89] !== dt ? (mt = c.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
			ref: ee,
			theme: o("WAWebMessageBubbleActions.react").BubbleActionsTheme.EVENT_CREATION,
			items: [{
				label: ut,
				title: We,
				onClick: ct,
				disabled: dt,
				testid: "event-rsvp-respond"
			}]
		}), l[86] = We, l[87] = ut, l[88] = ct, l[89] = dt, l[90] = mt) : mt = l[90], c.jsxs(r("WAWebMessageTextBubble.react"), {
			testid: "event-creation-msg",
			msg: E,
			displayType: b,
			displayAuthor: d,
			hideMeta: !0,
			useFixedWidth: !je,
			ariaLabel: Ke,
			children: [
				ze,
				c.jsxs(r("WAWebUnstyledButton.react"), {
					onClick: ne,
					xstyle: g.unstyledButton,
					children: [c.jsxs(r("WAWebMessageDeeperContainer.react"), {
						xstyle: Qe,
						outgoingMsg: O,
						children: [c.jsx(o("WAWebFlex.react").FlexColumn, {
							xstyle: Je,
							shrink: 0,
							align: "center",
							justify: "center",
							padding: 2,
							children: Y
						}), at]
					}), it]
				}),
				st,
				mt
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
