__d("WAWebNewChatFlowBroadcastAudienceDrawer.react", [
	"Promise",
	"WAWebAudienceResolver",
	"WAWebBizBroadcastTos",
	"WAWebBizBroadcastTosModal.react",
	"WAWebBizBroadcastsAudienceStrings",
	"WAWebBizBroadcastsCreationStrings",
	"WAWebBizBroadcastsRecipientUtils",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebCellV2.react",
	"WAWebDefaultProfilePicture.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerViewType",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WAWebSuggestedAudienceCards",
	"WAWebWamEnumEntryPoint",
	"WAWebWamEnumSurfaceType",
	"WDSFlex.stylex",
	"WDSIconIcAdd.react",
	"WDSIconIcUpload.react",
	"WDSText.react",
	"asyncToGeneratorRuntime",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["ref"], s, u, c, d = c || (c = o("react")), m = c, p = m.useEffect, _ = m.useState, f = { paddingInlineStart13: {
		paddingInlineStart: "xbmws1g",
		$$css: !0
	} }, g = {
		audienceItem: {
			paddingInlineStart: "x1iw51ew",
			paddingInlineEnd: "xde1mab",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		pinnedItem: {
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		suggestedIconWrapper: {
			backgroundColor: "x1h3rtpe",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			height: "xsdox4t",
			width: "x1useyqa",
			$$css: !0
		}
	};
	function h(e) {
		var t = e.icon, n = e.label, a = e.onClick, i = e.testid;
		return d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flex, g.pinnedItem), { children: d.jsx(r("WAWebCellV2.react"), {
			size: "medium",
			material: !0,
			onClick: a,
			testid: i,
			detailLeft: d.jsx("div", {
				className: "x6s0dn4 x3l9nec x1c9tyrk xeusxvb x1pahc9y x1ertn4p x78zum5 x112a4uq xl56j7k x15jighw",
				children: t
			}),
			detailLeftXStyle: [f.paddingInlineStart13],
			primary: d.jsx(r("WDSText.react"), {
				type: "Body1",
				colorName: "contentDefault",
				children: n
			})
		}) }));
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.audience, n = e.onSelect, a = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.newChatFlowAudienceListItemClicked(t.broadcastJid), n(t);
		};
		return d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flex, g.audienceItem), { children: d.jsx(r("WAWebCellV2.react"), {
			size: "medium",
			material: !0,
			onClick: a,
			testid: "audience-item",
			detailLeft: d.jsx(r("WAWebDefaultProfilePicture.react"), {
				type: "business-broadcast",
				size: 48
			}),
			detailLeftXStyle: [f.paddingInlineStart13],
			primary: d.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDefault",
				children: t.name
			}),
			secondary: d.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: "contentDeemphasized",
				children: o("WAWebBizBroadcastsCreationStrings").getExistingAudienceRecipientsLabel(t.recipientCount)
			})
		}) }));
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = e.onCardPress, a = _(null), i = a[0], l = a[1];
		if (p(function() {
			var e = !1;
			return n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var t = yield (s || (s = n("Promise"))).all(o("WAWebSuggestedAudienceCards").SUGGESTED_AUDIENCE_CARDS.map((function() {
					var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
						var n = null;
						try {
							var r = yield o("WAWebSuggestedAudienceCards").resolveCardExpression(t);
							n = r.predicateType;
							var a = yield o("WAWebAudienceResolver").resolveAudienceExpression(r), i = a.length, l = i >= o("WAWebBizBroadcastsRecipientUtils").MIN_RECIPIENTS && i <= o("WAWebBizBroadcastsRecipientUtils").getRecipientLimit();
							return {
								count: i,
								eligible: l,
								id: t.id
							};
						} catch (r) {
							return e || o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.suggestedAudienceCardError(t.id, n, o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST), {
								count: 0,
								eligible: !1,
								id: t.id
							};
						}
					});
					return function(e) {
						return t.apply(this, arguments);
					};
				})()));
				if (!e) {
					var r = new Map();
					for (var a of t) a.eligible && r.set(a.id, a.count);
					l(r), r.size > 0 && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.suggestedAudienceCardsViewed(r.size, o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST);
				}
			})(), function() {
				e = !0;
			};
		}, []), i == null || i.size === 0) return null;
		var c = o("WAWebSuggestedAudienceCards").SUGGESTED_AUDIENCE_CARDS.filter(function(e) {
			return i.has(e.id);
		});
		return d.jsxs(d.Fragment, { children: [d.jsx("div", {
			className: "x16ovd2e x12xbjc7 x1iw51ew xde1mab",
			children: d.jsx(r("WDSText.react"), {
				type: "Body2Emphasized",
				colorName: "contentDeemphasized",
				children: o("WAWebBizBroadcastsAudienceStrings").getSuggestedAudiencesSectionTitle()
			})
		}), c.map(function(e) {
			var n, a = (n = i.get(e.id)) != null ? n : 0, l = e.id === "active_chats" || e.id === "inactive_chats", s = o("WAWebBizBroadcastsAudienceStrings").getSuggestedAudienceCardSubtitle(a, l ? o("WAWebBizBroadcastsAudienceStrings").getDurationLabelForDays(30) : void 0), c = e.icon;
			return d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flex, g.audienceItem), { children: d.jsx(r("WAWebCellV2.react"), {
				size: "medium",
				material: !0,
				onClick: function() {
					return t(e);
				},
				testid: "suggested-audience-item-" + e.id,
				detailLeft: d.jsx(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "center",
					xstyle: g.suggestedIconWrapper,
					children: d.jsx(c, { colorName: "contentInverse" })
				}),
				detailLeftXStyle: [f.paddingInlineStart13],
				primary: d.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDefault",
					children: e.title()
				}),
				secondary: d.jsx(r("WDSText.react"), {
					type: "Body3",
					colorName: "contentDeemphasized",
					children: s
				})
			}) }), e.id);
		})] });
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.audiences, l = a.onBack, s = a.onCancel, u = a.onCreateAudience, c = a.onImportAudience, m = a.onSelectAudience, _ = a.onSuggestedCardPress, f = a.suggestedAudiencesEnabled, g = a.viewType;
		p(function() {
			o("WAWebBizBroadcastTos").isBizBroadcastTosAccepted() || o("WAWebModalManager").ModalManager.openSupportModal(d.jsx(r("WAWebBizBroadcastTosModal.react"), {
				entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
				onAccept: function() {
					o("WAWebModalManager").ModalManager.closeSupportOrModal();
				},
				onDismiss: function() {
					o("WAWebModalManager").ModalManager.closeSupportOrModal(), l();
				}
			}));
		}, [l]);
		var b = g === r("WAWebDrawerViewType").FLYOUT ? o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.FLYOUT : o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL;
		return d.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			testid: "new-broadcast-audience-drawer",
			viewType: g,
			children: [d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: o("WAWebBizBroadcastsCreationStrings").getCreateBroadcastDrawerTitle(),
				type: b,
				onBack: g === r("WAWebDrawerViewType").FLYOUT ? void 0 : l,
				onCancel: s
			}), d.jsxs(r("WAWebDrawerBody.react"), { children: [
				d.jsxs("div", {
					className: "x1xrf6ya xde1mab xscbp6u x1iw51ew",
					children: [d.jsx(h, {
						icon: d.jsx(r("WDSIconIcAdd.react"), { colorName: "contentInverse" }),
						label: o("WAWebBizBroadcastsCreationStrings").getCreateAudienceLabel(),
						onClick: function() {
							o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createAudienceButtonClicked(o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST), u();
						},
						testid: "create-audience-button"
					}), d.jsx(h, {
						icon: d.jsx(r("WDSIconIcUpload.react"), { colorName: "contentInverse" }),
						label: o("WAWebBizBroadcastsCreationStrings").getImportAudienceLabel(),
						onClick: function() {
							o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceButtonClicked(o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST), c();
						},
						testid: "import-audience-button"
					})]
				}),
				f === !0 && _ != null && d.jsx(C, { onCardPress: _ }),
				i.length > 0 && d.jsxs(d.Fragment, { children: [d.jsx("div", {
					className: "x16ovd2e x12xbjc7 x1iw51ew xde1mab",
					children: d.jsx(r("WDSText.react"), {
						type: "Body2Emphasized",
						colorName: "contentDeemphasized",
						children: o("WAWebBizBroadcastsCreationStrings").getExistingAudiencesLabel()
					})
				}), i.map(function(e) {
					return d.jsx(y, {
						audience: e,
						onSelect: m
					}, e.broadcastJid);
				})] })
			] })]
		});
	}
	b.displayName = b.name + " [from " + i.id + "]", l.default = b;
}), 98);
