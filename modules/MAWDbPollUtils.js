__d("MAWDbPollUtils", [
	"FBLogger",
	"MAWLocalizationType",
	"WAJids",
	"nullthrows"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n, o) {
		var a = e.pollAuthor, i = new Map(e.pollOptions.entries().map(function(e) {
			var n = e[0], o = e[1];
			return o.optionText == null || !o.voteAuthors.has(t) ? null : [n.toString(), r("nullthrows")(o.optionText)];
		}).filter(Boolean)), l = new Map(o.map(function(e) {
			return [e.hashedOptionName, e.optionName];
		})), s = o.filter(function(e) {
			return !i.has(e.hashedOptionName);
		}).map(function(e) {
			return e.optionName;
		}), d = Array.from(i.entries().map(function(e) {
			var t = e[0], n = e[1];
			return l.has(t) ? null : n;
		}).filter(Boolean));
		if (n.length > 0) return s.length > 0 || d.length > 0 ? u(e, a) : c(e, t, n);
		if (s.length > 0) return d.length === 0 ? p(e, t, s) : s.length === d.length ? g(e, t, s) : u(e, a);
		if (d.length > 0) return C(e, t, d);
		throw r("FBLogger")("messenger_web").mustfixThrow("Not a valid update for poll");
	}
	function s(e) {
		if (e === o("WAJids").AUTHOR_SYSTEM || e === o("WAJids").AUTHOR_ME) throw r("FBLogger")("messenger_web").mustfixThrow("Not a valid author for poll vote");
		return o("WAJids").userIdFromJid(e);
	}
	function u(e, t) {
		var n = t === o("WAJids").AUTHOR_ME;
		return n ? {
			adminMsgContent: [e.title],
			adminType: o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_MIXED_POLL_UPDATE,
			version: 1
		} : {
			adminMsgContent: [s(t), e.title],
			adminType: o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_MIXED_POLL_UPDATE,
			version: 1
		};
	}
	function c(e, t, n) {
		return n.length === 1 ? d(e, t, n[0]) : m(e, t, n[0], n.length);
	}
	function d(e, t, n) {
		return t === o("WAJids").AUTHOR_ME ? {
			adminMsgContent: [n, e.title],
			adminType: o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_ADDED_POLL_OPTION,
			version: 1
		} : {
			adminMsgContent: [
				s(t),
				n,
				e.title
			],
			adminType: o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_ADDED_POLL_OPTION,
			version: 1
		};
	}
	function m(e, t, n, r) {
		return t === o("WAJids").AUTHOR_ME ? {
			adminMsgContent: [
				n,
				r.toString(),
				e.title
			],
			adminType: o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_ADDED_MULTIPLE_POLL_OPTIONS,
			version: 1
		} : {
			adminMsgContent: [
				s(t),
				n,
				r.toString(),
				e.title
			],
			adminType: o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_ADDED_MULTIPLE_POLL_OPTIONS,
			version: 1
		};
	}
	function p(e, t, n) {
		return n.length === 1 ? _(e, t, n[0]) : f(e, t, n[0], n.length);
	}
	function _(e, t, n) {
		return t === o("WAJids").AUTHOR_ME ? {
			adminMsgContent: [n, e.title],
			adminType: o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_ADDED_POLL_VOTE,
			version: 1
		} : {
			adminMsgContent: [
				s(t),
				n,
				e.title
			],
			adminType: o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_ADDED_POLL_VOTE,
			version: 1
		};
	}
	function f(e, t, n, r) {
		return t === o("WAJids").AUTHOR_ME ? {
			adminMsgContent: [
				n,
				r.toString(),
				e.title
			],
			adminType: o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_ADDED_MULTIPLE_POLL_VOTES,
			version: 1
		} : {
			adminMsgContent: [
				s(t),
				n,
				r.toString(),
				e.title
			],
			adminType: o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_ADDED_MULTIPLE_POLL_VOTES,
			version: 1
		};
	}
	function g(e, t, n) {
		return n.length === 1 ? h(e, t, n[0]) : y(e, t, n[0], n.length);
	}
	function h(e, t, n) {
		return t === o("WAJids").AUTHOR_ME ? {
			adminMsgContent: [n, e.title],
			adminType: o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_CHANGED_POLL_VOTE,
			version: 1
		} : {
			adminMsgContent: [
				s(t),
				n,
				e.title
			],
			adminType: o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_CHANGED_POLL_VOTE,
			version: 1
		};
	}
	function y(e, t, n, r) {
		return t === o("WAJids").AUTHOR_ME ? {
			adminMsgContent: [
				n,
				r.toString(),
				e.title
			],
			adminType: o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_CHANGED_MULTIPLE_POLL_VOTES,
			version: 1
		} : {
			adminMsgContent: [
				s(t),
				n,
				r.toString(),
				e.title
			],
			adminType: o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_CHANGED_MULTIPLE_POLL_VOTES,
			version: 1
		};
	}
	function C(e, t, n) {
		return n.length === 1 ? b(e, t, n[0]) : v(e, t, n[0], n.length);
	}
	function b(e, t, n) {
		return t === o("WAJids").AUTHOR_ME ? {
			adminMsgContent: [n, e.title],
			adminType: o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_REMOVED_POLL_VOTE,
			version: 1
		} : {
			adminMsgContent: [
				s(t),
				n,
				e.title
			],
			adminType: o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_REMOVED_POLL_VOTE,
			version: 1
		};
	}
	function v(e, t, n, r) {
		return t === o("WAJids").AUTHOR_ME ? {
			adminMsgContent: [
				n,
				r.toString(),
				e.title
			],
			adminType: o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_REMOVED_MULTIPLE_POLL_VOTES,
			version: 1
		} : {
			adminMsgContent: [
				s(t),
				n,
				r.toString(),
				e.title
			],
			adminType: o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_REMOVED_MULTIPLE_POLL_VOTES,
			version: 1
		};
	}
	l.getAdminMessageForUpdate = e;
}), 98);
