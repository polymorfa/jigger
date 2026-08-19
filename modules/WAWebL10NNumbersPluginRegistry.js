__d("WAWebL10NNumbersPluginRegistry", [], (function(t, n, r, o, a, i) {
	var e = Math.pow(10, 3), l = Math.pow(10, 6);
	function s(e) {
		var t = e.factor, n = e.locale, r = e.n, o = e.precision, a = o === void 0 ? 1 : o, i = ".", l = r / Math.pow(10, t), s = l.toString(10).split("."), u = s[0], c = s[1];
		return c == null || c.startsWith("0".repeat(a)) || Number.parseInt(u, 10) >= 100 ? parseInt(u, 10).toLocaleString(n) : parseFloat("" + u + i + c.slice(0, a)).toLocaleString(n);
	}
	function u(e, t) {
		return Intl.NumberFormat(t, { notation: "compact" }).format(e);
	}
	var c = {
		locales: [
			"fr",
			"fr-BE",
			"fr-CA",
			"fr-CH",
			"fr-FR"
		],
		format: function(t, n) {
			var e = u(t, n);
			return e.toLocaleUpperCase(n);
		}
	}, d = {
		locales: ["he", "he-IL"],
		format: function(n, r) {
			return n < e ? n.toLocaleString(r) : n < l ? s({
				factor: 3,
				locale: r,
				n
			}) + " אלף" : s({
				factor: 6,
				locale: r,
				n
			}) + " מיליון";
		}
	}, m = {
		locales: ["ro", "ro-RO"],
		format: function(n, r) {
			return n < e ? n.toLocaleString(r) : n === e ? "1 mie" : n < l ? s({
				factor: 3,
				locale: r,
				n
			}) + " mii" : s({
				factor: 6,
				locale: r,
				n
			}) + " mil.";
		}
	}, p = {
		locales: ["zh-SG", "zh-CN"],
		format: function(n, r) {
			return n < e ? n.toLocaleString(r) : n < Math.pow(10, 4) ? s({
				factor: 3,
				locale: r,
				n
			}) + "千" : u(n, r);
		}
	}, _ = {
		locales: ["ja"],
		format: function(n, r) {
			return n < e ? n.toLocaleString(r) : n < Math.pow(10, 4) ? s({
				factor: 3,
				locale: r,
				n
			}) + "千" : u(n, r);
		}
	}, f = {
		locales: [
			"de",
			"de-AT",
			"de-CH",
			"de-DE",
			"de-LI",
			"de-LU"
		],
		format: function(n, r) {
			return n > e && n < l ? s({
				factor: 3,
				locale: r,
				n
			}) + " Tsd." : u(n, r);
		}
	}, g = {
		locales: [
			"it",
			"it-CH",
			"it-IT"
		],
		format: function(n, r) {
			return n < e ? n.toLocaleString(r) : n < l ? s({
				factor: 3,
				locale: r,
				n
			}) + " mila" : s({
				factor: 6,
				locale: r,
				n
			}) + " mln";
		}
	}, h = {
		locales: [
			"pt",
			"pt-BR",
			"pt-PT"
		],
		format: function(n, r) {
			return n < e ? n.toLocaleString(r) : n < l ? u(n, r) : s({
				factor: 6,
				locale: r,
				n
			}) + " M";
		}
	}, y = {
		locales: [
			"zh-TW",
			"zh-MO",
			"zh-HK"
		],
		format: function(n, r) {
			return n < e ? n.toLocaleString(r) : n < Math.pow(10, 4) ? s({
				factor: 3,
				locale: r,
				n
			}) + "千" : u(n, "zh-TW");
		}
	}, C = [
		f,
		c,
		g,
		d,
		_,
		h,
		m,
		y,
		p
	], b = v();
	function v() {
		var e = new Map(), t = function(n) {
			n.locales.forEach(function(t) {
				return e.set(t, n);
			});
		};
		for (var n of C) t(n);
		return e;
	}
	i.M = l, i.l10nNumberFormattersRegister = b;
}), 66);
