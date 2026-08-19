__d("WAWebLabelChatHeaderButton.react", [
	"fbt",
	"WAJids",
	"WAWebCommonCTWADataSharing",
	"WAWebHeader.react",
	"WAWebIcLabelFilledIcon.react",
	"WAWebLabelCollection",
	"WAWebLabelGetters",
	"WAWebLabelOutlineIcon.react",
	"WAWebLabelStackIcon.react",
	"WAWebLabels.react",
	"WAWebLeadListConstants",
	"WAWebLeadStage",
	"WAWebLeadStageNames",
	"WAWebLeadSublistGating",
	"WAWebListIconStacked.react",
	"WAWebListPeopleIcon.react",
	"WAWebListsGatingUtils",
	"WAWebListsIntroPopupLoadable",
	"WAWebMobilePlatforms",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebNux",
	"WAWebSMBListsIntroPopup.react",
	"WAWebScreenWidthThresholds",
	"WAWebSmbDataSharingOptInModalDialog",
	"WAWebTabOrder",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WAWebUnstyledButton.react",
	"WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
	"WDSIconIcArrowDropDown.react",
	"WDSText.react",
	"react",
	"useWAWebEventTargetValue",
	"useWAWebLeadStageForChat",
	"useWAWebNux",
	"useWAWebWindowSize"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useRef, _ = c.useState, f = {
		button: {
			alignItems: "x6s0dn4",
			backgroundColor: "x1280gxy",
			borderTopColor: "xnj1f2r",
			borderInlineEndColor: "x2uibgs",
			borderBottomColor: "xkveyfu",
			borderInlineStartColor: "x12llq9",
			borderStartStartRadius: "xhpystz",
			borderStartEndRadius: "xhmftvz",
			borderEndEndRadius: "x11v37me",
			borderEndStartRadius: "x1tw5c3r",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			cursor: "x1ypdohk",
			display: "x78zum5",
			columnGap: "x1s70e7g",
			height: "x10kmny3",
			paddingInlineStart: "x12w63v0",
			paddingInlineEnd: "x1nzty39",
			paddingLeft: null,
			paddingRight: null,
			":hover_backgroundColor": "x1ubxc9n",
			$$css: !0
		},
		icon: {
			color: "x14ug900",
			height: "x8lyb6r",
			width: "x1mzsije",
			$$css: !0
		},
		listPeopleIcon: {
			color: "x14ug900",
			height: "x8lyb6r",
			marginInlineStart: "x150mmf0",
			width: "x1mzsije",
			$$css: !0
		},
		labelStackIcon: {
			position: "x10l6tqk",
			top: "x16xtl6x",
			$$css: !0
		}
	};
	function g(e) {
		if (e.length === 0) return {
			primaryLabel: null,
			secondaryLabel: null
		};
		var t = e.map(function(e) {
			return parseInt(e, 10);
		}).filter(function(e) {
			return !Number.isNaN(e);
		}), n;
		t.length >= 2 ? (t.sort(function(e, t) {
			return t - e;
		}), n = t.map(function(e) {
			return e.toString();
		})) : n = e;
		var r = n[0], a = o("WAWebLabelCollection").LabelCollection.get(r), i = {
			id: r,
			model: a,
			color: a ? o("WAWebLabelGetters").getHexColor(a) : null
		}, l = null;
		if (n.length >= 2) {
			var s = n[1], u = o("WAWebLabelCollection").LabelCollection.get(s);
			l = {
				id: s,
				model: u,
				color: u ? o("WAWebLabelGetters").getHexColor(u) : null
			};
		}
		return {
			primaryLabel: i,
			secondaryLabel: l
		};
	}
	function h(e) {
		var t, n, a = e.chat, i = p(null), l = _(null), c = l[0], h = l[1], C = _(null), b = C[0], v = C[1], S = r("useWAWebWindowSize")(), R = S.width < o("WAWebScreenWidthThresholds").NARROW_SCREEN_THRESHOLD, L = o("WAWebListsGatingUtils").isListsEnabled(), E = o("WAWebMobilePlatforms").isSMB() ? o("WAWebNux").NUX.SMB_LISTS_INTRO : o("WAWebNux").NUX.ADD_TO_LISTS, k = r("useWAWebNux")(E), I = k[0], T = k[1], D = r("useWAWebEventTargetValue")(o("WAWebLabelCollection").LabelCollection, ((t = a.labels) != null ? t : []).map(function(e) {
			return "label_updated_" + e;
		}), function() {
			return y(a.labels);
		}, [a.labels]), x = (D == null ? void 0 : D.labelId) != null && ((n = o("WAWebLabelCollection").LabelCollection.get(D.labelId)) == null ? void 0 : n.predefinedId) === o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID, $ = r("useWAWebLeadStageForChat")(o("WAJids").unsafeCoerceToChatJid(a.id.toString()), x && o("WAWebLeadSublistGating").isChatEligibleForLeadSublist(a)), P = $.stage, N = function(t) {
			if (L) return u.jsx("div", {
				className: "x6s0dn4 x78zum5 x8lyb6r x150mmf0 x1n2onr6 x1mzsije",
				children: u.jsx(r("WAWebListIconStacked.react"), { labelIds: t })
			});
			var e = g(t), n = e.primaryLabel, a = e.secondaryLabel;
			return u.jsxs("div", {
				className: "x8lyb6r x1n2onr6 x1mzsije x7g7pl8 x1qfufaz",
				children: [u.jsx(o("WAWebIcLabelFilledIcon.react").IcLabelFilledIcon, {
					width: 18,
					height: 18,
					style: (n == null ? void 0 : n.color) != null ? { color: n.color } : {},
					xstyle: f.labelStackIcon
				}), u.jsx(o("WAWebLabelStackIcon.react").LabelStackIcon, {
					width: 18,
					height: 18,
					style: (a == null ? void 0 : a.color) != null ? { color: a.color } : {},
					xstyle: f.labelStackIcon
				})]
			});
		}, M = function() {
			return R ? null : (D == null ? void 0 : D.name) != null ? x && P != null && P !== o("WAWebLeadStage").LeadStage.NONE ? s._(
				/*BTDS*/
				"",
				[s._param("lead list name", D.name), s._param("lead stage name", o("WAWebLeadStageNames").getLeadStageName(P))]
			) : D.name : (D == null ? void 0 : D.count) != null ? s._(
				/*BTDS*/
				"",
				[s._param("labelCount", D.count)]
			) : L ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
		}, w = function() {
			return (D == null ? void 0 : D.labelId) != null ? u.jsx(o("WAWebLabels.react").Labels, {
				labels: [D.labelId],
				showName: !1,
				isListsFeatureEnabled: L
			}) : (D == null ? void 0 : D.count) != null && a.labels != null ? N(a.labels) : L ? u.jsx(o("WAWebListPeopleIcon.react").ListPeopleIcon, { iconXstyle: f.listPeopleIcon }) : u.jsx(o("WAWebLabelOutlineIcon.react").LabelOutlineIcon, { iconXstyle: f.icon });
		}, A = function() {
			v(null);
		}, F = p(r("WAWebNoop")), O = d(function(e) {
			var t = babelHelpers.extends({}, o("WAWebHeader.react").createLabelsDropdownMenu(a, function(e) {
				return F.current(e);
			}, e), {
				anchor: c,
				anchorRef: i
			});
			v(t);
		}, [a, c]);
		m(function() {
			F.current = O;
		}, [O]);
		var B = function(t) {
			if (t.preventDefault(), t.stopPropagation(), a) if (b != null) A();
			else if (I && L) {
				var e = o("WAWebMobilePlatforms").isSMB() ? o("WAWebSMBListsIntroPopup.react").SMBListsIntroPopup : o("WAWebListsIntroPopupLoadable").ListsIntroPopupLoadable;
				o("WAWebModalManager").ModalManager.open(u.jsx(e, { onContinue: function() {
					T(), r("WAWebSmbDataSharingOptInModalDialog").maybeShowLabelDataSharingDialog({
						cb: function() {
							O();
						},
						chats: [a],
						entrypoint: o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint").SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.LABEL_CHAT,
						target: o("WAWebCommonCTWADataSharing").SmbDataSharingLabelTargetValues.CHAT
					});
				} }));
			} else r("WAWebSmbDataSharingOptInModalDialog").maybeShowLabelDataSharingDialog({
				cb: function() {
					O();
				},
				chats: [a],
				entrypoint: o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint").SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.LABEL_CHAT,
				target: o("WAWebCommonCTWADataSharing").SmbDataSharingLabelTargetValues.CHAT
			});
		}, W;
		return b != null && (W = u.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "LabelChatDropdownMenu",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: A,
			children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: b })
		})), u.jsxs(u.Fragment, { children: [u.jsx("div", {
			ref: h,
			className: "x150mmf0",
			children: u.jsxs(r("WAWebUnstyledButton.react"), {
				ref: i,
				testid: "label-chat-header-button",
				dataTab: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
				xstyle: f.button,
				onClick: B,
				"aria-label": L ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				),
				children: [
					w(),
					!R && u.jsx(r("WDSText.react"), {
						type: "Body2Emphasized",
						textAlign: "center",
						colorName: "contentDefault",
						children: M()
					}),
					u.jsx(r("WDSIconIcArrowDropDown.react"), { iconXstyle: f.icon })
				]
			})
		}), W] });
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		if (e == null || e.length === 0) return null;
		if (e.length === 1) {
			var t = e[0], n = o("WAWebLabelCollection").LabelCollection.get(t);
			return n == null ? null : {
				name: n.name,
				labelId: t
			};
		}
		return { count: e.length };
	}
	l.getLabelStackInfo = g, l.LabelChatHeaderButton = h;
}), 226);
