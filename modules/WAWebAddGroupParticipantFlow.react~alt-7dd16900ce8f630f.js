__d("WAWebAddGroupParticipantFlow.react", [
	"fbt",
	"$InternalEnum",
	"WALogger",
	"WAWebAddGroupParticipantGroupHistoryContext.react",
	"WAWebCommunityAddParticipantModal.react",
	"WAWebConfirmPopup.react",
	"WAWebContactCollection",
	"WAWebDrawerManager",
	"WAWebEmojiText.react",
	"WAWebExistingGroupPermissionsDrawer.react",
	"WAWebFbtIntlList",
	"WAWebFrontendContactGetters",
	"WAWebGroupHistoryGating",
	"WAWebGroupHistoryRestrictionHelper",
	"WAWebGroupMemberAddingUserJourneyLogger",
	"WAWebGroupType",
	"WAWebLidMigrationUtils",
	"WAWebMiscGatingUtils",
	"WAWebModalManager",
	"WAWebModifyParticipantsGroupAction",
	"WAWebParticipantListUtils",
	"WAWebSchemaGroupMetadata",
	"WAWebSelectModal.react",
	"WAWebSelectModalFooter.react",
	"WAWebSendHistoryBundleAction",
	"WAWebText.react",
	"WAWebUim",
	"WAWebUsernameGatingUtils",
	"WAWebUsernameKeyVerificationModal.react",
	"WAWebUsernameSearchLogger",
	"WAWebWamEnumCompanionInviteOriginType",
	"WAWebWamEnumContactSearchEntrypoint",
	"WAWebWamEnumSearchActionName",
	"WAWebWidFactory",
	"WAWebWidToJid",
	"WDSPaddings.stylex",
	"nullthrows",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebFilteredContacts",
	"useWAWebFilteredOutContacts",
	"useWAWebFlow",
	"useWAWebGroupDiscardGuard",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m, p = m || (m = o("react")), _ = m, f = _.use, g = _.useCallback, h = _.useEffect, y = _.useRef, C = _.useState, b = { paddingBlock6: {
		paddingTop: "x1yrsyyn",
		paddingBottom: "x10b6aqq",
		$$css: !0
	} }, v = { disclaimer: {
		backgroundColor: "x1280gxy",
		textAlign: "x2b8uid",
		$$css: !0
	} }, S = n("$InternalEnum").Mirrored([
		"SelectParticipant",
		"ConfirmGroupParticipant",
		"ConfirmCommunityParticipant",
		"UsernameKeyVerification"
	]);
	function R(t) {
		var n, a, i, l, m, _ = t.handleClearSelectedContacts, E = t.onBack, k = t.reopenAddGroupFlowCallback, I = t.selectedContactsMap, T = t.updateSelectedContactsState, D = o("useWAWebFlow").useFlow(S.SelectParticipant, { onEnd: E }), x = D[0], $ = D[1], P = C([]), N = P[0], M = P[1], w = C([]), A = w[0], F = w[1], O = C(null), B = O[0], W = O[1], q = r("useWAWebFilteredOutContacts")(), U = f(r("WAWebAddGroupParticipantGroupHistoryContext.react")), V = U.enterFlowTimestamp, H = U.selectedMessageCount, G = U.shouldSendGroupHistory, z = t.chat, j = t.communityName, K = o("WAWebWidFactory").asGroupWidOrThrow(z.id), Q = z.groupMetadata, X = (Q == null ? void 0 : Q.parentGroup) != null || (Q == null ? void 0 : Q.isParentGroup) === !0, Y = ((n = z.groupMetadata) == null ? void 0 : n.groupType) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP, J = (Q == null ? void 0 : Q.memberAddMode) === o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD, Z = (Q == null ? void 0 : Q.isLidAddressingMode) === !0, ee = y(), te = C((a = I == null ? void 0 : I.size) != null ? a : 0), ne = te[0], re = te[1], oe = o("useWAWebGroupDiscardGuard").useAddMemberDiscardGuard(ne), ae = g(function() {
			return oe(function() {
				return $.pop();
			});
		}, [oe, $]), ie = g(function() {
			return oe(function() {
				o("WAWebModalManager").ModalManager.close(), _ == null || _();
			});
		}, [oe, _]), le = g(function(e) {
			var t = e.selectedItems;
			re(t.length);
		}, []), se = g(function(e) {
			e === o("WAWebUim").DismissReason.UIM_INTERACTION && $.step === S.SelectParticipant ? oe(function() {
				o("WAWebModalManager").ModalManager.close(), _ == null || _();
			}) : $.pop();
		}, [
			$,
			oe,
			_
		]);
		o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "close_modal", function() {
			_ == null || _(), $.pop();
		});
		var ue = function() {
			$.pop(), o("WAWebDrawerManager").DrawerManager.openDrawerRight(p.jsx(r("WAWebExistingGroupPermissionsDrawer.react"), {
				chat: z,
				groupMetadata: r("nullthrows")(z.groupMetadata, "groupMetadata must be nonnull for us to reach here"),
				onClose: function() {
					k ? (o("WAWebDrawerManager").DrawerManager.closeDrawerRight(), k()) : o("WAWebModalManager").ModalManager.open(p.jsx(R, {
						chat: z,
						communityName: j
					}));
				}
			}));
		}, ce = function() {
			return I ? I.values().toArray() : [];
		}, de = function() {
			return A;
		}, me = async function(t) {
			var e = t.isUsernameSearch, n = t.triedKey, r = t.username;
			o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
				contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.ADD_TO_GROUP,
				searchActionName: o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.CLICK_ON_NON_CONTACT,
				isUsernameSearch: e
			}), $.pop(), W({
				username: r,
				triedKey: n,
				isUsernameSearch: e
			}), $.push(S.UsernameKeyVerification);
		}, pe = function(n) {
			var t = o("WAWebContactCollection").ContactCollection.get(n);
			t ? (T == null || T(t, !1), _e()) : o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[username][add-group-member] lid->contact not found"]))).sendLogs("usernames-lid-has-no-lid-contact");
		}, _e = function() {
			$.pop(), W(null);
		}, fe = function() {
			o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
				contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.ADD_TO_GROUP,
				searchActionName: o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.PIN_VERFICATION_ERROR_SHOWN,
				isUsernameSearch: B == null ? void 0 : B.isUsernameSearch
			});
		}, ge = null, he = (i = Q == null ? void 0 : Q.canSetGroupProperty()) != null ? i : !1;
		j != null ? ge = J ? s._(
			/*BTDS*/
			"",
			[s._param("Clickable text for editing group permissions", he ? p.jsx(L, { onClick: ue }) : null)]
		) : s._(
			/*BTDS*/
			"",
			[s._param("Clickable text for editing group permissions", he ? p.jsx(L, { onClick: ue }) : null)]
		) : ge = J ? s._(
			/*BTDS*/
			"",
			[s._param("Clickable text for editing group permissions", he ? p.jsx(L, { onClick: ue }) : null)]
		) : s._(
			/*BTDS*/
			"",
			[s._param("Clickable text for editing group permissions", he ? p.jsx(L, { onClick: ue }) : null)]
		);
		var ye = (l = Q == null ? void 0 : Q.participants.length) != null ? l : 0, Ce = o("WAWebMiscGatingUtils").getGroupSizeLimit(Q == null ? void 0 : Q.groupType), be = s._(
			/*BTDS*/
			"",
			[s._plural(Ce, "participants_limit")]
		), ve;
		((m = z.groupMetadata) == null ? void 0 : m.isNonAdminAndACAGJREnabled()) === !0 && (ve = p.jsx("div", babelHelpers.extends({}, (d || (d = r("stylex"))).props(o("WDSPaddings.stylex").wdsPaddings.paddingHor12, b.paddingBlock6, v.disclaimer), { children: p.jsx(o("WAWebText.react").WAWebTextSmall, {
			color: "secondary",
			children: s._(
				/*BTDS*/
				""
			)
		}) })));
		var Se = function(t) {
			return t.isLid() && o("WAWebUsernameGatingUtils").usernameContactlessChatEnabled() ? t : Z ? o("WAWebLidMigrationUtils").toLid(t) : t;
		}, Re = function(t) {
			var e = Se(t.id);
			return !!(e != null && Q != null && Q.participants.get(e));
		}, Le = function() {
			var e = Y ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
			return e.toString();
		}, Ee = function(t) {
			var e = Se(t);
			return e != null && Q != null && Q.participants.get(e) ? Le() : null;
		}, ke = r("useWAWebFilteredContacts")(), Ie = function(t) {
			var e = t.outContacts, n = t.selectedItems, r = n, a = e != null ? e : [];
			if (M(r), F(a), r.length === 0 && a.length > 0) {
				De([], a);
				return;
			}
			if (X) {
				$.push(S.ConfirmCommunityParticipant);
				return;
			}
			$.push(S.ConfirmGroupParticipant), G && o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled(K) && o("WAWebGroupMemberAddingUserJourneyLogger").GroupMemberAddingUserJourneyLogger.speedBumpDialogDisplayed();
		}, Te = function(t, n) {
			var e = r("WAWebFbtIntlList")(t.map(function(e) {
				return o("WAWebFrontendContactGetters").getFormattedShortName(e) || e.shortName;
			}), r("WAWebFbtIntlList").CONJUNCTIONS.NONE, r("WAWebFbtIntlList").DELIMITERS.COMMA).toString();
			if (G && o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled(K)) return s._(
				/*BTDS*/
				"",
				[
					s._plural(t.length),
					s._param("members", e),
					s._param("subject", n)
				]
			);
			var a = !!(Q != null && Q.isCag) || !!(Q != null && Q.isParentGroup);
			return a ? s._(
				/*BTDS*/
				"",
				[s._param("members", e), s._param("subject", n)]
			) : s._(
				/*BTDS*/
				"",
				[s._param("members", e), s._param("subject", n)]
			);
		}, De = function(t, n) {
			n.length === 0 && (o("WAWebModalManager").ModalManager.close(), _ == null || _()), o("WAWebModifyParticipantsGroupAction").addParticipants(z, t, n).then(function(e) {
				if (G && o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled(K)) {
					var t = e.participants.filter(function(e) {
						var t = e.code;
						return t === "200";
					}).map(function(e) {
						var t = e.userWid;
						return t;
					});
					if (t.length !== 0) {
						var n = o("WAWebGroupHistoryRestrictionHelper").filterParticipants(t), r = n.historyReceivers, a = n.nonHistoryReceivers;
						r.length !== 0 && (o("WAWebGroupMemberAddingUserJourneyLogger").GroupMemberAddingUserJourneyLogger.bundleMessageSentFromIqResponse(), o("WAWebSendHistoryBundleAction").sendHistoryBundleAction(o("WAWebWidToJid").widToGroupJid(z.id), r, a, H, V).catch(function(e) {
							o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[group-history] failed to send history bundle: ", ""])), e).sendLogs("group-history-add-participant-send-failed");
						}));
					}
				}
			}).catch(function(e) {
				o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[add-group-participant] failed to add participants"]))).catching(e).sendLogs("add-group-participant-failed");
			});
		};
		h(function() {
			if ($.step === S.ConfirmGroupParticipant) {
				var e;
				(e = ee.current) == null || e.focus();
			}
		}, [$.step, _]);
		var xe = null;
		if ($.step == null) return null;
		switch ($.step) {
			case S.SelectParticipant:
				xe = p.jsx(o("WAWebSelectModal.react").SelectModal, {
					tsNavigationData: { surface: "group-member-add-existing-group" },
					handleClearSelectedContacts: _,
					handleUsernameContactRowClicked: me,
					updateSelectedContactsState: T,
					getInitialItems: ce,
					getInitialOutContacts: de,
					onConfirm: Ie,
					onBack: E ? ae : void 0,
					onCancel: ie,
					onOverlayClick: ie,
					onSelectionChanged: le,
					contacts: ke,
					outContacts: q,
					outContactInviteEntryPoint: o("WAWebWamEnumCompanionInviteOriginType").COMPANION_INVITE_ORIGIN_TYPE.GROUPS_ADD_PARTICIPANT_SELECTOR,
					title: s._(
						/*BTDS*/
						""
					),
					isDisabled: Re,
					isSelected: Re,
					customHeader: ve,
					customSecondaryText: Ee,
					listType: o("WAWebSelectModal.react").ListType.ParticipantManageModal,
					singleSelectionFooterType: o("WAWebSelectModalFooter.react").FooterType.CONFIRM,
					multipleSelectionFooterType: o("WAWebSelectModalFooter.react").FooterType.CONFIRM,
					shouldShowSelectionSummary: !1,
					disclaimer: ge,
					maxItems: Ce - ye,
					maxItemsExceedErrorMsg: be,
					groupWid: K
				});
				break;
			case S.ConfirmGroupParticipant:
				xe = p.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
					tsNavigationData: {
						surface: "unknown",
						viewName: "add-group-participant"
					},
					onOK: function() {
						G && o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled(K) && o("WAWebGroupMemberAddingUserJourneyLogger").GroupMemberAddingUserJourneyLogger.speedBumpDialogContinued(), De(N, A);
					},
					okText: s._(
						/*BTDS*/
						"",
						[s._plural(N.length)]
					),
					onCancel: function() {
						G && o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled(K) && o("WAWebGroupMemberAddingUserJourneyLogger").GroupMemberAddingUserJourneyLogger.speedBumpDialogCanceled(), $.pop();
					},
					cancelText: s._(
						/*BTDS*/
						""
					),
					ref: ee,
					children: p.jsx(o("WAWebEmojiText.react").EmojiText, { text: Te(N, Q != null && Q.isUnnamed ? o("WAWebParticipantListUtils").calculateUnnamedGroupParticipantsList(Q) : z.contact.name) })
				});
				break;
			case S.ConfirmCommunityParticipant:
				xe = p.jsx(o("WAWebCommunityAddParticipantModal.react").CommunityAddParticipantModal, {
					onOK: function() {
						return De(N, A);
					},
					onCancel: function() {
						return $.pop();
					},
					contacts: N
				});
				break;
			case S.UsernameKeyVerification:
				o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
					contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.ADD_TO_GROUP,
					searchActionName: o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.VIEW_PIN_VERIFICATION,
					isUsernameSearch: B == null ? void 0 : B.isUsernameSearch
				}), xe = B && p.jsx(r("WAWebUsernameKeyVerificationModal.react"), {
					username: B.username,
					initWithError: B.triedKey,
					onKeyVerificationSuccess: pe,
					onKeyVerificationCancel: _e,
					dontCloseViaModalManager: !0,
					onInvalidKeyError: fe
				});
				break;
		}
		return p.jsx(x, {
			flow: $,
			requestDismiss: se,
			children: xe
		});
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		var t = o("react-compiler-runtime").c(3), n = e.onClick, r;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = s._(
			/*BTDS*/
			""
		), t[0] = r) : r = t[0];
		var a;
		return t[1] !== n ? (a = p.jsx(o("WAWebText.react").WAWebClickableText, {
			onClick: n,
			color: "green",
			children: r
		}), t[1] = n, t[2] = a) : a = t[2], a;
	}
	l.default = R;
}), 226);
