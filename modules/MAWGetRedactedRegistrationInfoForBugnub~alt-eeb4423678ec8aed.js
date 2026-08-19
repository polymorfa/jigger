__d("MAWGetRedactedRegistrationInfoForBugnub", ["WAGetRegistrationInfoApi"], (function(t, n, r, o, a, i, l) {
	"use strict";
	async function e() {
		var e = await o("WAGetRegistrationInfoApi").getRegistrationInfo(), t = e.catExpiryUnixTime, n = e.registrationUnixTime;
		return {
			catExpiryUnixTime: t,
			registrationUnixTime: n
		};
	}
	l.getRedactedRegistrationInfoForBugnub = e;
}), 98);
