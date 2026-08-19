__d("WAWebBusinessHoursModal.react", [
	"fbt",
	"invariant",
	"WAWebBizProfileGatingUtils",
	"WAWebBusinessHoursModalContent.react",
	"WAWebBusinessHoursModeDropdownMenu.react",
	"WAWebBusinessHoursUtils",
	"WAWebBusinessProfileSMBUserJourneyLogger",
	"WAWebBusinessProfileTypes",
	"WAWebDropdown.react",
	"WAWebIcChevronDownMenuIcon.react",
	"WAWebMenuBar.react",
	"WAWebModal.react",
	"WAWebSavePopup.react",
	"WAWebSmbUtilsTimeUtils",
	"WDSText.react",
	"asyncToGeneratorRuntime",
	"isStringNullOrEmpty",
	"react"
], (function(t, n, r, o, a, i, l, s, u) {
	var e, c = e || (e = o("react")), d = e, m = d.useMemo, p = d.useState, _ = {
		fri: 5,
		mon: 1,
		sat: 6,
		sun: 7,
		thu: 4,
		tue: 2,
		wed: 3
	}, f = {
		appointment_only: 3,
		open_24h: 1,
		specific_hours: 2
	}, g = {
		menuBarItemContainerOverride: {
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			$$css: !0
		},
		textFieldLikeButton: {
			backgroundColor: "xjbqb8w",
			borderStartStartRadius: "x1kev0bf",
			borderStartEndRadius: "x18pz1ep",
			borderEndEndRadius: "xqzujny",
			borderEndStartRadius: "x1gm2dcp",
			boxSizing: "x9f619",
			cursor: "x1ypdohk",
			flexDirection: "x15zctf7",
			height: "x1vqgdyp",
			justifyContent: "x1qughib",
			maxWidth: "x193iq5w",
			outlineColor: "xod3euw",
			outlineStyle: "xaatb59",
			outlineWidth: "x1qgsegg",
			paddingInlineStart: "x1iw51ew",
			paddingInlineEnd: "xde1mab",
			paddingLeft: null,
			paddingRight: null,
			pointerEvents: "x67bb7w",
			width: "xh8yej3",
			$$css: !0
		}
	};
	function h(e) {
		var t, a, i, l, d, h, C = p((t = (a = e.businessHours) == null ? void 0 : a.mode) != null ? t : "specific_hours"), b = C[0], v = C[1], S = p((i = (l = e.businessHours) == null ? void 0 : l.days) != null ? i : []), R = S[0], L = S[1], E = (d = e.businessHours) == null ? void 0 : d.days, k = (h = e.businessHours) == null ? void 0 : h.mode, I = p(E), T = I[0], D = I[1], x = p(k), $ = x[0], P = x[1];
		e.businessHours && (E !== T || k !== $) && (D(E), P(k), v(k != null ? k : "specific_hours"), L(E != null ? E : []));
		var N = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				var n = [];
				R.forEach(function(e) {
					var t = e.closed, r = e.dayKey, a = e.hours;
					if (!t && o("WAWebBusinessProfileTypes").isBusinessHoursDayName(r)) {
						var i = _[r], l = f[b];
						i != null && l != null && (b === "specific_hours" && a ? a.forEach(function(e) {
							var t = e[0], r = e[1], a = o("WAWebSmbUtilsTimeUtils").timeStringToMinutes(t), s = o("WAWebSmbUtilsTimeUtils").timeStringToMinutes(r);
							a != null && s != null || u(0, 151315), n.push({
								close_time: s,
								day_of_week: i,
								mode: l,
								open_time: a
							});
						}) : n.push({
							close_time: 0,
							day_of_week: i,
							mode: l,
							open_time: 0
						}));
					}
				});
				try {
					var r;
					return yield e.saveBusinessProfileGraphQL({ business_hours: {
						note: (r = e.businessHours) == null ? void 0 : r.note,
						operating_ranges: n,
						timezone_id: t
					} }), null;
				} catch (e) {
					return "Failed to save business hours";
				}
			});
			return function(n) {
				return t.apply(this, arguments);
			};
		})(), M = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var t, n, a, i = r("isStringNullOrEmpty")((t = e.businessHours) == null ? void 0 : t.timezone) ? Intl.DateTimeFormat().resolvedOptions().timeZone : (n = e.businessHours) == null ? void 0 : n.timezone;
				if (o("WAWebBizProfileGatingUtils").bizProfileGraphQLMigrationEnabled()) return N(i);
				var l = {};
				R.forEach(function(e) {
					var t = e.dayKey, n = e.closed, r = e.hours;
					if (!n && o("WAWebBusinessProfileTypes").isBusinessHoursDayName(t)) {
						var a = { mode: b };
						b === "specific_hours" && r && (a.hours = r.map(function(e) {
							var t = e[0], n = e[1];
							return [o("WAWebSmbUtilsTimeUtils").timeStringToMinutes(t) || 0, o("WAWebSmbUtilsTimeUtils").timeStringToMinutes(n) || 0];
						})), l[t] = a;
					}
				});
				var s = {
					config: l,
					note: (a = e.businessHours) == null ? void 0 : a.note,
					timezone: i
				};
				try {
					return yield e.saveBusinessProfile({ businessHours: s }), null;
				} catch (e) {
					return "Failed to save business hours";
				}
			});
			return function() {
				return t.apply(this, arguments);
			};
		})(), w = function(t) {
			v(t), t === "specific_hours" && L(function(e) {
				return e.map(function(e) {
					return !e.closed && (!e.hours || e.hours.length === 0) ? babelHelpers.extends({}, e, { hours: [o("WAWebBusinessHoursUtils").getDefaultHoursPair()] }) : e;
				});
			});
		}, A = function(t) {
			L(function(e) {
				return e.map(function(e) {
					if (e.dayKey === t) {
						var n, r = (n = e.hours) != null ? n : [];
						return babelHelpers.extends({}, e, { hours: [].concat(r, [["9:00am", "6:00pm"]]) });
					}
					return e;
				});
			});
		}, F = function(t, n) {
			L(function(e) {
				return e.map(function(e) {
					if (e.dayKey === t && e.hours != null) {
						var r = e.hours.filter(function(e, t) {
							return t !== n;
						});
						return babelHelpers.extends({}, e, { hours: r });
					}
					return e;
				});
			});
		}, O = function(t) {
			L(function(e) {
				return e.map(function(e) {
					if (e.dayKey === t) {
						var n = !e.closed;
						return b === "specific_hours" && e.closed && !n && (!e.hours || e.hours.length === 0) ? babelHelpers.extends({}, e, {
							closed: n,
							hours: [o("WAWebBusinessHoursUtils").getDefaultHoursPair()]
						}) : babelHelpers.extends({}, e, { closed: n });
					}
					return e;
				});
			});
		}, B = function(t, n, r, o) {
			L(function(e) {
				return e.map(function(e) {
					if (e.dayKey === t && e.hours != null) {
						var a = e.hours.map(function(e, t) {
							return t === n ? r === "open" ? [o, e[1]] : [e[0], o] : e;
						});
						return babelHelpers.extends({}, e, { hours: a });
					}
					return e;
				});
			});
		}, W = m(function() {
			var t, n, r, o, a = (t = (n = e.businessHours) == null ? void 0 : n.mode) != null ? t : "specific_hours", i = (r = (o = e.businessHours) == null ? void 0 : o.days) != null ? r : [];
			if (b !== a || R.length !== i.length) return !0;
			for (var l = 0; l < R.length; l++) {
				var s, u, c = R[l], d = i[l];
				if (c.dayKey !== d.dayKey || c.closed !== d.closed) return !0;
				var m = (s = c.hours) != null ? s : [], p = (u = d.hours) != null ? u : [];
				if (m.length !== p.length) return !0;
				for (var _ = 0; _ < m.length; _++) if (m[_][0] !== p[_][0] || m[_][1] !== p[_][1]) return !0;
			}
			return !1;
		}, [
			b,
			R,
			e.businessHours
		]), q = m(function() {
			if (b === "specific_hours") for (var e of R) {
				var t = e.closed, n = e.hours;
				if (!t && n) for (var r of n) {
					var a = r[0], i = r[1];
					if (!o("WAWebBusinessHoursUtils").isValidTime(a) || !o("WAWebBusinessHoursUtils").isValidTime(i)) return !1;
				}
			}
			return !0;
		}, [b, R]), U = function(t) {
			t === void 0 && (t = !1), t || o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.saveBusinessHours(o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType.UNCHANGED);
		}, V = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var t, n, r = o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType.MODIFY, a = ((t = e.businessHours) == null ? void 0 : t.mode) != null && ((n = e.businessHours) == null ? void 0 : n.days) != null;
				return a ? R.every(function(e) {
					return e.closed;
				}) && (r = o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType.REMOVE) : r = o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType.ADD, o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.saveBusinessHours(r), M();
			});
			return function() {
				return t.apply(this, arguments);
			};
		})();
		return c.jsxs(r("WAWebSavePopup.react"), {
			title: s._(
				/*BTDS*/
				""
			),
			doSave: V,
			isValid: W && q,
			modalConfig: { type: o("WAWebModal.react").ModalTheme.BusinessProfile },
			onCancel: function() {
				return U(!1);
			},
			afterSave: function() {
				return U(!0);
			},
			tsNavigationData: e.tsNavigationData,
			children: [
				c.jsx("div", {
					className: "x1aj3ljl xvpt6g3 x1phvje8 xcldk2z",
					children: c.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: s._(
							/*BTDS*/
							""
						)
					})
				}),
				c.jsx("div", {
					className: "x9f619 xb0esv5 xyo0t3i xh8yej3",
					children: c.jsx(o("WAWebMenuBar.react").MenuBarItem, {
						icon: c.jsx(o("WAWebIcChevronDownMenuIcon.react").IcChevronDownMenuIcon, {}),
						text: o("WAWebBusinessHoursUtils").getModeDisplayName(b).toString(),
						title: o("WAWebBusinessHoursUtils").getModeDisplayName(b),
						xstyle: g.menuBarItemContainerOverride,
						buttonStyle: g.textFieldLikeButton,
						dropdownMenu: y(b, w)
					})
				}),
				c.jsx(r("WAWebBusinessHoursModalContent.react"), {
					businessHoursMode: b,
					days: R,
					onAddHours: A,
					onDayToggle: O,
					onRemoveHours: F,
					onTimeChange: B
				})
			]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e, t) {
		return {
			dirX: o("WAWebDropdown.react").DirX.RIGHT,
			dirY: o("WAWebDropdown.react").DirY.BOTTOM,
			menu: c.jsx(r("WAWebBusinessHoursModeDropdownMenu.react"), {
				selectedMode: e,
				onModeChange: t
			}),
			offsetX: 0,
			offsetY: 4,
			type: o("WAWebDropdown.react").MenuType.BusinessProfileDropdown
		};
	}
	l.default = h;
}), 226);
