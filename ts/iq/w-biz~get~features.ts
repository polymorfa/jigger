/** <iq type="get" xmlns="w:biz">. Replies with one of: Success, Error. */
export function buildBizMarketingMessageGetBusinessEligibility(smaxId: number, from?: string, metaVerified?: string, marketingMessages?: string, genai?: string, genaiImage?: string, metaOne?: string, bbPro?: string): BinaryNode {
  return { tag: 'iq', attrs: { xmlns: 'w:biz', smax_id: smaxId, from: from, to: 's.whatsapp.net', type: 'get' }, content: [
      { tag: 'features', attrs: { meta_verified: metaVerified, marketing_messages: marketingMessages, genai: genai, genai_image: genaiImage, meta_one: metaOne, bb_pro: bbPro } },
    ] }
}