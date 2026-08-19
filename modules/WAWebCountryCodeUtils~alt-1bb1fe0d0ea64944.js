__d("WAWebCountryCodeUtils", [
	"WACcToIso",
	"WALogger",
	"WAPhoneFindCC",
	"WAWebApiContactUsernameFields",
	"WAWebAsISOCountryCode",
	"WAWebLidMigrationUtils",
	"WAWebUserPrefsMeUser",
	"nullthrows"
], (function(t, n, r, o, a, i, l) {
	var e;
	function s(e) {
		var t = o("WAPhoneFindCC").findCC(e), n = parseInt(t, 10), a = r("WACcToIso")[n];
		return r("nullthrows")(a);
	}
	function u(t) {
		var n, r = (n = o("WAWebLidMigrationUtils").toPn(t)) == null ? void 0 : n.user;
		if (r != null) try {
			return o("WAWebAsISOCountryCode").asISOCountryCode(s(r));
		} catch (t) {
			o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["failed to get country code from pn, error: ", ""])), t).sendLogs("failed-to-get-country-code-from-pn", { sampling: .01 });
		}
		return null;
	}
	async function c() {
		var e = o("WAWebUserPrefsMeUser").getMaybeMePnUser(), t = e != null ? s(e.user) : await o("WAWebApiContactUsernameFields").getOrFetchMeContactUsernameCountryCode();
		return t;
	}
	l.pnToCountryCodeString = s, l.getCountryCodeFromPn = u, l.getMyCountryCode = c;
}), 98);
