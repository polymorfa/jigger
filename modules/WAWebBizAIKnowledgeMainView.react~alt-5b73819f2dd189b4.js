__d("WAWebBizAIKnowledgeMainView.react", [
	"fbt",
	"WAWebBizAIKnowledgeDrawerHelpers",
	"WAWebBizAIKnowledgeFaqItem.react",
	"WAWebBizAIKnowledgeGoogleDriveItem.react",
	"WAWebBizAIKnowledgeGoogleDriveTypes",
	"WAWebBizAIKnowledgeProductItem.react",
	"WAWebBizAIKnowledgeSourceItem.react",
	"WAWebBizAIKnowledgeUploadingSourceItem.react",
	"WAWebBizAILargeScreensLogEvents",
	"WAWebBizAITextLinkButton.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebGroupInfoSeparator.react",
	"WAWebSpinner.react",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WDSButton.react",
	"WDSIconIcAdd.react",
	"WDSIconIcHistory.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useMemo, d = {
		body: {
			paddingInlineStart: "x1g0dm76",
			paddingInlineEnd: "xpdmqnj",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		sourceIcon: {
			color: "xhslqc4",
			flexShrink: "x2lah0s",
			height: "xxk0z11",
			width: "xvy4d1p",
			$$css: !0
		}
	};
	function m(e) {
		var t = e.addExampleButton, n = e.addExampleMenu, a = e.addSourceButtonRef, i = e.addSourceMenu, l = e.chatHistoryExportStatus, m = e.deletingFaqIds, _ = e.deletingGoogleDriveIds, f = e.deletingProductIds, g = e.deletingSourceIds, h = e.faqs, y = e.googleDriveEnabled, C = e.googleDriveFiles, b = e.googleDriveFilesError, v = e.googleDriveFilesLoading, S = e.isProductEligible, R = e.onBack, L = e.onDeleteFaqItem, E = e.onDeleteGoogleDriveFile, k = e.onDeleteProduct, I = e.onDeleteSource, T = e.onDismissAddExampleMenu, D = e.onDismissAddSourceMenu, x = e.onEditKnowledgeItem, $ = e.onOpenAddSourceMenu, P = e.onOpenProductModal, N = e.onPushStep, M = e.openChatHistoryEducationModal, w = e.products, A = e.ref, F = e.refreshBanner, O = e.sources, B = e.uploadingFileNames, W = B.some(function(e) {
			return e.status === "processing";
		}), q = w.slice(0, o("WAWebBizAIKnowledgeDrawerHelpers").MAX_PREVIEW_ITEMS), U = h.slice(0, o("WAWebBizAIKnowledgeDrawerHelpers").MAX_PREVIEW_ITEMS), V = c(function() {
			return O.filter(function(e) {
				return e.source_type !== "CHAT_HISTORY";
			});
		}, [O]), H = c(function() {
			return O.filter(function(e) {
				return e.source_type === "CHAT_HISTORY";
			});
		}, [O]), G = V.slice(0, o("WAWebBizAIKnowledgeDrawerHelpers").MAX_PREVIEW_ITEMS), z = c(function() {
			return o("WAWebBizAIKnowledgeGoogleDriveTypes").countSyncingGoogleDriveFiles(C);
		}, [C]);
		return u.jsxs("div", {
			ref: A,
			"data-testid": "biz-ai-knowledge-main",
			className: "x78zum5 x98rzlu xdt5ytf x5yr21d x6ikm8r x10wlt62",
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: R
			}), u.jsxs(r("WAWebDrawerBody.react"), {
				xstyle: d.body,
				children: [
					F,
					S ? u.jsxs("div", {
						"data-testid": "knowledge-section-product-info",
						children: [u.jsxs("div", {
							className: "x6s0dn4 x78zum5 x1qughib x1nbhmlj x1xrf6ya xvtqlqk xf7dkkf",
							children: [u.jsx(r("WDSText.react"), {
								colorName: "contentDefault",
								type: "Body1Emphasized",
								children: s._(
									/*BTDS*/
									""
								)
							}), u.jsx(r("WDSButton.react"), {
								variant: "tonal",
								size: "small",
								Icon: r("WDSIconIcAdd.react"),
								label: s._(
									/*BTDS*/
									""
								),
								onPress: function() {
									return P(null);
								},
								testid: "knowledge-add-product-info"
							})]
						}), w.length === 0 ? u.jsx("div", {
							className: "xhslqc4 x1p57kb1 xvpt6g3 xvtqlqk xf7dkkf x1yc453h",
							children: u.jsx(r("WDSText.react"), {
								colorName: "contentDeemphasized",
								type: "Body2",
								children: s._(
									/*BTDS*/
									""
								)
							})
						}) : u.jsxs(u.Fragment, { children: [q.map(function(e, t) {
							return u.jsx(r("WAWebBizAIKnowledgeProductItem.react"), {
								deleting: e.product_id != null && f.has(e.product_id),
								index: t,
								product: e,
								onEdit: function() {
									return P(e);
								},
								onDelete: function() {
									return k(e);
								}
							}, e.product_id);
						}), w.length > o("WAWebBizAIKnowledgeDrawerHelpers").MAX_PREVIEW_ITEMS ? u.jsx(r("WAWebBizAITextLinkButton.react"), {
							label: s._(
								/*BTDS*/
								""
							),
							onPress: function() {
								o("WAWebBizAILargeScreensLogEvents").logClickKnowledgeSeeAll("product_info"), N(o("WAWebBizAIKnowledgeDrawerHelpers").KnowledgeStep.AllProducts);
							},
							testid: "knowledge-see-all-products"
						}) : null] })]
					}) : null,
					u.jsx(r("WAWebGroupInfoSeparator.react"), { animation: !1 }),
					u.jsxs("div", {
						"data-testid": "knowledge-section-example-responses",
						children: [u.jsxs("div", {
							className: "x6s0dn4 x78zum5 x1qughib x1nbhmlj x1xrf6ya xvtqlqk xf7dkkf",
							children: [u.jsx(r("WDSText.react"), {
								colorName: "contentDefault",
								type: "Body1Emphasized",
								children: s._(
									/*BTDS*/
									""
								)
							}), t]
						}), h.length === 0 ? u.jsx("div", {
							className: "xhslqc4 x1p57kb1 xvpt6g3 xvtqlqk xf7dkkf x1yc453h",
							children: u.jsx(r("WDSText.react"), {
								colorName: "contentDeemphasized",
								type: "Body2",
								children: s._(
									/*BTDS*/
									""
								)
							})
						}) : u.jsxs(u.Fragment, { children: [U.map(function(e, t) {
							var n, o = e.itemType === "faq" ? e.id : "text:" + e.knowledgeType;
							return u.jsx(r("WAWebBizAIKnowledgeFaqItem.react"), {
								answer: e.answer,
								deleting: o != null && m.has(o),
								index: t,
								maxLines: e.maxLines,
								onDelete: function() {
									return L(e);
								},
								onEdit: function() {
									return x(e);
								},
								question: e.question
							}, e.itemType === "faq" ? (n = e.id) != null ? n : "q:" + e.question : "text:" + e.knowledgeType);
						}), h.length > o("WAWebBizAIKnowledgeDrawerHelpers").MAX_PREVIEW_ITEMS ? u.jsx(r("WAWebBizAITextLinkButton.react"), {
							label: s._(
								/*BTDS*/
								""
							),
							onPress: function() {
								o("WAWebBizAILargeScreensLogEvents").logClickKnowledgeSeeAll("example_responses"), N(o("WAWebBizAIKnowledgeDrawerHelpers").KnowledgeStep.AllFaqs);
							},
							testid: "knowledge-see-all-faqs"
						}) : null] })]
					}),
					u.jsx(r("WAWebGroupInfoSeparator.react"), { animation: !1 }),
					u.jsxs("div", {
						"data-testid": "knowledge-section-files-and-links",
						children: [
							u.jsxs("div", {
								className: "x6s0dn4 x78zum5 x1qughib x1nbhmlj x1xrf6ya xvtqlqk xf7dkkf",
								children: [u.jsx(r("WDSText.react"), {
									colorName: "contentDefault",
									type: "Body1Emphasized",
									children: s._(
										/*BTDS*/
										""
									)
								}), u.jsx("span", {
									ref: a,
									children: u.jsx(r("WDSButton.react"), {
										variant: "tonal",
										size: "small",
										Icon: r("WDSIconIcAdd.react"),
										label: s._(
											/*BTDS*/
											""
										),
										onPress: $,
										disabled: W,
										testid: "knowledge-add-source"
									})
								})]
							}),
							B.map(function(e) {
								return u.jsx(r("WAWebBizAIKnowledgeUploadingSourceItem.react"), { upload: e }, e.id);
							}),
							V.length === 0 && B.length === 0 ? u.jsx("div", {
								className: "xhslqc4 x1p57kb1 xvpt6g3 xvtqlqk xf7dkkf x1yc453h",
								children: u.jsx(r("WDSText.react"), {
									colorName: "contentDeemphasized",
									type: "Body2",
									children: s._(
										/*BTDS*/
										""
									)
								})
							}) : null,
							V.length > 0 ? u.jsxs(u.Fragment, { children: [G.map(function(e, t) {
								return u.jsx(r("WAWebBizAIKnowledgeSourceItem.react"), {
									index: t,
									source: e,
									deleting: g.has(e.id),
									onDelete: function() {
										return I(e, O);
									}
								}, e.id);
							}), V.length > o("WAWebBizAIKnowledgeDrawerHelpers").MAX_PREVIEW_ITEMS ? u.jsx(r("WAWebBizAITextLinkButton.react"), {
								label: s._(
									/*BTDS*/
									""
								),
								onPress: function() {
									o("WAWebBizAILargeScreensLogEvents").logClickKnowledgeSeeAll("files_and_links"), N(o("WAWebBizAIKnowledgeDrawerHelpers").KnowledgeStep.AllSources);
								},
								testid: "knowledge-see-all-sources"
							}) : null] }) : null
						]
					}),
					y ? u.jsxs(u.Fragment, { children: [u.jsx(r("WAWebGroupInfoSeparator.react"), { animation: !1 }), u.jsxs("div", {
						"data-testid": "knowledge-section-google-drive",
						children: [u.jsx("div", {
							className: "x6s0dn4 x78zum5 x1qughib x1nbhmlj x1xrf6ya xvtqlqk xf7dkkf",
							children: u.jsxs("div", {
								className: "x78zum5 xdt5ytf",
								children: [u.jsx(r("WDSText.react"), {
									colorName: "contentDefault",
									type: "Body1Emphasized",
									children: s._(
										/*BTDS*/
										""
									)
								}), z > 0 ? u.jsx(r("WDSText.react"), {
									colorName: "contentDeemphasized",
									type: "Body3",
									testid: "knowledge-gdrive-syncing-count",
									children: s._(
										/*BTDS*/
										"",
										[s._plural(z, "number")]
									)
								}) : null]
							})
						}), u.jsx(p, {
							deletingGoogleDriveIds: _,
							error: b,
							files: C,
							loading: v,
							onDeleteGoogleDriveFile: E,
							onSeeAll: function() {
								o("WAWebBizAILargeScreensLogEvents").logClickGoogleDriveSeeAll(), N(o("WAWebBizAIKnowledgeDrawerHelpers").KnowledgeStep.AllGoogleDrive);
							}
						})]
					})] }) : null,
					l !== "NOT_ALLOWED" ? u.jsxs(u.Fragment, { children: [u.jsx(r("WAWebGroupInfoSeparator.react"), { animation: !1 }), u.jsxs("div", {
						"data-testid": "knowledge-section-chat-history",
						children: [
							u.jsx("div", {
								className: "x6s0dn4 x78zum5 x1qughib x1nbhmlj x1xrf6ya xvtqlqk xf7dkkf",
								children: u.jsx(r("WDSText.react"), {
									colorName: "contentDefault",
									type: "Body1Emphasized",
									children: s._(
										/*BTDS*/
										""
									)
								})
							}),
							l === "NOT_STARTED" ? u.jsx("div", {
								"data-testid": "knowledge-chat-history-enable",
								children: u.jsxs("div", {
									className: "x6s0dn4 xkh2ocl xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 x8a3fw1 x1aj3ljl xvkrg5o x16ovd2e x12xbjc7 xvtqlqk xf7dkkf",
									children: [
										u.jsx(r("WDSIconIcHistory.react"), { iconXstyle: d.sourceIcon }),
										u.jsxs("div", {
											className: "x98rzlu xeuugli x6ikm8r x10wlt62 xlyipyv xuxw1ft",
											children: [u.jsx(r("WDSText.react"), {
												colorName: "contentDefault",
												type: "Body1",
												children: s._(
													/*BTDS*/
													""
												)
											}), u.jsx(r("WDSText.react"), {
												colorName: "contentDeemphasized",
												type: "Body3",
												children: s._(
													/*BTDS*/
													""
												)
											})]
										}),
										u.jsx(r("WDSButton.react"), {
											variant: "tonal",
											size: "small",
											label: s._(
												/*BTDS*/
												""
											),
											onPress: M,
											testid: "knowledge-enable-chat-history"
										})
									]
								})
							}) : null,
							H.length > 0 ? u.jsx(u.Fragment, { children: H.map(function(e, t) {
								return u.jsx(r("WAWebBizAIKnowledgeSourceItem.react"), {
									index: t,
									source: e,
									deleting: g.has(e.id),
									onDelete: function() {
										return I(e, O);
									},
									testidPrefix: "knowledge-chat-history-item"
								}, e.id);
							}) }) : null
						]
					})] }) : null,
					n != null && u.jsx(o("WAWebUimUie.react").UIE, {
						displayName: "KnowledgeAddExampleMenu",
						escapable: !0,
						popable: !0,
						dismissOnWindowResize: !0,
						requestDismiss: T,
						children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: {
							anchor: n.anchor,
							autoFocus: n.autoFocus,
							menu: n.menu
						} })
					}),
					i != null && u.jsx(o("WAWebUimUie.react").UIE, {
						displayName: "KnowledgeAddSourceMenu",
						escapable: !0,
						popable: !0,
						dismissOnWindowResize: !0,
						requestDismiss: D,
						children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: {
							anchor: i.anchor,
							menu: i.menu
						} })
					})
				]
			})]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.deletingGoogleDriveIds, n = e.error, a = e.files, i = e.loading, l = e.onDeleteGoogleDriveFile, c = e.onSeeAll;
		return i ? u.jsx("div", {
			"aria-label": s._(
				/*BTDS*/
				""
			),
			"data-testid": "knowledge-gdrive-loading",
			role: "status",
			className: "xhslqc4 x1p57kb1 xvpt6g3 xvtqlqk xf7dkkf x1yc453h",
			children: u.jsx(o("WAWebSpinner.react").Spinner, {
				color: "default",
				size: 20,
				stroke: 3
			})
		}) : n ? u.jsx("div", {
			"data-testid": "knowledge-gdrive-error",
			role: "alert",
			className: "xhslqc4 x1p57kb1 xvpt6g3 xvtqlqk xf7dkkf x1yc453h",
			children: u.jsx(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				type: "Body2",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}) : a.length === 0 ? u.jsx("div", {
			"data-testid": "knowledge-gdrive-empty",
			className: "xhslqc4 x1p57kb1 xvpt6g3 xvtqlqk xf7dkkf x1yc453h",
			children: u.jsx(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				type: "Body2",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}) : u.jsxs(u.Fragment, { children: [a.slice(0, o("WAWebBizAIKnowledgeDrawerHelpers").MAX_PREVIEW_ITEMS).map(function(e, n) {
			return u.jsx(r("WAWebBizAIKnowledgeGoogleDriveItem.react"), {
				deleting: t.has(e.google_file_id),
				file: e,
				index: n,
				onDelete: l == null ? null : function() {
					return l(e);
				}
			}, e.google_file_id);
		}), a.length > o("WAWebBizAIKnowledgeDrawerHelpers").MAX_PREVIEW_ITEMS ? u.jsx(r("WAWebBizAITextLinkButton.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			onPress: c,
			testid: "knowledge-gdrive-see-all"
		}) : null] });
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = m;
}), 226);
