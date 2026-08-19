__d("WAWebBizAIProductInfoEditModal.react", [
	"fbt",
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
	"getErrorSafe",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useRef, f = d.useState, g = 10, h = "image/jpeg,image/png,image/webp", y = "wabai_unstructured_data/flat/", C = { headerTitle: {
		flexGrow: "x1iyjqo2",
		$$css: !0
	} };
	function b(t) {
		var n, a, i, l, u, d, y, b, S, R = t.onClose, L = t.onSaved, E = t.product, k = E != null, I = f((n = E == null ? void 0 : E.title) != null ? n : ""), T = I[0], D = I[1], x = f((a = E == null ? void 0 : E.price) != null ? a : ""), $ = x[0], P = x[1], N = f((i = E == null ? void 0 : E.description) != null ? i : ""), M = N[0], w = N[1], A = f(!1), F = A[0], O = A[1], B = f([]), W = B[0], q = B[1], U = f((l = E == null ? void 0 : E.images) != null ? l : []), V = U[0], H = U[1], G = _(null), z = _(W);
		p(function() {
			z.current = W;
		}, [W]), p(function() {
			return function() {
				z.current.forEach(function(e) {
					return URL.revokeObjectURL(e.previewUrl);
				});
			};
		}, []), p(function() {
			o("WAWebBizAILargeScreensLogEvents").logViewProductInfoEdit();
		}, []);
		var j = V.length + W.length, K = W.length > 0 || V.length !== ((u = E == null ? void 0 : E.images) != null ? u : []).length, Q = $.trim().length > 0 || M.trim().length > 0 || j > 0, X = T.trim().length > 0 && Q && !F && (T.trim() !== ((d = E == null ? void 0 : E.title) != null ? d : "") || $.trim() !== ((y = E == null ? void 0 : E.price) != null ? y : "") || M.trim() !== ((b = E == null ? void 0 : E.description) != null ? b : "") || K), Y = _(V);
		p(function() {
			Y.current = V;
		}, [V]);
		var J = m(function(e) {
			var t = e.target.files;
			if (!(t == null || t.length === 0)) {
				var n = Array.from(t), r = [];
				q(function(e) {
					var t = Y.current.length + e.length, o = g - t;
					if (o <= 0) return e;
					for (var a = Math.min(n.length, o), i = 0; i < a; i++) r.push({
						file: n[i],
						previewUrl: URL.createObjectURL(n[i])
					});
					return [].concat(e, r);
				});
			}
		}, []), Z = m(function(e) {
			H(function(t) {
				return t.filter(function(t, n) {
					return n !== e;
				});
			});
		}, []), ee = m(function(e) {
			q(function(t) {
				var n = t[e];
				return n != null && URL.revokeObjectURL(n.previewUrl), t.filter(function(t, n) {
					return n !== e;
				});
			});
		}, []), te = m(async function() {
			if (X) {
				o("WAWebBizAILargeScreensLogEvents").logClickSaveProductInfo(), O(!0);
				try {
					var t = await Promise.all(W.map(function(e) {
						return o("WAWebBizAiKnowledgeFileUpload").uploadKnowledgeFile(e.file);
					})), n = [];
					for (var a of t) {
						if (!a.isSuccess) {
							o("WAWebBizAiSaveUtils").showErrorToast(), O(!1);
							return;
						}
						n.push(v(a.handle));
					}
					var i = {
						description: M.trim().length > 0 ? M.trim() : null,
						existingImages: V.map(function(e) {
							var t, n;
							return {
								image_id: (t = e.image_id) != null ? t : null,
								image_url: (n = e.original_url) != null ? n : null
							};
						}),
						manifoldImageFilePaths: n.length > 0 ? n : null,
						name: T.trim(),
						price: $.trim().length > 0 ? $.trim() : null
					}, l = k && (E == null ? void 0 : E.product_id) != null ? o("WAWebBizAiProductInfoMutation").updateProductInfo(E.product_id, i) : o("WAWebBizAiProductInfoMutation").createProductInfo(i), s = await l;
					if (o("WAWebBizAILargeScreensLogEvents").logApiSaveProductInfoResult(s.isSuccess), s.isSuccess) {
						o("WAWebBizAiSaveUtils").showUpdatedToast();
						var u = [].concat(V, W.map(function(e) {
							return {
								image_id: null,
								original_url: e.previewUrl,
								thumbnail_url: e.previewUrl
							};
						}));
						L(k && (E == null ? void 0 : E.product_id) != null ? {
							description: M.trim().length > 0 ? M.trim() : null,
							images: u,
							price: $.trim().length > 0 ? $.trim() : null,
							product_id: E.product_id,
							title: T.trim()
						} : null);
					} else o("WAWebBizAiSaveUtils").showErrorToast(), O(!1);
				} catch (t) {
					o("WAWebBizAILargeScreensLogEvents").logApiSaveProductInfoResult(!1), o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["product info save failed"]))).catching(r("getErrorSafe")(t)).sendLogs("biz-ai-product-info-save"), o("WAWebBizAiSaveUtils").showErrorToast(), O(!1);
				}
			}
		}, [
			X,
			M,
			V,
			k,
			W,
			T,
			L,
			$,
			E
		]);
		return c.jsxs("div", {
			className: "x1h678fw xcldk2z xv6tirj x1phvje8 x1czfd9k",
			"data-testid": "biz-ai-product-info-edit-modal",
			children: [
				c.jsxs("div", {
					className: "x6s0dn4 x1s70e7g x78zum5 x1nhvcw1 x12xbjc7",
					children: [c.jsx(r("WDSButton.react"), {
						Icon: r("WDSIconIcClose.react"),
						onPress: R,
						variant: "borderless",
						size: "small",
						"aria-label": s._(
							/*BTDS*/
							""
						).toString(),
						testid: "product-info-close-btn"
					}), c.jsx(r("WDSText.react"), {
						colorName: "contentDefault",
						type: "Body1",
						xstyle: C.headerTitle,
						children: k ? s._(
							/*BTDS*/
							""
						) : s._(
							/*BTDS*/
							""
						)
					})]
				}),
				c.jsx("div", {
					className: "xscbp6u",
					children: c.jsx(r("WDSText.react"), {
						colorName: "contentDeemphasized",
						type: "Body2",
						children: s._(
							/*BTDS*/
							""
						)
					})
				}),
				c.jsx(r("WDSTextField.react"), {
					label: s._(
						/*BTDS*/
						""
					),
					value: T,
					onValueChange: D,
					testid: "product-info-name-input"
				}),
				c.jsx("div", {
					className: "x1xrf6ya",
					children: c.jsx(r("WDSTextField.react"), {
						label: s._(
							/*BTDS*/
							""
						),
						value: $,
						onValueChange: P,
						testid: "product-info-price-input"
					})
				}),
				c.jsx("div", {
					className: "x1xrf6ya",
					children: c.jsx(r("WAWebWDSRichTextField.react"), {
						label: s._(
							/*BTDS*/
							""
						),
						placeholder: s._(
							/*BTDS*/
							""
						),
						rows: 4,
						initialText: (S = E == null ? void 0 : E.description) != null ? S : "",
						onValueChange: w,
						testid: "product-info-details-input"
					})
				}),
				c.jsxs("div", {
					className: "x1h678fw",
					children: [
						c.jsx(r("WDSText.react"), {
							colorName: "contentDefault",
							type: "Body1Emphasized",
							children: s._(
								/*BTDS*/
								""
							)
						}),
						c.jsx("div", {
							className: "xscbp6u x1tiyuxx",
							children: c.jsx(r("WDSText.react"), {
								colorName: "contentDeemphasized",
								type: "Body2",
								children: s._(
									/*BTDS*/
									""
								)
							})
						}),
						c.jsxs("div", {
							className: "x1s70e7g x78zum5 x1a02dak x1qvou4u",
							children: [
								V.map(function(e, t) {
									var n, o, a;
									return c.jsxs("div", {
										className: "xyi3aci xwf5gio x1p453bz x1suzm8a x2lah0s xwzfr38 x6ikm8r x10wlt62 x1n2onr6 x1dmp6jm",
										"data-testid": "product-info-existing-image-" + t,
										children: [c.jsx("div", {
											role: "button",
											tabIndex: 0,
											onClick: function() {
												return Z(t);
											},
											onKeyDown: function(n) {
												(n.key === "Enter" || n.key === " ") && (n.preventDefault(), Z(t));
											},
											className: "x6s0dn4 x1rk1j4g x1c9tyrk xeusxvb x1pahc9y x1ertn4p x972fbf x10w94by x1qhh985 x14e42zd x17t9dm2 x1ypdohk x78zum5 x1qx5ct2 xxx7yvo xl56j7k x10l6tqk xndqk7f xw4jnvo x1vjfegm",
											"aria-label": s._(
												/*BTDS*/
												""
											),
											"data-testid": "product-info-remove-existing-image-" + t,
											children: c.jsx(r("WDSIconIcClose.react"), {})
										}), c.jsx("img", {
											src: (o = (a = e.thumbnail_url) != null ? a : e.original_url) != null ? o : "",
											alt: "",
											className: "x1h3rtpe xyi3aci xwf5gio x1p453bz x1suzm8a xwzfr38 x19kjcj4 x1dmp6jm"
										})]
									}, "existing-" + ((n = e.image_id) != null ? n : String(t)));
								}),
								W.map(function(e, t) {
									return c.jsxs("div", {
										className: "xyi3aci xwf5gio x1p453bz x1suzm8a x2lah0s xwzfr38 x6ikm8r x10wlt62 x1n2onr6 x1dmp6jm",
										"data-testid": "product-info-local-image-" + t,
										children: [c.jsx("div", {
											role: "button",
											tabIndex: 0,
											onClick: function() {
												return ee(t);
											},
											onKeyDown: function(n) {
												(n.key === "Enter" || n.key === " ") && (n.preventDefault(), ee(t));
											},
											className: "x6s0dn4 x1rk1j4g x1c9tyrk xeusxvb x1pahc9y x1ertn4p x972fbf x10w94by x1qhh985 x14e42zd x17t9dm2 x1ypdohk x78zum5 x1qx5ct2 xxx7yvo xl56j7k x10l6tqk xndqk7f xw4jnvo x1vjfegm",
											"aria-label": s._(
												/*BTDS*/
												""
											),
											"data-testid": "product-info-remove-local-image-" + t,
											children: c.jsx(r("WDSIconIcClose.react"), {})
										}), c.jsx("img", {
											src: e.previewUrl,
											alt: "",
											className: "x1h3rtpe xyi3aci xwf5gio x1p453bz x1suzm8a xwzfr38 x19kjcj4 x1dmp6jm"
										})]
									}, "local-" + t);
								}),
								j < g ? c.jsx("div", {
									role: "button",
									tabIndex: 0,
									"aria-label": s._(
										/*BTDS*/
										""
									),
									onClick: function() {
										var e;
										return (e = G.current) == null ? void 0 : e.open();
									},
									onKeyDown: function(t) {
										if (t.key === "Enter" || t.key === " ") {
											var e;
											t.preventDefault(), (e = G.current) == null || e.open();
										}
									},
									className: "x6s0dn4 x1h3rtpe xyi3aci xwf5gio x1p453bz x1suzm8a x1ypdohk x78zum5 x2lah0s xwzfr38 xl56j7k x1dmp6jm x1ubxc9n",
									"data-testid": "product-info-add-image-btn",
									children: c.jsx(r("WDSIconIcAdd.react"), {})
								}) : null
							]
						}),
						c.jsx(r("WAWebFilePicker.react"), {
							ref: G,
							mimes: h,
							multiple: !0,
							onChange: J
						})
					]
				}),
				c.jsxs("div", {
					className: "x1amjocr x78zum5 x13a6bvl x1h678fw",
					children: [c.jsx(r("WDSButton.react"), {
						variant: "tonal",
						size: "small",
						label: s._(
							/*BTDS*/
							""
						),
						disabled: F,
						onPress: R,
						testid: "product-info-cancel-btn"
					}), c.jsx(r("WDSButton.react"), {
						variant: "filled",
						size: "small",
						label: s._(
							/*BTDS*/
							""
						),
						onPress: function() {
							return void te();
						},
						disabled: !X,
						loading: F,
						testid: "product-info-save-btn"
					})]
				})
			]
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		return e.startsWith(y) ? e.slice(y.length) : e;
	}
	l.default = b;
}), 226);
