__d("MAWDbMsgTypeVersionTxns", [
	"MAWDbAppMeta",
	"MAWDexieTable",
	"MawMpsDropDeviceNotificationsForTurnedOffSecurityAlertsPreprocessor",
	"WmiMetadataAppSettingsWriter"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e) {
		return e.appMeta.get({ key: o("MAWDbAppMeta").AppMetaKeysEnum.msgTypeVersion }).then(function(e) {
			return e == null ? void 0 : e.value.msgTypeVersion;
		});
	}
	function u(e, t) {
		return e.appMeta.add({
			key: o("MAWDbAppMeta").AppMetaKeysEnum.msgTypeVersion,
			value: { msgTypeVersion: t }
		}).then(function(e) {
			return o("WmiMetadataAppSettingsWriter").writeAppSettingsToMetadataDb([{
				key: "msgTypeVersion",
				value: t
			}]), e;
		});
	}
	function c(e, t) {
		return e.appMeta.put({
			key: o("MAWDbAppMeta").AppMetaKeysEnum.msgTypeVersion,
			value: { msgTypeVersion: t }
		}).then(function(e) {
			return o("WmiMetadataAppSettingsWriter").writeAppSettingsToMetadataDb([{
				key: "msgTypeVersion",
				value: t
			}]), e;
		});
	}
	function d(e, t) {
		return e.appMeta.add({
			key: o("MAWDbAppMeta").AppMetaKeysEnum.hmacKey,
			value: { hmacKey: t }
		}).then(function(e) {
			return o("WmiMetadataAppSettingsWriter").writeAppSettingsToMetadataDb([{
				key: "hmacKey",
				value: t
			}]), e;
		});
	}
	function m(e) {
		return e.appMeta.get({ key: o("MAWDbAppMeta").AppMetaKeysEnum.hmacKey }).then(function(e) {
			return e == null ? void 0 : e.value.hmacKey;
		});
	}
	function p(e, t) {
		return e.appMeta.get({ key: t });
	}
	function _(e, t) {
		return o("MawMpsDropDeviceNotificationsForTurnedOffSecurityAlertsPreprocessor").setCachedShouldSaveSecurityAlert(t), e.appMeta.put({
			key: o("MAWDbAppMeta").AppMetaKeysEnum.allowSecurityAlert,
			value: { allowSecurityAlert: t }
		}).then(function() {
			o("WmiMetadataAppSettingsWriter").writeAppSettingsToMetadataDb([{
				key: "allowSecurityAlert",
				value: t
			}]);
		});
	}
	function f(e, t) {
		return e.appMeta.put({
			key: o("MAWDbAppMeta").AppMetaKeysEnum.allowSecurityAlertForSelf,
			value: { allowSecurityAlertForSelf: t }
		}).then(function() {
			o("WmiMetadataAppSettingsWriter").writeAppSettingsToMetadataDb([{
				key: "allowSecurityAlertForSelf",
				value: t
			}]);
		});
	}
	function g(e) {
		return p(e, o("MAWDbAppMeta").AppMetaKeysEnum.allowSecurityAlert).then(function(e) {
			var t;
			return (t = e == null ? void 0 : e.value.allowSecurityAlert) != null ? t : !1;
		});
	}
	function h(e) {
		return p(e, o("MAWDbAppMeta").AppMetaKeysEnum.allowSecurityAlertForSelf).then(function(e) {
			var t;
			return (t = e == null ? void 0 : e.value.allowSecurityAlertForSelf) != null ? t : !0;
		});
	}
	function y(e, t) {
		return e.appMeta.add({
			key: o("MAWDbAppMeta").AppMetaKeysEnum.hotlikeSticker,
			value: { hotlikeSticker: t }
		});
	}
	function C(e) {
		return o("MAWDexieTable").dexieAll([h(e), g(e)]).then(function(e) {
			var t = e[0], n = e[1];
			return {
				allowSecurityAlertForContact: n,
				allowSecurityAlertForSelf: t
			};
		});
	}
	l.MSG_TYPE_VERSION = (e = o("MAWDbAppMeta")).AppMetaKeysEnum.msgTypeVersion, l.ALLOW_SECURITY_ALERT_FOR_CONTACT = e.AppMetaKeysEnum.allowSecurityAlert, l.ALLOW_SECURITY_ALERT_FOR_SELF = e.AppMetaKeysEnum.allowSecurityAlertForSelf, l.HOT_LIKE = e.AppMetaKeysEnum.hotlikeSticker, l.getMsgTypeVersion = s, l.addMsgTypeVersion = u, l.updateMsgTypeVersion = c, l.addHMACKey = d, l.getHMACKey = m, l.getAppMetaValue = p, l.updateSecurityAlertValueForContact = _, l.updateSecurityAlertValueForSelf = f, l.getSecuritySettingForContact = g, l.getSecuritySettingForSelf = h, l.addHotLike = y, l.maybeBulkGetSecuritySetting = C;
}), 98);
