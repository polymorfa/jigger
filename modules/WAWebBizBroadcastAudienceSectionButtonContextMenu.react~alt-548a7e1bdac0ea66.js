__d("WAWebBizBroadcastAudienceSectionButtonContextMenu.react", [
	"Promise",
	"WAWebAudienceResolver",
	"WAWebBizBroadcastRecipientLimitCommon",
	"WAWebBizBroadcastsAudienceStrings",
	"WAWebBizBroadcastsCreationStrings",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebSuggestedAudienceCards",
	"WDSIconIcAdd.react",
	"WDSIconIcGroup.react",
	"WDSIconIcUpload.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useEffect, p = c.useState;
	function _(t) {
		var a = t.entryPoint, i = t.onExistingAudiences, l = t.onImportAudience, s = t.onNewAudience, c = t.onSuggestedAudiencePress, _ = t.selectedCardIds, f = t.showExistingAudienceRow, g = t.surface;
		m(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createBroadcastAudienceMenuViewed(f, a);
		}, [f, a]);
		var h = p(null), y = h[0], C = h[1], b = c != null;
		m(function() {
			if (b) {
				var t = !1;
				return n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					var r = yield (e || (e = n("Promise"))).all(o("WAWebSuggestedAudienceCards").SUGGESTED_AUDIENCE_CARDS.map((function() {
						var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
							try {
								var t = yield o("WAWebSuggestedAudienceCards").resolveCardExpression(e), n = yield o("WAWebAudienceResolver").resolveAudienceExpression(t);
								return {
									card: e,
									count: n.length
								};
							} catch (t) {
								return {
									card: e,
									count: 0
								};
							}
						});
						return function(t) {
							return e.apply(this, arguments);
						};
					})()));
					if (!t) {
						var i = o("WAWebBizBroadcastRecipientLimitCommon").getRecipientLimit(), l = r.filter(function(e) {
							var t = e.count;
							return t >= o("WAWebBizBroadcastRecipientLimitCommon").MIN_RECIPIENTS && t <= i;
						});
						C(l), l.length > 0 && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.suggestedAudienceCardsViewed(l.length, a, g);
					}
				})(), function() {
					t = !0;
				};
			}
		}, [
			b,
			a,
			g
		]);
		var v = y == null ? void 0 : y.filter(function(e) {
			var t = e.card;
			return _ == null || !_.has(t.id);
		}), S = d(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createBroadcastAudienceMenuExistingAudiencesClicked(a), i == null || i();
		}, [a, i]), R = d(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createAudienceButtonClicked(a, g), s == null || s();
		}, [
			a,
			g,
			s
		]), L = d(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceButtonClicked(a, g), l == null || l();
		}, [
			a,
			g,
			l
		]);
		return u.jsxs(r("WDSMenu.react"), { children: [
			f && u.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcGroup.react"),
				title: o("WAWebBizBroadcastsCreationStrings").getExistingAudiencesLabel(),
				onPress: S,
				testid: "biz-broadcasts-create-audience-existing"
			}),
			u.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcAdd.react"),
				title: o("WAWebBizBroadcastsCreationStrings").getCreateAudienceLabel(),
				onPress: R,
				testid: "biz-broadcasts-create-audience-new"
			}),
			u.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcUpload.react"),
				title: o("WAWebBizBroadcastsCreationStrings").getImportAudienceLabel(),
				onPress: L,
				testid: "biz-broadcasts-create-audience-import"
			}),
			c != null && v != null && v.length > 0 && u.jsxs(u.Fragment, { children: [
				u.jsx(r("WDSMenuItem.react"), { type: "separator" }),
				u.jsx(r("WDSMenuItem.react"), {
					type: "groupHeader",
					title: o("WAWebBizBroadcastsAudienceStrings").getSuggestedAudiencesSectionTitle()
				}),
				v.map(function(e) {
					var t = e.card, n = e.count, a = t.icon, i = t.id === "active_chats" || t.id === "inactive_chats", l = o("WAWebBizBroadcastsAudienceStrings").getSuggestedAudienceCardSubtitle(n, i ? o("WAWebBizBroadcastsAudienceStrings").getDurationLabelForDays(30) : void 0);
					return u.jsx(r("WDSMenuItem.react"), {
						Icon: a,
						onPress: function() {
							return c(t);
						},
						subtitle: l,
						testid: "suggested-audience-menu-item-" + t.id,
						title: t.title()
					}, t.id);
				})
			] })
		] });
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 98);
