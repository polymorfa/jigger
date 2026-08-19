__d("WAWebBizBroadcastsSmartCSVImportAudiencesScreen.react", [
	"fbt",
	"Promise",
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
	"asyncToGeneratorRuntime",
	"countWhere",
	"getErrorSafe",
	"react",
	"sumBy",
	"useWAWebDefaultProfileColors",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m = d || (d = o("react")), p = d, _ = p.useEffect, f = p.useRef, g = p.useState, h = 3, y = {
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
		tableContactContent: {
			alignItems: "x6s0dn4",
			columnGap: "x1aj3ljl",
			minWidth: "xeuugli",
			$$css: !0
		}
	};
	function C(t) {
		var n, a = t.audiences, i = t.entryPoint, l = t.importLoggingContext, u = t.onClose, c = t.onCreateAudiencesSuccess, d = t.ref, p = g(a), h = p[0], C = p[1], L = f(a), I = g(0), T = I[0], D = I[1], x = g("idle"), w = x[0], F = x[1], O = f("idle"), B = g(null), W = B[0], q = B[1], U = g([]), V = U[0], H = U[1], G = S(T, h.length), z = (n = h[G]) != null ? n : null, j = w === "saving", K = w !== "idle" || h.length === 0 || h.some(function(e) {
			var t, n;
			return e.name.trim() === "" || e.contacts.length === 0 || ((t = (n = e.errorList) == null ? void 0 : n.length) != null ? t : 0) > 0;
		});
		_(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importedContactWizardViewed(E(L.current, babelHelpers.extends({}, o("WAWebBizBroadcastsImportLoggingUtils").getImportAudienceMetadataLoggingExtraAttributes(l, {
				audienceCount: L.current.length,
				importedRowCount: R(L.current),
				isMultiAudience: !0
			}))), i);
		}, [i, l]);
		function Q(e, t) {
			te(function(n) {
				return n.map(function(n, r) {
					return r === e ? babelHelpers.extends({}, n, { name: t }) : n;
				});
			});
		}
		function X(e, t) {
			te(function(n) {
				return n.map(function(n, r) {
					return r === e ? babelHelpers.extends({}, n, { contacts: n.contacts.filter(function(e) {
						return e.rowIndex !== t.rowIndex;
					}) }) : n;
				});
			});
		}
		function Y(e) {
			ne(function(t) {
				return b(t, e, function(e) {
					return e.contacts.length === 0 ? null : babelHelpers.extends({}, e, { errorList: [] });
				});
			});
		}
		function J(e, t) {
			ne(function(n) {
				return b(n, e, function(e) {
					var n, r = v((n = e.errorList) != null ? n : [], t);
					return e.contacts.length === 0 && r.length === 0 ? null : babelHelpers.extends({}, e, { errorList: r });
				});
			});
		}
		function Z(e, t, n) {
			te(function(r) {
				return r.map(function(r, o) {
					var a;
					return o !== e ? r : babelHelpers.extends({}, r, {
						contacts: k(r.contacts, n),
						errorList: v((a = r.errorList) != null ? a : [], t)
					});
				});
			});
		}
		function ee() {
			if (!(K || O.current !== "idle")) {
				O.current = "saving", F("saving"), q(null);
				var t = o("WAWebBizBroadcastsImportLoggingUtils").getImportAudienceLoggingExtraAttributes(l), n = R(L.current), a = L.current.length, u = o("WAWebBizBroadcastsImportLoggingUtils").getImportAudienceSuccessLoggingExtraAttributes(l, {
					audienceCount: a,
					importedRowCount: n,
					isMultiAudience: !0
				});
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importedContactsSaveClicked(E(L.current, u), i), A(L.current).then(function(e) {
					var r = e.failedAudiences, l = e.savedAudiences, d = [].concat(V, l), m = r.length, p = R(r);
					if (r.length === 0) {
						o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceSaveResult(n, "success", void 0, i, u), O.current = "completed", F("completed"), c(d);
						return;
					}
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceSaveResult(n, "failure", "partial_failure", i, babelHelpers.extends({}, t, {
						audience_count: a,
						failed_audience_count: m,
						failed_contact_count: p,
						is_multi_audience: !0
					})), H(d), re(r, 0), O.current = "idle", F("idle"), q(s._(
						/*BTDS*/
						""
					));
				}, function(l) {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to save smart-import segmented audiences"]))).catching(r("getErrorSafe")(l)).sendLogs("business-broadcast-smart-import-segment-save-failed"), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceSaveResult(n, "failure", "unexpected", i, babelHelpers.extends({}, t, {
						audience_count: a,
						is_multi_audience: !0
					})), O.current = "idle", F("idle"), q(s._(
						/*BTDS*/
						""
					));
				});
			}
		}
		function te(e) {
			re(e(L.current));
		}
		function ne(e) {
			var t = e(L.current);
			if (t.length === 0) {
				re(t), u();
				return;
			}
			re(t);
		}
		function re(e, t) {
			L.current = e, C(e), D(function(n) {
				return S(t != null ? t : n, e.length);
			});
		}
		return m.jsx(r("WAWebDrawer.react"), {
			ref: d,
			xstyle: y.drawer,
			children: m.jsx(r("WAWebDrawerBody.react"), {
				isRefresh: !0,
				overflow: "hidden",
				xstyle: y.drawerBody,
				children: m.jsxs("div", {
					className: "x78zum5 x1r8uery x1iyjqo2 xs83m0k x5yr21d x2lwn1j x6ikm8r x10wlt62 xh8yej3",
					children: [m.jsx(N, {
						drafts: h,
						onBack: function() {
							var e = l == null ? null : o("WAWebBizBroadcastsImportLoggingUtils").getImportAudienceCancelLoggingExtraAttributes(o("WAWebBizBroadcastsImportLoggingUtils").ImportAudienceCancelPhase.IMPORT_REVIEW, l, null, {
								audienceCount: h.length,
								importedRowCount: R(h),
								isMultiAudience: !0
							});
							o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importedContactWizardCancelClicked(i, e), u();
						},
						onSelect: D,
						selectedIndex: G
					}), z != null ? m.jsxs("div", {
						className: "x1h3rtpe xrvj5dj x1r8uery xpl71m0 xs83m0k xxq7klm x2lwn1j xeuugli x6ikm8r x10wlt62",
						children: [
							m.jsx(o("WAWebFlex.react").FlexRow, {
								align: "center",
								xstyle: y.editorHeader,
								children: m.jsx(r("WDSText.react"), {
									type: "Body1Emphasized",
									colorName: "contentDefault",
									maxLines: 1,
									xstyle: y.editorTitle,
									testid: "biz-broadcasts-import-audiences-editor-title",
									children: z.name
								})
							}),
							m.jsx("div", {
								className: "x1h3rtpe x9f619 x2lwn1j x6ikm8r x1odjw0f x1y79sax x1h678fw xb5ifuw x2owpf2 xh8yej3",
								children: m.jsxs("div", {
									className: "x1qjc9v5 x9f619 x78zum5 xdt5ytf x2lah0s x1f0uite xh8yej3",
									children: [
										m.jsx(r("WAWebBroadcastAudienceNameFieldCard.react"), {
											value: z.name,
											floatingLabel: !1,
											onValueChange: function(t) {
												return Q(G, t);
											},
											testid: "biz-broadcasts-import-audiences-name-input-" + G
										}),
										m.jsx($, {
											draft: z,
											entryPoint: i,
											onDeleteAllErrors: function() {
												return Y(G);
											},
											onDeleteError: function(t) {
												return J(G, t);
											},
											onUpdateError: function(t, n) {
												return Z(G, t, n);
											}
										}),
										m.jsx(M, {
											draft: z,
											index: G,
											onDeleteContact: function(t) {
												return X(G, t);
											}
										})
									]
								})
							}),
							m.jsx(P, {
								draftsCount: h.length,
								isSaveDisabled: K,
								isSaving: j,
								onSave: ee,
								saveError: W
							})
						]
					}) : null]
				})
			})
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e, t, n) {
		var r = e[t];
		if (r == null) return e;
		var o = n(r);
		return o == null ? e.filter(function(e, n) {
			return n !== t;
		}) : e.map(function(e, n) {
			return n === t ? o : e;
		});
	}
	function v(e, t) {
		var n = e.findIndex(function(e) {
			return e === t;
		});
		return n === -1 ? e : [].concat(e.slice(0, n), e.slice(n + 1));
	}
	function S(e, t) {
		return t === 0 ? 0 : Math.min(e, t - 1);
	}
	function R(e) {
		return r("sumBy")(e, function(e) {
			return e.contacts.length;
		});
	}
	function L(e) {
		return e.flatMap(function(e) {
			var t;
			return (t = e.errorList) != null ? t : [];
		});
	}
	function E(e, t) {
		var n = L(e), a = R(e);
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
	function k(e, t) {
		return [].concat(e, [t]).sort(function(e, t) {
			return e.rowIndex - t.rowIndex;
		});
	}
	function I(e) {
		return e.lid == null ? null : o("WAWebContactCollection").ContactCollection.get(e.lid);
	}
	function T(e, t) {
		return t == null ? o("WAWebBizBroadcastsSmartCSVImportContactUtils").formatSmartCSVImportContactName(e) : o("WAWebFrontendContactGetters").getDisplayName(t);
	}
	function D(e) {
		var t = o("WAWebInitialsFromNameUtils").getInitialsFromContact(e);
		return [t.firstInitial, t.secondInitial].filter(Boolean).join("");
	}
	function x(e) {
		var t = e.height, n = e.width;
		return m.jsx(r("WDSIconIcPersonFilled.react"), {
			"aria-hidden": !0,
			height: t,
			width: n
		});
	}
	x.displayName = x.name + " [from " + i.id + "]";
	function $(e) {
		var t, n = e.draft, o = e.entryPoint, a = e.onDeleteAllErrors, i = e.onDeleteError, l = e.onUpdateError, s = (t = n.errorList) != null ? t : [];
		return s.length === 0 ? null : m.jsx(r("WAWebBizBroadcastsImportAudienceErrorsList.react"), {
			contacts: n.contacts,
			entryPoint: o,
			errorList: s,
			onDeleteAllErrorItems: a,
			onDeleteErrorItem: i,
			onUpdateContact: function(t, n, r) {
				l(t, babelHelpers.extends({}, n, { rowIndex: t.rowIndex }));
			}
		});
	}
	$.displayName = $.name + " [from " + i.id + "]";
	function P(e) {
		var t = e.draftsCount, n = e.isSaveDisabled, a = e.isSaving, i = e.onSave, l = e.saveError;
		return m.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: y.footer,
			children: m.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				xstyle: y.footerContent,
				children: [l != null ? m.jsx(r("WDSText.react"), {
					type: "Body3",
					colorName: "secondaryNegativeEmphasized",
					testid: "biz-broadcasts-import-audiences-save-error",
					children: l
				}) : null, m.jsx(o("WAWebFlex.react").FlexRow, {
					align: "end",
					justify: "end",
					children: m.jsx(r("WDSButton.react"), {
						disabled: n,
						label: a ? s._(
							/*BTDS*/
							""
						) : s._(
							/*BTDS*/
							"",
							[s._plural(t, "number")]
						),
						onPress: i,
						testid: "biz-broadcasts-import-audiences-save-button",
						variant: "filled"
					})
				})]
			})
		});
	}
	P.displayName = P.name + " [from " + i.id + "]";
	function N(e) {
		var t = e.drafts, n = e.onBack, a = e.onSelect, i = e.selectedIndex;
		return m.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: y.navPane,
			children: [m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				testid: "biz-broadcasts-import-audiences-drawer-header",
				title: s._(
					/*BTDS*/
					""
				),
				onBack: n,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				focusBackOrCancel: !0
			}), m.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				xstyle: y.navList,
				children: t.map(function(e, t) {
					var n, l, u = ((n = (l = e.errorList) == null ? void 0 : l.length) != null ? n : 0) > 0;
					return m.jsx("button", babelHelpers.extends({}, {
						0: { className: "x1280gxy xrxyp3c xv0oops x1isl5vh xn8zj9a x1ejq31n x18oe1m7 x1sy0etr xstzfhl x972fbf x10w94by x1qhh985 x14e42zd x9f619 x1ypdohk x6ikm8r x10wlt62 x16ovd2e x12xbjc7 xdx6fka xvtqlqk x1yc453h xh8yej3" },
						1: { className: "xrxyp3c xv0oops x1isl5vh xn8zj9a x1ejq31n x18oe1m7 x1sy0etr xstzfhl x972fbf x10w94by x1qhh985 x14e42zd x9f619 x1ypdohk x6ikm8r x10wlt62 x16ovd2e x12xbjc7 xdx6fka xvtqlqk x1yc453h xh8yej3 x1h3rtpe" }
					}[(t === i) << 0], {
						type: "button",
						onClick: function() {
							return a(t);
						},
						"data-testid": "biz-broadcasts-import-audiences-list-item-" + t,
						children: m.jsxs(o("WAWebFlex.react").FlexRow, {
							align: "center",
							justify: "all",
							xstyle: y.listItemContent,
							children: [m.jsxs(o("WAWebFlex.react").FlexColumn, {
								align: "stretch",
								xstyle: y.listItemText,
								children: [m.jsx(r("WDSText.react"), {
									type: "Body2Emphasized",
									colorName: "contentDefault",
									maxLines: 1,
									children: e.name
								}), m.jsx(r("WDSText.react"), {
									type: "Body3",
									colorName: "contentDeemphasized",
									maxLines: 1,
									children: s._(
										/*BTDS*/
										"",
										[s._plural(e.contacts.length, "number")]
									)
								})]
							}), u ? m.jsx(r("WDSIconIcError.react"), {
								"aria-label": s._(
									/*BTDS*/
									""
								),
								colorName: "secondaryNegative",
								height: 20,
								testid: "biz-broadcasts-import-audiences-error-indicator-" + t,
								width: 20,
								xstyle: y.listItemErrorIcon
							}) : null]
						})
					}), t);
				})
			})]
		});
	}
	N.displayName = N.name + " [from " + i.id + "]";
	function M(e) {
		var t = e.draft, n = e.index, a = e.onDeleteContact;
		return m.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: y.recipientsCard,
			testid: "biz-broadcasts-import-audiences-card-" + n,
			children: m.jsxs("table", {
				className: "x1mwwwfo x140o2bo xh8yej3",
				children: [
					m.jsxs("colgroup", { children: [
						m.jsx("col", { className: "x1iy3nof" }),
						m.jsx("col", {}),
						m.jsx("col", { className: "xa66mkm" })
					] }),
					m.jsxs("thead", { children: [m.jsx("tr", { children: m.jsx("th", {
						colSpan: h,
						className: "xvpt6g3 x1yc453h",
						children: m.jsx(r("WDSText.react"), {
							type: "Body1Emphasized",
							colorName: "contentDefault",
							children: s._(
								/*BTDS*/
								"",
								[s._plural(t.contacts.length, "number")]
							)
						})
					}) }), m.jsxs("tr", { children: [
						m.jsx("th", {
							className: "x1m189uc x6ikm8r x10wlt62 x16ovd2e x12xbjc7 xvtqlqk x1yc453h xxymvpz",
							children: m.jsx(r("WDSText.react"), {
								type: "Body3Emphasized",
								colorName: "contentDeemphasized",
								children: s._(
									/*BTDS*/
									""
								)
							})
						}),
						m.jsx("th", {
							className: "x1m189uc x6ikm8r x10wlt62 x16ovd2e x12xbjc7 xvtqlqk x1yc453h xlyipyv xxymvpz",
							children: m.jsx(r("WDSText.react"), {
								type: "Body3Emphasized",
								colorName: "contentDeemphasized",
								children: s._(
									/*BTDS*/
									""
								)
							})
						}),
						m.jsx("th", { className: "x16ovd2e x12xbjc7 xp4054r xxymvpz xuxw1ft" })
					] })] }),
					m.jsx("tbody", { children: t.contacts.map(function(e, t) {
						return m.jsxs("tr", { children: [
							m.jsx("td", {
								className: "x1m189uc x6ikm8r x10wlt62 x16ovd2e x12xbjc7 xvtqlqk x1yc453h xxymvpz",
								children: m.jsx(w, {
									contact: e,
									contactIndex: t
								})
							}),
							m.jsx("td", {
								className: "x1m189uc x6ikm8r x10wlt62 x16ovd2e x12xbjc7 xvtqlqk x1yc453h xlyipyv xxymvpz",
								children: m.jsx(r("WDSText.react"), {
									type: "Body2",
									colorName: "contentDefault",
									maxLines: 1,
									children: e.phone
								})
							}),
							m.jsx("td", {
								className: "x16ovd2e x12xbjc7 xp4054r xxymvpz xuxw1ft",
								children: m.jsx("div", {
									className: "x6s0dn4 x78zum5 x13a6bvl xh8yej3",
									children: m.jsx(r("WDSButton.react"), {
										Icon: r("WDSIconIcDelete.react"),
										"aria-label": s._(
											/*BTDS*/
											""
										),
										onPress: function() {
											return a(e);
										},
										size: "small",
										testid: "biz-broadcasts-import-audiences-delete-contact-" + t,
										variant: "borderless"
									})
								})
							})
						] }, e.rowIndex + ":" + e.phone);
					}) })
				]
			})
		});
	}
	M.displayName = M.name + " [from " + i.id + "]";
	function w(e) {
		var t, n = e.contact, a = e.contactIndex, i = I(n), l = T(n, i), s = (t = i == null ? void 0 : i.id) != null ? t : null, u = s == null ? null : o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(s), c = o("useWAWebModelValues").useOptionalModelValues(u, ["img"]), d = i == null ? void 0 : D(i);
		return m.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: y.tableContactContent,
			children: [m.jsx(r("WDSProfilePhoto.react"), {
				type: "person",
				name: l,
				src: c == null ? void 0 : c.img,
				size: "extraSmall",
				color: s == null ? "gray" : o("useWAWebDefaultProfileColors").getWDSProfilePhotoColor(s),
				customColor: s == null ? void 0 : o("useWAWebDefaultProfileColors").getWDSProfilePhotoCustomColor(s),
				placeholderIcon: s == null ? x : o("useWAWebDefaultProfileColors").getProfilePhotoPlaceholderIcon(s),
				isDecorative: !0,
				initials: d
			}), m.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDefault",
				maxLines: 1,
				xstyle: y.contactName,
				testid: "biz-broadcasts-import-audiences-contact-name-" + a,
				children: l
			})]
		});
	}
	w.displayName = w.name + " [from " + i.id + "]";
	function A(e) {
		return F.apply(this, arguments);
	}
	function F() {
		return F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = [], a = [];
			return yield e.reduce((function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, n) {
					return yield e, O(n).then(function(e) {
						a.push(e);
					}).catch(function(e) {
						t.push(n), o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Failed to save smart-import audience"]))).catching(r("getErrorSafe")(e)).sendLogs("business-broadcast-smart-import-segment-save-failed");
					});
				});
				return function(t, n) {
					return e.apply(this, arguments);
				};
			})(), (c || (c = n("Promise"))).resolve()), {
				failedAudiences: t,
				savedAudiences: a
			};
		}), F.apply(this, arguments);
	}
	function O(e) {
		return B.apply(this, arguments);
	}
	function B() {
		return B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.contacts.map(W), n = e.name.trim(), r = yield o("WAWebBroadcastListAction").createBroadcastListAction({
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
		}), B.apply(this, arguments);
	}
	function W(e) {
		var t;
		return {
			lid: (t = e.lid) == null ? void 0 : t.toString(),
			phone: e.phone
		};
	}
	l.default = C;
}), 226);
