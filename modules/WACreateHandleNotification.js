__d("WACreateHandleNotification", [
	"Promise",
	"WACreateHandleAccountSyncNotificationBranch",
	"WACreateHandleDevicesNotificationBranch",
	"WACreateHandleEncryptNotificationBranch",
	"WACreateHandleFbDeviceChangeNotificationBranch",
	"WACreateHandleFbMultiwayNotificationBranch",
	"WACreateHandleFbThreadNotificationBranch",
	"WACreateHandleGroupNotificationBranch",
	"WACreateHandleRtcE2eeCallEventNotificationBranch",
	"WACreateHandleServerNotificationBranch",
	"WACreateHandleServerSyncNotificationBranch",
	"WAResultOrError",
	"WARuntimeError",
	"WASmaxNotificationFallbackGenericNotificationRPC",
	"WASmaxParseUtils",
	"WASmaxParsingFailure",
	"WATagsLogger",
	"WAUnknownStanzaError"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p = {
		encrypt: "encrypt",
		"w:gp2": "w:gp2",
		server: "server",
		server_sync: "server_sync",
		"fbid:devices": "fbid:devices",
		"fbid:thread": "fbid:thread",
		"fb:multiway": "fb:multiway",
		mediaretry: "mediaretry",
		picture: "picture",
		"fb:call": "fb:call",
		business: "business",
		contacts: "contacts",
		devices: "devices",
		disappearing_mode: "disappearing_mode",
		status: "status",
		account_sync: "account_sync",
		pay: "pay",
		psa: "psa",
		privacy_token: "privacy_token",
		link_code_companion_reg: "link_code_companion_reg"
	}, _ = o("WATagsLogger").TAGS(["decision tree", "handleNotification"]);
	function f(t) {
		var r = o("WACreateHandleEncryptNotificationBranch").createHandleEncryptNotification(t), a = o("WACreateHandleServerNotificationBranch").createHandleServerNotification(t), i = o("WACreateHandleServerSyncNotificationBranch").createHandleServerSyncNotification(t), l = o("WACreateHandleGroupNotificationBranch").createHandleGroupNotification(t), f = o("WACreateHandleAccountSyncNotificationBranch").createHandleAccountSyncNotification(t), g = o("WACreateHandleDevicesNotificationBranch").createHandleDevicesNotification(t);
		return function(y, C, b) {
			_.DEV(e || (e = babelHelpers.taggedTemplateLiteralLoose(["start handling"])));
			var h = o("WASmaxParseUtils").attrStringEnum(y, "type", p);
			return (m || (m = n("Promise"))).resolve().then(function() {
				if (!h.success) return o("WAUnknownStanzaError").unknownStanzaError;
				var e = h.value;
				switch (e) {
					case "fbid:devices": {
						var n, s = (n = t.fb) == null ? void 0 : n.handleFbDeviceChangeNotification;
						if (s) return o("WACreateHandleFbDeviceChangeNotificationBranch").createHandleFbDeviceChangeNotification(s)(y, b);
						break;
					}
					case "fb:call": return o("WACreateHandleRtcE2eeCallEventNotificationBranch").createHandleRtcE2eeCallEventNotification(t)(y);
					case "fbid:thread": {
						var u, c = (u = t.fb) == null ? void 0 : u.handleFbThreadNotification;
						if (c) return o("WACreateHandleFbThreadNotificationBranch").createHandleFbThreadNotification(c)(y);
						break;
					}
					case "fb:multiway": {
						var d, m = (d = t.fb) == null ? void 0 : d.handleFbMultiwayNotification;
						if (m) return o("WACreateHandleFbMultiwayNotificationBranch").createHandleFbMultiwayNotification(m)(y);
						break;
					}
					case "encrypt": return r(y);
					case "server": return a(y);
					case "server_sync": return i(y);
					case "w:gp2": return l(y);
					case "devices": return g(y);
					case "account_sync": return f(y);
					case "mediaretry": break;
					case "picture": break;
					case "business": break;
					case "contacts": break;
					case "disappearing_mode": break;
					case "status": break;
					case "pay": break;
					case "psa": break;
					case "privacy_token": break;
					case "link_code_companion_reg": break;
					default:
				}
				return o("WAUnknownStanzaError").unknownStanzaError;
			}).catch(function(e) {
				return e instanceof o("WASmaxParsingFailure").SmaxParsingFailure ? o("WAUnknownStanzaError").unknownStanzaError : o("WARuntimeError").runtimeError(e);
			}).then(function(e) {
				if (e.success) return e;
				h.value === "fb:call" && _.ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["RTC notification error: ", ""])), e.error);
				var t = o("WASmaxNotificationFallbackGenericNotificationRPC").receiveGenericNotificationRPC(y), n = t.makeGenericNotificationResponseAck, r = t.makeGenericNotificationResponseBadStanza;
				return e.error.type === "unknown-stanza" ? (_.WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["received unknown notifcation: ", ""])), y.toString()), o("WAResultOrError").makeResult(r({ ackError: 487 }))) : (e.error.type, _.WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["runtime-error: ", ""])), e.error.error.message), _.ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["runtime-error: ", ""])), e.error.error), o("WAResultOrError").makeResult(n()));
			});
		};
	}
	l.createHandleNotification = f;
}), 98);
