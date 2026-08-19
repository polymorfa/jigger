__d("WAWebOutContactInviteUtils", [
	"fbt",
	"WALogger",
	"WAWebMexGroupStoreInviteSmsJob",
	"WAWebWidFactory",
	"WAWebWidToJid",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = "https://www.whatsapp.com/dl";
	function c() {
		return String(s._(
			/*BTDS*/
			"",
			[s._param("download_url", u)]
		));
	}
	function d(e) {
		return u + "/code=" + e;
	}
	function m(e) {
		var t = d(e);
		return String(s._(
			/*BTDS*/
			"",
			[s._param("invite_url", t)]
		));
	}
	function p() {
		return String(s._(
			/*BTDS*/
			"",
			[s._param("download_url", u)]
		));
	}
	function _(e) {
		return s._(
			/*BTDS*/
			"",
			[s._plural(e)]
		);
	}
	function f(e, t, n) {
		return g.apply(this, arguments);
	}
	function g() {
		return g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
			try {
				var a = n.map(function(e) {
					return { user_jid: o("WAWebWidToJid").widToUserJid(o("WAWebWidFactory").createUserWidOrThrow(e)).toString() };
				});
				return yield o("WAWebMexGroupStoreInviteSmsJob").mexGroupStoreInviteSms(t, a, r.toString());
			} catch (t) {
				return o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[out-contact-invite] bulk invite sms store err: ", ""])), t).tags("GQL", "MEX").sendLogs("out-contact-invite-store-group-sms-failed"), [];
			}
		}), g.apply(this, arguments);
	}
	l.getInviteMessageText = c, l.getInviteMessageTextWithCode = m, l.getMultiGroupInviteMessageText = p, l.getGroupInviteAddFailedToastText = _, l.storeMultiGroupInviteSms = f;
}), 226);
