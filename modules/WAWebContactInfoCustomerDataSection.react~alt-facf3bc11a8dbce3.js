__d("WAWebContactInfoCustomerDataSection.react", [
	"fbt",
	"WAJids",
	"WATimeUtils",
	"WAWebAcquisitionSourceNames",
	"WAWebBusinessProfileTextField.react",
	"WAWebChatCollection",
	"WAWebChatContextMenuItemEditLabel.react",
	"WAWebContactGetters",
	"WAWebContactInfoFieldsNuxModal.react",
	"WAWebContactManagerGating",
	"WAWebCustomerDataCollection",
	"WAWebCustomerDataFieldSaver",
	"WAWebCustomerDataLastUpdated",
	"WAWebCustomerProfileDateField.react",
	"WAWebCustomerProfileEditableField.react",
	"WAWebCustomerProfileNotesField.react",
	"WAWebCustomerProfileSelectField.react",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WAWebGroupInfoSeparator.react",
	"WAWebLabelCollection",
	"WAWebLabelOutlineIcon.react",
	"WAWebLabelsInfoDrawerLabelWell.react",
	"WAWebLeadListConstants",
	"WAWebLeadStage",
	"WAWebLeadStageNames",
	"WAWebLeadSublistGating",
	"WAWebListPeopleRefreshedIcon.react",
	"WAWebListsGatingUtils",
	"WAWebMobilePlatforms",
	"WAWebModalManager",
	"WAWebNotesUtils",
	"WAWebNux",
	"WAWebSMBListsIntroPopup.react",
	"WAWebWamEnumOppositeVisibleIdentificationType",
	"WDSIconIcCake.react",
	"WDSIconIcCall.react",
	"WDSIconIcEdit.react",
	"WDSIconIcLocationOn.react",
	"WDSIconIcMail.react",
	"WDSIconIcPersonAdd.react",
	"WDSIconIcReceipt.react",
	"WDSIconIcSyncAlt.react",
	"WDSText.react",
	"isStringNullOrEmpty",
	"react",
	"useWAWebContactValues",
	"useWAWebCustomerDataForContact",
	"useWAWebLeadStageForChat",
	"useWAWebListener",
	"useWAWebNoteValues",
	"useWAWebNux"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useEffectEvent, _ = c.useMemo, f = c.useState, g = {
		readOnlyRow: {
			marginInlineStart: "x150mmf0",
			marginInlineEnd: "xqf2s3x",
			marginLeft: null,
			marginRight: null,
			$$css: !0
		},
		lastUpdatedText: {
			marginTop: "xav9cv8",
			$$css: !0
		},
		labelsRow: {
			alignSelf: "xkh2ocl",
			paddingBottom: "x12xbjc7",
			paddingInlineEnd: "xvtqlqk",
			paddingInlineStart: "x12w63v0",
			paddingTop: "x16ovd2e",
			$$css: !0
		},
		iconContainer: {
			color: "xhslqc4",
			height: "x1nqnulx",
			paddingTop: "x16ovd2e",
			paddingInlineEnd: "x1nzty39",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x12w63v0",
			width: "x1xvr5cs",
			$$css: !0
		},
		editButtonContainer: {
			opacity: "xmywcsy",
			flexShrink: "x2lah0s",
			$$css: !0
		}
	};
	function h(e) {
		var t = e.contact;
		return !o("WAWebContactManagerGating").contactManagerEnabled() || !o("WAWebContactManagerGating").isEligibleForCustomerFields(t) ? null : u.jsx(C, { contact: t });
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		return new Date(e * 1e3).toLocaleString(void 0, {
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "numeric",
			minute: "2-digit",
			timeZoneName: "short"
		});
	}
	function C(e) {
		var t, n, a = e.contact, i = o("useWAWebContactValues").useContactValues(a.id, [o("WAWebContactGetters").getLabels]), l = i[0], c = r("useWAWebCustomerDataForContact")(a.id), _ = o("WAJids").validateChatJid((t = (n = a.id) == null ? void 0 : n.toJid()) != null ? t : ""), h = r("useWAWebNoteValues")(_), C = f(null), b = C[0], k = C[1], D = d(function(e) {
			e.chatJid === _ && k({
				chatJid: e.chatJid,
				modifiedAt: e.modifiedAt
			});
		}, [_]);
		o("useWAWebListener").useListener(o("WAWebCustomerDataCollection").CustomerDataCollection, "add", D), o("useWAWebListener").useListener(o("WAWebCustomerDataCollection").CustomerDataCollection, "change:modifiedAt", D);
		var x = r("useWAWebNux")(o("WAWebNux").NUX.CONTACT_INFO_FIELDS_INTRO), $ = x[0], P = x[2], N = p(function() {
			_ != null && $ && o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebContactInfoFieldsNuxModal.react"), { onAcknowledge: P }));
		});
		if (m(function() {
			N();
		}, []), _ == null) return null;
		var M = _, w = o("WAWebCustomerDataLastUpdated").getLastUpdatedTimestamp(c, h.value), A = b != null && b.chatJid === _ ? b.modifiedAt : null, F = A != null ? Math.max(w != null ? w : 0, A) : w, O = o("WAWebNotesUtils").shouldEnableNotesForWid(a.id);
		return u.jsxs("div", {
			"data-testid": "contact-info-customer-data-section",
			children: [
				u.jsx(r("WAWebGroupInfoSeparator.react"), { padding: !0 }),
				u.jsxs("div", {
					className: "x16ovd2e x1nbhmlj xdx6fka xvtqlqk",
					role: "heading",
					"aria-level": 3,
					children: [u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: s._(
							/*BTDS*/
							""
						)
					}), F != null && u.jsx(r("WDSText.react"), {
						type: "Body3",
						colorName: "contentDeemphasized",
						xstyle: g.lastUpdatedText,
						children: o("WAWebCustomerDataLastUpdated").formatLastUpdated(F)
					})]
				}),
				O && u.jsx(r("WAWebCustomerProfileNotesField.react"), {
					contact: a,
					noteAsyncState: h
				}),
				O && u.jsx("div", {
					"data-testid": "customer-info-fields-divider",
					children: u.jsx(r("WAWebGroupInfoSeparator.react"), { padding: !0 })
				}),
				u.jsx(v, {
					contact: a,
					labels: l
				}),
				u.jsx(S, { contact: a }),
				u.jsx(R, {
					chatJid: M,
					customerData: c
				}, "email-" + String(M)),
				u.jsx(E, {
					chatJid: M,
					customerData: c
				}, "birthday-" + String(M)),
				u.jsx(L, {
					chatJid: M,
					customerData: c
				}, "address-" + String(M)),
				u.jsx("div", {
					"data-testid": "customer-info-activity-divider",
					children: u.jsx(r("WAWebGroupInfoSeparator.react"), { padding: !0 })
				}),
				u.jsx("div", {
					className: "x16ovd2e x1nbhmlj xdx6fka xvtqlqk",
					role: "heading",
					"aria-level": 3,
					children: u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: s._(
							/*BTDS*/
							""
						)
					})
				}),
				u.jsx(I, {
					chatJid: M,
					customerData: c
				}, "lastOrder-" + String(M)),
				u.jsx(T, {
					chatJid: M,
					customerData: c
				}, "source-" + String(M)),
				u.jsx(r("WAWebBusinessProfileTextField.react"), {
					icon: u.jsx(r("WDSIconIcPersonAdd.react"), {
						width: 24,
						height: 24
					}),
					editable: !1,
					label: s._(
						/*BTDS*/
						""
					),
					testid: "customer_manager_acquisition_date_textfield",
					value: (c == null ? void 0 : c.createdAt) != null ? y(c.createdAt) : String(s._(
						/*BTDS*/
						""
					)),
					xstyle: g.readOnlyRow
				})
			]
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e, t) {
		var n, a = o("WAWebChatCollection").ChatCollection.get(e.id), i = o("WAWebLabelCollection").LabelCollection.findFirst(function(e) {
			return e.predefinedId === o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID;
		}), l = i != null && (t != null ? t : []).includes(i.id), s = a != null && l && o("WAWebLeadSublistGating").isChatEligibleForLeadSublist(a), u = r("useWAWebLeadStageForChat")(o("WAJids").unsafeCoerceToChatJid(e.id.toString()), s), c = u.stage;
		return !s || i == null || c == null || c === o("WAWebLeadStage").LeadStage.NONE ? null : {
			labelId: i.id,
			name: o("WAWebLeadStageNames").getLeadSublistRowLabel((n = i.name) != null ? n : "", c).toString()
		};
	}
	function v(e) {
		var t, n = e.contact, a = e.labels, i = o("WAWebListsGatingUtils").isListsEnabled(), l = b(n, a), c = r("useWAWebNux")(o("WAWebNux").NUX.SMB_LISTS_INTRO), m = c[0], p = c[1], _ = d(function() {
			var e = o("WAWebChatCollection").ChatCollection.get(n.id);
			if (e != null) {
				if (i && o("WAWebMobilePlatforms").isSMB() && m) {
					o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebSMBListsIntroPopup.react").SMBListsIntroPopup, { onContinue: function() {
						p(), o("WAWebChatContextMenuItemEditLabel.react").checkDataSharingOrHandleLabelAction(e);
					} }));
					return;
				}
				o("WAWebChatContextMenuItemEditLabel.react").checkDataSharingOrHandleLabelAction(e);
			}
		}, [
			n.id,
			i,
			m,
			p
		]);
		return u.jsx("div", {
			className: "xlr9sxt xvvg52n xwd4zgb xq8v1ta x150mmf0 xqf2s3x x85wx34 x1ubxc9n xi52gnm",
			children: u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				gap: 12,
				xstyle: g.labelsRow,
				children: [
					u.jsx(o("WAWebFlex.react").FlexItem, {
						align: "center",
						justify: "center",
						xstyle: g.iconContainer,
						children: i ? u.jsx(o("WAWebListPeopleRefreshedIcon.react").ListPeopleRefreshedIcon, {}) : u.jsx(o("WAWebLabelOutlineIcon.react").LabelOutlineIcon, {})
					}),
					u.jsx("div", {
						className: "x98rzlu xeuugli",
						children: ((t = a == null ? void 0 : a.length) != null ? t : 0) > 0 ? u.jsx(r("WAWebLabelsInfoDrawerLabelWell.react"), {
							labels: a,
							nameOverrideForLabelId: l,
							theme: "standalone"
						}) : u.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							children: i ? s._(
								/*BTDS*/
								""
							) : s._(
								/*BTDS*/
								""
							)
						})
					}),
					u.jsx(o("WAWebFlex.react").FlexItem, {
						align: "center",
						justify: "center",
						xstyle: g.editButtonContainer,
						children: u.jsx("button", {
							className: "x6s0dn4 x11g6tue x1v8p93f x16stqrj x1ejq31n x1sy0etr x972fbf x1qhh985 xv5lvn5 x1o3jo1z xstzfhl x18oe1m7 x14e42zd x10w94by xt8t1vi x1xc408v x129tdwq x15urzxu xhslqc4 x1ypdohk x78zum5 xzpcc6d xl56j7k xexx8yu xyri2b x18d9i69 x1c1uobl x1xephfl x1nsvvxn",
							onClick: _,
							"aria-label": s._(
								/*BTDS*/
								""
							),
							children: u.jsx(r("WDSIconIcEdit.react"), {
								width: 20,
								height: 20
							})
						})
					})
				]
			})
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		var t = e.contact, n = o("useWAWebContactValues").useContactValues(t.id, [o("WAWebFrontendContactGetters").getFormattedPhoneAndType]), a = n[0], i = a.type === o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PHONE_NUMBER && !r("isStringNullOrEmpty")(a.displayName) ? a.displayName : null;
		return i == null ? null : u.jsx(r("WAWebBusinessProfileTextField.react"), {
			icon: u.jsx(r("WDSIconIcCall.react"), {
				width: 24,
				height: 24
			}),
			editable: !1,
			label: s._(
				/*BTDS*/
				""
			),
			testid: "customer_manager_customer_phone_textfield",
			value: i,
			xstyle: g.readOnlyRow
		});
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e) {
		var t, n = e.chatJid, a = e.customerData, i = f((t = a == null ? void 0 : a.email) != null ? t : ""), l = i[0], c = i[1], m = f(a == null ? void 0 : a.email), p = m[0], _ = m[1];
		if ((a == null ? void 0 : a.email) !== p) {
			var g;
			_(a == null ? void 0 : a.email), c((g = a == null ? void 0 : a.email) != null ? g : "");
		}
		var h = d(function(e) {
			c(e), o("WAWebCustomerDataFieldSaver").saveCustomerDataField(n, a, { email: e });
		}, [n, a]);
		return u.jsx(r("WAWebCustomerProfileEditableField.react"), {
			icon: u.jsx(r("WDSIconIcMail.react"), {
				width: 24,
				height: 24
			}),
			label: s._(
				/*BTDS*/
				""
			),
			placeholder: s._(
				/*BTDS*/
				""
			),
			value: l,
			onSave: h
		});
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		var t, n = e.chatJid, a = e.customerData, i = f((t = a == null ? void 0 : a.address) != null ? t : ""), l = i[0], c = i[1], m = f(a == null ? void 0 : a.address), p = m[0], _ = m[1];
		if ((a == null ? void 0 : a.address) !== p) {
			var g;
			_(a == null ? void 0 : a.address), c((g = a == null ? void 0 : a.address) != null ? g : "");
		}
		var h = d(function(e) {
			c(e), o("WAWebCustomerDataFieldSaver").saveCustomerDataField(n, a, { address: e });
		}, [n, a]);
		return u.jsx(r("WAWebCustomerProfileEditableField.react"), {
			icon: u.jsx(r("WDSIconIcLocationOn.react"), {
				width: 24,
				height: 24
			}),
			label: s._(
				/*BTDS*/
				""
			),
			placeholder: s._(
				/*BTDS*/
				""
			),
			value: l,
			onSave: h
		});
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E(e) {
		var t = e.chatJid, n = e.customerData, a = f((n == null ? void 0 : n.birthday) != null ? new Date(n.birthday * 1e3) : null), i = a[0], l = a[1], c = f(n == null ? void 0 : n.birthday), m = c[0], p = c[1];
		(n == null ? void 0 : n.birthday) !== m && (p(n == null ? void 0 : n.birthday), l((n == null ? void 0 : n.birthday) != null ? new Date(n.birthday * 1e3) : null));
		var _ = d(function(e) {
			l(e);
			var r = e != null ? o("WATimeUtils").castToUnixTime(Math.floor(e.getTime() / 1e3)) : void 0;
			o("WAWebCustomerDataFieldSaver").saveCustomerDataField(t, n, { birthday: r });
		}, [t, n]);
		return u.jsx(r("WAWebCustomerProfileDateField.react"), {
			icon: u.jsx(r("WDSIconIcCake.react"), {
				width: 24,
				height: 24
			}),
			label: s._(
				/*BTDS*/
				""
			),
			monthDayOnly: !0,
			placeholder: s._(
				/*BTDS*/
				""
			),
			value: i,
			onSave: _
		});
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k(e) {
		return e == null ? null : o("WAWebAcquisitionSourceNames").getAcquisitionSourceDisplayName(e) != null ? e : null;
	}
	function I(e) {
		var t = e.chatJid, n = e.customerData, a = f((n == null ? void 0 : n.lastOrder) != null ? new Date(n.lastOrder * 1e3) : null), i = a[0], l = a[1], c = f(n == null ? void 0 : n.lastOrder), m = c[0], p = c[1];
		(n == null ? void 0 : n.lastOrder) !== m && (p(n == null ? void 0 : n.lastOrder), l((n == null ? void 0 : n.lastOrder) != null ? new Date(n.lastOrder * 1e3) : null));
		var _ = d(function(e) {
			l(e);
			var r = e != null ? o("WATimeUtils").castToUnixTime(Math.floor(e.getTime() / 1e3)) : void 0;
			o("WAWebCustomerDataFieldSaver").saveCustomerDataField(t, n, { lastOrder: r });
		}, [t, n]);
		return u.jsx(r("WAWebCustomerProfileDateField.react"), {
			icon: u.jsx(r("WDSIconIcReceipt.react"), {
				width: 24,
				height: 24
			}),
			label: s._(
				/*BTDS*/
				""
			),
			placeholder: s._(
				/*BTDS*/
				""
			),
			value: i,
			onSave: _
		});
	}
	I.displayName = I.name + " [from " + i.id + "]";
	function T(e) {
		var t = e.chatJid, n = e.customerData, a = f(k(n == null ? void 0 : n.acquisitionSource)), i = a[0], l = a[1], c = f(n == null ? void 0 : n.acquisitionSource), m = c[0], p = c[1];
		(n == null ? void 0 : n.acquisitionSource) !== m && (p(n == null ? void 0 : n.acquisitionSource), l(k(n == null ? void 0 : n.acquisitionSource)));
		var g = d(function(e) {
			l(e), o("WAWebCustomerDataFieldSaver").saveCustomerDataField(t, n, { acquisitionSource: e });
		}, [t, n]), h = _(function() {
			return o("WAWebAcquisitionSourceNames").getRegisteredAcquisitionSourceIds().map(function(e) {
				var t;
				return {
					label: (t = o("WAWebAcquisitionSourceNames").getAcquisitionSourceDisplayName(e)) != null ? t : s._(
						/*BTDS*/
						""
					),
					value: e
				};
			});
		}, []);
		return u.jsx(r("WAWebCustomerProfileSelectField.react"), {
			icon: u.jsx(r("WDSIconIcSyncAlt.react"), {
				width: 24,
				height: 24
			}),
			label: s._(
				/*BTDS*/
				""
			),
			placeholder: s._(
				/*BTDS*/
				""
			),
			options: h,
			testid: "customer_manager_source_select_field",
			value: i,
			onSave: g
		});
	}
	T.displayName = T.name + " [from " + i.id + "]", l.default = h;
}), 226);
