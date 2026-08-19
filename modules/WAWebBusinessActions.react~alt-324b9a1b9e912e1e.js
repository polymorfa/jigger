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
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useContext, d = { actionsRow: {
		marginTop: "x1nmyh1g",
		marginBottom: "xcytdqz",
		$$css: !0
	} };
	function m(e) {
		var t, n, a = e.contact, i = e.displayRequestPnButton, l = e.onOpenChatTabInContactManager, m = e.onProductCatalog, _ = e.onSaveContact, f = c(o("WAWebDrawerContext").DrawerContext), g = o("WAWebProductCatalogContext").getProductCatalogSessionId(f);
		async function h() {
			if (l != null) {
				l();
				return;
			}
			var e = await o("WAWebFindChatAction").findOrCreateLatestChat(a.id, "businessActions"), t = e.chat, n = await o("WAWebCmd").Cmd.openChatFromUnread({
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
		}
		function y() {
			var e, t;
			o("WAWebBusinessLogEvents").logShopsClick(g, (e = a.businessProfile) == null ? void 0 : e.isProfileLinked, !!((t = a.businessProfile) != null && t.coverPhoto)), o("WAWebBusinessProfileUtils").goToShop(a.businessProfile);
		}
		function C() {
			var e, t;
			o("WAWebBusinessLogEvents").logForwardClick(g, (e = a.businessProfile) == null ? void 0 : e.isProfileLinked, !!((t = a.businessProfile) != null && t.coverPhoto)), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebSendContactsModalLoadable").SendContactsModalLoadable, {
				contacts: [o("WAWebStateUtils").unproxy(a)],
				onContactsSent: function(t) {
					o("WAWebCmd").Cmd.openChatFromUnread({
						chat: t,
						chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InfoDrawer
					}).then(r("WAWebNoop"));
				}
			}));
		}
		var b = [], v = o("WAWebContactGetters").getIsAiHub(a);
		if (i) {
			var S = o("WAWebContactGetters").getCanRequestPhoneNumber(a) ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
			b.push({
				Icon: r("WDSIconIcDialpad.react"),
				label: S,
				onPress: p,
				testid: "request-phone-number-button-business",
				disabled: !o("WAWebContactGetters").getCanRequestPhoneNumber(a)
			});
		}
		var R = o("WAWebChatCollection").ChatCollection.getActive(), L = !v && (l != null || !(R != null && R.id.equals(a.id)));
		if (L) {
			var E, k;
			o("WAWebBusinessLogEvents").logMessageClick(g, (E = a.businessProfile) == null ? void 0 : E.isProfileLinked, !!((k = a.businessProfile) != null && k.coverPhoto)), b.push({
				Icon: r("WDSIconWdsIcChat.react"),
				label: r("WAWebFbtCommon")("Message"),
				onPress: function() {
					return void h();
				},
				testid: "business-action chat"
			});
		}
		(((t = a.businessProfile) == null || (t = t.profileOptions) == null ? void 0 : t.commerceExperience) === o("WAWebBusinessProfileTypes").CommerceExperienceTypes.CATALOG || ((n = a.businessProfile) == null || (n = n.profileOptions) == null ? void 0 : n.commerceExperience) === o("WAWebBusinessProfileTypes").CommerceExperienceTypes.META_CATALOG && o("WAWebBizCatalogGatingUtils").isCatalogVariantsViewingEnabled()) && b.push({
			Icon: r("WDSIconIcStore.react"),
			label: s._(
				/*BTDS*/
				""
			),
			onPress: function() {
				var e, t;
				o("WAWebBusinessLogEvents").logCatalogClick({
					catalogSessionId: g,
					hasCoverPhoto: !!((e = a.businessProfile) != null && e.coverPhoto),
					isProfileLinked: (t = a.businessProfile) == null ? void 0 : t.isProfileLinked
				}), m(o("WAWebProductCatalogContext").getProductCatalogContext(f), "ContactInfo");
			},
			testid: "business-action catalog"
		}), o("WAWebBusinessProfileUtils").hasShop(a.businessProfile) && !o("WAWebBusinessProfileUtils").isShopBanned(a.businessProfile) && b.push({
			Icon: r("WDSIconIcShoppingBag.react"),
			label: s._(
				/*BTDS*/
				""
			),
			onPress: y,
			testid: "business-action shop"
		});
		var I = o("WAWebContactUtils").canSaveAsMyContact(a.id) && !o("WAWebFrontendContactGetters").getIsMyContact(a) && o("WAWebContactManagementGating").contactManagementEnabled();
		I && b.push({
			Icon: r("WDSIconIcPersonAdd.react"),
			label: r("WAWebFbtCommon")("Add"),
			onPress: _,
			testid: "contact-action contact-button"
		});
		var T = !o("WAWebContactGetters").getIsIAS(a) && !o("WAWebContactGetters").getId(a).isBot() && !o("WAWebContactGetters").getIsCAPISupportAccount(a) && !v;
		T && b.push({
			Icon: r("WDSIconIcFastForward.react"),
			label: s._(
				/*BTDS*/
				""
			),
			onPress: C,
			testid: "business-action forward"
		});
		var D = b.map(function(e) {
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
			children: D.length >= 2 ? u.jsx(r("WDSActionTileGroup.react"), {
				testid: "business-actions-tile-group",
				children: D
			}) : D
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p() {
		o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebRequestPhoneNumberModal.react"), { entryPoint: o("WAWebWamEnumPnhEntryPointType").PNH_ENTRY_POINT_TYPE.CHAT_INFO_REQUEST }));
	}
	l.default = m;
}), 226);
