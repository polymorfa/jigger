__d("WAWebFormatMemberLinkModeNotification", [
	"fbt",
	"WAWebFormatParticipantNames",
	"WAWebGroupType",
	"WAWebUserPrefsMeUser"
], (function(t, n, r, o, a, i, l, s) {
	function e(e, t, n) {
		var r;
		e && (r = o("WAWebFormatParticipantNames").getFormattedName(e, !1));
		var a = n[0] && o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled.cast(n[0].toString()) === o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled.On;
		return a ? o("WAWebUserPrefsMeUser").isMeAccount(e) ? t ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		) : t ? s._(
			/*BTDS*/
			"",
			[s._param("author", r)]
		) : s._(
			/*BTDS*/
			"",
			[s._param("author", r)]
		) : o("WAWebUserPrefsMeUser").isMeAccount(e) ? t ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		) : t ? s._(
			/*BTDS*/
			"",
			[s._param("author", r)]
		) : s._(
			/*BTDS*/
			"",
			[s._param("author", r)]
		);
	}
	l.default = e;
}), 226);
