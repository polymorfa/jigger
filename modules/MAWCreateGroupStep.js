__d("MAWCreateGroupStep", [
	"E2EEMetadataMailboxCreateGroupThreadMutation",
	"FBLogger",
	"MAWConvertCreateGroupResultApi",
	"MAWCreateGroupInvitesStep",
	"MAWExternalId",
	"MAWODSProxy",
	"QPLFlow",
	"WAAPI",
	"WACreateGroup",
	"WAGlobals",
	"WAJids",
	"WALogger",
	"WAOdsEnums",
	"WAResultOrError",
	"WATimeUtils",
	"asyncToGeneratorRuntime",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = 0, d = 1, m = 2;
	function p(e, t, n, r, o) {
		return _.apply(this, arguments);
	}
	function _() {
		return _ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a, i, l) {
			var u, c = o("QPLFlow").startQPLFlow(r("qpl")._(25307987, "970"), { annotations: { int: { users: a.length } } }), d = a.map(function(e) {
				return o("WAJids").toMsgrUserJid(e);
			}), m = Array.from(new Set(d));
			d.length !== m.length && (o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["createGroup was called with duplicate participants"]))), c.addAnnotations({ bool: { containsDuplicateParticipants: !0 } }));
			var p = yield f(a, m, n, c, i == null ? void 0 : i.deduplicationKey);
			if (c.addPoint("finish_send_create_group_stanza"), !p.success) return o("MAWODSProxy").odsBumpEntityKey({
				entity: o("WAOdsEnums").Entity.GROUP_CREATE,
				key: "fail"
			}), p;
			var _ = p.value.group;
			c.addPoint("start_create_group"), yield o("WACreateGroup").createGroups([{
				extras: i,
				folder: null,
				groupStatus: "added",
				groupToCreate: _,
				key: t,
				serverTs: o("WATimeUtils").unixTime()
			}]), c.addPoint("finish_create_group");
			var g = _.participants.map(function(e) {
				return e.success ? e.value.user : void 0;
			}).filter(Boolean);
			r("WAAPI").getDevices({
				ignoreDhash: !1,
				reason: "create-group",
				users: new Set(g)
			}).catch(function(e) {
				o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Failed to get devices for group creation: ", ""])), e);
			}), c.addPoint("persist_get_devices_create_group"), yield o("MAWCreateGroupInvitesStep").createGroupInvitesStep(_.jid, (u = _.creator) != null ? u : o("WAGlobals").getMyUserJid(), _.participants.map(function(e) {
				return !e.success && e.error.errorCode === 403 ? {
					expiration: e.error.expiration,
					inviteCode: e.error.code,
					user: e.error.user
				} : void 0;
			}).filter(Boolean), !0, l), c.addPoint("finish_create_group_invites_step"), o("MAWODSProxy").odsBumpEntityKey({
				entity: o("WAOdsEnums").Entity.GROUP_CREATE,
				key: "success"
			});
			var h = yield o("MAWConvertCreateGroupResultApi").convertCreateGroupResult(_);
			return c.endSuccess(), o("WAResultOrError").makeResult(h);
		}), _.apply(this, arguments);
	}
	function f(e, t, n, r, o) {
		return g.apply(this, arguments);
	}
	function g() {
		return g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, a, i) {
			var l;
			a.addPoint("graphql_request_start");
			var s = o("WAGlobals").getMyUserJid(), p = Array.from(new Set([].concat(t, [s]))), _ = i != null ? i : o("MAWExternalId").generateExternalId(), f = Array.from(new Set(e)), g = yield o("E2EEMetadataMailboxCreateGroupThreadMutation").createMISOTGroupThreadOverGraphQL({
				mailbox_type: "MESSENGER",
				nullstate_description_text: void 0,
				optimistic_thread_fbid: _,
				participant_add_mode: "OPEN",
				participants: f,
				rtc_dedup_token: i,
				thread_ephemerality_data: void 0,
				thread_name: n != null ? n : void 0
			});
			a.addPoint("graphql_request_end");
			var h = g == null ? void 0 : g.xfb_create_group_thread_through_mi;
			if ((h == null ? void 0 : h.success) === !0 && h.gid != null) {
				var y = h.gid, C = o("WAJids").validateGroupJid(y + "@g.us");
				if (C == null) return r("FBLogger")("wmi").mustfix("[Group] Invalid group JID from GraphQL response"), a.endFail("invalid_group_jid", { string: { reason: "Invalid group JID" } }), o("WAResultOrError").makeError("CreateResponseServerError");
				var b = [];
				if (h.participants != null) {
					var v = function* () {
						if (S.contact_id != null) {
							var e = String(S.contact_id), t = p.find(function(t) {
								return t.includes(e);
							});
							if (t != null) {
								var n, r = S.type === m ? "superadmin" : S.type === d ? "admin" : (S.type === c, "participant");
								b.push(o("WAResultOrError").makeResult({
									addressable: (n = S.is_addressable) != null ? n : !0,
									type: r,
									user: t
								}));
							}
						}
					};
					for (var S of h.participants) yield* v();
				}
				return o("WAResultOrError").makeResult({
					group: {
						creationTs: o("WATimeUtils").unixTime(),
						creator: s,
						jid: C,
						memberAddMode: "all_member_add",
						participants: b,
						subject: {
							content: n,
							ts: o("WATimeUtils").unixTime(),
							user: s
						}
					},
					type: "default"
				});
			}
			return o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[Group] GraphQL mutation failed"]))), a.endFail("graphql_mutation_failed", { string: { reason: (l = h == null ? void 0 : h.exception_error_code) != null ? l : "Unknown error" } }), o("WAResultOrError").makeError("CreateResponseServerError");
		}), g.apply(this, arguments);
	}
	l.createGroupStep = p;
}), 98);
