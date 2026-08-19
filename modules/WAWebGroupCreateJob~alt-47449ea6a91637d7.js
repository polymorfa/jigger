__d("WAWebGroupCreateJob", [
	"WACustomError",
	"WALogger",
	"WASmaxGroupsCreateRPC",
	"WATimeUtils",
	"WAWebApiContact",
	"WAWebBackendErrors",
	"WAWebEphemeralityResolver",
	"WAWebEphemeralityUtils",
	"WAWebGroupApiConst",
	"WAWebGroupCreateCWamEvent",
	"WAWebGroupsPrivacyTokenUtils",
	"WAWebJidToWid",
	"WAWebSchemaChat",
	"WAWebUserPrefsMeUser",
	"WAWebWidFactory",
	"WAWebWidToJid",
	"compactMap"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d = (function(e) {
		function t() {
			var t;
			return t = e.call(this, "CreateResponseGroupAlreadyExists") || this, t.name = "GroupAlreadyExistsError", t;
		}
		return babelHelpers.inheritsLoose(t, e), t;
	})(o("WACustomError").CustomError);
	async function m(t, n, a) {
		a === void 0 && (a = []), o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["createGroup"])));
		var i = n.map(function(e) {
			return e.lid ? e.lid : e.phoneNumber;
		}), l = await o("WAWebSchemaChat").getChatTable().bulkGet(i.map(function(e) {
			return e.toString();
		})), m;
		l.length > 0 && (m = o("WAWebGroupsPrivacyTokenUtils").getPermissionTokenMap(l, i));
		var p = t.announce, _ = t.ephemeralDuration, f = _ === void 0 ? 0 : _, g = t.memberAddMode, h = t.memberLinkMode, y = t.memberShareGroupHistoryMode, C = t.membershipApprovalMode, b = t.parentGroupId, v = t.restrict, S = t.title, R = babelHelpers.extends({
			participantArgs: [].concat(i.map(function(e, t) {
				var r, a = n[t];
				return {
					participantJid: o("WAWebWidToJid").widToUserJid(e),
					participantPhoneNumber: e.isLid() && a.phoneNumber ? o("WAWebWidToJid").widToUserJid(a.phoneNumber) : void 0,
					participantUsername: e.isLid() ? a.username : void 0,
					permissionTokenMixinArgs: (r = m) == null ? void 0 : r.get(e)
				};
			}), a.map(function(e) {
				var t;
				return {
					participantJid: o("WAWebWidToJid").widToUserJid(e),
					permissionTokenMixinArgs: (t = m) == null ? void 0 : t.get(e)
				};
			})),
			namedSubjectOrUnnamedSubjectFallbackMixinGroupArgs: S === "" ? { unnamedSubjectFallback: {} } : { namedSubject: { anySubject: S } },
			hasAnnouncement: !p,
			hasCapi: !1,
			hasNoFrequentlyForwarded: !1,
			hasHiddenGroup: !1,
			hasLocked: !v,
			hasBreakout: !1,
			hasAllowNonAdminSubGroupCreation: !1,
			hasCreateGeneralChat: !1,
			hasCreatedAsLid: !1,
			membershipApprovalModeArgs: { membershipApprovalModesArgs: C === !1 ? { isGroupJoinMembershipApprovalModeDisabled: !0 } : { isGroupJoinMembershipApprovalModeEnabled: !0 } },
			groupMemberAddModeMixinArgs: { memberAddModesArgs: g === !1 ? { isAdminAddMode: !0 } : { isAllMembersAddMode: !0 } }
		}, h != null ? { groupMemberLinkModeMixinArgs: { memberLinkModesArgs: h === !0 ? { isAllMembersLinkMode: !0 } : { isAdminLinkMode: !0 } } } : void 0, { groupMemberShareGroupHistoryModeMixinArgs: { memberShareGroupHistoryModesArgs: y === !0 ? { isAllMembersShareMode: !0 } : { isAdminShareMode: !0 } } });
		if (f !== 0) {
			var L = await o("WAWebApiContact").getContactRecord(o("WAWebUserPrefsMeUser").getMeUserOrThrow()), E = o("WAWebEphemeralityResolver").getEphemeralDurationForUser(L), k = o("WAWebEphemeralityUtils").getEphemeralTriggerForGroupCreation(f, E);
			k != null && (R = babelHelpers.extends({}, R, { ephemeralArgs: {
				ephemeralExpiration: f,
				ephemeralTrigger: k
			} }));
		} else R = babelHelpers.extends({}, R, { ephemeralArgs: { ephemeralExpiration: f } });
		b != null && (R = babelHelpers.extends({}, R, { linkedParentArgs: { linkedParentJid: o("WAWebWidToJid").widToGroupJid(b) } }));
		var I = await o("WASmaxGroupsCreateRPC").sendCreateRPC(R, { timeoutSeconds: 10 });
		switch (I.name) {
			case "CreateResponseSuccess": {
				var T = I.value, D = T.groupCreation, x = T.groupCreator, $ = T.groupId, P = T.groupNamedSubjectOrUnnamedSubjectFallbackMixinGroup.value.subject, N = T.groupParticipant, M = o("WAWebWidFactory").createWid($ + "@g.us");
				return new (o("WAWebGroupCreateCWamEvent")).GroupCreateCWamEvent().commit(), {
					wid: M,
					subject: P != null ? P : "",
					creator: o("WAWebJidToWid").userJidToUserWid(x),
					ts: o("WATimeUtils").castToUnixTime(D),
					participants: r("compactMap")(N, function(e) {
						var t, n, r = e.createParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup;
						if (r.name === "CreateParticipantAddedResponse") {
							var a = r.value.jid, i = r.value.createParticipantMixins, l = (t = r.value.usernameAttMixin) == null ? void 0 : t.username;
							if (!(a == null || i == null || i.name === "ParticipantRequestCodeCanBeSent" && i.value.participantNotAddressableMixin != null)) {
								var s = i.value, u = s.addRequestCode, c = s.addRequestExpiration, d = s.error, m = s.type, p = i.name === "CreateParticipantAdded" && (n = i.value.joinTime) != null ? n : null;
								return {
									wid: o("WAWebJidToWid").userJidToUserWid(a),
									username: l,
									error: d != null ? Number(d) : null,
									type: o("WAWebGroupApiConst").GROUP_PARTICIPANT_TYPES[m != null ? m : "participant"],
									invite_code: u,
									invite_code_exp: c != null ? String(c) : void 0,
									joinTime: p
								};
							}
						}
					}),
					invitedOutContacts: r("compactMap")(N, function(e) {
						var t, n = e.createParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup;
						if (n.name === "NonRegisteredWaUserParticipantErrorLidResponse") {
							var r, a = n.value.phoneNumber, i = n.value.participantRequestCodeCanBeSentOrRequestCodeCannotBeCreatedForLegalConcernsOrHasInvalidPNMixinGroup;
							return a == null || i == null ? void 0 : {
								phoneNumberWid: o("WAWebJidToWid").userJidToUserWid(a),
								code: String((r = i.value.error) != null ? r : "200")
							};
						}
						if (n.name === "CreateParticipantAddedResponse") {
							var l = n.value.jid, s = n.value.createParticipantMixins;
							if (!(l == null || s == null || s.name !== "ParticipantRequestCodeCanBeSent" || s.value.participantNotAddressableMixin == null)) return {
								phoneNumberWid: o("WAWebJidToWid").userJidToUserWid(l),
								code: String((t = s.value.error) != null ? t : "200")
							};
						}
					})
				};
			}
			case "CreateResponseClientError": {
				o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["createGroup failed: ", ""])), I.name);
				var w = I.value.errorCreateClientErrors.value, A = w.code, F = w.text, O = I.value.errorCreateClientErrors.value.rateLimitAddParticipantTimeOrCountRateLimitMixinGroup;
				if (O != null) e: {
					var B = O;
					if ((typeof B == "object" && B !== null || typeof B == "function") && B.name === "AddParticipantTimeRateLimit" && (typeof B.value == "object" && B.value !== null || typeof B.value == "function") && "backoff" in B.value && "type" in B.value) {
						var W = B.value.backoff, q = B.value.type;
						return Promise.reject(new (o("WAWebBackendErrors")).GroupAddParticipantTimeRateLimitServerError(Number(A), W, q));
					}
					if ((typeof B == "object" && B !== null || typeof B == "function") && B.name === "AddParticipantCountRateLimit" && (typeof B.value == "object" && B.value !== null || typeof B.value == "function") && "participantLimit" in B.value) {
						var U = B.value.participantLimit;
						return Promise.reject(new (o("WAWebBackendErrors")).GroupAddParticipantCountRateLimitServerError(Number(A), U));
					}
					throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + B);
				}
				return Promise.reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(A), F));
			}
			case "CreateResponseServerError": {
				o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["createGroup failed: ", ""])), I.name);
				var V = I.value.errorServerErrors.value, H = V.code, G = V.text;
				return Promise.reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(H), G));
			}
			case "CreateResponseGroupAlreadyExists": return o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["createGroup failed: ", ""])), I.name), Promise.reject(new d());
		}
	}
	l.GroupAlreadyExistsError = d, l.createGroup = m;
}), 98);
