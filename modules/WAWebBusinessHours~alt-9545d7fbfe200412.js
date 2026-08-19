__d("WAWebBusinessHours", [
	"fbt",
	"WAWebBusinessHoursDayEdit.react",
	"WAWebBusinessHoursUtils",
	"WAWebBusinessProfileTypes",
	"WAWebModal.react",
	"WAWebSavePopup.react",
	"WAWebTabs.react",
	"WAWebUtilsLogQplEvents",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState, d = { surface: "smb-business-profile-edit-business-hours-detail" };
	function m(e) {
		var t = e.onSelect, n = e.selectedMode;
		return u.jsx(r("WAWebTabs.react"), {
			onSelect: t,
			selectedId: n,
			tabConfigs: [
				{
					id: o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.SPECIFIC_HOURS,
					title: s._(
						/*BTDS*/
						""
					)
				},
				{
					id: o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.OPEN_24H,
					title: s._(
						/*BTDS*/
						""
					)
				},
				{
					id: o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.APPOINTMENT_ONLY,
					title: s._(
						/*BTDS*/
						""
					)
				}
			]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.days, n = e.daysOrder, o = e.onDayValuesChange, a = e.onModeChange, i = e.selectedMode, l = function(n, r) {
			var e, a = t[n], i = babelHelpers.extends({}, t, (e = {}, e[n] = babelHelpers.extends({}, a, r), e));
			o(i);
		};
		return u.jsxs("div", { children: [u.jsx(m, {
			selectedMode: i,
			onSelect: a
		}), u.jsx("div", {
			className: "x120ee7l x1q0q8m5 xso031l x1jxig9j x1odjw0f xvue9z x1yrsyyn x1icxu4v x10b6aqq x25sj25",
			children: n.map(function(e) {
				var n = t[e];
				return u.jsx(r("WAWebBusinessHoursDayEdit.react"), {
					day: n,
					mode: i,
					updateDayValue: function(n) {
						return l(e, n);
					}
				}, e);
			})
		})] });
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.afterSave, a = e.businessHours, i = e.onCancel, l = e.saveBusinessProfile, m = a.days, _ = a.note, f = a.timezone, g = c(a.mode || o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.SPECIFIC_HOURS), h = g[0], y = g[1], C = c(function() {
			var e = {};
			for (var t of m) {
				var n = t.closed, r = t.dayKey, a = t.dayName, i = t.hours;
				e[r] = {
					closed: n,
					dayKey: r,
					dayName: a,
					hours: i || [o("WAWebBusinessHoursUtils").getDefaultHoursPair()]
				};
			}
			return e;
		}), b = C[0], v = C[1], S = m.map(function(e) {
			return e.dayKey;
		});
		return u.jsx(r("WAWebSavePopup.react"), {
			title: s._(
				/*BTDS*/
				""
			),
			modalConfig: { type: o("WAWebModal.react").ModalTheme.BusinessHours },
			isValid: o("WAWebBusinessHoursUtils").isValidBusinessHours(h, b),
			doSave: n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				o("WAWebUtilsLogQplEvents").qplStartProfileSave("bizHours"), yield l(o("WAWebBusinessHoursUtils").convertToRawBusinessProfile({
					dayValues: b,
					mode: h,
					note: _,
					timezone: f
				}));
			}),
			afterSave: t,
			onCancel: i,
			tsNavigationData: d,
			children: u.jsx(p, {
				selectedMode: h,
				onModeChange: y,
				days: b,
				onDayValuesChange: v,
				daysOrder: S
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
