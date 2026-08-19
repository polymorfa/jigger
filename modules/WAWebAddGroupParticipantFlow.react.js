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
	"asyncToGeneratorRuntime",
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
		var a, i, l, m, _, E = t.handleClearSelectedContacts, k = t.onBack, I = t.reopenAddGroupFlowCallback, T = t.selectedContactsMap, D = t.updateSelectedContactsState, x = o("useWAWebFlow").useFlow(S.SelectParticipant, { onEnd: k }), $ = x[0], P = x[1], N = C([]), M = N[0], w = N[1], A = C([]), F = A[0], O = A[1], B = C(null), W = B[0], q = B[1], U = r("useWAWebFilteredOutContacts")(), V = f(r("WAWebAddGroupParticipantGroupHistoryContext.react")), H = V.enterFlowTimestamp, G = V.selectedMessageCount, z = V.shouldSendGroupHistory, j = t.chat, K = t.communityName, Q = o("WAWebWidFactory").asGroupWidOrThrow(j.id), X = j.groupMetadata, Y = (X == null ? void 0 : X.parentGroup) != null || (X == null ? void 0 : X.isParentGroup) === !0, J = ((a = j.groupMetadata) == null ? void 0 : a.groupType) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP, Z = (X == null ? void 0 : X.memberAddMode) === o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD, ee = (X == null ? void 0 : X.isLidAddressingMode) === !0, te = y(), ne = C((i = T == null ? void 0 : T.size) != null ? i : 0), re = ne[0], oe = ne[1], ae = o("useWAWebGroupDiscardGuard").useAddMemberDiscardGuard(re), ie = g(function() {
			return ae(function() {
				return P.pop();
			});
		}, [ae, P]), le = g(function() {
			return ae(function() {
				o("WAWebModalManager").ModalManager.close(), E == null || E();
			});
		}, [ae, E]), se = g(function(e) {
			var t = e.selectedItems;
			oe(t.length);
		}, []), ue = g(function(e) {
			e === o("WAWebUim").DismissReason.UIM_INTERACTION && P.step === S.SelectParticipant ? ae(function() {
				o("WAWebModalManager").ModalManager.close(), E == null || E();
			}) : P.pop();
		}, [
			P,
			ae,
			E
		]);
		o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "close_modal", function() {
			E == null || E(), P.pop();
		});
		var ce = function() {
			P.pop(), o("WAWebDrawerManager").DrawerManager.openDrawerRight(p.jsx(r("WAWebExistingGroupPermissionsDrawer.react"), {
				chat: j,
				groupMetadata: r("nullthrows")(j.groupMetadata, "groupMetadata must be nonnull for us to reach here"),
				onClose: function() {
					I ? (o("WAWebDrawerManager").DrawerManager.closeDrawerRight(), I()) : o("WAWebModalManager").ModalManager.open(p.jsx(R, {
						chat: j,
						communityName: K
					}));
				}
			}));
		}, de = function() {
			return T ? T.values().toArray() : [];
		}, me = function() {
			return F;
		}, pe = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = e.isUsernameSearch, n = e.triedKey, r = e.username;
				o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
					contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.ADD_TO_GROUP,
					searchActionName: o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.CLICK_ON_NON_CONTACT,
					isUsernameSearch: t
				}), P.pop(), q({
					username: r,
					triedKey: n,
					isUsernameSearch: t
				}), P.push(S.UsernameKeyVerification);
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), _e = function(n) {
			var t = o("WAWebContactCollection").ContactCollection.get(n);
			t ? (D == null || D(t, !1), fe()) : o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[username][add-group-member] lid->contact not found"]))).sendLogs("usernames-lid-has-no-lid-contact");
		}, fe = function() {
			P.pop(), q(null);
		}, ge = function() {
			o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
				contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.ADD_TO_GROUP,
				searchActionName: o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.PIN_VERFICATION_ERROR_SHOWN,
				isUsernameSearch: W == null ? void 0 : W.isUsernameSearch
			});
		}, he = null, ye = (l = X == null ? void 0 : X.canSetGroupProperty()) != null ? l : !1;
		K != null ? he = Z ? s._(
			/*BTDS*/
			"",
			[s._param("Clickable text for editing group permissions", ye ? p.jsx(L, { onClick: ce }) : null)]
		) : s._(
			/*BTDS*/
			"",
			[s._param("Clickable text for editing group permissions", ye ? p.jsx(L, { onClick: ce }) : null)]
		) : he = Z ? s._(
			/*BTDS*/
			"",
			[s._param("Clickable text for editing group permissions", ye ? p.jsx(L, { onClick: ce }) : null)]
		) : s._(
			/*BTDS*/
			"",
			[s._param("Clickable text for editing group permissions", ye ? p.jsx(L, { onClick: ce }) : null)]
		);
		var Ce = (m = X == null ? void 0 : X.participants.length) != null ? m : 0, be = o("WAWebMiscGatingUtils").getGroupSizeLimit(X == null ? void 0 : X.groupType), ve = s._(
			/*BTDS*/
			"",
			[s._plural(be, "participants_limit")]
		), Se;
		((_ = j.groupMetadata) == null ? void 0 : _.isNonAdminAndACAGJREnabled()) === !0 && (Se = p.jsx("div", babelHelpers.extends({}, (d || (d = r("stylex"))).props(o("WDSPaddings.stylex").wdsPaddings.paddingHor12, b.paddingBlock6, v.disclaimer), { children: p.jsx(o("WAWebText.react").WAWebTextSmall, {
			color: "secondary",
			children: s._(
				/*BTDS*/
				""
			)
		}) })));
		var Re = function(t) {
			return t.isLid() && o("WAWebUsernameGatingUtils").usernameContactlessChatEnabled() ? t : ee ? o("WAWebLidMigrationUtils").toLid(t) : t;
		}, Le = function(t) {
			var e = Re(t.id);
			return !!(e != null && X != null && X.participants.get(e));
		}, Ee = function() {
			var e = J ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
			return e.toString();
		}, ke = function(t) {
			var e = Re(t);
			return e != null && X != null && X.participants.get(e) ? Ee() : null;
		}, Ie = r("useWAWebFilteredContacts")(), Te = function(t) {
			var e = t.outContacts, n = t.selectedItems, r = n, a = e != null ? e : [];
			if (w(r), O(a), r.length === 0 && a.length > 0) {
				xe([], a);
				return;
			}
			if (Y) {
				P.push(S.ConfirmCommunityParticipant);
				return;
			}
			P.push(S.ConfirmGroupParticipant), z && o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled(Q) && o("WAWebGroupMemberAddingUserJourneyLogger").GroupMemberAddingUserJourneyLogger.speedBumpDialogDisplayed();
		}, De = function(t, n) {
			var e = r("WAWebFbtIntlList")(t.map(function(e) {
				return o("WAWebFrontendContactGetters").getFormattedShortName(e) || e.shortName;
			}), r("WAWebFbtIntlList").CONJUNCTIONS.NONE, r("WAWebFbtIntlList").DELIMITERS.COMMA).toString();
			if (z && o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled(Q)) return s._(
				/*BTDS*/
				"",
				[
					s._plural(t.length),
					s._param("members", e),
					s._param("subject", n)
				]
			);
			var a = !!(X != null && X.isCag) || !!(X != null && X.isParentGroup);
			return a ? s._(
				/*BTDS*/
				"",
				[s._param("members", e), s._param("subject", n)]
			) : s._(
				/*BTDS*/
				"",
				[s._param("members", e), s._param("subject", n)]
			);
		}, xe = function(t, n) {
			n.length === 0 && (o("WAWebModalManager").ModalManager.close(), E == null || E()), o("WAWebModifyParticipantsGroupAction").addParticipants(j, t, n).then(function(e) {
				if (z && o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled(Q)) {
					var t = e.participants.filter(function(e) {
						var t = e.code;
						return t === "200";
					}).map(function(e) {
						var t = e.userWid;
						return t;
					});
					if (t.length !== 0) {
						var n = o("WAWebGroupHistoryRestrictionHelper").filterParticipants(t), r = n.historyReceivers, a = n.nonHistoryReceivers;
						r.length !== 0 && (o("WAWebGroupMemberAddingUserJourneyLogger").GroupMemberAddingUserJourneyLogger.bundleMessageSentFromIqResponse(), o("WAWebSendHistoryBundleAction").sendHistoryBundleAction(o("WAWebWidToJid").widToGroupJid(j.id), r, a, G, H).catch(function(e) {
							o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[group-history] failed to send history bundle: ", ""])), e).sendLogs("group-history-add-participant-send-failed");
						}));
					}
				}
			}).catch(function(e) {
				o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[add-group-participant] failed to add participants"]))).catching(e).sendLogs("add-group-participant-failed");
			});
		};
		h(function() {
			if (P.step === S.ConfirmGroupParticipant) {
				var e;
				(e = te.current) == null || e.focus();
			}
		}, [P.step, E]);
		var $e = null;
		if (P.step == null) return null;
		switch (P.step) {
			case S.SelectParticipant:
				$e = p.jsx(o("WAWebSelectModal.react").SelectModal, {
					tsNavigationData: { surface: "group-member-add-existing-group" },
					handleClearSelectedContacts: E,
					handleUsernameContactRowClicked: pe,
					updateSelectedContactsState: D,
					getInitialItems: de,
					getInitialOutContacts: me,
					onConfirm: Te,
					onBack: k ? ie : void 0,
					onCancel: le,
					onOverlayClick: le,
					onSelectionChanged: se,
					contacts: Ie,
					outContacts: U,
					outContactInviteEntryPoint: o("WAWebWamEnumCompanionInviteOriginType").COMPANION_INVITE_ORIGIN_TYPE.GROUPS_ADD_PARTICIPANT_SELECTOR,
					title: s._(
						/*BTDS*/
						""
					),
					isDisabled: Le,
					isSelected: Le,
					customHeader: Se,
					customSecondaryText: ke,
					listType: o("WAWebSelectModal.react").ListType.ParticipantManageModal,
					singleSelectionFooterType: o("WAWebSelectModalFooter.react").FooterType.CONFIRM,
					multipleSelectionFooterType: o("WAWebSelectModalFooter.react").FooterType.CONFIRM,
					shouldShowSelectionSummary: !1,
					disclaimer: he,
					maxItems: be - Ce,
					maxItemsExceedErrorMsg: ve,
					groupWid: Q
				});
				break;
			case S.ConfirmGroupParticipant:
				$e = p.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
					tsNavigationData: {
						surface: "unknown",
						viewName: "add-group-participant"
					},
					onOK: function() {
						z && o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled(Q) && o("WAWebGroupMemberAddingUserJourneyLogger").GroupMemberAddingUserJourneyLogger.speedBumpDialogContinued(), xe(M, F);
					},
					okText: s._(
						/*BTDS*/
						"",
						[s._plural(M.length)]
					),
					onCancel: function() {
						z && o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled(Q) && o("WAWebGroupMemberAddingUserJourneyLogger").GroupMemberAddingUserJourneyLogger.speedBumpDialogCanceled(), P.pop();
					},
					cancelText: s._(
						/*BTDS*/
						""
					),
					ref: te,
					children: p.jsx(o("WAWebEmojiText.react").EmojiText, { text: De(M, X != null && X.isUnnamed ? o("WAWebParticipantListUtils").calculateUnnamedGroupParticipantsList(X) : j.contact.name) })
				});
				break;
			case S.ConfirmCommunityParticipant:
				$e = p.jsx(o("WAWebCommunityAddParticipantModal.react").CommunityAddParticipantModal, {
					onOK: function() {
						return xe(M, F);
					},
					onCancel: function() {
						return P.pop();
					},
					contacts: M
				});
				break;
			case S.UsernameKeyVerification:
				o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
					contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.ADD_TO_GROUP,
					searchActionName: o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.VIEW_PIN_VERIFICATION,
					isUsernameSearch: W == null ? void 0 : W.isUsernameSearch
				}), $e = W && p.jsx(r("WAWebUsernameKeyVerificationModal.react"), {
					username: W.username,
					initWithError: W.triedKey,
					onKeyVerificationSuccess: _e,
					onKeyVerificationCancel: fe,
					dontCloseViaModalManager: !0,
					onInvalidKeyError: ge
				});
				break;
		}
		return p.jsx($, {
			flow: P,
			requestDismiss: ue,
			children: $e
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
