__d("WAWebEventsCreateEventModal.react", [
	"fbt",
	"WALogger",
	"WASmaxVoipWaitingRoomToggleCallLinkRPC",
	"WATimeUtils",
	"WAWeb-moment",
	"WAWebApiParse",
	"WAWebButton.react",
	"WAWebConfirmPopup.react",
	"WAWebDateInput.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebEventUtils",
	"WAWebEventsCreateEventModalInputs.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebKeyboardHotKeys.react",
	"WAWebL10N",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebSendEventEditMsgAction",
	"WAWebText.react",
	"WAWebTimeInput.react",
	"WAWebTimeSpentLoggingNavigation",
	"WAWebWdsIcSendFilledIcon.react",
	"WDSButton.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"WDSSwitch.react",
	"fbs",
	"nullthrows",
	"react",
	"useWAWebABPropConfigValue"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useMemo, f = d.useState, g = {
		paddingBlock10: {
			paddingTop: "x889kno",
			paddingBottom: "x1a8lsjc",
			$$css: !0
		},
		marginBlock5: {
			marginTop: "x1ok221b",
			marginBottom: "xu06os2",
			$$css: !0
		}
	}, h = {
		drawer: {
			backgroundColor: "x1280gxy",
			position: "x1n2onr6",
			$$css: !0
		},
		drawerBody: {
			boxSizing: "x9f619",
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			flexBasis: "xdl72j9",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		createEventWdsButton: {
			transitionProperty: "xs2xxs2",
			transitionDuration: "x1d8287x",
			$$css: !0
		},
		alignStart: {
			textAlign: "x1yc453h",
			$$css: !0
		},
		alignEnd: {
			textAlign: "xp4054r",
			$$css: !0
		}
	};
	function y(e) {
		var t, n, o = e.endDate, a = e.endTime, i = e.ephemeralDurationSeconds, l = e.hasCall, s = e.hasFormChanged, u = e.name, c = e.startDate, d = e.startTime;
		if (!s) return !1;
		var m = r("WAWeb-moment")(c + "T" + d), p = o != null && a != null ? r("WAWeb-moment")(o + "T" + a) : null, _ = u.trim().length > 0, f = m.isValid(), g = m.isAfter(r("WAWeb-moment")()), h = m.isAfter(r("WAWeb-moment")().add({ years: 1 })), y = (t = p == null ? void 0 : p.isValid()) != null ? t : !0, C = (n = p == null ? void 0 : p.isAfter(m)) != null ? n : !0, b = !0;
		if (i != null && i > 0) {
			var v = r("WAWeb-moment")().add(i, "seconds"), S = !m.isAfter(v), R = p == null || !p.isAfter(v);
			b = S && R;
		}
		return _ && f && g && (l ? !h : !0) && y && C && b;
	}
	function C(e) {
		return r("WAWeb-moment").unix(e).format("HH:mm");
	}
	function b(e) {
		return r("WAWeb-moment").unix(e).format("YYYY-MM-DD");
	}
	function v(t) {
		var n, a, i = t.callLinkRequired, l = i === void 0 ? !1 : i, u = t.ephemeralDurationSeconds, d = t.existingEventMsg, v = t.nameInputPlaceholder, S = t.nameInputTitle, R = t.onCancel, L = t.onConfirm, E = t.onWaitingRoomToggled, k = t.prefilledData, I = t.ref, T = t.showLocationField, D = T === void 0 ? !0 : T, x = t.showRemoveEndTimeButton, $ = x === void 0 ? !0 : x, P = t.title, N = l ? "video" : null, M = _(function() {
			var e, t, n, r, a, i, l = o("WAWebEventUtils").getInitialEventStartTime(u), s = u != null && u > 0 ? o("WATimeUtils").castToUnixTime(o("WATimeUtils").unixTime() + u) : null, c = o("WAWebEventUtils").getInitialEventEndTime(l, s);
			return {
				initialEventName: (e = k == null ? void 0 : k.eventName) != null ? e : "",
				initialEventDescription: (t = k == null ? void 0 : k.eventDescription) != null ? t : "",
				initialEventStartTime: (n = k == null ? void 0 : k.eventStartTime) != null ? n : l,
				initialEventEndTime: (r = k == null ? void 0 : k.eventEndTime) != null ? r : c,
				initialEventLocationName: (a = k == null ? void 0 : k.eventLocationName) != null ? a : "",
				initialEventCallType: (i = k == null ? void 0 : k.eventCallType) != null ? i : N
			};
		}, [
			k,
			N,
			u
		]), w = M.initialEventCallType, A = M.initialEventDescription, F = M.initialEventEndTime, O = M.initialEventLocationName, B = M.initialEventName, W = M.initialEventStartTime, q = (k == null ? void 0 : k.eventStartTime) != null && (k == null ? void 0 : k.eventEndTime) != null, U = f(q), V = U[0], H = U[1], G = f(B), z = G[0], j = G[1], K = f(A != null ? A : ""), Q = K[0], X = K[1], Y = b(W), J = f(Y), Z = J[0], ee = J[1], te = C(W), ne = f(te), re = ne[0], oe = ne[1], ae = b(F), ie = f(ae), le = ie[0], se = ie[1], ue = C(F), ce = f(ue), de = ce[0], me = ce[1], pe = f(!1), _e = pe[0], fe = pe[1], ge = f(O), he = ge[0], ye = ge[1], Ce = f(w), be = Ce[0], ve = Ce[1], Se = !!be, Re = m(function() {
			return o("WAWebEventUtils").getEventDateBoundaries(Se, u);
		}, [Se, u]), Le = f((n = k == null ? void 0 : k.requireApproval) != null ? n : !1), Ee = Le[0], ke = Le[1], Ie = f((a = k == null ? void 0 : k.requireApproval) != null ? a : !1), Te = Ie[0], De = function(t) {
			ke(t);
		}, xe = f(!1), $e = xe[0], Pe = xe[1];
		o("WAWebTimeSpentLoggingNavigation").useTsNavigation({ surface: "create-event" });
		var Ne = o("useWAWebABPropConfigValue").useABPropConfigValue("enable_waiting_room_admin_ui"), Me = be != null && Ee !== Te, we = z !== B || Q !== A || he !== O || be !== w || Z !== Y || re !== te || le !== ae || de !== ue || q !== V, Ae = k != null && d == null || we || Me, Fe = Me && !we, Oe = function() {
			Ae || Be();
		};
		function Be() {
			R();
		}
		async function We() {
			var t = r("WAWeb-moment")(Z + "T" + re).unix(), n = V ? r("WAWeb-moment")(le + "T" + de).unix() : void 0;
			Pe(!0), qe(o("WATimeUtils").castToUnixTime(t), n != null ? o("WATimeUtils").castToUnixTime(n) : void 0).catch(function(t) {
				t instanceof Error && o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[Events] Failed to send event creation message"]))).catching(t);
			}).finally(function() {
				return Pe(!1);
			});
		}
		async function qe(e, t) {
			if (Fe && (d == null ? void 0 : d.eventJoinLink) != null) {
				var n = o("WAWebApiParse").parseCallLink(d.eventJoinLink);
				if (n != null) {
					var r = n.data, a = r.callType, i = r.token, l = a === "video";
					await o("WASmaxVoipWaitingRoomToggleCallLinkRPC").sendWaitingRoomToggleCallLinkRPC({
						waitingRoomToggleEnabled: Ee ? "1" : "0",
						waitingRoomToggleLinkToken: i,
						waitingRoomToggleMedia: l ? "video" : "audio"
					}), E == null || E();
				}
				R();
				return;
			}
			await L({
				eventName: z,
				eventStartTime: e,
				eventEndTime: t,
				eventDescription: Q,
				eventLocationName: he,
				eventCallType: be != null ? be : void 0,
				requireApproval: be != null ? Ee : void 0,
				hasRequireApprovalChanged: be != null ? Me : void 0
			});
		}
		function Ue() {
			var e;
			o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				title: s._(
					/*BTDS*/
					"",
					[s._param("event-name", (e = k == null ? void 0 : k.eventName) != null ? e : z)]
				),
				onOK: function() {
					var e;
					o("WAWebSendEventEditMsgAction").sendEventEditMessage({
						name: r("nullthrows")(k == null ? void 0 : k.eventName),
						startTime: r("nullthrows")(k == null ? void 0 : k.eventStartTime),
						endTime: k == null ? void 0 : k.eventEndTime,
						isEventCanceled: !0,
						description: k == null ? void 0 : k.eventDescription,
						location: k == null ? void 0 : k.eventLocationName,
						callType: (e = k == null ? void 0 : k.eventCallType) != null ? e : void 0
					}, r("nullthrows")(d)), o("WAWebModalManager").ModalManager.close();
				},
				okText: s._(
					/*BTDS*/
					""
				),
				okButtonType: "solid-warning",
				cancelText: r("WAWebFbtCommon")("Close"),
				onCancel: o("WAWebModalManager").closeModalManager,
				children: c.jsx(o("WAWebText.react").WAWebTextSmall, {
					color: "secondary",
					xstyle: o("WDSMargins.stylex").wdsMargins.marginVer12,
					children: s._(
						/*BTDS*/
						""
					)
				})
			}));
		}
		p(function() {
			var e = re !== te || Z !== Y;
			if (e && _e === !1) {
				var t = r("WAWeb-moment")(Z + "T" + re).unix(), n = o("WAWebEventUtils").eventTimeToUnixTime(t), a = o("WAWebEventUtils").getInitialEventEndTime(n);
				se(b(a)), me(C(a));
			}
		}, [Z, re]), p(function() {
			if (V) {
				var e = r("WAWeb-moment")(Z + "T" + re).unix(), t = r("WAWeb-moment")(le + "T" + de).unix();
				if (e >= t) {
					var n = 7200, a = o("WATimeUtils").castToUnixTime(e + n);
					se(b(a)), me(C(a));
				}
			}
		}, [Z, re]), p(function() {
			if (V) {
				var e = r("WAWeb-moment")(Z + "T" + re).unix(), t = r("WAWeb-moment")(le + "T" + de).unix();
				if (t <= e) {
					var n = 7200, a = o("WATimeUtils").castToUnixTime(t - n);
					ee(b(a)), oe(C(a));
				}
			}
		}, [le, de]);
		var Ve = function(t) {
			se(t), fe(!0);
		}, He = function(t) {
			me(t), fe(!0);
		}, Ge = c.jsx(o("WAWebEventsCreateEventModalInputs.react").EndDateTimePicker, {
			dateValue: le,
			onDateChange: Ve,
			timeValue: de,
			onTimeChange: He,
			isEndDateTimeEnabled: V,
			setIsEndDateTimeEnabled: H,
			showRemoveEndTimeButton: $,
			ephemeralDurationSeconds: u
		}), ze = !!(k && d), je = Fe && (d == null ? void 0 : d.eventJoinLink) != null ? $e : !y({
			name: z,
			startDate: Z,
			startTime: re,
			endDate: V ? le : void 0,
			endTime: V ? de : void 0,
			hasCall: !!be,
			hasFormChanged: Ae,
			ephemeralDurationSeconds: u
		}) || $e, Ke = P != null ? P : ze ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), Qe = c.jsx(r("WDSButton.react"), {
			size: "large",
			variant: "filled",
			Icon: o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon,
			xstyle: h.createEventWdsButton,
			disabled: je,
			"aria-label": s._(
				/*BTDS*/
				""
			),
			testid: "create-event-button",
			onPress: function() {
				We();
			}
		}), Xe = r("WAWebL10N").isRTL() ? h.alignEnd : h.alignStart;
		return c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			handlers: { esc: function(t) {
				t.stopPropagation(), Oe();
			} },
			children: c.jsx(o("WAWebModal.react").Modal, {
				contentRef: I,
				type: o("WAWebModal.react").ModalTheme.EventCreation,
				onOverlayClick: Oe,
				ariaLabel: s._(
					/*BTDS*/
					""
				),
				children: c.jsxs(r("WAWebDrawer.react"), {
					xstyle: h.drawer,
					testid: "event-creation-modal",
					children: [
						c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
							title: Ke,
							type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
							onCancel: Be
						}),
						c.jsxs(r("WAWebDrawerBody.react"), {
							xstyle: [
								h.drawerBody,
								o("WDSPaddings.stylex").wdsPaddings.padding16,
								o("WDSPaddings.stylex").wdsPaddings.paddingTop0
							],
							ariaRole: "form",
							ariaLabel: s._(
								/*BTDS*/
								""
							),
							children: [
								c.jsx(o("WAWebEventsCreateEventModalInputs.react").NameInput, {
									title: S,
									placeholder: v,
									value: z,
									onChange: j
								}),
								c.jsx(o("WAWebEventsCreateEventModalInputs.react").DescriptionInput, {
									value: Q,
									onChange: X
								}),
								c.jsx(o("WAWebText.react").WAWebTextMuted, {
									marginTop: 12,
									children: s._(
										/*BTDS*/
										""
									)
								}),
								c.jsxs(o("WAWebFlex.react").FlexRow, {
									xstyle: [o("WDSMargins.stylex").wdsMargins.marginStart4, Xe],
									dir: "ltr",
									as: "section",
									columnGap: 16,
									children: [c.jsx(o("WAWebFlex.react").FlexItem, {
										grow: 1,
										basis: 0,
										children: c.jsx(o("WAWebDateInput.react").DateInput, {
											ariaLabel: s._(
												/*BTDS*/
												""
											),
											theme: "event",
											onChange: ee,
											value: Z,
											name: "event-date",
											getDateBoundaries: Re
										})
									}), c.jsx(o("WAWebFlex.react").FlexItem, {
										grow: 1,
										basis: 0,
										children: c.jsx(o("WAWebTimeInput.react").TimeInput, {
											ariaLabel: s._(
												/*BTDS*/
												""
											),
											theme: "event",
											name: "event-time",
											value: re,
											onChange: oe
										})
									})]
								}),
								Ge,
								D ? c.jsx(o("WAWebEventsCreateEventModalInputs.react").LocationInput, {
									value: he,
									onChange: ye
								}) : null,
								be != null ? c.jsx(o("WAWebText.react").WAWebTextSmall, {
									color: "secondary",
									xstyle: o("WDSMargins.stylex").wdsMargins.marginTop8,
									children: s._(
										/*BTDS*/
										""
									)
								}) : null,
								c.jsx(o("WAWebEventsCreateEventModalInputs.react").CallTypeInput, {
									value: be,
									required: l,
									onChange: ve,
									hideToggle: d != null && d.eventIsScheduledCall === !0
								}),
								Ne && be != null && c.jsxs(o("WAWebFlex.react").FlexRow, {
									xstyle: g.paddingBlock10,
									align: "center",
									justify: "all",
									children: [c.jsx(o("WAWebFlex.react").FlexColumn, {
										align: "stretch",
										children: c.jsx(o("WAWebText.react").WAWebTextSmall, { children: s._(
											/*BTDS*/
											""
										) })
									}), c.jsx(o("WAWebFlex.react").FlexItem, {
										shrink: 0,
										children: c.jsx(r("WDSSwitch.react"), {
											"aria-label": r("fbs")._(
												/*BTDS*/
												""
											),
											value: Ee,
											onChange: De,
											testid: "require-approval-switch"
										})
									})]
								}),
								ze ? c.jsxs(o("WAWebFlex.react").FlexItem, {
									xstyle: g.marginBlock5,
									children: [c.jsx(o("WAWebButton.react").WAWebButtonSecondaryDestructive, {
										alignSelf: "start",
										onClick: Ue,
										children: s._(
											/*BTDS*/
											""
										)
									}), c.jsx(o("WAWebText.react").WAWebTextSmall, {
										color: "secondary",
										xstyle: o("WDSMargins.stylex").wdsMargins.marginTop8,
										children: s._(
											/*BTDS*/
											""
										)
									})]
								}) : null
							]
						}),
						c.jsx("div", {
							className: "xvjzkt9 xh8yej3 x78zum5 x13a6bvl xwvwv9b x11fxgd9",
							children: Qe
						})
					]
				})
			})
		});
	}
	v.displayName = v.name + " [from " + i.id + "]", l.default = v;
}), 226);
