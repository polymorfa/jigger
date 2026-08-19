__d("MawMpsDropDeviceNotificationsForTurnedOffSecurityAlertsPreprocessor", [
	"MAWProtobufDeserializers",
	"MpsPreprocessor",
	"WAGlobals",
	"WmiMetadataAppSettingsReader",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = null;
	function s(t) {
		e = t;
	}
	var u = o("MpsPreprocessor").preprocessor((function() {
		var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var n = t.ctx, r = t.payloadList, a = new Map(), i = [];
			for (var l of r) {
				var s, u, c = l.directive, d = l.insertionSource, m = l.message, p = o("MAWProtobufDeserializers").DeserializedBackupMessage.create(m.payload), _ = (s = p.payload().proto) == null || (s = s.event) == null ? void 0 : s.deviceChange;
				if (_ == null) {
					i.push({
						directive: c,
						insertionSource: d,
						message: m
					});
					continue;
				}
				if (((u = p.proto.metadata) == null ? void 0 : u.senderId) === o("WAGlobals").getMyUserJid()) {
					n.messageToQpl.addPoint(m.messageId, "drop_security_alert_my_device"), n.messageToQpl.endSuccess(m.messageId);
					continue;
				}
				e === null && (e = yield o("WmiMetadataAppSettingsReader").getSecuritySettingForContactFromMetadataDb()), e === !0 ? i.push({
					directive: c,
					insertionSource: d,
					message: m
				}) : (n.messageToQpl.addPoint(m.messageId, "drop_security_alert_disabled"), n.messageToQpl.endSuccess(m.messageId));
			}
			return {
				ctx: n,
				errors: a,
				payloadList: i
			};
		});
		return function(e) {
			return t.apply(this, arguments);
		};
	})(), "maybe_drop_security_alerts");
	l.setCachedShouldSaveSecurityAlert = s, l.MawMpsDropDeviceNotificationsForTurnedOffSecurityAlertsPreprocessor = u;
}), 98);
