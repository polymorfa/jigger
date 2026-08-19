__d("WAWebSharableEventNotificationBridgeApi", [
	"WALogger",
	"WAWebSharableEventNotification",
	"WAWebSharableEventNotificationConstants",
	"err"
], (function(t, n, r, o, a, i, l) {
	var e;
	function s(e) {
		return o("WAWebSharableEventNotificationConstants").SharableEventNotificationType.cast(e);
	}
	var u = { showSharableEventNotification: async function(n) {
		var t = n.payload, a = n.typeRaw, i = s(a);
		if (i == null) throw o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[sharable_event][notification] unrecognized typeRaw=", ""])), a).sendLogs("sharable-event-notification-unknown-type"), r("err")("[sharable_event][notification] unrecognized typeRaw=" + a);
		var l = new (o("WAWebSharableEventNotification")).WAWebSharableEventNotification({
			payload: t,
			type: i
		});
		await l.triggerNotification(null);
	} };
	l.SharableEventNotificationBridgeApi = u;
}), 98);
