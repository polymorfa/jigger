__d("WAWebBizAIKnowledgeDrawer.react", [
	"fbt",
	"CometRelay",
	"WALogger",
	"WAWebBizAIChatHistoryEducationModal.react",
	"WAWebBizAIFaqEditModal.react",
	"WAWebBizAIKnowledgeAllFaqsDrawer.react",
	"WAWebBizAIKnowledgeAllGoogleDriveDrawer.react",
	"WAWebBizAIKnowledgeAllProductsDrawer.react",
	"WAWebBizAIKnowledgeAllSourcesDrawer.react",
	"WAWebBizAIKnowledgeDrawerHelpers",
	"WAWebBizAIKnowledgeDrawerQuery.graphql",
	"WAWebBizAIKnowledgeEditModal.react",
	"WAWebBizAIKnowledgeMainView.react",
	"WAWebBizAIKnowledgeMimeTypes",
	"WAWebBizAILargeScreensLogEvents",
	"WAWebBizAIOpenWebsiteEditModal",
	"WAWebBizAIProductInfoEditModal.react",
	"WAWebBizAIQueryBoundary.react",
	"WAWebBizAIQueryRefreshBanner.react",
	"WAWebBizAISuggestionConfigs",
	"WAWebBizAiChatHistoryCreateMutation",
	"WAWebBizAiChatHistoryFastSync",
	"WAWebBizAiExampleResponseDeleteMutation",
	"WAWebBizAiKnowledgeDeleteUtils",
	"WAWebBizAiKnowledgeFileUpload",
	"WAWebBizAiKnowledgeSourceDeleteMutation",
	"WAWebBizAiKnowledgeSourceUploadMutation",
	"WAWebBizAiProductInfoMutation",
	"WAWebBizAiSaveUtils",
	"WAWebConfirmPopup.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDropdownItem.react",
	"WAWebFilePicker.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebSpinner.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WDSButton.react",
	"WDSIconIcAdd.react",
	"WDSIconIcDescription.react",
	"WDSIconIcImage.react",
	"WDSText.react",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"react",
	"useWAWebBizAIQueryRefreshError",
	"useWAWebFlow",
	"useWAWebStableCallback",
	"useWAWebTimeout",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m, p, _, f = _ || (_ = o("react")), g = _, h = g.Suspense, y = g.useCallback, C = g.useEffect, b = g.useMemo, v = g.useReducer, S = g.useRef, R = g.useState, L = [
		2e3,
		4e3,
		8e3,
		16e3,
		3e4
	], E = L.length;
	function k(e, t) {
		return (function(t) {
			if ((typeof t == "object" && t !== null || typeof t == "function") && t.type === "enqueue" && "uploads" in t) {
				var n = t.uploads;
				return [].concat(e, n);
			}
			if ((typeof t == "object" && t !== null || typeof t == "function") && t.type === "increment-refresh-attempt" && "uploadId" in t) {
				var r = t.uploadId;
				return e.map(function(e) {
					if (e.id !== r) return e;
					var t = e.refreshAttempts + 1;
					return babelHelpers.extends({}, e, {
						refreshAttempts: t,
						status: t >= E ? "delayed" : "processing"
					});
				});
			}
			if ((typeof t == "object" && t !== null || typeof t == "function") && t.type === "remove" && "uploadId" in t) {
				var o = t.uploadId;
				return e.filter(function(e) {
					return e.id !== o;
				});
			}
			if ((typeof t == "object" && t !== null || typeof t == "function") && t.type === "remove-ready" && "uploadIds" in t) {
				var a = t.uploadIds;
				return e.filter(function(e) {
					return !a.has(e.id);
				});
			}
			if ((typeof t == "object" && t !== null || typeof t == "function") && "dataSourceId" in t && t.type === "set-data-source-id" && "uploadId" in t) {
				var i = t.dataSourceId, l = t.uploadId;
				return e.map(function(e) {
					return e.id === l ? babelHelpers.extends({}, e, { dataSourceId: i }) : e;
				});
			}
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + t);
		})(t);
	}
	function I(e, t) {
		if (e.dataSourceId == null) return !1;
		var n = t.find(function(t) {
			return t.id === e.dataSourceId;
		});
		return n == null ? !1 : n.source_type !== "FILE_UPLOAD" || n.file_type !== "IMAGE" || n.cdn_url != null || n.thumbnail_url != null;
	}
	function T(e) {
		var t = e.children, n = e.onBack;
		return f.jsxs(f.Fragment, { children: [f.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: s._(
				/*BTDS*/
				""
			),
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onBack: n
		}), f.jsx(r("WAWebDrawerBody.react"), { children: t })] });
	}
	T.displayName = T.name + " [from " + i.id + "]";
	function D(e) {
		return f.jsx(T, {
			onBack: e,
			children: f.jsx("div", {
				"data-testid": "biz-ai-knowledge-loading",
				className: "x6s0dn4 x78zum5 x98rzlu xl56j7k",
				children: f.jsx(o("WAWebSpinner.react").Spinner, {
					color: "default",
					size: 24,
					stroke: 3
				})
			})
		});
	}
	D.displayName = D.name + " [from " + i.id + "]";
	var x = e !== void 0 ? e : e = n("WAWebBizAIKnowledgeDrawerQuery.graphql");
	function $(e) {
		var t, n = e.xfb_meta_ai_biz_agent_wa_ai_home, r = n == null ? void 0 : n.ordered_knowledge, a = n == null || (t = n.knowledge) == null ? void 0 : t.websites, i = [];
		if (a != null) {
			for (var l of a) if (l != null) {
				var s, u;
				i.push({
					website_type: (s = l.website_type) != null ? s : null,
					website_url: (u = l.website_url) != null ? u : null
				});
			}
		}
		if (r == null) return {
			currentWebsites: i,
			faqs: [],
			filledKnowledgeTypes: []
		};
		var c = [], d = [];
		for (var m of r) if (m != null) {
			if (m.knowledge_type != null && m.knowledge_type !== "FAQ" && d.push(m.knowledge_type), m.knowledge_type === "FAQ" && m.faq_data != null) {
				var p = m.faq_data;
				if (p.question != null && p.answer != null) {
					var _;
					c.push({
						answer: p.answer,
						id: (_ = p.id) != null ? _ : null,
						itemType: "faq",
						knowledgeType: "FAQ",
						question: p.question
					});
				}
			} else if (m.knowledge_type === "WEBSITE" && i.length > 0) {
				var f = o("WAWebBizAIKnowledgeDrawerHelpers").getKnowledgeTypeLabel("WEBSITE");
				if (f != null) {
					var g = i.map(function(e) {
						var t;
						return (t = e.website_url) != null ? t : "";
					}).filter(function(e) {
						return e.length > 0;
					});
					c.push({
						answer: g.join("\n"),
						id: null,
						itemType: "text",
						knowledgeType: "WEBSITE",
						maxLines: g.length,
						question: f
					});
				}
			} else if (m.string_data != null) {
				var h = m.string_data, y = o("WAWebBizAIKnowledgeDrawerHelpers").getKnowledgeTypeLabel(m.knowledge_type);
				if (y != null) {
					var C;
					c.push({
						answer: h,
						id: null,
						itemType: "text",
						knowledgeType: (C = m.knowledge_type) != null ? C : "",
						question: y
					});
				}
			}
		}
		return {
			currentWebsites: i,
			faqs: c,
			filledKnowledgeTypes: d
		};
	}
	function P(e) {
		var t, n, r = e.xfb_meta_ai_biz_agent_wa_ai_home, o = ((t = r == null ? void 0 : r.product_info_knowledge) != null ? t : []).map(function(e) {
			var t, n, r, o, a;
			return {
				description: (t = e.description) != null ? t : null,
				images: ((n = e.images) != null ? n : []).map(function(e) {
					var t, n, r;
					return {
						image_id: (t = e.image_id) != null ? t : null,
						original_url: (n = e.original_url) != null ? n : null,
						thumbnail_url: (r = e.thumbnail_url) != null ? r : null
					};
				}),
				price: (r = e.price) != null ? r : null,
				product_id: (o = e.product_id) != null ? o : "",
				title: (a = e.title) != null ? a : null
			};
		});
		return {
			isEligible: (r == null || (n = r.product_info_eligibility) == null ? void 0 : n.eligible) === !0,
			products: o
		};
	}
	function N(e) {
		var t = e.xfb_meta_ai_biz_agent_wa_ai_home;
		if ((t == null ? void 0 : t.knowledge_sources) == null) return {
			chatHistoryExportStatus: "NOT_ALLOWED",
			sources: []
		};
		var n = [];
		for (var r of t.knowledge_sources) if (!(r == null || r.source_type == null)) {
			if (r.source_type === "FILE_UPLOAD" && r.user_provided_file_name != null) {
				var o, a, i, l, s, u;
				n.push({
					cdn_url: (o = r.cdn_url) != null ? o : null,
					file_type: r.file_type === "IMAGE" ? "IMAGE" : "DOCUMENT",
					id: (a = r.id) != null ? a : "",
					label: (i = r.label) != null ? i : "",
					mime_type: (l = r.mime_type) != null ? l : "",
					source_type: "FILE_UPLOAD",
					thumbnail_url: (s = r.thumbnail_url) != null ? s : null,
					update_time: (u = r.update_time) != null ? u : 0,
					user_provided_file_name: r.user_provided_file_name
				});
			} else if (r.source_type === "CHAT_HISTORY") {
				var c, d, m, p;
				n.push({
					creation_time: (c = r.creation_time) != null ? c : 0,
					id: (d = r.id) != null ? d : "",
					label: (m = r.label) != null ? m : "",
					source_type: "CHAT_HISTORY",
					update_time: (p = r.update_time) != null ? p : 0
				});
			} else if (r.source_type === "WEBSITE") {
				var _, f, g, h;
				n.push({
					creation_time: (_ = r.creation_time) != null ? _ : 0,
					id: (f = r.id) != null ? f : "",
					label: (g = r.label) != null ? g : "",
					source_type: "WEBSITE",
					update_time: (h = r.update_time) != null ? h : 0
				});
			}
		}
		var y = t.chat_history_export_status, C = y === "NOT_STARTED" || y === "IN_PROGRESS" || y === "COMPLETE" ? y : "NOT_ALLOWED";
		return {
			chatHistoryExportStatus: C,
			sources: n
		};
	}
	var M = new Map(), w = Object.freeze([]);
	function A(e) {
		var t = e.deleteGoogleDriveFile, a = e.googleDriveEnabled, i = e.googleDriveFiles, l = e.googleDriveFilesError, _ = e.googleDriveFilesLoaded, g = e.googleDriveFilesLoading, h = e.onBack, T = e.onRefresh, D = T === void 0 ? r("WAWebNoop") : T, w = e.onRetry, A = e.queryRef, F = t != null, O = o("useWAWebFlow").useFlow(o("WAWebBizAIKnowledgeDrawerHelpers").KnowledgeStep.Main, { transitions: o("useWAWebFlow").FlowTransitions.DrawerRight }), B = O[0], W = O[1], q = y(function() {
			W.pop();
		}, [W]), U = W.step, V = o("CometRelay").usePreloadedQuery(x, A), H = r("useWAWebBizAIQueryRefreshError")(A.source), G = b(function() {
			return $(V);
		}, [V]), z = G.currentWebsites, j = G.faqs, K = G.filledKnowledgeTypes, Q = b(function() {
			return P(V);
		}, [V]), X = Q.isEligible, Y = Q.products;
		C(function() {
			for (var e of Y) e.images.length > 0 && M.set(e.product_id, e.images);
		}, [Y]);
		var J = b(function() {
			return o("WAWebBizAIKnowledgeDrawerHelpers").mergeOptimisticProductImages(Y, M);
		}, [Y]), Z = b(function() {
			return N(V);
		}, [V]), ee = Z.chatHistoryExportStatus, te = Z.sources, ne = R(new Set()), re = ne[0], oe = ne[1], ae = R(new Set()), ie = ae[0], le = ae[1], se = R(new Set()), ue = se[0], ce = se[1], de = R(new Set()), me = de[0], pe = de[1], _e = S(new Set()), fe = S(new Set()), ge = S(new Set()), he = v(k, []), ye = he[0], Ce = he[1], be = S(0), ve = S(new Map()), Se = r("useWAWebUnmountSignal")(), Re = y(function(e) {
			var t = ve.current.get(e);
			t != null && (URL.revokeObjectURL(t), ve.current.delete(e));
		}, []);
		C(function() {
			var e = ve.current;
			return function() {
				for (var t of e.values()) URL.revokeObjectURL(t);
				e.clear();
			};
		}, []);
		var Le = b(function() {
			return ye.filter(function(e) {
				return !I(e, te);
			});
		}, [te, ye]), Ee = b(function() {
			var e = new Set();
			for (var t of Le) t.dataSourceId != null && e.add(t.dataSourceId);
			return te.filter(function(t) {
				return !e.has(t.id);
			});
		}, [te, Le]), ke = y(function(e) {
			Re(e), Ce({
				type: "remove",
				uploadId: e
			});
		}, [Re]);
		C(function() {
			var e = ye.filter(function(e) {
				return I(e, te);
			});
			if (e.length !== 0) {
				var t = new Set();
				for (var n of e) t.add(n.id), Re(n.id);
				Ce({
					type: "remove-ready",
					uploadIds: t
				});
			}
		}, [
			Re,
			te,
			ye
		]);
		var Ie = b(function() {
			return ye.find(function(e) {
				return e.dataSourceId != null && e.status === "processing" && e.refreshAttempts < E && !I(e, te);
			});
		}, [te, ye]), Te = o("useWAWebTimeout").useManualTimeout(function() {
			Ie == null || Se.aborted || (D(), Ce({
				type: "increment-refresh-attempt",
				uploadId: Ie.id
			}));
		}), De = Te[0], xe = Te[1];
		C(function() {
			if (Ie != null) return De(L[Ie.refreshAttempts]), xe;
		}, [
			xe,
			De,
			Ie
		]);
		var $e = y(function(e) {
			o("WAWebModalManager").ModalManager.open(f.jsx(o("WAWebModal.react").Modal, {
				type: o("WAWebModal.react").ModalTheme.Auto,
				children: f.jsx(r("WAWebBizAIProductInfoEditModal.react"), {
					product: e,
					onClose: o("WAWebModalManager").closeModalManager,
					onSaved: function(t) {
						t != null && t.product_id !== "" && (t.images.length > 0 ? M.set(t.product_id, t.images) : M.delete(t.product_id)), o("WAWebModalManager").ModalManager.close(), D();
					}
				})
			}));
		}, [D]), Pe = y(function(e) {
			n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var t = e.product_id;
				if (t != null && !_e.current.has(t)) {
					var n = yield o("WAWebConfirmPopup.react").waitForConfirmPopup({
						cancelText: s._(
							/*BTDS*/
							""
						),
						children: f.jsx(r("WDSText.react"), {
							colorName: "contentDeemphasized",
							type: "Body2",
							children: s._(
								/*BTDS*/
								""
							)
						}),
						okButtonType: "solid-warning",
						okText: s._(
							/*BTDS*/
							""
						),
						testid: "bizai_knowledge_delete_product_confirm",
						title: s._(
							/*BTDS*/
							""
						)
					});
					n && (_e.current.add(t), ce(function(e) {
						var n = new Set(e);
						return n.add(t), n;
					}), o("WAWebBizAiProductInfoMutation").deleteProductInfo([t]).then(function(e) {
						e.isSuccess ? (o("WAWebBizAiSaveUtils").showDeletedProductInfoToast(), D()) : o("WAWebBizAiSaveUtils").showErrorToast();
					}).catch(function() {
						o("WAWebBizAiSaveUtils").showErrorToast();
					}).finally(function() {
						_e.current.delete(t), ce(function(e) {
							var n = new Set(e);
							return n.delete(t), n;
						});
					}));
				}
			})();
		}, [D]);
		C(function() {
			o("WAWebBizAILargeScreensLogEvents").logViewKnowledgeDrawer();
		}, []);
		var Ne = S(!1);
		C(function() {
			!a || !_ || Ne.current || (Ne.current = !0, o("WAWebBizAILargeScreensLogEvents").logViewGoogleDriveKnowledgeSection(i.length > 0, i.length, !l));
		}, [
			a,
			i.length,
			l,
			_
		]);
		var Me = S(!1);
		C(function() {
			if (U !== o("WAWebBizAIKnowledgeDrawerHelpers").KnowledgeStep.AllGoogleDrive) {
				Me.current = !1;
				return;
			}
			!_ || Me.current || (Me.current = !0, o("WAWebBizAILargeScreensLogEvents").logViewGoogleDriveDrawer(i.length, !l));
		}, [
			U,
			_,
			i.length,
			l
		]);
		var we = y(function(e, t) {
			n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				o("WAWebBizAILargeScreensLogEvents").logClickDeleteSource();
				var n = o("WAWebBizAiKnowledgeDeleteUtils").getDeleteConfirmPropsForSource(e);
				if (n != null) {
					var a = yield o("WAWebConfirmPopup.react").waitForConfirmPopup(n);
					if (!a) return;
				}
				var i = e.source_type === "CHAT_HISTORY" ? t.filter(function(e) {
					return e.source_type === "CHAT_HISTORY";
				}).map(function(e) {
					return e.id;
				}) : [e.id];
				oe(function(e) {
					var t = new Set(e);
					for (var n of i) t.add(n);
					return t;
				});
				var l;
				if (e.source_type === "FILE_UPLOAD") l = o("WAWebBizAiKnowledgeSourceDeleteMutation").deleteFileSource(e.id);
				else if (e.source_type === "WEBSITE") l = o("WAWebBizAiKnowledgeSourceDeleteMutation").deleteWebsiteSource(e.id);
				else if (e.source_type === "CHAT_HISTORY") l = o("WAWebBizAiKnowledgeSourceDeleteMutation").deleteChatHistorySource();
				else return;
				var s = function() {
					oe(function(e) {
						var t = new Set(e);
						for (var n of i) t.delete(n);
						return t;
					});
				};
				l.then(function(t) {
					o("WAWebBizAILargeScreensLogEvents").logApiDeleteSourceResult(t.isSuccess), s(), t.isSuccess ? (o("WAWebBizAiKnowledgeDeleteUtils").getDeletedToastForSource(e)(), D()) : o("WAWebBizAiSaveUtils").showErrorToast();
				}).catch(function(e) {
					o("WAWebBizAILargeScreensLogEvents").logApiDeleteSourceResult(!1), o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["knowledge source delete failed"]))).catching(r("getErrorSafe")(e)).sendLogs("biz-ai-knowledge-source-delete"), s(), o("WAWebBizAiSaveUtils").showErrorToast();
				});
			})();
		}, [D]), Ae = y(function(e) {
			n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (t != null) {
					var n = e.google_file_id;
					if (!ge.current.has(n)) {
						var r = U === o("WAWebBizAIKnowledgeDrawerHelpers").KnowledgeStep.AllGoogleDrive;
						ge.current.add(n);
						try {
							var a = yield o("WAWebConfirmPopup.react").waitForConfirmPopup(o("WAWebBizAiKnowledgeDeleteUtils").getDeleteConfirmPropsForGoogleDriveFile());
							if (!a) return;
							o("WAWebBizAILargeScreensLogEvents").logClickGoogleDriveDelete(r), le(function(e) {
								return new Set(e).add(n);
							});
							var i = yield t(n), l = i.isSuccess, s = i.suppressed;
							s !== !0 && o("WAWebBizAILargeScreensLogEvents").logApiGoogleDriveDeleteFile(r, l), l ? o("WAWebBizAiSaveUtils").showDeletedFileToast() : s !== !0 && o("WAWebBizAiSaveUtils").showErrorToast();
						} finally {
							ge.current.delete(n), le(function(e) {
								if (!e.has(n)) return e;
								var t = new Set(e);
								return t.delete(n), t;
							});
						}
					}
				}
			})();
		}, [t, U]), Fe = y((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				o("WAWebBizAILargeScreensLogEvents").logClickUploadFile();
				try {
					var n = yield o("WAWebBizAiKnowledgeFileUpload").uploadKnowledgeFile(e);
					if (Se.aborted) {
						Re(t);
						return;
					}
					if (!n.isSuccess) {
						o("WAWebBizAILargeScreensLogEvents").logApiUploadFileResult(!1), ke(t), o("WAWebToastManager").ToastManager.open(f.jsx(o("WAWebToast.react").Toast, { msg: s._(
							/*BTDS*/
							""
						) }));
						return;
					}
					var a = yield o("WAWebBizAiKnowledgeSourceUploadMutation").triggerFileExtraction(n.handle, n.fileName);
					if (Se.aborted) {
						Re(t);
						return;
					}
					var i = a.isSuccess ? a.dataSourceId : null;
					i != null ? (o("WAWebBizAILargeScreensLogEvents").logApiUploadFileResult(!0), Ce({
						dataSourceId: i,
						type: "set-data-source-id",
						uploadId: t
					}), D(), o("WAWebToastManager").ToastManager.open(f.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }))) : (o("WAWebBizAILargeScreensLogEvents").logApiUploadFileResult(!1), ke(t), o("WAWebToastManager").ToastManager.open(f.jsx(o("WAWebToast.react").Toast, { msg: a.error === "DUPLICATE_FILE" ? s._(
						/*BTDS*/
						""
					) : s._(
						/*BTDS*/
						""
					) })));
				} catch (e) {
					if (Se.aborted) {
						Re(t);
						return;
					}
					o("WAWebBizAILargeScreensLogEvents").logApiUploadFileResult(!1), o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["knowledge upload failed"]))).catching(r("getErrorSafe")(e)).sendLogs("biz-ai-knowledge-upload"), ke(t), o("WAWebToastManager").ToastManager.open(f.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }));
				}
			});
			return function(t, n) {
				return e.apply(this, arguments);
			};
		})(), [
			D,
			Re,
			ke,
			Se
		]), Oe = S(null), Be = S(null), We = y(function(e) {
			if (e.length !== 0) {
				var t = [];
				for (var n of e) {
					var r = be.current++, o = n.type.startsWith("image/") ? URL.createObjectURL(n) : null;
					o != null && ve.current.set(r, o), t.push({
						file: n,
						id: r,
						mimeType: n.type,
						name: n.name,
						previewUrl: o
					});
				}
				Ce({
					type: "enqueue",
					uploads: t.map(function(e) {
						var t = e.id, n = e.mimeType, r = e.name, o = e.previewUrl;
						return {
							dataSourceId: null,
							id: t,
							mimeType: n,
							name: r,
							previewUrl: o,
							refreshAttempts: 0,
							status: "processing"
						};
					})
				});
				for (var a of t) {
					var i = a.file, l = a.id;
					Fe(i, l);
				}
			}
		}, [Fe]), qe = y(function(e) {
			var t = e.target.files;
			t != null && We(Array.from(t));
		}, [We]), Ue = S(null), Ve = R(null), He = Ve[0], Ge = Ve[1], ze = y(function() {
			var e = Ue.current;
			e != null && (o("WAWebBizAILargeScreensLogEvents").logViewKnowledgeSources(), Ge({
				anchor: e,
				menu: f.jsxs(f.Fragment, { children: [f.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					action: function() {
						var e;
						(e = Oe.current) == null || e.open(), Ge(null);
					},
					icon: f.jsx(r("WDSIconIcDescription.react"), {}),
					testid: "knowledge-add-source-documents",
					children: s._(
						/*BTDS*/
						""
					)
				}), f.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					action: function() {
						var e;
						(e = Be.current) == null || e.open(), Ge(null);
					},
					icon: f.jsx(r("WDSIconIcImage.react"), {}),
					testid: "knowledge-add-source-images",
					children: s._(
						/*BTDS*/
						""
					)
				})] })
			}));
		}, []), je = y(function() {
			Ge(null);
		}, []), Ke = r("useWAWebStableCallback")(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			o("WAWebBizAILargeScreensLogEvents").logClickCreateChatHistory();
			try {
				var e = null;
				try {
					e = yield o("WAWebBizAiChatHistoryFastSync").buildUploadRequest();
				} catch (e) {
					o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["chat history fast sync build failed"]))).catching(r("getErrorSafe")(e)).sendLogs("biz-ai-chat-history-fast-sync");
				}
				var t = yield o("WAWebBizAiChatHistoryCreateMutation").createChatHistoryBackup(e);
				o("WAWebBizAILargeScreensLogEvents").logApiChatHistoryResult(t.isSuccess), t.isSuccess ? (o("WAWebModalManager").closeModalManager(), D(), o("WAWebToastManager").ToastManager.open(f.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }))) : o("WAWebToastManager").ToastManager.open(f.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
			} catch (e) {
				o("WAWebBizAILargeScreensLogEvents").logApiChatHistoryResult(!1), o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["chat history create failed"]))).catching(r("getErrorSafe")(e)).sendLogs("biz-ai-chat-history-create"), o("WAWebToastManager").ToastManager.open(f.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
			}
		})), Qe = y(function() {
			o("WAWebModalManager").ModalManager.open(f.jsx(o("WAWebModal.react").Modal, {
				type: o("WAWebModal.react").ModalTheme.Auto,
				children: f.jsx(r("WAWebBizAIChatHistoryEducationModal.react"), {
					onCancel: o("WAWebModalManager").closeModalManager,
					onConfirm: Ke
				})
			}));
		}, [Ke]), Xe = b(function() {
			var e = [];
			for (var t of j) t.itemType === "faq" && e.push({
				answer: t.answer,
				id: t.id,
				question: t.question
			});
			return e;
		}, [j]), Ye = y(function(e) {
			var t = e != null && e.itemType === "faq" ? {
				answer: e.answer,
				id: e.id,
				question: e.question
			} : null;
			o("WAWebModalManager").ModalManager.open(f.jsx(o("WAWebModal.react").Modal, {
				type: o("WAWebModal.react").ModalTheme.Auto,
				children: f.jsx(r("WAWebBizAIFaqEditModal.react"), {
					faq: t,
					allFaqs: Xe,
					onClose: o("WAWebModalManager").closeModalManager,
					onSaved: function() {
						o("WAWebModalManager").ModalManager.close(), D();
					}
				})
			}));
		}, [Xe, D]), Je = y(function(e) {
			if (e.itemType === "faq") {
				Ye(e);
				return;
			}
			if (e.knowledgeType === "WEBSITE") {
				o("WAWebBizAIOpenWebsiteEditModal").openWebsiteEditModal({
					initialWebsites: z,
					onSaved: D
				});
				return;
			}
			var t = o("WAWebBizAISuggestionConfigs").getSuggestionByKnowledgeType(e.knowledgeType);
			t != null && o("WAWebModalManager").ModalManager.open(f.jsx(o("WAWebModal.react").Modal, {
				type: o("WAWebModal.react").ModalTheme.Auto,
				children: f.jsx(r("WAWebBizAIKnowledgeEditModal.react"), {
					currentValue: e.answer,
					exampleQuestion: t.exampleQuestion,
					fieldKey: t.fieldKey,
					fieldLabel: t.fieldLabel,
					title: o("WAWebBizAISuggestionConfigs").getSuggestionTitle(t.fieldKey),
					onClose: function() {
						return o("WAWebModalManager").ModalManager.close();
					},
					onSaved: function() {
						o("WAWebModalManager").ModalManager.close(), D();
					}
				})
			}));
		}, [
			z,
			Ye,
			D
		]), Ze = y(function(e) {
			n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var t = e.itemType === "faq" ? e.id : "text:" + e.knowledgeType;
				if (!(e.itemType === "faq" && e.id == null) && !(t != null && fe.current.has(t))) {
					var n = yield o("WAWebConfirmPopup.react").waitForConfirmPopup({
						cancelText: s._(
							/*BTDS*/
							""
						),
						children: f.jsx(r("WDSText.react"), {
							colorName: "contentDeemphasized",
							type: "Body2",
							children: s._(
								/*BTDS*/
								""
							)
						}),
						okButtonType: "solid-warning",
						okText: s._(
							/*BTDS*/
							""
						),
						testid: "bizai_knowledge_delete_example_response_confirm",
						title: s._(
							/*BTDS*/
							""
						)
					});
					if (n) {
						var a;
						if (e.itemType === "faq") {
							if (e.id == null) return;
							a = o("WAWebBizAiExampleResponseDeleteMutation").deleteKnowledgeWithIds("FAQ", [e.id]);
						} else a = o("WAWebBizAiExampleResponseDeleteMutation").deleteExampleResponse(e.knowledgeType);
						t != null && (fe.current.add(t), pe(function(e) {
							var n = new Set(e);
							return n.add(t), n;
						}));
						var i = function() {
							t != null && (fe.current.delete(t), pe(function(e) {
								var n = new Set(e);
								return n.delete(t), n;
							}));
						};
						a.then(function(e) {
							e.isSuccess ? (o("WAWebBizAiSaveUtils").showDeletedExampleResponseToast(), D()) : o("WAWebBizAiSaveUtils").showErrorToast();
						}).catch(function(e) {
							o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["knowledge item delete failed"]))).catching(r("getErrorSafe")(e)).sendLogs("biz-ai-knowledge-item-delete"), o("WAWebBizAiSaveUtils").showErrorToast();
						}).finally(i);
					}
				}
			})();
		}, [D]), et = b(function() {
			return o("WAWebBizAISuggestionConfigs").getFilteredSuggestions(K);
		}, [K]), tt = y(function(e) {
			if (e.fieldKey === "website") {
				o("WAWebBizAIOpenWebsiteEditModal").openWebsiteEditModal({
					initialWebsites: z,
					onSaved: D
				});
				return;
			}
			o("WAWebModalManager").ModalManager.open(f.jsx(o("WAWebModal.react").Modal, {
				type: o("WAWebModal.react").ModalTheme.Auto,
				children: f.jsx(r("WAWebBizAIKnowledgeEditModal.react"), {
					currentValue: "",
					exampleQuestion: e.exampleQuestion,
					fieldKey: e.fieldKey,
					fieldLabel: e.fieldLabel,
					title: o("WAWebBizAISuggestionConfigs").getSuggestionTitle(e.fieldKey),
					onClose: function() {
						return o("WAWebModalManager").ModalManager.close();
					},
					onSaved: function() {
						o("WAWebModalManager").ModalManager.close(), D();
					}
				})
			}));
		}, [z, D]), nt = S(null), rt = R(null), ot = rt[0], at = rt[1], it = y(function() {
			var e = nt.current;
			e != null && at({
				anchor: e,
				menu: f.jsxs(f.Fragment, { children: [et.map(function(e) {
					var t = e.icon;
					return f.jsx(o("WAWebDropdownItem.react").DropdownItem, {
						action: function() {
							tt(e), at(null);
						},
						icon: f.jsx(t, {}),
						testid: "knowledge-suggestion-" + e.knowledgeType,
						children: e.sampleLabel
					}, e.knowledgeType);
				}), f.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					action: function() {
						Ye(null), at(null);
					},
					icon: f.jsx(r("WDSIconIcAdd.react"), {}),
					testid: "knowledge-add-custom-example",
					children: s._(
						/*BTDS*/
						""
					)
				})] })
			});
		}, [
			et,
			tt,
			Ye
		]), lt = y(function() {
			at(null);
		}, []), st = et.length > 0 ? f.jsx("span", {
			ref: nt,
			children: f.jsx(r("WDSButton.react"), {
				variant: "tonal",
				size: "small",
				Icon: r("WDSIconIcAdd.react"),
				label: s._(
					/*BTDS*/
					""
				),
				onPress: it,
				testid: "knowledge-add-example-response"
			})
		}) : f.jsx(r("WDSButton.react"), {
			variant: "tonal",
			size: "small",
			Icon: r("WDSIconIcAdd.react"),
			label: s._(
				/*BTDS*/
				""
			),
			onPress: function() {
				return Ye(null);
			},
			testid: "knowledge-add-example-response"
		});
		if (U == null) return null;
		var ut;
		switch (U) {
			case o("WAWebBizAIKnowledgeDrawerHelpers").KnowledgeStep.AllProducts:
				ut = f.jsx(r("WAWebBizAIKnowledgeAllProductsDrawer.react"), {
					deletingProductIds: ue,
					onAdd: function() {
						return $e(null);
					},
					onBack: q,
					onDelete: Pe,
					onEdit: $e,
					products: J
				});
				break;
			case o("WAWebBizAIKnowledgeDrawerHelpers").KnowledgeStep.AllFaqs:
				ut = f.jsx(r("WAWebBizAIKnowledgeAllFaqsDrawer.react"), {
					deletingFaqIds: me,
					faqs: j,
					onAddFaq: function() {
						return Ye(null);
					},
					onBack: q,
					onDeleteFaq: Ze,
					onEditFaq: Je
				});
				break;
			case o("WAWebBizAIKnowledgeDrawerHelpers").KnowledgeStep.AllSources:
				ut = f.jsx(r("WAWebBizAIKnowledgeAllSourcesDrawer.react"), {
					deletingSourceIds: re,
					onBack: q,
					onDeleteSource: we,
					onFilesSelected: We,
					sources: Ee,
					uploadingFileNames: Le
				});
				break;
			case o("WAWebBizAIKnowledgeDrawerHelpers").KnowledgeStep.AllGoogleDrive:
				ut = f.jsx(r("WAWebBizAIKnowledgeAllGoogleDriveDrawer.react"), {
					deletingGoogleDriveIds: ie,
					files: i,
					loading: g,
					onBack: q,
					onDeleteGoogleDriveFile: F ? Ae : null
				});
				break;
			case o("WAWebBizAIKnowledgeDrawerHelpers").KnowledgeStep.Main:
				ut = f.jsx(r("WAWebBizAIKnowledgeMainView.react"), {
					addExampleButton: st,
					addExampleMenu: ot,
					addSourceButtonRef: Ue,
					addSourceMenu: He,
					chatHistoryExportStatus: ee,
					deletingFaqIds: me,
					deletingGoogleDriveIds: ie,
					deletingProductIds: ue,
					deletingSourceIds: re,
					faqs: j,
					googleDriveEnabled: a,
					googleDriveFiles: i,
					googleDriveFilesError: l,
					googleDriveFilesLoading: g,
					isProductEligible: X,
					onBack: h,
					onDeleteFaqItem: Ze,
					onDeleteGoogleDriveFile: F ? Ae : null,
					onDeleteProduct: Pe,
					onDeleteSource: we,
					onDismissAddExampleMenu: lt,
					onDismissAddSourceMenu: je,
					onEditKnowledgeItem: Je,
					onOpenAddSourceMenu: ze,
					onOpenProductModal: $e,
					onPushStep: function(t) {
						return W.push(t);
					},
					openChatHistoryEducationModal: Qe,
					products: J,
					refreshBanner: H && w != null ? f.jsx(r("WAWebBizAIQueryRefreshBanner.react"), {
						onRetry: w,
						testid: "biz-ai-knowledge-refresh"
					}) : null,
					sources: Ee,
					uploadingFileNames: Le
				});
				break;
		}
		return f.jsxs(f.Fragment, { children: [
			f.jsx(B, {
				flow: W,
				children: ut
			}),
			f.jsx(r("WAWebFilePicker.react"), {
				ref: Oe,
				mimes: o("WAWebBizAIKnowledgeMimeTypes").DOCUMENT_MIMES,
				multiple: !0,
				onChange: qe
			}),
			f.jsx(r("WAWebFilePicker.react"), {
				ref: Be,
				mimes: o("WAWebBizAIKnowledgeMimeTypes").IMAGE_MIMES,
				multiple: !0,
				onChange: qe
			})
		] });
	}
	A.displayName = A.name + " [from " + i.id + "]";
	function F(e) {
		var t = e.deleteGoogleDriveFile, n = e.googleDriveEnabled, o = n === void 0 ? !1 : n, a = e.googleDriveFiles, i = a === void 0 ? w : a, l = e.googleDriveFilesError, s = l === void 0 ? !1 : l, u = e.googleDriveFilesLoaded, c = u === void 0 ? !1 : u, d = e.googleDriveFilesLoading, m = d === void 0 ? !1 : d, p = e.onBack, _ = e.onRefresh, g = _ === void 0 ? r("WAWebNoop") : _, y = e.onRetry, C = e.queryRef, b = e.queryVersion, v = b === void 0 ? 0 : b, S = e.ref;
		return f.jsx(r("WAWebDrawer.react"), {
			ref: S,
			testid: "biz-ai-knowledge-drawer",
			children: f.jsx(r("WAWebBizAIQueryBoundary.react"), {
				boundaryName: "biz-ai-knowledge",
				onRetry: y,
				queryVersion: v,
				renderErrorChrome: function(t) {
					return f.jsx(T, {
						onBack: p,
						children: t
					});
				},
				testid: "biz-ai-knowledge-error",
				children: f.jsx(h, {
					fallback: D(p),
					children: C != null ? f.jsx(A, {
						deleteGoogleDriveFile: t,
						googleDriveEnabled: o,
						googleDriveFiles: i,
						googleDriveFilesError: s,
						googleDriveFilesLoaded: c,
						googleDriveFilesLoading: m,
						onBack: p,
						onRefresh: g,
						onRetry: y,
						queryRef: C
					}) : D(p)
				})
			})
		});
	}
	F.displayName = F.name + " [from " + i.id + "]", l.KnowledgeQuery = x, l.WAWebBizAIKnowledgeDrawer = F;
}), 226);
