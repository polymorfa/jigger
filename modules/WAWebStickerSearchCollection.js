__d("WAWebStickerSearchCollection", [
	"WALogger",
	"WAWebBaseCollection",
	"WAWebEmoji",
	"WAWebEmojiKeywordToUnicode",
	"WAWebSearchFirstPartyStickersAction",
	"WAWebStickerModel",
	"asyncToGeneratorRuntime"
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
		function r() {
			for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
			return e = t.call.apply(t, [this].concat(r)) || this, e.$StickerSearchCollectionImpl$p_1 = new Map(), e.$StickerSearchCollectionImpl$p_2 = !1, e.$StickerSearchCollectionImpl$p_4 = !0, babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
		}
		babelHelpers.inheritsLoose(r, t);
		var a = r.prototype;
		return a.isFetchingData = function() {
			return this.$StickerSearchCollectionImpl$p_4;
		}, a.hasFetchedData = function() {
			return this.$StickerSearchCollectionImpl$p_2;
		}, a.setStartFetching = function() {
			this.$StickerSearchCollectionImpl$p_4 = !0, this.trigger("start_fetching");
		}, a.setStopFetching = function() {
			this.$StickerSearchCollectionImpl$p_4 = !1, this.trigger("stop_fetching");
		}, a.search = (function() {
			var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n) {
				this.$StickerSearchCollectionImpl$p_3 !== n && this.$StickerSearchCollectionImpl$p_2 && t.prototype.delete.call(this);
				var r = n.trim().toUpperCase();
				if (this.$StickerSearchCollectionImpl$p_1.has(n)) {
					var a = this.$StickerSearchCollectionImpl$p_1.get(n);
					if (a != null) {
						this.add(a), this.$StickerSearchCollectionImpl$p_3 = n;
						return;
					}
					o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["StickerMoodCollection cache was invalid, re-searching."])));
				}
				var i = [];
				if (Object.hasOwn(u, r)) i.push.apply(i, u[r]);
				else {
					var l = o("WAWebEmoji").EmojiUtil.containsOnlyEmoji(r) ? o("WAWebEmoji").EmojiUtil.splitEmojis(r) : o("WAWebEmojiKeywordToUnicode").emojiKeywordToUnicodeSearch(r);
					if (l == null || l.length === 0) {
						this.$StickerSearchCollectionImpl$p_3 = n, this.setStopFetching(), t.prototype.delete.call(this);
						return;
					}
					i.push.apply(i, l);
				}
				this.setStartFetching();
				var c = [];
				try {
					c = yield o("WAWebSearchFirstPartyStickersAction").searchFirstPartyStickers(i);
				} catch (e) {
					o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Sticker search request failed: error: ", ""])), e).sendLogs("sticker-search-request-failed"), this.setStopFetching();
					return;
				}
				this.$StickerSearchCollectionImpl$p_1.set(n, c), this.$StickerSearchCollectionImpl$p_2 = !0, this.$StickerSearchCollectionImpl$p_3 = n, this.add(c), this.setStopFetching();
			});
			function a(e) {
				return r.apply(this, arguments);
			}
			return a;
		})(), a.searchMood = function(t) {
			return this.search(t);
		}, a.delete = function() {
			t.prototype.delete.call(this), this.$StickerSearchCollectionImpl$p_1 = new Map(), this.$StickerSearchCollectionImpl$p_2 = !1, this.$StickerSearchCollectionImpl$p_4 = !1;
		}, r;
	})(o("WAWebBaseCollection").BaseCollection);
	c.model = o("WAWebStickerModel").StickerModel;
	var d = new c();
	l.StickerSearchCollection = d;
}), 98);
