const WamSubscriptionUserAction = 7458 // channel: regular

type SubscriptionUserActionEvent struct {
	WsuaAction WSUAACTION `wam:"wsua_action"` // field 1
	WsuaActionTarget WSUAACTIONTARGET `wam:"wsua_action_target"` // field 2
	WsuaProductType WSUAPRODUCTTYPE `wam:"wsua_product_type"` // field 3
	WsuaQuickPromotionId string `wam:"wsua_quick_promotion_id"` // field 4
	WsuaReferral WSUAREFERRAL `wam:"wsua_referral"` // field 5
	WsuaScreen WSUASCREEN `wam:"wsua_screen"` // field 6
	WsuaScreenElement WSUASCREENELEMENT `wam:"wsua_screen_element"` // field 7
	WsuaSessionId string `wam:"wsua_session_id"` // field 8
	WsuaBenefitsShown string `wam:"wsua_benefits_shown"` // field 9
	WsuaActiveSubscriptions string `wam:"wsua_active_subscriptions"` // field 10
	WsuaBenefitGroup string `wam:"wsua_benefit_group"` // field 11
	WsuaTier WSUATIER `wam:"wsua_tier"` // field 12
}