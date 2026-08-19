__d("MAWBridgeNewPollHandler", [
	"fbt",
	"FBLogger",
	"I64",
	"LSAuthorityLevel",
	"LSGroupPollEventType",
	"LSIntEnum",
	"LSPollQuestionType",
	"MAWBridgePollUtils",
	"MAWDbPoll",
	"MAWMiActOnMiThreadExistsForJid__DO_NOT_USE",
	"MNLSXMALayoutType",
	"MNLSXMATemplateType",
	"MessagingAttachmentType",
	"QuestionPollStage",
	"ReQL",
	"WAJids",
	"nullthrows"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = 3;
	async function d(t, n, r) {
		var a = n.contactIdForCurrentUser, i = n.dbPoll, l = n.latestUpdateMsgId, s = n.latestUpdateTimestampMs, u = n.transportKey, c = i.pollStanzaId, d = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(t.attachments.index("idx_attachments_collapsible_id")).getKeyRange(r, (e || (e = o("I64"))).of_string(c)));
		d != null && await t.attachments.delete(d.threadKey, d.messageId, d.attachmentFbid), await p(t, i, r, l, s, a, u);
	}
	function m(e, t) {
		return o("MAWMiActOnMiThreadExistsForJid__DO_NOT_USE").onMiThreadExistsForJidNoThrow__DO_NOT_USE(e, t.dbPoll.chatJid, "BridgeNewPollHandler", function(e, n) {
			return d(e, t, n);
		});
	}
	async function p(t, n, a, i, l, s, u) {
		var d = n.latestSenderTimestampsMs, m = n.pollParticipantCount, p = n.pollStanzaId, h = (e || (e = o("I64"))).of_string(p), y = await o("ReQL").firstAsync(o("ReQL").fromTableDescending(t.polls).getKeyRange(h));
		y == null && await f(t, h, i, l, a);
		var C = await o("ReQL").toArrayAsync(o("ReQL").fromTableDescending(t.poll_options_v2).getKeyRange(h)), b = new Map(n.pollOptions.entries().map(function(e) {
			var t = e[0], n = e[1];
			return [o("MAWDbPoll").generateStableIdFromOptionHash(t, p).toString(), n];
		})), v = new Map();
		C.forEach(function(t) {
			var n = (e || (e = o("I64"))).to_string(t.optionId);
			v.set(n, babelHelpers.extends({}, v.get(n), { lsOption: t }));
		}), b.entries().forEach(function(e) {
			var t = e[0], n = e[1];
			n.optionText != null && v.set(t, babelHelpers.extends({}, v.get(t), { mawDbOption: n }));
		});
		var S = v.entries().toArray().sort(function(e, t) {
			var n, o, a = e[0], i = e[1], l = i.lsOption, s = i.mawDbOption, u = t[0], c = t[1], d = c.lsOption, m = c.mawDbOption, p = r("nullthrows")((n = l == null ? void 0 : l.optionText) != null ? n : s == null ? void 0 : s.optionText), _ = r("nullthrows")((o = d == null ? void 0 : d.optionText) != null ? o : m == null ? void 0 : m.optionText);
			return p.localeCompare(_);
		}), R = await Promise.all(S.map(async function(n, a) {
			var i = n[0], l = n[1], u = l.lsOption, c = l.mawDbOption, p = (e || (e = o("I64"))).of_int32(a);
			if (u == null && c == null) return null;
			var f = e.of_string(i);
			if (c == null) {
				var g = r("nullthrows")(u), y = g.optionText;
				await t.poll_options_v2.upsert([h, f], babelHelpers.extends({}, r("nullthrows")(u), { sortKeyCreationTimestamp: p }));
				var C = await o("ReQL").firstAsync(o("ReQL").fromTableDescending(t.poll_votes_v2).getKeyRange(h, f, s));
				return {
					contactIds: [s],
					hasVoteFromCurrentUser: !0,
					numVotes: 1,
					optionId: f,
					optionText: y,
					progressBarFilledPercentage: Math.floor(1 / m * 100),
					sortKeyCreationTimestamp: p,
					sortKeyVotingTimestamp: C != null ? C.timestampMs : (e || (e = o("I64"))).zero
				};
			}
			return _(t, h, f, r("nullthrows")(c.optionText), u, c, p, d, s, m);
		})).then(function(e) {
			return e.filter(Boolean);
		}), L = R.some(function(e) {
			return e.hasVoteFromCurrentUser;
		}), E = o("MAWBridgePollUtils").sortPollXMAOptions(R).slice(0, c);
		await g(t, n, a, i, l, E, L, u);
	}
	async function _(t, n, a, i, l, s, u, c, d, m) {
		var p = s.voteAuthors, _ = Array.from(p).map(function(e) {
			var t = c.get(e);
			if (t == null) throw r("FBLogger")("messenger_web").mustfixThrow("Missing latest sender timestamp for poll voter from dbPoll");
			return {
				contactId: o("MAWBridgePollUtils").getContactIdForAuthor(e),
				latestSenderTimestampMs: t
			};
		}), f = l != null ? await o("ReQL").toArrayAsync(o("ReQL").fromTableDescending(t.poll_votes_v2).getKeyRange(n, a)) : [], g = f.find(function(t) {
			return (e || (e = o("I64"))).equal(t.contactId, d);
		}), h = c.get(o("WAJids").AUTHOR_ME), y = g != null && (h == null || h < (e || (e = o("I64"))).to_float(g.timestampMs));
		await Promise.all(f.map(async function(r) {
			(e || (e = o("I64"))).equal(r.contactId, d) && y || await t.poll_votes_v2.delete(n, a, r.contactId);
		})), await Promise.all(_.map(async function(r) {
			var i = r.contactId, l = r.latestSenderTimestampMs;
			await t.poll_votes_v2.put({
				contactId: i,
				optionId: a,
				pollId: n,
				timestampMs: (e || (e = o("I64"))).of_float(l)
			});
		}));
		var C = (e || (e = o("I64"))).of_float(Math.max.apply(Math, _.map(function(e) {
			return e.latestSenderTimestampMs;
		}).concat([0]))), b = y ? (e || (e = o("I64"))).max(r("nullthrows")(g == null ? void 0 : g.timestampMs), C) : C, v = _.length + (y ? 1 : 0), S = {
			optionId: a,
			optionText: i,
			pollId: n,
			sortKeyCreationTimestamp: u,
			sortKeyVotingTimestamp: b,
			voteCount: e.of_int32(v)
		};
		l != null ? await t.poll_options_v2.upsert([n, a], S) : await t.poll_options_v2.add(S);
		var R = _.map(function(e) {
			return e.contactId;
		});
		return y && R.push(d), {
			contactIds: R,
			hasVoteFromCurrentUser: y || _.find(function(t) {
				return (e || (e = o("I64"))).equal(t.contactId, d);
			}) != null,
			numVotes: v,
			optionId: a,
			optionText: i,
			progressBarFilledPercentage: Math.floor(v / m * 100),
			sortKeyCreationTimestamp: u,
			sortKeyVotingTimestamp: b
		};
	}
	async function f(t, n, a, i, l) {
		var s = {
			authorityLevel: (u || (u = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").AUTHORITATIVE),
			lastUpdateMessageEventType: u.ofNumber(r("LSGroupPollEventType").QUESTION_CREATION),
			lastUpdateMessageId: a,
			lastUpdateMessageTimestampMs: (e || (e = o("I64"))).of_float(i),
			pollId: n,
			pollStage: u.ofNumber(r("QuestionPollStage").VOTING),
			pollType: u.ofNumber(r("LSPollQuestionType").CHOOSE_MULTIPLE),
			threadKey: l
		};
		await t.polls.put(s);
	}
	async function g(t, n, a, i, l, d, m, p) {
		var _ = n.pollStanzaId, f = n.title;
		if (d.length === 0) {
			r("FBLogger")("messenger_web").mustfix("Items length for poll XMA should be greater than 0");
			return;
		}
		var g = await o("ReQL").toArrayAsync(o("ReQL").mergeJoin(o("ReQL").fromTableAscending(t.participants, []).getKeyRange(a), o("ReQL").fromTableAscending(t.contacts, [
			"name",
			"id",
			"profilePictureFallbackUrl",
			"profilePictureUrl",
			"profilePictureUrlExpirationTimestampMs"
		])).map(function(e) {
			var t = e[0], n = e[1];
			return n;
		}).filter(Boolean)), h = new Map(g.map(function(t) {
			return [(e || (e = o("I64"))).to_string(t.id), t];
		})), y = d.map(function(t) {
			var n = t.contactIds, r = t.optionId, a = t.optionText, i = t.progressBarFilledPercentage, l = n.reduce(function(t, n) {
				var r, a, i = h.get((e || (e = o("I64"))).to_string(n));
				return t.contactUrlExpirations.push((i == null ? void 0 : i.profilePictureUrlExpirationTimestampMs) != null ? (e || (e = o("I64"))).to_string(i.profilePictureUrlExpirationTimestampMs) : ""), t.contactUrlFallbacks.push((r = i == null ? void 0 : i.profilePictureFallbackUrl) != null ? r : ""), t.contactUrls.push((a = i == null ? void 0 : i.profilePictureUrl) != null ? a : ""), (i == null ? void 0 : i.name) != null && t.contactNames.push(i.name), t;
			}, {
				contactNames: [],
				contactUrlExpirations: [],
				contactUrlFallbacks: [],
				contactUrls: []
			}), s = l.contactNames, u = l.contactUrlExpirations, c = l.contactUrlFallbacks, d = l.contactUrls;
			return {
				listItemAccessibilityText: o("MAWBridgePollUtils").getListItemAccessibilityText(s, a).toString(),
				listItemContactUrlExpirationTimestampList: u.length > 0 ? u.join(", ") : void 0,
				listItemContactUrlFallbackList: c.length > 0 ? c.join(", ") : void 0,
				listItemContactUrlList: d.length > 0 ? d.join(", ") : void 0,
				listItemId: r,
				listItemProgressBarFilledPercentage: (e || (e = o("I64"))).of_int32(i),
				listItemTitleText: a,
				listItemTotalCount: e.of_int32(n.length)
			};
		}), C = (e || (e = o("I64"))).of_string(_), b = m ? s._(
			/*BTDS*/
			""
		).toString() : s._(
			/*BTDS*/
			""
		).toString(), v = {
			actionContentBlob: f,
			attachmentFbid: _,
			attachmentIndex: e.zero,
			ctaId: C,
			messageId: i,
			targetId: e.of_string(_),
			threadKey: a,
			title: b,
			type_: "xma_poll_details_card"
		}, S = {
			attachmentCta1Id: C,
			attachmentFbid: _,
			attachmentIndex: e.zero,
			cta1Title: b,
			cta1Type: "xma_poll_details_card",
			defaultActionEnableExtensions: !1,
			defaultCtaId: C,
			defaultCtaTitle: b,
			defaultCtaType: "xma_poll_details_card",
			faviconUrlExpirationTimestampMs: e.zero,
			messageId: i,
			threadKey: a
		}, R = {
			attachmentCta1Id: C,
			attachmentFbid: _,
			attachmentIndex: e.zero,
			attachmentType: (u || (u = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").XMA),
			authorityLevel: u.ofNumber(r("LSAuthorityLevel").AUTHORITATIVE),
			collapsibleId: e.of_string(_),
			cta1Title: b,
			cta1Type: "xma_poll_details_card",
			defaultCtaId: C,
			defaultCtaTitle: b,
			defaultCtaType: "xma_poll_details_card",
			hasMedia: !1,
			hasXma: !0,
			isSharable: !1,
			listItemsDescriptionText: f,
			listItemsId: e.of_string(_),
			messageId: i,
			threadKey: a,
			timestampMs: e.of_float(l),
			transportKey: p != null ? p : "WhatsApp",
			xmaLayoutType: u.ofNumber(r("MNLSXMALayoutType").XCENTER),
			xmasTemplateType: u.ofNumber(r("MNLSXMATemplateType").GENERIC_SHARE)
		}, L = n.pollOptions.values().filter(function(e) {
			return e.optionText != null;
		}).toArray().length, E = L > c ? s._(
			/*BTDS*/
			"",
			[s._plural(L - c), s._param("additional_option_count", L - c)]
		).toString() : void 0, k = babelHelpers.extends({}, R, {
			listItemAccessibilityText1: y[0].listItemAccessibilityText,
			listItemAccessibilityText2: y.length > 1 ? y[1].listItemAccessibilityText : void 0,
			listItemAccessibilityText3: y.length > 2 ? y[2].listItemAccessibilityText : void 0,
			listItemContactUrlExpirationTimestampList1: y[0].listItemContactUrlExpirationTimestampList,
			listItemContactUrlExpirationTimestampList2: y.length > 1 ? y[1].listItemContactUrlExpirationTimestampList : void 0,
			listItemContactUrlExpirationTimestampList3: y.length > 2 ? y[2].listItemContactUrlExpirationTimestampList : void 0,
			listItemContactUrlFallbackList1: y[0].listItemContactUrlFallbackList,
			listItemContactUrlFallbackList2: y.length > 1 ? y[1].listItemContactUrlFallbackList : void 0,
			listItemContactUrlFallbackList3: y.length > 2 ? y[2].listItemContactUrlFallbackList : void 0,
			listItemContactUrlList1: y[0].listItemContactUrlList,
			listItemContactUrlList2: y.length > 1 ? y[1].listItemContactUrlList : void 0,
			listItemContactUrlList3: y.length > 2 ? y[2].listItemContactUrlList : void 0,
			listItemId1: y[0].listItemId,
			listItemId2: y.length > 1 ? y[1].listItemId : void 0,
			listItemId3: y.length > 2 ? y[2].listItemId : void 0,
			listItemProgressBarFilledPercentage1: y[0].listItemProgressBarFilledPercentage,
			listItemProgressBarFilledPercentage2: y.length > 1 ? y[1].listItemProgressBarFilledPercentage : void 0,
			listItemProgressBarFilledPercentage3: y.length > 2 ? y[2].listItemProgressBarFilledPercentage : void 0,
			listItemsSecondaryDescriptionText: E,
			listItemTitleText1: d[0].optionText,
			listItemTitleText2: d.length > 1 ? d[1].optionText : void 0,
			listItemTitleText3: d.length > 2 ? d[2].optionText : void 0,
			listItemTotalCount1: y[0].listItemTotalCount,
			listItemTotalCount2: y.length > 1 ? y[1].listItemTotalCount : void 0,
			listItemTotalCount3: y.length > 2 ? y[2].listItemTotalCount : void 0
		});
		await Promise.all([
			t.attachments.upsert([
				a,
				i,
				_
			], k),
			t.attachment_ctas.upsert([C], v),
			t.attachment_items.upsert([_, e.zero], S)
		]);
	}
	l.POLL_OPTIONS_THRESHOLD = c, l.call = m;
}), 226);
