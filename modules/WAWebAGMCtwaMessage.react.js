__d("WAWebAGMCtwaMessage.react", [
	"WAWebBizAGMCallCta.react",
	"WAWebBizAGMCatalogCta.react",
	"WAWebBizAGMFlowCta.react",
	"WAWebBizAGMWebsiteCta.react",
	"WAWebBizCtwaAGMUtils",
	"WAWebBizCtwaContext.react",
	"WAWebCtwaAGMUtils",
	"WAWebCtwaLogger",
	"WAWebMessageBubbleHiddenText.react",
	"WAWebMessageMeta.react",
	"WAWebMessageSpacerText.react",
	"WAWebMessageTextBody.react",
	"WAWebMessageTextBubble.react",
	"WAWebMsgModelPropUtils",
	"WAWebStateUtils",
	"WAWebUnsupportedMessage",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = {
		linkPreview: {
			marginTop: "x1198e8h",
			marginInlineEnd: "x1lxpwgx",
			marginBottom: "xzueoph",
			marginInlineStart: "xw01apr",
			$$css: !0
		},
		hasAuthorLinkPreview: {
			marginTop: "x1ok221b",
			$$css: !0
		},
		forwardedLinkPreview: {
			marginTop: "x1ok221b",
			$$css: !0
		},
		hasSuspiciousLinksLinkPreview: {
			marginTop: "x1ok221b",
			$$css: !0
		},
		quoteLinkPreview: {
			marginTop: "x1198e8h",
			$$css: !0
		}
	};
	function d(t) {
		var n, a = o("react-compiler-runtime").c(68), i = t.chat, l = t.displayAuthor, s = t.displayType, d = t.msg, m, p, _, f, g, h, y, C;
		if (a[0] !== l || a[1] !== d) {
			y = Symbol.for("react.early_return_sentinel");
			e: {
				if (p = o("WAWebStateUtils").unproxy(d), f = p.ctwaContext, _ = o("WAWebCtwaAGMUtils").extractAGMPayload(f), !o("WAWebBizCtwaAGMUtils").isAGMSupported(p)) {
					y = u.jsx(r("WAWebUnsupportedMessage"), {
						msg: p,
						displayAuthor: l,
						hideUpdateButton: !0
					});
					break e;
				}
				C = o("WAWebMsgModelPropUtils").isTrusted(p.unsafe()), m = r("WAWebBizCtwaContext.react"), h = p.unsafe();
			}
			a[0] = l, a[1] = d, a[2] = m, a[3] = p, a[4] = _, a[5] = f, a[6] = g, a[7] = h, a[8] = y, a[9] = C;
		} else m = a[2], p = a[3], _ = a[4], f = a[5], g = a[6], h = a[7], y = a[8], C = a[9];
		if (y !== Symbol.for("react.early_return_sentinel")) return y;
		var b;
		a[10] === Symbol.for("react.memo_cache_sentinel") ? (b = (e || (e = r("stylex")))([
			c.linkPreview,
			c.hasAuthorLinkPreview,
			c.forwardedLinkPreview,
			c.hasSuspiciousLinksLinkPreview,
			c.quoteLinkPreview
		]), a[10] = b) : b = a[10];
		var v;
		a[11] !== m || a[12] !== h || a[13] !== b ? (v = u.jsx(m, {
			msg: h,
			wrapperClass: b
		}), a[11] = m, a[12] = h, a[13] = b, a[14] = v) : v = a[14];
		var S = v, R;
		a[15] !== p || a[16] !== s || a[17] !== C ? (R = u.jsx(r("WAWebMessageTextBody.react"), {
			msg: p,
			displayType: s,
			handleLinkClick: null,
			trusted: C
		}), a[15] = p, a[16] = s, a[17] = C, a[18] = R) : R = a[18];
		var L = R, E;
		a[19] === Symbol.for("react.memo_cache_sentinel") ? (E = { className: "x78zum5 x13a6bvl" }, a[19] = E) : E = a[19];
		var k;
		a[20] === Symbol.for("react.memo_cache_sentinel") ? (k = o("WAWebMessageMeta.react").getAGMTag(), a[20] = k) : k = a[20];
		var I;
		a[21] !== p ? (I = u.jsx("div", babelHelpers.extends({}, E, {
			"data-testid": "ctwa-agm-tag",
			children: u.jsx(o("WAWebMessageMeta.react").Meta, {
				msg: p,
				agmTag: k
			})
		})), a[21] = p, a[22] = I) : I = a[22];
		var T = I, D = (n = f) == null ? void 0 : n.sourceId;
		if (_ && D != null) {
			var x = _, $ = x.ctaPayload, P = x.ctaText, N = x.ctaType, M;
			a[23] !== D || a[24] !== _ || a[25] !== d.from || a[26] !== d.id.fromMe ? (M = function() {
				o("WAWebCtwaLogger").logAGMOperation({
					operationType: o("WAWebCtwaLogger").AGM_OPERATION_TYPE.agm_cta_clicked,
					fromBusiness: d.id.fromMe,
					agmPayload: _,
					businessWid: d.from,
					adId: D
				});
			}, a[23] = D, a[24] = _, a[25] = d.from, a[26] = d.id.fromMe, a[27] = M) : M = a[27];
			var w = M;
			e: switch (N) {
				case o("WAWebCtwaAGMUtils").AGM_CTA_TYPE.URL: {
					if ($ != null && $.length) {
						var A;
						a[28] !== $ || a[29] !== P || a[30] !== w ? (A = u.jsx(r("WAWebBizAGMWebsiteCta.react"), {
							ctaText: P,
							link: $,
							onClick: w
						}), a[28] = $, a[29] = P, a[30] = w, a[31] = A) : A = a[31], g = A;
					}
					break e;
				}
				case o("WAWebCtwaAGMUtils").AGM_CTA_TYPE.CALL: {
					var F;
					a[32] !== P || a[33] !== w || a[34] !== d.id.fromMe ? (F = u.jsx(r("WAWebBizAGMCallCta.react"), {
						ctaText: P,
						disabled: d.id.fromMe,
						onClick: w
					}), a[32] = P, a[33] = w, a[34] = d.id.fromMe, a[35] = F) : F = a[35], g = F;
					break e;
				}
				case o("WAWebCtwaAGMUtils").AGM_CTA_TYPE.CATALOG: {
					var O;
					a[36] !== i || a[37] !== P || a[38] !== w || a[39] !== d.from ? (O = u.jsx(r("WAWebBizAGMCatalogCta.react"), {
						ctaText: P,
						businessWid: d.from,
						chat: i,
						onClick: w
					}), a[36] = i, a[37] = P, a[38] = w, a[39] = d.from, a[40] = O) : O = a[40], g = O;
					break e;
				}
				case o("WAWebCtwaAGMUtils").AGM_CTA_TYPE.FLOW: if ($ != null && $.length) {
					var B;
					a[41] !== i || a[42] !== $ || a[43] !== P || a[44] !== w || a[45] !== d ? (B = u.jsx(r("WAWebBizAGMFlowCta.react"), {
						ctaText: P,
						chat: i,
						onClick: w,
						ctaPayload: $,
						msg: d
					}), a[41] = i, a[42] = $, a[43] = P, a[44] = w, a[45] = d, a[46] = B) : B = a[46], g = B;
				}
			}
		}
		var W = p.isDynamicReplyButtonsMsg, q;
		a[47] === Symbol.for("react.memo_cache_sentinel") ? (q = "x1gxa6cn", a[47] = q) : q = a[47];
		var U = p.senderObj, V;
		a[48] !== p ? (V = p.unsafe(), a[48] = p, a[49] = V) : V = a[49];
		var H;
		a[50] !== p ? (H = p.unsafe(), a[50] = p, a[51] = H) : H = a[51];
		var G;
		a[52] !== p.id || a[53] !== T || a[54] !== H || a[55] !== L ? (G = u.jsxs(r("WAWebMessageSpacerText.react"), {
			msg: H,
			spacer: !1,
			"data-id": p.id,
			children: [L, T]
		}), a[52] = p.id, a[53] = T, a[54] = H, a[55] = L, a[56] = G) : G = a[56];
		var z;
		a[57] !== p.senderObj || a[58] !== g || a[59] !== S || a[60] !== V || a[61] !== G ? (z = u.jsxs(r("WAWebMessageBubbleHiddenText.react"), {
			className: q,
			contact: U,
			msg: V,
			children: [
				S,
				G,
				g
			]
		}), a[57] = p.senderObj, a[58] = g, a[59] = S, a[60] = V, a[61] = G, a[62] = z) : z = a[62];
		var j;
		return a[63] !== p || a[64] !== l || a[65] !== s || a[66] !== z ? (j = u.jsx(r("WAWebMessageTextBubble.react"), {
			msg: p,
			displayType: s,
			displayAuthor: l,
			hideMeta: !0,
			useFixedWidth: W,
			children: z
		}), a[63] = p, a[64] = l, a[65] = s, a[66] = z, a[67] = j) : j = a[67], j;
	}
	l.default = d;
}), 98);
