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
	"Promise",
	"QuestionPollStage",
	"ReQL",
	"WAJids",
	"asyncToGeneratorRuntime",
	"nullthrows"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d = 3;
	function m(e, t, n) {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			var r = t.contactIdForCurrentUser, a = t.dbPoll, i = t.latestUpdateMsgId, l = t.latestUpdateTimestampMs, s = t.transportKey, u = a.pollStanzaId, d = yield o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.attachments.index("idx_attachments_collapsible_id")).getKeyRange(n, (c || (c = o("I64"))).of_string(u)));
			d != null && (yield e.attachments.delete(d.threadKey, d.messageId, d.attachmentFbid)), yield f(e, a, n, i, l, r, s);
		}), p.apply(this, arguments);
	}
	function _(e, t) {
		return o("MAWMiActOnMiThreadExistsForJid__DO_NOT_USE").onMiThreadExistsForJidNoThrow__DO_NOT_USE(e, t.dbPoll.chatJid, "BridgeNewPollHandler", function(e, n) {
			return m(e, t, n);
		});
	}
	function f(e, t, n, r, o, a, i) {
		return g.apply(this, arguments);
	}
	function g() {
		return g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i, l, s, u, m) {
			var p = a.latestSenderTimestampsMs, _ = a.pollParticipantCount, f = a.pollStanzaId, g = (c || (c = o("I64"))).of_string(f), y = yield o("ReQL").firstAsync(o("ReQL").fromTableDescending(t.polls).getKeyRange(g));
			y == null && (yield C(t, g, l, s, i));
			var b = yield o("ReQL").toArrayAsync(o("ReQL").fromTableDescending(t.poll_options_v2).getKeyRange(g)), S = new Map(a.pollOptions.entries().map(function(e) {
				var t = e[0], n = e[1];
				return [o("MAWDbPoll").generateStableIdFromOptionHash(t, f).toString(), n];
			})), R = new Map();
			b.forEach(function(e) {
				var t = (c || (c = o("I64"))).to_string(e.optionId);
				R.set(t, babelHelpers.extends({}, R.get(t), { lsOption: e }));
			}), S.entries().forEach(function(e) {
				var t = e[0], n = e[1];
				n.optionText != null && R.set(t, babelHelpers.extends({}, R.get(t), { mawDbOption: n }));
			});
			var L = R.entries().toArray().sort(function(e, t) {
				var n, o, a = e[0], i = e[1], l = i.lsOption, s = i.mawDbOption, u = t[0], c = t[1], d = c.lsOption, m = c.mawDbOption, p = r("nullthrows")((n = l == null ? void 0 : l.optionText) != null ? n : s == null ? void 0 : s.optionText), _ = r("nullthrows")((o = d == null ? void 0 : d.optionText) != null ? o : m == null ? void 0 : m.optionText);
				return p.localeCompare(_);
			}), E = yield (e || (e = n("Promise"))).all(L.map((function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, n) {
					var a = e[0], i = e[1], l = i.lsOption, s = i.mawDbOption, d = (c || (c = o("I64"))).of_int32(n);
					if (l == null && s == null) return null;
					var m = c.of_string(a);
					if (s == null) {
						var f = r("nullthrows")(l), y = f.optionText;
						yield t.poll_options_v2.upsert([g, m], babelHelpers.extends({}, r("nullthrows")(l), { sortKeyCreationTimestamp: d }));
						var C = yield o("ReQL").firstAsync(o("ReQL").fromTableDescending(t.poll_votes_v2).getKeyRange(g, m, u));
						return {
							contactIds: [u],
							hasVoteFromCurrentUser: !0,
							numVotes: 1,
							optionId: m,
							optionText: y,
							progressBarFilledPercentage: Math.floor(1 / _ * 100),
							sortKeyCreationTimestamp: d,
							sortKeyVotingTimestamp: C != null ? C.timestampMs : (c || (c = o("I64"))).zero
						};
					}
					return h(t, g, m, r("nullthrows")(s.optionText), l, s, d, p, u, _);
				});
				return function(t, n) {
					return e.apply(this, arguments);
				};
			})())).then(function(e) {
				return e.filter(Boolean);
			}), k = E.some(function(e) {
				return e.hasVoteFromCurrentUser;
			}), I = o("MAWBridgePollUtils").sortPollXMAOptions(E).slice(0, d);
			yield v(t, a, i, l, s, I, k, m);
		}), g.apply(this, arguments);
	}
	function h(e, t, n, r, o, a, i, l, s, u) {
		return y.apply(this, arguments);
	}
	function y() {
		return y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i, l, s, u, d, m, p, _) {
			var f = u.voteAuthors, g = Array.from(f).map(function(e) {
				var t = m.get(e);
				if (t == null) throw r("FBLogger")("messenger_web").mustfixThrow("Missing latest sender timestamp for poll voter from dbPoll");
				return {
					contactId: o("MAWBridgePollUtils").getContactIdForAuthor(e),
					latestSenderTimestampMs: t
				};
			}), h = s != null ? yield o("ReQL").toArrayAsync(o("ReQL").fromTableDescending(t.poll_votes_v2).getKeyRange(a, i)) : [], y = h.find(function(e) {
				return (c || (c = o("I64"))).equal(e.contactId, p);
			}), C = m.get(o("WAJids").AUTHOR_ME), b = y != null && (C == null || C < (c || (c = o("I64"))).to_float(y.timestampMs));
			yield (e || (e = n("Promise"))).all(h.map((function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					(c || (c = o("I64"))).equal(e.contactId, p) && b || (yield t.poll_votes_v2.delete(a, i, e.contactId));
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})())), yield e.all(g.map((function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					var n = e.contactId, r = e.latestSenderTimestampMs;
					yield t.poll_votes_v2.put({
						contactId: n,
						optionId: i,
						pollId: a,
						timestampMs: (c || (c = o("I64"))).of_float(r)
					});
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})()));
			var v = (c || (c = o("I64"))).of_float(Math.max.apply(Math, g.map(function(e) {
				return e.latestSenderTimestampMs;
			}).concat([0]))), S = b ? (c || (c = o("I64"))).max(r("nullthrows")(y == null ? void 0 : y.timestampMs), v) : v, R = g.length + (b ? 1 : 0), L = {
				optionId: i,
				optionText: l,
				pollId: a,
				sortKeyCreationTimestamp: d,
				sortKeyVotingTimestamp: S,
				voteCount: c.of_int32(R)
			};
			s != null ? yield t.poll_options_v2.upsert([a, i], L) : yield t.poll_options_v2.add(L);
			var E = g.map(function(e) {
				return e.contactId;
			});
			return b && E.push(p), {
				contactIds: E,
				hasVoteFromCurrentUser: b || g.find(function(e) {
					return (c || (c = o("I64"))).equal(e.contactId, p);
				}) != null,
				numVotes: R,
				optionId: i,
				optionText: l,
				progressBarFilledPercentage: Math.floor(R / _ * 100),
				sortKeyCreationTimestamp: d,
				sortKeyVotingTimestamp: S
			};
		}), y.apply(this, arguments);
	}
	function C(e, t, n, r, o) {
		return b.apply(this, arguments);
	}
	function b() {
		return b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, a, i) {
			var l = {
				authorityLevel: (u || (u = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").AUTHORITATIVE),
				lastUpdateMessageEventType: u.ofNumber(r("LSGroupPollEventType").QUESTION_CREATION),
				lastUpdateMessageId: n,
				lastUpdateMessageTimestampMs: (c || (c = o("I64"))).of_float(a),
				pollId: t,
				pollStage: u.ofNumber(r("QuestionPollStage").VOTING),
				pollType: u.ofNumber(r("LSPollQuestionType").CHOOSE_MULTIPLE),
				threadKey: i
			};
			yield e.polls.put(l);
		}), b.apply(this, arguments);
	}
	function v(e, t, n, r, o, a, i, l) {
		return S.apply(this, arguments);
	}
	function S() {
		return S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i, l, m, p, _, f) {
			var g = a.pollStanzaId, h = a.title;
			if (p.length === 0) {
				r("FBLogger")("messenger_web").mustfix("Items length for poll XMA should be greater than 0");
				return;
			}
			var y = yield o("ReQL").toArrayAsync(o("ReQL").mergeJoin(o("ReQL").fromTableAscending(t.participants, []).getKeyRange(i), o("ReQL").fromTableAscending(t.contacts, [
				"name",
				"id",
				"profilePictureFallbackUrl",
				"profilePictureUrl",
				"profilePictureUrlExpirationTimestampMs"
			])).map(function(e) {
				var t = e[0], n = e[1];
				return n;
			}).filter(Boolean)), C = new Map(y.map(function(e) {
				return [(c || (c = o("I64"))).to_string(e.id), e];
			})), b = p.map(function(e) {
				var t = e.contactIds, n = e.optionId, r = e.optionText, a = e.progressBarFilledPercentage, i = t.reduce(function(e, t) {
					var n, r, a = C.get((c || (c = o("I64"))).to_string(t));
					return e.contactUrlExpirations.push((a == null ? void 0 : a.profilePictureUrlExpirationTimestampMs) != null ? (c || (c = o("I64"))).to_string(a.profilePictureUrlExpirationTimestampMs) : ""), e.contactUrlFallbacks.push((n = a == null ? void 0 : a.profilePictureFallbackUrl) != null ? n : ""), e.contactUrls.push((r = a == null ? void 0 : a.profilePictureUrl) != null ? r : ""), (a == null ? void 0 : a.name) != null && e.contactNames.push(a.name), e;
				}, {
					contactNames: [],
					contactUrlExpirations: [],
					contactUrlFallbacks: [],
					contactUrls: []
				}), l = i.contactNames, s = i.contactUrlExpirations, u = i.contactUrlFallbacks, d = i.contactUrls;
				return {
					listItemAccessibilityText: o("MAWBridgePollUtils").getListItemAccessibilityText(l, r).toString(),
					listItemContactUrlExpirationTimestampList: s.length > 0 ? s.join(", ") : void 0,
					listItemContactUrlFallbackList: u.length > 0 ? u.join(", ") : void 0,
					listItemContactUrlList: d.length > 0 ? d.join(", ") : void 0,
					listItemId: n,
					listItemProgressBarFilledPercentage: (c || (c = o("I64"))).of_int32(a),
					listItemTitleText: r,
					listItemTotalCount: c.of_int32(t.length)
				};
			}), v = (c || (c = o("I64"))).of_string(g), S = _ ? s._(
				/*BTDS*/
				""
			).toString() : s._(
				/*BTDS*/
				""
			).toString(), R = {
				actionContentBlob: h,
				attachmentFbid: g,
				attachmentIndex: c.zero,
				ctaId: v,
				messageId: l,
				targetId: c.of_string(g),
				threadKey: i,
				title: S,
				type_: "xma_poll_details_card"
			}, L = {
				attachmentCta1Id: v,
				attachmentFbid: g,
				attachmentIndex: c.zero,
				cta1Title: S,
				cta1Type: "xma_poll_details_card",
				defaultActionEnableExtensions: !1,
				defaultCtaId: v,
				defaultCtaTitle: S,
				defaultCtaType: "xma_poll_details_card",
				faviconUrlExpirationTimestampMs: c.zero,
				messageId: l,
				threadKey: i
			}, E = {
				attachmentCta1Id: v,
				attachmentFbid: g,
				attachmentIndex: c.zero,
				attachmentType: (u || (u = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").XMA),
				authorityLevel: u.ofNumber(r("LSAuthorityLevel").AUTHORITATIVE),
				collapsibleId: c.of_string(g),
				cta1Title: S,
				cta1Type: "xma_poll_details_card",
				defaultCtaId: v,
				defaultCtaTitle: S,
				defaultCtaType: "xma_poll_details_card",
				hasMedia: !1,
				hasXma: !0,
				isSharable: !1,
				listItemsDescriptionText: h,
				listItemsId: c.of_string(g),
				messageId: l,
				threadKey: i,
				timestampMs: c.of_float(m),
				transportKey: f != null ? f : "WhatsApp",
				xmaLayoutType: u.ofNumber(r("MNLSXMALayoutType").XCENTER),
				xmasTemplateType: u.ofNumber(r("MNLSXMATemplateType").GENERIC_SHARE)
			}, k = a.pollOptions.values().filter(function(e) {
				return e.optionText != null;
			}).toArray().length, I = k > d ? s._(
				/*BTDS*/
				"",
				[s._plural(k - d), s._param("additional_option_count", k - d)]
			).toString() : void 0, T = babelHelpers.extends({}, E, {
				listItemAccessibilityText1: b[0].listItemAccessibilityText,
				listItemAccessibilityText2: b.length > 1 ? b[1].listItemAccessibilityText : void 0,
				listItemAccessibilityText3: b.length > 2 ? b[2].listItemAccessibilityText : void 0,
				listItemContactUrlExpirationTimestampList1: b[0].listItemContactUrlExpirationTimestampList,
				listItemContactUrlExpirationTimestampList2: b.length > 1 ? b[1].listItemContactUrlExpirationTimestampList : void 0,
				listItemContactUrlExpirationTimestampList3: b.length > 2 ? b[2].listItemContactUrlExpirationTimestampList : void 0,
				listItemContactUrlFallbackList1: b[0].listItemContactUrlFallbackList,
				listItemContactUrlFallbackList2: b.length > 1 ? b[1].listItemContactUrlFallbackList : void 0,
				listItemContactUrlFallbackList3: b.length > 2 ? b[2].listItemContactUrlFallbackList : void 0,
				listItemContactUrlList1: b[0].listItemContactUrlList,
				listItemContactUrlList2: b.length > 1 ? b[1].listItemContactUrlList : void 0,
				listItemContactUrlList3: b.length > 2 ? b[2].listItemContactUrlList : void 0,
				listItemId1: b[0].listItemId,
				listItemId2: b.length > 1 ? b[1].listItemId : void 0,
				listItemId3: b.length > 2 ? b[2].listItemId : void 0,
				listItemProgressBarFilledPercentage1: b[0].listItemProgressBarFilledPercentage,
				listItemProgressBarFilledPercentage2: b.length > 1 ? b[1].listItemProgressBarFilledPercentage : void 0,
				listItemProgressBarFilledPercentage3: b.length > 2 ? b[2].listItemProgressBarFilledPercentage : void 0,
				listItemsSecondaryDescriptionText: I,
				listItemTitleText1: p[0].optionText,
				listItemTitleText2: p.length > 1 ? p[1].optionText : void 0,
				listItemTitleText3: p.length > 2 ? p[2].optionText : void 0,
				listItemTotalCount1: b[0].listItemTotalCount,
				listItemTotalCount2: b.length > 1 ? b[1].listItemTotalCount : void 0,
				listItemTotalCount3: b.length > 2 ? b[2].listItemTotalCount : void 0
			});
			yield (e || (e = n("Promise"))).all([
				t.attachments.upsert([
					i,
					l,
					g
				], T),
				t.attachment_ctas.upsert([v], R),
				t.attachment_items.upsert([g, c.zero], L)
			]);
		}), S.apply(this, arguments);
	}
	l.POLL_OPTIONS_THRESHOLD = d, l.call = _;
}), 226);
