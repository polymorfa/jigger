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
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(28), n = e.entryPoint, a = e.onSelectButtonType, i;
		t[0] !== a ? (i = function() {
			a("quick_reply");
		}, t[0] = a, t[1] = i) : i = t[1];
		var l = i, s;
		t[2] !== a ? (s = function() {
			a("cta_call");
		}, t[2] = a, t[3] = s) : s = t[3];
		var u = s, c;
		t[4] !== a ? (c = function() {
			a("cta_url");
		}, t[4] = a, t[5] = c) : c = t[5];
		var d = c, m, p;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (m = o("WAWebBizBroadcastCTAButtonSectionStrings").getCustomReplyMenuLabel(), p = o("WAWebBizBroadcastCTAButtonSectionStrings").getCustomReplyMenuSubtitle(), t[6] = m, t[7] = p) : (m = t[6], p = t[7]);
		var _;
		t[8] !== l ? (_ = f.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcReply.react"),
			title: m,
			subtitle: p,
			onPress: l,
			testid: "biz-broadcasts-cta-add-reply"
		}), t[8] = l, t[9] = _) : _ = t[9];
		var g, h;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (g = o("WAWebBizBroadcastCTAButtonSectionStrings").getPhoneCallMenuLabel(), h = o("WAWebBizBroadcastCTAButtonSectionStrings").getPhoneCallMenuSubtitle(), t[10] = g, t[11] = h) : (g = t[10], h = t[11]);
		var y;
		t[12] !== u ? (y = f.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcCall.react"),
			title: g,
			subtitle: h,
			onPress: u,
			testid: "biz-broadcasts-cta-add-phone"
		}), t[12] = u, t[13] = y) : y = t[13];
		var C, b;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (C = o("WAWebBizBroadcastCTAButtonSectionStrings").getWebsiteMenuLabel(), b = o("WAWebBizBroadcastCTAButtonSectionStrings").getWebsiteMenuSubtitle(), t[14] = C, t[15] = b) : (C = t[14], b = t[15]);
		var S;
		t[16] !== d ? (S = f.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcLink.react"),
			title: C,
			subtitle: b,
			onPress: d,
			testid: "biz-broadcasts-cta-add-website"
		}), t[16] = d, t[17] = S) : S = t[17];
		var R;
		t[18] !== S || t[19] !== _ || t[20] !== y ? (R = f.jsxs(r("WDSMenu.react"), { children: [
			_,
			y,
			S
		] }), t[18] = S, t[19] = _, t[20] = y, t[21] = R) : R = t[21];
		var L = R, E;
		t[22] === Symbol.for("react.memo_cache_sentinel") ? (E = o("WAWebBizBroadcastCTAButtonSectionStrings").getAddButtonLabel(), t[22] = E) : E = t[22];
		var k;
		t[23] !== n ? (k = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.addCTAButtonClicked(n);
		}, t[23] = n, t[24] = k) : k = t[24];
		var I;
		return t[25] !== L || t[26] !== k ? (I = f.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: v.addButtonContainer,
			children: f.jsx(r("WAWebBizBroadcastsNewBroadcastAddButton.react"), {
				buttonLabel: E,
				contextMenu: L,
				onButtonClick: k,
				position: "above",
				testid: "biz-broadcast-creation-add-cta-button"
			})
		}), t[25] = L, t[26] = k, t[27] = I) : I = t[27], I;
	}
	function L(e) {
		var t = o("react-compiler-runtime").c(8), n = e.buttonData, a = e.isReadOnly, i = e.onEdit, l = e.onRemove, s;
		return t[0] !== n.displayText || t[1] !== n.phoneNumber || t[2] !== n.type || t[3] !== n.url || t[4] !== a || t[5] !== i || t[6] !== l ? (s = n.type === "quick_reply" ? f.jsx(k, {
			Icon: r("WDSIconIcReply.react"),
			displayText: n.displayText,
			isReadOnly: a,
			secondaryText: o("WAWebBizBroadcastCTAButtonSectionStrings").getCustomReplyMenuLabel().toString(),
			onEdit: i,
			onRemove: l
		}) : n.type === "cta_call" ? f.jsx(k, {
			Icon: r("WDSIconIcCall.react"),
			displayText: n.displayText,
			isReadOnly: a,
			secondaryText: n.phoneNumber,
			onEdit: i,
			onRemove: l
		}) : n.type === "cta_url" ? f.jsx(k, {
			Icon: r("WDSIconIcLink.react"),
			displayText: n.displayText,
			isReadOnly: a,
			secondaryText: n.url,
			onEdit: i,
			onRemove: l
		}) : n.type === "cta_catalog" ? null : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + n.type);
		})(), t[0] = n.displayText, t[1] = n.phoneNumber, t[2] = n.type, t[3] = n.url, t[4] = a, t[5] = i, t[6] = l, t[7] = s) : s = t[7], s;
	}
	function E() {
		var e = o("react-compiler-runtime").c(2), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = f.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			xstyle: v.addButtonIconContainer,
			children: f.jsx(r("WDSIconIcAdd.react"), {})
		}), e[0] = t) : t = e[0];
		var n;
		return e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = f.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: v.addButtonContainer,
			children: [t, f.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDefault",
				children: o("WAWebBizBroadcastCTAButtonSectionStrings").getAddButtonLabel()
			})]
		}), e[1] = n) : n = e[1], n;
	}
	function k(e) {
		var t = o("react-compiler-runtime").c(32), n = e.Icon, a = e.displayText, i = e.isReadOnly, l = e.onEdit, u = e.onRemove, c = e.secondaryText, d = b(!1), m = d[0], p = d[1], _ = b(!1), g = _[0], h = _[1], y;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (y = function(t) {
			var e = t.relatedTarget;
			(!(e instanceof Node) || !t.currentTarget.contains(e)) && h(!1);
		}, t[0] = y) : y = t[0];
		var C = y, S = m || g, R;
		t[1] !== S ? (R = {
			0: { className: "xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 x1de0gy x1ncir08 x1n2onr6 x1bu39yj" },
			1: { className: "xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 x1de0gy x1ncir08 x1n2onr6 x1cbl2y9" }
		}[!!S << 0], t[1] = S, t[2] = R) : R = t[2];
		var L, E, k;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (L = function() {
			return p(!0);
		}, E = function() {
			return p(!1);
		}, k = function() {
			return h(!0);
		}, t[3] = L, t[4] = E, t[5] = k) : (L = t[3], E = t[4], k = t[5]);
		var I = S && v.ctaBackgroundHovered, T;
		t[6] !== I ? (T = [v.ctaIcon, I], t[6] = I, t[7] = T) : T = t[7];
		var D;
		t[8] !== n ? (D = f.jsx(n, {}), t[8] = n, t[9] = D) : D = t[9];
		var x;
		t[10] !== T || t[11] !== D ? (x = f.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			xstyle: T,
			children: D
		}), t[10] = T, t[11] = D, t[12] = x) : x = t[12];
		var $;
		t[13] !== a ? ($ = f.jsx(r("WDSText.react"), {
			maxLines: 1,
			colorName: "contentDefault",
			type: "Body2Emphasized",
			testid: "biz-broadcast-creation-cta-display-text",
			children: a
		}), t[13] = a, t[14] = $) : $ = t[14];
		var P;
		t[15] !== c ? (P = c != null && f.jsx(r("WDSText.react"), {
			maxLines: 1,
			colorName: "contentDeemphasized",
			type: "Body3",
			testid: "biz-broadcast-creation-cta-secondary-text",
			children: c
		}), t[15] = c, t[16] = P) : P = t[16];
		var N;
		t[17] !== $ || t[18] !== P ? (N = f.jsxs(o("WAWebFlex.react").FlexColumn, {
			justify: "center",
			xstyle: v.text,
			children: [$, P]
		}), t[17] = $, t[18] = P, t[19] = N) : N = t[19];
		var M;
		t[20] !== N || t[21] !== x ? (M = f.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "stretch",
			xstyle: v.row,
			children: [x, N]
		}), t[20] = N, t[21] = x, t[22] = M) : M = t[22];
		var w;
		t[23] !== i || t[24] !== S || t[25] !== l || t[26] !== u ? (w = S && i !== !0 && f.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: v.actionButtons,
			children: [f.jsx(r("WDSButton.react"), {
				"aria-label": s._(
					/*BTDS*/
					""
				),
				size: "small",
				variant: "filled",
				Icon: r("WDSIconIcEdit.react"),
				onPress: l,
				testid: "biz-broadcast-creation-cta-edit-button"
			}), f.jsx(r("WDSButton.react"), {
				"aria-label": s._(
					/*BTDS*/
					""
				),
				size: "small",
				variant: "filled",
				Icon: r("WDSIconIcClose.react"),
				onPress: u,
				testid: "biz-broadcast-creation-cta-remove-button"
			})]
		}), t[23] = i, t[24] = S, t[25] = l, t[26] = u, t[27] = w) : w = t[27];
		var A;
		return t[28] !== M || t[29] !== w || t[30] !== R ? (A = f.jsxs("div", babelHelpers.extends({ role: "group" }, R, {
			"data-testid": "biz-broadcasts-cta-button-display",
			onMouseEnter: L,
			onMouseLeave: E,
			onFocus: k,
			onBlur: C,
			children: [M, w]
		})), t[28] = M, t[29] = w, t[30] = R, t[31] = A) : A = t[31], A;
	}
	l.default = S;
}), 226);
