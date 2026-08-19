__d("WAWebAuraRingtoneChatTone.react", [
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
		var n = t.chat, a = r("WAWebAuraGating").isRingtonesBenefitActive(), i = n.id, l = i.toString(), u = i.isGroup(), d = u ? o("WAWebWamEnumRingtoneEntryType").RINGTONE_ENTRY_TYPE.GROUP : o("WAWebWamEnumRingtoneEntryType").RINGTONE_ENTRY_TYPE.ONE_TO_ONE, _ = r("useWAWebWaPlusBenefitJourneyViewOnMount")({
			benefitType: o("WAWebWamEnumWpbujBenefitType").WPBUJ_BENEFIT_TYPE.RINGTONES,
			surface: o("WAWebWamEnumWpbujSurface").WPBUJ_SURFACE.ALERT_TONE,
			source: u ? o("WAWebWamEnumWpbujSource").WPBUJ_SOURCE.GROUP : o("WAWebWamEnumWpbujSource").WPBUJ_SOURCE.ONE_TO_ONE
		}), f = o("WAWebAuraRingtonePrefs").getChatRingtoneId(i), g = f != null ? f : o("WAWebAuraRingtonePrefs").DEFAULT_RINGTONE_ID, h = p(g), y = h[0], C = h[1], b = m(function(t) {
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
				"[aura_ringtones] Per-chat ringtone selected: ",
				" for chat ",
				""
			])), t, l);
			var n = t === o("WAWebAuraRingtonePrefs").DEFAULT_RINGTONE_ID ? null : t;
			o("WAWebAuraRingtonePrefs").saveChatRingtoneId(i, n), C(t);
		}, [i, l]);
		return c.jsx("div", {
			className: "x1p57kb1",
			children: c.jsx(r("WAWebAuraRingtoneDropdown.react"), {
				initialToneId: y,
				journeyLoggerRef: _,
				onToneSelect: b,
				isRingtonesBenefitActive: a,
				ringtoneSource: d,
				title: s._(
					/*BTDS*/
					""
				)
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
