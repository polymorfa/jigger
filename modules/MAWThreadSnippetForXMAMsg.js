__d("MAWThreadSnippetForXMAMsg", [
	"MAWLocalizationType",
	"WAArmadilloXMA.pb",
	"WAJids",
	"WALogger",
	"gkx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x, $, P, N;
	function M(t) {
		var n = t.author, a = t.chatJid, i = t.content, l = t.mentionedJids, M = t.snippetSenderContactId, A = t.xmaMessageType, F = o("MAWLocalizationType").LOCALIZATION_TYPE.UNAVAILABLE_SNIPPET, O = {
			contactIDs: [],
			mentionJIDs: l,
			strings: []
		};
		switch (A == null && o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["XMA message does not have xmaMessageType"]))), A) {
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.MSG_MUSIC_STICKER: if (!r("gkx")("13570")) {
				o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Encountered unexpected XMAMessageType when building a thread snippet: ", ""])), A);
				break;
			}
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.GEN_AI_RICH_RESPONSE:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_FEED_SHARE:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_GAMING_CUSTOM_UPDATE:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.MSG_RECEIVER_FETCH:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_FEED_POST_REACTION_REPLY:
				o("WAJids").isAuthorMe(n) ? F = o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_ATTACHMENT : o("WAJids").isAuthorSystem(n) || M == null ? o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["XMA message can not have AUTHOR_SYSTEM"]))) : (F = o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_ATTACHMENT, O.contactIDs.push(M));
				break;
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.MSG_EXTERNAL_LINK_SHARE:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.MSG_MANUS_GROWTH_REFERRAL:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_PROFILE_DIRECTORY_ITEM:
				if (o("WAJids").isAuthorMe(n)) if (i != null) {
					var B = i;
					F = o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_ATTACHMENT, B != null && O.strings.push(B);
				} else F = o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_ATTACHMENT;
				else if (o("WAJids").isAuthorSystem(n) || M == null) o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["XMA message can not have AUTHOR_SYSTEM"])));
				else {
					F = o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_ATTACHMENT, O.contactIDs.push(M);
					var W = i;
					W != null && O.strings.push(W);
				}
				break;
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_POST_MENTION:
				o("WAJids").isAuthorMe(n) ? F = o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_POST_MENTION : F = o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_POST_MENTION;
				break;
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.MSG_MEMORIES_SHARE:
				o("WAJids").isAuthorMe(n) ? F = o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_MEMORIES_SHARE : F = o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_MEMORIES_SHARE;
				break;
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_STORY_REPLY:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_PRODUCER_STORY_REPLY:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_STORY_SHARE:
				o("WAJids").isAuthorMe(n) ? F = o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SENT_STORY : o("WAJids").isAuthorSystem(n) || M == null ? o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["XMA message can not have AUTHOR_SYSTEM"]))) : (F = o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SENT_STORY, O.contactIDs.push(M));
				break;
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_STORY_MENTION:
				o("WAJids").isAuthorSystem(n) || M == null ? o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["XMA message can not have AUTHOR_SYSTEM"]))) : o("WAJids").isAuthorMe(n) ? F = o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_STORY_MENTION : F = o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_STORY_MENTION;
				break;
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.MSG_LOCATION_SHARING:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.MSG_LOCATION_SHARING_V2:
				o("WAJids").isAuthorSystem(n) || M == null ? o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["XMA message can not have AUTHOR_SYSTEM"]))) : o("WAJids").isAuthorMe(n) ? F = o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_LOCATION : F = o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_LOCATION;
				break;
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.MSG_PHONE_NUMBER:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.MSG_CONTACT:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.MSG_AI_CONTACT:
				o("WAJids").isAuthorSystem(n) || M == null ? o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["XMA message can not have AUTHOR_SYSTEM"]))) : o("WAJids").isAuthorMe(n) ? F = o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_CONTACT_SHARE : F = o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_CONTACT_SHARE;
				break;
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_CLIPS_SHARE:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_SHORT:
				o("WAJids").isAuthorMe(n) ? F = o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SENT_REEL : o("WAJids").isAuthorSystem(n) || M == null ? o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose(["XMA message can not have AUTHOR_SYSTEM"]))) : F = o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SENT_REEL;
				break;
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_FEED_POST_PRIVATE_REPLY:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_MULTIPOST_SHARE:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_SINGLE_IMAGE_POST_SHARE:
				o("WAJids").isAuthorMe(n) ? F = o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SENT_POST : o("WAJids").isAuthorSystem(n) || M == null ? o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose(["XMA message can not have AUTHOR_SYSTEM"]))) : F = o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SENT_POST;
				break;
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.MSG_HIGHLIGHTS_TAB_FRIEND_UPDATES_REPLY:
				o("WAJids").isAuthorMe(n) ? F = o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SENT_POST : o("WAJids").isAuthorSystem(n) || M == null ? o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose(["XMA message can not have AUTHOR_SYSTEM"]))) : F = o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SENT_POST;
				break;
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_STORY_PHOTO_SHARE:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_STORY_VIDEO_SHARE:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_STORY_REPLY:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_STORY_REACTION:
				o("WAJids").isAuthorMe(n) ? F = o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SENT_STORY : o("WAJids").isAuthorSystem(n) || M == null ? o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose(["XMA message can not have AUTHOR_SYSTEM"]))) : (F = o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SENT_STORY, O.contactIDs.push(M));
				break;
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_STORY_PHOTO_HIGHLIGHT_SHARE:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_STORY_VIDEO_HIGHLIGHT_SHARE:
				o("WAJids").isAuthorMe(n) ? F = o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SENT_STORY_HIGHLIGHT : o("WAJids").isAuthorSystem(n) || M == null ? o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose(["XMA message can not have AUTHOR_SYSTEM"]))) : F = o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SENT_STORY_HIGHLIGHT;
				break;
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_STORY_PHOTO_MENTION:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_STORY_VIDEO_MENTION:
				if (o("WAJids").isAuthorMe(n)) {
					F = o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_MENTIONED_STORY_IG;
					var q;
					if (a != null && (q = o("WAJids").interpretAsUserJid(a)), q != null) {
						var U = o("WAJids").userIdFromJid(q);
						O.contactIDs.push(U);
					} else o("WALogger").ERROR(b || (b = babelHelpers.taggedTemplateLiteralLoose(["XMA story mentions must have a target Jid"])));
				} else o("WAJids").isAuthorSystem(n) ? o("WALogger").ERROR(v || (v = babelHelpers.taggedTemplateLiteralLoose(["XMA message can not have AUTHOR_SYSTEM"]))) : F = o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_RECEIVED_STORY_MENTION_IG;
				break;
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_AUDIO_CALL:
				if (o("WAJids").isAuthorMe(n)) {
					F = o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_AUDIO_CALLED;
					var V = w(a);
					V != null ? O.contactIDs.push(V) : o("WALogger").ERROR(S || (S = babelHelpers.taggedTemplateLiteralLoose(["RTC XMA must have a target Jid"])));
				} else o("WAJids").isAuthorSystem(n) || M == null ? o("WALogger").ERROR(R || (R = babelHelpers.taggedTemplateLiteralLoose(["XMA message can not have AUTHOR_SYSTEM"]))) : (F = o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_AUDIO_CALLED, O.contactIDs.push(M));
				break;
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_VIDEO_CALL:
				if (o("WAJids").isAuthorMe(n) && M != null) {
					F = o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_VIDEO_CALLED;
					var H = w(a);
					H != null ? O.contactIDs.push(H) : o("WALogger").ERROR(L || (L = babelHelpers.taggedTemplateLiteralLoose(["RTC XMA must have a target Jid"])));
				} else o("WAJids").isAuthorSystem(n) || M == null ? o("WALogger").ERROR(E || (E = babelHelpers.taggedTemplateLiteralLoose(["XMA message can not have AUTHOR_SYSTEM"]))) : (F = o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_VIDEO_CALLED, O.contactIDs.push(M));
				break;
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_MISSED_AUDIO_CALL:
				if (o("WAJids").isAuthorMe(n)) {
					F = o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_MISSED_AUDIO_CALL;
					var G = w(a);
					G != null ? O.contactIDs.push(G) : o("WALogger").ERROR(k || (k = babelHelpers.taggedTemplateLiteralLoose(["RTC XMA must have a target Jid"])));
				} else o("WAJids").isAuthorSystem(n) || M == null ? o("WALogger").ERROR(I || (I = babelHelpers.taggedTemplateLiteralLoose(["XMA message can not have AUTHOR_SYSTEM"]))) : (F = o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_MISSED_AUDIO_CALL, O.contactIDs.push(M));
				break;
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_MISSED_VIDEO_CALL:
				if (o("WAJids").isAuthorMe(n)) {
					F = o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_MISSED_VIDEO_CALL;
					var z = w(a);
					z != null ? O.contactIDs.push(z) : o("WALogger").ERROR(T || (T = babelHelpers.taggedTemplateLiteralLoose(["RTC XMA must have a target Jid"])));
				} else o("WAJids").isAuthorSystem(n) || M == null ? o("WALogger").ERROR(D || (D = babelHelpers.taggedTemplateLiteralLoose(["XMA message can not have AUTHOR_SYSTEM"]))) : (F = o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_MISSED_VIDEO_CALL, O.contactIDs.push(M));
				break;
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_GROUP_AUDIO_CALL:
				o("WAJids").isAuthorMe(n) && M != null ? F = o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_STARTED_GROUP_AUDIO_CALL : o("WAJids").isAuthorSystem(n) || M == null ? o("WALogger").ERROR(x || (x = babelHelpers.taggedTemplateLiteralLoose(["XMA message can not have AUTHOR_SYSTEM"]))) : (F = o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_STARTED_GROUP_AUDIO_CALL, O.contactIDs.push(M));
				break;
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_GROUP_VIDEO_CALL:
				o("WAJids").isAuthorMe(n) && M != null ? F = o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_STARTED_GROUP_VIDEO_CALL : o("WAJids").isAuthorSystem(n) || M == null ? o("WALogger").ERROR($ || ($ = babelHelpers.taggedTemplateLiteralLoose(["XMA message can not have AUTHOR_SYSTEM"]))) : (F = o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_STARTED_GROUP_VIDEO_CALL, O.contactIDs.push(M));
				break;
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_EVENT:
				o("WAJids").isAuthorMe(n) ? F = o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SENT_EVENT : o("WAJids").isAuthorSystem(n) || M == null ? o("WALogger").ERROR(P || (P = babelHelpers.taggedTemplateLiteralLoose(["XMA message can not have AUTHOR_SYSTEM"]))) : (F = o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SENT_EVENT, O.contactIDs.push(M));
				break;
			default: o("WALogger").ERROR(N || (N = babelHelpers.taggedTemplateLiteralLoose(["Encountered unexpected XMAMessageType when building a thread snippet: ", ""])), A);
		}
		return {
			snippetParams: O,
			snippetSenderContactId: M,
			snippetType: F
		};
	}
	function w(e) {
		var t = e != null ? o("WAJids").interpretAsUserJid(e) : null;
		return t != null ? o("WAJids").userIdFromJid(t) : null;
	}
	l.default = M;
}), 98);
