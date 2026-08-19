__d("WAWebStickerSearchCollection", [
	"WALogger",
	"WAWebBaseCollection",
	"WAWebEmoji",
	"WAWebEmojiKeywordToUnicode",
	"WAWebSearchFirstPartyStickersAction",
	"WAWebStickerModel"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = {
		HAPPY: [
			"😂",
			"🤣",
			"😀",
			"😁",
			"😆",
			"🙂",
			"😇",
			"☺️",
			"😄",
			"😃"
		],
		LOVE: [
			"😍",
			"😘",
			"❤️",
			"💕",
			"🥰",
			"😗",
			"😙",
			"😻",
			"👩‍❤️‍👩",
			"💐",
			"💌",
			"💛",
			"💚",
			"💙",
			"💜",
			"💓",
			"💘",
			"💏",
			"💑",
			"🌹",
			"🤟",
			"🏩"
		],
		GREETINGS: [
			"👋",
			"😂",
			"🤣",
			"🙏",
			"✋",
			"🧕",
			"🚶‍♀️",
			"🚶",
			"👠",
			"🥾",
			"🙈",
			"🦛",
			"🌺",
			"⚡",
			"🎯",
			"🚄",
			"🚅",
			"💒",
			"🛕",
			"🛣️",
			"🕉️",
			"🔊"
		],
		SAD: [
			"😭",
			"😔",
			"😢",
			"😞",
			"😟",
			"😕",
			"🙁",
			"☹️",
			"😖",
			"😫",
			"😩",
			"🥺",
			"😥",
			"😓",
			"😪",
			"😿",
			"💧",
			"💔"
		],
		ANGRY: [
			"😠",
			"😡",
			"😤",
			"👺",
			"💢",
			"🗯️",
			"👿"
		],
		CELEBRATE: [
			"🥳",
			"🥂",
			"🎈",
			"🎊",
			"🎉"
		]
	}, c = (function(t) {
		function n() {
			for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
			return e = t.call.apply(t, [this].concat(r)) || this, e.$StickerSearchCollectionImpl$p_1 = new Map(), e.$StickerSearchCollectionImpl$p_2 = !1, e.$StickerSearchCollectionImpl$p_4 = !0, babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
		}
		babelHelpers.inheritsLoose(n, t);
		var r = n.prototype;
		return r.isFetchingData = function() {
			return this.$StickerSearchCollectionImpl$p_4;
		}, r.hasFetchedData = function() {
			return this.$StickerSearchCollectionImpl$p_2;
		}, r.setStartFetching = function() {
			this.$StickerSearchCollectionImpl$p_4 = !0, this.trigger("start_fetching");
		}, r.setStopFetching = function() {
			this.$StickerSearchCollectionImpl$p_4 = !1, this.trigger("stop_fetching");
		}, r.search = async function(r) {
			this.$StickerSearchCollectionImpl$p_3 !== r && this.$StickerSearchCollectionImpl$p_2 && t.prototype.delete.call(this);
			var n = r.trim().toUpperCase();
			if (this.$StickerSearchCollectionImpl$p_1.has(r)) {
				var a = this.$StickerSearchCollectionImpl$p_1.get(r);
				if (a != null) {
					this.add(a), this.$StickerSearchCollectionImpl$p_3 = r;
					return;
				}
				o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["StickerMoodCollection cache was invalid, re-searching."])));
			}
			var i = [];
			if (Object.hasOwn(u, n)) i.push.apply(i, u[n]);
			else {
				var l = o("WAWebEmoji").EmojiUtil.containsOnlyEmoji(n) ? o("WAWebEmoji").EmojiUtil.splitEmojis(n) : o("WAWebEmojiKeywordToUnicode").emojiKeywordToUnicodeSearch(n);
				if (l == null || l.length === 0) {
					this.$StickerSearchCollectionImpl$p_3 = r, this.setStopFetching(), t.prototype.delete.call(this);
					return;
				}
				i.push.apply(i, l);
			}
			this.setStartFetching();
			var c = [];
			try {
				c = await o("WAWebSearchFirstPartyStickersAction").searchFirstPartyStickers(i);
			} catch (e) {
				o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Sticker search request failed: error: ", ""])), e).sendLogs("sticker-search-request-failed"), this.setStopFetching();
				return;
			}
			this.$StickerSearchCollectionImpl$p_1.set(r, c), this.$StickerSearchCollectionImpl$p_2 = !0, this.$StickerSearchCollectionImpl$p_3 = r, this.add(c), this.setStopFetching();
		}, r.searchMood = function(t) {
			return this.search(t);
		}, r.delete = function() {
			t.prototype.delete.call(this), this.$StickerSearchCollectionImpl$p_1 = new Map(), this.$StickerSearchCollectionImpl$p_2 = !1, this.$StickerSearchCollectionImpl$p_4 = !1;
		}, n;
	})(o("WAWebBaseCollection").BaseCollection);
	c.model = o("WAWebStickerModel").StickerModel;
	var d = new c();
	l.StickerSearchCollection = d;
}), 98);
