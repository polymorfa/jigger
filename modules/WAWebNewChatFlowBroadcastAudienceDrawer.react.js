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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(12), n = e.icon, a = e.label, i = e.onClick, l = e.testid, s;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (s = (u || (u = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flex, g.pinnedItem), t[0] = s) : s = t[0];
		var c;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (c = { className: "x6s0dn4 x3l9nec x1c9tyrk xeusxvb x1pahc9y x1ertn4p x78zum5 x112a4uq xl56j7k x15jighw" }, t[1] = c) : c = t[1];
		var m;
		t[2] !== n ? (m = d.jsx("div", babelHelpers.extends({}, c, { children: n })), t[2] = n, t[3] = m) : m = t[3];
		var p;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (p = [f.paddingInlineStart13], t[4] = p) : p = t[4];
		var _;
		t[5] !== a ? (_ = d.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "contentDefault",
			children: a
		}), t[5] = a, t[6] = _) : _ = t[6];
		var h;
		return t[7] !== i || t[8] !== m || t[9] !== _ || t[10] !== l ? (h = d.jsx("div", babelHelpers.extends({}, s, { children: d.jsx(r("WAWebCellV2.react"), {
			size: "medium",
			material: !0,
			onClick: i,
			testid: l,
			detailLeft: m,
			detailLeftXStyle: p,
			primary: _
		}) })), t[7] = i, t[8] = m, t[9] = _, t[10] = l, t[11] = h) : h = t[11], h;
	}
	function y(e) {
		var t = o("react-compiler-runtime").c(16), n = e.audience, a = e.onSelect, i;
		t[0] !== n || t[1] !== a ? (i = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.newChatFlowAudienceListItemClicked(n.broadcastJid), a(n);
		}, t[0] = n, t[1] = a, t[2] = i) : i = t[2];
		var l = i, s;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (s = (u || (u = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flex, g.audienceItem), t[3] = s) : s = t[3];
		var c, m;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (c = d.jsx(r("WAWebDefaultProfilePicture.react"), {
			type: "business-broadcast",
			size: 48
		}), m = [f.paddingInlineStart13], t[4] = c, t[5] = m) : (c = t[4], m = t[5]);
		var p;
		t[6] !== n.name ? (p = d.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDefault",
			children: n.name
		}), t[6] = n.name, t[7] = p) : p = t[7];
		var _;
		t[8] !== n.recipientCount ? (_ = o("WAWebBizBroadcastsCreationStrings").getExistingAudienceRecipientsLabel(n.recipientCount), t[8] = n.recipientCount, t[9] = _) : _ = t[9];
		var h;
		t[10] !== _ ? (h = d.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: "contentDeemphasized",
			children: _
		}), t[10] = _, t[11] = h) : h = t[11];
		var y;
		return t[12] !== l || t[13] !== p || t[14] !== h ? (y = d.jsx("div", babelHelpers.extends({}, s, { children: d.jsx(r("WAWebCellV2.react"), {
			size: "medium",
			material: !0,
			onClick: l,
			testid: "audience-item",
			detailLeft: c,
			detailLeftXStyle: m,
			primary: p,
			secondary: h
		}) })), t[12] = l, t[13] = p, t[14] = h, t[15] = y) : y = t[15], y;
	}
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
		var n = o("react-compiler-runtime").c(38), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, s = l.audiences, u = l.onBack, c = l.onCancel, m = l.onCreateAudience, _ = l.onImportAudience, f = l.onSelectAudience, g = l.onSuggestedCardPress, b = l.suggestedAudiencesEnabled, S = l.viewType, R, L;
		n[3] !== u ? (R = function() {
			o("WAWebBizBroadcastTos").isBizBroadcastTosAccepted() || o("WAWebModalManager").ModalManager.openSupportModal(d.jsx(r("WAWebBizBroadcastTosModal.react"), {
				entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
				onAccept: v,
				onDismiss: function() {
					o("WAWebModalManager").ModalManager.closeSupportOrModal(), u();
				}
			}));
		}, L = [u], n[3] = u, n[4] = R, n[5] = L) : (R = n[4], L = n[5]), p(R, L);
		var E = S === r("WAWebDrawerViewType").FLYOUT ? o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.FLYOUT : o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL, k;
		n[6] === Symbol.for("react.memo_cache_sentinel") ? (k = o("WAWebBizBroadcastsCreationStrings").getCreateBroadcastDrawerTitle(), n[6] = k) : k = n[6];
		var I = S === r("WAWebDrawerViewType").FLYOUT ? void 0 : u, T;
		n[7] !== E || n[8] !== c || n[9] !== I ? (T = d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: k,
			type: E,
			onBack: I,
			onCancel: c
		}), n[7] = E, n[8] = c, n[9] = I, n[10] = T) : T = n[10];
		var D;
		n[11] === Symbol.for("react.memo_cache_sentinel") ? (D = { className: "x1xrf6ya xde1mab xscbp6u x1iw51ew" }, n[11] = D) : D = n[11];
		var x, $;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (x = d.jsx(r("WDSIconIcAdd.react"), { colorName: "contentInverse" }), $ = o("WAWebBizBroadcastsCreationStrings").getCreateAudienceLabel(), n[12] = x, n[13] = $) : (x = n[12], $ = n[13]);
		var P;
		n[14] !== m ? (P = d.jsx(h, {
			icon: x,
			label: $,
			onClick: function() {
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createAudienceButtonClicked(o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST), m();
			},
			testid: "create-audience-button"
		}), n[14] = m, n[15] = P) : P = n[15];
		var N, M;
		n[16] === Symbol.for("react.memo_cache_sentinel") ? (N = d.jsx(r("WDSIconIcUpload.react"), { colorName: "contentInverse" }), M = o("WAWebBizBroadcastsCreationStrings").getImportAudienceLabel(), n[16] = N, n[17] = M) : (N = n[16], M = n[17]);
		var w;
		n[18] !== _ ? (w = d.jsx(h, {
			icon: N,
			label: M,
			onClick: function() {
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceButtonClicked(o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST), _();
			},
			testid: "import-audience-button"
		}), n[18] = _, n[19] = w) : w = n[19];
		var A;
		n[20] !== w || n[21] !== P ? (A = d.jsxs("div", babelHelpers.extends({}, D, { children: [P, w] })), n[20] = w, n[21] = P, n[22] = A) : A = n[22];
		var F;
		n[23] !== g || n[24] !== b ? (F = b === !0 && g != null && d.jsx(C, { onCardPress: g }), n[23] = g, n[24] = b, n[25] = F) : F = n[25];
		var O;
		n[26] !== s || n[27] !== f ? (O = s.length > 0 && d.jsxs(d.Fragment, { children: [d.jsx("div", {
			className: "x16ovd2e x12xbjc7 x1iw51ew xde1mab",
			children: d.jsx(r("WDSText.react"), {
				type: "Body2Emphasized",
				colorName: "contentDeemphasized",
				children: o("WAWebBizBroadcastsCreationStrings").getExistingAudiencesLabel()
			})
		}), s.map(function(e) {
			return d.jsx(y, {
				audience: e,
				onSelect: f
			}, e.broadcastJid);
		})] }), n[26] = s, n[27] = f, n[28] = O) : O = n[28];
		var B;
		n[29] !== A || n[30] !== F || n[31] !== O ? (B = d.jsxs(r("WAWebDrawerBody.react"), { children: [
			A,
			F,
			O
		] }), n[29] = A, n[30] = F, n[31] = O, n[32] = B) : B = n[32];
		var W;
		return n[33] !== i || n[34] !== B || n[35] !== T || n[36] !== S ? (W = d.jsxs(r("WAWebDrawer.react"), {
			ref: i,
			testid: "new-broadcast-audience-drawer",
			viewType: S,
			children: [T, B]
		}), n[33] = i, n[34] = B, n[35] = T, n[36] = S, n[37] = W) : W = n[37], W;
	}
	function v() {
		o("WAWebModalManager").ModalManager.closeSupportOrModal();
	}
	l.default = b;
}), 98);
