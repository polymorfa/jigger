__d("MAWGetSpams", [
	"WADeprecatedSendIq",
	"WADeprecatedWapParser",
	"WALogger",
	"WAPersistedJobManager",
	"WATimeUtils",
	"WAWaitForComms",
	"WAWap",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = new (r("WADeprecatedWapParser"))("getSpamsResponse", function(e) {
		e.assertTag("iq"), e.assertFromServer(), e.assertAttr("type", "result");
	});
	function c() {
		return d.apply(this, arguments);
	}
	function d() {
		return d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			yield o("WAWaitForComms").waitForComms(), o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["getSpams called"])));
			var t = o("WAWap").wap("iq", {
				id: o("WAWap").generateId(),
				to: o("WAWap").S_WHATSAPP_NET,
				type: "get",
				xmlns: "fbid:thread"
			}, o("WAWap").wap("spam_request", null)), n = yield o("WADeprecatedSendIq").deprecatedSendIq(t, u);
			if (o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["getSpams result: ", ""])), n), !n.success) {
				var r = n.errorCode.toString().startsWith("5");
				if (r) throw new (o("WAPersistedJobManager")).RetryOnBackoff({
					algo: {
						first: o("WATimeUtils").HOUR_MILLISECONDS / 60,
						type: "exponential"
					},
					jitter: .1
				});
				return !1;
			}
			return !0;
		}), d.apply(this, arguments);
	}
	l.getSpamsImpl = c;
}), 98);
