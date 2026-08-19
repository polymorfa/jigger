__d("WAWebMessageVcard.react", [
	"fbt",
	"WALogger",
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebAddContactToGroupEligibility",
	"WAWebAddContactToGroupFlowLoadable",
	"WAWebBizBotLogging",
	"WAWebBizCtwaContext.react",
	"WAWebBotBaseGating",
	"WAWebBotProfileCollection",
	"WAWebChatEntryPoint",
	"WAWebCmd",
	"WAWebComposeBoxActions",
	"WAWebConfirmPopup.react",
	"WAWebContactCollection",
	"WAWebContactEditUtils",
	"WAWebContactLogging",
	"WAWebContactManagementGating",
	"WAWebContactUtils",
	"WAWebContactViewer.react",
	"WAWebDisplayType",
	"WAWebDrawerManager",
	"WAWebEmojiText.react",
	"WAWebFbtAppName",
	"WAWebFbtCommon",
	"WAWebFileSaver",
	"WAWebFindChatAction",
	"WAWebFormatConfiguration",
	"WAWebFrontendMsgGetters",
	"WAWebInfoFlowLoadable",
	"WAWebInitialsFromNameUtils",
	"WAWebKeyboardTabUtils",
	"WAWebL10N",
	"WAWebMediaMissingModal.react",
	"WAWebMediaTypes",
	"WAWebMessageAuthor.react",
	"WAWebMessageBubbleActions.react",
	"WAWebMessageBubbleHiddenText.react",
	"WAWebMessageComponentContext.react",
	"WAWebMessageLogQplEvents",
	"WAWebMessageMeta.react",
	"WAWebModalManager",
	"WAWebMsgGetters",
	"WAWebMsgType",
	"WAWebNonEmptyString",
	"WAWebNoop",
	"WAWebProfilePicThumbCollection",
	"WAWebQbmMessageLevelActionEvent",
	"WAWebQueryExistsJob",
	"WAWebStateUtils",
	"WAWebStringTruncation",
	"WAWebText.react",
	"WAWebUim",
	"WAWebUseBusinessProfile.react",
	"WAWebUserPrefsMeUser",
	"WAWebUsernameGatingUtils",
	"WAWebUsernameTypes",
	"WAWebVcardGetNameFromParsed",
	"WAWebVcardParsingUtils",
	"WAWebVcardWidChoiceModal.react",
	"WAWebWamEnumMessageActionEntryPoint",
	"WAWebWamEnumMessageLevelAction",
	"WAWebWamEnumProfileEntryPoint",
	"WDSButton.react",
	"WDSIconIcDownload.react",
	"WDSIconIcPersonAdd.react",
	"WDSIconWdsIcAiFilled.react",
	"WDSIconWdsIcChat.react",
	"WDSProfilePhoto.react",
	"err",
	"fbs",
	"react",
	"react-compiler-runtime",
	"useWAWebDefaultProfileColors",
	"useWAWebForceUpdate",
	"useWAWebListener",
	"useWAWebModelValues",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = c, p = m.useContext, _ = m.useEffect, f = m.useState, g = "xmeooa7-B", h = {
		subtitleContainer: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			$$css: !0
		},
		nameEmoji: {
			verticalAlign: "xg49k01",
			$$css: !0
		},
		icon: {
			color: "xhslqc4",
			$$css: !0
		}
	};
	function y(t) {
		"use no forget";
		var n, a, i, l = t.downloadMedia, c = t.mediaStage, m = t.msg, g = t.onMessageClick, y = t.vcard, S = o("useWAWebMsgValues").useMsgValues(t.msg.id, [
			(a = o("WAWebMsgGetters")).getVcardFormattedName,
			(i = o("WAWebFrontendMsgGetters")).getRtl,
			i.getDir,
			a.getIsSentByMe,
			a.getIsGroupMsg,
			i.getSenderObj,
			a.getIsVcardOverMmsDocument,
			a.getType
		]), R = S[0], E = S[1], T = S[2], D = S[3], x = S[4], $ = S[5], P = S[6], N = S[7], M = i.getChat(m.unsafe()), w = o("WAWebVcardParsingUtils").vcardPhoneNumberWids(y), A = o("WAWebVcardParsingUtils").vcardLidWid(y), F = !!y && o("WAWebVcardParsingUtils").vcardIsBiz(y), O = null;
		F && o("WAWebBotBaseGating").isBizBot3pEnabled() && (O = w.length > 0 ? w[0] : A);
		var B = o("WAWebUseBusinessProfile.react").useBusinessProfile(O, ["isBizBot3p"]), W = (B == null ? void 0 : B.isBizBot3p) === !0, q = o("WAWebContactUtils").getContactDataFromVcard(y), U = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
		o("useWAWebListener").useListener(o("WAWebContactCollection").ContactCollection, ["add", "remove"], function() {
			o("WAWebContactManagementGating").contactManagementEnabled() && q && U();
		});
		var V = p(o("WAWebMessageComponentContext.react").MessageComponentContext), H = V.onSaveContact, G = N === o("WAWebMsgType").MSG_TYPE.VCARD ? R : null, z = y ? o("WAWebVcardGetNameFromParsed").vcardGetNameFromParsed(y) : null, j = o("WAWebNonEmptyString").asMaybeNonEmptyString(G) != null || o("WAWebNonEmptyString").asMaybeNonEmptyString(z) != null, K = A != null && !j ? (n = o("WAWebContactCollection").ContactCollection.get(A)) == null ? void 0 : n.username : null, Q = o("WAWebUsernameTypes").isPresentUsername(K) ? o("WAWebUsernameTypes").displayUsername(K) : null, X = f(null), Y = X[0], J = X[1];
		_(function() {
			if (!(A == null || j || Q != null)) {
				var t = !1;
				return o("WAWebQueryExistsJob").queryWidUsernameExists(A).then(function(e) {
					var n = o("WAWebUsernameTypes").asMaybeUsername(e == null ? void 0 : e.username);
					!t && n != null && J(o("WAWebUsernameTypes").displayUsername(n));
				}).catch(function(t) {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[WAWebMessageVcard] vCard title username resolution failed"]))).catching(t instanceof Error ? t : r("err")(String(t))).sendLogs("vcard-title-username-query-failed", { sampling: .01 });
				}), function() {
					t = !0;
				};
			}
		}, [
			A,
			j,
			Q
		]);
		var Z = Q != null ? Q : Y, ee = function(t, n) {
			var e = function(t, n) {
				var e = F && n;
				e && o("WAWebMessageLogQplEvents").qplStartProfileView("VCard");
				var r = F;
				o("WAWebFindChatAction").findOrCreateLatestChat(t, "messageVCard", { forceUsync: r }).then(function(t) {
					var r = t.chat;
					g == null || g(), o("WAWebModalManager").ModalManager.close(), o("WAWebCmd").Cmd.openChatFromUnread({
						chat: r,
						chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Vcard
					}).then(function(t) {
						if (!t) {
							e && o("WAWebMessageLogQplEvents").qplEndProfileView(3);
							return;
						}
						n && o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
							descriptorType: "info_flow",
							chat: r,
							profileEntryPoint: o("WAWebWamEnumProfileEntryPoint").PROFILE_ENTRY_POINT.CONTACT_CARD
						} : d.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
							chat: r,
							profileEntryPoint: o("WAWebWamEnumProfileEntryPoint").PROFILE_ENTRY_POINT.CONTACT_CARD
						}, "info-" + r.id.toString()), {
							transition: "slide-left",
							uim: o("WAWebUim").UIM.Manager.getTop(),
							focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
						}), o("WAWebComposeBoxActions").ComposeBoxActions.focus(r);
					}).catch(function() {
						e && o("WAWebMessageLogQplEvents").qplEndProfileView(3);
					});
				}).catch(function() {
					e && o("WAWebMessageLogQplEvents").qplEndProfileView(3);
				});
			};
			!o("WAWebUsernameGatingUtils").usernameContactUiVcardEnabled() || !t.isLid() ? e(t, n) : o("WAWebQueryExistsJob").queryWidUsernameExists(t).then(function(r) {
				(r == null ? void 0 : r.username) == null ? L() : e(t, n);
			});
		}, te = function(t) {
			y && (w.length > 1 ? o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebVcardWidChoiceModal.react"), {
				icon: d.jsx(r("WDSIconWdsIcChat.react"), {
					directional: !0,
					xstyle: h.icon
				}),
				vcard: y,
				onCancel: o("WAWebModalManager").closeModalManager,
				onSelect: function(n) {
					return ee(n, t);
				}
			})) : A ? ee(A, t) : w.length > 0 && ee(w[0], t));
		}, ne = function() {
			q && (q != null && q.lid ? o("WAWebQueryExistsJob").queryWidUsernameExists(q == null ? void 0 : q.lid).then(function(e) {
				(e == null ? void 0 : e.username) == null ? L() : H ? H(q) : o("WAWebContactEditUtils").openContactEditDrawer(q, o("WAWebContactLogging").ContactSourceType.VCard);
			}) : H ? H(q) : o("WAWebContactEditUtils").openContactEditDrawer(q, o("WAWebContactLogging").ContactSourceType.VCard), o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
				msg: m.unsafe(),
				chat: M,
				messageLevelAction: o("WAWebWamEnumMessageLevelAction").MESSAGE_LEVEL_ACTION.ADD_CONTACT,
				messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint").MESSAGE_ACTION_ENTRY_POINT.CHATLIST
			}));
		}, re = function() {
			if (y) {
				var e = A != null ? A : w[0];
				if (o("WAWebUsernameGatingUtils").usernameContactUiVcardEnabled() && e != null) {
					var t = e.isLid() ? o("WAWebQueryExistsJob").queryWidUsernameExists(e) : o("WAWebQueryExistsJob").queryWidExists(e);
					t.then(function(e) {
						if (A != null && (e == null ? void 0 : e.username) == null) {
							L();
							return;
						}
						o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebContactViewer.react"), {
							vcard: y,
							onSaveContact: ne,
							username: e == null ? void 0 : e.username
						}));
					}).catch(function(e) {
						o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[WAWebMessageVcard] usync query failed"]))).catching(e instanceof Error ? e : r("err")(String(e))).sendLogs("vcard-username-query-failed", { sampling: .01 }), L();
					});
				} else o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebContactViewer.react"), {
					vcard: y,
					onSaveContact: ne
				}));
			} else o("WAWebModalManager").ModalManager.open(d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				tsNavigationData: {
					surface: "unknown",
					viewName: "vcard-download"
				},
				onCancel: o("WAWebModalManager").closeModalManager,
				onOK: function() {
					o("WAWebModalManager").ModalManager.close(), o("WAWebFileSaver").FileSaver.initDownload(o("WAWebStateUtils").unproxy(m.unsafe()));
				},
				okText: s._(
					/*BTDS*/
					""
				),
				cancelText: s._(
					/*BTDS*/
					""
				),
				title: s._(
					/*BTDS*/
					""
				),
				children: s._(
					/*BTDS*/
					"",
					[s._implicitParam("=m1", d.jsx(o("WAWebFbtAppName").WAWebAppShortName, { children: s._(
						/*BTDS*/
						""
					) }))]
				)
			}));
		}, oe = function(t, n, a) {
			var e = {
				label: r("WAWebFbtCommon")("Message"),
				onClick: function() {
					te(!1), W && o("WAWebBizBotLogging").logBizBot3pContactCardJourneyEvent("message_click");
				},
				title: o("WAWebNonEmptyString").asMaybeNonEmptyString(t) != null ? s._(
					/*BTDS*/
					"",
					[s._param("author", t)]
				) : r("WAWebFbtCommon")("Message"),
				testid: "message-author-bubble-action"
			};
			if (n === !0) {
				var i = {
					label: s._(
						/*BTDS*/
						""
					),
					onClick: function(t) {
						te(!0), o("WAWebBizBotLogging").logBizBot3pContactCardJourneyEvent("view_ai_click");
					}
				};
				return [e, i];
			}
			if (F === !0) {
				var l = {
					label: s._(
						/*BTDS*/
						""
					),
					onClick: function(t) {
						return te(!0);
					}
				};
				return [e, l];
			}
			if (o("WAWebContactManagementGating").contactManagementEnabled() && (q == null ? void 0 : q.isExistingContact) === !1) {
				var u = {
					label: s._(
						/*BTDS*/
						""
					),
					onClick: ne
				};
				return [e, u];
			}
			if (a === !0) return [e];
			var c = k(y), d = c == null ? null : o("WAWebContactCollection").ContactCollection.get(c);
			if (d == null || !o("WAWebAddContactToGroupEligibility").isContactAddableToGroup(d, M)) return [e];
			var m = {
				label: s._(
					/*BTDS*/
					""
				),
				onClick: function() {
					I(y, M);
				},
				testid: "add-to-group-bubble-action"
			};
			return [e, m];
		}, ae = function() {
			o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebMediaMissingModal.react"), { msg: m.unsafe() }));
		}, ie, le, se;
		if (y) {
			var ue, ce, de;
			ie = o("WAWebStringTruncation").truncateAtCodepoints((ue = (ce = (de = o("WAWebNonEmptyString").asMaybeNonEmptyString(G)) != null ? de : o("WAWebNonEmptyString").asMaybeNonEmptyString(z)) != null ? ce : Z) != null ? ue : r("fbs")._(
				/*BTDS*/
				""
			).toString(), 120);
			var me = w.find(function(e) {
				return e.isBot();
			});
			if (me != null) {
				var pe, _e = (pe = o("WAWebBotProfileCollection").BotProfileCollection.get(me)) == null ? void 0 : pe.name;
				_e != null && (ie = _e), se = d.jsxs("div", {
					className: "x78zum5 x1nxh6w3 x6s0dn4",
					children: [s._(
						/*BTDS*/
						""
					), d.jsx(r("WDSIconWdsIcAiFilled.react"), {
						width: 13,
						height: 13,
						colorName: "contentDeemphasized"
					})]
				});
			}
			var fe = A != null;
			if (fe && o("WAWebUsernameGatingUtils").usernameContactUiVcardEnabled() || w.length > 0) {
				var ge = o("WAWebUserPrefsMeUser").isMeAccount(A) || w.some(function(e) {
					return o("WAWebUserPrefsMeUser").isMeAccount(e);
				});
				le = d.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, { items: oe(ie, me != null || W, ge) });
			}
		}
		var he = o("WAWebDisplayType").isWideDisplay(t.displayType), ye = t.quotedMsg ? d.jsx("div", babelHelpers.extends({}, {
			0: { className: "x1198e8h x1lxpwgx xwoyzhm xw01apr" },
			1: { className: "x1lxpwgx xwoyzhm xw01apr xdj266r" }
		}[!!t.displayAuthor << 0], { children: t.quotedMsg })) : null, Ce = t.displayAuthor ? d.jsx("div", babelHelpers.extends({}, {
			0: { className: "xs9asl8 xzueoph xso031l x1q0q8m5 x120ee7l" },
			1: { className: "xs9asl8 xso031l x120ee7l xat24cr x1sy0etr" }
		}[(ye != null) << 0], { children: d.jsx(r("WAWebMessageAuthor.react"), {
			msg: m,
			contact: $,
			displayType: t.displayType
		}) })) : null, be = t.displayType === o("WAWebDisplayType").DISPLAY_TYPE.MSG_INFO || t.displayType === o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS || t.displayType === o("WAWebDisplayType").DISPLAY_TYPE.CONTACT_CARD || t.displayType === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY, ve = {
			0: "x9f619 x3orp4s x1yrsyyn x1bjonze xwib8y2 x7coems",
			2: "x9f619 x1yrsyyn x1bjonze xwib8y2 x7coems xh8yej3 x13nahy2",
			1: "x9f619 x1yrsyyn x1bjonze xwib8y2 x7coems x1yuel0x",
			3: "x9f619 x1yrsyyn x1bjonze xwib8y2 x7coems x13nahy2 x1yuel0x"
		}[!!be << 1 | !!he << 0], Se = N === o("WAWebMsgType").MSG_TYPE.DOCUMENT && !!P && c === o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING, Re = Se || !t.placeholder && (y || M.isTrusted()), Le = function() {
			if (Re) {
				if (Se) {
					ae();
					return;
				}
				if (W) {
					te(!0), o("WAWebBizBotLogging").logBizBot3pContactCardJourneyEvent("card_click");
					return;
				}
				re();
			}
		}, Ee = !0, ke = o("WAWebFormatConfiguration").Compatibility({
			selectable: Ee,
			emojiXstyle: h.nameEmoji
		}), Ie = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.getThumbnailWidFromVcard(y), Te;
		t.placeholder ? Te = d.jsx(C, {
			downloadMedia: l,
			mediaStage: c
		}) : Te = d.jsx(b, {
			name: ie != null ? ie : "",
			thumbnail: o("WAWebVcardParsingUtils").vcardThumbnail(y),
			wid: Ie
		});
		var De;
		if (t.placeholder === !0) De = d.jsx(v, { mediaStage: c });
		else {
			var xe = d.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: ie,
				element: "div",
				className: "x6ikm8r x10wlt62 x1f6kntn x1s688f x19v9tvf x14ug900 xlyipyv xuxw1ft",
				selectable: Ee,
				dirMismatch: E !== r("WAWebL10N").isRTL(),
				direction: T,
				formatters: ke
			});
			De = xe, W && (De = d.jsxs("div", { children: [xe, d.jsx(o("WAWebText.react").WAWebTextMuted, {
				xstyle: h.subtitleContainer,
				color: "secondary",
				children: s._(
					/*BTDS*/
					""
				)
			})] }));
		}
		return t.placeholder && (c === o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING ? le = d.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, { items: oe().map(function(e) {
			return babelHelpers.extends({}, e, { onClick: ae });
		}) }) : le = d.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
			items: [],
			placeholder: !0
		})), d.jsxs(r("WAWebMessageBubbleHiddenText.react"), {
			className: ve,
			contact: $,
			msg: m.unsafe(),
			children: [
				Ce,
				ye,
				d.jsx(r("WAWebBizCtwaContext.react"), {
					msg: m.unsafe(),
					wrapperClass: "x1198e8h x1lxpwgx xahult9 xw01apr"
				}),
				d.jsxs("div", {
					className: "x1n2onr6 x78zum5 x6s0dn4 xng8ra x1xegmmw xdzw4kq",
					"data-testid": "vcard-msg",
					role: Re ? "button" : null,
					onClick: Le,
					children: [
						d.jsx("div", {
							className: "x1okw0bk x1g6eq07",
							children: Te
						}),
						d.jsxs("div", {
							className: "x12lumcd x6ikm8r x10wlt62",
							children: [De, se]
						}),
						d.jsx("div", {
							className: "x10l6tqk x13niomq x1o583il",
							children: d.jsx(o("WAWebMessageMeta.react").Meta, { msg: m })
						})
					]
				}),
				le
			]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = o("react-compiler-runtime").c(8), n = e.downloadMedia, a = e.mediaStage;
		if (!a) {
			var i;
			return t[0] !== n ? (i = d.jsx(R, { downloadMedia: n }), t[0] = n, t[1] = i) : i = t[1], i;
		}
		switch (a) {
			case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
			case o("WAWebMediaTypes").MediaDataStage.INIT: {
				var l;
				return t[2] !== n ? (l = d.jsx(R, { downloadMedia: n }), t[2] = n, t[3] = l) : l = t[3], l;
			}
			case o("WAWebMediaTypes").MediaDataStage.FETCHING:
			case o("WAWebMediaTypes").MediaDataStage.REUPLOADING:
			case o("WAWebMediaTypes").MediaDataStage.DECRYPTING: {
				var s;
				return t[4] === Symbol.for("react.memo_cache_sentinel") ? (s = d.jsx(S, {
					animate: !0,
					type: "profileImage"
				}), t[4] = s) : s = t[4], s;
			}
			case o("WAWebMediaTypes").MediaDataStage.RESOLVED: {
				var u;
				return t[5] === Symbol.for("react.memo_cache_sentinel") ? (u = d.jsx(S, { type: "profileImage" }), t[5] = u) : u = t[5], u;
			}
			case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING: {
				var c;
				return t[6] === Symbol.for("react.memo_cache_sentinel") ? (c = d.jsx(R, { downloadMedia: r("WAWebNoop") }), t[6] = c) : c = t[6], c;
			}
			default: {
				var m;
				return t[7] === Symbol.for("react.memo_cache_sentinel") ? (m = d.jsx(S, {
					animate: !0,
					type: "profileImage"
				}), t[7] = m) : m = t[7], m;
			}
		}
	}
	function b(e) {
		var t, n = o("react-compiler-runtime").c(25), a = e.name, i = e.thumbnail, l = e.wid, s;
		n[0] !== l ? (s = l != null ? o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(l) : null, n[0] = l, n[1] = s) : s = n[1];
		var u = s, c;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (c = ["img"], n[2] = c) : c = n[2];
		var m = o("useWAWebModelValues").useOptionalModelValues(u, c), p, f;
		n[3] !== l ? (p = function() {
			l != null && o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.find(l).catch(r("WAWebNoop"));
		}, f = [l], n[3] = l, n[4] = p, n[5] = f) : (p = n[4], f = n[5]), _(p, f);
		var g;
		if (n[6] !== a || n[7] !== l) {
			var h = l != null ? o("WAWebContactCollection").ContactCollection.get(l) : null;
			g = h != null ? o("WAWebInitialsFromNameUtils").getInitialsFromContact(h) : o("WAWebInitialsFromNameUtils").getInitialsFromNames({
				name: a,
				shortName: a.split(" ")[0],
				pushname: null
			}), n[6] = a, n[7] = l, n[8] = g;
		} else g = n[8];
		var y = g, C;
		n[9] !== y.firstInitial || n[10] !== y.secondInitial ? (C = [y.firstInitial, y.secondInitial].filter(Boolean).join("") || void 0, n[9] = y.firstInitial, n[10] = y.secondInitial, n[11] = C) : C = n[11];
		var b = C, v = (t = m == null ? void 0 : m.img) != null ? t : i, S;
		n[12] !== l ? (S = l != null ? o("useWAWebDefaultProfileColors").getWDSProfilePhotoColor(l) : void 0, n[12] = l, n[13] = S) : S = n[13];
		var R;
		n[14] !== l ? (R = l != null ? o("useWAWebDefaultProfileColors").getWDSProfilePhotoCustomColor(l) : void 0, n[14] = l, n[15] = R) : R = n[15];
		var L;
		n[16] !== l ? (L = l != null ? o("useWAWebDefaultProfileColors").getProfilePhotoPlaceholderIcon(l) : void 0, n[16] = l, n[17] = L) : L = n[17];
		var E;
		return n[18] !== b || n[19] !== a || n[20] !== L || n[21] !== v || n[22] !== S || n[23] !== R ? (E = d.jsx(r("WDSProfilePhoto.react"), {
			type: "person",
			name: a,
			src: v,
			size: "medium",
			color: S,
			customColor: R,
			placeholderIcon: L,
			isDecorative: !0,
			initials: b,
			testid: "vcard_msg_avatar_photo"
		}), n[18] = b, n[19] = a, n[20] = L, n[21] = v, n[22] = S, n[23] = R, n[24] = E) : E = n[24], E;
	}
	function v(e) {
		var t = o("react-compiler-runtime").c(5), n = e.mediaStage;
		if (!n) {
			var r;
			return t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = d.jsx(S, { type: "body" }), t[0] = r) : r = t[0], r;
		}
		switch (n) {
			case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
			case o("WAWebMediaTypes").MediaDataStage.INIT: {
				var a;
				return t[1] === Symbol.for("react.memo_cache_sentinel") ? (a = d.jsx(S, { type: "body" }), t[1] = a) : a = t[1], a;
			}
			case o("WAWebMediaTypes").MediaDataStage.FETCHING:
			case o("WAWebMediaTypes").MediaDataStage.REUPLOADING:
			case o("WAWebMediaTypes").MediaDataStage.DECRYPTING: {
				var i;
				return t[2] === Symbol.for("react.memo_cache_sentinel") ? (i = d.jsx(S, {
					animate: !0,
					type: "body"
				}), t[2] = i) : i = t[2], i;
			}
			case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
			case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING: {
				var l;
				return t[3] === Symbol.for("react.memo_cache_sentinel") ? (l = d.jsx(S, { type: "body" }), t[3] = l) : l = t[3], l;
			}
			default: {
				var s;
				return t[4] === Symbol.for("react.memo_cache_sentinel") ? (s = d.jsx(S, { type: "body" }), t[4] = s) : s = t[4], s;
			}
		}
	}
	function S(e) {
		var t = o("react-compiler-runtime").c(5), n = e.animate, r = e.type, a;
		t[0] !== n || t[1] !== r ? (a = {
			0: { className: "x1525y1v x1db4oza xg0jo4d xlup9mm xrlxcrs x7g1fbw xxl59ln xmw6rta" },
			2: { className: "x1525y1v x1db4oza x1g3ev5e x3ffywh x1c9tyrk xeusxvb x1pahc9y x1ertn4p" },
			1: { className: "x1525y1v x1db4oza xg0jo4d xlup9mm xrlxcrs x7g1fbw xxl59ln xmw6rta x7ewcki x1h468ly xrp5g2y x1debuo4 x10e4vud xa4qsjk" },
			3: { className: "x1525y1v x1db4oza x1g3ev5e x3ffywh x1c9tyrk xeusxvb x1pahc9y x1ertn4p x7ewcki x1h468ly xrp5g2y x1debuo4 x10e4vud xa4qsjk" }
		}[(r === "profileImage") << 1 | !!n << 0], t[0] = n, t[1] = r, t[2] = a) : a = t[2];
		var i;
		return t[3] !== a ? (i = d.jsx("div", babelHelpers.extends({}, a)), t[3] = a, t[4] = i) : i = t[4], i;
	}
	function R(e) {
		var t = o("react-compiler-runtime").c(3), n = e.downloadMedia, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = s._(
			/*BTDS*/
			""
		), t[0] = a) : a = t[0];
		var i;
		return t[1] !== n ? (i = d.jsx(r("WDSButton.react"), {
			"aria-label": a,
			Icon: r("WDSIconIcDownload.react"),
			onPress: function() {
				n == null || n();
			},
			variant: "borderless"
		}), t[1] = n, t[2] = i) : i = t[2], i;
	}
	var L = function() {
		o("WAWebModalManager").ModalManager.open(d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "vcard-download"
			},
			onOK: o("WAWebModalManager").closeModalManager,
			children: s._(
				/*BTDS*/
				""
			)
		}));
	}, E = function(t, n) {
		var e = function(t) {
			o("WAWebContactCollection").ContactCollection.find(t).then(function(e) {
				o("WAWebModalManager").ModalManager.open(d.jsx(o("WAWebAddContactToGroupFlowLoadable").AddContactToGroupFlowLoadable, {
					contact: e,
					chat: n
				}), { transition: "modal-flow" });
			});
		};
		!o("WAWebUsernameGatingUtils").usernameContactUiVcardEnabled() || !t.isLid() ? e(t) : o("WAWebQueryExistsJob").queryWidUsernameExists(t).then(function(n) {
			(n == null ? void 0 : n.username) == null ? L() : e(t);
		});
	};
	function k(e) {
		var t, n = o("WAWebVcardParsingUtils").vcardLidWid(e);
		return n != null ? n : (t = o("WAWebVcardParsingUtils").vcardPhoneNumberWids(e)[0]) != null ? t : null;
	}
	function I(e, t) {
		var n = o("WAWebVcardParsingUtils").vcardPhoneNumberWids(e), a = o("WAWebVcardParsingUtils").vcardLidWid(e);
		n.length > 1 && e ? o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebVcardWidChoiceModal.react"), {
			icon: d.jsx(r("WDSIconIcPersonAdd.react"), { directional: !0 }),
			vcard: e,
			onCancel: o("WAWebModalManager").closeModalManager,
			onSelect: function(n) {
				return E(n, t);
			}
		})) : a ? E(a, t) : n.length > 0 && E(n[0], t);
	}
	l.default = y;
}), 226);
