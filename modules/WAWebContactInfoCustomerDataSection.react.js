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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(2), n = e.contact;
		if (!o("WAWebContactManagerGating").contactManagerEnabled() || !o("WAWebContactManagerGating").isEligibleForCustomerFields(n)) return null;
		var r;
		return t[0] !== n ? (r = u.jsx(C, { contact: n }), t[0] = n, t[1] = r) : r = t[1], r;
	}
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
		var t = o("react-compiler-runtime").c(90), n = e.contact, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = [o("WAWebContactGetters").getLabels], t[0] = a) : a = t[0];
		var i = o("useWAWebContactValues").useContactValues(n.id, a), l = i[0], c = r("useWAWebCustomerDataForContact")(n.id), d;
		if (t[1] !== n.id) {
			var _, h;
			d = o("WAJids").validateChatJid((_ = (h = n.id) == null ? void 0 : h.toJid()) != null ? _ : ""), t[1] = n.id, t[2] = d;
		} else d = t[2];
		var C = d, b = r("useWAWebNoteValues")(C), v = f(null), I = v[0], x = v[1], $;
		t[3] !== C ? ($ = function(t) {
			t.chatJid === C && x({
				chatJid: t.chatJid,
				modifiedAt: t.modifiedAt
			});
		}, t[3] = C, t[4] = $) : $ = t[4];
		var P = $;
		o("useWAWebListener").useListener(o("WAWebCustomerDataCollection").CustomerDataCollection, "add", P), o("useWAWebListener").useListener(o("WAWebCustomerDataCollection").CustomerDataCollection, "change:modifiedAt", P);
		var N = r("useWAWebNux")(o("WAWebNux").NUX.CONTACT_INFO_FIELDS_INTRO), M = N[0], w = N[2], A;
		t[5] !== w || t[6] !== C || t[7] !== M ? (A = function() {
			C != null && M && o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebContactInfoFieldsNuxModal.react"), { onAcknowledge: w }));
		}, t[5] = w, t[6] = C, t[7] = M, t[8] = A) : A = t[8];
		var F = p(A), O;
		t[9] !== F ? (O = function() {
			F();
		}, t[9] = F, t[10] = O) : O = t[10];
		var B;
		if (t[11] === Symbol.for("react.memo_cache_sentinel") ? (B = [], t[11] = B) : B = t[11], m(O, B), C == null) return null;
		var W = C, q, U, V, H, G, z, j, K;
		if (t[12] !== n.id || t[13] !== c || t[14] !== I || t[15] !== C || t[16] !== b.value) {
			var Q = o("WAWebCustomerDataLastUpdated").getLastUpdatedTimestamp(c, b.value), X = I != null && I.chatJid === C ? I.modifiedAt : null, Y = X != null ? Math.max(Q != null ? Q : 0, X) : Q, J;
			t[25] !== n.id ? (J = o("WAWebNotesUtils").shouldEnableNotesForWid(n.id), t[25] = n.id, t[26] = J) : J = t[26], q = J, H = "contact-info-customer-data-section", t[27] === Symbol.for("react.memo_cache_sentinel") ? (G = u.jsx(r("WAWebGroupInfoSeparator.react"), { padding: !0 }), z = { className: "x16ovd2e x1nbhmlj xdx6fka xvtqlqk" }, t[27] = G, t[28] = z) : (G = t[27], z = t[28]), j = "heading", K = 3, t[29] === Symbol.for("react.memo_cache_sentinel") ? (U = u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: s._(
					/*BTDS*/
					""
				)
			}), t[29] = U) : U = t[29], V = Y != null && u.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: "contentDeemphasized",
				xstyle: g.lastUpdatedText,
				children: o("WAWebCustomerDataLastUpdated").formatLastUpdated(Y)
			}), t[12] = n.id, t[13] = c, t[14] = I, t[15] = C, t[16] = b.value, t[17] = q, t[18] = U, t[19] = V, t[20] = H, t[21] = G, t[22] = z, t[23] = j, t[24] = K;
		} else q = t[17], U = t[18], V = t[19], H = t[20], G = t[21], z = t[22], j = t[23], K = t[24];
		var Z;
		t[30] !== U || t[31] !== V || t[32] !== z || t[33] !== j || t[34] !== K ? (Z = u.jsxs("div", babelHelpers.extends({}, z, {
			role: j,
			"aria-level": K,
			children: [U, V]
		})), t[30] = U, t[31] = V, t[32] = z, t[33] = j, t[34] = K, t[35] = Z) : Z = t[35];
		var ee;
		t[36] !== n || t[37] !== b || t[38] !== q ? (ee = q && u.jsx(r("WAWebCustomerProfileNotesField.react"), {
			contact: n,
			noteAsyncState: b
		}), t[36] = n, t[37] = b, t[38] = q, t[39] = ee) : ee = t[39];
		var te;
		t[40] !== q ? (te = q && u.jsx("div", {
			"data-testid": "customer-info-fields-divider",
			children: u.jsx(r("WAWebGroupInfoSeparator.react"), { padding: !0 })
		}), t[40] = q, t[41] = te) : te = t[41];
		var ne;
		t[42] !== n || t[43] !== l ? (ne = u.jsx(S, {
			contact: n,
			labels: l
		}), t[42] = n, t[43] = l, t[44] = ne) : ne = t[44];
		var re;
		t[45] !== n ? (re = u.jsx(R, { contact: n }), t[45] = n, t[46] = re) : re = t[46];
		var oe = "email-" + String(W), ae;
		t[47] !== W || t[48] !== c || t[49] !== oe ? (ae = u.jsx(L, {
			chatJid: W,
			customerData: c
		}, oe), t[47] = W, t[48] = c, t[49] = oe, t[50] = ae) : ae = t[50];
		var ie = "birthday-" + String(W), le;
		t[51] !== W || t[52] !== c || t[53] !== ie ? (le = u.jsx(k, {
			chatJid: W,
			customerData: c
		}, ie), t[51] = W, t[52] = c, t[53] = ie, t[54] = le) : le = t[54];
		var se = "address-" + String(W), ue;
		t[55] !== W || t[56] !== c || t[57] !== se ? (ue = u.jsx(E, {
			chatJid: W,
			customerData: c
		}, se), t[55] = W, t[56] = c, t[57] = se, t[58] = ue) : ue = t[58];
		var ce, de;
		t[59] === Symbol.for("react.memo_cache_sentinel") ? (ce = u.jsx("div", {
			"data-testid": "customer-info-activity-divider",
			children: u.jsx(r("WAWebGroupInfoSeparator.react"), { padding: !0 })
		}), de = { className: "x16ovd2e x1nbhmlj xdx6fka xvtqlqk" }, t[59] = ce, t[60] = de) : (ce = t[59], de = t[60]);
		var me;
		t[61] === Symbol.for("react.memo_cache_sentinel") ? (me = u.jsx("div", babelHelpers.extends({}, de, {
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
		})), t[61] = me) : me = t[61];
		var pe = "lastOrder-" + String(W), _e;
		t[62] !== W || t[63] !== c || t[64] !== pe ? (_e = u.jsx(T, {
			chatJid: W,
			customerData: c
		}, pe), t[62] = W, t[63] = c, t[64] = pe, t[65] = _e) : _e = t[65];
		var fe = "source-" + String(W), ge;
		t[66] !== W || t[67] !== c || t[68] !== fe ? (ge = u.jsx(D, {
			chatJid: W,
			customerData: c
		}, fe), t[66] = W, t[67] = c, t[68] = fe, t[69] = ge) : ge = t[69];
		var he;
		t[70] === Symbol.for("react.memo_cache_sentinel") ? (he = u.jsx(r("WDSIconIcPersonAdd.react"), {
			width: 24,
			height: 24
		}), t[70] = he) : he = t[70];
		var ye;
		t[71] === Symbol.for("react.memo_cache_sentinel") ? (ye = s._(
			/*BTDS*/
			""
		), t[71] = ye) : ye = t[71];
		var Ce;
		t[72] !== c ? (Ce = (c == null ? void 0 : c.createdAt) != null ? y(c.createdAt) : String(s._(
			/*BTDS*/
			""
		)), t[72] = c, t[73] = Ce) : Ce = t[73];
		var be;
		t[74] !== Ce ? (be = u.jsx(r("WAWebBusinessProfileTextField.react"), {
			icon: he,
			editable: !1,
			label: ye,
			testid: "customer_manager_acquisition_date_textfield",
			value: Ce,
			xstyle: g.readOnlyRow
		}), t[74] = Ce, t[75] = be) : be = t[75];
		var ve;
		return t[76] !== H || t[77] !== G || t[78] !== Z || t[79] !== ee || t[80] !== te || t[81] !== ne || t[82] !== re || t[83] !== ae || t[84] !== le || t[85] !== ue || t[86] !== _e || t[87] !== ge || t[88] !== be ? (ve = u.jsxs("div", {
			"data-testid": H,
			children: [
				G,
				Z,
				ee,
				te,
				ne,
				re,
				ae,
				le,
				ue,
				ce,
				me,
				_e,
				ge,
				be
			]
		}), t[76] = H, t[77] = G, t[78] = Z, t[79] = ee, t[80] = te, t[81] = ne, t[82] = re, t[83] = ae, t[84] = le, t[85] = ue, t[86] = _e, t[87] = ge, t[88] = be, t[89] = ve) : ve = t[89], ve;
	}
	function b(e, t) {
		var n, a = o("react-compiler-runtime").c(5), i = o("WAWebChatCollection").ChatCollection.get(e.id), l = o("WAWebLabelCollection").LabelCollection.findFirst(v), s = l != null && (t != null ? t : []).includes(l.id), u = i != null && s && o("WAWebLeadSublistGating").isChatEligibleForLeadSublist(i), c;
		a[0] !== e.id ? (c = o("WAJids").unsafeCoerceToChatJid(e.id.toString()), a[0] = e.id, a[1] = c) : c = a[1];
		var d = r("useWAWebLeadStageForChat")(c, u), m = d.stage;
		if (!u || l == null || m == null || m === o("WAWebLeadStage").LeadStage.NONE) return null;
		var p = l.id, _ = o("WAWebLeadStageNames").getLeadSublistRowLabel((n = l.name) != null ? n : "", m).toString(), f;
		return a[2] !== l || a[3] !== _ ? (f = {
			labelId: p,
			name: _
		}, a[2] = l, a[3] = _, a[4] = f) : f = a[4], f;
	}
	function v(e) {
		return e.predefinedId === o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID;
	}
	function S(e) {
		var t = o("react-compiler-runtime").c(19), n = e.contact, a = e.labels, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = o("WAWebListsGatingUtils").isListsEnabled(), t[0] = i) : i = t[0];
		var l = i, c = b(n, a), d = r("useWAWebNux")(o("WAWebNux").NUX.SMB_LISTS_INTRO), m = d[0], p = d[1], _;
		t[1] !== n.id || t[2] !== m || t[3] !== p ? (_ = function() {
			var e = o("WAWebChatCollection").ChatCollection.get(n.id);
			if (e != null) {
				if (l && o("WAWebMobilePlatforms").isSMB() && m) {
					o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebSMBListsIntroPopup.react").SMBListsIntroPopup, { onContinue: function() {
						p(), o("WAWebChatContextMenuItemEditLabel.react").checkDataSharingOrHandleLabelAction(e);
					} }));
					return;
				}
				o("WAWebChatContextMenuItemEditLabel.react").checkDataSharingOrHandleLabelAction(e);
			}
		}, t[1] = n.id, t[2] = m, t[3] = p, t[4] = _) : _ = t[4];
		var f = _, h;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (h = { className: "xlr9sxt xvvg52n xwd4zgb xq8v1ta x150mmf0 xqf2s3x x85wx34 x1ubxc9n xi52gnm" }, t[5] = h) : h = t[5];
		var y, C;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (y = u.jsx(o("WAWebFlex.react").FlexItem, {
			align: "center",
			justify: "center",
			xstyle: g.iconContainer,
			children: l ? u.jsx(o("WAWebListPeopleRefreshedIcon.react").ListPeopleRefreshedIcon, {}) : u.jsx(o("WAWebLabelOutlineIcon.react").LabelOutlineIcon, {})
		}), C = { className: "x98rzlu xeuugli" }, t[6] = y, t[7] = C) : (y = t[6], C = t[7]);
		var v;
		if (t[8] !== a || t[9] !== c) {
			var S;
			v = u.jsx("div", babelHelpers.extends({}, C, { children: ((S = a == null ? void 0 : a.length) != null ? S : 0) > 0 ? u.jsx(r("WAWebLabelsInfoDrawerLabelWell.react"), {
				labels: a,
				nameOverrideForLabelId: c,
				theme: "standalone"
			}) : u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: l ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				)
			}) })), t[8] = a, t[9] = c, t[10] = v;
		} else v = t[10];
		var R;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (R = { className: "x6s0dn4 x11g6tue x1v8p93f x16stqrj x1ejq31n x1sy0etr x972fbf x1qhh985 xv5lvn5 x1o3jo1z xstzfhl x18oe1m7 x14e42zd x10w94by xt8t1vi x1xc408v x129tdwq x15urzxu xhslqc4 x1ypdohk x78zum5 xzpcc6d xl56j7k xexx8yu xyri2b x18d9i69 x1c1uobl x1xephfl x1nsvvxn" }, t[11] = R) : R = t[11];
		var L, E;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (L = s._(
			/*BTDS*/
			""
		), E = u.jsx(r("WDSIconIcEdit.react"), {
			width: 20,
			height: 20
		}), t[12] = L, t[13] = E) : (L = t[12], E = t[13]);
		var k;
		t[14] !== f ? (k = u.jsx(o("WAWebFlex.react").FlexItem, {
			align: "center",
			justify: "center",
			xstyle: g.editButtonContainer,
			children: u.jsx("button", babelHelpers.extends({}, R, {
				onClick: f,
				"aria-label": L,
				children: E
			}))
		}), t[14] = f, t[15] = k) : k = t[15];
		var I;
		return t[16] !== k || t[17] !== v ? (I = u.jsx("div", babelHelpers.extends({}, h, { children: u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 12,
			xstyle: g.labelsRow,
			children: [
				y,
				v,
				k
			]
		}) })), t[16] = k, t[17] = v, t[18] = I) : I = t[18], I;
	}
	function R(e) {
		var t = o("react-compiler-runtime").c(8), n = e.contact, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = [o("WAWebFrontendContactGetters").getFormattedPhoneAndType], t[0] = a) : a = t[0];
		var i = o("useWAWebContactValues").useContactValues(n.id, a), l = i[0], c;
		t[1] !== l.displayName || t[2] !== l.type ? (c = l.type === o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PHONE_NUMBER && !r("isStringNullOrEmpty")(l.displayName) ? l.displayName : null, t[1] = l.displayName, t[2] = l.type, t[3] = c) : c = t[3];
		var d = c;
		if (d == null) return null;
		var m;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (m = u.jsx(r("WDSIconIcCall.react"), {
			width: 24,
			height: 24
		}), t[4] = m) : m = t[4];
		var p;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
			/*BTDS*/
			""
		), t[5] = p) : p = t[5];
		var _;
		return t[6] !== d ? (_ = u.jsx(r("WAWebBusinessProfileTextField.react"), {
			icon: m,
			editable: !1,
			label: p,
			testid: "customer_manager_customer_phone_textfield",
			value: d,
			xstyle: g.readOnlyRow
		}), t[6] = d, t[7] = _) : _ = t[7], _;
	}
	function L(e) {
		var t, n = o("react-compiler-runtime").c(9), a = e.chatJid, i = e.customerData, l = f((t = i == null ? void 0 : i.email) != null ? t : ""), c = l[0], d = l[1], m = f(i == null ? void 0 : i.email), p = m[0], _ = m[1];
		if ((i == null ? void 0 : i.email) !== p) {
			var g;
			_(i == null ? void 0 : i.email), d((g = i == null ? void 0 : i.email) != null ? g : "");
		}
		var h;
		n[0] !== a || n[1] !== i ? (h = function(t) {
			d(t), o("WAWebCustomerDataFieldSaver").saveCustomerDataField(a, i, { email: t });
		}, n[0] = a, n[1] = i, n[2] = h) : h = n[2];
		var y = h, C, b, v;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (C = u.jsx(r("WDSIconIcMail.react"), {
			width: 24,
			height: 24
		}), b = s._(
			/*BTDS*/
			""
		), v = s._(
			/*BTDS*/
			""
		), n[3] = C, n[4] = b, n[5] = v) : (C = n[3], b = n[4], v = n[5]);
		var S;
		return n[6] !== c || n[7] !== y ? (S = u.jsx(r("WAWebCustomerProfileEditableField.react"), {
			icon: C,
			label: b,
			placeholder: v,
			value: c,
			onSave: y
		}), n[6] = c, n[7] = y, n[8] = S) : S = n[8], S;
	}
	function E(e) {
		var t, n = o("react-compiler-runtime").c(9), a = e.chatJid, i = e.customerData, l = f((t = i == null ? void 0 : i.address) != null ? t : ""), c = l[0], d = l[1], m = f(i == null ? void 0 : i.address), p = m[0], _ = m[1];
		if ((i == null ? void 0 : i.address) !== p) {
			var g;
			_(i == null ? void 0 : i.address), d((g = i == null ? void 0 : i.address) != null ? g : "");
		}
		var h;
		n[0] !== a || n[1] !== i ? (h = function(t) {
			d(t), o("WAWebCustomerDataFieldSaver").saveCustomerDataField(a, i, { address: t });
		}, n[0] = a, n[1] = i, n[2] = h) : h = n[2];
		var y = h, C, b, v;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (C = u.jsx(r("WDSIconIcLocationOn.react"), {
			width: 24,
			height: 24
		}), b = s._(
			/*BTDS*/
			""
		), v = s._(
			/*BTDS*/
			""
		), n[3] = C, n[4] = b, n[5] = v) : (C = n[3], b = n[4], v = n[5]);
		var S;
		return n[6] !== c || n[7] !== y ? (S = u.jsx(r("WAWebCustomerProfileEditableField.react"), {
			icon: C,
			label: b,
			placeholder: v,
			value: c,
			onSave: y
		}), n[6] = c, n[7] = y, n[8] = S) : S = n[8], S;
	}
	function k(e) {
		var t = o("react-compiler-runtime").c(11), n = e.chatJid, a = e.customerData, i;
		t[0] !== a ? (i = (a == null ? void 0 : a.birthday) != null ? new Date(a.birthday * 1e3) : null, t[0] = a, t[1] = i) : i = t[1];
		var l = f(i), c = l[0], d = l[1], m = f(a == null ? void 0 : a.birthday), p = m[0], _ = m[1];
		(a == null ? void 0 : a.birthday) !== p && (_(a == null ? void 0 : a.birthday), d((a == null ? void 0 : a.birthday) != null ? new Date(a.birthday * 1e3) : null));
		var g;
		t[2] !== n || t[3] !== a ? (g = function(t) {
			d(t);
			var e = t != null ? o("WATimeUtils").castToUnixTime(Math.floor(t.getTime() / 1e3)) : void 0;
			o("WAWebCustomerDataFieldSaver").saveCustomerDataField(n, a, { birthday: e });
		}, t[2] = n, t[3] = a, t[4] = g) : g = t[4];
		var h = g, y, C;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (y = u.jsx(r("WDSIconIcCake.react"), {
			width: 24,
			height: 24
		}), C = s._(
			/*BTDS*/
			""
		), t[5] = y, t[6] = C) : (y = t[5], C = t[6]);
		var b;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (b = s._(
			/*BTDS*/
			""
		), t[7] = b) : b = t[7];
		var v;
		return t[8] !== c || t[9] !== h ? (v = u.jsx(r("WAWebCustomerProfileDateField.react"), {
			icon: y,
			label: C,
			monthDayOnly: !0,
			placeholder: b,
			value: c,
			onSave: h
		}), t[8] = c, t[9] = h, t[10] = v) : v = t[10], v;
	}
	function I(e) {
		return e == null ? null : o("WAWebAcquisitionSourceNames").getAcquisitionSourceDisplayName(e) != null ? e : null;
	}
	function T(e) {
		var t = o("react-compiler-runtime").c(11), n = e.chatJid, a = e.customerData, i;
		t[0] !== a ? (i = (a == null ? void 0 : a.lastOrder) != null ? new Date(a.lastOrder * 1e3) : null, t[0] = a, t[1] = i) : i = t[1];
		var l = f(i), c = l[0], d = l[1], m = f(a == null ? void 0 : a.lastOrder), p = m[0], _ = m[1];
		(a == null ? void 0 : a.lastOrder) !== p && (_(a == null ? void 0 : a.lastOrder), d((a == null ? void 0 : a.lastOrder) != null ? new Date(a.lastOrder * 1e3) : null));
		var g;
		t[2] !== n || t[3] !== a ? (g = function(t) {
			d(t);
			var e = t != null ? o("WATimeUtils").castToUnixTime(Math.floor(t.getTime() / 1e3)) : void 0;
			o("WAWebCustomerDataFieldSaver").saveCustomerDataField(n, a, { lastOrder: e });
		}, t[2] = n, t[3] = a, t[4] = g) : g = t[4];
		var h = g, y, C, b;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (y = u.jsx(r("WDSIconIcReceipt.react"), {
			width: 24,
			height: 24
		}), C = s._(
			/*BTDS*/
			""
		), b = s._(
			/*BTDS*/
			""
		), t[5] = y, t[6] = C, t[7] = b) : (y = t[5], C = t[6], b = t[7]);
		var v;
		return t[8] !== h || t[9] !== c ? (v = u.jsx(r("WAWebCustomerProfileDateField.react"), {
			icon: y,
			label: C,
			placeholder: b,
			value: c,
			onSave: h
		}), t[8] = h, t[9] = c, t[10] = v) : v = t[10], v;
	}
	function D(e) {
		var t = o("react-compiler-runtime").c(12), n = e.chatJid, a = e.customerData, i = a == null ? void 0 : a.acquisitionSource, l;
		t[0] !== i ? (l = I(i), t[0] = i, t[1] = l) : l = t[1];
		var c = f(l), d = c[0], m = c[1], p = f(a == null ? void 0 : a.acquisitionSource), _ = p[0], g = p[1];
		(a == null ? void 0 : a.acquisitionSource) !== _ && (g(a == null ? void 0 : a.acquisitionSource), m(I(a == null ? void 0 : a.acquisitionSource)));
		var h;
		t[2] !== n || t[3] !== a ? (h = function(t) {
			m(t), o("WAWebCustomerDataFieldSaver").saveCustomerDataField(n, a, { acquisitionSource: t });
		}, t[2] = n, t[3] = a, t[4] = h) : h = t[4];
		var y = h, C;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (C = o("WAWebAcquisitionSourceNames").getRegisteredAcquisitionSourceIds().map(x), t[5] = C) : C = t[5];
		var b = C, v, S, R;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (v = u.jsx(r("WDSIconIcSyncAlt.react"), {
			width: 24,
			height: 24
		}), S = s._(
			/*BTDS*/
			""
		), R = s._(
			/*BTDS*/
			""
		), t[6] = v, t[7] = S, t[8] = R) : (v = t[6], S = t[7], R = t[8]);
		var L;
		return t[9] !== y || t[10] !== d ? (L = u.jsx(r("WAWebCustomerProfileSelectField.react"), {
			icon: v,
			label: S,
			placeholder: R,
			options: b,
			testid: "customer_manager_source_select_field",
			value: d,
			onSave: y
		}), t[9] = y, t[10] = d, t[11] = L) : L = t[11], L;
	}
	function x(e) {
		var t;
		return {
			label: (t = o("WAWebAcquisitionSourceNames").getAcquisitionSourceDisplayName(e)) != null ? t : s._(
				/*BTDS*/
				""
			),
			value: e
		};
	}
	l.default = h;
}), 226);
