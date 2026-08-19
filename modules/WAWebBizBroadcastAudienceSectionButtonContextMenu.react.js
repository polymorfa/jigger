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
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useEffect, p = c.useState;
	function _(t) {
		var a = o("react-compiler-runtime").c(39), i = t.entryPoint, l = t.onExistingAudiences, s = t.onImportAudience, c = t.onNewAudience, d = t.onSuggestedAudiencePress, _ = t.selectedCardIds, g = t.showExistingAudienceRow, h = t.surface, y, C;
		a[0] !== i || a[1] !== g ? (y = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createBroadcastAudienceMenuViewed(g, i);
		}, C = [g, i], a[0] = i, a[1] = g, a[2] = y, a[3] = C) : (y = a[2], C = a[3]), m(y, C);
		var b = p(null), v = b[0], S = b[1], R = d != null, L, E;
		a[4] !== i || a[5] !== R || a[6] !== h ? (L = function() {
			if (R) {
				var t = !1;
				return n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					var r = yield (e || (e = n("Promise"))).all(o("WAWebSuggestedAudienceCards").SUGGESTED_AUDIENCE_CARDS.map(f));
					if (!t) {
						var a = o("WAWebBizBroadcastRecipientLimitCommon").getRecipientLimit(), l = r.filter(function(e) {
							var t = e.count;
							return t >= o("WAWebBizBroadcastRecipientLimitCommon").MIN_RECIPIENTS && t <= a;
						});
						S(l), l.length > 0 && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.suggestedAudienceCardsViewed(l.length, i, h);
					}
				})(), (function() {
					t = !0;
				});
			}
		}, E = [
			R,
			i,
			h
		], a[4] = i, a[5] = R, a[6] = h, a[7] = L, a[8] = E) : (L = a[7], E = a[8]), m(L, E);
		var k;
		if (a[9] !== i || a[10] !== l || a[11] !== s || a[12] !== c || a[13] !== d || a[14] !== v || a[15] !== _ || a[16] !== g || a[17] !== h) {
			var I = v == null ? void 0 : v.filter(function(e) {
				var t = e.card;
				return _ == null || !_.has(t.id);
			}), T;
			a[19] !== i || a[20] !== l ? (T = function() {
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createBroadcastAudienceMenuExistingAudiencesClicked(i), l == null || l();
			}, a[19] = i, a[20] = l, a[21] = T) : T = a[21];
			var D = T, x;
			a[22] !== i || a[23] !== c || a[24] !== h ? (x = function() {
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createAudienceButtonClicked(i, h), c == null || c();
			}, a[22] = i, a[23] = c, a[24] = h, a[25] = x) : x = a[25];
			var $ = x, P;
			a[26] !== i || a[27] !== s || a[28] !== h ? (P = function() {
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceButtonClicked(i, h), s == null || s();
			}, a[26] = i, a[27] = s, a[28] = h, a[29] = P) : P = a[29];
			var N = P, M;
			a[30] !== D || a[31] !== g ? (M = g && u.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcGroup.react"),
				title: o("WAWebBizBroadcastsCreationStrings").getExistingAudiencesLabel(),
				onPress: D,
				testid: "biz-broadcasts-create-audience-existing"
			}), a[30] = D, a[31] = g, a[32] = M) : M = a[32];
			var w;
			a[33] === Symbol.for("react.memo_cache_sentinel") ? (w = o("WAWebBizBroadcastsCreationStrings").getCreateAudienceLabel(), a[33] = w) : w = a[33];
			var A;
			a[34] !== $ ? (A = u.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcAdd.react"),
				title: w,
				onPress: $,
				testid: "biz-broadcasts-create-audience-new"
			}), a[34] = $, a[35] = A) : A = a[35];
			var F;
			a[36] === Symbol.for("react.memo_cache_sentinel") ? (F = o("WAWebBizBroadcastsCreationStrings").getImportAudienceLabel(), a[36] = F) : F = a[36];
			var O;
			a[37] !== N ? (O = u.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcUpload.react"),
				title: F,
				onPress: N,
				testid: "biz-broadcasts-create-audience-import"
			}), a[37] = N, a[38] = O) : O = a[38], k = u.jsxs(r("WDSMenu.react"), { children: [
				M,
				A,
				O,
				d != null && I != null && I.length > 0 && u.jsxs(u.Fragment, { children: [
					u.jsx(r("WDSMenuItem.react"), { type: "separator" }),
					u.jsx(r("WDSMenuItem.react"), {
						type: "groupHeader",
						title: o("WAWebBizBroadcastsAudienceStrings").getSuggestedAudiencesSectionTitle()
					}),
					I.map(function(e) {
						var t = e.card, n = e.count, a = t.icon, i = t.id === "active_chats" || t.id === "inactive_chats", l = o("WAWebBizBroadcastsAudienceStrings").getSuggestedAudienceCardSubtitle(n, i ? o("WAWebBizBroadcastsAudienceStrings").getDurationLabelForDays(30) : void 0);
						return u.jsx(r("WDSMenuItem.react"), {
							Icon: a,
							onPress: function() {
								return d(t);
							},
							subtitle: l,
							testid: "suggested-audience-menu-item-" + t.id,
							title: t.title()
						}, t.id);
					})
				] })
			] }), a[9] = i, a[10] = l, a[11] = s, a[12] = c, a[13] = d, a[14] = v, a[15] = _, a[16] = g, a[17] = h, a[18] = k;
		} else k = a[18];
		return k;
	}
	function f(e) {
		return g.apply(this, arguments);
	}
	function g() {
		return g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
		}), g.apply(this, arguments);
	}
	l.default = _;
}), 98);
