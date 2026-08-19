__d("WAWebFormatBroadcastNotification", ["fbt", "WAWebFormatParticipantNames"], (function(t, n, r, o, a, i, l, s) {
	function e() {
		return s._(
			/*BTDS*/
			""
		);
	}
	function u(e) {
		var t = e.length;
		return s._(
			/*BTDS*/
			"",
			[s._plural(t), s._param("name", o("WAWebFormatParticipantNames").getFormattedNames(e, !1))]
		);
	}
	function c(e) {
		var t = e.length;
		return s._(
			/*BTDS*/
			"",
			[s._plural(t), s._param("name", o("WAWebFormatParticipantNames").getFormattedNames(e, !1))]
		);
	}
	function d(t) {
		var n = t.recipients, r = t.subtype;
		return r === "create" ? e().toString() : r === "add" ? u(n).toString() : r === "remove" ? c(n).toString() : "";
	}
	l.getAudienceCreateMessage = e, l.getBroadcastAddMessage = u, l.getBroadcastRemoveMessage = c, l.formatBroadcastNotification = d;
}), 226);
