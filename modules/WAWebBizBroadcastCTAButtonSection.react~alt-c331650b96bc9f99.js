__d("WAWebBizBroadcastCTAButtonSection.react", [
	"fbt",
	"WALogger",
	"WAWebBizBroadcastCTAButtonModalLoadable",
	"WAWebBizBroadcastCTAButtonSectionStrings",
	"WAWebBizBroadcastsCreationStrings",
	"WAWebBizBroadcastsNewBroadcastAddButton.react",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WAWebToast.react",
	"WAWebToastManager",
	"WDSButton.react",
	"WDSIconIcAdd.react",
	"WDSIconIcCall.react",
	"WDSIconIcClose.react",
	"WDSIconIcEdit.react",
	"WDSIconIcLink.react",
	"WDSIconIcReply.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m, p, _, f = _ || (_ = o("react")), g = _, h = g.useCallback, y = g.useEffect, C = g.useRef, b = g.useState, v = {
		actionButtons: {
			alignItems: "x6s0dn4",
			columnGap: "x1trrmfo",
			top: "x1ngp85i",
			insetInlineEnd: "xe9xzdg",
			left: null,
			right: null,
			position: "x10l6tqk",
			transition: "xzdg38j",
			$$css: !0
		},
		addButtonContainer: {
			columnGap: "x1s70e7g",
			marginTop: "x1de0gy",
			paddingTop: "x1xrf6ya",
			paddingBottom: "xscbp6u",
			width: "xh8yej3",
			$$css: !0
		},
		addButtonIconContainer: {
			backgroundColor: "x4wrhlh",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			height: "xc9qbxq",
			width: "x14qfxbe",
			$$css: !0
		},
		buttonSection: {
			marginTop: "x98l61r",
			$$css: !0
		},
		buttonTitleRow: {
			columnGap: "x1trrmfo",
			$$css: !0
		},
		ctaBackgroundHovered: {
			backgroundColor: "x1cbl2y9",
			$$css: !0
		},
		ctaIcon: {
			backgroundColor: "x1abdmlv",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			height: "x1gnnpzl",
			paddingTop: "x1xrf6ya",
			paddingInlineEnd: "xde1mab",
			paddingBottom: "xscbp6u",
			paddingInlineStart: "x1iw51ew",
			width: "x23j0i4",
			$$css: !0
		},
		row: {
			flexGrow: "x1iyjqo2",
			$$css: !0
		},
		text: {
			paddingInlineStart: "x1iw51ew",
			paddingInlineEnd: "xde1mab",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		}
	};
	function S(t) {
		var n = t.buttonData, a = t.entryPoint, i = t.isReadOnly, l = i === void 0 ? !1 : i, s = t.onButtonDataChange, _ = C(null), g = C(!1);
		y(function() {
			if (g.current) {
				var e = _.current;
				if (e != null && !e.contains(document.activeElement)) {
					g.current = !1;
					var t = e.querySelector("button, [tabindex=\"0\"]");
					t instanceof HTMLElement && t.focus();
				}
			}
		}, void 0);
		var b = h(function(t, a) {
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[BizBroadcast] handleOpenModal type=", ""])), t);
			var i = n;
			o("WAWebModalManager").ModalManager.open(f.jsx(o("WAWebBizBroadcastCTAButtonModalLoadable").WAWebBizBroadcastCTAButtonModalLoadable, {
				buttonType: t,
				initialButtonData: a,
				onClose: o("WAWebModalManager").closeModalManager,
				onSave: function(t) {
					o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[BizBroadcast] handleSave: saving btn data"]))), s(t), o("WAWebModalManager").ModalManager.close();
					var e = o("WAWebToast.react").genId();
					o("WAWebToastManager").ToastManager.open(f.jsx(o("WAWebToast.react").Toast, {
						id: e,
						msg: o("WAWebBizBroadcastCTAButtonSectionStrings").getButtonUpdatedToastLabel(),
						action: {
							actionText: r("WAWebFbtCommon")("Undo"),
							onAction: function() {
								o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[BizBroadcast] handleUndo: restoring prev btn"]))), s(i), o("WAWebToastManager").ToastManager.close(e);
							}
						}
					})), g.current = !0;
				}
			}));
		}, [n, s]), S = C(n);
		y(function() {
			S.current = n;
		}, [n]);
		var k = h(function() {
			o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[BizBroadcast] handleRemoveButton: removing btn"])));
			var e = S.current;
			s(null), g.current = !0;
			var t = o("WAWebToast.react").genId();
			o("WAWebToastManager").ToastManager.open(f.jsx(o("WAWebToast.react").Toast, {
				id: t,
				msg: o("WAWebBizBroadcastCTAButtonSectionStrings").getButtonRemovedToastLabel(),
				action: {
					actionText: r("WAWebFbtCommon")("Undo"),
					onAction: function() {
						o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[BizBroadcast] handleUndo: restoring type=", ""])), e == null ? void 0 : e.type), s(e), o("WAWebToastManager").ToastManager.close(t);
					}
				}
			}));
		}, [s]), I = h(function() {
			n != null && (o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[BizBroadcast] handleEditButton: opening edit modal"]))), b(n.type, n));
		}, [n, b]), T = (n == null ? void 0 : n.type) === "cta_catalog", D = null;
		return T ? D = f.jsx(E, {}) : n != null ? D = f.jsx(L, {
			buttonData: n,
			isReadOnly: l,
			onEdit: I,
			onRemove: k
		}) : l || (D = f.jsx(R, {
			entryPoint: a,
			onSelectButtonType: b
		})), f.jsx("div", {
			ref: _,
			children: f.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: v.buttonSection,
				children: [
					f.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						xstyle: v.buttonTitleRow,
						children: [f.jsx(r("WDSText.react"), {
							type: "Body1Emphasized",
							colorName: "contentDefault",
							testid: "biz-broadcast-creation-cta-section-title",
							children: o("WAWebBizBroadcastCTAButtonSectionStrings").getButtonSectionTitle()
						}), !T && f.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							testid: "biz-broadcast-creation-cta-optional-label",
							children: o("WAWebBizBroadcastsCreationStrings").getOptionalLabel()
						})]
					}),
					f.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						testid: "biz-broadcast-creation-cta-section-subtitle",
						children: T ? o("WAWebBizBroadcastCTAButtonSectionStrings").getCatalogButtonSectionSubtitle() : o("WAWebBizBroadcastCTAButtonSectionStrings").getButtonSectionSubtitle()
					}),
					f.jsx("div", babelHelpers.extends({ "aria-disabled": l || void 0 }, {
						0: {},
						1: { className: "xt0e3qv x4dje6k x1lxidc1" }
					}[!!l << 0], { children: D }))
				]
			})
		});
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e) {
		var t, n = e.entryPoint, a = e.onSelectButtonType, i = h(function() {
			a("quick_reply");
		}, [a]), l = h(function() {
			a("cta_call");
		}, [a]), s = h(function() {
			a("cta_url");
		}, [a]), u = f.jsxs(r("WDSMenu.react"), { children: [
			f.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcReply.react"),
				title: (t = o("WAWebBizBroadcastCTAButtonSectionStrings")).getCustomReplyMenuLabel(),
				subtitle: t.getCustomReplyMenuSubtitle(),
				onPress: i,
				testid: "biz-broadcasts-cta-add-reply"
			}),
			f.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcCall.react"),
				title: t.getPhoneCallMenuLabel(),
				subtitle: t.getPhoneCallMenuSubtitle(),
				onPress: l,
				testid: "biz-broadcasts-cta-add-phone"
			}),
			f.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcLink.react"),
				title: t.getWebsiteMenuLabel(),
				subtitle: t.getWebsiteMenuSubtitle(),
				onPress: s,
				testid: "biz-broadcasts-cta-add-website"
			})
		] });
		return f.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: v.addButtonContainer,
			children: f.jsx(r("WAWebBizBroadcastsNewBroadcastAddButton.react"), {
				buttonLabel: t.getAddButtonLabel(),
				contextMenu: u,
				onButtonClick: function() {
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.addCTAButtonClicked(n);
				},
				position: "above",
				testid: "biz-broadcast-creation-add-cta-button"
			})
		});
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		var t = e.buttonData, n = e.isReadOnly, a = e.onEdit, i = e.onRemove;
		return t.type === "quick_reply" ? f.jsx(k, {
			Icon: r("WDSIconIcReply.react"),
			displayText: t.displayText,
			isReadOnly: n,
			secondaryText: o("WAWebBizBroadcastCTAButtonSectionStrings").getCustomReplyMenuLabel().toString(),
			onEdit: a,
			onRemove: i
		}) : t.type === "cta_call" ? f.jsx(k, {
			Icon: r("WDSIconIcCall.react"),
			displayText: t.displayText,
			isReadOnly: n,
			secondaryText: t.phoneNumber,
			onEdit: a,
			onRemove: i
		}) : t.type === "cta_url" ? f.jsx(k, {
			Icon: r("WDSIconIcLink.react"),
			displayText: t.displayText,
			isReadOnly: n,
			secondaryText: t.url,
			onEdit: a,
			onRemove: i
		}) : t.type === "cta_catalog" ? null : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + t.type);
		})();
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E() {
		return f.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: v.addButtonContainer,
			children: [f.jsx(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "center",
				xstyle: v.addButtonIconContainer,
				children: f.jsx(r("WDSIconIcAdd.react"), {})
			}), f.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDefault",
				children: o("WAWebBizBroadcastCTAButtonSectionStrings").getAddButtonLabel()
			})]
		});
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k(e) {
		var t = e.Icon, n = e.displayText, a = e.isReadOnly, i = e.onEdit, l = e.onRemove, u = e.secondaryText, c = b(!1), d = c[0], m = c[1], p = b(!1), _ = p[0], g = p[1], y = h(function(e) {
			var t = e.relatedTarget;
			(!(t instanceof Node) || !e.currentTarget.contains(t)) && g(!1);
		}, []), C = d || _;
		return f.jsxs("div", babelHelpers.extends({ role: "group" }, {
			0: { className: "xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 x1de0gy x1ncir08 x1n2onr6 x1bu39yj" },
			1: { className: "xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 x1de0gy x1ncir08 x1n2onr6 x1cbl2y9" }
		}[!!C << 0], {
			"data-testid": "biz-broadcasts-cta-button-display",
			onMouseEnter: function() {
				return m(!0);
			},
			onMouseLeave: function() {
				return m(!1);
			},
			onFocus: function() {
				return g(!0);
			},
			onBlur: y,
			children: [f.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "stretch",
				xstyle: v.row,
				children: [f.jsx(o("WAWebFlex.react").FlexColumn, {
					align: "center",
					justify: "center",
					xstyle: [v.ctaIcon, C && v.ctaBackgroundHovered],
					children: f.jsx(t, {})
				}), f.jsxs(o("WAWebFlex.react").FlexColumn, {
					justify: "center",
					xstyle: v.text,
					children: [f.jsx(r("WDSText.react"), {
						maxLines: 1,
						colorName: "contentDefault",
						type: "Body2Emphasized",
						testid: "biz-broadcast-creation-cta-display-text",
						children: n
					}), u != null && f.jsx(r("WDSText.react"), {
						maxLines: 1,
						colorName: "contentDeemphasized",
						type: "Body3",
						testid: "biz-broadcast-creation-cta-secondary-text",
						children: u
					})]
				})]
			}), C && a !== !0 && f.jsxs(o("WAWebFlex.react").FlexRow, {
				xstyle: v.actionButtons,
				children: [f.jsx(r("WDSButton.react"), {
					"aria-label": s._(
						/*BTDS*/
						""
					),
					size: "small",
					variant: "filled",
					Icon: r("WDSIconIcEdit.react"),
					onPress: i,
					testid: "biz-broadcast-creation-cta-edit-button"
				}), f.jsx(r("WDSButton.react"), {
					"aria-label": s._(
						/*BTDS*/
						""
					),
					size: "small",
					variant: "filled",
					Icon: r("WDSIconIcClose.react"),
					onPress: l,
					testid: "biz-broadcast-creation-cta-remove-button"
				})]
			})]
		}));
	}
	k.displayName = k.name + " [from " + i.id + "]", l.default = S;
}), 226);
