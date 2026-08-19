__d("WAWebBizBroadcastsSmartCSVImportAudiencesScreen.react", [
	"fbt",
	"WALogger",
	"WAWebAudienceExpressionTypes",
	"WAWebBizBroadcastsImportAudienceErrorsList.react",
	"WAWebBizBroadcastsImportLoggingUtils",
	"WAWebBizBroadcastsSmartCSVImportContactUtils",
	"WAWebBroadcastAudienceNameFieldCard.react",
	"WAWebBroadcastListAction",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebContactCollection",
	"WAWebContactImportTypedError",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WAWebInitialsFromNameUtils",
	"WAWebProfilePicThumbCollection",
	"WDSButton.react",
	"WDSIconIcDelete.react",
	"WDSIconIcError.react",
	"WDSIconIcPersonFilled.react",
	"WDSProfilePhoto.react",
	"WDSText.react",
	"countWhere",
	"getErrorSafe",
	"react",
	"react-compiler-runtime",
	"sumBy",
	"useWAWebDefaultProfileColors",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d = c || (c = o("react")), m = c, p = m.useEffect, _ = m.useRef, f = m.useState, g = 3, h = {
		contactName: {
			minWidth: "xeuugli",
			$$css: !0
		},
		drawer: {
			bottom: "x1ey2m1c",
			insetInlineEnd: "x1woyocn",
			insetInlineStart: "x1o0tod",
			left: null,
			right: null,
			minWidth: "x1iggac5",
			position: "x10l6tqk",
			width: "xh8yej3",
			$$css: !0
		},
		drawerBody: {
			backgroundColor: "x1h3rtpe",
			minHeight: "x2lwn1j",
			overflowX: "x6ikm8r",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			width: "xh8yej3",
			$$css: !0
		},
		editor: {
			backgroundColor: "x1h3rtpe",
			display: "xrvj5dj",
			flexBasis: "x1r8uery",
			flexGrow: "xpl71m0",
			flexShrink: "xs83m0k",
			gridTemplateRows: "xxq7klm",
			minHeight: "x2lwn1j",
			minWidth: "xeuugli",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		editorBody: {
			backgroundColor: "x1h3rtpe",
			boxSizing: "x9f619",
			minHeight: "x2lwn1j",
			overflowX: "x6ikm8r",
			overflowY: "x1odjw0f",
			paddingBottom: "x1y79sax",
			paddingTop: "x1h678fw",
			paddingInlineStart: "xb5ifuw",
			paddingInlineEnd: "x2owpf2",
			paddingLeft: null,
			paddingRight: null,
			width: "xh8yej3",
			$$css: !0
		},
		editorContent: {
			alignItems: "x1qjc9v5",
			boxSizing: "x9f619",
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			flexShrink: "x2lah0s",
			rowGap: "x1f0uite",
			width: "xh8yej3",
			$$css: !0
		},
		editorHeader: {
			backgroundColor: "x1280gxy",
			borderBottomColor: "x120ee7l",
			borderBottomStyle: "x1q0q8m5",
			borderBottomWidth: "xso031l",
			flexShrink: "x2lah0s",
			minWidth: "xeuugli",
			paddingTop: "x1xrf6ya",
			paddingBottom: "xscbp6u",
			paddingInlineStart: "x1phvje8",
			paddingInlineEnd: "xcldk2z",
			paddingLeft: null,
			paddingRight: null,
			width: "xh8yej3",
			$$css: !0
		},
		editorTitle: {
			minWidth: "xeuugli",
			$$css: !0
		},
		footer: {
			backgroundColor: "x1280gxy",
			borderTopColor: "xx42vgk",
			borderTopStyle: "x13fuv20",
			borderTopWidth: "x178xt8z",
			boxSizing: "x9f619",
			flexShrink: "x2lah0s",
			paddingTop: "x1xrf6ya",
			paddingBottom: "xscbp6u",
			paddingInlineStart: "xb5ifuw",
			paddingInlineEnd: "x2owpf2",
			paddingLeft: null,
			paddingRight: null,
			rowGap: "x1qvou4u",
			$$css: !0
		},
		footerContent: {
			width: "xh8yej3",
			$$css: !0
		},
		importLayout: {
			display: "x78zum5",
			flexBasis: "x1r8uery",
			flexGrow: "x1iyjqo2",
			flexShrink: "xs83m0k",
			height: "x5yr21d",
			minHeight: "x2lwn1j",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			width: "xh8yej3",
			$$css: !0
		},
		listItem: {
			backgroundColor: "x1280gxy",
			borderStartStartRadius: "xrxyp3c",
			borderStartEndRadius: "xv0oops",
			borderEndEndRadius: "x1isl5vh",
			borderEndStartRadius: "xn8zj9a",
			borderTopStyle: "x1ejq31n",
			borderInlineEndStyle: "x18oe1m7",
			borderBottomStyle: "x1sy0etr",
			borderInlineStartStyle: "xstzfhl",
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "x1qhh985",
			borderInlineStartWidth: "x14e42zd",
			boxSizing: "x9f619",
			cursor: "x1ypdohk",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			textAlign: "x1yc453h",
			width: "xh8yej3",
			$$css: !0
		},
		listItemContent: {
			columnGap: "x1s70e7g",
			minWidth: "xeuugli",
			width: "xh8yej3",
			$$css: !0
		},
		listItemErrorIcon: {
			flexShrink: "x2lah0s",
			$$css: !0
		},
		listItemSelected: {
			backgroundColor: "x1h3rtpe",
			$$css: !0
		},
		listItemText: {
			flexBasis: "x1r8uery",
			flexGrow: "x1iyjqo2",
			flexShrink: "xs83m0k",
			minWidth: "xeuugli",
			$$css: !0
		},
		navList: {
			flexBasis: "x1r8uery",
			flexGrow: "x1iyjqo2",
			flexShrink: "xs83m0k",
			minHeight: "x2lwn1j",
			overflowX: "x6ikm8r",
			overflowY: "x1odjw0f",
			paddingTop: "xexx8yu",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1iw51ew",
			paddingInlineEnd: "xde1mab",
			paddingLeft: null,
			paddingRight: null,
			rowGap: "x129bwdz",
			$$css: !0
		},
		navPane: {
			backgroundColor: "x1280gxy",
			borderInlineEndColor: "xbogo7e",
			borderInlineEndStyle: "x18b5jzi",
			borderInlineEndWidth: "x1lun4ml",
			flexBasis: "x1r8uery",
			flexGrow: "x1iyjqo2",
			flexShrink: "xs83m0k",
			height: "x5yr21d",
			minHeight: "x2lwn1j",
			minWidth: "xeuugli",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			zIndex: "x1vjfegm",
			$$css: !0
		},
		recipientsCard: {
			backgroundColor: "x1280gxy",
			borderStartStartRadius: "xlr9sxt",
			borderStartEndRadius: "xvvg52n",
			borderEndEndRadius: "xwd4zgb",
			borderEndStartRadius: "xq8v1ta",
			boxSizing: "x9f619",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			paddingTop: "x1p57kb1",
			paddingInlineEnd: "xvtqlqk",
			paddingBottom: "xvpt6g3",
			paddingInlineStart: "xdx6fka",
			width: "xh8yej3",
			$$css: !0
		},
		recipientsCountCell: {
			paddingBottom: "xvpt6g3",
			textAlign: "x1yc453h",
			$$css: !0
		},
		table: {
			borderCollapse: "x1mwwwfo",
			tableLayout: "x140o2bo",
			width: "xh8yej3",
			$$css: !0
		},
		tableActionColumn: {
			width: "xa66mkm",
			$$css: !0
		},
		tableActionContent: {
			alignItems: "x6s0dn4",
			display: "x78zum5",
			justifyContent: "x13a6bvl",
			width: "xh8yej3",
			$$css: !0
		},
		tableActions: {
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			textAlign: "xp4054r",
			verticalAlign: "xxymvpz",
			whiteSpace: "xuxw1ft",
			$$css: !0
		},
		tableContact: {
			maxWidth: "x1m189uc",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			paddingInlineEnd: "xvtqlqk",
			textAlign: "x1yc453h",
			verticalAlign: "xxymvpz",
			$$css: !0
		},
		tableContactColumn: {
			width: "x1iy3nof",
			$$css: !0
		},
		tableContactContent: {
			alignItems: "x6s0dn4",
			columnGap: "x1aj3ljl",
			minWidth: "xeuugli",
			$$css: !0
		},
		tablePhone: {
			maxWidth: "x1m189uc",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			paddingInlineEnd: "xvtqlqk",
			textAlign: "x1yc453h",
			textOverflow: "xlyipyv",
			verticalAlign: "xxymvpz",
			$$css: !0
		}
	};
	function y(t) {
		var n, a = o("react-compiler-runtime").c(53), i = t.audiences, l = t.entryPoint, u = t.importLoggingContext, c = t.onClose, m = t.onCreateAudiencesSuccess, g = t.ref, y = f(i), E = y[0], T = y[1], D = _(i), x = f(0), $ = x[0], A = x[1], O = f("idle"), B = O[0], W = O[1], q = _("idle"), U = f(null), V = U[0], H = U[1], G;
		a[0] === Symbol.for("react.memo_cache_sentinel") ? (G = [], a[0] = G) : G = a[0];
		var z = f(G), j = z[0], K = z[1], Q;
		a[1] !== E.length || a[2] !== $ ? (Q = R($, E.length), a[1] = E.length, a[2] = $, a[3] = Q) : Q = a[3];
		var X = Q, Y = (n = E[X]) != null ? n : null, J = B === "saving", Z;
		a[4] !== E || a[5] !== B ? (Z = B !== "idle" || E.length === 0 || E.some(b), a[4] = E, a[5] = B, a[6] = Z) : Z = a[6];
		var ee = Z, te, ne;
		a[7] !== l || a[8] !== u ? (te = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importedContactWizardViewed(k(D.current, babelHelpers.extends({}, o("WAWebBizBroadcastsImportLoggingUtils").getImportAudienceMetadataLoggingExtraAttributes(u, {
				audienceCount: D.current.length,
				importedRowCount: L(D.current),
				isMultiAudience: !0
			}))), l);
		}, ne = [l, u], a[7] = l, a[8] = u, a[9] = te, a[10] = ne) : (te = a[9], ne = a[10]), p(te, ne);
		var re, oe, ae, ie, le, se;
		if (a[11] !== l || a[12] !== u || a[13] !== ee || a[14] !== c || a[15] !== m || a[16] !== j) {
			var ue = function(t) {
				de(t(D.current));
			}, ce = function(t) {
				var e = t(D.current);
				if (e.length === 0) {
					de(e), c();
					return;
				}
				de(e);
			}, de = function(t, n) {
				D.current = t, T(t), A(function(e) {
					return R(n != null ? n : e, t.length);
				});
			};
			ie = function(t, n) {
				ue(function(e) {
					return e.map(function(e, r) {
						return r === t ? babelHelpers.extends({}, e, { name: n }) : e;
					});
				});
			}, oe = function(t, n) {
				ue(function(e) {
					return e.map(function(e, r) {
						return r === t ? babelHelpers.extends({}, e, { contacts: e.contacts.filter(function(e) {
							return e.rowIndex !== n.rowIndex;
						}) }) : e;
					});
				});
			}, re = function(t) {
				ce(function(e) {
					return v(e, t, C);
				});
			}, ae = function(t, n) {
				ce(function(e) {
					return v(e, t, function(e) {
						var t, r = S((t = e.errorList) != null ? t : [], n);
						return e.contacts.length === 0 && r.length === 0 ? null : babelHelpers.extends({}, e, { errorList: r });
					});
				});
			}, se = function(t, n, r) {
				ue(function(e) {
					return e.map(function(e, o) {
						var a;
						return o !== t ? e : babelHelpers.extends({}, e, {
							contacts: I(e.contacts, r),
							errorList: S((a = e.errorList) != null ? a : [], n)
						});
					});
				});
			}, le = function() {
				if (!(ee || q.current !== "idle")) {
					q.current = "saving", W("saving"), H(null);
					var t = o("WAWebBizBroadcastsImportLoggingUtils").getImportAudienceLoggingExtraAttributes(u), n = L(D.current), a = D.current.length, i = o("WAWebBizBroadcastsImportLoggingUtils").getImportAudienceSuccessLoggingExtraAttributes(u, {
						audienceCount: a,
						importedRowCount: n,
						isMultiAudience: !0
					});
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importedContactsSaveClicked(k(D.current, i), l), F(D.current).then(function(e) {
						var r = e.failedAudiences, u = e.savedAudiences, c = [].concat(j, u), d = r.length, p = L(r);
						if (r.length === 0) {
							o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceSaveResult(n, "success", void 0, l, i), q.current = "completed", W("completed"), m(c);
							return;
						}
						o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceSaveResult(n, "failure", "partial_failure", l, babelHelpers.extends({}, t, {
							audience_count: a,
							failed_audience_count: d,
							failed_contact_count: p,
							is_multi_audience: !0
						})), K(c), de(r, 0), q.current = "idle", W("idle"), H(s._(
							/*BTDS*/
							""
						));
					}, function(i) {
						o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to save smart-import segmented audiences"]))).catching(r("getErrorSafe")(i)).sendLogs("business-broadcast-smart-import-segment-save-failed"), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceSaveResult(n, "failure", "unexpected", l, babelHelpers.extends({}, t, {
							audience_count: a,
							is_multi_audience: !0
						})), q.current = "idle", W("idle"), H(s._(
							/*BTDS*/
							""
						));
					});
				}
			}, a[11] = l, a[12] = u, a[13] = ee, a[14] = c, a[15] = m, a[16] = j, a[17] = re, a[18] = oe, a[19] = ae, a[20] = ie, a[21] = le, a[22] = se;
		} else re = a[17], oe = a[18], ae = a[19], ie = a[20], le = a[21], se = a[22];
		var me;
		a[23] === Symbol.for("react.memo_cache_sentinel") ? (me = { className: "x78zum5 x1r8uery x1iyjqo2 xs83m0k x5yr21d x2lwn1j x6ikm8r x10wlt62 xh8yej3" }, a[23] = me) : me = a[23];
		var pe;
		a[24] !== E || a[25] !== l || a[26] !== u || a[27] !== c ? (pe = function() {
			var e = u == null ? null : o("WAWebBizBroadcastsImportLoggingUtils").getImportAudienceCancelLoggingExtraAttributes(o("WAWebBizBroadcastsImportLoggingUtils").ImportAudienceCancelPhase.IMPORT_REVIEW, u, null, {
				audienceCount: E.length,
				importedRowCount: L(E),
				isMultiAudience: !0
			});
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importedContactWizardCancelClicked(l, e), c();
		}, a[24] = E, a[25] = l, a[26] = u, a[27] = c, a[28] = pe) : pe = a[28];
		var _e;
		a[29] !== E || a[30] !== X || a[31] !== pe ? (_e = d.jsx(M, {
			drafts: E,
			onBack: pe,
			onSelect: A,
			selectedIndex: X
		}), a[29] = E, a[30] = X, a[31] = pe, a[32] = _e) : _e = a[32];
		var fe;
		a[33] !== E.length || a[34] !== l || a[35] !== re || a[36] !== oe || a[37] !== ae || a[38] !== ie || a[39] !== le || a[40] !== se || a[41] !== ee || a[42] !== J || a[43] !== V || a[44] !== Y || a[45] !== X ? (fe = Y != null ? d.jsxs("div", {
			className: "x1h3rtpe xrvj5dj x1r8uery xpl71m0 xs83m0k xxq7klm x2lwn1j xeuugli x6ikm8r x10wlt62",
			children: [
				d.jsx(o("WAWebFlex.react").FlexRow, {
					align: "center",
					xstyle: h.editorHeader,
					children: d.jsx(r("WDSText.react"), {
						type: "Body1Emphasized",
						colorName: "contentDefault",
						maxLines: 1,
						xstyle: h.editorTitle,
						testid: "biz-broadcasts-import-audiences-editor-title",
						children: Y.name
					})
				}),
				d.jsx("div", {
					className: "x1h3rtpe x9f619 x2lwn1j x6ikm8r x1odjw0f x1y79sax x1h678fw xb5ifuw x2owpf2 xh8yej3",
					children: d.jsxs("div", {
						className: "x1qjc9v5 x9f619 x78zum5 xdt5ytf x2lah0s x1f0uite xh8yej3",
						children: [
							d.jsx(r("WAWebBroadcastAudienceNameFieldCard.react"), {
								value: Y.name,
								floatingLabel: !1,
								onValueChange: function(t) {
									return ie(X, t);
								},
								testid: "biz-broadcasts-import-audiences-name-input-" + X
							}),
							d.jsx(P, {
								draft: Y,
								entryPoint: l,
								onDeleteAllErrors: function() {
									return re(X);
								},
								onDeleteError: function(t) {
									return ae(X, t);
								},
								onUpdateError: function(t, n) {
									return se(X, t, n);
								}
							}),
							d.jsx(w, {
								draft: Y,
								index: X,
								onDeleteContact: function(t) {
									return oe(X, t);
								}
							})
						]
					})
				}),
				d.jsx(N, {
					draftsCount: E.length,
					isSaveDisabled: ee,
					isSaving: J,
					onSave: le,
					saveError: V
				})
			]
		}) : null, a[33] = E.length, a[34] = l, a[35] = re, a[36] = oe, a[37] = ae, a[38] = ie, a[39] = le, a[40] = se, a[41] = ee, a[42] = J, a[43] = V, a[44] = Y, a[45] = X, a[46] = fe) : fe = a[46];
		var ge;
		a[47] !== _e || a[48] !== fe ? (ge = d.jsx(r("WAWebDrawerBody.react"), {
			isRefresh: !0,
			overflow: "hidden",
			xstyle: h.drawerBody,
			children: d.jsxs("div", babelHelpers.extends({}, me, { children: [_e, fe] }))
		}), a[47] = _e, a[48] = fe, a[49] = ge) : ge = a[49];
		var he;
		return a[50] !== g || a[51] !== ge ? (he = d.jsx(r("WAWebDrawer.react"), {
			ref: g,
			xstyle: h.drawer,
			children: ge
		}), a[50] = g, a[51] = ge, a[52] = he) : he = a[52], he;
	}
	function C(e) {
		return e.contacts.length === 0 ? null : babelHelpers.extends({}, e, { errorList: [] });
	}
	function b(e) {
		var t, n;
		return e.name.trim() === "" || e.contacts.length === 0 || ((t = (n = e.errorList) == null ? void 0 : n.length) != null ? t : 0) > 0;
	}
	function v(e, t, n) {
		var r = e[t];
		if (r == null) return e;
		var o = n(r);
		return o == null ? e.filter(function(e, n) {
			return n !== t;
		}) : e.map(function(e, n) {
			return n === t ? o : e;
		});
	}
	function S(e, t) {
		var n = e.findIndex(function(e) {
			return e === t;
		});
		return n === -1 ? e : [].concat(e.slice(0, n), e.slice(n + 1));
	}
	function R(e, t) {
		return t === 0 ? 0 : Math.min(e, t - 1);
	}
	function L(e) {
		return r("sumBy")(e, function(e) {
			return e.contacts.length;
		});
	}
	function E(e) {
		return e.flatMap(function(e) {
			var t;
			return (t = e.errorList) != null ? t : [];
		});
	}
	function k(e, t) {
		var n = E(e), a = L(e);
		return babelHelpers.extends({}, t, {
			num_duplicate_contacts: r("countWhere")(n, function(e) {
				return e.errorType === o("WAWebContactImportTypedError").PhoneError.DUPLICATE;
			}),
			num_error_contacts: n.length,
			num_invalid_contacts: r("countWhere")(n, function(e) {
				return e.errorType === o("WAWebContactImportTypedError").PhoneError.INVALID;
			}),
			num_non_wa_contacts: r("countWhere")(n, function(e) {
				return e.errorType === o("WAWebContactImportTypedError").PhoneError.NOT_WHATSAPP_USER;
			}),
			num_total_contacts: a + n.length
		});
	}
	function I(e, t) {
		return [].concat(e, [t]).sort(function(e, t) {
			return e.rowIndex - t.rowIndex;
		});
	}
	function T(e) {
		return e.lid == null ? null : o("WAWebContactCollection").ContactCollection.get(e.lid);
	}
	function D(e, t) {
		return t == null ? o("WAWebBizBroadcastsSmartCSVImportContactUtils").formatSmartCSVImportContactName(e) : o("WAWebFrontendContactGetters").getDisplayName(t);
	}
	function x(e) {
		var t = o("WAWebInitialsFromNameUtils").getInitialsFromContact(e);
		return [t.firstInitial, t.secondInitial].filter(Boolean).join("");
	}
	function $(e) {
		var t = e.height, n = e.width;
		return d.jsx(r("WDSIconIcPersonFilled.react"), {
			"aria-hidden": !0,
			height: t,
			width: n
		});
	}
	$.displayName = $.name + " [from " + i.id + "]";
	function P(e) {
		var t = o("react-compiler-runtime").c(11), n = e.draft, a = e.entryPoint, i = e.onDeleteAllErrors, l = e.onDeleteError, s = e.onUpdateError, u;
		if (t[0] !== n.errorList) {
			var c;
			u = (c = n.errorList) != null ? c : [], t[0] = n.errorList, t[1] = u;
		} else u = t[1];
		var m = u;
		if (m.length === 0) return null;
		var p;
		t[2] !== s ? (p = function(t, n, r) {
			s(t, babelHelpers.extends({}, n, { rowIndex: t.rowIndex }));
		}, t[2] = s, t[3] = p) : p = t[3];
		var _;
		return t[4] !== n.contacts || t[5] !== a || t[6] !== m || t[7] !== i || t[8] !== l || t[9] !== p ? (_ = d.jsx(r("WAWebBizBroadcastsImportAudienceErrorsList.react"), {
			contacts: n.contacts,
			entryPoint: a,
			errorList: m,
			onDeleteAllErrorItems: i,
			onDeleteErrorItem: l,
			onUpdateContact: p
		}), t[4] = n.contacts, t[5] = a, t[6] = m, t[7] = i, t[8] = l, t[9] = p, t[10] = _) : _ = t[10], _;
	}
	function N(e) {
		var t = o("react-compiler-runtime").c(12), n = e.draftsCount, a = e.isSaveDisabled, i = e.isSaving, l = e.onSave, u = e.saveError, c;
		t[0] !== u ? (c = u != null ? d.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: "secondaryNegativeEmphasized",
			testid: "biz-broadcasts-import-audiences-save-error",
			children: u
		}) : null, t[0] = u, t[1] = c) : c = t[1];
		var m;
		t[2] !== n || t[3] !== i ? (m = i ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			"",
			[s._plural(n, "number")]
		), t[2] = n, t[3] = i, t[4] = m) : m = t[4];
		var p;
		t[5] !== a || t[6] !== l || t[7] !== m ? (p = d.jsx(o("WAWebFlex.react").FlexRow, {
			align: "end",
			justify: "end",
			children: d.jsx(r("WDSButton.react"), {
				disabled: a,
				label: m,
				onPress: l,
				testid: "biz-broadcasts-import-audiences-save-button",
				variant: "filled"
			})
		}), t[5] = a, t[6] = l, t[7] = m, t[8] = p) : p = t[8];
		var _;
		return t[9] !== c || t[10] !== p ? (_ = d.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: h.footer,
			children: d.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				xstyle: h.footerContent,
				children: [c, p]
			})
		}), t[9] = c, t[10] = p, t[11] = _) : _ = t[11], _;
	}
	function M(e) {
		var t = o("react-compiler-runtime").c(15), n = e.drafts, a = e.onBack, i = e.onSelect, l = e.selectedIndex, u;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (u = s._(
			/*BTDS*/
			""
		), t[0] = u) : u = t[0];
		var c;
		t[1] !== a ? (c = d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			testid: "biz-broadcasts-import-audiences-drawer-header",
			title: u,
			onBack: a,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			focusBackOrCancel: !0
		}), t[1] = a, t[2] = c) : c = t[2];
		var m;
		if (t[3] !== n || t[4] !== i || t[5] !== l) {
			var p;
			t[7] !== i || t[8] !== l ? (p = function(t, n) {
				var e, a, u = ((e = (a = t.errorList) == null ? void 0 : a.length) != null ? e : 0) > 0;
				return d.jsx("button", babelHelpers.extends({}, {
					0: { className: "x1280gxy xrxyp3c xv0oops x1isl5vh xn8zj9a x1ejq31n x18oe1m7 x1sy0etr xstzfhl x972fbf x10w94by x1qhh985 x14e42zd x9f619 x1ypdohk x6ikm8r x10wlt62 x16ovd2e x12xbjc7 xdx6fka xvtqlqk x1yc453h xh8yej3" },
					1: { className: "xrxyp3c xv0oops x1isl5vh xn8zj9a x1ejq31n x18oe1m7 x1sy0etr xstzfhl x972fbf x10w94by x1qhh985 x14e42zd x9f619 x1ypdohk x6ikm8r x10wlt62 x16ovd2e x12xbjc7 xdx6fka xvtqlqk x1yc453h xh8yej3 x1h3rtpe" }
				}[(n === l) << 0], {
					type: "button",
					onClick: function() {
						return i(n);
					},
					"data-testid": "biz-broadcasts-import-audiences-list-item-" + n,
					children: d.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						justify: "all",
						xstyle: h.listItemContent,
						children: [d.jsxs(o("WAWebFlex.react").FlexColumn, {
							align: "stretch",
							xstyle: h.listItemText,
							children: [d.jsx(r("WDSText.react"), {
								type: "Body2Emphasized",
								colorName: "contentDefault",
								maxLines: 1,
								children: t.name
							}), d.jsx(r("WDSText.react"), {
								type: "Body3",
								colorName: "contentDeemphasized",
								maxLines: 1,
								children: s._(
									/*BTDS*/
									"",
									[s._plural(t.contacts.length, "number")]
								)
							})]
						}), u ? d.jsx(r("WDSIconIcError.react"), {
							"aria-label": s._(
								/*BTDS*/
								""
							),
							colorName: "secondaryNegative",
							height: 20,
							testid: "biz-broadcasts-import-audiences-error-indicator-" + n,
							width: 20,
							xstyle: h.listItemErrorIcon
						}) : null]
					})
				}), n);
			}, t[7] = i, t[8] = l, t[9] = p) : p = t[9], m = n.map(p), t[3] = n, t[4] = i, t[5] = l, t[6] = m;
		} else m = t[6];
		var _;
		t[10] !== m ? (_ = d.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: h.navList,
			children: m
		}), t[10] = m, t[11] = _) : _ = t[11];
		var f;
		return t[12] !== c || t[13] !== _ ? (f = d.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: h.navPane,
			children: [c, _]
		}), t[12] = c, t[13] = _, t[14] = f) : f = t[14], f;
	}
	function w(e) {
		var t = o("react-compiler-runtime").c(24), n = e.draft, a = e.index, i = e.onDeleteContact, l = "biz-broadcasts-import-audiences-card-" + a, u, c;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (u = { className: "x1mwwwfo x140o2bo xh8yej3" }, c = d.jsxs("colgroup", { children: [
			d.jsx("col", { className: "x1iy3nof" }),
			d.jsx("col", {}),
			d.jsx("col", { className: "xa66mkm" })
		] }), t[0] = u, t[1] = c) : (u = t[0], c = t[1]);
		var m;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (m = { className: "xvpt6g3 x1yc453h" }, t[2] = m) : m = t[2];
		var p;
		t[3] !== n.contacts.length ? (p = d.jsx("tr", { children: d.jsx("th", babelHelpers.extends({ colSpan: g }, m, { children: d.jsx(r("WDSText.react"), {
			type: "Body1Emphasized",
			colorName: "contentDefault",
			children: s._(
				/*BTDS*/
				"",
				[s._plural(n.contacts.length, "number")]
			)
		}) })) }), t[3] = n.contacts.length, t[4] = p) : p = t[4];
		var _;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (_ = { className: "x1m189uc x6ikm8r x10wlt62 x16ovd2e x12xbjc7 xvtqlqk x1yc453h xxymvpz" }, t[5] = _) : _ = t[5];
		var f, y;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (f = d.jsx("th", babelHelpers.extends({}, _, { children: d.jsx(r("WDSText.react"), {
			type: "Body3Emphasized",
			colorName: "contentDeemphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}) })), y = { className: "x1m189uc x6ikm8r x10wlt62 x16ovd2e x12xbjc7 xvtqlqk x1yc453h xlyipyv xxymvpz" }, t[6] = f, t[7] = y) : (f = t[6], y = t[7]);
		var C;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (C = d.jsxs("tr", { children: [
			f,
			d.jsx("th", babelHelpers.extends({}, y, { children: d.jsx(r("WDSText.react"), {
				type: "Body3Emphasized",
				colorName: "contentDeemphasized",
				children: s._(
					/*BTDS*/
					""
				)
			}) })),
			d.jsx("th", { className: "x16ovd2e x12xbjc7 xp4054r xxymvpz xuxw1ft" })
		] }), t[8] = C) : C = t[8];
		var b;
		t[9] !== p ? (b = d.jsxs("thead", { children: [p, C] }), t[9] = p, t[10] = b) : b = t[10];
		var v;
		if (t[11] !== n.contacts || t[12] !== i) {
			var S;
			t[14] !== i ? (S = function(t, n) {
				return d.jsxs("tr", { children: [
					d.jsx("td", {
						className: "x1m189uc x6ikm8r x10wlt62 x16ovd2e x12xbjc7 xvtqlqk x1yc453h xxymvpz",
						children: d.jsx(A, {
							contact: t,
							contactIndex: n
						})
					}),
					d.jsx("td", {
						className: "x1m189uc x6ikm8r x10wlt62 x16ovd2e x12xbjc7 xvtqlqk x1yc453h xlyipyv xxymvpz",
						children: d.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDefault",
							maxLines: 1,
							children: t.phone
						})
					}),
					d.jsx("td", {
						className: "x16ovd2e x12xbjc7 xp4054r xxymvpz xuxw1ft",
						children: d.jsx("div", {
							className: "x6s0dn4 x78zum5 x13a6bvl xh8yej3",
							children: d.jsx(r("WDSButton.react"), {
								Icon: r("WDSIconIcDelete.react"),
								"aria-label": s._(
									/*BTDS*/
									""
								),
								onPress: function() {
									return i(t);
								},
								size: "small",
								testid: "biz-broadcasts-import-audiences-delete-contact-" + n,
								variant: "borderless"
							})
						})
					})
				] }, t.rowIndex + ":" + t.phone);
			}, t[14] = i, t[15] = S) : S = t[15], v = n.contacts.map(S), t[11] = n.contacts, t[12] = i, t[13] = v;
		} else v = t[13];
		var R;
		t[16] !== v ? (R = d.jsx("tbody", { children: v }), t[16] = v, t[17] = R) : R = t[17];
		var L;
		t[18] !== b || t[19] !== R ? (L = d.jsxs("table", babelHelpers.extends({}, u, { children: [
			c,
			b,
			R
		] })), t[18] = b, t[19] = R, t[20] = L) : L = t[20];
		var E;
		return t[21] !== l || t[22] !== L ? (E = d.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: h.recipientsCard,
			testid: l,
			children: L
		}), t[21] = l, t[22] = L, t[23] = E) : E = t[23], E;
	}
	function A(e) {
		var t, n = o("react-compiler-runtime").c(17), a = e.contact, i = e.contactIndex, l = T(a), s = D(a, l), u = (t = l == null ? void 0 : l.id) != null ? t : null, c = u == null ? null : o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(u), m;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (m = ["img"], n[0] = m) : m = n[0];
		var p = o("useWAWebModelValues").useOptionalModelValues(c, m), _ = l == null ? void 0 : x(l), f = o("WAWebFlex.react").FlexRow, g = h, y = r("WDSProfilePhoto.react"), C = "person", b = p == null ? void 0 : p.img, v = "extraSmall", S = u == null ? "gray" : o("useWAWebDefaultProfileColors").getWDSProfilePhotoColor(u), R = u == null ? void 0 : o("useWAWebDefaultProfileColors").getWDSProfilePhotoCustomColor(u), L = u == null ? $ : o("useWAWebDefaultProfileColors").getProfilePhotoPlaceholderIcon(u), E;
		n[1] !== y || n[2] !== s || n[3] !== _ || n[4] !== b || n[5] !== S || n[6] !== R || n[7] !== L ? (E = d.jsx(y, {
			type: C,
			name: s,
			src: b,
			size: v,
			color: S,
			customColor: R,
			placeholderIcon: L,
			isDecorative: !0,
			initials: _
		}), n[1] = y, n[2] = s, n[3] = _, n[4] = b, n[5] = S, n[6] = R, n[7] = L, n[8] = E) : E = n[8];
		var k = "biz-broadcasts-import-audiences-contact-name-" + i, I;
		n[9] !== s || n[10] !== k ? (I = d.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDefault",
			maxLines: 1,
			xstyle: h.contactName,
			testid: k,
			children: s
		}), n[9] = s, n[10] = k, n[11] = I) : I = n[11];
		var P;
		return n[12] !== f || n[13] !== I || n[14] !== g.tableContactContent || n[15] !== E ? (P = d.jsxs(f, {
			xstyle: g.tableContactContent,
			children: [E, I]
		}), n[12] = f, n[13] = I, n[14] = g.tableContactContent, n[15] = E, n[16] = P) : P = n[16], P;
	}
	async function F(e) {
		var t = [], n = [];
		return await e.reduce(async function(e, a) {
			return await e, O(a).then(function(e) {
				n.push(e);
			}).catch(function(e) {
				t.push(a), o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Failed to save smart-import audience"]))).catching(r("getErrorSafe")(e)).sendLogs("business-broadcast-smart-import-segment-save-failed");
			});
		}, Promise.resolve()), {
			failedAudiences: t,
			savedAudiences: n
		};
	}
	async function O(e) {
		var t = e.contacts.map(B), n = e.name.trim(), r = await o("WAWebBroadcastListAction").createBroadcastListAction({
			broadcastListName: n,
			contacts: t
		});
		return {
			audienceExpression: o("WAWebAudienceExpressionTypes").DEFAULT_AUDIENCE_EXPRESSION,
			broadcastJid: r,
			lastBroadcastTimestamp: null,
			name: n,
			recipientCount: t.length
		};
	}
	function B(e) {
		var t;
		return {
			lid: (t = e.lid) == null ? void 0 : t.toString(),
			phone: e.phone
		};
	}
	l.default = y;
}), 226);
