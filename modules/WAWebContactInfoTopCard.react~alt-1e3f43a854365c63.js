__d("WAWebContactInfoTopCard.react", [
	"fbt",
	"WALogger",
	"WAWebABProps",
	"WAWebApiContact",
	"WAWebBizAiAgentStatusUtils",
	"WAWebBizCoexGatingUtils",
	"WAWebBotFrontendUtils",
	"WAWebBotGating",
	"WAWebBotGroupGatingUtils",
	"WAWebBotUtils",
	"WAWebCallCollection",
	"WAWebChatCollection",
	"WAWebChatEntryPoint",
	"WAWebCmd",
	"WAWebComposeBoxActions",
	"WAWebContactCollection",
	"WAWebContactGetters",
	"WAWebContactInfoNotes.react",
	"WAWebContactInfoPhoneNumberHidden.react",
	"WAWebContactManagementGating",
	"WAWebContactManagerGating",
	"WAWebContactUtils",
	"WAWebCopyPasteSelectable.react",
	"WAWebDetailImage.react",
	"WAWebDrawerSection.react",
	"WAWebEnvironment",
	"WAWebFbtCommon",
	"WAWebFindChatAction",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WAWebInitialsFromNameUtils",
	"WAWebLabelsInfoDrawerLabelWell.react",
	"WAWebLidMigrationUtils",
	"WAWebListsLabelGatingUtils",
	"WAWebMemberLabelContactInfo.react",
	"WAWebModalManager",
	"WAWebName.react",
	"WAWebNotesUtils",
	"WAWebProfilePicThumbCollection",
	"WAWebRequestPhoneNumberModal.react",
	"WAWebStatusCollection",
	"WAWebStatusGatingUtils",
	"WAWebStatusImageRing.react",
	"WAWebStatusQuotedFlowLoadable",
	"WAWebStreamModel",
	"WAWebTeeLockBadge.react",
	"WAWebText.react",
	"WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration",
	"WAWebUsernameExposedWamEvent",
	"WAWebUsernameGatingUtils",
	"WAWebUsernameTypes",
	"WAWebUsernameWorkerCompatibleGatingUtils",
	"WAWebVoipStartCall",
	"WAWebWamEnumCallFromUi",
	"WAWebWamEnumLobbyEntryPointType",
	"WAWebWamEnumOppositeVisibleIdentificationType",
	"WAWebWamEnumPnhEntryPointType",
	"WAWebWamEnumStatusRowSection",
	"WAWebWid",
	"WAWebWidFactory",
	"WAWebWidFormat",
	"WDSActionTile.react",
	"WDSActionTileGroup.react",
	"WDSFocusStateStyles",
	"WDSIconIcCall.react",
	"WDSIconIcDialpad.react",
	"WDSIconIcPersonAdd.react",
	"WDSIconIcSearch.react",
	"WDSIconIcVideocam.react",
	"WDSIconWdsIcChat.react",
	"WDSMargins.stylex",
	"WDSProfilePhoto.react",
	"WDSTooltip.react",
	"isStringNullOrEmpty",
	"react",
	"react-compiler-runtime",
	"useWAWebContactValues",
	"useWAWebDefaultProfileColors",
	"useWAWebEventTargetValue",
	"useWAWebListener",
	"useWAWebModelValues",
	"useWAWebVideoAvatarUrl",
	"useWAWebVoipIsCallingEnabledAndInited"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = c, p = m.useEffect, _ = m.useRef, f = m.useState;
	function g(e) {
		var t = o("react-compiler-runtime").c(94), n = e.contact, a = e.displayRequestPhoneNumber, i = e.isMessageYourselfChat, l = e.onContactInfoAction, u = e.onDetailImageClick, c = e.onDetailImageLoad, m = e.onOpenChatTabInContactManager, _ = e.onSaveContact, g = e.onSearchMsgs, y = e.sourceChat, C = r("useWAWebVideoAvatarUrl")(n.id), S;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (S = [o("WAWebFrontendContactGetters").getPhoneNumber, o("WAWebContactGetters").getShowBusinessCheckmarkAsPrimary], t[0] = S) : S = t[0];
		var R = o("useWAWebContactValues").useContactValues(n.id, S), L = R[0], E = R[1], k;
		if (t[1] !== n || t[2] !== L) {
			var I = L != null ? o("WAWebContactCollection").ContactCollection.get(L) : null;
			k = v({
				contact: n,
				phoneNumberContact: I
			}), t[1] = n, t[2] = L, t[3] = k;
		} else k = t[3];
		var T = k, D = T.title, x = T.type, $;
		t[4] !== n ? ($ = o("WAWebContactGetters").getIsAiHub(n), t[4] = n, t[5] = $) : $ = t[5];
		var P = $, N, M;
		t[6] !== P || t[7] !== D || t[8] !== x ? (N = function() {
			!P && D != null && x === o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.USERNAME && new (o("WAWebUsernameExposedWamEvent")).UsernameExposedWamEvent({ usernameExposureContext: "contact_info_subtitle" }).commit();
		}, M = [
			P,
			D,
			x
		], t[6] = P, t[7] = D, t[8] = x, t[9] = N, t[10] = M) : (N = t[9], M = t[10]), p(N, M);
		var w;
		t[11] !== n ? (w = o("WAWebNotesUtils").shouldEnableNotesForWid(n == null ? void 0 : n.id) && !(o("WAWebContactManagerGating").contactManagerEnabled() && o("WAWebContactManagerGating").isEligibleForCustomerFields(n)) ? d.jsx(r("WAWebContactInfoNotes.react"), { contact: n }) : null, t[11] = n, t[12] = w) : w = t[12];
		var A = w, F;
		t[13] !== n.id ? (F = o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled() && o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(n.id), t[13] = n.id, t[14] = F) : F = t[14];
		var O = F, B;
		t[15] !== n.id ? (B = n.id.isUser(), t[15] = n.id, t[16] = B) : B = t[16];
		var W = B, q;
		t[17] === Symbol.for("react.memo_cache_sentinel") ? (q = [o("WAWebContactGetters").getCalculatedStatusMute], t[17] = q) : q = t[17];
		var U = o("useWAWebContactValues").useContactValues(n.id, q), V = U[0], H;
		t[18] !== n.id || t[19] !== O || t[20] !== W ? (H = function() {
			if (!W || O || !o("WAWebStatusGatingUtils").isStatusRingOutsideChatlistEnabled()) return null;
			var e = o("WAWebStatusCollection").StatusCollection.get(n.id);
			if (e != null) return e;
			if (n.id.isRegularUser()) {
				var t = o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(n.id));
				if (t != null) {
					var r;
					return (r = o("WAWebStatusCollection").StatusCollection.get(t)) != null ? r : null;
				}
			}
			return null;
		}, t[18] = n.id, t[19] = O, t[20] = W, t[21] = H) : H = t[21];
		var G = H, z = f(G), j = z[0], K = z[1], Q;
		t[22] === Symbol.for("react.memo_cache_sentinel") ? (Q = [
			"add",
			"remove",
			"change:msgsChanged"
		], t[22] = Q) : Q = t[22];
		var X;
		t[23] !== G ? (X = function() {
			return K(G());
		}, t[23] = G, t[24] = X) : X = t[24], o("useWAWebListener").useListener(W && !O ? o("WAWebStatusCollection").StatusCollection : null, Q, X);
		var Y = j != null && !V, J;
		t[25] !== n || t[26] !== i || t[27] !== E ? (J = d.jsx(o("WAWebName.react").Name, {
			testid: "contact-info-subtitle",
			contact: n,
			showBusinessCheckmark: E,
			showMessageYourselfName: i,
			useLiftMeUp: !1,
			selectable: !0,
			breakWord: !0,
			checkmarkLarge: !0,
			unknownUserLogContext: "contact_info"
		}), t[25] = n, t[26] = i, t[27] = E, t[28] = J) : J = t[28];
		var Z = J, ee;
		t[29] === Symbol.for("react.memo_cache_sentinel") ? (ee = s._(
			/*BTDS*/
			""
		), t[29] = ee) : ee = t[29];
		var te = ee, ne;
		t[30] !== P || t[31] !== D ? (ne = P ? o("WAWebBizAiAgentStatusUtils").getAiHubSubtitle() : D, t[30] = P, t[31] = D, t[32] = ne) : ne = t[32];
		var re = ne, oe;
		t[33] === Symbol.for("react.memo_cache_sentinel") ? (oe = o("WAWebABProps").getABPropConfigValue("wds_web_profile_photo"), t[33] = oe) : oe = t[33];
		var ae = oe, ie;
		if (ae) {
			var le;
			t[34] !== n || t[35] !== O || t[36] !== V || t[37] !== u || t[38] !== j || t[39] !== C ? (le = d.jsx(h, {
				contact: n,
				isMetaAiTEEBot: O,
				isStatusHidden: V,
				onDetailImageClick: u,
				userStatus: j,
				videoSrc: C,
				viewPhotoLabel: te
			}), t[34] = n, t[35] = O, t[36] = V, t[37] = u, t[38] = j, t[39] = C, t[40] = le) : le = t[40], ie = le;
		} else {
			var se = O ? void 0 : u, ue = O ? void 0 : 0, ce = O ? void 0 : o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, de = O ? void 0 : te, me;
			t[41] !== n.id || t[42] !== c || t[43] !== se || t[44] !== ue || t[45] !== ce || t[46] !== de || t[47] !== C ? (me = d.jsx(o("WAWebDetailImage.react").DetailImage, {
				id: n.id,
				size: o("WAWebDetailImage.react").DetailImageSize.Refresh,
				loader: !0,
				onLoad: c,
				onClick: se,
				quality: o("WAWebDetailImage.react").DetailImageQuality.High,
				tabIndex: ue,
				xstyle: ce,
				ariaLabel: de,
				videoUrl: C
			}), t[41] = n.id, t[42] = c, t[43] = se, t[44] = ue, t[45] = ce, t[46] = de, t[47] = C, t[48] = me) : me = t[48], ie = me;
		}
		var pe;
		t[49] !== a || t[50] !== P ? (pe = a && !P && !o("WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration").hasPhoneNumberHidingThreadPromotionMigrationStarted(), t[49] = a, t[50] = P, t[51] = pe) : pe = t[51];
		var _e = pe, fe;
		t[52] !== ie || t[53] !== O ? (fe = !O && !ae ? d.jsx(r("WDSTooltip.react"), {
			label: te,
			children: ie
		}) : ie, t[52] = ie, t[53] = O, t[54] = fe) : fe = t[54];
		var ge = fe, he;
		t[55] !== ge || t[56] !== n.id || t[57] !== O || t[58] !== Y ? (he = function() {
			return O ? d.jsx(r("WAWebTeeLockBadge.react"), {
				size: "large",
				children: ge
			}) : Y && !ae ? d.jsxs("div", {
				className: "x1n2onr6 x1rg5ohu",
				children: [d.jsx("div", {
					className: "x10l6tqk x47corl x1fur4o1 xanzm1z",
					children: d.jsx(o("WAWebStatusImageRing.react").StatusImageRing, {
						id: n.id,
						size: 148,
						stroke: 4,
						theme: o("WAWebStatusImageRing.react").RingTheme.UpdatesTab,
						respectAppTheme: !0,
						breakRing: !1,
						hideWhenNoUnreadStatuses: !1
					})
				}), ge]
			}) : ge;
		}, t[55] = ge, t[56] = n.id, t[57] = O, t[58] = Y, t[59] = he) : he = t[59];
		var ye = he, Ce;
		t[60] === Symbol.for("react.memo_cache_sentinel") ? (Ce = { className: "x78zum5 xl56j7k xyorhqc" }, t[60] = Ce) : Ce = t[60];
		var be;
		t[61] !== ye ? (be = d.jsx("div", babelHelpers.extends({}, Ce, { children: ye() })), t[61] = ye, t[62] = be) : be = t[62];
		var ve;
		t[63] !== Z ? (ve = d.jsx(o("WAWebText.react").WAWebTextLargeRefreshed, { children: Z }), t[63] = Z, t[64] = ve) : ve = t[64];
		var Se;
		t[65] !== n.id || t[66] !== re ? (Se = !n.id.isBot() && re != null && d.jsx("div", {
			className: "x1evy7pa x1anpbxc",
			children: d.jsx(o("WAWebCopyPasteSelectable.react").SelectableSpan, {
				dir: "auto",
				selectable: !0,
				children: d.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
					color: "wdsContentDeemphasized",
					children: re
				})
			})
		}), t[65] = n.id, t[66] = re, t[67] = Se) : Se = t[67];
		var Re;
		t[68] !== n || t[69] !== y ? (Re = d.jsx(o("WAWebMemberLabelContactInfo.react").MemberLabelContactInfo, {
			contact: n,
			chat: y
		}), t[68] = n, t[69] = y, t[70] = Re) : Re = t[70];
		var Le;
		t[71] !== ve || t[72] !== Se || t[73] !== Re ? (Le = d.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			children: [
				ve,
				Se,
				Re
			]
		}), t[71] = ve, t[72] = Se, t[73] = Re, t[74] = Le) : Le = t[74];
		var Ee;
		t[75] !== _e ? (Ee = _e && d.jsx(r("WAWebContactInfoPhoneNumberHidden.react"), {}), t[75] = _e, t[76] = Ee) : Ee = t[76];
		var ke;
		t[77] !== n || t[78] !== _e || t[79] !== i || t[80] !== l || t[81] !== m || t[82] !== _ || t[83] !== g ? (ke = !i && !o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(n.id) && d.jsx(b, {
			contact: n,
			displayRequestPnButton: _e,
			onContactInfoAction: l,
			onSaveContact: _,
			onSearchMsgs: g,
			onOpenChatTabInContactManager: m
		}), t[77] = n, t[78] = _e, t[79] = i, t[80] = l, t[81] = m, t[82] = _, t[83] = g, t[84] = ke) : ke = t[84];
		var Ie;
		t[85] !== n ? (Ie = o("WAWebListsLabelGatingUtils").canDisplayLabel() && !(o("WAWebContactManagerGating").contactManagerEnabled() && o("WAWebContactManagerGating").isEligibleForCustomerFields(n)) && d.jsx(r("WAWebLabelsInfoDrawerLabelWell.react"), { labels: n.labels }), t[85] = n, t[86] = Ie) : Ie = t[86];
		var Te;
		return t[87] !== A || t[88] !== be || t[89] !== Le || t[90] !== Ee || t[91] !== ke || t[92] !== Ie ? (Te = d.jsxs(r("WAWebDrawerSection.react"), {
			theme: "refresh-new",
			children: [
				be,
				Le,
				Ee,
				ke,
				Ie,
				A
			]
		}), t[87] = A, t[88] = be, t[89] = Le, t[90] = Ee, t[91] = ke, t[92] = Ie, t[93] = Te) : Te = t[93], Te;
	}
	function h(e) {
		var t, n, a = o("react-compiler-runtime").c(38), i = e.contact, l = e.isMetaAiTEEBot, u = e.isStatusHidden, c = e.onDetailImageClick, m = e.userStatus, p = e.videoSrc, f = e.viewPhotoLabel, g;
		a[0] !== i.id ? (g = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(i.id), a[0] = i.id, a[1] = g) : g = a[1];
		var h = g, C;
		a[2] === Symbol.for("react.memo_cache_sentinel") ? (C = ["img", "imgFull"], a[2] = C) : C = a[2];
		var b = o("useWAWebModelValues").useOptionalModelValues(h, C), v = b == null ? void 0 : b.imgFull, S = v != null ? v : b == null ? void 0 : b.img, R = r("WAWebWid").isPSA(i.id), L = !l && (R || !r("isStringNullOrEmpty")(v)), E = m != null && !u, k = (t = m == null ? void 0 : m.unreadCount) != null ? t : 0, I = (n = m == null ? void 0 : m.totalCount) != null ? n : 0, T;
		a[3] !== E || a[4] !== I || a[5] !== k ? (T = E && I > 0 ? {
			totalCount: I,
			viewedCount: I - k
		} : void 0, a[3] = E, a[4] = I, a[5] = k, a[6] = T) : T = a[6];
		var D = T, x;
		a[7] !== i ? (x = o("WAWebInitialsFromNameUtils").getInitialsFromContact(i), a[7] = i, a[8] = x) : x = a[8];
		var $ = x, P;
		a[9] !== $.firstInitial || a[10] !== $.secondInitial ? (P = [$.firstInitial, $.secondInitial].filter(Boolean), a[9] = $.firstInitial, a[10] = $.secondInitial, a[11] = P) : P = a[11];
		var N = P.join(""), M = _(null), w;
		a[12] === Symbol.for("react.memo_cache_sentinel") ? (w = s._(
			/*BTDS*/
			""
		), a[12] = w) : w = a[12];
		var A = w, F;
		if (D != null && m != null) {
			var O;
			a[13] !== m ? (O = {
				label: A,
				onPress: function() {
					o("WAWebModalManager").ModalManager.openMedia(d.jsx(o("WAWebStatusQuotedFlowLoadable").StatusQuotedFlowLoadable, {
						status: m,
						onClose: y,
						rowSection: o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.CHAT_TOP_BAR,
						rowIndex: 0
					}), { transition: "status-modal" });
				},
				type: "viewStatus"
			}, a[13] = m, a[14] = O) : O = a[14], F = O;
		} else if (L) {
			var B;
			a[15] !== c ? (B = function() {
				return c(void 0, M.current);
			}, a[15] = c, a[16] = B) : B = a[16];
			var W;
			a[17] !== B || a[18] !== f ? (W = {
				label: f,
				onPress: B,
				type: "viewPhoto"
			}, a[17] = B, a[18] = f, a[19] = W) : W = a[19], F = W;
		}
		var q;
		a[20] !== i ? (q = o("WAWebFrontendContactGetters").getFormattedName(i), a[20] = i, a[21] = q) : q = a[21];
		var U;
		a[22] !== i.id ? (U = o("useWAWebDefaultProfileColors").getWDSProfilePhotoColor(i.id), a[22] = i.id, a[23] = U) : U = a[23];
		var V;
		a[24] !== i.id ? (V = o("useWAWebDefaultProfileColors").getWDSProfilePhotoCustomColor(i.id), a[24] = i.id, a[25] = V) : V = a[25];
		var H;
		a[26] !== i.id ? (H = o("useWAWebDefaultProfileColors").getProfilePhotoPlaceholderIcon(i.id), a[26] = i.id, a[27] = H) : H = a[27];
		var G;
		return a[28] !== N || a[29] !== S || a[30] !== H || a[31] !== q || a[32] !== U || a[33] !== V || a[34] !== p || a[35] !== F || a[36] !== D ? (G = d.jsx("div", {
			ref: M,
			children: d.jsx(r("WDSProfilePhoto.react"), {
				type: "person",
				name: q,
				src: S,
				videoSrc: p,
				size: "xxLarge",
				color: U,
				customColor: V,
				placeholderIcon: H,
				isDecorative: !0,
				initials: N,
				interaction: F,
				statusRing: D
			})
		}), a[28] = N, a[29] = S, a[30] = H, a[31] = q, a[32] = U, a[33] = V, a[34] = p, a[35] = F, a[36] = D, a[37] = G) : G = a[37], G;
	}
	function y() {
		return o("WAWebModalManager").ModalManager.closeMedia();
	}
	async function C(t) {
		try {
			var n = await o("WAWebFindChatAction").findOrCreateLatestChat(t, "chatInfoTopCard"), r = n.chat;
			if (o("WAWebBotUtils").isMetaAiBot(t) && o("WAWebBotGating").isAiChatThreadsEnabled()) o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(r, { type: "MetaAiContactInfo" });
			else {
				var a = await o("WAWebCmd").Cmd.openChatFromUnread({
					chat: r,
					chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.ContactInfo
				});
				a && o("WAWebComposeBoxActions").ComposeBoxActions.focus(r);
			}
		} catch (t) {
			t instanceof Error && o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to open chat from contact info"]))).catching(t).sendLogs("contact-info-start-chat-fail");
		}
	}
	function b(e) {
		var t = e.contact, n = e.displayRequestPnButton, a = e.onContactInfoAction, i = e.onOpenChatTabInContactManager, l = e.onSaveContact, c = e.onSearchMsgs, m = o("useWAWebVoipIsCallingEnabledAndInited").useWAWebVoipIsCallingEnabledAndInited(), p = m.inited, _ = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), "change:activeCall", function() {
			return r("WAWebCallCollection").activeCall != null;
		}), f = function() {
			if (i != null) {
				i();
				return;
			}
			a == null || a("message"), C(t.id);
		}, g = [], h = o("WAWebContactGetters").getIsAiHub(t), y = o("WAWebChatCollection").ChatCollection.getActive(), b = !h && (i != null || !(y != null && y.id.equals(t.id)));
		b && g.push({
			wdsIcon: r("WDSIconWdsIcChat.react"),
			onClick: f,
			testid: "chat_info_message_action_tile",
			title: s._(
				/*BTDS*/
				""
			),
			disabled: !1
		});
		var v = (r("WAWebEnvironment").isWindows || p) && !o("WAWebFrontendContactGetters").getIsContactBlocked(t) && !t.id.isBot() && !h && !r("WAWebWid").isPSA(t.id) && o("WAWebStreamModel").Stream.displayInfo === o("WAWebStreamModel").StreamInfo.NORMAL && !o("WAWebBizCoexGatingUtils").isCallingDisabledOnAuthAgentSoftOffboarded();
		if (v) {
			var S = s._(
				/*BTDS*/
				""
			), R = s._(
				/*BTDS*/
				""
			), L = _ ? s._(
				/*BTDS*/
				""
			) : void 0, E = function(n) {
				a == null || a(n ? "video_call" : "audio_call"), o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["voip: contact info: start 1:1 call, isVideo: ", ""])), n), o("WAWebVoipStartCall").startWAWebVoipCall(t.id, n, o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CONTACT_INFO, o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED);
			};
			g.push({
				wdsIcon: r("WDSIconIcCall.react"),
				onClick: function() {
					return E(!1);
				},
				testid: "chat_info_voice_call_action_tile",
				title: S,
				disabled: _,
				tooltip: L
			}), g.push({
				wdsIcon: r("WDSIconIcVideocam.react"),
				onClick: function() {
					return E(!0);
				},
				testid: "chat_info_video_call_action_tile",
				title: R,
				disabled: _,
				tooltip: L
			});
		}
		if (n) {
			var k = s._(
				/*BTDS*/
				""
			), I = s._(
				/*BTDS*/
				""
			), T = o("WAWebContactGetters").getCanRequestPhoneNumber(t) ? k : I;
			g.push({
				wdsIcon: r("WDSIconIcDialpad.react"),
				onClick: function() {
					o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebRequestPhoneNumberModal.react"), { entryPoint: o("WAWebWamEnumPnhEntryPointType").PNH_ENTRY_POINT_TYPE.CHAT_INFO_REQUEST }));
				},
				testid: "chat_info_request_phone_number_action_tile",
				title: T,
				disabled: !o("WAWebContactGetters").getCanRequestPhoneNumber(t)
			});
		}
		var D = o("WAWebLidMigrationUtils").toPn(t.id) != null, x = o("WAWebLidMigrationUtils").toLid(t.id) != null && o("WAWebUsernameTypes").isPresentUsername(t.username), $ = o("WAWebContactUtils").canSaveAsMyContact(t.id) && !o("WAWebFrontendContactGetters").getIsMyContact(t) && (D || x && o("WAWebUsernameWorkerCompatibleGatingUtils").usernameContactUIEnabled()) && o("WAWebContactManagementGating").contactManagementEnabled();
		$ && g.push({
			wdsIcon: r("WDSIconIcPersonAdd.react"),
			onClick: l,
			testid: "chat_info_add_contact_action_tile",
			title: r("WAWebFbtCommon")("Add"),
			ariaLabel: s._(
				/*BTDS*/
				""
			),
			disabled: !1
		}), b || g.push({
			wdsIcon: r("WDSIconIcSearch.react"),
			onClick: c,
			title: s._(
				/*BTDS*/
				""
			),
			testid: "chat_info_search_action_tile"
		});
		var P, N = g.map(function(e, t) {
			var n = e.disabled, o = e.onClick, a = e.testid, i = e.title, l = e.tooltip, s = e.wdsIcon;
			return d.jsx(r("WDSActionTile.react"), {
				Icon: s,
				onPress: o,
				label: i,
				testid: a,
				disabled: n,
				tooltip: l
			}, t);
		});
		return g.length >= 2 && g.length <= 5 ? P = d.jsx(r("WDSActionTileGroup.react"), { children: N }) : P = d.jsx("div", {
			className: "x78zum5 xh8yej3 x9f619 xl56j7k x1s70e7g xdx6fka xvtqlqk",
			children: N
		}), d.jsx(o("WAWebFlex.react").FlexRow, {
			justify: "center",
			xstyle: [o("WDSMargins.stylex").wdsMargins.marginTop8, o("WDSMargins.stylex").wdsMargins.marginBottom4],
			children: P
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = e.contact, n = e.phoneNumberContact;
		if (r("WAWebWid").isPSA(t.id)) {
			var a = s._(
				/*BTDS*/
				""
			);
			return {
				title: a,
				type: o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.VERIFIED_BUSINESS_NAME
			};
		}
		if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
			var i = o("WAWebFrontendContactGetters").getFormattedUserAndType(t);
			e: {
				if (i.type === o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PHONE_NUMBER || i.type === o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.MASKED_PHONE_NUMBER || i.type === o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.USERNAME) break e;
				{
					var l = o("WAWebFrontendContactGetters").getFormattedUsernameOrPhoneAndType(t), u = l.displayName, c = l.type;
					return u === t.name ? {
						title: null,
						type: null
					} : {
						title: u,
						type: c
					};
				}
			}
		} else {
			if (!t.id.isLid() && o("WAWebFrontendContactGetters").getIsMyContact(t)) return {
				title: o("WAWebWidFormat").widToFormattedUser(t.id),
				type: o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PHONE_NUMBER
			};
			if (t.id.isLid() && n != null && o("WAWebFrontendContactGetters").getIsMyContact(n)) return {
				title: o("WAWebWidFormat").widToFormattedUser(n.id),
				type: o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PHONE_NUMBER
			};
		}
		var d = o("WAWebContactGetters").getNotifyName(t);
		return d != null ? {
			title: "~" + d,
			type: o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PUSHNAME
		} : {
			title: null,
			type: null
		};
	}
	l.default = g;
}), 226);
