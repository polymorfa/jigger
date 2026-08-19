__d("getMAWLastMessageCtaType", ["MAWLocalizationType"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		switch (e) {
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_MISSED_AUDIO_CALL: return "xma_rtc_missed_audio";
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_MISSED_AUDIO_CALL: return "xma_rtc_missed_group_audio";
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_MISSED_VIDEO_CALL: return "xma_rtc_missed_video";
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_MISSED_VIDEO_CALL: return "xma_rtc_missed_group_video";
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_TEXT:
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_TEXT: return "messenger_reply_reminder";
		}
	}
	l.default = e;
}), 98);
