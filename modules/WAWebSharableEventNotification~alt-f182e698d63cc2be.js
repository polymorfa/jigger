__d("WAWebSharableEventNotification", [
	"fbt",
	"WAWebBaseNotification",
	"WAWebChatCollection",
	"WAWebContactCollection",
	"WAWebFrontendContactGetters",
	"WAWebLidMigrationUtils",
	"WAWebNotificationIconUtils",
	"WAWebOpenSharableEventInviteNotSupportedModalAction",
	"WAWebSharableEventNotificationConstants",
	"WAWebSharableEventNotificationStrings",
	"WAWebUserPrefsMeUser",
	"WAWebWidFactory"
], (function(t, n, r, o, a, i, l, s) {
	var e = (function(e) {
		function t(t) {
			var n, r = t.payload, a = t.type;
			return n = e.call(this) || this, n.payload = r, n.type = a, n.senderWid = r.senderWidString != null ? o("WAWebWidFactory").createWid(r.senderWidString) : null, n;
		}
		babelHelpers.inheritsLoose(t, e);
		var n = t.prototype;
		return n.buildKey = function() {
			return "sharable_event:" + o("WAWebSharableEventNotificationConstants").getIdentifierTag(this.type) + ":" + this.payload.eventId;
		}, n.getBannerOptions = function() {
			var e, t;
			return {
				wid: (e = this.senderWid) != null ? e : o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
				title: this.computeTitle(),
				body: (t = o("WAWebSharableEventNotificationStrings").formatSharableEventBody(this.payload.body)) != null ? t : "",
				onClick: o("WAWebOpenSharableEventInviteNotSupportedModalAction").openSharableEventInviteNotSupportedModal,
				doNotOpenChat: !0
			};
		}, n.getSenderContact = function() {
			var e, t = this.senderWid;
			if (t == null) return null;
			var n = o("WAWebLidMigrationUtils").shouldHaveAccountLid(t) ? o("WAWebLidMigrationUtils").toLid(t) : null;
			if (n != null) {
				var r = o("WAWebContactCollection").ContactCollection.get(n);
				if (r != null) return r;
			}
			var a = (e = o("WAWebLidMigrationUtils").toPn(t)) != null ? e : t;
			return o("WAWebContactCollection").ContactCollection.get(a);
		}, n.computeTitle = function() {
			if (this.type === o("WAWebSharableEventNotificationConstants").SharableEventNotificationType.Suspended) return s._(
				/*BTDS*/
				""
			).toString();
			if (!o("WAWebSharableEventNotificationConstants").isSenderAttributed(this.type)) return this.payload.title;
			var e = this.getSenderContact(), t = e != null ? o("WAWebFrontendContactGetters").getFormattedName(e) : null;
			return t != null && t.length > 0 ? t : this.payload.title;
		}, n.getIcon = async function() {
			var e, t = this.senderWid;
			if (!o("WAWebSharableEventNotificationConstants").isSenderAttributed(this.type) || t == null) return o("WAWebNotificationIconUtils").WHATSAPP_DEFAULT_ICON;
			var n = o("WAWebChatCollection").ChatCollection.getLatestChatForWid(t);
			if (n != null) return o("WAWebNotificationIconUtils").getChatNotificationIcon(n, this.abortController.signal, o("WAWebNotificationIconUtils").USER_DEFAULT_ICON);
			var r = this.getSenderContact();
			return o("WAWebNotificationIconUtils").getNotificationIconByWid((e = r == null ? void 0 : r.id) != null ? e : t, this.abortController.signal, o("WAWebNotificationIconUtils").USER_DEFAULT_ICON);
		}, n.getChatKind = function() {
			return null;
		}, t;
	})(o("WAWebBaseNotification").WABaseNotification);
	l.WAWebSharableEventNotification = e;
}), 226);
