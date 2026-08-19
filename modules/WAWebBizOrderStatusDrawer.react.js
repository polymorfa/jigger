__d("WAWebBizOrderStatusDrawer.react", [
	"fbt",
	"WALogger",
	"WAWebABProps",
	"WAWebBizFormatInteractiveMsg",
	"WAWebBizOpenOrderStatusDrawer.react",
	"WAWebButton.react",
	"WAWebCellV2.react",
	"WAWebConfirmPopup.react",
	"WAWebContactGetters",
	"WAWebCopyToClipboard",
	"WAWebDetailImage.react",
	"WAWebDrawer.react",
	"WAWebDrawerBlock.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerManager",
	"WAWebDropdownItem.react",
	"WAWebEmojiText.react",
	"WAWebExternalLink.react",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WAWebGroupInfoSeparator.react",
	"WAWebIcLocalShippingIcon.react",
	"WAWebIcNumbersIcon.react",
	"WAWebInfoFlowLoadable",
	"WAWebInfoFlowStep",
	"WAWebInfoRefreshedIcon.react",
	"WAWebInteractiveOrderStatusHeader.react",
	"WAWebKeyboardTabUtils",
	"WAWebL10N",
	"WAWebLinkify",
	"WAWebMediaInMemoryBlobCache",
	"WAWebMediaLinkPreview.react",
	"WAWebMediaMmsV4Download",
	"WAWebMediaOpaqueData",
	"WAWebMediaStorage",
	"WAWebMediaTypes",
	"WAWebMenuBar.react",
	"WAWebMmsMediaTypes",
	"WAWebModalManager",
	"WAWebName.react",
	"WAWebOrderStatus",
	"WAWebRichOrderStatusLogger",
	"WAWebSelectModal.react",
	"WAWebSendTextMsgChatAction",
	"WAWebSpinner.react",
	"WAWebText.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WAWebWamEnumDownloadOriginType",
	"WAWebWamEnumWebcRmrReasonCode",
	"WDSButton.react",
	"WDSFontTokenStyles",
	"WDSIconIcCall.react",
	"WDSIconIcContentCopy.react",
	"WDSIconIcFastForward.react",
	"WDSIconIcMail.react",
	"WDSIconIcMoreVert.react",
	"WDSIconIcOpenInNew.react",
	"WDSPaddings.stylex",
	"asyncToGeneratorRuntime",
	"isStringNullOrEmpty",
	"react",
	"react-compiler-runtime",
	"stylex",
	"sumBy",
	"useWAWebContactValues",
	"useWAWebLinkPreview",
	"useWAWebTimeout",
	"vulture"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m, p = m || (m = o("react")), _ = m, f = _.useEffect, g = _.useMemo, h = _.useState, y = { paddingBlock10: {
		paddingTop: "x889kno",
		paddingBottom: "x1a8lsjc",
		$$css: !0
	} }, C = {
		sectionTitle: {
			color: "x14ug900",
			fontSize: "x1c3i2sq",
			fontWeight: "x1s688f",
			lineHeight: "xgif2c7",
			paddingTop: "x16ovd2e",
			paddingInlineEnd: "xcldk2z",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x1phvje8",
			$$css: !0
		},
		listItemContentWrapper: {
			columnGap: "xiyxwb5",
			$$css: !0
		},
		inheritFontWeight: {
			fontWeight: "x1pd3egz",
			$$css: !0
		},
		imageContainer: {
			position: "x1n2onr6",
			$$css: !0
		},
		imageWrapper: {
			width: "x1dmp6jm",
			height: "xwzfr38",
			$$css: !0
		},
		quantity: {
			boxSizing: "x9f619",
			position: "x10l6tqk",
			top: "x13vifvy",
			insetInlineEnd: "xtijo5x",
			left: null,
			right: null,
			transform: "x6640hw",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			minHeight: "x21xpn4",
			aspectRatio: "x1plog1",
			paddingTop: "x1nn3v0j",
			paddingInlineEnd: "x14vy60q",
			paddingBottom: "x1120s5i",
			paddingInlineStart: "xyiysdx",
			color: "xhslqc4",
			borderTopColor: "x1wpzk8y",
			borderInlineEndColor: "xts9ub1",
			borderBottomColor: "xhl97hz",
			borderInlineStartColor: "x16gmtct",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			fontSize: "x1c3i2sq",
			fontWeight: "x1s688f",
			backgroundColor: "x1c7u0tx",
			$$css: !0
		},
		footer: {
			marginTop: "xr1yuqi",
			backgroundColor: "x16w0wmm",
			boxShadow: "x11g758w",
			$$css: !0
		},
		linkPreview: {
			paddingTop: "x1y1aw1k",
			paddingInlineEnd: "xf159sx",
			paddingBottom: "xwib8y2",
			paddingInlineStart: "xmzvs34",
			width: "xh8yej3",
			boxSizing: "x9f619",
			$$css: !0
		},
		truncatedTextWrapper: {
			width: "xh8yej3",
			$$css: !0
		}
	}, b = Intl.DateTimeFormat(r("WAWebL10N").getFullLocale(), {
		month: "short",
		day: "numeric",
		weekday: "short"
	}), v = 2e3;
	function S(e) {
		var t = o("react-compiler-runtime").c(28), n = e.chat, a = e.message, i = e.onClose, l = e.openRequestTimestamp, u = e.orderStatusButton, c;
		t[0] !== n || t[1] !== u ? (c = o("WAWebOrderStatus").getMergedOrderStatus(n, u), t[0] = n, t[1] = u, t[2] = c) : c = t[2];
		var d = c, m = d.drawerButton, _ = d.lastMessage, f = m.order, g = f.links, y;
		t[3] !== g ? (y = g === void 0 ? [] : g, t[3] = g, t[4] = y) : y = t[4];
		var C = y, b = h(null), S = b[0], L = b[1], k;
		t[5] !== C ? (k = function(t) {
			L({
				menu: C.map(function(e) {
					var t = e.url, n = e.url_label;
					return p.jsx(o("WAWebDropdownItem.react").DropdownItem, {
						icon: p.jsx(r("WDSIconIcOpenInNew.react"), {}),
						action: function() {
							o("WAWebExternalLink.react").openExternalLink(t), L(null);
						},
						children: n
					}, t);
				}),
				anchor: t == null ? void 0 : t.target
			});
		}, t[5] = C, t[6] = k) : k = t[6];
		var I = k, D;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (D = function() {
			L(null);
		}, t[7] = D) : D = t[7];
		var $ = D, P;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (P = s._(
			/*BTDS*/
			""
		), t[8] = P) : P = t[8];
		var N = P, M = a === _, w = Math.max(0, M ? 0 : v - (Date.now() - l)), A = h(w > 0), F = A[0], O = A[1], B;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (B = function() {
			return O(!1);
		}, t[9] = B) : B = t[9];
		var W;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (W = { immediate: !0 }, t[10] = W) : W = t[10], o("useWAWebTimeout").useTimeout(B, w, W);
		var q;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (q = {
			surface: "unknown",
			viewName: "biz-order-status"
		}, t[11] = q) : q = t[11];
		var U;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (U = s._(
			/*BTDS*/
			""
		), t[12] = U) : U = t[12];
		var V;
		t[13] !== C.length || t[14] !== I ? (V = C.length > 0 ? p.jsx(o("WAWebMenuBar.react").MenuBarItem, {
			icon: p.jsx(r("WDSIconIcMoreVert.react"), {}),
			title: N,
			onClick: I
		}) : null, t[13] = C.length, t[14] = I, t[15] = V) : V = t[15];
		var H;
		t[16] !== i || t[17] !== V ? (H = p.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onCancel: i,
			title: U,
			rightActionElement: V
		}), t[16] = i, t[17] = V, t[18] = H) : H = t[18];
		var G;
		t[19] !== n || t[20] !== F || t[21] !== m || t[22] !== S || t[23] !== a ? (G = F ? p.jsx(r("WAWebDrawerBody.react"), { children: p.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			grow: 1,
			xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingVer40,
			children: [p.jsx(o("WAWebSpinner.react").Spinner, {
				size: 32,
				stroke: 4,
				color: "default"
			}), p.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
				xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingTop16,
				children: s._(
					/*BTDS*/
					""
				)
			})]
		}) }) : p.jsxs(p.Fragment, { children: [
			p.jsx(r("WAWebDrawerBody.react"), { children: p.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingTop4,
				children: [
					p.jsx(R, {
						chat: n,
						orderStatusButton: m,
						message: a
					}),
					p.jsx(r("WAWebGroupInfoSeparator.react"), { animation: !1 }),
					p.jsx(E, {
						chat: n,
						orderStatusButton: m,
						message: a
					}),
					p.jsx(r("WAWebGroupInfoSeparator.react"), { animation: !1 }),
					p.jsx(T, {
						chat: n,
						orderStatusButton: m,
						message: a
					})
				]
			}) }),
			p.jsx(x, {
				chat: n,
				orderStatusButton: m,
				message: a
			}),
			S && p.jsx(o("WAWebUimUie.react").UIE, {
				displayName: N.toString(),
				escapable: !0,
				popable: !0,
				dismissOnWindowResize: !0,
				requestDismiss: $,
				children: p.jsx(r("WAWebUimUieMenu.react"), { contextMenu: S })
			})
		] }), t[19] = n, t[20] = F, t[21] = m, t[22] = S, t[23] = a, t[24] = G) : G = t[24];
		var z;
		return t[25] !== H || t[26] !== G ? (z = p.jsxs(r("WAWebDrawer.react"), {
			tsNavigationData: q,
			children: [H, G]
		}), t[25] = H, t[26] = G, t[27] = z) : z = t[27], z;
	}
	function R(e) {
		var t = o("react-compiler-runtime").c(27), n = e.chat, a = e.message, i = e.orderStatusButton, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = [
			o("WAWebContactGetters").getIsMe,
			o("WAWebContactGetters").getShowBusinessCheckmarkAsPrimary,
			o("WAWebContactGetters").getShowBusinessCheckmarkAsSecondary,
			o("WAWebFrontendContactGetters").getShowBiz3pBotVerifiedNameAsSecondary
		], t[0] = l) : l = t[0];
		var u = o("useWAWebContactValues").useContactValues(n.contact.id, l), c = u[0], d = u[1], m = u[2], _ = u[3], f = i.order, g = f.items, h = f.order_date, y;
		t[1] !== g ? (y = N(g), t[1] = g, t[2] = y) : y = t[2];
		var C = y, v;
		e: {
			var S;
			if (t[3] !== h) {
				var R = h != null ? b.format(Number(h) * 1e3) : null;
				S = R != null ? s._(
					/*BTDS*/
					"",
					[s._param("order_date", R)]
				).toString() : null, t[3] = h, t[4] = S;
			} else S = t[4];
			var L = S;
			if (C != null || L != null) {
				var E;
				t[5] !== C || t[6] !== L ? (E = [C, L].filter(Boolean), t[5] = C, t[6] = L, t[7] = E) : E = t[7], v = E.join(" • ");
				break e;
			}
			var k;
			t[8] === Symbol.for("react.memo_cache_sentinel") ? (k = s._(
				/*BTDS*/
				""
			).toString(), t[8] = k) : k = t[8], v = k;
		}
		var I = v, T;
		t[9] !== n || t[10] !== a || t[11] !== i ? (T = function() {
			o("WAWebDrawerManager").DrawerManager.openDrawerRight(p.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
				chat: n,
				initialStep: o("WAWebInfoFlowStep").InfoFlowStep.ContactInfo,
				onBack: function() {
					return o("WAWebBizOpenOrderStatusDrawer.react").openOrderStatusDrawer(i, n, a);
				}
			}), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE });
		}, t[9] = n, t[10] = a, t[11] = i, t[12] = T) : T = t[12];
		var D = d || m || _, x;
		t[13] !== n || t[14] !== c || t[15] !== D ? (x = p.jsx(o("WAWebName.react").Name, {
			chat: n,
			ellipsify: !0,
			showBusinessCheckmark: D,
			showMessageYourselfName: c,
			testid: "order-status-drawer-contact-info-business-name"
		}), t[13] = n, t[14] = c, t[15] = D, t[16] = x) : x = t[16];
		var $;
		t[17] === Symbol.for("react.memo_cache_sentinel") ? ($ = "x1c4vz4f xisnujt x1nxh6w3 x1fc57z9 xhslqc4", t[17] = $) : $ = t[17];
		var P;
		t[18] !== I ? (P = p.jsx(o("WAWebEmojiText.react").EmojiText, {
			text: I,
			className: $,
			direction: "auto",
			titlify: !0
		}), t[18] = I, t[19] = P) : P = t[19];
		var M;
		t[20] !== n.id ? (M = p.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: n.id,
			size: 64,
			quality: o("WAWebDetailImage.react").DetailImageQuality.High
		}), t[20] = n.id, t[21] = M) : M = t[21];
		var w;
		return t[22] !== M || t[23] !== T || t[24] !== x || t[25] !== P ? (w = p.jsx(r("WAWebCellV2.react"), {
			size: "medium",
			onClick: T,
			primary: x,
			secondary: P,
			detailLeft: M,
			isRefresh: !0
		}), t[22] = M, t[23] = T, t[24] = x, t[25] = P, t[26] = w) : w = t[26], w;
	}
	function L(e) {
		var t = o("react-compiler-runtime").c(19), n = e.description, a = e.icon, i = e.onClick, l = e.onCopyClick, u = e.title, c;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (c = [o("WDSPaddings.stylex").wdsPaddings.paddingHor20, y.paddingBlock10], t[0] = c) : c = t[0];
		var d;
		t[1] !== l ? (d = l && p.jsx(o("WAWebFlex.react").FlexRow, {
			justify: "end",
			shrink: 0,
			children: p.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
				flex: !0,
				children: p.jsx(r("WDSButton.react"), {
					Icon: r("WDSIconIcContentCopy.react"),
					onPress: l,
					variant: "borderless",
					"aria-label": s._(
						/*BTDS*/
						""
					)
				})
			})
		}), t[1] = l, t[2] = d) : d = t[2];
		var m;
		t[3] !== a ? (m = p.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: o("WDSPaddings.stylex").wdsPaddings.padding8,
			align: "center",
			justify: "center",
			shrink: 0,
			children: p.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, { children: a })
		}), t[3] = a, t[4] = m) : m = t[4];
		var _;
		t[5] !== u ? (_ = p.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, { children: u }), t[5] = u, t[6] = _) : _ = t[6];
		var f;
		t[7] !== n ? (f = p.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, { children: n }), t[7] = n, t[8] = f) : f = t[8];
		var g;
		t[9] !== _ || t[10] !== f ? (g = p.jsxs(o("WAWebFlex.react").FlexColumn, {
			grow: 1,
			children: [_, f]
		}), t[9] = _, t[10] = f, t[11] = g) : g = t[11];
		var h;
		t[12] !== m || t[13] !== g ? (h = p.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: C.listItemContentWrapper,
			children: [m, g]
		}), t[12] = m, t[13] = g, t[14] = h) : h = t[14];
		var b;
		return t[15] !== i || t[16] !== d || t[17] !== h ? (b = p.jsx(r("WAWebDrawerBlock.react"), {
			multiline: !0,
			isRefresh: !0,
			separator: !1,
			blockXstyle: o("WDSPaddings.stylex").wdsPaddings.paddingEnd0,
			xstyle: c,
			side: d,
			onClick: i,
			children: h
		}), t[15] = i, t[16] = d, t[17] = h, t[18] = b) : b = t[18], b;
	}
	function E(e) {
		var t = o("react-compiler-runtime").c(32), n = e.chat, a = e.message, i = e.orderStatusButton, l = i.order, u = l.contact_info, c = l.order_creator_surface, d = l.shipping_method, m = l.status, _ = l.tracking, f;
		t[0] !== c ? (f = c === "biz_inbox" && o("WAWebABProps").getABPropConfigValue("utility_order_view_mbs_enabled"), t[0] = c, t[1] = f) : f = t[1];
		var g = f, h = k, y;
		t[2] !== m ? (y = o("WAWebBizFormatInteractiveMsg").getOrderStatusButtonBodyTitle(m), t[2] = m, t[3] = y) : y = t[3];
		var b;
		t[4] !== y ? (b = p.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: C.sectionTitle,
			shrink: 0,
			children: y
		}), t[4] = y, t[5] = b) : b = t[5];
		var v;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (v = s._(
			/*BTDS*/
			""
		), t[6] = v) : v = t[6];
		var S;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (S = p.jsx(o("WAWebIcNumbersIcon.react").IcNumbersIcon, { height: 24 }), t[7] = S) : S = t[7];
		var R;
		t[8] !== a || t[9] !== i.reference_id ? (R = function() {
			o("WAWebRichOrderStatusLogger").logRichOrderStatusInteraction(a.unsafe(), o("WAWebRichOrderStatusLogger").RichOrderStatusActionType.ORDER_NUMBER_COPY), h({
				textToCopy: i.reference_id,
				toastMessage: s._(
					/*BTDS*/
					""
				)
			});
		}, t[8] = a, t[9] = i.reference_id, t[10] = R) : R = t[10];
		var E;
		t[11] !== i.reference_id || t[12] !== R ? (E = p.jsx(L, {
			title: v,
			description: i.reference_id,
			icon: S,
			onCopyClick: R
		}), t[11] = i.reference_id, t[12] = R, t[13] = E) : E = t[13];
		var I;
		t[14] !== g || t[15] !== a || t[16] !== d || t[17] !== _ ? (I = !g && (_ ? p.jsx(L, {
			title: _.courier_name,
			description: _.tracking_ref,
			icon: p.jsx(o("WAWebIcLocalShippingIcon.react").IcLocalShippingIcon, { height: 24 }),
			onCopyClick: function() {
				o("WAWebRichOrderStatusLogger").logRichOrderStatusInteraction(a.unsafe(), o("WAWebRichOrderStatusLogger").RichOrderStatusActionType.TRACKING_NUMBER_COPY), h({
					textToCopy: _.tracking_ref,
					toastMessage: s._(
						/*BTDS*/
						""
					)
				});
			}
		}) : p.jsx(L, {
			title: s._(
				/*BTDS*/
				""
			),
			description: r("isStringNullOrEmpty")(d) ? s._(
				/*BTDS*/
				""
			) : d,
			icon: p.jsx(o("WAWebIcLocalShippingIcon.react").IcLocalShippingIcon, { height: 24 })
		})), t[14] = g, t[15] = a, t[16] = d, t[17] = _, t[18] = I) : I = t[18];
		var T;
		t[19] !== n || t[20] !== i || t[21] !== _ ? (T = o("WAWebOrderStatus").shouldShowTrackingInfo(i) && (_ == null ? void 0 : _.tracking_url) && p.jsx(L, {
			title: s._(
				/*BTDS*/
				""
			),
			icon: p.jsx(r("WDSIconIcFastForward.react"), {
				directional: !0,
				height: 24,
				width: 24,
				testid: "forward-refreshed"
			}),
			onClick: function() {
				o("WAWebModalManager").ModalManager.open(p.jsx(P, {
					chat: n,
					tracking: _
				}));
			}
		}), t[19] = n, t[20] = i, t[21] = _, t[22] = T) : T = t[22];
		var D;
		t[23] !== n || t[24] !== u ? (D = ((u == null ? void 0 : u.email) != null || (u == null ? void 0 : u.phone_number) != null || (u == null ? void 0 : u.support_url) != null) && p.jsx(L, {
			title: s._(
				/*BTDS*/
				""
			),
			icon: p.jsx(o("WAWebInfoRefreshedIcon.react").InfoRefreshedIcon, { height: 24 }),
			onClick: function() {
				o("WAWebModalManager").ModalManager.open(p.jsx($, {
					contactInfo: u,
					chat: n,
					onCopyClick: function(t, n) {
						h({
							textToCopy: t,
							toastMessage: n,
							toastPosition: o("WAWebToastManager").ToastPosition.CENTER
						});
					}
				}));
			}
		}), t[23] = n, t[24] = u, t[25] = D) : D = t[25];
		var x;
		return t[26] !== T || t[27] !== D || t[28] !== b || t[29] !== E || t[30] !== I ? (x = p.jsxs(p.Fragment, { children: [
			b,
			E,
			I,
			T,
			D
		] }), t[26] = T, t[27] = D, t[28] = b, t[29] = E, t[30] = I, t[31] = x) : x = t[31], x;
	}
	function k(e) {
		return I.apply(this, arguments);
	}
	function I() {
		return I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.textToCopy, n = e.toastMessage, r = e.toastPosition, a = r === void 0 ? o("WAWebToastManager").ToastPosition.RIGHT : r, i = yield o("WAWebCopyToClipboard").copyTextToClipboard(t);
			if (!i) return o("WAWebToastManager").ToastManager.open(p.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) }), a);
			o("WAWebToastManager").ToastManager.open(p.jsx(o("WAWebToast.react").Toast, { msg: n }), a);
		}), I.apply(this, arguments);
	}
	function T(e) {
		var t = e.chat, n = e.message, a = e.orderStatusButton, i = a.order, l = i.items, u = l === void 0 ? [] : l, c = i.order_url, m = i.currency, _ = g(function() {
			if (m != null) return Intl.NumberFormat(r("WAWebL10N").getFullLocale(), {
				style: "currency",
				currency: m
			});
		}, [m]), f = N(u);
		return p.jsxs(p.Fragment, { children: [p.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: C.sectionTitle,
			shrink: 0,
			children: f == null ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				"",
				[s._param("item_count_text", f)]
			)
		}), u.length > 0 ? p.jsxs(o("WAWebFlex.react").FlexColumn, {
			gap: 12,
			align: "stretch",
			shrink: 0,
			paddingBottom: 16,
			children: [p.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				children: u.map(function(e, t) {
					var a = e.amount != null ? e.amount.value / e.amount.offset : null;
					return p.jsx("div", babelHelpers.extends({ onClick: function() {
						o("WAWebRichOrderStatusLogger").logRichOrderStatusInteraction(n.unsafe(), o("WAWebRichOrderStatusLogger").RichOrderStatusActionType.ORDER_ITEM_ROW_CLICK);
					} }, (d || (d = r("stylex"))).props([o("WDSPaddings.stylex").wdsPaddings.paddingHor20, o("WDSPaddings.stylex").wdsPaddings.paddingVer12]), { children: p.jsxs(o("WAWebFlex.react").FlexRow, {
						gap: 16,
						align: "center",
						shrink: 0,
						children: [
							p.jsxs(o("WAWebFlex.react").FlexColumn, {
								xstyle: C.imageContainer,
								shrink: 0,
								children: [p.jsx(D, { item: e }), e.quantity > 1 && p.jsx(o("WAWebFlex.react").FlexColumn, {
									align: "center",
									justify: "center",
									shrink: 0,
									xstyle: C.quantity,
									children: e.quantity > 99 ? s._(
										/*BTDS*/
										""
									) : r("WAWebL10N").n(e.quantity)
								})]
							}),
							p.jsxs(o("WAWebFlex.react").FlexColumn, {
								grow: 1,
								children: [p.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
									xstyle: C.truncatedTextWrapper,
									children: p.jsx("div", babelHelpers.extends({}, {
										0: { className: "x104kibb x1h7i4cw x1ua5tub x6ikm8r x10wlt62 xlyipyv" },
										1: { className: "x6ikm8r x10wlt62 xlyipyv xuxw1ft xh8yej3" }
									}[(e.variant != null) << 0], { children: e.name }))
								}), e.variant != null ? p.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
									xstyle: C.truncatedTextWrapper,
									children: p.jsx("div", {
										className: "x6ikm8r x10wlt62 xlyipyv xuxw1ft xh8yej3",
										children: e.variant
									})
								}) : null]
							}),
							a != null && _ != null ? p.jsx(o("WAWebFlex.react").FlexColumn, {
								shrink: 0,
								children: p.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, { children: _.format(a) })
							}) : null
						]
					}) }), t);
				})
			}), o("WAWebOrderStatus").shouldShowTrackingInfo(a) && c != null && p.jsx(o("WAWebFlex.react").FlexRow, {
				xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingHor16,
				children: p.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
					icon: r("WDSIconIcOpenInNew.react"),
					onClick: function() {
						o("WAWebRichOrderStatusLogger").logRichOrderStatusInteraction(n.unsafe(), o("WAWebRichOrderStatusLogger").RichOrderStatusActionType.VIEW_ORDER_SECONDARY_CLICK), o("WAWebExternalLink.react").openExternalLink(c);
					},
					children: M(t)
				})
			})]
		}) : p.jsxs(o("WAWebFlex.react").FlexRow, {
			gap: 16,
			align: "center",
			xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingHor20, o("WDSPaddings.stylex").wdsPaddings.paddingVer12],
			children: [p.jsx(o("WAWebFlex.react").FlexColumn, {
				shrink: 0,
				xstyle: C.imageWrapper,
				children: p.jsx(o("WAWebInteractiveOrderStatusHeader.react").InteractiveOrderStatusHeaderImage, { message: n })
			}), p.jsx(o("WAWebFlex.react").FlexColumn, {
				grow: 1,
				children: p.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, { children: s._(
					/*BTDS*/
					"",
					[s._param("business_name", c != null ? p.jsx(o("WAWebExternalLink.react").ExternalLink, {
						href: c,
						onClick: function() {
							o("WAWebRichOrderStatusLogger").logRichOrderStatusInteraction(n.unsafe(), o("WAWebRichOrderStatusLogger").RichOrderStatusActionType.VIEW_ORDER_ITEM_PLACEHOLDER_CLICK);
						},
						children: p.jsx(o("WAWebName.react").Name, { chat: t })
					}) : p.jsx(o("WAWebName.react").Name, { chat: t }))]
				) })
			})]
		})] });
	}
	T.displayName = T.name + " [from " + i.id + "]";
	function D(t) {
		var n = o("react-compiler-runtime").c(15), a = t.item, i = a.image, l = i.jpeg_thumbnail, s = i.media_key, u = i.media_key_timestamp, c = i.mimetype, d = i.thumbnail_direct_path, m = i.thumbnail_enc_sha256, _ = i.thumbnail_sha256, g = i.url, y = h(null), C = y[0], b = y[1], v = h(!0), S = v[0], R = v[1], L, E;
		n[0] !== g || n[1] !== d || n[2] !== m || n[3] !== l || n[4] !== s || n[5] !== u || n[6] !== c || n[7] !== _ ? (L = function() {
			var t = _, n = o("WAWebMediaStorage").getOrCreateMediaObject(t), a = {
				debugHint: "setMediaObjectValues",
				deprecatedMms3Url: g,
				directPath: d,
				encFilehash: m,
				mediaKey: s,
				mediaKeyTimestamp: u,
				type: o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE
			};
			n.entries.addEntry(a), n.consolidate(babelHelpers.extends({}, a, {
				filehash: t,
				type: o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE
			})), o("WAWebMediaMmsV4Download").downloadMedia({
				downloadEvenIfExpensive: !0,
				downloadOrigin: o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.CHAT_PERSONAL,
				mediaObject: n,
				mediaType: o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_IMAGE,
				mimetype: c,
				rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.MSG_RENDER,
				shouldThrow: !0
			}).then(function() {
				var e, a = (e = n.mediaBlob) != null ? e : o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(t), i = a && (a instanceof r("WAWebMediaOpaqueData") ? a.url() : URL.createObjectURL(a));
				i != null && b(i);
			}, function(t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to download item image"]))).catching(t).sendLogs("order_status:item_image_download_failed"), b("data:image/jpeg;base64," + l);
			}).finally(function() {
				R(!1);
			});
		}, E = [
			g,
			d,
			m,
			s,
			u,
			c,
			_,
			l
		], n[0] = g, n[1] = d, n[2] = m, n[3] = l, n[4] = s, n[5] = u, n[6] = c, n[7] = _, n[8] = L, n[9] = E) : (L = n[8], E = n[9]), f(L, E);
		var k;
		n[10] === Symbol.for("react.memo_cache_sentinel") ? (k = { className: "x1dmp6jm xwzfr38" }, n[10] = k) : k = n[10];
		var I;
		return n[11] !== C || n[12] !== a.name || n[13] !== S ? (I = p.jsx("div", babelHelpers.extends({}, k, { children: S ? p.jsx(o("WAWebSpinner.react").Spinner, {
			size: 24,
			stroke: 3,
			color: "default"
		}) : p.jsx("img", {
			src: C,
			alt: a.name,
			className: "xh8yej3 x5yr21d xl1xv1r xrlxcrs x7g1fbw xxl59ln xmw6rta"
		}) })), n[11] = C, n[12] = a.name, n[13] = S, n[14] = I) : I = n[14], I;
	}
	function x(e) {
		var t = o("react-compiler-runtime").c(15), n = e.chat, a = e.message, i = e.orderStatusButton, l = i.order, u = l.order_url, c = l.status, d = l.tracking, m;
		t[0] !== i ? (m = o("WAWebOrderStatus").shouldShowTrackingInfo(i), t[0] = i, t[1] = m) : m = t[1];
		var _ = m, f;
		e: {
			if (_) {
				var g;
				t[2] !== c ? (g = c === o("WAWebOrderStatus").OrderStatus.Complete || c === o("WAWebOrderStatus").OrderStatus.Delivered ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				), t[2] = c, t[3] = g) : g = t[3], f = g;
				break e;
			}
			var h;
			t[4] !== n ? (h = M(n), t[4] = n, t[5] = h) : h = t[5], f = h;
		}
		var y = f;
		if (u == null && d == null) return null;
		var b;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (b = [o("WDSPaddings.stylex").wdsPaddings.padding16, C.footer], t[6] = b) : b = t[6];
		var v;
		t[7] !== a || t[8] !== u || t[9] !== _ || t[10] !== d ? (v = function() {
			d != null && _ ? (o("WAWebRichOrderStatusLogger").logRichOrderStatusInteraction(a.unsafe(), o("WAWebRichOrderStatusLogger").RichOrderStatusActionType.ORDER_TRACKING_URL_CLICK), o("WAWebExternalLink.react").openExternalLink(d.tracking_url)) : u != null && (o("WAWebRichOrderStatusLogger").logRichOrderStatusInteraction(a.unsafe(), o("WAWebRichOrderStatusLogger").RichOrderStatusActionType.VIEW_ORDER_PRIMARY_CLICK), o("WAWebExternalLink.react").openExternalLink(u));
		}, t[7] = a, t[8] = u, t[9] = _, t[10] = d, t[11] = v) : v = t[11];
		var S;
		return t[12] !== y || t[13] !== v ? (S = p.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: b,
			shrink: 0,
			align: "stretch",
			children: p.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
				icon: r("WDSIconIcOpenInNew.react"),
				onClick: v,
				stretch: !0,
				children: y
			})
		}), t[12] = y, t[13] = v, t[14] = S) : S = t[14], S;
	}
	function $(e) {
		var t = e.chat, n = e.contactInfo, a = e.onCopyClick;
		r("vulture")("TiLJ6aUJHeYkQhZEYnQO41gNGZI=");
		var i = n.email, l = n.phone_number, u = n.support_url;
		return p.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: s._(
				/*BTDS*/
				"",
				[s._param("businessName", p.jsx(o("WAWebName.react").Name, { chat: t }))]
			),
			onOK: o("WAWebModalManager").closeModalManager,
			tsNavigationData: {
				surface: "unknown",
				viewName: "biz-order-contact-info"
			},
			children: p.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				gap: 40,
				xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingTop24,
				children: [
					u != null && p.jsx(o("WAWebFlex.react").FlexRow, {
						align: "center",
						xstyle: C.listItemContentWrapper,
						children: p.jsx(o("WAWebExternalLink.react").ExternalLink, {
							href: u.url,
							children: p.jsxs(o("WAWebFlex.react").FlexRow, {
								dir: r("WAWebL10N").LR("ltr", "rtl"),
								align: "center",
								grow: 1,
								xstyle: [
									C.listItemContentWrapper,
									o("WDSFontTokenStyles").WDSFontTokenStyles.Body1,
									C.inheritFontWeight
								],
								children: [p.jsx(r("WDSIconIcOpenInNew.react"), { height: 24 }), u.url_label]
							})
						})
					}),
					i != null && p.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						xstyle: C.listItemContentWrapper,
						children: [
							p.jsx(o("WAWebFlex.react").FlexRow, {
								align: "center",
								justify: "center",
								shrink: 0,
								children: p.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, { children: p.jsx(r("WDSIconIcMail.react"), { height: 24 }) })
							}),
							p.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
								grow: 1,
								children: i
							}),
							p.jsx(o("WAWebFlex.react").FlexRow, {
								justify: "end",
								shrink: 0,
								children: p.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
									flex: !0,
									children: p.jsx(r("WDSButton.react"), {
										Icon: r("WDSIconIcContentCopy.react"),
										onPress: function() {
											return a(i, s._(
												/*BTDS*/
												""
											));
										},
										variant: "borderless",
										"aria-label": s._(
											/*BTDS*/
											""
										)
									})
								})
							})
						]
					}),
					l != null && p.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						xstyle: C.listItemContentWrapper,
						children: [
							p.jsx(o("WAWebFlex.react").FlexRow, {
								align: "center",
								justify: "center",
								shrink: 0,
								children: p.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, { children: p.jsx(r("WDSIconIcCall.react"), { height: 24 }) })
							}),
							p.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
								grow: 1,
								children: p.jsx("span", {
									dir: "ltr",
									children: l
								})
							}),
							p.jsx(o("WAWebFlex.react").FlexRow, {
								justify: "end",
								shrink: 0,
								children: p.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
									flex: !0,
									children: p.jsx(r("WDSButton.react"), {
										Icon: r("WDSIconIcContentCopy.react"),
										onPress: function() {
											return a(l, s._(
												/*BTDS*/
												""
											));
										},
										variant: "borderless",
										"aria-label": s._(
											/*BTDS*/
											""
										)
									})
								})
							})
						]
					})
				]
			})
		});
	}
	$.displayName = $.name + " [from " + i.id + "]";
	function P(e) {
		var t = e.chat, a = e.tracking, i = a.tracking_url, l = o("WAWebLinkify").findLink({ text: i }), d = o("useWAWebLinkPreview").useLinkPreview(l, t), m = d.linkPreview;
		return p.jsx(o("WAWebSelectModal.react").SelectModal, {
			onConfirm: function(t) {
				var e = t.selectedItems, r = e;
				r.forEach((function() {
					var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
						o("WAWebSendTextMsgChatAction").sendTextMsgToChat(e, i, { linkPreview: m }).catch(function() {
							o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[ForwardDeliveryUpdatesModal] send msg failed"])));
						});
					});
					return function(t) {
						return e.apply(this, arguments);
					};
				})()), o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[OrderStatusDrawer] onConfirm for ", " chats"])), r.length), o("WAWebModalManager").ModalManager.close();
			},
			maxItems: 5,
			excludeChat: t,
			title: s._(
				/*BTDS*/
				""
			),
			listType: o("WAWebSelectModal.react").ListType.ChatSelectModal,
			tsNavigationData: {
				surface: "unknown",
				viewName: "forward-delivery-updates"
			},
			previewComponent: p.jsx(r("WAWebMediaLinkPreview.react"), {
				isLoading: m == null,
				compose: (m == null ? void 0 : m.thumbnail) == null || (m == null ? void 0 : m.thumbnail) === "",
				containerXstyle: C.linkPreview,
				title: m == null ? void 0 : m.title,
				description: m == null ? void 0 : m.description,
				matchedText: (m == null ? void 0 : m.matchedText) || i,
				thumbnailJpeg: m == null ? void 0 : m.thumbnail,
				thumbnailJpegHQ: m == null ? void 0 : m.thumbnailHQ,
				thumbnailJpegWidth: m == null ? void 0 : m.thumbnailWidth,
				thumbnailJpegHeight: m == null ? void 0 : m.thumbnailHeight
			})
		});
	}
	P.displayName = P.name + " [from " + i.id + "]";
	function N(e) {
		if (e == null || e.length === 0) return null;
		var t = r("sumBy")(e, function(e) {
			return e.quantity;
		});
		return s._(
			/*BTDS*/
			"",
			[s._plural(t, "item_count", r("WAWebL10N").n(t))]
		).toString();
	}
	function M(e) {
		var t = e.formattedTitle;
		return t.length <= 15 ? s._(
			/*BTDS*/
			"",
			[s._param("business_name", t)]
		) : s._(
			/*BTDS*/
			""
		);
	}
	l.default = S;
}), 226);
