__d("WAWebPollsCreatePollModal", [
	"fbt",
	"WAWebAttachMediaCollection",
	"WAWebAttachmentMenuLogger",
	"WAWebBizBotTosUtils",
	"WAWebChatEphemerality",
	"WAWebChatGetters",
	"WAWebConfirmPopup.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebFrontendChatGetters",
	"WAWebKeyboardHotKeys.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterWamoSubMessageType",
	"WAWebNewsletterWamoSubMessageTypePopup.react",
	"WAWebNewsletterWamoSubUtils",
	"WAWebPollAttachMediaPicker.react",
	"WAWebPollAttachMediaViewLoadable.react",
	"WAWebPollCreationUtils",
	"WAWebPollOptionsRenderUtils",
	"WAWebPollsActionsMetricUtils",
	"WAWebPollsEndTimeSection",
	"WAWebPollsGatingUtils",
	"WAWebPollsOptionInput",
	"WAWebPollsOrderableList",
	"WAWebPollsSendPollCreationMsgAction",
	"WAWebRichTextField.react",
	"WAWebRound.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebWdsIcSendFilledIcon.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"WDSSwitch.react",
	"WDSText.react",
	"nullthrows",
	"react",
	"stylex",
	"useLazyRef",
	"useWAWebChatValues",
	"useWAWebOnUnmount",
	"useWAWebUIM"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useLayoutEffect, f = d.useMemo, g = d.useRef, h = d.useState, y = { marginBottom10: {
		marginBottom: "xyorhqc",
		$$css: !0
	} }, C = 25;
	function b(e) {
		var t = e.correctOptionKey, n = e.filteredOptions, a = e.hideVoterNames, i = e.isPhotoPoll, l = e.isSingleOption, s = e.pollEndTime, u = e.pollType, c = e.question, d = {
			name: c,
			selectableOptionsCount: l || u === o("WAWebPollCreationUtils").PollType.QUIZ ? 1 : 0,
			correctOptionIndex: u === o("WAWebPollCreationUtils").PollType.QUIZ ? n.findIndex(function(e) {
				return e.key === t;
			}) : void 0,
			endTime: s,
			hideVoterNames: a ? !0 : void 0
		};
		return i ? babelHelpers.extends({}, d, {
			contentType: "IMAGE",
			options: n.map(function(e) {
				var t = e.image, n = e.name;
				return {
					name: n,
					image: r("nullthrows")(t)
				};
			}),
			pollType: u
		}) : babelHelpers.extends({}, d, {
			contentType: "TEXT",
			options: n.map(function(e) {
				var t = e.name;
				return { name: t };
			}),
			pollType: u
		});
	}
	var v = {
		bodyContainer: {
			boxSizing: "x9f619",
			width: "x1esq4s8",
			paddingInlineStart: "xvahy20",
			paddingInlineEnd: "x1a4sjiy",
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		optionsContainer: {
			overflowY: "x1odjw0f",
			$$css: !0
		},
		drawer: {
			backgroundColor: "x1280gxy",
			marginInlineStart: "x137kccz",
			width: "x14n2pz4",
			$$css: !0
		},
		sendButton: {
			transform: "x1cb1t30",
			marginInlineEnd: "x1wcu8vx",
			transitionProperty: "xs2xxs2",
			transitionDuration: "x1d8287x",
			$$css: !0
		},
		sendButtonRefreshed: {
			color: "x1pse0pq",
			backgroundColor: "xfn3atn",
			$$css: !0
		},
		singleOptionContainer: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			width: "xh8yej3",
			fontSize: "x1jchvi3",
			lineHeight: "xdod15v",
			$$css: !0
		},
		singleOptionLabel: {
			width: "xh8yej3",
			display: "x1rg5ohu",
			cursor: "x1ypdohk",
			$$css: !0
		}
	};
	function S(t) {
		var n, a = t.chat, i = t.getComposeBoxEditorRef, l = t.initialCheckedKey, u = t.initialOptions, d = t.initialQuestion, C = t.onSend, S = t.pollType, R = r("useLazyRef")(function() {
			var e, t;
			return (e = (t = i()) == null || (t = t.getTextContent()) == null ? void 0 : t.substring(0, o("WAWebPollsGatingUtils").getMaxPollNameLength())) != null ? e : "";
		}).current, L = h(R), E = L[0], k = L[1], I = h(!1), T = I[0], D = I[1], x = h(l), $ = x[0], P = x[1], N = h(!1), M = N[0], w = N[1], A = h(null), F = A[0], O = A[1], B = h(!1), W = B[0], q = B[1], U = g(), V = h(void 0), H = V[0], G = V[1], z = h(!1), j = z[0], K = z[1], Q = h(!1), X = Q[0], Y = Q[1], J = h(null), Z = J[0], ee = J[1], te = (n = o("useWAWebChatValues").useOptionalChatValues(a.id, [o("WAWebChatGetters").getIsNewsletter, o("WAWebFrontendChatGetters").getNewsletterMetadata])) != null ? n : [!1, null], ne = te[0], re = te[1], oe = f(function() {
			var e = o("WAWebChatEphemerality").calculateEphemeralDurationForChat(a);
			return e == null ? null : e * 1e3;
		}, [a]), ae = o("WAWebPollsGatingUtils").getMaxPollOptionCount(), ie = h(function() {
			return o("WAWebPollOptionsRenderUtils").formatOptions(u != null ? u : [], { maxOptionsCount: ae });
		}), le = ie[0], se = ie[1], ue = g(new Map()), ce = g(null), de = g(), me = r("useWAWebUIM")(), pe = m(function(e, t) {
			se(o("WAWebPollOptionsRenderUtils").formatOptions(e, {
				maxOptionsCount: ae,
				focusedKey: t
			}));
		}, [ae]);
		p(function() {
			o("WAWebPollsActionsMetricUtils").commitPollOpenCreationModal(a);
		}, []);
		var _e = g(), fe = g(le.length);
		_(function() {
			var e = ce.current, t = fe.current, n = le.findIndex(function(e) {
				return e.key === _e.current;
			});
			e != null && t < le.length && n === le.length - 2 && le[le.length - 1].name === "" && e.scroll({
				top: e.scrollHeight,
				behavior: "smooth"
			}), fe.current = le.length;
		}, [le]);
		var ge = function(t) {
			var e = t.text;
			k(e);
		}, he = le.some(function(e) {
			return e.image != null;
		}), ye = f(function() {
			return o("WAWebPollOptionsRenderUtils").validateOptions(le);
		}, [le]);
		p(function() {
			a.isComposingPoll = E.length > 0 || le.some(function(e) {
				return e.name.length > 0;
			});
		}, [
			a,
			E,
			le
		]), r("useWAWebOnUnmount")(function() {
			a.isComposingPoll = !1;
		});
		var Ce = le[ae - 2], be = le[ae - 1], ve = le.length === ae && !o("WAWebPollOptionsRenderUtils").isEmptyAfterTrimming(Ce) && o("WAWebPollOptionsRenderUtils").isEmptyAfterTrimming(be), Se = g(), Re = function(t) {
			t === void 0 && (t = !1), o("WAWebModalManager").ModalManager.close(), t && o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentCancel(a, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.POLL);
		}, Le = E !== "" || le.some(function(e) {
			return e.name !== "" || e.image;
		}), Ee = function() {
			Le ? K(!0) : Re(!0);
		}, ke = function() {
			Le ? j || K(!0) : Re(!0);
		}, Ie = async function(t) {
			var e;
			Y(!0), Re(!1), await o("WAWebBizBotTosUtils").maybeShowBizBot1pTos(a);
			var n = le.filter(function(e) {
				return !o("WAWebPollOptionsRenderUtils").isEmptyAfterTrimming(e);
			}), r = b({
				correctOptionKey: $,
				filteredOptions: n,
				isPhotoPoll: he,
				isSingleOption: T,
				pollEndTime: M ? F : null,
				pollType: S,
				question: E,
				hideVoterNames: W
			});
			o("WAWebPollsSendPollCreationMsgAction").sendPollCreation({
				poll: r,
				chat: a,
				quotedMsg: a.composeQuotedMsg,
				isWamoSub: t === o("WAWebNewsletterWamoSubMessageType").NewsletterWamoSubMessageType.WamoSub
			}), a.composeQuotedMsg = null, a.setComposeContents({}), (e = i()) == null || e.reset(), o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentSend(a, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.POLL);
		}, Te = function() {
			if (ne && o("WAWebNewsletterWamoSubUtils").newsletterSupportsSubscriptions(re) && de.current && o("WAWebNewsletterGatingUtils").isWamoSubCreatorExperienceSupported()) {
				var e = function(t) {
					Ie(t);
				};
				ee({
					popupAnchorEl: de.current,
					handleSelect: e
				});
			} else Ie();
			C == null || C();
		}, De = function() {
			var e = o("WAWebPollOptionsRenderUtils").validatePoll({
				question: E,
				options: le,
				isPhotoPoll: he,
				pollType: S,
				correctOptionKey: $,
				pollEndTimeEnabled: M,
				pollEndTime: F
			});
			if (e != null) {
				o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: e }));
				return;
			}
			Te();
		}, xe = f(function() {
			return {
				chat: a,
				getComposeBoxEditorRef: i,
				options: le
			};
		}, [
			a,
			i,
			le
		]), $e = m(function(e, t) {
			var n = [].concat(le);
			n[e] = babelHelpers.extends({}, le[e], { image: void 0 }), pe(n, t);
		}, [le, pe]), Pe = m(function(e) {
			var t = le[e], n = babelHelpers.extends({
				question: E,
				allowMultipleMedia: !1,
				activeOptionIndex: e
			}, xe, {
				pollType: S,
				correctOptionKey: $
			});
			if (t.image) {
				var i = t.image, l = new (r("WAWebAttachMediaCollection"))({ chatParticipantCount: a.getParticipantCount() });
				l.add(i), l.forEach(function(e) {
					e.updateCaption(t.name);
				}), l.setActive(i), me == null || me.requestDismiss();
				var s = c.jsx(o("WAWebPollAttachMediaViewLoadable.react").PollAttachMediaViewLoadable, babelHelpers.extends({ mediaCollection: l }, n));
				o("WAWebModalManager").ModalManager.openMedia(s, { transition: "menu" });
			} else {
				var u;
				G(e), (u = U.current) == null || u.open();
			}
		}, [
			a,
			$,
			xe,
			le,
			S,
			E,
			me
		]);
		return c.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
			handlers: { esc: function(t) {
				t.stopPropagation(), Ee();
			} },
			children: [
				c.jsx(o("WAWebModal.react").Modal, {
					type: o("WAWebModal.react").ModalTheme.Tower,
					testid: "poll-creation-modal",
					onOverlayClick: ke,
					children: c.jsxs(r("WAWebDrawer.react"), {
						xstyle: v.drawer,
						children: [
							c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
								title: S === o("WAWebPollCreationUtils").PollType.QUIZ ? s._(
									/*BTDS*/
									""
								) : s._(
									/*BTDS*/
									""
								),
								type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
								onCancel: Ee
							}),
							c.jsx(r("WAWebDrawerBody.react"), { children: c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(v.bodyContainer, o("WDSPaddings.stylex").wdsPaddings.paddingTop32), { children: [
								c.jsx("span", {
									className: "xlm9qay xk50ysn",
									children: s._(
										/*BTDS*/
										""
									)
								}),
								c.jsx(o("WAWebRichTextField.react").RichTextField, {
									ref: Se,
									testid: "poll-question-input",
									focusOnMount: !0,
									hideFloatingLabel: !0,
									showRemaining: !0,
									emojiBtnPosition: "side",
									textFormatEnabled: !0,
									value: d != null ? d : R,
									maxLength: o("WAWebPollsGatingUtils").getMaxPollNameLength(),
									maxVisibleLines: 5,
									maxCodeUnits: o("WAWebPollsGatingUtils").getMaxPollNameLengthForIncomingMessages(),
									onChange: ge,
									placeholder: s._(
										/*BTDS*/
										""
									)
								}),
								c.jsx("span", {
									className: "xlm9qay xk50ysn x1e1m7ul",
									children: s._(
										/*BTDS*/
										""
									)
								}),
								c.jsxs("div", babelHelpers.extends({ ref: ce }, e.props(v.optionsContainer, o("WDSMargins.stylex").wdsMargins.marginTop2, y.marginBottom10), { children: [c.jsx(r("WAWebPollsOrderableList"), {
									items: le,
									onReordered: pe,
									renderItem: function(t) {
										var e = t.index, n = t.item, o = t.startDrag;
										return c.jsx(r("WAWebPollsOptionInput"), {
											chat: a,
											onPhotoThumbnailClick: function() {
												Pe(e);
											},
											onPhotoIconClick: function() {
												var e;
												return (e = U.current) == null ? void 0 : e.open();
											},
											initialText: n.name,
											error: ye.get(n.key),
											testid: "poll-option-input-" + e,
											onTextInputRef: function(t) {
												t ? ue.current.set(n.key, t) : ue.current.delete(n.key);
											},
											pollType: S,
											isPhotoPoll: he,
											onChange: function(r) {
												var t = [].concat(le);
												t[e] = babelHelpers.extends({}, n, { name: r }), pe(t, n.key);
											},
											onDeletePhoto: function() {
												$e(e, n.key);
											},
											onDragThumbMouseDown: function(t) {
												t.button === 0 && o(n.key, t);
											},
											onInputFocus: function() {
												_e.current = n.key;
											},
											onInputBlur: function() {
												_e.current = null;
											},
											image: n.image,
											handleCheckBoxClick: function() {
												return n.key === $ ? P(null) : P(n.key);
											},
											checked: n.key === $
										});
									}
								}), S === o("WAWebPollCreationUtils").PollType.QUIZ && !Le && c.jsx("div", {
									className: "x889kno",
									children: c.jsx(r("WDSText.react"), {
										type: "Body2",
										colorName: "contentDeemphasized",
										children: s._(
											/*BTDS*/
											""
										)
									})
								})] })),
								c.jsx("h3", {
									"data-testid": "poll-creation-one-more-option-hint",
									className: {
										0: "x1nxh6w3",
										1: "x1nxh6w3 xlshs6z"
									}[!ve << 0],
									children: s._(
										/*BTDS*/
										""
									)
								}),
								S === o("WAWebPollCreationUtils").PollType.POLL && o("WAWebPollsGatingUtils").isSingleOptionPollsSendingEnabled(a.id) && c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(v.singleOptionContainer, o("WDSPaddings.stylex").wdsPaddings.paddingBottom20), { children: [c.jsx("label", babelHelpers.extends({ htmlFor: "polls-single-option-switch" }, (e || (e = r("stylex"))).props(v.singleOptionLabel, o("WDSPaddings.stylex").wdsPaddings.paddingVer4), { children: s._(
									/*BTDS*/
									""
								) })), c.jsx(r("WDSSwitch.react"), {
									id: "polls-single-option-switch",
									value: !T,
									onChange: function() {
										D(!T);
									},
									testid: "polls-single-option-switch"
								})] })),
								S === o("WAWebPollCreationUtils").PollType.POLL && !ne && o("WAWebPollsGatingUtils").isPollHideVotersSendingEnabled(a.id) && c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(v.singleOptionContainer, o("WDSPaddings.stylex").wdsPaddings.paddingBottom20), { children: [c.jsx("label", babelHelpers.extends({ htmlFor: "polls-hide-voter-names-switch" }, (e || (e = r("stylex"))).props(v.singleOptionLabel, o("WDSPaddings.stylex").wdsPaddings.paddingVer4), { children: s._(
									/*BTDS*/
									""
								) })), c.jsx(r("WDSSwitch.react"), {
									id: "polls-hide-voter-names-switch",
									value: W,
									onChange: function() {
										q(!W);
									},
									testid: "polls-hide-voter-names-switch"
								})] })),
								S === o("WAWebPollCreationUtils").PollType.POLL && !ne && o("WAWebPollsGatingUtils").isPollEndTimeSendingEnabled(a.id) && c.jsx(r("WAWebPollsEndTimeSection"), {
									enabled: M,
									maxDurationMs: oe,
									onToggle: w,
									pollEndTime: F,
									onEndTimeChange: O
								})
							] })) }),
							c.jsx("div", {
								className: "xh8yej3 x78zum5 x13a6bvl xwvwv9b x1jn9dgz x11fxgd9",
								children: c.jsxs(o("WAWebRound.react").Round, {
									ref: de,
									xstyle: [v.sendButton, v.sendButtonRefreshed],
									theme: o("WAWebRound.react").RoundTheme.DrawerFooter,
									large: !0,
									onClick: De,
									disabled: ye.size !== 0 || X || M && F == null,
									label: s._(
										/*BTDS*/
										""
									),
									testid: "poll-send-button",
									children: [c.jsx(o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon, {
										width: 28,
										directional: !0
									}), " "]
								})
							}),
							Z != null && c.jsx(r("WAWebNewsletterWamoSubMessageTypePopup.react"), {
								handleSelect: Z.handleSelect,
								popupAnchorEl: Z.popupAnchorEl,
								onDismiss: function() {
									return ee(null);
								}
							})
						]
					})
				}),
				j && c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
					title: S === o("WAWebPollCreationUtils").PollType.QUIZ ? s._(
						/*BTDS*/
						""
					) : s._(
						/*BTDS*/
						""
					),
					okText: s._(
						/*BTDS*/
						""
					),
					onOK: function() {
						var e;
						K(!1), (e = Se.current) == null || e.restoreFocus();
					},
					cancelText: s._(
						/*BTDS*/
						""
					),
					onCancel: function() {
						Re(!0);
					},
					onOverlayClick: ke,
					children: s._(
						/*BTDS*/
						""
					)
				}),
				c.jsx(r("WAWebPollAttachMediaPicker.react"), {
					mediaPickerRef: U,
					chat: a,
					options: le,
					getComposeBoxEditorRef: i,
					question: E,
					allowMultipleMedia: !he,
					activeOptionIndex: H != null ? H : void 0,
					pollType: S,
					correctOptionKey: $
				})
			]
		});
	}
	S.displayName = S.name + " [from " + i.id + "]", l.CreatePollModal = S;
}), 226);
