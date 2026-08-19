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
		var e = o("useWAWebSelect").useSelect("Formatter", Object.keys(d), { defaultSelectedIndex: 0 }), t = e[0], n = e[1], a = d[r("nullthrows")(t)];
		return [a, n];
	}
	function _() {
		var e = p(), t = e[0], n = e[1], r = o("useWAWebSelect").useSelect("Theme", ["light", "dark"], { defaultSelectedIndex: 0 }), a = r[0], i = r[1], l = "\n*Text formats*\n\n*bold* _italic_ ~strikethrough~ ```code```\n\nNested formats: _~*nested*~_\nEmojis: ❤️💚\nLinks: https://whatsapp.com/\nMentions: " + c + "\nPhone numbers: 18001231234\n\n\n*Code Block*\n\n```\nconst enabled = true;\n*bold* _italic_ ~strikethrough~\n`inline code`\n> Quoted message\nhttps://whatsapp.com/\n" + c + "\n18001231234\n\n* item\n* item\n\n- item\n- item\n\n1. item\n2. item\n```\n", u = "\n*Bulleted List*\n\n* Item with plaintext\n* Item with emojis ❤️💚\n* Item with link https://whatsapp.com/\n* Item with mention " + c + " and phone number 18001231234\n* *Item* with nested formats _italic_ _~*nested*~_ `inline code` ```code block```\n* ```Entire item inside a code block```\n\n* Item before\n* Item ends with code block ``` text\n* Item 1 inside code block\n* Item 2 inside code block```\n* Item after\n\n* Item ends with multiline block ```code\ncode\ncode\n```\n\n\n*Hyphen List*\n\n- Item with plaintext\n- Item with emojis ❤️💚\n- Item with link https://whatsapp.com/\n- Item with mention " + c + " and phone number 18001231234\n- *Item* with nested formats _italic_ _~*nested*~_ `inline code` ```code block```\n- ```Entire item inside a code block```\n\n- Item before\n- Item ends with code block ``` text\n- Item 1 inside code block\n- Item 2 inside code block```\n- Item after\n\n- Item ends with multiline block ```code\ncode\ncode\n```\n\n*Bulleted List start with •*\n\n• Item with plaintext\n• Item with emojis ❤️💚\n• Item with link https://whatsapp.com/\n• Item with mention " + c + " and phone number 18001231234\n• *Item* with nested formats _italic_ _~*nested*~_ `inline code` ```code block```\n• ```Entire item inside a code block```\n", d = "\n*Numbered List*\n\n1. Item with plaintext\n2. Item with emojis ❤️💚\n3. Item with link https://whatsapp.com/\n4. Item with mention " + c + " and phone number 18001231234\n5. *Item* with nested formats _italic_ _~*nested*~_ `inline code` ```block code```\n6. ```Entire item inside a code block```\n15. Item starting with a non-sequential number\n\n1. Item before\n2. Item ends with code block ``` text\n3. Item 1 inside code block\n4. Item 2 inside code block```\n5. Item after\n\n1. Item ends with multiline block ```code\ncode\ncode\n```\n", _ = "\n*Inline Code*\n\nWhat is `const var = '123'`?\nExplain `const name = \"world\"; const fun = () => { console.log(`Hello, ${name}!`); }`\n中文`const var='123'`中文\nWith link `https://whatsapp.com/`\nWith mention and phone number `" + c + " and 18001231234`\n", f = "\n*Block Quote*\n\n> Quoted message\n\n> Quoted message with link https://whatsapp.com/\n\n> Quoted message cc " + c + " ( phone: 18001231234 )\n\n> *bold* _italic_ ~strikethrough~ `inline code` ```block code```\n\nMultilines\n> Lorem ipsum dolor sit elit, sed do tempor ut labore et dolore magna. Lorem ipsum dolor sit elit, sed do tempor ut labore et dolore magna. Lorem ipsum dolor sit elit, sed do tempor ut labore et dolore magna. Lorem ipsum dolor sit elit, sed do tempor ut labore et dolore magna.\n\n> Loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog word\n\n> Quote ends with code block ```code\n```\n";
		return s.jsxs(s.Fragment, { children: [
			n,
			i,
			s.jsxs("div", {
				className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(a, "x14ug900"),
				children: [
					s.jsx(m, {
						text: l,
						formatter: t
					}),
					s.jsx(m, {
						text: u,
						formatter: t
					}),
					s.jsx(m, {
						text: d,
						formatter: t
					}),
					s.jsx(m, {
						text: _,
						formatter: t
					}),
					s.jsx(m, {
						text: f,
						formatter: t
					})
				]
			})
		] });
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f() {
		var e = p(), t = e[0], n = e[1], r = o("useWAWebSelect").useSelect("Theme", ["light", "dark"], { defaultSelectedIndex: 0 }), a = r[0], i = r[1], l = "\nللتنمية\n* للتنمية\n* للتنمية\n* ABCD\n* للتنمية\n\n1. للتنمية\n2. للتنمية\n3. ABCD\n4. للتنمية\n\n> للتنمية\n> ABCD\n\nOverflow\n* للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنميةللتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية\n* ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD\n\n1. للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنميةللتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية\n2. ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD\n\n>للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنميةللتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية للتنمية\n>ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD\n";
		return s.jsxs(s.Fragment, { children: [
			n,
			i,
			s.jsx("div", {
				className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(a, "x14ug900"),
				children: s.jsx(m, {
					text: l,
					formatter: t
				})
			})
		] });
	}
	f.displayName = f.name + " [from " + i.id + "]";
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
