__d("WAWebBusinessActions.react", [
	"fbt",
	"WATimeUtils",
	"WAWebBizCatalogGatingUtils",
	"WAWebBusinessLogEvents",
	"WAWebBusinessProfileTypes",
	"WAWebBusinessProfileUtils",
	"WAWebChatCollection",
	"WAWebChatEntryPoint",
	"WAWebChatThreadLogging",
	"WAWebCmd",
	"WAWebComposeBoxActions",
	"WAWebContactGetters",
	"WAWebContactManagementGating",
	"WAWebContactUtils",
	"WAWebDrawerContext",
	"WAWebDrawerManager",
	"WAWebFbtCommon",
	"WAWebFindChatAction",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebProductCatalogContext",
	"WAWebRequestPhoneNumberModal.react",
	"WAWebSendContactsModalLoadable",
	"WAWebStateUtils",
	"WAWebWamEnumPnhEntryPointType",
	"WDSActionTile.react",
	"WDSActionTileGroup.react",
	"WDSIconIcDialpad.react",
	"WDSIconIcFastForward.react",
	"WDSIconIcPersonAdd.react",
	"WDSIconIcShoppingBag.react",
	"WDSIconIcStore.react",
	"WDSIconWdsIcChat.react",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useContext, d = { actionsRow: {
		marginTop: "x1nmyh1g",
		marginBottom: "xcytdqz",
		$$css: !0
	} };
	function m(e) {
		var t, a, i = e.contact, l = e.displayRequestPnButton, m = e.onOpenChatTabInContactManager, _ = e.onProductCatalog, f = e.onSaveContact, g = c(o("WAWebDrawerContext").DrawerContext), h = o("WAWebProductCatalogContext").getProductCatalogSessionId(g);
		function y() {
			return C.apply(this, arguments);
		}
		function C() {
			return C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (m != null) {
					m();
					return;
				}
				var e = yield o("WAWebFindChatAction").findOrCreateLatestChat(i.id, "businessActions"), t = e.chat, n = yield o("WAWebCmd").Cmd.openChatFromUnread({
					chat: t,
					chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InfoDrawer
				});
				n && (o("WAWebDrawerManager").DrawerManager.closeDrawerRight(), o("WAWebComposeBoxActions").ComposeBoxActions.addMsgSendingLogAttributes(t, { handleMultiple: function() {
					o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging([{
						activityType: "profileReplies",
						ts: o("WATimeUtils").unixTime(),
						chatId: t.id
					}]);
				} }));
			}), C.apply(this, arguments);
		}
		function b() {
			var e, t;
			o("WAWebBusinessLogEvents").logShopsClick(h, (e = i.businessProfile) == null ? void 0 : e.isProfileLinked, !!((t = i.businessProfile) != null && t.coverPhoto)), o("WAWebBusinessProfileUtils").goToShop(i.businessProfile);
		}
		function v() {
			var e, t;
			o("WAWebBusinessLogEvents").logForwardClick(h, (e = i.businessProfile) == null ? void 0 : e.isProfileLinked, !!((t = i.businessProfile) != null && t.coverPhoto)), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebSendContactsModalLoadable").SendContactsModalLoadable, {
				contacts: [o("WAWebStateUtils").unproxy(i)],
				onContactsSent: function(t) {
					o("WAWebCmd").Cmd.openChatFromUnread({
						chat: t,
						chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InfoDrawer
					}).then(r("WAWebNoop"));
				}
			}));
		}
		var S = [], R = o("WAWebContactGetters").getIsAiHub(i);
		if (l) {
			var L = o("WAWebContactGetters").getCanRequestPhoneNumber(i) ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
			S.push({
				Icon: r("WDSIconIcDialpad.react"),
				label: L,
				onPress: p,
				testid: "request-phone-number-button-business",
				disabled: !o("WAWebContactGetters").getCanRequestPhoneNumber(i)
			});
		}
		var E = o("WAWebChatCollection").ChatCollection.getActive(), k = !R && (m != null || !(E != null && E.id.equals(i.id)));
		if (k) {
			var I, T;
			o("WAWebBusinessLogEvents").logMessageClick(h, (I = i.businessProfile) == null ? void 0 : I.isProfileLinked, !!((T = i.businessProfile) != null && T.coverPhoto)), S.push({
				Icon: r("WDSIconWdsIcChat.react"),
				label: r("WAWebFbtCommon")("Message"),
				onPress: function() {
					return void y();
				},
				testid: "business-action chat"
			});
		}
		(((t = i.businessProfile) == null || (t = t.profileOptions) == null ? void 0 : t.commerceExperience) === o("WAWebBusinessProfileTypes").CommerceExperienceTypes.CATALOG || ((a = i.businessProfile) == null || (a = a.profileOptions) == null ? void 0 : a.commerceExperience) === o("WAWebBusinessProfileTypes").CommerceExperienceTypes.META_CATALOG && o("WAWebBizCatalogGatingUtils").isCatalogVariantsViewingEnabled()) && S.push({
			Icon: r("WDSIconIcStore.react"),
			label: s._(
				/*BTDS*/
				""
			),
			onPress: function() {
				var e, t;
				o("WAWebBusinessLogEvents").logCatalogClick({
					catalogSessionId: h,
					hasCoverPhoto: !!((e = i.businessProfile) != null && e.coverPhoto),
					isProfileLinked: (t = i.businessProfile) == null ? void 0 : t.isProfileLinked
				}), _(o("WAWebProductCatalogContext").getProductCatalogContext(g), "ContactInfo");
			},
			testid: "business-action catalog"
		}), o("WAWebBusinessProfileUtils").hasShop(i.businessProfile) && !o("WAWebBusinessProfileUtils").isShopBanned(i.businessProfile) && S.push({
			Icon: r("WDSIconIcShoppingBag.react"),
			label: s._(
				/*BTDS*/
				""
			),
			onPress: b,
			testid: "business-action shop"
		});
		var D = o("WAWebContactUtils").canSaveAsMyContact(i.id) && !o("WAWebFrontendContactGetters").getIsMyContact(i) && o("WAWebContactManagementGating").contactManagementEnabled();
		D && S.push({
			Icon: r("WDSIconIcPersonAdd.react"),
			label: r("WAWebFbtCommon")("Add"),
			onPress: f,
			testid: "contact-action contact-button"
		});
		var x = !o("WAWebContactGetters").getIsIAS(i) && !o("WAWebContactGetters").getId(i).isBot() && !o("WAWebContactGetters").getIsCAPISupportAccount(i) && !R;
		x && S.push({
			Icon: r("WDSIconIcFastForward.react"),
			label: s._(
				/*BTDS*/
				""
			),
			onPress: v,
			testid: "business-action forward"
		});
		var $ = S.map(function(e) {
			var t = e.Icon, n = e.disabled, o = e.label, a = e.onPress, i = e.testid;
			return u.jsx(r("WDSActionTile.react"), {
				Icon: t,
				label: o,
				testid: i,
				disabled: n,
				onPress: a
			}, i);
		});
		return u.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: d.actionsRow,
			justify: "center",
			children: $.length >= 2 ? u.jsx(r("WDSActionTileGroup.react"), {
				testid: "business-actions-tile-group",
				children: $
			}) : $
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p() {
		o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebRequestPhoneNumberModal.react"), { entryPoint: o("WAWebWamEnumPnhEntryPointType").PNH_ENTRY_POINT_TYPE.CHAT_INFO_REQUEST }));
	}
	l.default = m;
}), 226);
