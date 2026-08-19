__d("WAWebChatThreadLoggingUtils", [
	"WABase64",
	"WACryptoHmac",
	"WAJids",
	"WALogger",
	"WATimeUtils",
	"WAWebApiContact",
	"WAWebApiParse",
	"WAWebEphemeralityTypes",
	"WAWebInteractiveMessagesNativeFlowName",
	"WAWebLidAwareContactsDB",
	"WAWebModelStorageUtils",
	"WAWebMsgType",
	"WAWebUserPrefsMeUser",
	"WAWebUsernameTypes",
	"WAWebWamEnumChatOriginsType",
	"WAWebWamEnumEphemeralityInitiatorType",
	"WAWebWamEnumEphemeralityTriggerActionType",
	"WAWebWamEnumOppositeVisibleIdentificationType"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = new TextEncoder(), c = function(t) {
		return u.encode(t).buffer;
	};
	async function d(e, t) {
		var n = await o("WACryptoHmac").hmacSha256(e, t);
		return o("WABase64").encodeB64(n);
	}
	async function m(e, t, n) {
		var r = c(t + n);
		return d(e, r);
	}
	async function p(e, t) {
		var n = c(t);
		return d(e, n);
	}
	var _ = "ctwa_3pd_aggregated";
	async function f(e, t) {
		var n = c(t + _);
		return d(e, n);
	}
	async function g(e, t) {
		var n = c(t);
		return d(e, n);
	}
	async function h(e, t) {
		var n = await y(e), r = c(t);
		return d(n, r);
	}
	async function y(e) {
		var t = c(e);
		return self.crypto.subtle.digest("SHA-256", t);
	}
	function C(e) {
		return o("WATimeUtils").toDate(o("WATimeUtils").castToUnixTime(e - 8 * o("WATimeUtils").HOUR_SECONDS)).toISOString().split("T")[0].replace(/-/g, "/");
	}
	function b(e) {
		return C(e).replace(/\//g, "-");
	}
	function v(e) {
		var t = o("WATimeUtils").toDate(o("WATimeUtils").castToUnixTime(e - 8 * o("WATimeUtils").HOUR_SECONDS)), n = t.getUTCFullYear(), r = String(t.getUTCMonth() + 1).padStart(2, "0");
		return n + "/" + r;
	}
	function S(e, t) {
		var n = t % o("WATimeUtils").DAY_SECONDS, r = t - n;
		return n >= e ? r + e : r - o("WATimeUtils").DAY_SECONDS + e;
	}
	function R(e, t, n) {
		return S(e, t) > n;
	}
	function L(e) {
		return e.type !== o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT;
	}
	function E(e) {
		var t, n = new Set([
			o("WAWebMsgType").MSG_TYPE.PRODUCT,
			o("WAWebMsgType").MSG_TYPE.ORDER,
			o("WAWebMsgType").MSG_TYPE.LIST
		]);
		return n.has(e.type) || n.has((t = e.quotedMsg) == null ? void 0 : t.type) || !!(e.matchedText != null && e.matchedText !== "" && k(e.matchedText)) || e.type === o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW && (e.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS || e.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS);
	}
	function k(e) {
		return o("WAWebApiParse").matchCatalogUrl(e) || o("WAWebApiParse").matchProductUrl(e);
	}
	function I(e) {
		if (e == null) return null;
		switch (e) {
			case o("WAWebEphemeralityTypes").DisappearingModeTrigger.AccountSettings: return o("WAWebWamEnumEphemeralityTriggerActionType").EPHEMERALITY_TRIGGER_ACTION_TYPE.ACCOUNT_SETTINGS;
			case o("WAWebEphemeralityTypes").DisappearingModeTrigger.ChatSettings: return o("WAWebWamEnumEphemeralityTriggerActionType").EPHEMERALITY_TRIGGER_ACTION_TYPE.CHAT_SETTINGS;
			case o("WAWebEphemeralityTypes").DisappearingModeTrigger.BulkChange: return o("WAWebWamEnumEphemeralityTriggerActionType").EPHEMERALITY_TRIGGER_ACTION_TYPE.BULK_CHANGE;
			default: return null;
		}
	}
	function T(e) {
		if (e == null) return null;
		switch (e) {
			case o("WAWebEphemeralityTypes").DisappearingModeTrigger.AccountSettings: return o("WAWebWamEnumEphemeralityTriggerActionType").EPHEMERALITY_TRIGGER_ACTION_TYPE.ACCOUNT_SETTINGS;
			case o("WAWebEphemeralityTypes").DisappearingModeTrigger.ChatSettings: return o("WAWebWamEnumEphemeralityTriggerActionType").EPHEMERALITY_TRIGGER_ACTION_TYPE.CHAT_SETTINGS;
			case o("WAWebEphemeralityTypes").DisappearingModeTrigger.BulkChange: return o("WAWebWamEnumEphemeralityTriggerActionType").EPHEMERALITY_TRIGGER_ACTION_TYPE.BULK_CHANGE;
			default: return null;
		}
	}
	function D(e) {
		return e == null ? null : e ? o("WAWebWamEnumEphemeralityInitiatorType").EPHEMERALITY_INITIATOR_TYPE.INITIATED_BY_ME : o("WAWebWamEnumEphemeralityInitiatorType").EPHEMERALITY_INITIATOR_TYPE.INITIATED_BY_OTHER;
	}
	async function x() {
		var e = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(), t = await r("WAWebLidAwareContactsDB").get(e.toJid());
		return o("WAWebUsernameTypes").isPresentUsername(t == null ? void 0 : t.username);
	}
	async function $() {
		var e = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(), t = await r("WAWebLidAwareContactsDB").get(e.toJid());
		return (t == null ? void 0 : t.usernameKey) != null;
	}
	async function P(t) {
		return w(t) ? null : o("WAWebModelStorageUtils").getStorage().lock(["contact"], async function() {
			var n, a;
			if (t.isLid()) {
				var i = o("WAWebApiContact").getPhoneNumber(t);
				i == null ? (n = t.toString(), a = "lid") : (n = o("WAJids").toPhoneUserJid(i.user), a = "pn");
			} else n = o("WAJids").toPhoneUserJid(t.user), a = "pn";
			var l = await r("WAWebLidAwareContactsDB").get(n);
			return l == null ? (o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[getOppositeVisibleIdentificationType] contact not found ", ""])), t), null) : N(l, a);
		});
	}
	function N(e, t) {
		if (e == null) return o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PLACEHOLDER;
		var n = o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.MASKED_PHONE_NUMBER;
		return e == null ? n = o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PLACEHOLDER : e.isAddressBookContact ? n = o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.SAVED_CONTACT_NAME : e.verifiedName ? n = o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.VERIFIED_BUSINESS_NAME : t === "pn" ? n = o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PHONE_NUMBER : o("WAWebUsernameTypes").isPresentUsername(e.username) && (n = o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.USERNAME), n;
	}
	async function M(e) {
		return w(e) ? null : o("WAWebModelStorageUtils").getStorage().lock(["chat"], async function(t) {
			var n = t[0], r = e.toString(), a = await n.get(r);
			if (a == null) {
				o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["getChatOriginType: could not find chat with id ", ""])), r);
				return;
			}
			switch (a.lidOriginType) {
				case "ctwa": return o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE.LID_CTWA;
				default: return o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE.OTHERS;
			}
		});
	}
	function w(e) {
		return !e.isUser() || e.isPSA() || e.isBot();
	}
	l.generateThreadID = m, l.generateThreadIDHMAC = p, l.CTWA_3PD_AGGREGATED_THREAD_ID_HMAC_SALT = _, l.generateCtwa3pdAggregatedThreadIDHMAC = f, l.generateMessageIDHMAC = g, l.generateUserThreadIDHMAC = h, l.getThreadDs = C, l.getThreadDsForDb = b, l.getThreadMonthDs = v, l.computeStartTs = S, l.shouldUpdateChatEvent = R, l.shouldIncrementMsgSendAndReceive = L, l.isCommerceMessage = E, l.getWamDisappearingModeTrigger = I, l.getWamDisappearingModeTriggerGroups = T, l.getWamDisappearingModeInitiatedByMe = D, l.getMeHasUsername = x, l.getMeHasUsernamePin = $, l.getOppositeVisibleIdentification = P, l.getOppositeVisibleIdentificationType = N, l.getChatOriginType = M;
}), 98);
