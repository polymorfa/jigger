__d("WAWebNewCommunityInfoDrawer.react", [
	"fbt",
	"WAUnicodeUtils",
	"WAWebCellFrame.react",
	"WAWebChatCollection",
	"WAWebCmd",
	"WAWebCommunityAddGroupConfirmationPopup.react",
	"WAWebCommunityCells.react",
	"WAWebCommunityCreationFlowMetricUtils",
	"WAWebCommunityGetParticipantInfoText",
	"WAWebCreateCommunityAction",
	"WAWebDetailImage.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerManager",
	"WAWebDrawerSection.react",
	"WAWebDrawerUtils",
	"WAWebEmojiText.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebGroupGatingUtils",
	"WAWebModalManager",
	"WAWebNetworkStatus",
	"WAWebNewCommunityNux.react",
	"WAWebNoop",
	"WAWebNux",
	"WAWebPhotoPickerConstants",
	"WAWebPhotoPickerLoadable.react",
	"WAWebRichTextField.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebWDSRichTextField.react",
	"WAWebWamEnumCommunityCreationCurrentScreenType",
	"WAWebWamPrivateStatsUtils",
	"WDSBanner.react",
	"WDSButton.react",
	"compactMap",
	"react",
	"stylex",
	"useWAWebABPropConfigValue",
	"useWAWebCallbackOnce",
	"useWAWebNux"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useImperativeHandle, _ = d.useRef, f = d.useState, g = {
		section: {
			paddingInlineStart: "x11ahuha",
			paddingInlineEnd: "xl3akx1",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		buttonContainer: {
			paddingInlineStart: "x1m4z3lf",
			paddingInlineEnd: "x1evaxtz",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		paddingHoriz32: {
			paddingInlineStart: "x1m4z3lf",
			paddingInlineEnd: "x1evaxtz",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		paddingBottom28: {
			paddingBottom: "xgb8hzy",
			$$css: !0
		},
		paddingTop28: {
			paddingTop: "xv8gdss",
			$$css: !0
		},
		paddingVert32: {
			paddingTop: "x1sk1jro",
			paddingBottom: "x1ci70gm",
			$$css: !0
		}
	};
	function h() {
		return c.jsx("div", {
			className: "x1380le5 x14mko6t xefnzgg x1uvdrpn",
			children: c.jsx(r("WDSBanner.react"), {
				type: "tip",
				body: s._(
					/*BTDS*/
					""
				),
				actionText: s._(
					/*BTDS*/
					""
				),
				onAction: C
			})
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(t) {
		var n = t.existingGroups, a = t.onBack, i = t.onCancel, l = t.onCreateCommunity, u = t.ref, d = t.viewType, y = _(null), C = _(null), b = f(""), v = b[0], S = b[1], R = f(s._(
			/*BTDS*/
			""
		).toString()), L = R[0], E = R[1], k = f(), I = k[0], T = k[1], D = f(!1), x = D[0], $ = D[1], P = r("useWAWebNux")(o("WAWebNux").NUX.COMMUNITY), N = P[0], M = P[1], w = f(!0), A = w[0], F = w[1], O = o("useWAWebABPropConfigValue").useABPropConfigValue("wds_web_rich_text_field"), B = N || A, W = _(!1), q = f(function() {
			return n == null || n.length <= 0 ? [] : r("compactMap")(n, function(e) {
				var t, n, r = o("WAWebChatCollection").ChatCollection.get(e);
				return r == null ? null : {
					id: e,
					subject: (t = r.formattedTitle) != null ? t : "",
					participants: (n = r.groupMetadata) == null ? void 0 : n.participants,
					contact: r.contact
				};
			});
		}), U = q[0], V = q[1], H = function() {
			return B ? o("WAWebWamEnumCommunityCreationCurrentScreenType").COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.COMMUNITY_NUX : o("WAWebWamEnumCommunityCreationCurrentScreenType").COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.COMMUNITY_INFO;
		}, G = function() {
			var e = H();
			U.length && o("WAWebCommunityCreationFlowMetricUtils").UiCommunityCreationAction.linkGroup(U.length, e);
		}, z = r("useWAWebCallbackOnce")(function() {
			G(), B ? o("WAWebCommunityCreationFlowMetricUtils").UiCommunityCreationAction.dismiss() : W.current === !1 && o("WAWebCommunityCreationFlowMetricUtils").UiCommunityCreationAction.exit(), a || i ? (a == null || a(), i == null || i()) : W.current === !1 && o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
		});
		function j() {
			o("WAWebCommunityCreationFlowMetricUtils").UiCommunityCreationAction.createCommunityFail(H());
		}
		async function K(e) {
			var t = U == null || U.length === 0, n = await r("WAWebCreateCommunityAction")(babelHelpers.extends({}, e, {
				existingGroups: U,
				onCommunityCreationFailure: j,
				shouldCreateGeneralChat: t
			}));
			W.current = !0, o("WAWebWamPrivateStatsUtils").logUiActionShadowPrivateStatsTestEvents(), n != null && (o("WAWebCmd").Cmd.openCommunityHome(n), o("WAWebCommunityCreationFlowMetricUtils").UiCommunityCreationAction.createCommunitySuccess(H(), n.user)), l == null || l();
		}
		var Q = r("useWAWebCallbackOnce")(function(e) {
			$(!0), K(e);
		});
		function X(e) {
			if (!r("WAWebNetworkStatus").online) {
				o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) })), j();
				return;
			}
			Q(e);
		}
		var Y = [g.paddingHoriz32, g.paddingBottom28];
		m(function() {
			var e;
			(e = y.current) == null || e.restoreFocus();
		}, [U.length]);
		var J = function(t) {
			y.current = t;
		}, Z = function(t) {
			S(t);
		}, ee = function(t) {
			E(t);
		}, te = function() {
			o("WAWebCommunityCreationFlowMetricUtils").UiCommunityCreationAction.unlinkGroup(), V([]);
		}, ne = r("useWAWebCallbackOnce")(function() {
			X({
				name: v.trim(),
				desc: L.trim(),
				icon: I
			});
		}), re = function() {
			var e, t = s._(
				/*BTDS*/
				"",
				[s._param("community-name", c.jsx(o("WAWebEmojiText.react").EmojiText, { text: (e = U[0]) == null ? void 0 : e.subject }))]
			);
			o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebCommunityAddGroupConfirmationPopup.react"), {
				title: t,
				disclaimer: s._(
					/*BTDS*/
					""
				),
				onOK: function() {
					o("WAWebCommunityCreationFlowMetricUtils").UiCommunityCreationAction.linkGroupConfirmationOk(), ne(), o("WAWebModalManager").ModalManager.close();
				},
				onCancel: function() {
					o("WAWebCommunityCreationFlowMetricUtils").UiCommunityCreationAction.linkGroupConfirmationCancel(), o("WAWebModalManager").ModalManager.close();
				}
			}));
		}, oe = function() {
			o("WAWebCommunityCreationFlowMetricUtils").UiCommunityCreationAction.createCommunity(o("WAWebWamEnumCommunityCreationCurrentScreenType").COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.COMMUNITY_INFO), U.length ? re() : ne();
		}, ae = function(t, n) {
			T(n);
		};
		if (p(u, function() {
			return {
				restoreFocus: function() {
					var e;
					return (e = y.current) == null ? void 0 : e.restoreFocus();
				},
				getElement: function() {
					return C.current;
				}
			};
		}), B) return c.jsx(r("WAWebNewCommunityNux.react"), {
			ref: C,
			viewType: d,
			onContinue: function() {
				o("WAWebCommunityCreationFlowMetricUtils").UiCommunityCreationAction.getStarted(), N && M(), A && F(!1);
			},
			onBack: a ? z : void 0,
			onCancel: i ? z : void 0
		});
		var ie = v.trim().length > 0, le = o("WAUnicodeUtils").numCodepoints(L) > o("WAWebGroupGatingUtils").getGroupDescriptionLength(), se = s._(
			/*BTDS*/
			""
		), ue = s._(
			/*BTDS*/
			""
		), ce = s._(
			/*BTDS*/
			""
		), de = o("WAWebDrawerUtils").getDrawerHeaderType(d);
		return c.jsxs(r("WAWebDrawer.react"), {
			ref: C,
			tsNavigationData: { surface: "new-community-info-drawer" },
			viewType: d,
			children: [
				c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					title: s._(
						/*BTDS*/
						""
					),
					type: de,
					onBack: a ? z : void 0,
					onCancel: i ? z : void 0
				}),
				c.jsx(r("WAWebDrawerBody.react"), { children: c.jsxs(r("WAWebDrawerSection.react"), {
					theme: "full-height",
					children: [
						c.jsx(h, {}),
						c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props.apply(e, [g.paddingTop28].concat(Y)), { children: c.jsx(o("WAWebPhotoPickerLoadable.react").PhotoPickerLoadable, {
							type: o("WAWebPhotoPickerConstants").PhotoPickerType.COMMUNITY,
							attachToChat: !1,
							startImage: I,
							onImageSet: ae,
							theme: o("WAWebPhotoPickerConstants").PhotoPickerThemeType.EMOJI_SUGGESTIONS
						}) })),
						c.jsx("div", babelHelpers.extends({}, e.props.apply(e, Y), { children: c.jsx(o("WAWebRichTextField.react").RichTextField, {
							testid: "community-subject",
							title: se,
							ref: J,
							value: v,
							maxLength: o("WAWebGroupGatingUtils").getGroupMaxSubject(),
							showRemaining: !0,
							onChange: function(t) {
								var e = t.text;
								return Z(e);
							},
							placeholder: se,
							onEnter: ie && !le ? oe : r("WAWebNoop"),
							emojiBtnPosition: "side",
							focusOnMount: !0
						}) })),
						c.jsx("div", babelHelpers.extends({}, e.props.apply(e, Y), { children: O === !0 ? c.jsx(r("WAWebWDSRichTextField.react"), {
							label: ce,
							placeholder: ce,
							initialText: L,
							onValueChange: ee,
							maxLength: o("WAWebGroupGatingUtils").getGroupDescriptionLength(),
							maxCharacterCount: o("WAWebGroupGatingUtils").getGroupDescriptionLength(),
							rows: 5,
							onEnter: ie && !le ? oe : void 0,
							testid: "community_create_description_textfield",
							emoji: {
								picker: { ariaLabel: s._(
									/*BTDS*/
									""
								) },
								keyboardShortcut: !0
							}
						}) : c.jsx(o("WAWebRichTextField.react").RichTextField, {
							testid: "community_create_description_textfield",
							title: ue,
							value: L,
							maxLength: o("WAWebGroupGatingUtils").getGroupDescriptionLength(),
							softMaxLength: !0,
							showRemaining: !0,
							onChange: function(t) {
								var e = t.text;
								return ee(e);
							},
							placeholder: ce,
							inputPlaceholder: ue,
							onEnter: ie && !le ? oe : r("WAWebNoop"),
							emojiBtnPosition: "side",
							multiline: !0,
							maxVisibleLines: 5,
							minVisibleLines: 5,
							textFormatEnabled: !0,
							bulletPointsEnabled: !0,
							numberedListEnabled: !1,
							blockQuoteEnabled: !1,
							inlineCodeEnabled: !1,
							theme: "gray-background"
						}) })),
						U.length ? c.jsx(r("WAWebDrawerSection.react"), {
							testid: "groups-in-community",
							title: s._(
								/*BTDS*/
								""
							),
							animation: !1,
							xstyle: g.section,
							theme: "padding-no-vertical",
							children: U.map(function(e) {
								var t = e.id, n = e.participants, a = e.subject;
								return c.jsx(r("WAWebCellFrame.react"), {
									primary: c.jsx(o("WAWebEmojiText.react").EmojiText, {
										text: a,
										ellipsify: !0
									}),
									image: c.jsx(o("WAWebDetailImage.react").DetailImage, { id: t }),
									secondary: c.jsx(o("WAWebEmojiText.react").EmojiText, {
										text: n ? o("WAWebCommunityGetParticipantInfoText").getParticipantInfoText(n) : null,
										ellipsify: !0
									}),
									detail: c.jsx(o("WAWebCommunityCells.react").RemoveButton, {
										groupName: a,
										onClick: te,
										subgroup: t,
										tabIndex: 0
									}),
									theme: "collection-header"
								}, t.toString());
							})
						}) : null
					]
				}) }),
				c.jsx(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "center",
					xstyle: [g.paddingVert32, g.buttonContainer],
					children: c.jsx(r("WDSButton.react"), {
						label: x ? s._(
							/*BTDS*/
							""
						) : s._(
							/*BTDS*/
							""
						),
						variant: "filled",
						size: "medium",
						type: "default",
						onPress: oe,
						disabled: !ie || x || le,
						widthMode: "flexible",
						testid: "new-community-info-continue-btn"
					})
				})
			]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C() {
		var e = o("WAWebFaqUrl").getAboutCommunitiesFaqUrl();
		o("WAWebExternalLink.react").openExternalLink(e);
	}
	l.default = y;
}), 226);
