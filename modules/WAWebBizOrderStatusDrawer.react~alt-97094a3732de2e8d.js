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
	"isStringNullOrEmpty",
	"react",
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
		var t = e.chat, n = e.message, a = e.onClose, i = e.openRequestTimestamp, l = e.orderStatusButton, u = g(function() {
			return o("WAWebOrderStatus").getMergedOrderStatus(t, l);
		}, [t, l]), c = u.drawerButton, d = u.lastMessage, m = c.order.links, _ = m === void 0 ? [] : m, f = h(null), y = f[0], C = f[1], b = function(t) {
			C({
				menu: _.map(function(e) {
					var t = e.url, n = e.url_label;
					return p.jsx(o("WAWebDropdownItem.react").DropdownItem, {
						icon: p.jsx(r("WDSIconIcOpenInNew.react"), {}),
						action: function() {
							o("WAWebExternalLink.react").openExternalLink(t), C(null);
						},
						children: n
					}, t);
				}),
				anchor: t == null ? void 0 : t.target
			});
		}, S = function() {
			C(null);
		}, L = s._(
			/*BTDS*/
			""
		), I = n === d, D = Math.max(0, I ? 0 : v - (Date.now() - i)), x = h(D > 0), $ = x[0], P = x[1];
		return o("useWAWebTimeout").useTimeout(function() {
			return P(!1);
		}, D, { immediate: !0 }), p.jsxs(r("WAWebDrawer.react"), {
			tsNavigationData: {
				surface: "unknown",
				viewName: "biz-order-status"
			},
			children: [p.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onCancel: a,
				title: s._(
					/*BTDS*/
					""
				),
				rightActionElement: _.length > 0 ? p.jsx(o("WAWebMenuBar.react").MenuBarItem, {
					icon: p.jsx(r("WDSIconIcMoreVert.react"), {}),
					title: L,
					onClick: b
				}) : null
			}), $ ? p.jsx(r("WAWebDrawerBody.react"), { children: p.jsxs(o("WAWebFlex.react").FlexColumn, {
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
							chat: t,
							orderStatusButton: c,
							message: n
						}),
						p.jsx(r("WAWebGroupInfoSeparator.react"), { animation: !1 }),
						p.jsx(E, {
							chat: t,
							orderStatusButton: c,
							message: n
						}),
						p.jsx(r("WAWebGroupInfoSeparator.react"), { animation: !1 }),
						p.jsx(k, {
							chat: t,
							orderStatusButton: c,
							message: n
						})
					]
				}) }),
				p.jsx(T, {
					chat: t,
					orderStatusButton: c,
					message: n
				}),
				y && p.jsx(o("WAWebUimUie.react").UIE, {
					displayName: L.toString(),
					escapable: !0,
					popable: !0,
					dismissOnWindowResize: !0,
					requestDismiss: S,
					children: p.jsx(r("WAWebUimUieMenu.react"), { contextMenu: y })
				})
			] })]
		});
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e) {
		var t = e.chat, n = e.message, a = e.orderStatusButton, i = o("useWAWebContactValues").useContactValues(t.contact.id, [
			o("WAWebContactGetters").getIsMe,
			o("WAWebContactGetters").getShowBusinessCheckmarkAsPrimary,
			o("WAWebContactGetters").getShowBusinessCheckmarkAsSecondary,
			o("WAWebFrontendContactGetters").getShowBiz3pBotVerifiedNameAsSecondary
		]), l = i[0], u = i[1], c = i[2], d = i[3], m = a.order, _ = m.items, f = m.order_date, h = $(_), y = g(function() {
			var e = f != null ? b.format(Number(f) * 1e3) : null, t = e != null ? s._(
				/*BTDS*/
				"",
				[s._param("order_date", e)]
			).toString() : null;
			return h != null || t != null ? [h, t].filter(Boolean).join(" • ") : s._(
				/*BTDS*/
				""
			).toString();
		}, [h, f]);
		return p.jsx(r("WAWebCellV2.react"), {
			size: "medium",
			onClick: function() {
				o("WAWebDrawerManager").DrawerManager.openDrawerRight(p.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
					chat: t,
					initialStep: o("WAWebInfoFlowStep").InfoFlowStep.ContactInfo,
					onBack: function() {
						return o("WAWebBizOpenOrderStatusDrawer.react").openOrderStatusDrawer(a, t, n);
					}
				}), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE });
			},
			primary: p.jsx(o("WAWebName.react").Name, {
				chat: t,
				ellipsify: !0,
				showBusinessCheckmark: u || c || d,
				showMessageYourselfName: l,
				testid: "order-status-drawer-contact-info-business-name"
			}),
			secondary: p.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: y,
				className: "x1c4vz4f xisnujt x1nxh6w3 x1fc57z9 xhslqc4",
				direction: "auto",
				titlify: !0
			}),
			detailLeft: p.jsx(o("WAWebDetailImage.react").DetailImage, {
				id: t.id,
				size: 64,
				quality: o("WAWebDetailImage.react").DetailImageQuality.High
			}),
			isRefresh: !0
		});
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		var t = e.description, n = e.icon, a = e.onClick, i = e.onCopyClick, l = e.title;
		return p.jsx(r("WAWebDrawerBlock.react"), {
			multiline: !0,
			isRefresh: !0,
			separator: !1,
			blockXstyle: o("WDSPaddings.stylex").wdsPaddings.paddingEnd0,
			xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingHor20, y.paddingBlock10],
			side: i && p.jsx(o("WAWebFlex.react").FlexRow, {
				justify: "end",
				shrink: 0,
				children: p.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
					flex: !0,
					children: p.jsx(r("WDSButton.react"), {
						Icon: r("WDSIconIcContentCopy.react"),
						onPress: i,
						variant: "borderless",
						"aria-label": s._(
							/*BTDS*/
							""
						)
					})
				})
			}),
			onClick: a,
			children: p.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: C.listItemContentWrapper,
				children: [p.jsx(o("WAWebFlex.react").FlexRow, {
					xstyle: o("WDSPaddings.stylex").wdsPaddings.padding8,
					align: "center",
					justify: "center",
					shrink: 0,
					children: p.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, { children: n })
				}), p.jsxs(o("WAWebFlex.react").FlexColumn, {
					grow: 1,
					children: [p.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, { children: l }), p.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, { children: t })]
				})]
			})
		});
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E(e) {
		var t = e.chat, n = e.message, a = e.orderStatusButton, i = a.order, l = i.contact_info, u = i.order_creator_surface, c = i.shipping_method, d = i.status, m = i.tracking, _ = u === "biz_inbox" && o("WAWebABProps").getABPropConfigValue("utility_order_view_mbs_enabled"), f = async function(t) {
			var e = t.textToCopy, n = t.toastMessage, r = t.toastPosition, a = r === void 0 ? o("WAWebToastManager").ToastPosition.RIGHT : r, i = await o("WAWebCopyToClipboard").copyTextToClipboard(e);
			if (!i) return o("WAWebToastManager").ToastManager.open(p.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) }), a);
			o("WAWebToastManager").ToastManager.open(p.jsx(o("WAWebToast.react").Toast, { msg: n }), a);
		};
		return p.jsxs(p.Fragment, { children: [
			p.jsx(o("WAWebFlex.react").FlexColumn, {
				xstyle: C.sectionTitle,
				shrink: 0,
				children: o("WAWebBizFormatInteractiveMsg").getOrderStatusButtonBodyTitle(d)
			}),
			p.jsx(L, {
				title: s._(
					/*BTDS*/
					""
				),
				description: a.reference_id,
				icon: p.jsx(o("WAWebIcNumbersIcon.react").IcNumbersIcon, { height: 24 }),
				onCopyClick: function() {
					o("WAWebRichOrderStatusLogger").logRichOrderStatusInteraction(n.unsafe(), o("WAWebRichOrderStatusLogger").RichOrderStatusActionType.ORDER_NUMBER_COPY), f({
						textToCopy: a.reference_id,
						toastMessage: s._(
							/*BTDS*/
							""
						)
					});
				}
			}),
			!_ && (m ? p.jsx(L, {
				title: m.courier_name,
				description: m.tracking_ref,
				icon: p.jsx(o("WAWebIcLocalShippingIcon.react").IcLocalShippingIcon, { height: 24 }),
				onCopyClick: function() {
					o("WAWebRichOrderStatusLogger").logRichOrderStatusInteraction(n.unsafe(), o("WAWebRichOrderStatusLogger").RichOrderStatusActionType.TRACKING_NUMBER_COPY), f({
						textToCopy: m.tracking_ref,
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
				description: r("isStringNullOrEmpty")(c) ? s._(
					/*BTDS*/
					""
				) : c,
				icon: p.jsx(o("WAWebIcLocalShippingIcon.react").IcLocalShippingIcon, { height: 24 })
			})),
			o("WAWebOrderStatus").shouldShowTrackingInfo(a) && (m == null ? void 0 : m.tracking_url) && p.jsx(L, {
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
					o("WAWebModalManager").ModalManager.open(p.jsx(x, {
						chat: t,
						tracking: m
					}));
				}
			}),
			((l == null ? void 0 : l.email) != null || (l == null ? void 0 : l.phone_number) != null || (l == null ? void 0 : l.support_url) != null) && p.jsx(L, {
				title: s._(
					/*BTDS*/
					""
				),
				icon: p.jsx(o("WAWebInfoRefreshedIcon.react").InfoRefreshedIcon, { height: 24 }),
				onClick: function() {
					o("WAWebModalManager").ModalManager.open(p.jsx(D, {
						contactInfo: l,
						chat: t,
						onCopyClick: function(t, n) {
							f({
								textToCopy: t,
								toastMessage: n,
								toastPosition: o("WAWebToastManager").ToastPosition.CENTER
							});
						}
					}));
				}
			})
		] });
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k(e) {
		var t = e.chat, n = e.message, a = e.orderStatusButton, i = a.order, l = i.items, u = l === void 0 ? [] : l, c = i.order_url, m = i.currency, _ = g(function() {
			if (m != null) return Intl.NumberFormat(r("WAWebL10N").getFullLocale(), {
				style: "currency",
				currency: m
			});
		}, [m]), f = $(u);
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
								children: [p.jsx(I, { item: e }), e.quantity > 1 && p.jsx(o("WAWebFlex.react").FlexColumn, {
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
					children: P(t)
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
	k.displayName = k.name + " [from " + i.id + "]";
	function I(t) {
		var n = t.item, a = n.image, i = a.jpeg_thumbnail, l = a.media_key, s = a.media_key_timestamp, u = a.mimetype, c = a.thumbnail_direct_path, d = a.thumbnail_enc_sha256, m = a.thumbnail_sha256, _ = a.url, g = h(null), y = g[0], C = g[1], b = h(!0), v = b[0], S = b[1];
		return f(function() {
			var t = m, n = o("WAWebMediaStorage").getOrCreateMediaObject(t), a = {
				debugHint: "setMediaObjectValues",
				deprecatedMms3Url: _,
				directPath: c,
				encFilehash: d,
				mediaKey: l,
				mediaKeyTimestamp: s,
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
				mimetype: u,
				rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.MSG_RENDER,
				shouldThrow: !0
			}).then(function() {
				var e, a = (e = n.mediaBlob) != null ? e : o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(t), i = a && (a instanceof r("WAWebMediaOpaqueData") ? a.url() : URL.createObjectURL(a));
				i != null && C(i);
			}, function(t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to download item image"]))).catching(t).sendLogs("order_status:item_image_download_failed"), C("data:image/jpeg;base64," + i);
			}).finally(function() {
				S(!1);
			});
		}, [
			_,
			c,
			d,
			l,
			s,
			u,
			m,
			i
		]), p.jsx("div", {
			className: "x1dmp6jm xwzfr38",
			children: v ? p.jsx(o("WAWebSpinner.react").Spinner, {
				size: 24,
				stroke: 3,
				color: "default"
			}) : p.jsx("img", {
				src: y,
				alt: n.name,
				className: "xh8yej3 x5yr21d xl1xv1r xrlxcrs x7g1fbw xxl59ln xmw6rta"
			})
		});
	}
	I.displayName = I.name + " [from " + i.id + "]";
	function T(e) {
		var t = e.chat, n = e.message, a = e.orderStatusButton, i = a.order, l = i.order_url, u = i.status, c = i.tracking, d = o("WAWebOrderStatus").shouldShowTrackingInfo(a), m = g(function() {
			return d ? u === o("WAWebOrderStatus").OrderStatus.Complete || u === o("WAWebOrderStatus").OrderStatus.Delivered ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			) : P(t);
		}, [
			u,
			d,
			t
		]);
		return l == null && c == null ? null : p.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: [o("WDSPaddings.stylex").wdsPaddings.padding16, C.footer],
			shrink: 0,
			align: "stretch",
			children: p.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
				icon: r("WDSIconIcOpenInNew.react"),
				onClick: function() {
					c != null && d ? (o("WAWebRichOrderStatusLogger").logRichOrderStatusInteraction(n.unsafe(), o("WAWebRichOrderStatusLogger").RichOrderStatusActionType.ORDER_TRACKING_URL_CLICK), o("WAWebExternalLink.react").openExternalLink(c.tracking_url)) : l != null && (o("WAWebRichOrderStatusLogger").logRichOrderStatusInteraction(n.unsafe(), o("WAWebRichOrderStatusLogger").RichOrderStatusActionType.VIEW_ORDER_PRIMARY_CLICK), o("WAWebExternalLink.react").openExternalLink(l));
				},
				stretch: !0,
				children: m
			})
		});
	}
	T.displayName = T.name + " [from " + i.id + "]";
	function D(e) {
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
	D.displayName = D.name + " [from " + i.id + "]";
	function x(e) {
		var t = e.chat, n = e.tracking, a = n.tracking_url, i = o("WAWebLinkify").findLink({ text: a }), l = o("useWAWebLinkPreview").useLinkPreview(i, t), d = l.linkPreview;
		return p.jsx(o("WAWebSelectModal.react").SelectModal, {
			onConfirm: function(t) {
				var e = t.selectedItems, n = e;
				n.forEach(async function(e) {
					o("WAWebSendTextMsgChatAction").sendTextMsgToChat(e, a, { linkPreview: d }).catch(function() {
						o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[ForwardDeliveryUpdatesModal] send msg failed"])));
					});
				}), o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[OrderStatusDrawer] onConfirm for ", " chats"])), n.length), o("WAWebModalManager").ModalManager.close();
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
				isLoading: d == null,
				compose: (d == null ? void 0 : d.thumbnail) == null || (d == null ? void 0 : d.thumbnail) === "",
				containerXstyle: C.linkPreview,
				title: d == null ? void 0 : d.title,
				description: d == null ? void 0 : d.description,
				matchedText: (d == null ? void 0 : d.matchedText) || a,
				thumbnailJpeg: d == null ? void 0 : d.thumbnail,
				thumbnailJpegHQ: d == null ? void 0 : d.thumbnailHQ,
				thumbnailJpegWidth: d == null ? void 0 : d.thumbnailWidth,
				thumbnailJpegHeight: d == null ? void 0 : d.thumbnailHeight
			})
		});
	}
	x.displayName = x.name + " [from " + i.id + "]";
	function $(e) {
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
	function P(e) {
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
