__d("WAWebUpdateDisappearingModeForContact", [
	"WALogger",
	"WAWebApiContact",
	"WAWebBackendApi",
	"WAWebDBUpdateContactTable",
	"WAWebWidFactory"
], (function(t, n, r, o, a, i, l) {
	var e;
	async function s(t) {
		var n = t.contactId, r = t.newDuration, a = t.newEphemeralityDisabled, i = t.newSettingTimestamp, l = o("WAWebWidFactory").createUserWidOrThrow(n.user, n.server), s = await o("WAWebApiContact").getContactRecord(l);
		if (s) {
			var c = u(s, r, i, a);
			if (c) {
				var d = c.contactChange, m = c.effectiveDuration, p = c.effectiveSettingTimestamp, _ = c.ephemeralityDisabledInFrontend;
				await o("WAWebDBUpdateContactTable").updateContactTable(l, d), o("WAWebBackendApi").frontendFireAndForget("updateDisappearingMode", {
					disappearingModeDuration: m,
					disappearingModeSettingTimestamp: p,
					contactId: l,
					isEphemeralityDisabled: _
				}), o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
					"updateDisappearingMode: Contact=",
					" updated, new duration=",
					" t=",
					"."
				])), l.toLogString(), m, p).tags("DM", "DDM");
			}
		}
	}
	function u(e, t, n, r) {
		var o, a = e.disappearingModeSettingTimestamp, i = a == null && n !== 0 || a != null && a < n, l = {}, s = e.isEphemeralityDisabled, u = !1;
		if (r === !0 && e.isEphemeralityDisabled !== !0 ? (l.isEphemeralityDisabled = !0, s = !0, u = !0) : r === !1 && e.isEphemeralityDisabled != null && (l.isEphemeralityDisabled = void 0, s = void 0, u = !0), !i && !u) return null;
		i && (l.disappearingModeDuration = t, l.disappearingModeSettingTimestamp = n);
		var c = i ? t : (o = e.disappearingModeDuration) != null ? o : 0, d = i ? n : a != null ? a : 0;
		return {
			contactChange: l,
			ephemeralityDisabledInFrontend: s,
			effectiveDuration: c,
			effectiveSettingTimestamp: d
		};
	}
	l.updateDisappearingModeForContact = s;
}), 98);
