__d("WAWebNewGroupParticipantsDrawer.react", [
	"fbt",
	"WAWebABProps",
	"WAWebClickable.react",
	"WAWebContactGetters",
	"WAWebEmojiText.react",
	"WAWebFbtCommon",
	"WAWebGroupMetadataCollection",
	"WAWebLidMigrationUtils",
	"WAWebMiscGatingUtils",
	"WAWebModalManager",
	"WAWebRound.react",
	"WAWebSelectGroupParticipantsDrawer.react",
	"WAWebTabOrder",
	"WAWebText_DONOTUSE.react",
	"WAWebUnnamedNewGroupAlreadyExistsModal.react",
	"WAWebWid",
	"WDSIconIcArrowForward.react",
	"react",
	"useWAWebGroupDiscardGuard"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useState, _ = { paragraph: {
		paddingTop: "xyamay9",
		paddingInlineEnd: "x64bnmy",
		paddingBottom: "x18d9i69",
		paddingInlineStart: "x13jy36j",
		fontSize: "x1f6kntn",
		lineHeight: "x37zpob",
		textAlign: "x2b8uid",
		color: "xhslqc4",
		overflowWrap: "x1mzt3pk",
		$$css: !0
	} }, f = { surface: "group-member-add-group-creation" };
	function g(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.participants, l = i === void 0 ? [] : i, u = a.initialSelectedOutContacts, d = u === void 0 ? [] : u, g = a.onBack, h = a.onCancel, y = a.onContinue, C = a.onParticipantsChange, b = a.communityName, v = a.parentGroupId, S = a.initialSelectedSubgroup, R = a.sourceGroupMembers, L = a.participantsDrawerTitle, E = p(l), k = E[0], I = E[1], T = p(Array.from(d)), D = T[0], x = T[1], $ = o("useWAWebGroupDiscardGuard").useGroupCreationDiscardGuard(k.length), P = m(function() {
			$().then(function(e) {
				e && (g == null || g());
			});
		}, [$, g]), N = m(function() {
			$().then(function(e) {
				e && (h == null || h());
			});
		}, [$, h]), M = function() {
			var e = r("WAWebGroupMetadataCollection").filter(function(e) {
				var t = e.participants.filter(function(e) {
					return !o("WAWebContactGetters").getIsMe(e.contact);
				});
				if (t.length === k.length && e.subject === "") {
					for (var n = k.sort(function(e, t) {
						return e.id.toString().localeCompare(t.id.toString());
					}), a = t.sort(function(e, t) {
						return e.id.toString().localeCompare(t.id.toString());
					}), i = 0; i < n.length; i++) if (!r("WAWebWid").equals.apply(r("WAWebWid"), o("WAWebLidMigrationUtils").toCommonAddressingMode(n[i].id, a[i].id))) return !1;
					return !0;
				}
				return !1;
			});
			if (e.length > 0) return e[0].id;
		}, w = function() {
			var e = M();
			!v && e ? o("WAWebModalManager").ModalManager.openAlert(c.jsx(r("WAWebUnnamedNewGroupAlreadyExistsModal.react"), {
				existingUnnamedGroup: e,
				onCancel: function() {
					o("WAWebModalManager").ModalManager.closeAlert();
				},
				onCreateNewGroupClick: function() {
					o("WAWebModalManager").ModalManager.closeAlert(), y({
						innerAllowUnnamedGroup: !1,
						innerParticipants: k,
						innerSelectedOutContacts: D
					});
				},
				onEnd: function() {
					o("WAWebModalManager").ModalManager.closeAlert(), o("WAWebModalManager").ModalManager.closeSupportOrModal(), o("WAWebModalManager").ModalManager.close();
				}
			})) : y(v ? {
				innerAllowUnnamedGroup: !1,
				innerParticipants: k,
				innerSelectedOutContacts: D
			} : {
				innerAllowUnnamedGroup: k.length <= o("WAWebABProps").getABPropConfigValue("ugc_participant_limit"),
				innerParticipants: k,
				innerSelectedOutContacts: D
			});
		}, A = b != null && k.length ? c.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
			xstyle: _.paragraph,
			children: s._(
				/*BTDS*/
				"",
				[s._param("community-name", c.jsx(o("WAWebEmojiText.react").EmojiText, { text: b }))]
			)
		}) : null, F = o("WAWebMiscGatingUtils").getGroupSizeLimit();
		return c.jsx(r("WAWebSelectGroupParticipantsDrawer.react"), {
			ref: n,
			testid: "new-group-drawer-participants",
			tsNavigationData: f,
			viewType: a.viewType,
			header: L != null ? L : s._(
				/*BTDS*/
				""
			),
			participants: k,
			selectionSizeLimit: F,
			errorToastOnAddParticipantLimit: s._(
				/*BTDS*/
				"",
				[s._param("max", F)]
			),
			nextBtn: c.jsx(o("WAWebClickable.react").Clickable, {
				"data-tab": o("WAWebTabOrder").TAB_ORDER.DRAWER_FOOTER,
				onClick: w,
				children: c.jsx(o("WAWebRound.react").Round, {
					testid: "group-participants-btn",
					label: r("WAWebFbtCommon")("Next"),
					children: c.jsx(r("WDSIconIcArrowForward.react"), {
						directional: !0,
						colorName: "contentOnAccent"
					})
				})
			}),
			nextBtnDetail: A,
			communityName: b,
			parentGroupId: v,
			initialSelectedSubgroup: S,
			sourceGroupMembers: R,
			onChange: function(t) {
				I(t), C == null || C(t);
			},
			initialSelectedOutContacts: D,
			onOutContactSelectionChange: x,
			onKeyboardEnter: w,
			onBack: g != null ? P : g,
			onCancel: h != null ? N : h
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
