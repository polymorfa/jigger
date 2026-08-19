__d("useWAWebAllQuickPromotionsForSurface", [
	"WAWebImg.react",
	"WAWebQuickPromotionCollection",
	"WAWebQuickPromotionDebugLogger",
	"WAWebQuickPromotionSanitize.react",
	"WAWebQuickPromotionValidatorUtils",
	"WAWebRecUnitCardSelectionPipeline",
	"WAWebRecUnitInfoParser",
	"WAWebRecUnitProductCooldownManager",
	"WAWebThemeContext",
	"react",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useMemo, p = u.useState, _ = 5;
	function f(e) {
		var t = o("WAWebThemeContext").useIsDarkTheme(), n = e.surfaceId, r = c(function() {
			var t = o("WAWebQuickPromotionCollection").QuickPromotionCollection.allEligiblePromotionsForSurface(e);
			return t.length === 0 ? o("WAWebQuickPromotionDebugLogger").qpLog("fetch.cache.empty", { surfaceId: n }) : o("WAWebQuickPromotionDebugLogger").qpLog("fetch.cache.read", {
				surfaceId: n,
				eligibleCount: t.length,
				eligibleIds: t.map(function(e) {
					return e.promotion.id;
				})
			}), o("WAWebRecUnitCardSelectionPipeline").selectCards(t, _);
		}, [n]), a = p(function() {
			return r();
		}), i = a[0], l = a[1], s = c(function(e) {
			o("WAWebQuickPromotionDebugLogger").startQPDebugSession(n), o("WAWebQuickPromotionDebugLogger").qpLog("session.rerun", {
				surfaceId: n,
				trigger: e
			}), l(r());
		}, [r, n]);
		d(function() {
			l(r());
		}, [l, r]), o("useWAWebListener").useListener(o("WAWebQuickPromotionCollection").QuickPromotionCollection, "add", function() {
			return s("collection_add");
		}), o("useWAWebListener").useListener(o("WAWebQuickPromotionCollection").QuickPromotionCollection, "change", function() {
			return s("collection_change");
		});
		var u = m(function() {
			return i.map(function(e) {
				return y(e, t);
			});
		}, [i, t]);
		return d(function() {
			return function() {
				window.requestAnimationFrame(function() {
					for (var e of u) e != null && window.URL.revokeObjectURL(e);
				});
			};
		}, [u]), m(function() {
			return i.map(function(e, n) {
				return C(e, t, s, u[n]);
			});
		}, [
			i,
			t,
			s,
			u
		]);
	}
	var g = "wa_wds_icon", h = "ctwa_thumnail_url_for_boosted_component";
	function y(e, t) {
		var n = e.promotion.data, r = n.image;
		if (r != null) {
			var a, i, l = t ? (a = r.dark) == null ? void 0 : a.elementValue : (i = r.light) == null ? void 0 : i.elementValue;
			if (l != null) try {
				return window.URL.createObjectURL(new Blob([l]));
			} catch (e) {}
		}
		var s = o("WAWebQuickPromotionValidatorUtils").getQuickPromotionContentAttribute(n, g);
		if (s != null && s !== "") try {
			for (var u = atob(s), c = new Uint8Array(u.length), d = 0; d < u.length; d++) c[d] = u.charCodeAt(d);
			return window.URL.createObjectURL(new Blob([c]));
		} catch (e) {}
		var m = o("WAWebQuickPromotionValidatorUtils").getQuickPromotionContentAttribute(n, h);
		return m != null && m !== "" ? m : null;
	}
	function C(e, t, n, a) {
		var i, l, u, c, d, m, p, _ = e.promotion.data, f = o("WAWebRecUnitInfoParser").parseRecUnitInfo(_.contentAttributes);
		return {
			promotionId: e.promotion.id,
			model: e,
			title: (i = _.titleElementValue) != null ? i : "",
			sanitizedText: s.jsx(r("WAWebQuickPromotionSanitize.react"), { dirty: _.textElementValue }),
			primaryActionTitle: (l = (u = _.primaryAction) == null ? void 0 : u.text) != null ? l : null,
			primaryActionUrl: (c = (d = _.primaryAction) == null ? void 0 : d.universalLink) != null ? c : null,
			isDismissable: _.qpConfigDismissable === "true",
			productTeamName: (m = f == null ? void 0 : f.productTeamName) != null ? m : null,
			image: a != null ? s.jsx(r("WAWebImg.react"), {
				src: a,
				alt: (p = _.image) == null ? void 0 : p.description,
				className: "xh8yej3 x5yr21d"
			}) : null,
			dismiss: _.qpConfigDismissable === "true" ? function() {
				f != null && o("WAWebRecUnitProductCooldownManager").startProductCooldown(f.productTeamName), e.dismiss(), n("dismiss");
			} : null,
			impression: function() {
				e.impression();
			},
			primaryActionClick: function() {
				e.primaryActionClick(), n("primary_click");
			}
		};
	}
	l.useAllQuickPromotionsForSurface = f;
}), 98);
