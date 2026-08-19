__d("WAWebMessageAlbumWrapper.react", [
	"fbt",
	"invariant",
	"WALogger",
	"WAWebABProps",
	"WAWebAddOnBubblesContainer.react",
	"WAWebAppContext.react",
	"WAWebChatGetters",
	"WAWebChatThemeGatingUtils",
	"WAWebChatThemeModeContext",
	"WAWebCheckBox.react",
	"WAWebClassnames",
	"WAWebCmd",
	"WAWebConfirmPopup.react",
	"WAWebDeleteRevokeMsgFlow.react",
	"WAWebDisplayType",
	"WAWebDomScroll",
	"WAWebFbtCommon",
	"WAWebFileSaver",
	"WAWebFocusTracer",
	"WAWebForwardMessageFlowLoadable",
	"WAWebForwardedNewsletterMessageInfoActionButton.react",
	"WAWebFrontendMsgGetters",
	"WAWebGroupChatProfilePicture.react",
	"WAWebGroupHistoryGating",
	"WAWebKeyboardListHotKeys.react",
	"WAWebKeyboardRotateFocusArrows.react",
	"WAWebMediaAlbumGrid.react",
	"WAWebMediaAlbumGridConstants",
	"WAWebMessageAlbumWrapperGroupedSticker.react",
	"WAWebMessageAlbumWrapperMenuContent.react",
	"WAWebMessageAuthor.react",
	"WAWebMessageCheckbox.react",
	"WAWebMessageForwardedIndicator.react",
	"WAWebMessageListAlbums",
	"WAWebMessageMenu.react",
	"WAWebMessagePosition",
	"WAWebMessageUiUtils",
	"WAWebModalManager",
	"WAWebMsgActionCapability",
	"WAWebMsgGetters",
	"WAWebMsgSelectors",
	"WAWebMsgSendFailIcon.react",
	"WAWebMultiSelectBar.react",
	"WAWebNewsletterGatingUtils",
	"WAWebReactionsListeners.react",
	"WAWebReactionsUtils",
	"WAWebRevokeMetricUtils",
	"WAWebRound.react",
	"WAWebStateUtils",
	"WAWebStylesEnv",
	"WAWebThemeContext",
	"WAWebTypesMedia",
	"WAWebVelocityTransitionGroup",
	"WAWebVibrantOutgoingOverrides.stylex",
	"WAWebWrapperGetTailIcon",
	"WAWebWrapperListeners.react",
	"WAWebWrapperMessageActionButtonsRow",
	"WDSFocusStateStyles",
	"WDSIconIcFastForward.react",
	"compactMap",
	"countWhere",
	"cr:7565",
	"nullthrows",
	"react",
	"stylex",
	"useWAWebIsKeyboardUser",
	"useWAWebMsgValues",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s, u) {
	var e, c, d = ["ref"], m, p, _ = p || (p = o("react")), f = p, g = f.useCallback, h = f.useContext, y = f.useEffect, C = f.useImperativeHandle, b = f.useRef, v = f.useState, S = {
		svgColorRefreshed: {
			color: "xhslqc4",
			$$css: !0
		},
		groupHistoryMessage: {
			"--WDS-systems-bubble-surface-incoming": "x9lmoot",
			"--WDS-systems-bubble-surface-outgoing": "x1ppz1d2",
			$$css: !0
		},
		groupHistoryMessageRow: {
			position: "x1n2onr6",
			"::before_content": "x1cpjm7i",
			"::before_position": "x1hmns74",
			"::before_top": "x1y3wzot",
			"::before_bottom": "xhq5o37",
			"::before_insetInlineStart": "xfbisj7",
			"::before_transform": "xnyzbwf",
			"::before_width": "xkeh78v",
			"::before_zIndex": "xy5mcqj",
			$$css: !0
		},
		groupHistoryMessageRowLight: {
			"::before_backgroundColor": "xd3jkiw",
			$$css: !0
		},
		groupHistoryMessageRowDark: {
			"::before_backgroundColor": "x5cow8b",
			$$css: !0
		},
		message: {
			borderStartStartRadius: "x1liijdw",
			borderStartEndRadius: "xu342n7",
			borderEndEndRadius: "xelbjmh",
			borderEndStartRadius: "x16pgt24",
			color: "x14ug900",
			flex: "x1okw0bk",
			fontSize: "x12lqup9",
			lineHeight: "x17fgdl5",
			position: "x1n2onr6",
			$$css: !0
		},
		messageHighlightMention: {
			lineHeight: "x19v9tvf",
			$$css: !0
		},
		messageTransparent: {
			backgroundColor: "xjbqb8w",
			borderStartStartRadius: "x1bczwif",
			borderStartEndRadius: "x17un8ov",
			borderEndEndRadius: "x1e7945m",
			borderEndStartRadius: "x11o6v7j",
			boxShadow: "x1gnnqk1",
			lineHeight: "x1gwpirc",
			$$css: !0
		},
		albumBubbleContainer: {
			maxWidth: "xdduh5l",
			paddingTop: "xyqdw3p",
			paddingInlineEnd: "x1im30kd",
			paddingBottom: "xg8j3zb",
			paddingInlineStart: "x1djpfga",
			$$css: !0
		},
		albumAnnouncementBubbleContainer: {
			maxWidth: "x145dklv",
			$$css: !0
		},
		messageBackground: {
			borderStartStartRadius: "x1liijdw",
			borderStartEndRadius: "xu342n7",
			borderEndEndRadius: "xelbjmh",
			borderEndStartRadius: "x16pgt24",
			position: "x1n2onr6",
			zIndex: "x12xzxwr",
			$$css: !0
		},
		messageBackgroundIncoming: {
			backgroundColor: "x1ew7x2d",
			$$css: !0
		},
		messageBackgroundOutgoing: {
			backgroundColor: "x1g5lz36",
			$$css: !0
		},
		bgTailFlatTopLeft: {
			borderStartStartRadius: "x1bczwif",
			$$css: !0
		},
		bgTailFlatTopRight: {
			borderStartEndRadius: "x17un8ov",
			$$css: !0
		},
		hasBorderBox: {
			boxShadow: "xgdw1sx",
			$$css: !0
		},
		tail: {
			display: "x1lliihq",
			height: "x18gnavp",
			position: "x10l6tqk",
			top: "x13vifvy",
			width: "x1xc55vz",
			zIndex: "xupqr0c",
			$$css: !0
		},
		tailColorIncoming: {
			color: "x1l1cedg",
			$$css: !0
		},
		tailColorOutgoing: {
			color: "x1fa4crm",
			$$css: !0
		},
		tailLeft: {
			insetInlineStart: "x7hj1vm",
			left: null,
			right: null,
			$$css: !0
		},
		tailRight: {
			insetInlineEnd: "xgvahye",
			left: null,
			right: null,
			$$css: !0
		},
		tailLeftSafari: {
			insetInlineStart: "xnj87uo",
			left: null,
			right: null,
			$$css: !0
		},
		tailRightSafari: {
			insetInlineEnd: "x13niomq",
			left: null,
			right: null,
			$$css: !0
		},
		tailHidden: {
			display: "x1s85apg",
			$$css: !0
		}
	};
	function R(t) {
		var a, i, l = t.ref, p = babelHelpers.objectWithoutPropertiesLoose(t, d), f = p.albumId, R = p.displayType, L = p.focusedMsgIndex, E = p.isFocusable, k = p.isFocusedAlbum, I = p.isMsgVisible, T = p.msgs, D = p.onMessageSelect, x = p.position, $ = p.selectable, P = p.selectedMessages, N = p.showProfilePicture, M = N === void 0 ? !0 : N, w = o("useWAWebMsgValues").useMsgValues(T[0].id, [o("WAWebMsgGetters").getIsGroupHistoryMessageInOwnChat, o("WAWebMsgGetters").getNewsletterAdminProfile]), A = w[0], F = w[1], O = o("WAWebThemeContext").useIsDarkTheme(), B = v(), W = B[0], q = B[1], U = v(!1), V = U[0], H = U[1], G = v(!1), z = G[0], j = G[1], K = v(r("countWhere")(T, function(e) {
			return P.isSelected(o("WAWebStateUtils").unproxy(e.unsafe()));
		})), Q = K[0], X = K[1], Y = v(), J = Y[0], Z = Y[1], ee = r("useWAWebIsKeyboardUser")(), te = ee.isKeyboardUser, ne = b(!0), re = b(), oe = b({}), ae = b(), ie = b(null), le = b(null), se = b(), ue = b(null), ce = b(), de = b(), me = g(function(e) {
			Z(e);
		}, []);
		y(function() {
			ne.current || o("WAWebMessageUiUtils").getLegacyAlbumRowAriaLabel(T).then(me).catch(function() {}), ne.current = !1;
		}, [me, T]);
		var pe = g(function(e) {
			!e.buttons && !V && H(!0);
		}, [V]), _e = g(function() {
			V && H(!1);
		}, [V]), fe = g(function(e) {
			re.current && r("WAWebFocusTracer").focus(re.current, e);
		}, []), ge = g(function(e) {
			var t = e.event, n = e.mode, r = e.selectedMsg;
			if (o("WAWebRevokeMetricUtils").UiRevokeActionHelper.startSession(), t && t.stopPropagation(), r) {
				D(o("WAWebStateUtils").unproxy(r.unsafe()), !P.isSelected(o("WAWebStateUtils").unproxy(r)), n, t);
				return;
			}
			var a = Q === 0;
			T.forEach(function(e) {
				D(o("WAWebStateUtils").unproxy(e.unsafe()), a, n, t);
			});
		}, [
			T,
			Q,
			P,
			D
		]), he = g(function(e, t) {
			for (var n = 0; n < T.length; n++) if (o("WAWebFrontendMsgGetters").getIsUnsentMedia(T[n])) {
				var a = s._(
					/*BTDS*/
					"",
					[s._plural(1)]
				);
				o("WAWebModalManager").ModalManager.open(_.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
					tsNavigationData: {
						surface: "unknown",
						viewName: "message-album"
					},
					title: s._(
						/*BTDS*/
						""
					),
					onOK: o("WAWebModalManager").closeModalManager,
					okText: r("WAWebFbtCommon")("OK"),
					children: a
				}));
				return;
			}
			e ? ge({
				mode: o("WAWebMultiSelectBar.react").MultiSelectMode.FORWARD,
				selectedMsg: t
			}) : o("WAWebModalManager").ModalManager.open(_.jsx(o("WAWebForwardMessageFlowLoadable").ForwardMessageFlowLoadable, {
				msgs: T.map(function(e) {
					return e.unsafe();
				}),
				onClose: o("WAWebModalManager").closeModalManager
			}), { transition: "modal-flow" });
		}, [ge, T]), ye = g(function() {
			o("WAWebCmd").Cmd.sendStarMsgs(o("WAWebFrontendMsgGetters").getChat(T[0].unsafe()), T.map(function(e) {
				return e.unsafe();
			}));
		}, [T]), Ce = g(function() {
			o("WAWebCmd").Cmd.sendUnstarMsgs(o("WAWebFrontendMsgGetters").getChat(T[0].unsafe()), T.map(function(e) {
				return e.unsafe();
			}));
		}, [T]), be = g(function() {
			fe({ preventScroll: !0 });
		}, [fe]), ve = g(function() {
			be();
		}, [be]), Se = g(function() {
			var e = 0;
			return T.forEach(function(t) {
				P.isSelected(o("WAWebStateUtils").unproxy(t.unsafe())) && e++;
			}), e;
		}, [T, P]), Re = g(function() {
			var e = T[0], t = T[1];
			return o("WAWebFrontendMsgGetters").getAsGroupedSticker(e.unsafe()) != null && o("WAWebFrontendMsgGetters").getAsGroupedSticker(t.unsafe()) != null;
		}, [T]), Le = g(function(e) {
			var t;
			Re() ? t = Se() : t = e ? T.length : 0, Q !== t && X(t);
		}, [
			Se,
			Re,
			T.length,
			Q
		]), Ee = g(function() {
			o("WAWebFileSaver").FileSaver.initDownload(T.map(function(e) {
				return e.unsafe();
			}));
		}, [T]), ke = g(function() {
			T.length !== 0 && (n("cr:7565") == null || n("cr:7565").selectFolderAndSaveFiles(T.map(function(e) {
				return e.unsafe();
			})).catch(function(t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to save files: ", ""])), t);
			}));
		}, [T]), Ie = g(function(e, t) {
			e ? ge({
				mode: o("WAWebMultiSelectBar.react").MultiSelectMode.DELETE,
				selectedMsg: t
			}) : o("WAWebModalManager").ModalManager.open(_.jsx(r("WAWebDeleteRevokeMsgFlow.react"), {
				chat: o("WAWebFrontendMsgGetters").getChat(T[0].unsafe()),
				msgList: T.map(function(e) {
					return e.unsafe();
				}),
				isMsgVisible: I
			})), o("WAWebRevokeMetricUtils").UiRevokeActionHelper.startSession(), o("WAWebRevokeMetricUtils").UiRevokeActionHelper.messageSelected();
		}, [
			ge,
			T,
			I
		]), Te = g(function() {
			ve(), te && H(!1), q(null);
		}, [ve, te]), De = _.jsx(o("WAWebMessageAlbumWrapperMenuContent.react").WAWebMessageAlbumWrapperMenuContent, {
			msgs: T,
			handleDownload: Ee,
			handleOpenForwardFlow: he,
			handleStar: ye,
			handleUnstar: Ce,
			handleSaveAll: ke,
			handleOpenDeleteFlow: Ie
		}), xe = r("useWDSMenu")({
			targetRef: ie,
			menu: De,
			contextMenuArea: !0,
			enableUIM: !0,
			onClose: Te
		}), $e = xe.menuPortal, Pe = xe.openMenu, Ne = r("useWDSMenu")({
			targetRef: le,
			menu: De,
			enableUIM: !0,
			onClose: Te
		}), Me = Ne.menuPortal, we = Ne.openMenu, Ae = function(t) {
			var e, n;
			((e = (n = document.getSelection()) == null ? void 0 : n.toString()) != null ? e : "") === "" && (t.stopPropagation(), Pe(t));
		}, Fe = function() {
			we();
		}, Oe = g(function() {
			var e, t, n = (e = (t = re.current) == null ? void 0 : t.contains(document.activeElement)) != null ? e : !1;
			return te && n;
		}, [te]), Be = g(function(e, t) {
			e ? oe.current[t.id.toString()] = e : delete oe.current[t.id.toString()];
		}, []), We = g(function(e, t) {
			var n = re.current;
			if (n) {
				var r = n.offsetParent;
				r && (r instanceof HTMLElement || u(0, 56542), o("WAWebDomScroll").scrollAt(n, r, t).then(e));
			}
		}, []), qe = g(function(e) {
			var t;
			Re() ? L === 0 ? t = ce : L === 1 && (t = de) : t = se, t && E && e !== !0 && fe({ preventScroll: !0 });
		}, [
			Re,
			E,
			L,
			fe
		]), Ue = g(function() {
			var e = T.map(function(e) {
				return e.id.toString();
			});
			o("WAWebReactionsUtils").lastMessageReactionChange(e), o("WAWebMessageUiUtils").getLegacyAlbumRowAriaLabel(T).then(me).catch(function() {});
		}, [T, me]);
		C(l, function() {
			return {
				getContainerElement: function() {
					return re.current;
				},
				props: p,
				refAlbumComponents: oe.current,
				isGroupedSticker: Re
			};
		});
		var Ve = T[0], He = o("WAWebMsgGetters").getIsSentByMe(Ve), Ge = o("WAWebMsgGetters").getIsGroupMsg(Ve), ze = h(r("WAWebChatThemeModeContext")), je = ze.isVibrant, Ke = o("WAWebChatThemeGatingUtils").shouldApplyVibrantOverride({
			isVibrant: je,
			isSentByMe: He,
			isNotification: !1
		}), Qe = Oe(), Xe = T.length > o("WAWebMessageListAlbums").ALBUM_MIN_SIZE ? T.length - o("WAWebMessageListAlbums").ALBUM_MIN_SIZE + 1 : null, Ye = o("WAWebDisplayType").isWideDisplay(R), Je = o("WAWebAppContext.react").useAppContext(), Ze = Je.rightDrawerOpen, et = Re(), tt = !Ye && (x === o("WAWebMessagePosition").MsgPosition.FRONT || x === o("WAWebMessagePosition").MsgPosition.SINGLE || et), nt = Ge && !He && !!tt && R === o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION && !$ && ((a = Ve.senderObj) == null ? void 0 : a.id) != null && M, rt = nt ? _.jsx(r("WAWebGroupChatProfilePicture.react"), {
			userContact: Ve.senderObj,
			chatWid: o("WAWebFrontendMsgGetters").getChat(Ve.unsafe()).id
		}) : null, ot = et && tt && (He || !Ge), at = o("WAWebClassnames").classnamesConvertMeToStylexPlease({
			0: "x78zum5 xdt5ytf x1hx0egp x1h3r9g6 x1ld4j5a x1q6425o x1h2wzp9 x13bx8za xgmf7it xcjqink xg7f59e xxfb629 x141l45o x1n33gsf xa25jmb xg5uraw xt5wqpu x1utqab1 x1ijczrz xqxqsie x10amw33 x1cy8zhl",
			8: "x78zum5 xdt5ytf x1hx0egp x1wxbj4f xds8fti xh1vicy x1rzuvji x1cy8zhl",
			4: "x78zum5 xdt5ytf x1hx0egp x1h3r9g6 x1ld4j5a x1q6425o x1h2wzp9 x13bx8za xgmf7it xcjqink xg7f59e xxfb629 x141l45o x1n33gsf xa25jmb xg5uraw xt5wqpu x1utqab1 x1ijczrz xqxqsie x10amw33 xuk3077",
			12: "x78zum5 xdt5ytf x1hx0egp x1wxbj4f xds8fti xh1vicy x1rzuvji xuk3077",
			2: "x78zum5 xdt5ytf x1hx0egp x1cy8zhl xvc5jky x11t971q x18b33ah x1c1uobl xyri2b x1yuel0x",
			10: "x78zum5 xdt5ytf x1hx0egp x1cy8zhl xvc5jky x11t971q x18b33ah x1c1uobl xyri2b x1yuel0x",
			6: "x78zum5 xdt5ytf x1hx0egp xuk3077 xvc5jky x11t971q x18b33ah x1c1uobl xyri2b x1yuel0x",
			14: "x78zum5 xdt5ytf x1hx0egp xuk3077 xvc5jky x11t971q x18b33ah x1c1uobl xyri2b x1yuel0x",
			1: "x78zum5 xdt5ytf x1hx0egp x1cy8zhl x14hj8or xfwifpm",
			9: "x78zum5 xdt5ytf x1hx0egp x1cy8zhl x14hj8or xfwifpm",
			5: "x78zum5 xdt5ytf x1hx0egp xuk3077 x14hj8or xfwifpm",
			13: "x78zum5 xdt5ytf x1hx0egp xuk3077 x14hj8or xfwifpm",
			3: "x78zum5 xdt5ytf x1hx0egp x1cy8zhl xvc5jky x11t971q x18b33ah x1yuel0x x14hj8or xfwifpm",
			11: "x78zum5 xdt5ytf x1hx0egp x1cy8zhl xvc5jky x11t971q x18b33ah x1yuel0x x14hj8or xfwifpm",
			7: "x78zum5 xdt5ytf x1hx0egp xuk3077 xvc5jky x11t971q x18b33ah x1yuel0x x14hj8or xfwifpm",
			15: "x78zum5 xdt5ytf x1hx0egp xuk3077 xvc5jky x11t971q x18b33ah x1yuel0x x14hj8or xfwifpm"
		}[!o("WAWebChatGetters").getIsGroup(o("WAWebFrontendMsgGetters").getChat(Ve.unsafe())) << 3 | !!He << 2 | !!Ye << 1 | !!(Ze && Ye) << 0], (i = {}, i[o("WAWebKeyboardListHotKeys.react").LIST_FOCUSABLE_ITEM_CLASS_NAME] = E, i), "x1n2onr6", {
			0: "",
			1: "x1klvx2g xahtqtb"
		}[(R !== o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT) << 0], (m || (m = r("stylex")))(A && o("WAWebGroupHistoryGating").isGroupHistoryReceiverEnabled() && S.groupHistoryMessageRow, A && o("WAWebGroupHistoryGating").isGroupHistoryReceiverEnabled() && (O ? S.groupHistoryMessageRowDark : S.groupHistoryMessageRowLight)), "xscbp6u", {
			0: "",
			1: "xa0aww2"
		}[((x === o("WAWebMessagePosition").MsgPosition.FRONT || x === o("WAWebMessagePosition").MsgPosition.MID) && !Ye) << 0]), it = (!He || Ye) && Ge || F != null && o("WAWebNewsletterGatingUtils").isNewsletterAdminProfilesReceiverEnabled(), lt;
		if (it) {
			var st = {
				0: "xyqdw3p xs9asl8 x25sj25",
				8: "x1ew7x2d x1bczwif xu342n7 x16pgt24 xelbjmh x1b9z3ur x1rg5ohu x13nahy2 x1iorvi4 x2vl965 xg8j3zb x7coems",
				4: "xyqdw3p xs9asl8 x25sj25 x1liijdw x193iq5w x13sqnt3",
				12: "x1ew7x2d xu342n7 x16pgt24 xelbjmh x1b9z3ur x1rg5ohu x1iorvi4 x2vl965 xg8j3zb x7coems x1liijdw x193iq5w x13sqnt3",
				2: "xyqdw3p xs9asl8 x25sj25 x1g5lz36",
				10: "x1bczwif xu342n7 x16pgt24 xelbjmh x1b9z3ur x1rg5ohu x13nahy2 x1iorvi4 x2vl965 xg8j3zb x7coems x1g5lz36",
				6: "xyqdw3p xs9asl8 x25sj25 x1liijdw x193iq5w x13sqnt3 x1g5lz36",
				14: "xu342n7 x16pgt24 xelbjmh x1b9z3ur x1rg5ohu x1iorvi4 x2vl965 xg8j3zb x7coems x1liijdw x193iq5w x13sqnt3 x1g5lz36",
				1: "xyqdw3p x25sj25 x18d9i69",
				9: "x1ew7x2d x1bczwif xu342n7 x16pgt24 xelbjmh x1b9z3ur x1rg5ohu x13nahy2 x1iorvi4 x2vl965 x7coems x18d9i69",
				5: "xyqdw3p x25sj25 x1liijdw x193iq5w x13sqnt3 x18d9i69",
				13: "x1ew7x2d xu342n7 x16pgt24 xelbjmh x1b9z3ur x1rg5ohu x1iorvi4 x2vl965 x7coems x1liijdw x193iq5w x13sqnt3 x18d9i69",
				3: "xyqdw3p x25sj25 x1g5lz36 x18d9i69",
				11: "x1bczwif xu342n7 x16pgt24 xelbjmh x1b9z3ur x1rg5ohu x13nahy2 x1iorvi4 x2vl965 x7coems x1g5lz36 x18d9i69",
				7: "xyqdw3p x25sj25 x1liijdw x193iq5w x13sqnt3 x1g5lz36 x18d9i69",
				15: "xu342n7 x16pgt24 xelbjmh x1b9z3ur x1rg5ohu x1iorvi4 x2vl965 x7coems x1liijdw x193iq5w x13sqnt3 x1g5lz36 x18d9i69"
			}[!!et << 3 | !!Ye << 2 | !!He << 1 | !!(!et && o("WAWebMsgSelectors").showForwarded(T[0])) << 0];
			lt = _.jsx("div", {
				className: st,
				children: _.jsx(r("WAWebMessageAuthor.react"), {
					msg: T[0],
					contact: T[0].senderObj,
					albumId: f,
					displayType: R
				})
			});
		}
		var ut = o("WAWebClassnames").classnamesConvertMeToStylexPlease(m(S.message, o("WAWebABProps").getABPropConfigValue("wa_web_highlight_me_mention") && S.messageHighlightMention, et && S.messageTransparent, z && te && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocusPersistent, A && o("WAWebGroupHistoryGating").isGroupHistoryReceiverEnabled() && S.groupHistoryMessage, Ke && o("WAWebVibrantOutgoingOverrides.stylex").vibrantOutgoingLiteralStyles.root)), ct = !et, dt = o("WAWebClassnames").classnamesConvertMeToStylexPlease(m(ct && S.messageBackground, ct && !He && S.messageBackgroundIncoming, ct && He && S.messageBackgroundOutgoing, ct && tt && !He && S.bgTailFlatTopLeft, ct && tt && He && S.bgTailFlatTopRight, ct && S.hasBorderBox, S.albumBubbleContainer, Ye && S.albumAnnouncementBubbleContainer), m(Ke && o("WAWebVibrantOutgoingOverrides.stylex").vibrantOutgoingTheme)), mt;
		if (tt) {
			var pt = o("WAWebWrapperGetTailIcon").getTailIcon(He);
			mt = _.jsx(pt, {
				xstyle: [
					S.tail,
					He ? S.tailColorOutgoing : S.tailColorIncoming,
					He ? S.tailRight : S.tailLeft,
					o("WAWebStylesEnv").hasSafariFix && (He ? S.tailRightSafari : S.tailLeftSafari),
					ot && S.tailHidden
				],
				containerRef: ue,
				"aria-hidden": !0
			});
		}
		var _t = [];
		if (o("WAWebMsgActionCapability").canQuickForwardMsg(Ve.unsafe())) {
			var ft = _.jsx(o("WAWebRound.react").Round, {
				label: s._(
					/*BTDS*/
					""
				),
				theme: o("WAWebRound.react").RoundTheme.QuickActionRefreshed,
				onClick: function() {
					he(!1);
				},
				children: _.jsx(r("WDSIconIcFastForward.react"), {
					directional: !0,
					xstyle: S.svgColorRefreshed,
					height: 20,
					width: 20,
					testid: "forward-refreshed"
				})
			});
			_t.push(ft);
		}
		var gt = r("compactMap")(T, function(e) {
			return o("WAWebFrontendMsgGetters").getAsAlbumAsset(e.unsafe());
		}), ht = gt.some(function(e) {
			return e.hasReaction === !0;
		}), yt;
		(V || W || Qe) && (yt = _.jsx(r("WAWebMessageMenu.react"), {
			msg: Ve.unsafe(),
			hasAuthor: it,
			ref: ae,
			onToggle: function(t) {
				Fe();
			},
			role: "button",
			ariaLabel: s._(
				/*BTDS*/
				""
			),
			tabIndex: 0,
			displayType: R,
			isMenuOpen: !!W
		}, "icon-context"));
		var Ct;
		W ? Ct = "none" : o("WAWebFrontendMsgGetters").getIsRTL(Ve) ? Ct = "pop-fast-reverse" : Ct = "pop-fast";
		var bt = s._(
			/*BTDS*/
			"",
			[s._param("checkbox-state", Q > 0 ? "selected" : "unselected")]
		), vt = $ ? _.jsx(r("WAWebMessageCheckbox.react"), {
			checked: Q > 0,
			theme: Q > 0 && Q < T.length ? o("WAWebCheckBox.react").CheckboxTheme.PARTIAL : void 0,
			onClick: function(t) {
				ge({ event: t });
			},
			ariaLabel: bt
		}) : null, St;
		if (k && (St = _.jsx(o("WAWebWrapperListeners.react").WhileFocusedListener, { parent: {
			scrollMsg: We,
			highlight: qe
		} })), et) return _.jsx(r("WAWebMessageAlbumWrapperGroupedSticker.react"), {
			msgs: T,
			albumId: f,
			albumWrapperClass: at,
			containerClass: ut,
			tail: mt,
			groupProfilePicture: rt,
			author: lt,
			selected: vt,
			selectable: $,
			selectedMessages: P,
			menuTransition: Ct,
			isWide: Ye,
			isFocusedAlbum: k,
			focusedMsgIndex: L,
			isAlbumWrapperKeyboardFocused: Qe,
			displayType: R,
			albumWrapperRef: re,
			leftStickerBubbleRef: ce,
			rightStickerBubbleRef: de,
			handleSelectClick: ge,
			handleSelectChange: Le,
			handleOpenForwardFlow: he,
			handleOpenDeleteFlow: Ie,
			handleReactionChange: Ue,
			handleModalClosed: ve,
			scrollMsg: We,
			setIsFocused: j
		});
		gt.length !== T.length && o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
			"Only ",
			"/",
			" were valid album messages"
		])), gt.length, T.length).sendLogs("invalid-album-grid");
		var Rt = null;
		if (gt.length > 0) {
			var Lt = gt.map(function(e) {
				return e.id.toString();
			});
			Rt = _.jsx(r("WAWebAddOnBubblesContainer.react"), {
				isOutgoingMsg: He,
				displayType: R,
				hasReaction: ht,
				onDetailsPaneClosed: ve,
				parentIds: Lt
			});
		}
		var Et = gt.length > 0 ? _.jsx(o("WAWebMsgSendFailIcon.react").MsgSendFailIcon, {
			msgs: gt,
			showForMessages: !1,
			showForAddOns: !0,
			displayType: o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION
		}) : null, kt = gt.length > o("WAWebMessageListAlbums").ALBUM_MIN_SIZE ? gt[0] : null, It = o("WAWebMsgSelectors").showForwarded(T[0]) ? _.jsx(r("WAWebMessageForwardedIndicator.react"), {
			msg: T[0].unsafe(),
			className: {
				0: "xyqdw3p xg8j3zb x25sj25 xyri2b",
				1: "xg8j3zb x25sj25 xyri2b xexx8yu"
			}[!!it << 0]
		}) : null, Tt = _.jsxs("div", {
			className: at,
			"data-id": f,
			"data-testid": "image-album",
			ref: re,
			"aria-label": J,
			onFocus: function() {
				j(!0);
			},
			onBlur: function() {
				j(!1);
			},
			tabIndex: -1,
			children: [
				_.jsx(r("WAWebVelocityTransitionGroup"), {
					transitionName: "delay-leave",
					children: vt
				}),
				_.jsxs("div", {
					className: ut,
					role: "group",
					ref: ie,
					onContextMenu: Ae,
					onMouseOver: pe,
					onFocus: pe,
					onMouseDown: _e,
					onMouseUp: pe,
					onMouseLeave: _e,
					children: [
						mt,
						rt,
						_.jsxs("div", {
							className: dt,
							ref: se,
							children: [
								lt,
								It,
								_.jsx("div", babelHelpers.extends({}, {
									0: { className: "xrvj5dj x3qb07v x1p9eum2 x1cdetwm xdduh5l xezivpi" },
									1: { className: "xrvj5dj x3qb07v x1p9eum2 xu318pe x145dklv x14atkfc" }
								}[!!Ye << 0], { children: T.slice(0, o("WAWebMediaAlbumGridConstants").ALBUM_GRID_MAX_THUMBNAIL).map(function(e, t) {
									var n = t === o("WAWebMediaAlbumGridConstants").ALBUM_GRID_MAX_THUMBNAIL - 1 ? {
										numAdditionalMedia: Xe,
										zoomMsg: kt
									} : null;
									return _.jsx(r("WAWebMediaAlbumGrid.react"), babelHelpers.extends({
										msg: r("nullthrows")(o("WAWebFrontendMsgGetters").getAsAlbumAsset(e.unsafe())),
										albumMsgs: gt,
										albumPosition: o("WAWebMediaAlbumGridConstants").ALBUM_GRID_POSITIONS[t % o("WAWebMediaAlbumGridConstants").ALBUM_GRID_MAX_THUMBNAIL],
										isMsgVisible: I,
										displayType: R,
										ref: function(n) {
											Be(n, e);
										},
										albumTheme: o("WAWebTypesMedia").DisplayTheme.Album,
										currentAlbumMessageIndex: t
									}, n), e.id.toString());
								}) })),
								_.jsx(r("WAWebForwardedNewsletterMessageInfoActionButton.react"), {
									msg: T[0].unsafe(),
									isAlbum: !0
								})
							]
						}),
						_.jsx(r("WAWebVelocityTransitionGroup"), {
							transitionName: Ct,
							children: yt
						}),
						_.jsx("div", {
							ref: le,
							className: "x10l6tqk xyc4j8s xceh6e4"
						}),
						Et,
						_.jsx(r("WAWebWrapperMessageActionButtonsRow"), {
							isOutgoingMsg: He,
							isMsgGallery: !1,
							hasReaction: ht,
							messageActionButtons: _t,
							positionLeft: He,
							positionRight: !He
						})
					]
				}),
				Rt,
				_.jsx(r("WAWebReactionsListeners.react"), {
					msgIds: T.map(function(e) {
						return e.id.toString();
					}),
					onReactionChange: Ue
				}),
				$e,
				Me,
				St,
				_.jsx(o("WAWebWrapperListeners.react").SelectionListener, {
					parent: { onSelectChange: Le },
					msgId: T[0].id.toString(),
					selectedMessages: P
				})
			]
		});
		return _.jsx(r("WAWebKeyboardRotateFocusArrows.react"), {
			role: "row",
			children: Tt
		});
	}
	R.displayName = R.name + " [from " + i.id + "]", l.default = R;
}), 226);
