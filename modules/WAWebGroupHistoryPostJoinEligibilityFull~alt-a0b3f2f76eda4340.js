__d("WAWebGroupHistoryPostJoinEligibilityFull", ["WAWebGetGroupHistoryBundleMessagesCount", "WAWebGroupHistoryPostJoinEligibility"], (function(t, n, r, o, a, i, l) {
	"use strict";
	async function e(e) {
		var t, n = e.groupMetadata, r = e.groupWid, a = e.joinTimeFallback, i = e.participant;
		if (!o("WAWebGroupHistoryPostJoinEligibility").isEligibleForPostJoinHistory(i, o("WAWebGroupHistoryPostJoinEligibility").groupContextFromMetadata(n), a)) return {
			eligible: !1,
			reason: "ineligible"
		};
		var l = (t = i.joinTime) != null ? t : a;
		if (l == null) return {
			eligible: !1,
			reason: "ineligible"
		};
		var s = await o("WAWebGetGroupHistoryBundleMessagesCount").getGroupHistoryBundleMessageCount({
			groupWid: r,
			targetStartMessageTime: l
		});
		return s === 0 ? {
			eligible: !1,
			reason: "no_available_messages"
		} : {
			eligible: !0,
			messageCount: s
		};
	}
	async function s(e) {
		var t = e.groupMetadata, n = e.groupWid, r = e.joinTimeFallback, a = e.participants;
		if (!o("WAWebGroupHistoryPostJoinEligibility").isPostJoinHistoryGroupEligible(o("WAWebGroupHistoryPostJoinEligibility").groupContextFromMetadata(t))) return {
			eligible: [],
			ineligible: a.map(function(e) {
				return {
					participant: e,
					reason: "group_ineligible"
				};
			}),
			messageCount: 0
		};
		var i = [], l = [];
		for (var s of a) {
			var u = o("WAWebGroupHistoryPostJoinEligibility").getParticipantPostJoinEligibility(s, r);
			u.eligible ? i.push(s) : l.push({
				participant: s,
				reason: u.reason
			});
		}
		if (i.length === 0) return {
			eligible: i,
			ineligible: l,
			messageCount: 0
		};
		var c = r != null ? r : i[0].joinTime, d = await o("WAWebGetGroupHistoryBundleMessagesCount").getGroupHistoryBundleMessageCount({
			groupWid: n,
			targetStartMessageTime: c
		});
		return d === 0 ? {
			eligible: [],
			ineligible: [].concat(l, i.map(function(e) {
				return {
					participant: e,
					reason: "no_available_messages"
				};
			})),
			messageCount: 0
		} : {
			eligible: i,
			ineligible: l,
			messageCount: d
		};
	}
	l.isEligibleForPostJoinHistoryFull = e, l.isEligibleForPostJoinHistoryFullMulti = s;
}), 98);
