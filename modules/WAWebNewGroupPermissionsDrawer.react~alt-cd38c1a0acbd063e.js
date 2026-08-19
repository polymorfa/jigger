__d("WAWebNewGroupPermissionsDrawer.react", [
	"fbt",
	"WAWebActionToast.react",
	"WAWebChatInfoDrawerRow.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebDrawerUtils",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebGroupConstants",
	"WAWebGroupGatingUtils",
	"WAWebGroupHistoryGating",
	"WAWebPendingParticipantsIcon.react",
	"WAWebSetPropertyGroupAction",
	"WAWebText.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WDSIconIcEdit.react",
	"WDSIconIcHistory.react",
	"WDSIconIcLink.react",
	"WDSIconIcPersonAdd.react",
	"WDSIconWdsIcChat.react",
	"WDSSwitch.react",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = { secondary: {
		color: "xhslqc4",
		$$css: !0
	} };
	function m(e) {
		var t = e.icon, a = e.secondaryTitle, i = e.settingType, l = e.setValue, s = e.title, u = e.value, d = u === !0 ? "off" : "on", m = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				l(!e);
				var t = o("WAWebActionToast.react").genId(), n = o("WAWebSetPropertyGroupAction").getActionString(i, d)[1];
				o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
					id: t,
					msg: n
				}));
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), p = c.jsx(r("WDSSwitch.react"), {
			"aria-label": s,
			value: u,
			onChange: function() {
				return void m(u);
			}
		});
		return c.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRow, {
			icon: t,
			side: p,
			title: s,
			secondaryTitle: a,
			spaced: !0
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.announce, l = a.memberAddMode, u = a.memberLinkMode, p = a.memberShareGroupHistoryMode, _ = a.membershipApprovalMode, f = a.onBack, g = a.onCancel, h = a.participantCount, y = a.restrict, C = a.setAnnounce, b = a.setMemberAddMode, v = a.setMemberLinkMode, S = a.setMemberShareGroupHistoryMode, R = a.setMembershipApprovalMode, L = a.setRestrict, E = o("WAWebDrawerUtils").getDrawerHeaderType(a.viewType), k = l === !0 && !(o("WAWebGroupGatingUtils").isAnyoneCanLinkToGroupsM2Enabled() && h != null && h > o("WAWebGroupGatingUtils").ANYONE_CAN_LINK_M2_PARTICIPANT_THRESHOLD), I = o("WAWebGroupHistoryGating").isGroupHistorySettingsDecoupleEnabled(), T = o("WAWebGroupHistoryGating").isGroupHistorySettingsToggleUIEnabled() && (I || l === !0), D = T ? c.jsx(m, {
			value: p,
			setValue: S,
			icon: c.jsx(r("WDSIconIcHistory.react"), {
				testid: "group_message_history_setting_icon",
				xstyle: d.secondary
			}),
			settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_SHARE_GROUP_HISTORY_MODE,
			title: s._(
				/*BTDS*/
				""
			),
			secondaryTitle: c.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
				/*BTDS*/
				""
			) })
		}) : null, x = function(t) {
			b(t), t === !1 && u === !0 && v(!1);
		};
		return c.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			theme: "striped",
			testid: "group-settings-drawer",
			viewType: a.viewType,
			tsNavigationData: {
				surface: "unknown",
				viewName: "new-group-permissions"
			},
			children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				type: E,
				onBack: f,
				onCancel: g
			}), c.jsxs(r("WAWebDrawerBody.react"), { children: [
				c.jsx("div", {
					className: "xymharo x2pibh5 x1anpbxc xyorhqc",
					children: c.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
						/*BTDS*/
						""
					) })
				}),
				c.jsxs(r("WAWebDrawerSection.react"), {
					animation: !1,
					children: [
						c.jsx(m, {
							value: y,
							setValue: L,
							icon: c.jsx(r("WDSIconIcEdit.react"), {
								viewBox: {
									x: 0,
									y: 0,
									width: 24,
									height: 24
								},
								width: 18,
								height: 18,
								xstyle: d.secondary
							}),
							settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE.RESTRICT,
							title: s._(
								/*BTDS*/
								""
							),
							secondaryTitle: c.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
								/*BTDS*/
								""
							) })
						}),
						c.jsx(m, {
							value: i,
							setValue: C,
							icon: c.jsx(r("WDSIconWdsIcChat.react"), {
								width: 20,
								height: 20,
								xstyle: d.secondary
							}),
							settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE.ANNOUNCEMENT,
							title: s._(
								/*BTDS*/
								""
							)
						}),
						c.jsx(m, {
							value: l,
							setValue: x,
							icon: c.jsx(r("WDSIconIcPersonAdd.react"), {
								width: 22,
								height: 22,
								xstyle: d.secondary
							}),
							settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_ADD_MODE,
							title: s._(
								/*BTDS*/
								""
							)
						}),
						!I && D,
						k && c.jsx(m, {
							value: u,
							setValue: v,
							icon: c.jsx(r("WDSIconIcLink.react"), {
								testid: "ic-link",
								xstyle: d.secondary
							}),
							settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_LINK_MODE,
							title: s._(
								/*BTDS*/
								""
							)
						}),
						I && D
					]
				}),
				c.jsxs(c.Fragment, { children: [c.jsx("div", {
					className: "xymharo x2pibh5 x1anpbxc xyorhqc",
					children: c.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
						/*BTDS*/
						""
					) })
				}), c.jsx(r("WAWebDrawerSection.react"), {
					animation: !1,
					children: c.jsx(m, {
						value: _,
						setValue: R,
						icon: c.jsx(o("WAWebPendingParticipantsIcon.react").PendingParticipantsIcon, {
							width: 19,
							height: 19,
							xstyle: d.secondary
						}),
						settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBERSHIP_APPROVAL_MODE,
						title: s._(
							/*BTDS*/
							""
						),
						secondaryTitle: c.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
							/*BTDS*/
							"",
							[s._implicitParam("=m2", c.jsx(o("WAWebExternalLink.react").ExternalLink, {
								href: o("WAWebFaqUrl").getMembershipApprovalModeFaqUrl(),
								children: s._(
									/*BTDS*/
									""
								)
							}))]
						) })
					})
				})] })
			] })]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
