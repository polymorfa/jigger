__d("WAWebBusinessHours", [
	"fbt",
	"WAWebBusinessHoursDayEdit.react",
	"WAWebBusinessHoursUtils",
	"WAWebBusinessProfileTypes",
	"WAWebModal.react",
	"WAWebSavePopup.react",
	"WAWebTabs.react",
	"WAWebUtilsLogQplEvents",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState, d = { surface: "smb-business-profile-edit-business-hours-detail" };
	function m(e) {
		var t = o("react-compiler-runtime").c(6), n = e.onSelect, a = e.selectedMode, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = {
			id: o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.SPECIFIC_HOURS,
			title: s._(
				/*BTDS*/
				""
			)
		}, t[0] = i) : i = t[0];
		var l;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (l = {
			id: o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.OPEN_24H,
			title: s._(
				/*BTDS*/
				""
			)
		}, t[1] = l) : l = t[1];
		var c;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (c = [
			i,
			l,
			{
				id: o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.APPOINTMENT_ONLY,
				title: s._(
					/*BTDS*/
					""
				)
			}
		], t[2] = c) : c = t[2];
		var d;
		return t[3] !== n || t[4] !== a ? (d = u.jsx(r("WAWebTabs.react"), {
			onSelect: n,
			selectedId: a,
			tabConfigs: c
		}), t[3] = n, t[4] = a, t[5] = d) : d = t[5], d;
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(21), n = e.days, a = e.daysOrder, i = e.onDayValuesChange, l = e.onModeChange, s = e.selectedMode, c;
		t[0] !== n || t[1] !== i ? (c = function(t, r) {
			var e, o = n[t], a = babelHelpers.extends({}, n, (e = {}, e[t] = babelHelpers.extends({}, o, r), e));
			i(a);
		}, t[0] = n, t[1] = i, t[2] = c) : c = t[2];
		var d = c, p;
		t[3] !== l || t[4] !== s ? (p = u.jsx(m, {
			selectedMode: s,
			onSelect: l
		}), t[3] = l, t[4] = s, t[5] = p) : p = t[5];
		var _;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (_ = { className: "x120ee7l x1q0q8m5 xso031l x1jxig9j x1odjw0f xvue9z x1yrsyyn x1icxu4v x10b6aqq x25sj25" }, t[6] = _) : _ = t[6];
		var f;
		if (t[7] !== n || t[8] !== a || t[9] !== s || t[10] !== d) {
			var g;
			t[12] !== n || t[13] !== s || t[14] !== d ? (g = function(t) {
				var e = n[t];
				return u.jsx(r("WAWebBusinessHoursDayEdit.react"), {
					day: e,
					mode: s,
					updateDayValue: function(n) {
						return d(t, n);
					}
				}, t);
			}, t[12] = n, t[13] = s, t[14] = d, t[15] = g) : g = t[15], f = a.map(g), t[7] = n, t[8] = a, t[9] = s, t[10] = d, t[11] = f;
		} else f = t[11];
		var h;
		t[16] !== f ? (h = u.jsx("div", babelHelpers.extends({}, _, { children: f })), t[16] = f, t[17] = h) : h = t[17];
		var y;
		return t[18] !== p || t[19] !== h ? (y = u.jsxs("div", { children: [p, h] }), t[18] = p, t[19] = h, t[20] = y) : y = t[20], y;
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(25), n = e.afterSave, a = e.businessHours, i = e.onCancel, l = e.saveBusinessProfile, m = a.days, _ = a.note, g = a.timezone, h = c(a.mode || o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.SPECIFIC_HOURS), y = h[0], C = h[1], b;
		t[0] !== m ? (b = function() {
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
		}, t[0] = m, t[1] = b) : b = t[1];
		var v = c(b), S = v[0], R = v[1], L;
		t[2] !== m ? (L = m.map(f), t[2] = m, t[3] = L) : L = t[3];
		var E = L, k, I;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (k = s._(
			/*BTDS*/
			""
		), I = { type: o("WAWebModal.react").ModalTheme.BusinessHours }, t[4] = k, t[5] = I) : (k = t[4], I = t[5]);
		var T;
		t[6] !== S || t[7] !== y ? (T = o("WAWebBusinessHoursUtils").isValidBusinessHours(y, S), t[6] = S, t[7] = y, t[8] = T) : T = t[8];
		var D;
		t[9] !== _ || t[10] !== l || t[11] !== S || t[12] !== y || t[13] !== g ? (D = async function() {
			o("WAWebUtilsLogQplEvents").qplStartProfileSave("bizHours"), await l(o("WAWebBusinessHoursUtils").convertToRawBusinessProfile({
				dayValues: S,
				mode: y,
				note: _,
				timezone: g
			}));
		}, t[9] = _, t[10] = l, t[11] = S, t[12] = y, t[13] = g, t[14] = D) : D = t[14];
		var x;
		t[15] !== E || t[16] !== S || t[17] !== y ? (x = u.jsx(p, {
			selectedMode: y,
			onModeChange: C,
			days: S,
			onDayValuesChange: R,
			daysOrder: E
		}), t[15] = E, t[16] = S, t[17] = y, t[18] = x) : x = t[18];
		var $;
		return t[19] !== n || t[20] !== i || t[21] !== T || t[22] !== D || t[23] !== x ? ($ = u.jsx(r("WAWebSavePopup.react"), {
			title: k,
			modalConfig: I,
			isValid: T,
			doSave: D,
			afterSave: n,
			onCancel: i,
			tsNavigationData: d,
			children: x
		}), t[19] = n, t[20] = i, t[21] = T, t[22] = D, t[23] = x, t[24] = $) : $ = t[24], $;
	}
	function f(e) {
		return e.dayKey;
	}
	l.default = _;
}), 226);
