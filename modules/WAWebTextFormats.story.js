__d("WAWebTextFormats.story", [
	"WAWebClassnames",
	"WAWebContactCollection",
	"WAWebFormat",
	"WAWebFormatConfiguration",
	"WAWebFormatConfigurationConversation",
	"WAWebHelpersFindPhoneNumbers",
	"WAWebJsxSerializer.react",
	"WAWebLinkify",
	"WAWebShowroomUtils",
	"WAWebUnformatSerializer",
	"nullthrows",
	"react",
	"react-compiler-runtime",
	"useWAWebSelect"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = r("nullthrows")(o("WAWebContactCollection").ContactCollection.getMeContact()), c = "@" + u.id.user, d = {
		Conversation: o("WAWebFormatConfigurationConversation").Conversation,
		Unformat: o("WAWebFormatConfiguration").Unformat,
		LastMessage: o("WAWebFormatConfiguration").LastMessage,
		GroupDesc: o("WAWebFormatConfiguration").TrustedGroupDesc,
		QuotedMention: o("WAWebFormatConfiguration").QuotedMention,
		Plaintext: null
	};
	function m(e) {
		var t = e.formatter, n = e.text, a = n.split("\n"), i = n;
		if (t) {
			var l, m = t === d.Unformat ? r("WAWebUnformatSerializer") : r("WAWebJsxSerializer.react"), p = {
				phoneNumbers: r("WAWebHelpersFindPhoneNumbers")(n),
				links: o("WAWebLinkify").findLinks(n, !0),
				mentions: (l = {}, l[c] = u, l),
				selectable: !0,
				trusted: !0,
				fromMe: !0,
				bulletPointsEnabled: !0,
				parseInlineCode: !0,
				parseLists: !0,
				parseQuotes: !0
			};
			i = r("WAWebFormat")(a.join("\n"), t(p), m);
		}
		var _ = t === d.LastMessage, f = t === d.QuotedMention;
		return s.jsx("div", babelHelpers.extends({}, {
			0: { className: "x126k92a x1o2sk6j x16w0wmm x1cnzs8 x1xnnf8n xx6bls6 x106a9eq x1anpbxc x1sa5p1d xyorhqc x1hm9lzh xlr9sxt xvvg52n xwd4zgb xq8v1ta" },
			2: { className: "x1o2sk6j x16w0wmm x1cnzs8 x1xnnf8n xx6bls6 x106a9eq x1anpbxc x1sa5p1d xyorhqc x1hm9lzh xlr9sxt xvvg52n xwd4zgb xq8v1ta xeaf4i8" },
			1: { className: "x126k92a x1o2sk6j x16w0wmm x1cnzs8 x1xnnf8n xx6bls6 x106a9eq x1anpbxc x1sa5p1d xyorhqc x1hm9lzh xlr9sxt xvvg52n xwd4zgb xq8v1ta xhslqc4" },
			3: { className: "x1o2sk6j x16w0wmm x1cnzs8 x1xnnf8n xx6bls6 x106a9eq x1anpbxc x1sa5p1d xyorhqc x1hm9lzh xlr9sxt xvvg52n xwd4zgb xq8v1ta xeaf4i8 xhslqc4" }
		}[!!_ << 1 | !!f << 0], { children: i }));
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p() {
		var e = o("react-compiler-runtime").c(5), t, n;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = Object.keys(d), n = { defaultSelectedIndex: 0 }, e[0] = t, e[1] = n) : (t = e[0], n = e[1]);
		var a = o("useWAWebSelect").useSelect("Formatter", t, n), i = a[0], l = a[1], s = d[r("nullthrows")(i)], u;
		return e[2] !== s || e[3] !== l ? (u = [s, l], e[2] = s, e[3] = l, e[4] = u) : u = e[4], u;
	}
	function _() {
		var e = o("react-compiler-runtime").c(21), t = p(), n = t[0], r = t[1], a, i;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (a = ["light", "dark"], i = { defaultSelectedIndex: 0 }, e[0] = a, e[1] = i) : (a = e[0], i = e[1]);
		var l = o("useWAWebSelect").useSelect("Theme", a, i), u = l[0], d = l[1], _ = "\n*Text formats*\n\n*bold* _italic_ ~strikethrough~ ```code```\n\nNested formats: _~*nested*~_\nEmojis: ❤️💚\nLinks: https://whatsapp.com/\nMentions: " + c + "\nPhone numbers: 18001231234\n\n\n*Code Block*\n\n```\nconst enabled = true;\n*bold* _italic_ ~strikethrough~\n`inline code`\n> Quoted message\nhttps://whatsapp.com/\n" + c + "\n18001231234\n\n* item\n* item\n\n- item\n- item\n\n1. item\n2. item\n```\n", f = "\n*Bulleted List*\n\n* Item with plaintext\n* Item with emojis ❤️💚\n* Item with link https://whatsapp.com/\n* Item with mention " + c + " and phone number 18001231234\n* *Item* with nested formats _italic_ _~*nested*~_ `inline code` ```code block```\n* ```Entire item inside a code block```\n\n* Item before\n* Item ends with code block ``` text\n* Item 1 inside code block\n* Item 2 inside code block```\n* Item after\n\n* Item ends with multiline block ```code\ncode\ncode\n```\n\n\n*Hyphen List*\n\n- Item with plaintext\n- Item with emojis ❤️💚\n- Item with link https://whatsapp.com/\n- Item with mention " + c + " and phone number 18001231234\n- *Item* with nested formats _italic_ _~*nested*~_ `inline code` ```code block```\n- ```Entire item inside a code block```\n\n- Item before\n- Item ends with code block ``` text\n- Item 1 inside code block\n- Item 2 inside code block```\n- Item after\n\n- Item ends with multiline block ```code\ncode\ncode\n```\n\n*Bulleted List start with •*\n\n• Item with plaintext\n• Item with emojis ❤️💚\n• Item with link https://whatsapp.com/\n• Item with mention " + c + " and phone number 18001231234\n• *Item* with nested formats _italic_ _~*nested*~_ `inline code` ```code block```\n• ```Entire item inside a code block```\n", g = "\n*Numbered List*\n\n1. Item with plaintext\n2. Item with emojis ❤️💚\n3. Item with link https://whatsapp.com/\n4. Item with mention " + c + " and phone number 18001231234\n5. *Item* with nested formats _italic_ _~*nested*~_ `inline code` ```block code```\n6. ```Entire item inside a code block```\n15. Item starting with a non-sequential number\n\n1. Item before\n2. Item ends with code block ``` text\n3. Item 1 inside code block\n4. Item 2 inside code block```\n5. Item after\n\n1. Item ends with multiline block ```code\ncode\ncode\n```\n", h = "\n*Inline Code*\n\nWhat is `const var = '123'`?\nExplain `const name = \"world\"; const fun = () => { console.log(`Hello, ${name}!`); }`\n中文`const var='123'`中文\nWith link `https://whatsapp.com/`\nWith mention and phone number `" + c + " and 18001231234`\n", y = "\n*Block Quote*\n\n> Quoted message\n\n> Quoted message with link https://whatsapp.com/\n\n> Quoted message cc " + c + " ( phone: 18001231234 )\n\n> *bold* _italic_ ~strikethrough~ `inline code` ```block code```\n\nMultilines\n> Lorem ipsum dolor sit elit, sed do tempor ut labore et dolore magna. Lorem ipsum dolor sit elit, sed do tempor ut labore et dolore magna. Lorem ipsum dolor sit elit, sed do tempor ut labore et dolore magna. Lorem ipsum dolor sit elit, sed do tempor ut labore et dolore magna.\n\n> Loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog word\n\n> Quote ends with code block ```code\n```\n", C;
		e[2] !== u ? (C = o("WAWebClassnames").classnamesConvertMeToStylexPlease(u, "x14ug900"), e[2] = u, e[3] = C) : C = e[3];
		var b, v, S, R, L;
		e[4] !== n ? (b = s.jsx(m, {
			text: _,
			formatter: n
		}), v = s.jsx(m, {
			text: f,
			formatter: n
		}), S = s.jsx(m, {
			text: g,
			formatter: n
		}), R = s.jsx(m, {
			text: h,
			formatter: n
		}), L = s.jsx(m, {
			text: y,
			formatter: n
		}), e[4] = n, e[5] = b, e[6] = v, e[7] = S, e[8] = R, e[9] = L) : (b = e[5], v = e[6], S = e[7], R = e[8], L = e[9]);
		var E;
		e[10] !== C || e[11] !== b || e[12] !== v || e[13] !== S || e[14] !== R || e[15] !== L ? (E = s.jsxs("div", {
			className: C,
			children: [
				b,
				v,
				S,
				R,
				L
			]
		}), e[10] = C, e[11] = b, e[12] = v, e[13] = S, e[14] = R, e[15] = L, e[16] = E) : E = e[16];
		var k;
		return e[17] !== r || e[18] !== E || e[19] !== d ? (k = s.jsxs(s.Fragment, { children: [
			r,
			d,
			E
		] }), e[17] = r, e[18] = E, e[19] = d, e[20] = k) : k = e[20], k;
	}
	function f() {
		var e = o("react-compiler-runtime").c(13), t = p(), n = t[0], r = t[1], a, i;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (a = ["light", "dark"], i = { defaultSelectedIndex: 0 }, e[0] = a, e[1] = i) : (a = e[0], i = e[1]);
		var l = o("useWAWebSelect").useSelect("Theme", a, i), u = l[0], c = l[1], d;
		e[2] !== u ? (d = o("WAWebClassnames").classnamesConvertMeToStylexPlease(u, "x14ug900"), e[2] = u, e[3] = d) : d = e[3];
		var _;
		e[4] !== n ? (_ = s.jsx(m, {
			text: "\nللتنمية\n* للتنمية\n* للتنمية\n* ABCD\n* للتنمية\n\n1. للتنمية\n2. للتنمية\n3. ABCD\n4. للتنمية\n\n> للتنمية\n> ABCD\n\nOverflow\n* للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنميةللتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية\n* ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD\n\n1. للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنميةللتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية\n2. ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD\n\n>للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنميةللتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية\n>ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD\n",
			formatter: n
		}), e[4] = n, e[5] = _) : _ = e[5];
		var f;
		e[6] !== d || e[7] !== _ ? (f = s.jsx("div", {
			className: d,
			children: _
		}), e[6] = d, e[7] = _, e[8] = f) : f = e[8];
		var g;
		return e[9] !== r || e[10] !== f || e[11] !== c ? (g = s.jsxs(s.Fragment, { children: [
			r,
			c,
			f
		] }), e[9] = r, e[10] = f, e[11] = c, e[12] = g) : g = e[12], g;
	}
	var g = {
		storyName: "WAWebTextFormats",
		component: _,
		description: "",
		examples: [{
			example: _,
			title: "Text Formats",
			templateStyle: babelHelpers.extends({}, o("WAWebShowroomUtils").widePreview, { minWidth: 560 }),
			description: "\nFormatters\n\n- Conversation: for text in message bubbles.\n- Unformat: for text in notifications. Format symbols are stripped.\n- LastMessage: for last message previews in the chatlist. Text is shown in one line.\n- GroupDesc: for group descriptions.\n- QuotedMention: for quoted text in reply messages.\n- Plaintext: original text without applying any formatters.\n      "
		}, {
			example: f,
			title: "RTL",
			templateStyle: babelHelpers.extends({}, o("WAWebShowroomUtils").widePreview, { minWidth: 560 })
		}]
	};
	l.default = g;
}), 98);
