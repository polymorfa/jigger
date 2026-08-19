__d("WAWebAuraRingtoneGlobalSelector.react", [
	"fbt",
	"WALogger",
	"WAWebAuraGating",
	"WAWebAuraRingtoneDropdown.react",
	"WAWebAuraRingtonePrefs",
	"WAWebWamEnumRingtoneEntryType",
	"WAWebWamEnumWpbujBenefitType",
	"WAWebWamEnumWpbujSource",
	"WAWebWamEnumWpbujSurface",
	"react",
	"useWAWebWaPlusBenefitJourneyViewOnMount"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useState;
	function _(t) {
		var n = t.disabled, a = t.onChange, i = p(o("WAWebAuraRingtonePrefs").getSelectedRingtoneId), l = i[0], u = i[1], d = r("WAWebAuraGating").isRingtonesBenefitActive(), _ = r("useWAWebWaPlusBenefitJourneyViewOnMount")({
			benefitType: o("WAWebWamEnumWpbujBenefitType").WPBUJ_BENEFIT_TYPE.RINGTONES,
			surface: o("WAWebWamEnumWpbujSurface").WPBUJ_SURFACE.RINGTONE,
			source: o("WAWebWamEnumWpbujSource").WPBUJ_SOURCE.APP_WIDE
		}), f = m(function(t) {
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[aura_ringtones] Global ringtone selected: ", ""])), t), o("WAWebAuraRingtonePrefs").saveSelectedRingtoneId(t), u(t), a == null || a(t);
		}, [a]);
		return c.jsx("div", {
			className: "x1p57kb1",
			children: c.jsx(r("WAWebAuraRingtoneDropdown.react"), {
				initialToneId: l,
				journeyLoggerRef: _,
				onToneSelect: f,
				isRingtonesBenefitActive: d,
				ringtoneSource: o("WAWebWamEnumRingtoneEntryType").RINGTONE_ENTRY_TYPE.APP_WIDE,
				disabled: n,
				title: s._(
					/*BTDS*/
					""
				)
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
