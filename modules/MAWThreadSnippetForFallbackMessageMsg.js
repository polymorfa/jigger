__d("MAWThreadSnippetForFallbackMessageMsg", ["MAWLocalizationType", "WAJids"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n) {
		return {
			snippetParams: {
				contactIDs: n != null ? n : [],
				strings: []
			},
			snippetSenderContactId: e,
			snippetType: t
		};
	}
	function s(t) {
		var n = t.author, r = t.snippetSenderContactId, a = t.unsupportedType;
		if (o("WAJids").isAuthorMe(n)) switch (a) {
			case "liveLocationMessage": return e(r, o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_LIVE_LOCATION_FALLBACK);
			case "locationMessage": return e(r, o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_LOCATION_FALLBACK);
			case "contactShareMessage": return e(r, o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_CONTACT_SHARE_FALLBACK);
			case "storyMentionMessage": return e(r, o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_STORY_MENTION_FALLBACK);
			case "postMentionMessage": return e(r, o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_POST_MENTION_FALLBACK);
			case "pollCreationMessage": return e(r, o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_POLL_CREATION_FALLBACK);
			case "bumpMessage": return e(r, o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_BUMPED_MESSAGE);
			case "stickerReceiverFetchMessage": return e(r, o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_STICKER_RECEIVER_FETCH_MESSAGE_FALLBACK);
			case "messengerMemory": return e(r, o("MAWLocalizationType").LOCALIZATION_TYPE.MESSENGER_MEMORY_ENCRYPTED_MESSAGE_FALLBACK);
			default: return e(r, o("MAWLocalizationType").LOCALIZATION_TYPE.UNAVAILABLE_SNIPPET);
		}
		else switch (a) {
			case "liveLocationMessage": return e(r, o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_LIVE_LOCATION_FALLBACK);
			case "locationMessage": return e(r, o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_LOCATION_FALLBACK);
			case "contactShareMessage": return e(r, o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_CONTACT_SHARE_FALLBACK);
			case "storyMentionMessage": return e(r, o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_STORY_MENTION_FALLBACK);
			case "postMentionMessage": return e(r, o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_POST_MENTION_FALLBACK);
			case "pollCreationMessage": return e(r, o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_POLL_CREATION_FALLBACK);
			case "bumpMessage": return e(r, o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_BUMPED_PARTICIPANT_MESSAGE);
			case "metaAiMessage": return e(r, o("MAWLocalizationType").LOCALIZATION_TYPE.META_AI_SEND_MESSAGE_FALLBACK);
			case "stickerReceiverFetchMessage": return e(r, o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_STICKER_RECEIVER_FETCH_MESSAGE_FALLBACK);
			case "messengerMemory": return e(r, o("MAWLocalizationType").LOCALIZATION_TYPE.MESSENGER_MEMORY_ENCRYPTED_MESSAGE_FALLBACK);
			default: return e(r, o("MAWLocalizationType").LOCALIZATION_TYPE.UNAVAILABLE_SNIPPET);
		}
	}
	l.default = s;
}), 98);
