__d("WAWebBizAdDetailsInfo.react", [
	"fbt",
	"FBLogger",
	"WAWebBizAdTargetingSpecUtils",
	"WAWebBizBoostingStatusUtils",
	"WAWebCopyPasteSelectable.react",
	"WAWebFlex.react",
	"WAWebL10nGetRenderedLocale",
	"WDSIconIcCalendarMonth.react",
	"WDSIconIcGroup.react",
	"WDSIconIcLabel.react",
	"WDSIconIcPayments.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useMemo, d = {
		row: {
			boxSizing: "x9f619",
			paddingInlineEnd: "xde1mab",
			paddingInlineStart: "xdylf7x",
			$$css: !0
		},
		textContainer: {
			paddingTop: "x1xrf6ya",
			paddingBottom: "xscbp6u",
			$$css: !0
		}
	};
	function m(e) {
		var t = e.Icon, n = e.children, r = e.iconColorName;
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 16,
			xstyle: d.row,
			children: [u.jsx(t, {
				colorName: r,
				height: 20,
				width: 20
			}), n]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.formattedEndDate, n = e.isContinuousDurationAd;
		return n ? u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1",
			children: s._(
				/*BTDS*/
				""
			)
		}) : t != null ? u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1",
			children: t
		}) : null;
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t, n = e.item, a = n.adgroupId, i = n.audience, l = n.boostingStatus, _ = n.boostingStatusDisplayText, f = n.durationInDays, g = n.formattedBudget, h = n.startTime, y = o("WAWebBizBoostingStatusUtils").getBoostingStatusDisplayText(l, _), C = o("WAWebBizBoostingStatusUtils").getBoostingStatusColorName(l), b = o("WAWebBizBoostingStatusUtils").getStatusIconConfig(l), v = o("WAWebL10nGetRenderedLocale").WAWebL10nGetRenderedLocale().replace("_", "-"), S = c(function() {
			return new Intl.DateTimeFormat(v, {
				day: "numeric",
				hour: "numeric",
				minute: "2-digit",
				month: "short",
				year: "numeric"
			});
		}, [v]), R = c(function() {
			return h == null ? null : S.format(h * 1e3);
		}, [h, S]), L = c(function() {
			if (h == null || f == null || f === 0) return null;
			var e = h * 1e3 + f * 24 * 60 * 60 * 1e3;
			return S.format(e);
		}, [
			h,
			f,
			S
		]), E = f == null || f === 0, k = c(function() {
			var e = i == null ? void 0 : i.targetSpecStringWithoutPlacements;
			if (e == null) return null;
			try {
				return JSON.parse(e);
			} catch (e) {
				return r("FBLogger")("wa_ctwa_web").warn("Failed to parse targeting spec JSON"), null;
			}
		}, [i == null ? void 0 : i.targetSpecStringWithoutPlacements]), I = o("WAWebBizAdTargetingSpecUtils").getLocationString(k), T = o("WAWebBizAdTargetingSpecUtils").getInterestsString(k), D = [I, T].filter(Boolean).join(" · "), x = k == null ? void 0 : k.age_range, $ = x != null ? x[0] : k == null ? void 0 : k.age_min, P = x != null ? x[1] : k == null ? void 0 : k.age_max, N = o("WAWebBizAdTargetingSpecUtils").getGenderLabel(k == null || (t = k.genders) == null ? void 0 : t[0]), M = 65, w = null;
		if ($ != null && P != null) {
			var A = P >= M ? P + "+" : "" + P;
			$ === P ? w = A : w = $ + "-" + A;
		}
		var F = [w, N].filter(Boolean).join(" · ");
		return u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [
			u.jsx(m, {
				Icon: b.Icon,
				iconColorName: b.colorName,
				children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: d.textContainer,
					children: [u.jsx(r("WDSText.react"), {
						colorName: C,
						type: "Body1",
						children: y
					}), u.jsx(r("WDSText.react"), {
						colorName: "contentDeemphasized",
						type: "Body2",
						children: s._(
							/*BTDS*/
							""
						)
					})]
				})
			}),
			i != null ? u.jsx(m, {
				Icon: r("WDSIconIcGroup.react"),
				iconColorName: "contentDeemphasized",
				children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: d.textContainer,
					children: [
						D !== "" ? u.jsx(r("WDSText.react"), {
							colorName: "contentDefault",
							type: "Body1",
							children: D
						}) : null,
						F !== "" ? u.jsx(r("WDSText.react"), {
							colorName: "contentDefault",
							type: "Body1",
							children: F
						}) : null,
						u.jsx(r("WDSText.react"), {
							colorName: "contentDeemphasized",
							type: "Body2",
							children: s._(
								/*BTDS*/
								""
							)
						})
					]
				})
			}) : null,
			u.jsx(m, {
				Icon: r("WDSIconIcPayments.react"),
				iconColorName: "contentDeemphasized",
				children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: d.textContainer,
					children: [g != null ? u.jsx(r("WDSText.react"), {
						colorName: "contentDefault",
						type: "Body1",
						children: E ? s._(
							/*BTDS*/
							"",
							[s._param("budget", g)]
						) : s._(
							/*BTDS*/
							"",
							[s._plural(f != null ? f : 0, "number", f != null ? f : 0), s._param("budget", g)]
						)
					}) : null, u.jsx(r("WDSText.react"), {
						colorName: "contentDeemphasized",
						type: "Body2",
						children: s._(
							/*BTDS*/
							""
						)
					})]
				})
			}),
			u.jsx(m, {
				Icon: r("WDSIconIcCalendarMonth.react"),
				iconColorName: "contentDeemphasized",
				children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: d.textContainer,
					children: [R != null ? u.jsx(r("WDSText.react"), {
						colorName: "contentDefault",
						type: "Body1",
						children: R
					}) : null, u.jsx(r("WDSText.react"), {
						colorName: "contentDeemphasized",
						type: "Body2",
						children: s._(
							/*BTDS*/
							""
						)
					})]
				})
			}),
			u.jsx(m, {
				Icon: r("WDSIconIcCalendarMonth.react"),
				iconColorName: "contentDeemphasized",
				children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: d.textContainer,
					children: [u.jsx(p, {
						formattedEndDate: L,
						isContinuousDurationAd: E
					}), u.jsx(r("WDSText.react"), {
						colorName: "contentDeemphasized",
						type: "Body2",
						children: s._(
							/*BTDS*/
							""
						)
					})]
				})
			}),
			u.jsx(m, {
				Icon: r("WDSIconIcLabel.react"),
				iconColorName: "contentDeemphasized",
				children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: d.textContainer,
					children: [u.jsx(o("WAWebCopyPasteSelectable.react").SelectableSpan, {
						selectable: !0,
						children: u.jsx(r("WDSText.react"), {
							colorName: "contentDefault",
							type: "Body1",
							children: a
						})
					}), u.jsx(r("WDSText.react"), {
						colorName: "contentDeemphasized",
						type: "Body2",
						children: s._(
							/*BTDS*/
							""
						)
					})]
				})
			})
		] });
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
