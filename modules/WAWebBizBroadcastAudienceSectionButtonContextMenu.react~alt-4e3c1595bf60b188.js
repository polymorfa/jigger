__d("WAWebBizBroadcastAudienceSectionButtonContextMenu.react", [
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
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useState;
	function p(e) {
		var t = e.entryPoint, n = e.onExistingAudiences, a = e.onImportAudience, i = e.onNewAudience, l = e.onSuggestedAudiencePress, u = e.selectedCardIds, p = e.showExistingAudienceRow, _ = e.surface;
		d(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createBroadcastAudienceMenuViewed(p, t);
		}, [p, t]);
		var f = m(null), g = f[0], h = f[1], y = l != null;
		d(function() {
			if (y) {
				var e = !1;
				return (async function() {
					var n = await Promise.all(o("WAWebSuggestedAudienceCards").SUGGESTED_AUDIENCE_CARDS.map(async function(e) {
						try {
							var t = await o("WAWebSuggestedAudienceCards").resolveCardExpression(e), n = await o("WAWebAudienceResolver").resolveAudienceExpression(t);
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
					}));
					if (!e) {
						var r = o("WAWebBizBroadcastRecipientLimitCommon").getRecipientLimit(), a = n.filter(function(e) {
							var t = e.count;
							return t >= o("WAWebBizBroadcastRecipientLimitCommon").MIN_RECIPIENTS && t <= r;
						});
						h(a), a.length > 0 && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.suggestedAudienceCardsViewed(a.length, t, _);
					}
				})(), function() {
					e = !0;
				};
			}
		}, [
			y,
			t,
			_
		]);
		var C = g == null ? void 0 : g.filter(function(e) {
			var t = e.card;
			return u == null || !u.has(t.id);
		}), b = c(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createBroadcastAudienceMenuExistingAudiencesClicked(t), n == null || n();
		}, [t, n]), v = c(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createAudienceButtonClicked(t, _), i == null || i();
		}, [
			t,
			_,
			i
		]), S = c(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceButtonClicked(t, _), a == null || a();
		}, [
			t,
			_,
			a
		]);
		return s.jsxs(r("WDSMenu.react"), { children: [
			p && s.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcGroup.react"),
				title: o("WAWebBizBroadcastsCreationStrings").getExistingAudiencesLabel(),
				onPress: b,
				testid: "biz-broadcasts-create-audience-existing"
			}),
			s.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcAdd.react"),
				title: o("WAWebBizBroadcastsCreationStrings").getCreateAudienceLabel(),
				onPress: v,
				testid: "biz-broadcasts-create-audience-new"
			}),
			s.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcUpload.react"),
				title: o("WAWebBizBroadcastsCreationStrings").getImportAudienceLabel(),
				onPress: S,
				testid: "biz-broadcasts-create-audience-import"
			}),
			l != null && C != null && C.length > 0 && s.jsxs(s.Fragment, { children: [
				s.jsx(r("WDSMenuItem.react"), { type: "separator" }),
				s.jsx(r("WDSMenuItem.react"), {
					type: "groupHeader",
					title: o("WAWebBizBroadcastsAudienceStrings").getSuggestedAudiencesSectionTitle()
				}),
				C.map(function(e) {
					var t = e.card, n = e.count, a = t.icon, i = t.id === "active_chats" || t.id === "inactive_chats", u = o("WAWebBizBroadcastsAudienceStrings").getSuggestedAudienceCardSubtitle(n, i ? o("WAWebBizBroadcastsAudienceStrings").getDurationLabelForDays(30) : void 0);
					return s.jsx(r("WDSMenuItem.react"), {
						Icon: a,
						onPress: function() {
							return l(t);
						},
						subtitle: u,
						testid: "suggested-audience-menu-item-" + t.id,
						title: t.title()
					}, t.id);
				})
			] })
		] });
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
