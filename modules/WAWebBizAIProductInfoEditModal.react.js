__d("WAWebBizAIProductInfoEditModal.react", [
	"fbt",
	"Promise",
	"WALogger",
	"WAWebBizAILargeScreensLogEvents",
	"WAWebBizAiKnowledgeFileUpload",
	"WAWebBizAiProductInfoMutation",
	"WAWebBizAiSaveUtils",
	"WAWebFilePicker.react",
	"WAWebWDSRichTextField.react",
	"WDSButton.react",
	"WDSIconIcAdd.react",
	"WDSIconIcClose.react",
	"WDSText.react",
	"WDSTextField.react",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = c, p = m.useCallback, _ = m.useEffect, f = m.useRef, g = m.useState, h = 10, y = "image/jpeg,image/png,image/webp", C = "wabai_unstructured_data/flat/", b = { headerTitle: {
		flexGrow: "x1iyjqo2",
		$$css: !0
	} };
	function v(t) {
		var a, i, l, c, m, C, v, R, L, E = t.onClose, k = t.onSaved, I = t.product, T = I != null, D = g((a = I == null ? void 0 : I.title) != null ? a : ""), x = D[0], $ = D[1], P = g((i = I == null ? void 0 : I.price) != null ? i : ""), N = P[0], M = P[1], w = g((l = I == null ? void 0 : I.description) != null ? l : ""), A = w[0], F = w[1], O = g(!1), B = O[0], W = O[1], q = g([]), U = q[0], V = q[1], H = g((c = I == null ? void 0 : I.images) != null ? c : []), G = H[0], z = H[1], j = f(null), K = f(U);
		_(function() {
			K.current = U;
		}, [U]), _(function() {
			return function() {
				K.current.forEach(function(e) {
					return URL.revokeObjectURL(e.previewUrl);
				});
			};
		}, []), _(function() {
			o("WAWebBizAILargeScreensLogEvents").logViewProductInfoEdit();
		}, []);
		var Q = G.length + U.length, X = U.length > 0 || G.length !== ((m = I == null ? void 0 : I.images) != null ? m : []).length, Y = N.trim().length > 0 || A.trim().length > 0 || Q > 0, J = x.trim().length > 0 && Y && !B && (x.trim() !== ((C = I == null ? void 0 : I.title) != null ? C : "") || N.trim() !== ((v = I == null ? void 0 : I.price) != null ? v : "") || A.trim() !== ((R = I == null ? void 0 : I.description) != null ? R : "") || X), Z = f(G);
		_(function() {
			Z.current = G;
		}, [G]);
		var ee = p(function(e) {
			var t = e.target.files;
			if (!(t == null || t.length === 0)) {
				var n = Array.from(t), r = [];
				V(function(e) {
					var t = Z.current.length + e.length, o = h - t;
					if (o <= 0) return e;
					for (var a = Math.min(n.length, o), i = 0; i < a; i++) r.push({
						file: n[i],
						previewUrl: URL.createObjectURL(n[i])
					});
					return [].concat(e, r);
				});
			}
		}, []), te = p(function(e) {
			z(function(t) {
				return t.filter(function(t, n) {
					return n !== e;
				});
			});
		}, []), ne = p(function(e) {
			V(function(t) {
				var n = t[e];
				return n != null && URL.revokeObjectURL(n.previewUrl), t.filter(function(t, n) {
					return n !== e;
				});
			});
		}, []), re = p(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			if (J) {
				o("WAWebBizAILargeScreensLogEvents").logClickSaveProductInfo(), W(!0);
				try {
					var t = yield (u || (u = n("Promise"))).all(U.map(function(e) {
						return o("WAWebBizAiKnowledgeFileUpload").uploadKnowledgeFile(e.file);
					})), a = [];
					for (var i of t) {
						if (!i.isSuccess) {
							o("WAWebBizAiSaveUtils").showErrorToast(), W(!1);
							return;
						}
						a.push(S(i.handle));
					}
					var l = {
						description: A.trim().length > 0 ? A.trim() : null,
						existingImages: G.map(function(e) {
							var t, n;
							return {
								image_id: (t = e.image_id) != null ? t : null,
								image_url: (n = e.original_url) != null ? n : null
							};
						}),
						manifoldImageFilePaths: a.length > 0 ? a : null,
						name: x.trim(),
						price: N.trim().length > 0 ? N.trim() : null
					}, s = T && (I == null ? void 0 : I.product_id) != null ? o("WAWebBizAiProductInfoMutation").updateProductInfo(I.product_id, l) : o("WAWebBizAiProductInfoMutation").createProductInfo(l), c = yield s;
					if (o("WAWebBizAILargeScreensLogEvents").logApiSaveProductInfoResult(c.isSuccess), c.isSuccess) {
						o("WAWebBizAiSaveUtils").showUpdatedToast();
						var d = [].concat(G, U.map(function(e) {
							return {
								image_id: null,
								original_url: e.previewUrl,
								thumbnail_url: e.previewUrl
							};
						}));
						k(T && (I == null ? void 0 : I.product_id) != null ? {
							description: A.trim().length > 0 ? A.trim() : null,
							images: d,
							price: N.trim().length > 0 ? N.trim() : null,
							product_id: I.product_id,
							title: x.trim()
						} : null);
					} else o("WAWebBizAiSaveUtils").showErrorToast(), W(!1);
				} catch (t) {
					o("WAWebBizAILargeScreensLogEvents").logApiSaveProductInfoResult(!1), o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["product info save failed"]))).catching(r("getErrorSafe")(t)).sendLogs("biz-ai-product-info-save"), o("WAWebBizAiSaveUtils").showErrorToast(), W(!1);
				}
			}
		}), [
			J,
			A,
			G,
			T,
			U,
			x,
			k,
			N,
			I
		]);
		return d.jsxs("div", {
			className: "x1h678fw xcldk2z xv6tirj x1phvje8 x1czfd9k",
			"data-testid": "biz-ai-product-info-edit-modal",
			children: [
				d.jsxs("div", {
					className: "x6s0dn4 x1s70e7g x78zum5 x1nhvcw1 x12xbjc7",
					children: [d.jsx(r("WDSButton.react"), {
						Icon: r("WDSIconIcClose.react"),
						onPress: E,
						variant: "borderless",
						size: "small",
						"aria-label": s._(
							/*BTDS*/
							""
						).toString(),
						testid: "product-info-close-btn"
					}), d.jsx(r("WDSText.react"), {
						colorName: "contentDefault",
						type: "Body1",
						xstyle: b.headerTitle,
						children: T ? s._(
							/*BTDS*/
							""
						) : s._(
							/*BTDS*/
							""
						)
					})]
				}),
				d.jsx("div", {
					className: "xscbp6u",
					children: d.jsx(r("WDSText.react"), {
						colorName: "contentDeemphasized",
						type: "Body2",
						children: s._(
							/*BTDS*/
							""
						)
					})
				}),
				d.jsx(r("WDSTextField.react"), {
					label: s._(
						/*BTDS*/
						""
					),
					value: x,
					onValueChange: $,
					testid: "product-info-name-input"
				}),
				d.jsx("div", {
					className: "x1xrf6ya",
					children: d.jsx(r("WDSTextField.react"), {
						label: s._(
							/*BTDS*/
							""
						),
						value: N,
						onValueChange: M,
						testid: "product-info-price-input"
					})
				}),
				d.jsx("div", {
					className: "x1xrf6ya",
					children: d.jsx(r("WAWebWDSRichTextField.react"), {
						label: s._(
							/*BTDS*/
							""
						),
						placeholder: s._(
							/*BTDS*/
							""
						),
						rows: 4,
						initialText: (L = I == null ? void 0 : I.description) != null ? L : "",
						onValueChange: F,
						testid: "product-info-details-input"
					})
				}),
				d.jsxs("div", {
					className: "x1h678fw",
					children: [
						d.jsx(r("WDSText.react"), {
							colorName: "contentDefault",
							type: "Body1Emphasized",
							children: s._(
								/*BTDS*/
								""
							)
						}),
						d.jsx("div", {
							className: "xscbp6u x1tiyuxx",
							children: d.jsx(r("WDSText.react"), {
								colorName: "contentDeemphasized",
								type: "Body2",
								children: s._(
									/*BTDS*/
									""
								)
							})
						}),
						d.jsxs("div", {
							className: "x1s70e7g x78zum5 x1a02dak x1qvou4u",
							children: [
								G.map(function(e, t) {
									var n, o, a;
									return d.jsxs("div", {
										className: "xyi3aci xwf5gio x1p453bz x1suzm8a x2lah0s xwzfr38 x6ikm8r x10wlt62 x1n2onr6 x1dmp6jm",
										"data-testid": "product-info-existing-image-" + t,
										children: [d.jsx("div", {
											role: "button",
											tabIndex: 0,
											onClick: function() {
												return te(t);
											},
											onKeyDown: function(n) {
												(n.key === "Enter" || n.key === " ") && (n.preventDefault(), te(t));
											},
											className: "x6s0dn4 x1rk1j4g x1c9tyrk xeusxvb x1pahc9y x1ertn4p x972fbf x10w94by x1qhh985 x14e42zd x17t9dm2 x1ypdohk x78zum5 x1qx5ct2 xxx7yvo xl56j7k x10l6tqk xndqk7f xw4jnvo x1vjfegm",
											"aria-label": s._(
												/*BTDS*/
												""
											),
											"data-testid": "product-info-remove-existing-image-" + t,
											children: d.jsx(r("WDSIconIcClose.react"), {})
										}), d.jsx("img", {
											src: (o = (a = e.thumbnail_url) != null ? a : e.original_url) != null ? o : "",
											alt: "",
											className: "x1h3rtpe xyi3aci xwf5gio x1p453bz x1suzm8a xwzfr38 x19kjcj4 x1dmp6jm"
										})]
									}, "existing-" + ((n = e.image_id) != null ? n : String(t)));
								}),
								U.map(function(e, t) {
									return d.jsxs("div", {
										className: "xyi3aci xwf5gio x1p453bz x1suzm8a x2lah0s xwzfr38 x6ikm8r x10wlt62 x1n2onr6 x1dmp6jm",
										"data-testid": "product-info-local-image-" + t,
										children: [d.jsx("div", {
											role: "button",
											tabIndex: 0,
											onClick: function() {
												return ne(t);
											},
											onKeyDown: function(n) {
												(n.key === "Enter" || n.key === " ") && (n.preventDefault(), ne(t));
											},
											className: "x6s0dn4 x1rk1j4g x1c9tyrk xeusxvb x1pahc9y x1ertn4p x972fbf x10w94by x1qhh985 x14e42zd x17t9dm2 x1ypdohk x78zum5 x1qx5ct2 xxx7yvo xl56j7k x10l6tqk xndqk7f xw4jnvo x1vjfegm",
											"aria-label": s._(
												/*BTDS*/
												""
											),
											"data-testid": "product-info-remove-local-image-" + t,
											children: d.jsx(r("WDSIconIcClose.react"), {})
										}), d.jsx("img", {
											src: e.previewUrl,
											alt: "",
											className: "x1h3rtpe xyi3aci xwf5gio x1p453bz x1suzm8a xwzfr38 x19kjcj4 x1dmp6jm"
										})]
									}, "local-" + t);
								}),
								Q < h ? d.jsx("div", {
									role: "button",
									tabIndex: 0,
									"aria-label": s._(
										/*BTDS*/
										""
									),
									onClick: function() {
										var e;
										return (e = j.current) == null ? void 0 : e.open();
									},
									onKeyDown: function(t) {
										if (t.key === "Enter" || t.key === " ") {
											var e;
											t.preventDefault(), (e = j.current) == null || e.open();
										}
									},
									className: "x6s0dn4 x1h3rtpe xyi3aci xwf5gio x1p453bz x1suzm8a x1ypdohk x78zum5 x2lah0s xwzfr38 xl56j7k x1dmp6jm x1ubxc9n",
									"data-testid": "product-info-add-image-btn",
									children: d.jsx(r("WDSIconIcAdd.react"), {})
								}) : null
							]
						}),
						d.jsx(r("WAWebFilePicker.react"), {
							ref: j,
							mimes: y,
							multiple: !0,
							onChange: ee
						})
					]
				}),
				d.jsxs("div", {
					className: "x1amjocr x78zum5 x13a6bvl x1h678fw",
					children: [d.jsx(r("WDSButton.react"), {
						variant: "tonal",
						size: "small",
						label: s._(
							/*BTDS*/
							""
						),
						disabled: B,
						onPress: E,
						testid: "product-info-cancel-btn"
					}), d.jsx(r("WDSButton.react"), {
						variant: "filled",
						size: "small",
						label: s._(
							/*BTDS*/
							""
						),
						onPress: function() {
							return void re();
						},
						disabled: !J,
						loading: B,
						testid: "product-info-save-btn"
					})]
				})
			]
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		return e.startsWith(C) ? e.slice(C.length) : e;
	}
	l.default = v;
}), 226);
