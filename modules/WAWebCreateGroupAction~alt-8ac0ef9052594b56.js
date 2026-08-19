__d("WAWebCreateGroupAction", [
	"fbt",
	"WAFilteredCatch",
	"WALogger",
	"WAWebABProps",
	"WAWebActionToast.react",
	"WAWebBackendErrors",
	"WAWebChatEntryPoint",
	"WAWebCmd",
	"WAWebComposeBoxActions",
	"WAWebCoreActionsODS",
	"WAWebFindChatAction",
	"WAWebGroupCreateJob",
	"WAWebGroupCreateWamEvent",
	"WAWebGroupGatingUtils",
	"WAWebGroupMutationParticipantUtils",
	"WAWebGroupQueryBridge",
	"WAWebJidToWid",
	"WAWebModalManager",
	"WAWebModifyParticipantsRateLimitText",
	"WAWebNoop",
	"WAWebOutContactInviteAction",
	"WAWebOutContactInviteUtils",
	"WAWebOutContactSmsInviteConfirmModal.react",
	"WAWebProfilePicThumbAction",
	"WAWebProfilePicThumbCollection",
	"WAWebSendForNeededAddRequest",
	"WAWebSetUsernameJob",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUsernameGatingUtils",
	"WAWebUsernameTypes",
	"WAWebWamEnumCompanionInviteOriginType",
	"WAWebWidFactory",
	"WAWebWidToJid",
	"countWhere",
	"fbs",
	"gkx",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react"));
	function d(e, t, n, r) {
		return n === void 0 && (n = []), m({
			createGroupArgs: e,
			groupCreateEntryPoint: r,
			outContacts: n,
			participants: t
		});
	}
	function m(t) {
		var n = t.createGroupArgs, a = t.groupCreateEntryPoint, i = t.outContacts, l = i === void 0 ? [] : i, u = t.participants, d = t.toastId, _ = d === void 0 ? o("WAWebActionToast.react").genId() : d, f = n.full, g = n.parentGroupId, h = n.thumb, y = n.title, C;
		try {
			C = u.map(function(e) {
				return o("WAWebGroupMutationParticipantUtils").getGroupMutationParticipant(e, !0, "createGroup");
			});
		} catch (e) {
			return o("WAWebCoreActionsODS").logGroupCreateError(), Promise.resolve(void 0);
		}
		var b = l.map(function(e) {
			return o("WAWebJidToWid").userJidToUserWid(e.id);
		}), v = o("WAWebGroupCreateJob").createGroup(n, C, b).then(function(e) {
			var t = o("WAWebWidFactory").asGroupWidOrThrow(e.wid);
			o("WAWebCoreActionsODS").logGroupCreate(), a != null && new (o("WAWebGroupCreateWamEvent")).GroupCreateWamEvent({
				ephemeralityDuration: n.ephemeralDuration,
				groupCreateEntryPoint: a,
				hasGroupName: y.trim().length > 0
			}).commit();
			var r = e.participants.map(function(e) {
				return {
					userWid: e.wid,
					username: e.username,
					code: e.error != null ? e.error.toString() : "200",
					invite_code: e.invite_code,
					invite_code_exp: e.invite_code_exp
				};
			});
			return {
				gid: t,
				participants: r,
				invitedOutContacts: e.invitedOutContacts
			};
		}), S = new (o("WAWebActionToast.react")).ActionType(s._(
			/*BTDS*/
			""
		)), R = v.then(function(e) {
			return new (o("WAWebActionToast.react")).ActionType(s._(
				/*BTDS*/
				""
			));
		}).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(e) {
			return o("WAWebCoreActionsODS").logGroupCreateError(), !r("gkx")("26258") && e.status === 400 ? new (o("WAWebActionToast.react")).ActionType(s._(
				/*BTDS*/
				""
			)) : e.status === 406 ? new (o("WAWebActionToast.react")).ActionType(r("fbs")._(
				/*BTDS*/
				""
			).toString() + " " + r("fbs")._(
				/*BTDS*/
				""
			).toString()) : e.status === 412 ? new (o("WAWebActionToast.react")).ActionType(s._(
				/*BTDS*/
				""
			)) : e.status === 429 ? new (o("WAWebActionToast.react")).ActionType(r("fbs")._(
				/*BTDS*/
				""
			).toString() + " " + r("fbs")._(
				/*BTDS*/
				""
			).toString()) : new (o("WAWebActionToast.react")).ActionType(s._(
				/*BTDS*/
				""
			));
		})).catch(function(t) {
			if (o("WAWebCoreActionsODS").logGroupCreateError(), o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["models:chatCollection:createGroup dropped"]))), t.status === 429 && o("WAWebABProps").getABPropConfigValue("enable_group_create_or_add_rate_limiting_error_ux")) switch (t.name) {
				case "GroupAddParticipantTimeRateLimitServerError": return new (o("WAWebActionToast.react")).ActionType(o("WAWebModifyParticipantsRateLimitText").WAWebModifyParticipantsTimeRateLimitText(t));
				case "GroupAddParticipantCountRateLimitServerError": return new (o("WAWebActionToast.react")).ActionType(o("WAWebModifyParticipantsRateLimitText").WAWebModifyParticipantsCountRateLimitText(t));
			}
			return new (o("WAWebActionToast.react")).ActionType(s._(
				/*BTDS*/
				""
			), {
				actionText: s._(
					/*BTDS*/
					""
				),
				actionHandler: function() {
					return m({
						createGroupArgs: n,
						groupCreateEntryPoint: a,
						outContacts: l,
						participants: u,
						toastId: _
					});
				}
			});
		});
		return o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebActionToast.react").ActionToast, {
			id: _,
			initialAction: S,
			pendingAction: R
		})), v.then(async function(e) {
			var t, n = (t = e.invitedOutContacts) != null ? t : [], a = e.participants.some(function(e) {
				return e.code === "403";
			}), i = new Set(n.filter(function(e) {
				return e.code !== "200";
			}).map(function(e) {
				return e.phoneNumberWid.toString();
			})), s = l.filter(function(e) {
				return i.has(o("WAWebJidToWid").userJidToUserWid(e.id).toString());
			}), u = r("countWhere")(n, function(e) {
				return e.code !== "200";
			}), d = function() {
				if (s.length > 0) {
					o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebOutContactSmsInviteConfirmModal.react"), {
						names: s.map(function(e) {
							return e.getName();
						}),
						onConfirm: function() {
							o("WAWebOutContactInviteAction").sendMultiGroupInvite(s.map(function(e) {
								return e.phoneNumber;
							}), o("WAWebWidToJid").widToGroupJid(e.gid), o("WAWebWamEnumCompanionInviteOriginType").COMPANION_INVITE_ORIGIN_TYPE.GROUPS_CREATE_PARTICIPANT_SELECTOR), o("WAWebModalManager").closeModalManager();
						},
						onCancel: o("WAWebModalManager").closeModalManager
					}));
					return;
				}
				p(u);
			};
			if (a ? o("WAWebSendForNeededAddRequest").sendForNeededAddRequest(e, y, void 0, d) : d(), g == null && e.gid && o("WAWebFindChatAction").findOrCreateLatestChat(e.gid, "createGroupAction").then(function(t) {
				var n = t.chat;
				o("WAWebCmd").Cmd.openChatBottom({
					chat: n,
					chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.NewGroupCreation
				}).then(function(e) {
					e && o("WAWebComposeBoxActions").ComposeBoxActions.focus(n);
				}), (y === "" || o("WAWebGroupGatingUtils").isAnyoneCanLinkToGroupsM2Enabled()) && o("WAWebGroupQueryBridge").sendQueryGroup(e.gid).finally(r("WAWebNoop"));
			}), h != null && f != null) {
				var m = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(e.gid);
				await o("WAWebProfilePicThumbAction").setProfilePic(m, h, f).then(function() {
					return e.gid;
				});
			}
			if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
				var _ = e.participants.reduce(function(e, t) {
					return t.username != null && e.push({
						username: o("WAWebUsernameTypes").asUsername(t.username),
						userId: o("WAWebWidFactory").asUserWidOrThrow(t.userWid)
					}), e;
				}, []);
				_.length > 0 && await o("WAWebSetUsernameJob").setUsernamesJob(_);
			}
			return e.gid;
		}).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, r("WAWebNoop"))).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").GroupAddParticipantCountRateLimitServerError, r("WAWebNoop"))).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").GroupAddParticipantTimeRateLimitServerError, r("WAWebNoop")));
	}
	function p(e) {
		e !== 0 && o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: o("WAWebOutContactInviteUtils").getGroupInviteAddFailedToastText(e) }));
	}
	l.createGroup = d;
}), 226);
