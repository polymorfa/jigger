__d("WAFlowsRichText.react", [
	"fbt",
	"invariant",
	"$InternalEnum",
	"WAFlowsBanner.react",
	"WAFlowsComponentsCommon",
	"WAFlowsEmbeddedLinkFC.react",
	"WAFlowsEnvContext.react",
	"WAFlowsImage.react",
	"WAFlowsRichTextParser",
	"WAFlowsText.react",
	"WAFlowsTypes",
	"WDNativeImageComponentConstant",
	"react",
	"stylex",
	"unsafeCast"
], (function(t, n, r, o, a, i, l, s, u) {
	"use strict";
	var e, c, d = c || (c = o("react")), m = c, p = m.Fragment, _ = m.useMemo, f = m.useState, g = {
		caption: o("WAFlowsRichTextParser").CAPTION_TEXT_RULES,
		body: o("WAFlowsRichTextParser").BASIC_TEXT_RULES,
		full: o("WAFlowsRichTextParser").RICH_TEXT_RULES
	}, h = {
		caption: "caption",
		body: "body",
		full: "body"
	};
	function y(e) {
		var t = e.isFlowInDraft, n = t === void 0 ? !1 : t, a = e.text, i = a === void 0 ? "" : a, l = e.type, u = l === void 0 ? "full" : l, c = _(function() {
			if (typeof i != "string" && !Array.isArray(i)) return d.jsx(d.Fragment, {});
			var e = new DOMParser(), t = b(i), a = o("WAFlowsRichTextParser").parseRichText(t, g[u]);
			try {
				var l = e.parseFromString("<article>" + a + "</article>", "application/xml");
				return N(l.firstChild, {
					isFlowInDraft: n,
					parent: null,
					richTextType: u
				});
			} catch (e) {
				return n ? d.jsx(r("WAFlowsBanner.react"), {
					text: "Content cannot be parsed. Please check the 'text' property of RichText and validate that you are using the correct syntax.",
					type: "error"
				}) : d.jsx(o("WAFlowsText.react").WAFlowsTextBody, { text: s._(
					/*BTDS*/
					""
				).toString() });
			}
		}, [
			n,
			i,
			u
		]);
		return d.jsx(d.Fragment, { children: c });
	}
	y.displayName = y.name + " [from " + i.id + "]";
	var C = {
		type: "object",
		required: ["text"],
		additionalProperties: !1,
		properties: babelHelpers.extends({
			text: { oneOf: [{ type: "string" }, {
				type: "array",
				items: { type: "string" }
			}] },
			type: { type: "string" },
			visible: { type: "boolean" },
			isSoftValidationMode: { type: "boolean" }
		}, o("WAFlowsComponentsCommon").WAFlowsComponentsCommonSchemaProperties)
	};
	function b(e) {
		var t = new DOMParser(), n = typeof e == "string" ? e : e.join("\n");
		try {
			var r, o = t.parseFromString("<section>" + v(n) + "</section>", "application/xml"), a = o.querySelector("parsererror");
			return a != null ? n : v((r = o.firstElementChild) == null ? void 0 : r.textContent);
		} catch (e) {
			return n;
		}
	}
	function v(e) {
		var t;
		return (t = e == null ? void 0 : e.replace(/&/g, "&amp;")) != null ? t : "";
	}
	var S = n("$InternalEnum")({
		Text: "#text",
		Article: "article",
		Paragraph: "p",
		Bold: "b",
		Italic: "i",
		Strikethrough: "s",
		Header1: "h1",
		Header2: "h2",
		UnorderedList: "ul",
		OrderedList: "ol",
		ListItem: "li",
		Image: "img",
		Table: "table",
		TableBody: "tbody",
		TableHead: "thead",
		TableHeader: "th",
		TableRow: "tr",
		TableCell: "td",
		Anchor: "a"
	}), R = {
		border: "1px solid var(--WDS-lines-outline-deemphasized)",
		borderCollapse: "collapse"
	}, L = {
		display: "block",
		marginInlineStart: "0",
		marginInlineEnd: "0",
		marginBlockStart: "0",
		marginBlockEnd: "0",
		marginTop: 0,
		marginBottom: 0
	}, E = {
		paddingTop: "0.75rem",
		paddingBottom: "0.75rem",
		paddingLeft: "0.75rem",
		paddingRight: "0.75rem"
	}, k = {
		defaultListItemMargin: {
			marginTop: "x5j7nwy",
			$$css: !0
		},
		defaultComponentPadding: {
			paddingTop: "x14vszrw",
			$$css: !0
		},
		tableWrapper: {
			width: "x1ng3b2o",
			overflowX: "x14aock7",
			$$css: !0
		},
		article: {
			whiteSpace: "xeaf4i8",
			$$css: !0
		},
		table: {
			borderTop: "xvmuz78",
			borderInlineEnd: "x1vti0wq",
			borderBottom: "xno0f5b",
			borderInlineStart: "x1cf04qi",
			borderCollapse: "x1mwwwfo",
			width: "xh8yej3",
			$$css: !0
		},
		th: {
			backgroundColor: "x1od0jb8",
			minWidth: "x1k8l6nd",
			borderTop: "xvmuz78",
			borderInlineEnd: "x1vti0wq",
			borderBottom: "xno0f5b",
			borderInlineStart: "x1cf04qi",
			borderCollapse: "x1mwwwfo",
			paddingTop: "x1q57ora",
			paddingBottom: "xsaxbkt",
			paddingLeft: "x79ra4s",
			paddingRight: "x33uob6",
			paddingInlineStart: null,
			paddingInlineEnd: null,
			$$css: !0
		},
		td: {
			backgroundColor: "x16w0wmm",
			minWidth: "x1k8l6nd",
			fontSize: "x1jchvi3",
			borderTop: "xvmuz78",
			borderInlineEnd: "x1vti0wq",
			borderBottom: "xno0f5b",
			borderInlineStart: "x1cf04qi",
			borderCollapse: "x1mwwwfo",
			paddingTop: "x1q57ora",
			paddingBottom: "xsaxbkt",
			paddingLeft: "x79ra4s",
			paddingRight: "x33uob6",
			paddingInlineStart: null,
			paddingInlineEnd: null,
			$$css: !0
		},
		ul: {
			display: "x1lliihq",
			marginInlineStart: "x1lziwak",
			marginInlineEnd: "x14z9mp",
			marginTop: "xdj266r",
			marginBottom: "xat24cr",
			listStyleType: "xtaz4m5",
			$$css: !0
		},
		ol: {
			display: "x1lliihq",
			marginInlineStart: "x1lziwak",
			marginInlineEnd: "x14z9mp",
			marginTop: "xdj266r",
			marginBottom: "xat24cr",
			listStyleType: "x3yw8vx",
			$$css: !0
		},
		li: {
			paddingLeft: "xf00w7v",
			paddingInlineStart: null,
			paddingInlineEnd: null,
			$$css: !0
		},
		tableText: {
			wordWrap: "xp5j34i",
			whiteSpace: "x126k92a",
			$$css: !0
		},
		tableHeader: {
			wordWrap: "xp5j34i",
			whiteSpace: "xuxw1ft",
			$$css: !0
		}
	}, I = {
		ol: {
			paddingInlineStart: "x51zsjh",
			$$css: !0
		},
		ul: {
			paddingInlineStart: "x51zsjh",
			$$css: !0
		}
	}, T = {
		ol: {
			paddingInlineStart: "x1is3n31",
			$$css: !0
		},
		ul: {
			paddingInlineStart: "x1is3n31",
			$$css: !0
		}
	};
	function D(t) {
		var n = t.context, a = t.node, i = t.type, l = o("WAFlowsEnvContext.react").useWAFlowsEnv(), s = l.env.platform, c = s === "android" ? T : I, m = i, _ = i === S.OrderedList ? k.ol : k.ul, f = i === S.OrderedList ? c.ol : c.ul;
		if (i !== S.ListItem || u(0, 85395), n.richTextType === "caption") return d.jsx(d.Fragment, {});
		var g = Array.from(a.childNodes).map(function(e, t) {
			return d.jsx(o("WAFlowsText.react").WAFlowsText, {
				xstyle: [k.li, t > 0 ? k.defaultListItemMargin : void 0],
				tag: "li",
				type: "body",
				children: d.jsx(d.Fragment, { children: Array.from(e.childNodes).map(function(e, t) {
					return d.jsx(p, { children: N(e, {
						richTextType: n.richTextType,
						parent: i,
						isFlowInDraft: n.isFlowInDraft
					}) }, t);
				}) })
			}, t);
		});
		return d.jsx(m, {
			className: (e || (e = r("stylex")))(_, f, k.defaultComponentPadding),
			children: g
		});
	}
	D.displayName = D.name + " [from " + i.id + "]";
	function x(e) {
		var t = e.alt, n = e.base64, r = f(!1), a = r[0], i = r[1];
		return d.jsx(o("WAFlowsImage.react").WAFlowsImage, {
			xstyle: k.defaultComponentPadding,
			onLoadingError: function() {
				return i(!0);
			},
			height: a ? o("WDNativeImageComponentConstant").IMAGE_DEFAULT_HEIGHT : null,
			altText: t,
			src: n
		});
	}
	x.displayName = x.name + " [from " + i.id + "]";
	function $(e, t, n) {
		var r, a = (n == null || (r = n.parentStyles) == null ? void 0 : r.fontWeight) === "bold" || t === S.Bold ? "bold" : void 0, i = t === S.Italic ? "i" : t === S.Strikethrough ? "s" : "span";
		return d.jsx(o("WAFlowsText.react").WAFlowsText, {
			type: h[n.richTextType],
			fontWeight: a,
			tag: i,
			children: d.jsx(d.Fragment, { children: Array.from(e.childNodes).map(function(e, t) {
				return d.jsx(p, { children: N(e, babelHelpers.extends({}, n, { parentStyles: { fontWeight: a } })) }, t);
			}) })
		});
	}
	$.displayName = $.name + " [from " + i.id + "]";
	function P(t, n, a) {
		switch (n) {
			case S.Text: return d.jsx(d.Fragment, { children: t.textContent });
			case S.Article: return d.jsx("article", {
				"data-testid": void 0,
				className: "xeaf4i8 waf-rich-text-component-content",
				children: Array.from(t.childNodes).map(function(e, t) {
					return d.jsx(p, { children: N(e, babelHelpers.extends({}, a, { parent: n })) }, t);
				})
			});
			case S.Header1: return d.jsx("div", {
				className: "x14vszrw",
				children: d.jsx(o("WAFlowsText.react").WAFlowsTextHeading, { text: t.textContent })
			});
			case S.Header2: return d.jsx("div", {
				className: "x14vszrw",
				children: d.jsx(o("WAFlowsText.react").WAFlowsTextSubheading, { text: t.textContent })
			});
			case S.Paragraph: return d.jsx("div", {
				className: "x14vszrw",
				children: d.jsx(o("WAFlowsText.react").WAFlowsText, {
					type: h[a.richTextType],
					children: d.jsx(d.Fragment, { children: Array.from(t.childNodes).map(function(e, t) {
						return d.jsx(p, { children: N(e, babelHelpers.extends({}, a, { parent: n })) }, t);
					}) })
				})
			});
			case S.UnorderedList:
			case S.OrderedList:
			case S.ListItem: return d.jsx(D, {
				node: t,
				type: n,
				context: a
			});
			case S.Anchor: {
				var i = r("unsafeCast")(t), l = i.getAttribute("href"), s = i.textContent;
				return l != null && s !== null || u(0, 85378), d.jsx(o("WAFlowsEmbeddedLinkFC.react").WAFlowsInlineTextLink, {
					type: a.parent === S.Table ? "body-2" : h[a.richTextType],
					text: s,
					href: l
				});
			}
			case S.Image: {
				var c = r("unsafeCast")(t), m = [c.getAttribute("src"), c.getAttribute("alt")], _ = m[0], f = m[1];
				_ != null && f != null || u(0, 85089);
				var g = _.split(",", 2), y = g[0], C = g[1];
				return d.jsx(x, {
					alt: f,
					base64: C
				});
			}
			case S.Table: {
				var b = n;
				return d.jsx("div", {
					className: "x14vszrw x1ng3b2o x14aock7",
					children: d.jsx(b, {
						className: "xvmuz78 x1vti0wq xno0f5b x1cf04qi x1mwwwfo xh8yej3",
						children: Array.from(t.childNodes).map(function(e, t) {
							return d.jsx(p, { children: N(e, babelHelpers.extends({}, a, { parent: n })) }, t);
						})
					})
				});
			}
			case S.TableBody:
			case S.TableHead:
			case S.TableRow: {
				var v, R = n;
				return d.jsx(R, {
					className: (e || (e = r("stylex")))((v = k[n]) != null ? v : void 0),
					children: Array.from(t.childNodes).map(function(e, t) {
						return d.jsx(p, { children: N(e, a) }, t);
					})
				});
			}
			case S.TableHeader:
			case S.TableCell: {
				var L = n, E = d.jsx(o("WAFlowsText.react").WAFlowsText, {
					xstyle: n === S.TableHeader ? k.tableHeader : k.tableText,
					type: "body-2",
					fontWeight: n === S.TableHeader ? "semibold" : "normal",
					tag: "span",
					children: d.jsx(d.Fragment, { children: Array.from(t.childNodes).map(function(e, t) {
						return d.jsx(p, { children: N(e, a) }, t);
					}) })
				});
				return d.jsx(L, {
					className: (e || (e = r("stylex")))(k[n]),
					children: E
				});
			}
			case S.Bold:
			case S.Italic:
			case S.Strikethrough: return $(t, n, a);
		}
	}
	P.displayName = P.name + " [from " + i.id + "]";
	function N(e, t) {
		if (e == null) return d.jsx(d.Fragment, {});
		var n = S.cast(e.nodeName);
		return n != null || u(0, 84574, e.nodeName), P(e, n, t);
	}
	N.displayName = N.name + " [from " + i.id + "]", l.WAFlowsRichText = y, l.TYPE = o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.RICH_TEXT, l.SCHEMA = C;
}), 226);
