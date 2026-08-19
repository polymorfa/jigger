__d("MAWAdminMsg", [
	"fbt",
	"MAWLocalizationType",
	"MAWMemoriesShareXMASnippetFbt",
	"MAWPostMentionXMASnippetFbt",
	"MWVisibilityPlaceholderSnippet",
	"getMAWLocalizedBumpMsgReplySnippet",
	"getMAWLocalizedFallbackMsgSnippet"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	function e(e, t, n) {
		switch (n) {
			case o("MAWLocalizationType").LOCALIZATION_TYPE.EMPTY_SNIPPET: return "";
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_CREATED_GROUP: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_CREATED_GROUP: return s._(
				/*BTDS*/
				"",
				[s._param("actor", e[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.UNKNOWN_USER_CREATED_GROUP: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_NAMED_GROUP: return s._(
				/*BTDS*/
				"",
				[s._param("custom group name", e[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.UNKNOWN_USER_NAMED_GROUP: return s._(
				/*BTDS*/
				"",
				[s._param("custom group name", e[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_NAMED_GROUP: return s._(
				/*BTDS*/
				"",
				[s._param("actor", t[0]), s._param("custom group name", e[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_ADDED_DEVICE: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_ADDED_DEVICE: return s._(
				/*BTDS*/
				"",
				[s._param("actor", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_REMOVED_DEVICE: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_REMOVED_DEVICE: return s._(
				/*BTDS*/
				"",
				[s._param("actor", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_UPDATED_DEVICE: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_UPDATED_DEVICE: return s._(
				/*BTDS*/
				"",
				[s._param("user_name", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_ADDED_ONE_PARTICIPANT: return s._(
				/*BTDS*/
				"",
				[s._param("user_name", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_ADDED_TWO_PARTICIPANTS: return s._(
				/*BTDS*/
				"",
				[s._param("user_name_1", t[0]), s._param("user_name_2", t[1])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_ADDED_MORE_THAN_TWO_PARTICIPANTS: return s._(
				/*BTDS*/
				"",
				[s._param("user_name", t[0]), s._param("number of participants", e[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_ADDED_YOU: return s._(
				/*BTDS*/
				"",
				[s._param("actor", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_ADDED_YOU_AND_ONE_USER: return s._(
				/*BTDS*/
				"",
				[s._param("actor", t[0]), s._param("user_name", t[1])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_ADDED_YOU_AND_MORE_THAN_ONE_USERS: return s._(
				/*BTDS*/
				"",
				[s._param("actor", t[0]), s._param("number of participants", e[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_ADDED_ONE_USER: return s._(
				/*BTDS*/
				"",
				[s._param("actor", t[0]), s._param("user_name", t[1])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_ADDED_TWO_USER: return s._(
				/*BTDS*/
				"",
				[
					s._param("actor", t[0]),
					s._param("user_name_1", t[1]),
					s._param("user_name_2", t[2])
				]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_ADDED_MORE_THAN_TWO_USER: return s._(
				/*BTDS*/
				"",
				[
					s._param("actor", t[0]),
					s._param("user_name_1", t[1]),
					s._param("number of participants", e[0])
				]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_REMOVED_ONE_PARTICIPANT: return s._(
				/*BTDS*/
				"",
				[s._param("user_name", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_REMOVED_YOU: return s._(
				/*BTDS*/
				"",
				[s._param("user_name_1", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_REMOVED_ONE_USER: return s._(
				/*BTDS*/
				"",
				[s._param("user_name_1", t[0]), s._param("user_name_2", t[1])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_LEFT_GROUP: return s._(
				/*BTDS*/
				"",
				[s._param("name", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_LEFT_GROUP: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_GOT_PROMOTED: return s._(
				/*BTDS*/
				"",
				[s._param("user_name", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_GOT_DEMOTED: return s._(
				/*BTDS*/
				"",
				[s._param("user_name", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_GOT_PROMOTED: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_GOT_DEMOTED: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_PROMOTED_YOU: return s._(
				/*BTDS*/
				"",
				[s._param("actor", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_DEMOTED_YOU: return s._(
				/*BTDS*/
				"",
				[s._param("actor", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_PROMOTED_PARTICIPANT: return s._(
				/*BTDS*/
				"",
				[s._param("actor", t[0]), s._param("target", t[1])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_DEMOTED_PARTICIPANT: return s._(
				/*BTDS*/
				"",
				[s._param("actor", t[0]), s._param("target", t[1])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_DEMOTED_PARTICIPANT: return s._(
				/*BTDS*/
				"",
				[s._param("target", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_PROMOTED_PARTICIPANT: return s._(
				/*BTDS*/
				"",
				[s._param("target", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SELF_DEMOTED: return s._(
				/*BTDS*/
				"",
				[s._param("actor", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SELF_DEMOTED: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_TEXT: return s._(
				/*BTDS*/
				""
			).toString() + ": " + e[0];
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_TEXT: return e[0];
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_TEXT_IN_GROUP: return t[0] + ": " + e[0];
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_IMAGE: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_VIDEO: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_AUDIO: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_GIF: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_STICKER: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_ATTACHMENT: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SENT_POST: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SENT_REEL: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SENT_STORY: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_CONTACT_SHARE:
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_AI_CONTACT_SHARE: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SENT_EVENT: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SENT_STORY_HIGHLIGHT: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_MENTIONED_STORY_IG: return s._(
				/*BTDS*/
				"",
				[s._param("user", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_RECEIVED_STORY_MENTION_IG: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_STORY_MENTION: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_STORY_MENTION: return s._(
				/*BTDS*/
				"",
				[s._param("user", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_IMAGE: return s._(
				/*BTDS*/
				"",
				[s._param("user", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_VIDEO: return s._(
				/*BTDS*/
				"",
				[s._param("user", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_AUDIO: return s._(
				/*BTDS*/
				"",
				[s._param("user", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_GIF: return s._(
				/*BTDS*/
				"",
				[s._param("user", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_STICKER: return s._(
				/*BTDS*/
				"",
				[s._param("user", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SENT_POST: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SENT_REEL: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_ATTACHMENT: return s._(
				/*BTDS*/
				"",
				[s._param("user", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_POST_MENTION: return o("MAWPostMentionXMASnippetFbt").getCurrentUserSendPostMentionSnippetFbt(t[1]).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_POST_MENTION: return o("MAWPostMentionXMASnippetFbt").getParticipantSendPostMentionSnippetFbt(t[0]).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_LOCATION: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_LOCATION: return s._(
				/*BTDS*/
				"",
				[s._param("user", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SENT_STORY: return s._(
				/*BTDS*/
				"",
				[s._param("user", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_CONTACT_SHARE:
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_AI_CONTACT_SHARE: return s._(
				/*BTDS*/
				"",
				[s._param("user", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SENT_EVENT: return s._(
				/*BTDS*/
				"",
				[s._param("user", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SENT_STORY_HIGHLIGHT: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.UNAVAILABLE_SNIPPET: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.MESSAGE_UNAVAILABLE_SNIPPET: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.MESSAGE_NOT_RESTORED: return o("MWVisibilityPlaceholderSnippet").VISIBILITY_PLACEHOLDER_SNIPPET.toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.TWO_USERS_CONNECTED: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.TWO_USERS_CONNECTED_ONE_MSPLIT: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.REACHABILITY_ERROR: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.UNKNOWN_USER_EPHEMERAL_SETTING_TURNED_ON_SECONDS: return s._(
				/*BTDS*/
				"",
				[s._plural(parseInt(e[0], 10), "number")]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.UNKNOWN_USER_EPHEMERAL_SETTING_TURNED_ON_MINUTES: return s._(
				/*BTDS*/
				"",
				[s._plural(parseInt(e[0], 10), "number")]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.UNKNOWN_USER_EPHEMERAL_SETTING_TURNED_ON_HOURS: return s._(
				/*BTDS*/
				"",
				[s._plural(parseInt(e[0], 10), "number")]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.UNKNOWN_USER_EPHEMERAL_SETTING_TURNED_ON_DAYS: return s._(
				/*BTDS*/
				"",
				[s._plural(parseInt(e[0], 10), "number")]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.YOU_EPHEMERAL_SETTING_TURNED_ON_SECONDS: return s._(
				/*BTDS*/
				"",
				[s._plural(parseInt(e[0], 10), "number")]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.YOU_EPHEMERAL_SETTING_TURNED_ON_MINUTES: return s._(
				/*BTDS*/
				"",
				[s._plural(parseInt(e[0], 10), "number")]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.YOU_EPHEMERAL_SETTING_TURNED_ON_HOURS: return s._(
				/*BTDS*/
				"",
				[s._plural(parseInt(e[0], 10), "number")]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.YOU_EPHEMERAL_SETTING_TURNED_ON_DAYS: return s._(
				/*BTDS*/
				"",
				[s._plural(parseInt(e[0], 10), "number")]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_EPHEMERAL_SETTING_TURNED_ON_SECONDS: return s._(
				/*BTDS*/
				"",
				[s._plural(parseInt(e[0], 10), "number"), s._param("user", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_EPHEMERAL_SETTING_TURNED_ON_MINUTES: return s._(
				/*BTDS*/
				"",
				[s._plural(parseInt(e[0], 10), "number"), s._param("user", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_EPHEMERAL_SETTING_TURNED_ON_HOURS: return s._(
				/*BTDS*/
				"",
				[s._plural(parseInt(e[0], 10), "number"), s._param("user", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_EPHEMERAL_SETTING_TURNED_ON_DAYS: return s._(
				/*BTDS*/
				"",
				[s._plural(parseInt(e[0], 10), "number"), s._param("user", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.UNKNOWN_USER_EPHEMERAL_SETTING_CHANGE_SECONDS: return s._(
				/*BTDS*/
				"",
				[s._plural(parseInt(e[0], 10), "number")]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.UNKNOWN_USER_EPHEMERAL_SETTING_CHANGE_MINUTES: return s._(
				/*BTDS*/
				"",
				[s._plural(parseInt(e[0], 10), "number")]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.UNKNOWN_USER_EPHEMERAL_SETTING_CHANGE_HOURS: return s._(
				/*BTDS*/
				"",
				[s._plural(parseInt(e[0], 10), "number")]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.UNKNOWN_USER_EPHEMERAL_SETTING_CHANGE_DAYS: return s._(
				/*BTDS*/
				"",
				[s._plural(parseInt(e[0], 10), "number")]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CUTOVER_THREAD_ADMIN_MESSAGE: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.DUAL_THREAD_CUTOVER_ADMIN_MESSAGE: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CUTOVER_IGD_THREAD_ADMIN_MESSAGE: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CUTOVER_ROLLBACK_ADMIN_MESSAGE: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.YOU_EPHEMERAL_SETTING_CHANGE_SECONDS: return s._(
				/*BTDS*/
				"",
				[s._plural(parseInt(e[0], 10), "number")]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.YOU_EPHEMERAL_SETTING_CHANGE_MINUTES: return s._(
				/*BTDS*/
				"",
				[s._plural(parseInt(e[0], 10), "number")]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.YOU_EPHEMERAL_SETTING_CHANGE_HOURS: return s._(
				/*BTDS*/
				"",
				[s._plural(parseInt(e[0], 10), "number")]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.YOU_EPHEMERAL_SETTING_CHANGE_DAYS: return s._(
				/*BTDS*/
				"",
				[s._plural(parseInt(e[0], 10), "number")]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_EPHEMERAL_SETTING_CHANGE_SECONDS: return s._(
				/*BTDS*/
				"",
				[s._plural(parseInt(e[0], 10), "number"), s._param("user", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_EPHEMERAL_SETTING_CHANGE_MINUTES: return s._(
				/*BTDS*/
				"",
				[s._plural(parseInt(e[0], 10), "number"), s._param("user", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_EPHEMERAL_SETTING_CHANGE_HOURS: return s._(
				/*BTDS*/
				"",
				[s._plural(parseInt(e[0], 10), "number"), s._param("user", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_EPHEMERAL_SETTING_CHANGE_DAYS: return s._(
				/*BTDS*/
				"",
				[s._plural(parseInt(e[0], 10), "number"), s._param("user", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.UNKNOWN_USER_EPHEMERAL_SETTING_TURNED_OFF: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.YOU_EPHEMERAL_SETTING_TURNED_OFF: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_EPHEMERAL_SETTING_TURNED_OFF: return s._(
				/*BTDS*/
				"",
				[s._param("user", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.EPHEMERAL_SETTINGS_AUTO_RESET: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_UNSENT_MESSAGE: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_UNSENT_MESSAGE: return s._(
				/*BTDS*/
				"",
				[s._param("first name", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_REACT_MESSAGE_IN_GROUP: return s._(
				/*BTDS*/
				"",
				[s._param("name", t[0]), s._param("emoji", e[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_REACT_MESSAGE: return s._(
				/*BTDS*/
				"",
				[s._param("emoji", e[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.UNKNOWN_USER_EPHEMERAL_TAKE_SCREENSHOT: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.UNKNOWN_USER_EPHEMERAL_RECORD_SCREEN: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.YOU_EPHEMERAL_TAKE_SCREENSHOT: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.YOU_EPHEMERAL_RECORD_SCREEN: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_EPHEMERAL_TAKE_SCREENSHOT: return s._(
				/*BTDS*/
				"",
				[s._param("user", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_EPHEMERAL_RECORD_SCREEN: return s._(
				/*BTDS*/
				"",
				[s._param("user", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.E2EE_THREAD_DESCRIPTION: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.UNKNOWN_USER_ADDED_YOU: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.UNKNOWN_USER_ADDED_YOU_AND_ONE_USER: return s._(
				/*BTDS*/
				"",
				[s._param("user_name", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.UNKNOWN_USER_ADDED_YOU_AND_MORE_THAN_ONE_USER: return s._(
				/*BTDS*/
				"",
				[s._param("number of participants", e[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.UNKNOWN_USER_ADDED_ONE_USER: return s._(
				/*BTDS*/
				"",
				[s._param("user_name", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.UNKNOWN_USER_ADDED_TWO_USER: return s._(
				/*BTDS*/
				"",
				[s._param("user_name_1", t[0]), s._param("user_name_2", t[1])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.UNKNOWN_USER_ADDED_MORE_THAN_TWO_USER: return s._(
				/*BTDS*/
				"",
				[s._param("user_name_1", t[0]), s._param("number of participants", e[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.DEBUG_MSG: return e[0];
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_MISSED_AUDIO_CALL: {
				var a = t[0];
				return a != null ? s._(
					/*BTDS*/
					"",
					[s._param("user_name", a)]
				).toString() : s._(
					/*BTDS*/
					""
				).toString();
			}
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_MISSED_AUDIO_CALL: {
				var i = t[0];
				return i != null ? s._(
					/*BTDS*/
					"",
					[s._param("user_name", i)]
				).toString() : s._(
					/*BTDS*/
					""
				).toString();
			}
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_MISSED_VIDEO_CALL: {
				var l = t[0];
				return l != null ? s._(
					/*BTDS*/
					"",
					[s._param("user_name", l)]
				).toString() : s._(
					/*BTDS*/
					""
				).toString();
			}
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_MISSED_VIDEO_CALL: {
				var u = t[0];
				return u != null ? s._(
					/*BTDS*/
					"",
					[s._param("user", u)]
				).toString() : s._(
					/*BTDS*/
					""
				).toString();
			}
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_AUDIO_CALLED:
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_AUDIO_CALLED: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_VIDEO_CALLED:
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_VIDEO_CALLED: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_STARTED_GROUP_AUDIO_CALL: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_STARTED_GROUP_AUDIO_CALL: {
				var c = t[0];
				return c != null ? s._(
					/*BTDS*/
					"",
					[s._param("user", c)]
				).toString() : s._(
					/*BTDS*/
					""
				).toString();
			}
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_STARTED_GROUP_VIDEO_CALL: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_STARTED_GROUP_VIDEO_CALL: {
				var d = t[0];
				return d != null ? s._(
					/*BTDS*/
					"",
					[s._param("user", d)]
				).toString() : s._(
					/*BTDS*/
					""
				).toString();
			}
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_CUSTOMIZE_HOTLIKE: return s._(
				/*BTDS*/
				"",
				[s._param("emoji", e[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_CUSTOMIZE_HOTLIKE: return s._(
				/*BTDS*/
				"",
				[s._param("participant_name", t[0]), s._param("emoji", e[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_CUSTOMIZE_NICKNAME: return s._(
				/*BTDS*/
				"",
				[s._param("participant_name", t[0]), s._param("nickname", e[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_CUSTOMIZE_THEME: return e[1] != null ? s._(
				/*BTDS*/
				"",
				[s._param("theme_name", e[0]), s._param("theme_emoji", e[1])]
			).toString() : s._(
				/*BTDS*/
				"",
				[s._param("theme_name", e[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_CUSTOMIZE_AI_THEME: return e[1] != null ? s._(
				/*BTDS*/
				"",
				[s._param("theme_name", e[0]), s._param("theme_emoji", e[1])]
			).toString() : s._(
				/*BTDS*/
				"",
				[s._param("theme_name", e[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_CUSTOMIZE_PHOTO: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_PINNED_MESSAGE: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_UNPINNED_MESSAGE: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.E2EE_THREAD_UK_OSA_ADMIN_MESSAGE: return s._(
				/*BTDS*/
				"",
				[s._param("participant_name", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_CUSTOMIZE_PARTICIPANT_NICKNAME: return s._(
				/*BTDS*/
				"",
				[
					s._param("participant_name_1", t[0]),
					s._param("participant_name_2", t[1]),
					s._param("nickname", e[0])
				]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_CLEAR_PARTICIPANT_NICKNAME: return s._(
				/*BTDS*/
				"",
				[s._param("participant_name_1", t[0]), s._param("participant_name_2", t[1])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_CUSTOMIZE_THEME: return e[1] != null ? s._(
				/*BTDS*/
				"",
				[
					s._param("participant_name", t[0]),
					s._param("theme_name", e[0]),
					s._param("theme_emoji", e[1])
				]
			).toString() : s._(
				/*BTDS*/
				"",
				[s._param("participant_name", t[0]), s._param("theme_name", e[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_CUSTOMIZE_AI_THEME: return e[1] != null ? s._(
				/*BTDS*/
				"",
				[
					s._param("participant_name", t[0]),
					s._param("theme_name", e[0]),
					s._param("theme_emoji", e[1])
				]
			).toString() : s._(
				/*BTDS*/
				"",
				[s._param("participant_name", t[0]), s._param("theme_name", e[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_CREATED_POLL: return s._(
				/*BTDS*/
				"",
				[s._param("poll_name", e[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_CREATED_POLL: return s._(
				/*BTDS*/
				"",
				[s._param("participant_name", t[0]), s._param("poll_name", e[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_ADDED_POLL_OPTION: return s._(
				/*BTDS*/
				"",
				[s._param("participant_name", t[0]), s._param("poll_option", e[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_ADDED_POLL_VOTE: return s._(
				/*BTDS*/
				"",
				[s._param("participant_name", t[0]), s._param("poll_option", e[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_ADDED_POLL_OPTION: return s._(
				/*BTDS*/
				"",
				[s._param("poll_option", e[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_ADDED_POLL_VOTE: return s._(
				/*BTDS*/
				"",
				[s._param("poll_option", e[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_ADDED_MULTIPLE_POLL_OPTIONS: {
				var m = parseInt(e[1], 10) - 1;
				return s._(
					/*BTDS*/
					"",
					[
						s._plural(m),
						s._param("participant_name", t[0]),
						s._param("poll_option", e[0]),
						s._param("num_other_options", m)
					]
				).toString();
			}
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_ADDED_MULTIPLE_POLL_OPTIONS: {
				var p = parseInt(e[1], 10) - 1;
				return s._(
					/*BTDS*/
					"",
					[
						s._plural(p),
						s._param("poll_option", e[0]),
						s._param("num_other_options", p)
					]
				).toString();
			}
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_ADDED_MULTIPLE_POLL_VOTES: {
				var _ = parseInt(e[1], 10) - 1;
				return s._(
					/*BTDS*/
					"",
					[
						s._plural(_),
						s._param("poll_option", e[0]),
						s._param("num_other_votes", _)
					]
				).toString();
			}
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_ADDED_MULTIPLE_POLL_VOTES: {
				var f = parseInt(e[1], 10) - 1;
				return s._(
					/*BTDS*/
					"",
					[
						s._plural(f),
						s._param("participant_name", t[0]),
						s._param("poll_option", e[0]),
						s._param("num_other_votes", f)
					]
				).toString();
			}
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_REMOVED_MULTIPLE_POLL_VOTES: {
				var g = parseInt(e[1], 10) - 1;
				return s._(
					/*BTDS*/
					"",
					[
						s._plural(g),
						s._param("poll_option", e[0]),
						s._param("num_other_removed_votes", g)
					]
				).toString();
			}
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_REMOVED_MULTIPLE_POLL_VOTES: {
				var h = parseInt(e[1], 10) - 1;
				return s._(
					/*BTDS*/
					"",
					[
						s._plural(h),
						s._param("participant_name", t[0]),
						s._param("poll_option", e[0]),
						s._param("num_other_removed_votes", h)
					]
				).toString();
			}
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_REMOVED_POLL_VOTE: return s._(
				/*BTDS*/
				"",
				[s._param("poll_option", e[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_REMOVED_POLL_VOTE: return s._(
				/*BTDS*/
				"",
				[s._param("participant_name", t[0]), s._param("poll_option", e[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_MIXED_POLL_UPDATE: return s._(
				/*BTDS*/
				"",
				[s._param("participant_name", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_MIXED_POLL_UPDATE: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_CHANGED_POLL_VOTE: return s._(
				/*BTDS*/
				"",
				[s._param("poll_option", e[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_CHANGED_POLL_VOTE: return s._(
				/*BTDS*/
				"",
				[s._param("participant_name", t[0]), s._param("poll_option", e[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_CHANGED_MULTIPLE_POLL_VOTES: {
				var y = parseInt(e[1], 10) - 1;
				return s._(
					/*BTDS*/
					"",
					[
						s._plural(y),
						s._param("poll_option", e[0]),
						s._param("num_other_changed_votes", y)
					]
				).toString();
			}
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_CHANGED_MULTIPLE_POLL_VOTES: {
				var C = parseInt(e[1], 10) - 1;
				return s._(
					/*BTDS*/
					"",
					[
						s._plural(C),
						s._param("participant_name", t[0]),
						s._param("poll_option", e[0]),
						s._param("num_other_changed_votes", C)
					]
				).toString();
			}
			case o("MAWLocalizationType").LOCALIZATION_TYPE.POLL_UNSENT_UPDATE: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_CUSTOMIZE_PHOTO: return s._(
				/*BTDS*/
				"",
				[s._param("participant_name", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_PINNED_MESSAGE: return s._(
				/*BTDS*/
				"",
				[s._param("participant_name", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_UNPINNED_MESSAGE: return s._(
				/*BTDS*/
				"",
				[s._param("participant_name", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_CUSTOMIZE_CURRENT_USER_NICKNAME: return s._(
				/*BTDS*/
				"",
				[s._param("participant_name", t[0]), s._param("nickname", e[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SET_OWN_NICKNAME: return s._(
				/*BTDS*/
				"",
				[s._param("nickname", e[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_CLEAR_OWN_NICKNAME: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_CLEAR_PARTICIPANT_NICKNAME: return s._(
				/*BTDS*/
				"",
				[s._param("participant_name", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SET_OWN_NICKNAME: return s._(
				/*BTDS*/
				"",
				[s._param("participant_name", t[0]), s._param("nickname", e[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_CLEAR_OWN_NICKNAME: return s._(
				/*BTDS*/
				"",
				[s._param("participant_name", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_CLEAR_CURRENT_USER_NICKNAME: return s._(
				/*BTDS*/
				"",
				[s._param("participant_name", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SET_ADD_MODE_ADMIN_ONLY: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SET_ADD_MODE_ALL_MEMBERS: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SET_ADD_MODE_ADMIN_ONLY: return s._(
				/*BTDS*/
				"",
				[s._param("participant_name", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SET_ADD_MODE_ALL_MEMBERS: return s._(
				/*BTDS*/
				"",
				[s._param("participant_name", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.SERVER_SET_ADD_MODE_ADMIN_ONLY: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.SERVER_SET_ADD_MODE_ALL_MEMBERS: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.DUAL_THREAD_CUTOVER_ADMIN_MESSAGE_WITH_OTHER_USER_NAME: return s._(
				/*BTDS*/
				"",
				[s._param("user", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.DUAL_THREAD_CUTOVER_ADMIN_MESSAGE_SELF_THREAD: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.DUAL_THREAD_CUTOVER_ADMIN_MESSAGE_OTHER_USER_NAME_UNKNOWN: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_BUMPED_OWN_MESSAGE: return r("getMAWLocalizedBumpMsgReplySnippet")(o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_BUMPED_OWN_MESSAGE, null, null).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_BUMPED_MESSAGE: return r("getMAWLocalizedBumpMsgReplySnippet")(o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_BUMPED_MESSAGE, null, t[0]).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_BUMPED_CURRENT_USER_MESSAGE: return r("getMAWLocalizedBumpMsgReplySnippet")(o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_BUMPED_CURRENT_USER_MESSAGE, t[0], null).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_BUMPED_OWN_MESSAGE: return r("getMAWLocalizedBumpMsgReplySnippet")(o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_BUMPED_OWN_MESSAGE, t[0], null).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_BUMPED_PARTICIPANT_MESSAGE: return r("getMAWLocalizedBumpMsgReplySnippet")(o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_BUMPED_PARTICIPANT_MESSAGE, t[0], t[1]).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.USER_SEND_UNAVAILABLE_MESSAGE_FALLBACK: return r("getMAWLocalizedFallbackMsgSnippet")(o("MAWLocalizationType").LOCALIZATION_TYPE.USER_SEND_UNAVAILABLE_MESSAGE_FALLBACK).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.USER_SEND_ENCRYPTED_MESSAGE_FALLBACK: return r("getMAWLocalizedFallbackMsgSnippet")(o("MAWLocalizationType").LOCALIZATION_TYPE.USER_SEND_ENCRYPTED_MESSAGE_FALLBACK).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_UNRENDERABLE_MESSAGE_FALLBACK: return r("getMAWLocalizedFallbackMsgSnippet")(o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_UNRENDERABLE_MESSAGE_FALLBACK).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_UNRENDERABLE_MESSAGE_FALLBACK: return r("getMAWLocalizedFallbackMsgSnippet")(o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_UNRENDERABLE_MESSAGE_FALLBACK).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_LIVE_LOCATION_FALLBACK: return r("getMAWLocalizedFallbackMsgSnippet")(o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_LIVE_LOCATION_FALLBACK).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_LOCATION_FALLBACK: return r("getMAWLocalizedFallbackMsgSnippet")(o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_LOCATION_FALLBACK).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_LIVE_LOCATION_FALLBACK: return r("getMAWLocalizedFallbackMsgSnippet")(o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_LIVE_LOCATION_FALLBACK).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_LOCATION_FALLBACK: return r("getMAWLocalizedFallbackMsgSnippet")(o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_LOCATION_FALLBACK).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_POLL_CREATION_FALLBACK: return r("getMAWLocalizedFallbackMsgSnippet")(o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_POLL_CREATION_FALLBACK).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_POLL_CREATION_FALLBACK: return r("getMAWLocalizedFallbackMsgSnippet")(o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_POLL_CREATION_FALLBACK).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_CONTACT_SHARE_FALLBACK: return r("getMAWLocalizedFallbackMsgSnippet")(o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_CONTACT_SHARE_FALLBACK).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_CONTACT_SHARE_FALLBACK: return r("getMAWLocalizedFallbackMsgSnippet")(o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_CONTACT_SHARE_FALLBACK).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_STORY_MENTION_FALLBACK: return r("getMAWLocalizedFallbackMsgSnippet")(o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_STORY_MENTION_FALLBACK).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_STORY_MENTION_FALLBACK: return r("getMAWLocalizedFallbackMsgSnippet")(o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_STORY_MENTION_FALLBACK).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.MESSENGER_MEMORY_ENCRYPTED_MESSAGE_FALLBACK: return r("getMAWLocalizedFallbackMsgSnippet")(o("MAWLocalizationType").LOCALIZATION_TYPE.MESSENGER_MEMORY_ENCRYPTED_MESSAGE_FALLBACK).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_MEMORIES_SHARE: return o("MAWMemoriesShareXMASnippetFbt").getCurrentUserSendMemoriesShareSnippetFbt().toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_MEMORIES_SHARE: return o("MAWMemoriesShareXMASnippetFbt").getParticipantSendMemoriesShareSnippetFbt(t[0]).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.RTC_XMA_FALLBACK: return r("getMAWLocalizedFallbackMsgSnippet")(o("MAWLocalizationType").LOCALIZATION_TYPE.RTC_XMA_FALLBACK).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.META_AI_SEND_MESSAGE_FALLBACK: return r("getMAWLocalizedFallbackMsgSnippet")(o("MAWLocalizationType").LOCALIZATION_TYPE.META_AI_SEND_MESSAGE_FALLBACK).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_BUMP_MESSAGE_FALLBACK: return r("getMAWLocalizedFallbackMsgSnippet")(o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_BUMP_MESSAGE_FALLBACK).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_BUMP_MESSAGE: return r("getMAWLocalizedFallbackMsgSnippet")(o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_BUMP_MESSAGE).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_STICKER_RECEIVER_FETCH_MESSAGE_FALLBACK: return r("getMAWLocalizedFallbackMsgSnippet")(o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_STICKER_RECEIVER_FETCH_MESSAGE_FALLBACK).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_STICKER_RECEIVER_FETCH_MESSAGE_FALLBACK: return r("getMAWLocalizedFallbackMsgSnippet")(o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_STICKER_RECEIVER_FETCH_MESSAGE_FALLBACK).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_LIMIT_SHARING_DISABLED: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_LIMIT_SHARING_ENABLED: return s._(
				/*BTDS*/
				""
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_LIMIT_SHARING_DISABLED: return s._(
				/*BTDS*/
				"",
				[s._param("participant_name", t[0])]
			).toString();
			case o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_LIMIT_SHARING_ENABLED: return s._(
				/*BTDS*/
				"",
				[s._param("participant_name", t[0])]
			).toString();
			default: return "";
		}
	}
	l.buildLocalizedString = e;
}), 226);
