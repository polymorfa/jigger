__d("WAWebNotificationsReactionNotification", [
	"WAWebFrontendChatGetters",
	"WAWebFrontendMsgGetters",
	"WAWebGetNotificationStrings",
	"WAWebMuteGetters",
	"WAWebNoop",
	"WAWebNotificationHelpers",
	"WAWebNotificationIconUtils",
	"WAWebNotificationMuteReason",
	"WAWebNotificationsBaseReactionNotification",
	"WAWebReactionNotificationUtils"
], (function(t, n, r, o, a, i, l) {
	var e = (function(e) {
		function t() {
			return e.apply(this, arguments) || this;
		}
		babelHelpers.inheritsLoose(t, e);
		var n = t.prototype;
		return n.shouldMute = function(n) {
			var t = e.prototype.shouldMute.call(this, n);
			if (t != null) return t;
			var a = o("WAWebFrontendMsgGetters").getChat(this.parentMsg);
			return o("WAWebMuteGetters").getIsMuted(a.mute) ? r("WAWebNotificationMuteReason").MutedChat : o("WAWebReactionNotificationUtils").isArchivedChat(a) ? r("WAWebNotificationMuteReason").ArchivedChat : null;
		}, n.shouldPlaySound = function() {
			if (!e.prototype.shouldPlaySound.call(this)) return !1;
			var t = o("WAWebFrontendMsgGetters").getChat(this.parentMsg);
			return o("WAWebNotificationHelpers").shouldPlaySoundGranular(t);
		}, n.shouldShowBanner = function() {
			return e.prototype.shouldShowBanner.call(this) ? o("WAWebReactionNotificationUtils").shouldEnableReactionsNotificationGranular(this.parentMsg) : !1;
		}, n.shouldSquelch = function() {
			if (e.prototype.shouldSquelch.call(this) == null) return null;
			var t = o("WAWebFrontendMsgGetters").getChat(this.parentMsg);
			return o("WAWebNotificationHelpers").shouldSquelch(t, !1) ? r("WAWebNotificationMuteReason").GroupFlood : o("WAWebReactionNotificationUtils").shouldSquelchReactionMessage(t, this.parentMsg) ? r("WAWebNotificationMuteReason").ReactionFlood : null;
		}, n.matchesChat = function(t) {
			return o("WAWebFrontendMsgGetters").getChat(this.parentMsg).equals(t);
		}, n.getChatKind = function() {
			return o("WAWebFrontendChatGetters").getKind(o("WAWebFrontendMsgGetters").getChat(this.parentMsg));
		}, n.getIcon = async function() {
			var e = o("WAWebFrontendMsgGetters").getChat(this.parentMsg);
			return o("WAWebNotificationIconUtils").getChatNotificationIcon(e, this.abortController.signal);
		}, n.getBannerOptions = function() {
			var e = this.parentMsg, t = o("WAWebFrontendMsgGetters").getChat(e), n = o("WAWebReactionNotificationUtils").getNotificationPartsForChatReaction(e, this.reactionMsg), a = n.action, i = n.author, l = n.body, s = o("WAWebGetNotificationStrings").getNotificationBody({
				action: a,
				author: i,
				body: l,
				msgDir: o("WAWebFrontendMsgGetters").getDir(e)
			});
			return {
				wid: t.id,
				msgId: e.id.toString(),
				onClick: r("WAWebNoop"),
				tag: e.id.toString(),
				doNotOpenChat: !1,
				title: o("WAWebNotificationHelpers").getNotificationTitle(t),
				body: s
			};
		}, t;
	})(o("WAWebNotificationsBaseReactionNotification").WABaseReactionNotification);
	l.WAReactionNotification = e;
}), 98);
