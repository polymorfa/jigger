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
	"asyncToGeneratorRuntime",
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
		var a, i, l = t.callLinkRequired, u = l === void 0 ? !1 : l, d = t.ephemeralDurationSeconds, v = t.existingEventMsg, S = t.nameInputPlaceholder, R = t.nameInputTitle, L = t.onCancel, E = t.onConfirm, k = t.onWaitingRoomToggled, I = t.prefilledData, T = t.ref, D = t.showLocationField, x = D === void 0 ? !0 : D, $ = t.showRemoveEndTimeButton, P = $ === void 0 ? !0 : $, N = t.title, M = u ? "video" : null, w = _(function() {
			var e, t, n, r, a, i, l = o("WAWebEventUtils").getInitialEventStartTime(d), s = d != null && d > 0 ? o("WATimeUtils").castToUnixTime(o("WATimeUtils").unixTime() + d) : null, u = o("WAWebEventUtils").getInitialEventEndTime(l, s);
			return {
				initialEventName: (e = I == null ? void 0 : I.eventName) != null ? e : "",
				initialEventDescription: (t = I == null ? void 0 : I.eventDescription) != null ? t : "",
				initialEventStartTime: (n = I == null ? void 0 : I.eventStartTime) != null ? n : l,
				initialEventEndTime: (r = I == null ? void 0 : I.eventEndTime) != null ? r : u,
				initialEventLocationName: (a = I == null ? void 0 : I.eventLocationName) != null ? a : "",
				initialEventCallType: (i = I == null ? void 0 : I.eventCallType) != null ? i : M
			};
		}, [
			I,
			M,
			d
		]), A = w.initialEventCallType, F = w.initialEventDescription, O = w.initialEventEndTime, B = w.initialEventLocationName, W = w.initialEventName, q = w.initialEventStartTime, U = (I == null ? void 0 : I.eventStartTime) != null && (I == null ? void 0 : I.eventEndTime) != null, V = f(U), H = V[0], G = V[1], z = f(W), j = z[0], K = z[1], Q = f(F != null ? F : ""), X = Q[0], Y = Q[1], J = b(q), Z = f(J), ee = Z[0], te = Z[1], ne = C(q), re = f(ne), oe = re[0], ae = re[1], ie = b(O), le = f(ie), se = le[0], ue = le[1], ce = C(O), de = f(ce), me = de[0], pe = de[1], _e = f(!1), fe = _e[0], ge = _e[1], he = f(B), ye = he[0], Ce = he[1], be = f(A), ve = be[0], Se = be[1], Re = !!ve, Le = m(function() {
			return o("WAWebEventUtils").getEventDateBoundaries(Re, d);
		}, [Re, d]), Ee = f((a = I == null ? void 0 : I.requireApproval) != null ? a : !1), ke = Ee[0], Ie = Ee[1], Te = f((i = I == null ? void 0 : I.requireApproval) != null ? i : !1), De = Te[0], xe = function(t) {
			Ie(t);
		}, $e = f(!1), Pe = $e[0], Ne = $e[1];
		o("WAWebTimeSpentLoggingNavigation").useTsNavigation({ surface: "create-event" });
		var Me = o("useWAWebABPropConfigValue").useABPropConfigValue("enable_waiting_room_admin_ui"), we = ve != null && ke !== De, Ae = j !== W || X !== F || ye !== B || ve !== A || ee !== J || oe !== ne || se !== ie || me !== ce || U !== H, Fe = I != null && v == null || Ae || we, Oe = we && !Ae, Be = function() {
			Fe || We();
		};
		function We() {
			L();
		}
		function qe() {
			return Ue.apply(this, arguments);
		}
		function Ue() {
			return Ue = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var t = r("WAWeb-moment")(ee + "T" + oe).unix(), n = H ? r("WAWeb-moment")(se + "T" + me).unix() : void 0;
				Ne(!0), Ve(o("WATimeUtils").castToUnixTime(t), n != null ? o("WATimeUtils").castToUnixTime(n) : void 0).catch(function(t) {
					t instanceof Error && o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[Events] Failed to send event creation message"]))).catching(t);
				}).finally(function() {
					return Ne(!1);
				});
			}), Ue.apply(this, arguments);
		}
		function Ve(e, t) {
			return He.apply(this, arguments);
		}
		function He() {
			return He = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				if (Oe && (v == null ? void 0 : v.eventJoinLink) != null) {
					var n = o("WAWebApiParse").parseCallLink(v.eventJoinLink);
					if (n != null) {
						var r = n.data, a = r.callType, i = r.token, l = a === "video";
						yield o("WASmaxVoipWaitingRoomToggleCallLinkRPC").sendWaitingRoomToggleCallLinkRPC({
							waitingRoomToggleEnabled: ke ? "1" : "0",
							waitingRoomToggleLinkToken: i,
							waitingRoomToggleMedia: l ? "video" : "audio"
						}), k == null || k();
					}
					L();
					return;
				}
				yield E({
					eventName: j,
					eventStartTime: e,
					eventEndTime: t,
					eventDescription: X,
					eventLocationName: ye,
					eventCallType: ve != null ? ve : void 0,
					requireApproval: ve != null ? ke : void 0,
					hasRequireApprovalChanged: ve != null ? we : void 0
				});
			}), He.apply(this, arguments);
		}
		function Ge() {
			var e;
			o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				title: s._(
					/*BTDS*/
					"",
					[s._param("event-name", (e = I == null ? void 0 : I.eventName) != null ? e : j)]
				),
				onOK: function() {
					var e;
					o("WAWebSendEventEditMsgAction").sendEventEditMessage({
						name: r("nullthrows")(I == null ? void 0 : I.eventName),
						startTime: r("nullthrows")(I == null ? void 0 : I.eventStartTime),
						endTime: I == null ? void 0 : I.eventEndTime,
						isEventCanceled: !0,
						description: I == null ? void 0 : I.eventDescription,
						location: I == null ? void 0 : I.eventLocationName,
						callType: (e = I == null ? void 0 : I.eventCallType) != null ? e : void 0
					}, r("nullthrows")(v)), o("WAWebModalManager").ModalManager.close();
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
			var e = oe !== ne || ee !== J;
			if (e && fe === !1) {
				var t = r("WAWeb-moment")(ee + "T" + oe).unix(), n = o("WAWebEventUtils").eventTimeToUnixTime(t), a = o("WAWebEventUtils").getInitialEventEndTime(n);
				ue(b(a)), pe(C(a));
			}
		}, [ee, oe]), p(function() {
			if (H) {
				var e = r("WAWeb-moment")(ee + "T" + oe).unix(), t = r("WAWeb-moment")(se + "T" + me).unix();
				if (e >= t) {
					var n = 7200, a = o("WATimeUtils").castToUnixTime(e + n);
					ue(b(a)), pe(C(a));
				}
			}
		}, [ee, oe]), p(function() {
			if (H) {
				var e = r("WAWeb-moment")(ee + "T" + oe).unix(), t = r("WAWeb-moment")(se + "T" + me).unix();
				if (t <= e) {
					var n = 7200, a = o("WATimeUtils").castToUnixTime(t - n);
					te(b(a)), ae(C(a));
				}
			}
		}, [se, me]);
		var ze = function(t) {
			ue(t), ge(!0);
		}, je = function(t) {
			pe(t), ge(!0);
		}, Ke = c.jsx(o("WAWebEventsCreateEventModalInputs.react").EndDateTimePicker, {
			dateValue: se,
			onDateChange: ze,
			timeValue: me,
			onTimeChange: je,
			isEndDateTimeEnabled: H,
			setIsEndDateTimeEnabled: G,
			showRemoveEndTimeButton: P,
			ephemeralDurationSeconds: d
		}), Qe = !!(I && v), Xe = Oe && (v == null ? void 0 : v.eventJoinLink) != null ? Pe : !y({
			name: j,
			startDate: ee,
			startTime: oe,
			endDate: H ? se : void 0,
			endTime: H ? me : void 0,
			hasCall: !!ve,
			hasFormChanged: Fe,
			ephemeralDurationSeconds: d
		}) || Pe, Ye = N != null ? N : Qe ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), Je = c.jsx(r("WDSButton.react"), {
			size: "large",
			variant: "filled",
			Icon: o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon,
			xstyle: h.createEventWdsButton,
			disabled: Xe,
			"aria-label": s._(
				/*BTDS*/
				""
			),
			testid: "create-event-button",
			onPress: function() {
				qe();
			}
		}), Ze = r("WAWebL10N").isRTL() ? h.alignEnd : h.alignStart;
		return c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			handlers: { esc: function(t) {
				t.stopPropagation(), Be();
			} },
			children: c.jsx(o("WAWebModal.react").Modal, {
				contentRef: T,
				type: o("WAWebModal.react").ModalTheme.EventCreation,
				onOverlayClick: Be,
				ariaLabel: s._(
					/*BTDS*/
					""
				),
				children: c.jsxs(r("WAWebDrawer.react"), {
					xstyle: h.drawer,
					testid: "event-creation-modal",
					children: [
						c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
							title: Ye,
							type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
							onCancel: We
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
									title: R,
									placeholder: S,
									value: j,
									onChange: K
								}),
								c.jsx(o("WAWebEventsCreateEventModalInputs.react").DescriptionInput, {
									value: X,
									onChange: Y
								}),
								c.jsx(o("WAWebText.react").WAWebTextMuted, {
									marginTop: 12,
									children: s._(
										/*BTDS*/
										""
									)
								}),
								c.jsxs(o("WAWebFlex.react").FlexRow, {
									xstyle: [o("WDSMargins.stylex").wdsMargins.marginStart4, Ze],
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
											onChange: te,
											value: ee,
											name: "event-date",
											getDateBoundaries: Le
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
											value: oe,
											onChange: ae
										})
									})]
								}),
								Ke,
								x ? c.jsx(o("WAWebEventsCreateEventModalInputs.react").LocationInput, {
									value: ye,
									onChange: Ce
								}) : null,
								ve != null ? c.jsx(o("WAWebText.react").WAWebTextSmall, {
									color: "secondary",
									xstyle: o("WDSMargins.stylex").wdsMargins.marginTop8,
									children: s._(
										/*BTDS*/
										""
									)
								}) : null,
								c.jsx(o("WAWebEventsCreateEventModalInputs.react").CallTypeInput, {
									value: ve,
									required: u,
									onChange: Se,
									hideToggle: v != null && v.eventIsScheduledCall === !0
								}),
								Me && ve != null && c.jsxs(o("WAWebFlex.react").FlexRow, {
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
											value: ke,
											onChange: xe,
											testid: "require-approval-switch"
										})
									})]
								}),
								Qe ? c.jsxs(o("WAWebFlex.react").FlexItem, {
									xstyle: g.marginBlock5,
									children: [c.jsx(o("WAWebButton.react").WAWebButtonSecondaryDestructive, {
										alignSelf: "start",
										onClick: Ge,
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
							children: Je
						})
					]
				})
			})
		});
	}
	v.displayName = v.name + " [from " + i.id + "]", l.default = v;
}), 226);
