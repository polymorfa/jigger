__d("MAWAsArmadilloApplication", [
	"FBLogger",
	"MAWEncodeMediaTransportProtocol",
	"MAWMsg",
	"MAWMsgType",
	"MAWXMAEncodeUtils",
	"WAArmadilloApplication.pb",
	"WAGlobals",
	"WAJids",
	"WATimeUtils",
	"getErrorSafe",
	"validateMAWMediaAndComposeEntryForProtoMsg"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e, t, n, a) {
		switch (e.type) {
			case o("MAWMsgType").MSG_TYPE.XMA: {
				if ((t == null ? void 0 : t.xma) == null) throw r("FBLogger")("messenger_web").mustfixThrow("XMA content should have XMA payload");
				var i = o("MAWXMAEncodeUtils").encodeXMA(e, t);
				return i;
			}
			case o("MAWMsgType").MSG_TYPE.BUMP_EXISTING_MESSAGE: return u(e, n);
			case o("MAWMsgType").MSG_TYPE.RAVEN: return m(e, a);
			case o("MAWMsgType").MSG_TYPE.RAVEN_ACTION: return c(e);
			default: throw r("FBLogger")("messenger_web").mustfixThrow(e.type + " should not be handled as ArmadilloApplication");
		}
	}
	function u(e, t) {
		var n;
		if (e.type !== o("MAWMsgType").MSG_TYPE.BUMP_EXISTING_MESSAGE || ((n = e.quote) == null ? void 0 : n.content) == null || t == null) return null;
		var r = e.quote.content, a = o("WAJids").interpretAndValidateJid(t), i = o("WAJids").isAuthorMe(e.author) ? o("WAGlobals").getMyUserJid() : e.author, l = o("WAJids").isAuthorMe(r.author) ? o("WAGlobals").getMyUserJid() : r.author;
		function s() {
			return a.jidType === "msgrUser" ? l : a.jidType === "group" ? a.groupJid : null;
		}
		function u() {
			return i === l ? null : a.jidType === "group" ? l : null;
		}
		var c = s(), d = u();
		if (c == null) return null;
		if (e) return { payload: { content: { bumpExistingMessage: { key: {
			fromMe: i === l,
			id: r.externalId,
			participant: d,
			remoteJid: c
		} } } } };
	}
	function c(e) {
		var t = e.ravenActionToMsgExternalId;
		if (t == null) throw r("FBLogger")("messenger_web").mustfixThrow("msg ravenActionToMsgExternalId is null in encodeRavenActionMessage");
		var n = Number(e.actionType), a;
		if (n === 0) a = o("WAArmadilloApplication.pb").ARMADILLO_CONTENT_RAVEN_ACTION_NOTIF_MESSAGE_ACTION_TYPE.PLAYED;
		else if (n === 1) a = o("WAArmadilloApplication.pb").ARMADILLO_CONTENT_RAVEN_ACTION_NOTIF_MESSAGE_ACTION_TYPE.SCREENSHOT;
		else if (n === 2) a = o("WAArmadilloApplication.pb").ARMADILLO_CONTENT_RAVEN_ACTION_NOTIF_MESSAGE_ACTION_TYPE.FORCE_DISABLE;
		else throw r("FBLogger")("messenger_web").mustfixThrow("msg actionType is not in enum in encodeRavenActionMessage");
		var i = e.actionTimestamp == null ? Date.now() : o("WATimeUtils").castUnixTimeToMillisTime(e.actionTimestamp), l = {
			actionTimestamp: i,
			actionType: a,
			key: { id: t }
		};
		return { payload: { content: { ravenActionNotifMessage: l } } };
	}
	function d(e) {
		return e === o("MAWMsg").MAWRavenMsgEphemeralType.VIEW_ONCE ? 0 : e === o("MAWMsg").MAWRavenMsgEphemeralType.ALLOW_REPLAY ? 1 : e === o("MAWMsg").MAWRavenMsgEphemeralType.KEEP_IN_CHAT ? 2 : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	function m(t, n) {
		if (n == null) throw r("FBLogger")("messenger_web").mustfixThrow("media is null in encodeRavenMessage");
		var a, i;
		try {
			var l = o("validateMAWMediaAndComposeEntryForProtoMsg").validateMAWMediaAndComposeEntryForProtoMsg(t.msgId, n);
			a = l[0], i = l[1];
		} catch (t) {
			var s = r("getErrorSafe")(t);
			r("FBLogger")("messenger_web").DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Media entry is invalid, fallback to the placeholder: ", ""])), s.message), a = void 0, i = void 0;
		}
		if (a == null || i == null) return { payload: { content: { ravenMessageMsgr: { ephemeralType: d(t.ravenEphemeralType) } } } };
		switch (t.ravenMediaType) {
			case o("MAWMsg").MAWRavenMsgMediaType.IMAGE: {
				var u = o("MAWEncodeMediaTransportProtocol").encodeValidatedMediaToImageTransport(a, i);
				return { payload: { content: { ravenMessageMsgr: {
					ephemeralType: d(t.ravenEphemeralType),
					imageMessage: {
						payload: u,
						version: 1
					}
				} } } };
			}
			case o("MAWMsg").MAWRavenMsgMediaType.VIDEO: {
				var c = o("MAWEncodeMediaTransportProtocol").encodeValidatedMediaToVideoTransport(a, i);
				return { payload: { content: { ravenMessageMsgr: {
					ephemeralType: d(t.ravenEphemeralType),
					videoMessage: {
						payload: c,
						version: 1
					}
				} } } };
			}
		}
	}
	l.asArmadilloApplication = s;
}), 98);
