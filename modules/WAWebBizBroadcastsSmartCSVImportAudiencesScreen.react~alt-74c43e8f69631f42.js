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
	function y(t) {
		var n, a = t.audiences, i = t.entryPoint, l = t.importLoggingContext, u = t.onClose, c = t.onCreateAudiencesSuccess, m = t.ref, g = f(a), y = g[0], R = g[1], k = _(a), I = f(0), T = I[0], D = I[1], M = f("idle"), A = M[0], F = M[1], O = _("idle"), B = f(null), W = B[0], q = B[1], U = f([]), V = U[0], H = U[1], G = v(T, y.length), z = (n = y[G]) != null ? n : null, j = A === "saving", K = A !== "idle" || y.length === 0 || y.some(function(e) {
			var t, n;
			return e.name.trim() === "" || e.contacts.length === 0 || ((t = (n = e.errorList) == null ? void 0 : n.length) != null ? t : 0) > 0;
		});
		p(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importedContactWizardViewed(L(k.current, babelHelpers.extends({}, o("WAWebBizBroadcastsImportLoggingUtils").getImportAudienceMetadataLoggingExtraAttributes(l, {
				audienceCount: k.current.length,
				importedRowCount: S(k.current),
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
				return C(t, e, function(e) {
					return e.contacts.length === 0 ? null : babelHelpers.extends({}, e, { errorList: [] });
				});
			});
		}
		function J(e, t) {
			ne(function(n) {
				return C(n, e, function(e) {
					var n, r = b((n = e.errorList) != null ? n : [], t);
					return e.contacts.length === 0 && r.length === 0 ? null : babelHelpers.extends({}, e, { errorList: r });
				});
			});
		}
		function Z(e, t, n) {
			te(function(r) {
				return r.map(function(r, o) {
					var a;
					return o !== e ? r : babelHelpers.extends({}, r, {
						contacts: E(r.contacts, n),
						errorList: b((a = r.errorList) != null ? a : [], t)
					});
				});
			});
		}
		function ee() {
			if (!(K || O.current !== "idle")) {
				O.current = "saving", F("saving"), q(null);
				var t = o("WAWebBizBroadcastsImportLoggingUtils").getImportAudienceLoggingExtraAttributes(l), n = S(k.current), a = k.current.length, u = o("WAWebBizBroadcastsImportLoggingUtils").getImportAudienceSuccessLoggingExtraAttributes(l, {
					audienceCount: a,
					importedRowCount: n,
					isMultiAudience: !0
				});
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importedContactsSaveClicked(L(k.current, u), i), w(k.current).then(function(e) {
					var r = e.failedAudiences, l = e.savedAudiences, d = [].concat(V, l), m = r.length, p = S(r);
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
			re(e(k.current));
		}
		function ne(e) {
			var t = e(k.current);
			if (t.length === 0) {
				re(t), u();
				return;
			}
			re(t);
		}
		function re(e, t) {
			k.current = e, R(e), D(function(n) {
				return v(t != null ? t : n, e.length);
			});
		}
		return d.jsx(r("WAWebDrawer.react"), {
			ref: m,
			xstyle: h.drawer,
			children: d.jsx(r("WAWebDrawerBody.react"), {
				isRefresh: !0,
				overflow: "hidden",
				xstyle: h.drawerBody,
				children: d.jsxs("div", {
					className: "x78zum5 x1r8uery x1iyjqo2 xs83m0k x5yr21d x2lwn1j x6ikm8r x10wlt62 xh8yej3",
					children: [d.jsx(P, {
						drafts: y,
						onBack: function() {
							var e = l == null ? null : o("WAWebBizBroadcastsImportLoggingUtils").getImportAudienceCancelLoggingExtraAttributes(o("WAWebBizBroadcastsImportLoggingUtils").ImportAudienceCancelPhase.IMPORT_REVIEW, l, null, {
								audienceCount: y.length,
								importedRowCount: S(y),
								isMultiAudience: !0
							});
							o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importedContactWizardCancelClicked(i, e), u();
						},
						onSelect: D,
						selectedIndex: G
					}), z != null ? d.jsxs("div", {
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
									children: z.name
								})
							}),
							d.jsx("div", {
								className: "x1h3rtpe x9f619 x2lwn1j x6ikm8r x1odjw0f x1y79sax x1h678fw xb5ifuw x2owpf2 xh8yej3",
								children: d.jsxs("div", {
									className: "x1qjc9v5 x9f619 x78zum5 xdt5ytf x2lah0s x1f0uite xh8yej3",
									children: [
										d.jsx(r("WAWebBroadcastAudienceNameFieldCard.react"), {
											value: z.name,
											floatingLabel: !1,
											onValueChange: function(t) {
												return Q(G, t);
											},
											testid: "biz-broadcasts-import-audiences-name-input-" + G
										}),
										d.jsx(x, {
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
										d.jsx(N, {
											draft: z,
											index: G,
											onDeleteContact: function(t) {
												return X(G, t);
											}
										})
									]
								})
							}),
							d.jsx($, {
								draftsCount: y.length,
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
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e, t, n) {
		var r = e[t];
		if (r == null) return e;
		var o = n(r);
		return o == null ? e.filter(function(e, n) {
			return n !== t;
		}) : e.map(function(e, n) {
			return n === t ? o : e;
		});
	}
	function b(e, t) {
		var n = e.findIndex(function(e) {
			return e === t;
		});
		return n === -1 ? e : [].concat(e.slice(0, n), e.slice(n + 1));
	}
	function v(e, t) {
		return t === 0 ? 0 : Math.min(e, t - 1);
	}
	function S(e) {
		return r("sumBy")(e, function(e) {
			return e.contacts.length;
		});
	}
	function R(e) {
		return e.flatMap(function(e) {
			var t;
			return (t = e.errorList) != null ? t : [];
		});
	}
	function L(e, t) {
		var n = R(e), a = S(e);
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
	function E(e, t) {
		return [].concat(e, [t]).sort(function(e, t) {
			return e.rowIndex - t.rowIndex;
		});
	}
	function k(e) {
		return e.lid == null ? null : o("WAWebContactCollection").ContactCollection.get(e.lid);
	}
	function I(e, t) {
		return t == null ? o("WAWebBizBroadcastsSmartCSVImportContactUtils").formatSmartCSVImportContactName(e) : o("WAWebFrontendContactGetters").getDisplayName(t);
	}
	function T(e) {
		var t = o("WAWebInitialsFromNameUtils").getInitialsFromContact(e);
		return [t.firstInitial, t.secondInitial].filter(Boolean).join("");
	}
	function D(e) {
		var t = e.height, n = e.width;
		return d.jsx(r("WDSIconIcPersonFilled.react"), {
			"aria-hidden": !0,
			height: t,
			width: n
		});
	}
	D.displayName = D.name + " [from " + i.id + "]";
	function x(e) {
		var t, n = e.draft, o = e.entryPoint, a = e.onDeleteAllErrors, i = e.onDeleteError, l = e.onUpdateError, s = (t = n.errorList) != null ? t : [];
		return s.length === 0 ? null : d.jsx(r("WAWebBizBroadcastsImportAudienceErrorsList.react"), {
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
	x.displayName = x.name + " [from " + i.id + "]";
	function $(e) {
		var t = e.draftsCount, n = e.isSaveDisabled, a = e.isSaving, i = e.onSave, l = e.saveError;
		return d.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: h.footer,
			children: d.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				xstyle: h.footerContent,
				children: [l != null ? d.jsx(r("WDSText.react"), {
					type: "Body3",
					colorName: "secondaryNegativeEmphasized",
					testid: "biz-broadcasts-import-audiences-save-error",
					children: l
				}) : null, d.jsx(o("WAWebFlex.react").FlexRow, {
					align: "end",
					justify: "end",
					children: d.jsx(r("WDSButton.react"), {
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
	$.displayName = $.name + " [from " + i.id + "]";
	function P(e) {
		var t = e.drafts, n = e.onBack, a = e.onSelect, i = e.selectedIndex;
		return d.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: h.navPane,
			children: [d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				testid: "biz-broadcasts-import-audiences-drawer-header",
				title: s._(
					/*BTDS*/
					""
				),
				onBack: n,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				focusBackOrCancel: !0
			}), d.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				xstyle: h.navList,
				children: t.map(function(e, t) {
					var n, l, u = ((n = (l = e.errorList) == null ? void 0 : l.length) != null ? n : 0) > 0;
					return d.jsx("button", babelHelpers.extends({}, {
						0: { className: "x1280gxy xrxyp3c xv0oops x1isl5vh xn8zj9a x1ejq31n x18oe1m7 x1sy0etr xstzfhl x972fbf x10w94by x1qhh985 x14e42zd x9f619 x1ypdohk x6ikm8r x10wlt62 x16ovd2e x12xbjc7 xdx6fka xvtqlqk x1yc453h xh8yej3" },
						1: { className: "xrxyp3c xv0oops x1isl5vh xn8zj9a x1ejq31n x18oe1m7 x1sy0etr xstzfhl x972fbf x10w94by x1qhh985 x14e42zd x9f619 x1ypdohk x6ikm8r x10wlt62 x16ovd2e x12xbjc7 xdx6fka xvtqlqk x1yc453h xh8yej3 x1h3rtpe" }
					}[(t === i) << 0], {
						type: "button",
						onClick: function() {
							return a(t);
						},
						"data-testid": "biz-broadcasts-import-audiences-list-item-" + t,
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
									children: e.name
								}), d.jsx(r("WDSText.react"), {
									type: "Body3",
									colorName: "contentDeemphasized",
									maxLines: 1,
									children: s._(
										/*BTDS*/
										"",
										[s._plural(e.contacts.length, "number")]
									)
								})]
							}), u ? d.jsx(r("WDSIconIcError.react"), {
								"aria-label": s._(
									/*BTDS*/
									""
								),
								colorName: "secondaryNegative",
								height: 20,
								testid: "biz-broadcasts-import-audiences-error-indicator-" + t,
								width: 20,
								xstyle: h.listItemErrorIcon
							}) : null]
						})
					}), t);
				})
			})]
		});
	}
	P.displayName = P.name + " [from " + i.id + "]";
	function N(e) {
		var t = e.draft, n = e.index, a = e.onDeleteContact;
		return d.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: h.recipientsCard,
			testid: "biz-broadcasts-import-audiences-card-" + n,
			children: d.jsxs("table", {
				className: "x1mwwwfo x140o2bo xh8yej3",
				children: [
					d.jsxs("colgroup", { children: [
						d.jsx("col", { className: "x1iy3nof" }),
						d.jsx("col", {}),
						d.jsx("col", { className: "xa66mkm" })
					] }),
					d.jsxs("thead", { children: [d.jsx("tr", { children: d.jsx("th", {
						colSpan: g,
						className: "xvpt6g3 x1yc453h",
						children: d.jsx(r("WDSText.react"), {
							type: "Body1Emphasized",
							colorName: "contentDefault",
							children: s._(
								/*BTDS*/
								"",
								[s._plural(t.contacts.length, "number")]
							)
						})
					}) }), d.jsxs("tr", { children: [
						d.jsx("th", {
							className: "x1m189uc x6ikm8r x10wlt62 x16ovd2e x12xbjc7 xvtqlqk x1yc453h xxymvpz",
							children: d.jsx(r("WDSText.react"), {
								type: "Body3Emphasized",
								colorName: "contentDeemphasized",
								children: s._(
									/*BTDS*/
									""
								)
							})
						}),
						d.jsx("th", {
							className: "x1m189uc x6ikm8r x10wlt62 x16ovd2e x12xbjc7 xvtqlqk x1yc453h xlyipyv xxymvpz",
							children: d.jsx(r("WDSText.react"), {
								type: "Body3Emphasized",
								colorName: "contentDeemphasized",
								children: s._(
									/*BTDS*/
									""
								)
							})
						}),
						d.jsx("th", { className: "x16ovd2e x12xbjc7 xp4054r xxymvpz xuxw1ft" })
					] })] }),
					d.jsx("tbody", { children: t.contacts.map(function(e, t) {
						return d.jsxs("tr", { children: [
							d.jsx("td", {
								className: "x1m189uc x6ikm8r x10wlt62 x16ovd2e x12xbjc7 xvtqlqk x1yc453h xxymvpz",
								children: d.jsx(M, {
									contact: e,
									contactIndex: t
								})
							}),
							d.jsx("td", {
								className: "x1m189uc x6ikm8r x10wlt62 x16ovd2e x12xbjc7 xvtqlqk x1yc453h xlyipyv xxymvpz",
								children: d.jsx(r("WDSText.react"), {
									type: "Body2",
									colorName: "contentDefault",
									maxLines: 1,
									children: e.phone
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
	N.displayName = N.name + " [from " + i.id + "]";
	function M(e) {
		var t, n = e.contact, a = e.contactIndex, i = k(n), l = I(n, i), s = (t = i == null ? void 0 : i.id) != null ? t : null, u = s == null ? null : o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(s), c = o("useWAWebModelValues").useOptionalModelValues(u, ["img"]), m = i == null ? void 0 : T(i);
		return d.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: h.tableContactContent,
			children: [d.jsx(r("WDSProfilePhoto.react"), {
				type: "person",
				name: l,
				src: c == null ? void 0 : c.img,
				size: "extraSmall",
				color: s == null ? "gray" : o("useWAWebDefaultProfileColors").getWDSProfilePhotoColor(s),
				customColor: s == null ? void 0 : o("useWAWebDefaultProfileColors").getWDSProfilePhotoCustomColor(s),
				placeholderIcon: s == null ? D : o("useWAWebDefaultProfileColors").getProfilePhotoPlaceholderIcon(s),
				isDecorative: !0,
				initials: m
			}), d.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDefault",
				maxLines: 1,
				xstyle: h.contactName,
				testid: "biz-broadcasts-import-audiences-contact-name-" + a,
				children: l
			})]
		});
	}
	M.displayName = M.name + " [from " + i.id + "]";
	async function w(e) {
		var t = [], n = [];
		return await e.reduce(async function(e, a) {
			return await e, A(a).then(function(e) {
				n.push(e);
			}).catch(function(e) {
				t.push(a), o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Failed to save smart-import audience"]))).catching(r("getErrorSafe")(e)).sendLogs("business-broadcast-smart-import-segment-save-failed");
			});
		}, Promise.resolve()), {
			failedAudiences: t,
			savedAudiences: n
		};
	}
	async function A(e) {
		var t = e.contacts.map(F), n = e.name.trim(), r = await o("WAWebBroadcastListAction").createBroadcastListAction({
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
	function F(e) {
		var t;
		return {
			lid: (t = e.lid) == null ? void 0 : t.toString(),
			phone: e.phone
		};
	}
	l.default = y;
}), 226);
