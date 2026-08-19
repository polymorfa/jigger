__d("WAWebModifyParticipantsGroupAction", [
	"fbt",
	"VultureJSDeadComponent.react",
	"WALogger",
	"WAWebABProps",
	"WAWebActionToast.react",
	"WAWebFbtIntlList",
	"WAWebFrontendContactGetters",
	"WAWebGroupModifyParticipantsJob",
	"WAWebGroupMutationParticipantUtils",
	"WAWebGroupStringsAction",
	"WAWebJidToWid",
	"WAWebMiscErrors",
	"WAWebModalManager",
	"WAWebModifyParticipantsRateLimitText",
	"WAWebNetworkStatus",
	"WAWebNoop",
	"WAWebOutContactInviteAction",
	"WAWebOutContactInviteUtils",
	"WAWebOutContactSmsInviteConfirmModal.react",
	"WAWebStateUtils",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUserPrefsMeUser",
	"WAWebWamEnumCompanionInviteOriginType",
	"WAWebWidFactory",
	"WAWebWidToJid",
	"countWhere",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m, p, _, f, g = f || (f = o("react"));
	function h(e, t, n) {
		return n === void 0 && (n = []), L({
			chat: o("WAWebStateUtils").unproxy(e),
			contacts: t,
			outContacts: n
		});
	}
	function y(e, t) {
		return k(o("WAWebStateUtils").unproxy(e), t);
	}
	function C(e, t) {
		return I(o("WAWebStateUtils").unproxy(e), t);
	}
	function b(e, t) {
		return T(o("WAWebStateUtils").unproxy(e), t);
	}
	function v(e, t) {
		return D(o("WAWebStateUtils").unproxy(e), t);
	}
	function S(e, t) {
		return x(o("WAWebStateUtils").unproxy(e), t);
	}
	var R = [];
	async function L(t) {
		var n, a, i = t.chat, l = t.contacts, c = t.outContacts, d = c === void 0 ? R : c, m = t.toastId, p = m === void 0 ? o("WAWebActionToast.react").genId() : m, _ = (n = i.groupMetadata) == null ? void 0 : n.participants;
		if (_ == null) return Promise.reject(new (o("WAWebMiscErrors")).ActionError());
		if (l.some(function(e) {
			return _.get(e.id);
		})) return o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[groupMeta] addParticipants: already member"]))), Promise.reject(new (o("WAWebMiscErrors")).ActionError());
		if (!_.canAdd()) return Promise.reject(new (o("WAWebMiscErrors")).ActionError());
		var f = ((a = i.groupMetadata) == null ? void 0 : a.isLidAddressingMode) === !0, h = d.map(function(e) {
			return o("WAWebJidToWid").userJidToUserWid(e.id);
		}), y = o("WAWebGroupModifyParticipantsJob").addGroupParticipants(i.id, l.map(function(e) {
			return o("WAWebGroupMutationParticipantUtils").getGroupMutationParticipant(e, f, "addParticipants");
		}), h), C = r("WAWebFbtIntlList")(l.map(function(e) {
			return o("WAWebFrontendContactGetters").getFormattedShortName(e);
		}), r("WAWebFbtIntlList").CONJUNCTIONS.NONE, r("WAWebFbtIntlList").DELIMITERS.COMMA).toString(), b = r("WAWebFbtIntlList")(d.map(function(e) {
			return e.getName();
		}), r("WAWebFbtIntlList").CONJUNCTIONS.NONE, r("WAWebFbtIntlList").DELIMITERS.COMMA).toString(), v = l.length === 0 && d.length > 0, S = v ? b : C, k = v ? d.length : l.length, I = new (o("WAWebActionToast.react")).ActionType(o("WAWebGroupStringsAction").addingString(S, k)), T = y.then(function(e) {
			var t, n = (t = e.invitedOutContacts) != null ? t : [], a = e.participants.some(function(e) {
				return e.code === "403";
			}), u = new Set(n.filter(function(e) {
				return e.code !== "200";
			}).map(function(e) {
				return e.phoneNumberWid.toString();
			})), c = d.filter(function(e) {
				return u.has(o("WAWebJidToWid").userJidToUserWid(e.id).toString());
			}), m = r("countWhere")(n, function(e) {
				return e.code !== "200";
			}), p = d.length > 0 ? function() {
				if (c.length > 0) {
					o("WAWebModalManager").ModalManager.open(g.jsx(r("WAWebOutContactSmsInviteConfirmModal.react"), {
						names: c.map(function(e) {
							return e.getName();
						}),
						onConfirm: function() {
							o("WAWebOutContactInviteAction").sendMultiGroupInvite(c.map(function(e) {
								return e.phoneNumber;
							}), o("WAWebWidToJid").widToGroupJid(i.id), o("WAWebWamEnumCompanionInviteOriginType").COMPANION_INVITE_ORIGIN_TYPE.GROUPS_ADD_PARTICIPANT_SELECTOR), o("WAWebModalManager").closeModalManager();
						},
						onCancel: o("WAWebModalManager").closeModalManager
					}));
					return;
				}
				v || E(m), o("WAWebModalManager").closeModalManager();
			} : r("WAWebNoop");
			a ? _.sendForNeededAddRequest(e.participants, p) : p == null || p();
			var f = e.participants.filter(function(e) {
				return e.code === "417";
			});
			if (f.length > 0) {
				var h = s._(
					/*BTDS*/
					"",
					[s._plural(f.length, "participant_count")]
				), y = e.participants.some(function(e) {
					return e.code === "200";
				});
				if (!y) throw new (o("WAWebActionToast.react")).ActionType(h);
				return new (o("WAWebActionToast.react")).ActionType(h);
			}
			if (v) {
				if (c.length > 0) {
					var C = r("WAWebFbtIntlList")(c.map(function(e) {
						return e.getName();
					}), r("WAWebFbtIntlList").CONJUNCTIONS.NONE, r("WAWebFbtIntlList").DELIMITERS.COMMA).toString();
					return new (o("WAWebActionToast.react")).ActionType(o("WAWebGroupStringsAction").addSuccessString(C, c.length));
				}
				throw new (o("WAWebActionToast.react")).ActionType(o("WAWebOutContactInviteUtils").getGroupInviteAddFailedToastText(m));
			}
			var b = o("WAWebGroupStringsAction").formatResult(e, o("WAWebGroupStringsAction").addSuccessString, function(e, t, n) {
				return o("WAWebGroupStringsAction").addFailedString({
					_status: n,
					memberNames: e,
					plural: t
				});
			}, o("WAWebGroupStringsAction").addPartialFailedString, l), S = e.participants.some(function(e) {
				return e.code === "200";
			});
			if (!S) throw new (o("WAWebActionToast.react")).ActionType(b);
			return new (o("WAWebActionToast.react")).ActionType(b);
		}).catch(function(e) {
			if (e instanceof o("WAWebActionToast.react").ActionType) throw e;
			d.length > 0 && o("WAWebModalManager").closeModalManager();
			var t = new (o("WAWebActionToast.react")).ActionType(v ? o("WAWebOutContactInviteUtils").getGroupInviteAddFailedToastText(d.length) : s._(
				/*BTDS*/
				"",
				[s._plural(l.length), s._param("participantNames", C)]
			), {
				actionText: s._(
					/*BTDS*/
					""
				),
				actionHandler: function() {
					return L({
						chat: i,
						contacts: l,
						outContacts: d,
						toastId: p
					});
				}
			});
			switch (e.status) {
				case 416: {
					var n = s._(
						/*BTDS*/
						""
					);
					throw o("WAWebModalManager").ModalManager.open(g.jsx(r("VultureJSDeadComponent.react"), { name: "WAWebCommunityRestrictedGroupActionModal" })), new (o("WAWebActionToast.react")).ActionType(n);
				}
				case 419: throw new (o("WAWebActionToast.react")).ActionType(s._(
					/*BTDS*/
					""
				));
				case 429: {
					if (o("WAWebABProps").getABPropConfigValue("enable_group_create_or_add_rate_limiting_error_ux")) switch (e.name) {
						case "GroupAddParticipantTimeRateLimitServerError": throw new (o("WAWebActionToast.react")).ActionType(o("WAWebModifyParticipantsRateLimitText").WAWebModifyParticipantsTimeRateLimitText(e));
						case "GroupAddParticipantCountRateLimitServerError": throw new (o("WAWebActionToast.react")).ActionType(o("WAWebModifyParticipantsRateLimitText").WAWebModifyParticipantsCountRateLimitText(e));
					}
					throw t;
				}
				default: throw o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[groupMeta] addParticipants dropped"]))), t;
			}
		});
		return o("WAWebToastManager").ToastManager.open(g.jsx(o("WAWebActionToast.react").ActionToast, {
			id: p,
			initialAction: I,
			pendingAction: T
		})), y;
	}
	function E(e) {
		e !== 0 && o("WAWebToastManager").ToastManager.open(g.jsx(o("WAWebToast.react").Toast, { msg: o("WAWebOutContactInviteUtils").getGroupInviteAddFailedToastText(e) }));
	}
	async function k(e, t, n) {
		var a;
		n === void 0 && (n = o("WAWebActionToast.react").genId());
		var i = (a = e.groupMetadata) == null ? void 0 : a.participants;
		if (i == null) return Promise.reject(new (o("WAWebMiscErrors")).ActionError());
		if (t.some(function(e) {
			return !i.canRemove(e);
		})) return Promise.reject(new (o("WAWebMiscErrors")).ActionError());
		var l = o("WAWebGroupModifyParticipantsJob").removeGroupParticipants(e.id, t.map(function(e) {
			return o("WAWebWidFactory").asUserWidOrThrow(e.id);
		})), u = r("WAWebFbtIntlList")(t.map(function(e) {
			return o("WAWebFrontendContactGetters").getFormattedShortName(e.contact);
		}), r("WAWebFbtIntlList").CONJUNCTIONS.NONE, r("WAWebFbtIntlList").DELIMITERS.COMMA).toString(), d = new (o("WAWebActionToast.react")).ActionType(o("WAWebGroupStringsAction").removingString(u, t.length)), m = l.then(function(e) {
			var n = o("WAWebGroupStringsAction").formatRemoveResult(e, t.map(function(e) {
				return e.contact;
			}));
			return new (o("WAWebActionToast.react")).ActionType(n);
		}).catch(function(r) {
			return o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[groupMeta] removeParticipants dropped"]))), new (o("WAWebActionToast.react")).ActionType(s._(
				/*BTDS*/
				"",
				[s._plural(t.length), s._param("participantNames", u)]
			), {
				actionText: s._(
					/*BTDS*/
					""
				),
				actionHandler: function() {
					return k(e, t, n);
				}
			});
		});
		o("WAWebToastManager").ToastManager.open(g.jsx(o("WAWebActionToast.react").ActionToast, {
			id: n,
			initialAction: d,
			pendingAction: m
		})), await l;
	}
	async function I(e, t, n) {
		var a, i;
		n === void 0 && (n = o("WAWebActionToast.react").genId());
		var l = (a = e.groupMetadata) == null ? void 0 : a.participants;
		if (l == null) return Promise.reject(new (o("WAWebMiscErrors")).ActionError());
		if (t.some(function(e) {
			return !l.canPromote(e);
		})) return Promise.reject(new (o("WAWebMiscErrors")).ActionError());
		var u = o("WAWebGroupModifyParticipantsJob").promoteGroupParticipants(e.id, t.map(function(e) {
			return o("WAWebWidFactory").asUserWidOrThrow(e.id);
		}), ((i = e.groupMetadata) == null ? void 0 : i.isLidAddressingMode) === !0), c = r("WAWebFbtIntlList")(t.map(function(e) {
			return o("WAWebFrontendContactGetters").getFormattedShortName(e.contact);
		}), r("WAWebFbtIntlList").CONJUNCTIONS.NONE, r("WAWebFbtIntlList").DELIMITERS.COMMA).toString(), m = new (o("WAWebActionToast.react")).ActionType(s._(
			/*BTDS*/
			"",
			[s._plural(t.length), s._param("participantNames", c)]
		)), p = u.then(function(e) {
			var n, r = (n = o("WAWebGroupStringsAction")).formatResult(e, n.promoteSuccessString, n.promoteFailedString, n.promotePartialFailedString, t.map(function(e) {
				return e.contact;
			}));
			return new (o("WAWebActionToast.react")).ActionType(r);
		}).catch(function(r) {
			return o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[groupMeta] promoteParticipants dropped"]))), new (o("WAWebActionToast.react")).ActionType(s._(
				/*BTDS*/
				"",
				[s._plural(t.length), s._param("participantNames", c)]
			), {
				actionText: s._(
					/*BTDS*/
					""
				),
				actionHandler: function() {
					return I(e, t, n);
				}
			});
		});
		o("WAWebToastManager").ToastManager.open(g.jsx(o("WAWebActionToast.react").ActionToast, {
			id: n,
			initialAction: m,
			pendingAction: p
		})), await u;
	}
	async function T(e, t, n) {
		var a, i;
		n === void 0 && (n = o("WAWebActionToast.react").genId());
		var l = (a = e.groupMetadata) == null ? void 0 : a.participants;
		if (l == null) return Promise.reject(new (o("WAWebMiscErrors")).ActionError());
		if (t.some(function(e) {
			return !l.canDemote(e);
		})) return Promise.reject(new (o("WAWebMiscErrors")).ActionError());
		var u = o("WAWebGroupModifyParticipantsJob").demoteGroupParticipants(e.id, t.map(function(e) {
			return o("WAWebWidFactory").asUserWidOrThrow(e.id);
		}), ((i = e.groupMetadata) == null ? void 0 : i.isLidAddressingMode) === !0), c = r("WAWebFbtIntlList")(t.map(function(e) {
			return o("WAWebFrontendContactGetters").getFormattedShortName(e.contact);
		}), r("WAWebFbtIntlList").CONJUNCTIONS.NONE, r("WAWebFbtIntlList").DELIMITERS.COMMA).toString(), d = new (o("WAWebActionToast.react")).ActionType(s._(
			/*BTDS*/
			"",
			[s._plural(t.length), s._param("participantNames", c)]
		)), p = u.then(function(e) {
			var n, r = (n = o("WAWebGroupStringsAction")).formatResult(e, n.demoteSuccessString, n.demoteFailedString, n.demotePartialFailedString, t.map(function(e) {
				return e.contact;
			}));
			return new (o("WAWebActionToast.react")).ActionType(r);
		}).catch(function(r) {
			return o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[groupMeta] demoteParticipants dropped"]))), new (o("WAWebActionToast.react")).ActionType(s._(
				/*BTDS*/
				"",
				[s._plural(t.length), s._param("participantNames", c)]
			), {
				actionText: s._(
					/*BTDS*/
					""
				),
				actionHandler: function() {
					return T(e, t, n);
				}
			});
		});
		o("WAWebToastManager").ToastManager.open(g.jsx(o("WAWebActionToast.react").ActionToast, {
			id: n,
			initialAction: d,
			pendingAction: p
		})), await u;
	}
	function D(e, t, n) {
		var a, i;
		n === void 0 && (n = o("WAWebActionToast.react").genId());
		var l = (a = e.groupMetadata) == null ? void 0 : a.participants;
		if (l == null) return Promise.reject(new (o("WAWebMiscErrors")).ActionError());
		var u = o("WAWebGroupModifyParticipantsJob").promoteCommunityParticipants(e.id, t.map(function(e) {
			return o("WAWebWidFactory").asUserWidOrThrow(e.id);
		}), ((i = e.groupMetadata) == null ? void 0 : i.isLidAddressingMode) === !0), c = r("WAWebFbtIntlList")(t.map(function(e) {
			return o("WAWebFrontendContactGetters").getFormattedShortName(e.contact);
		}), r("WAWebFbtIntlList").CONJUNCTIONS.NONE, r("WAWebFbtIntlList").DELIMITERS.COMMA).toString(), d = new (o("WAWebActionToast.react")).ActionType(s._(
			/*BTDS*/
			"",
			[s._plural(t.length), s._param("userNames", c)]
		)), m = u.then(function(e) {
			if (e.status === 207) return new (o("WAWebActionToast.react")).ActionType(s._(
				/*BTDS*/
				"",
				[s._plural(t.length), s._param("userNames", c)]
			));
		}).catch(function(e) {
			return o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[groupMeta] promoteCommunityParticipants dropped"]))), new (o("WAWebActionToast.react")).ActionType(s._(
				/*BTDS*/
				"",
				[s._param("userNames", c)]
			));
		});
		return o("WAWebToastManager").ToastManager.open(g.jsx(o("WAWebActionToast.react").ActionToast, {
			id: n,
			initialAction: d,
			pendingAction: m
		})), u;
	}
	async function x(e, t, n) {
		var a, i;
		if (n === void 0 && (n = o("WAWebActionToast.react").genId()), !r("WAWebNetworkStatus").online) {
			var l = r("WAWebFbtIntlList")(t.map(function(e) {
				return o("WAWebFrontendContactGetters").getFormattedShortName(e.contact);
			}), r("WAWebFbtIntlList").CONJUNCTIONS.NONE, r("WAWebFbtIntlList").DELIMITERS.COMMA).toString(), u = t.length === 1 && o("WAWebUserPrefsMeUser").isMeAccount(t[0].id) ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				"",
				[s._plural(t.length), s._param("userNames", l)]
			);
			o("WAWebToastManager").ToastManager.open(g.jsx(o("WAWebToast.react").Toast, { msg: u }));
			return;
		}
		var c = (a = e.groupMetadata) == null ? void 0 : a.participants;
		if (c == null) return Promise.reject(new (o("WAWebMiscErrors")).ActionError());
		var d = o("WAWebGroupModifyParticipantsJob").demoteCommunityParticipants(e.id, t.map(function(e) {
			return o("WAWebWidFactory").asUserWidOrThrow(e.id);
		}), ((i = e.groupMetadata) == null ? void 0 : i.isLidAddressingMode) === !0), m = r("WAWebFbtIntlList")(t.map(function(e) {
			return o("WAWebFrontendContactGetters").getFormattedShortName(e.contact);
		}), r("WAWebFbtIntlList").CONJUNCTIONS.NONE, r("WAWebFbtIntlList").DELIMITERS.COMMA).toString(), p = new (o("WAWebActionToast.react")).ActionType(t.length === 1 && o("WAWebUserPrefsMeUser").isMeAccount(t[0].id) ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			"",
			[s._plural(t.length), s._param("userNames", m)]
		)), f = d.then(function(e) {
			if (e.status === 207) return new (o("WAWebActionToast.react")).ActionType(t.length === 1 && o("WAWebUserPrefsMeUser").isMeAccount(t[0].id) ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				"",
				[s._plural(t.length), s._param("userNames", m)]
			));
		}).catch(function(e) {
			return o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["[groupMeta] demoteCommunityParticipants dropped"]))), new (o("WAWebActionToast.react")).ActionType(t.length === 1 && o("WAWebUserPrefsMeUser").isMeAccount(t[0].id) ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				"",
				[s._plural(t.length), s._param("userNames", m)]
			));
		});
		o("WAWebToastManager").ToastManager.open(g.jsx(o("WAWebActionToast.react").ActionToast, {
			id: n,
			initialAction: p,
			pendingAction: f
		})), await d;
	}
	l.addParticipants = h, l.removeParticipants = y, l.promoteParticipants = C, l.demoteParticipants = b, l.promoteCommunityParticipants = v, l.demoteCommunityParticipants = S;
}), 226);
