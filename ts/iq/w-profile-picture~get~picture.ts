/** <iq type="get" xmlns="w:profile:picture">. Replies with one of: SuccessPictureURL, SuccessAvatarURLs, SuccessPictureBlob, SuccessNoData, Error. */
export function buildProfilePictureGet(target: string): BinaryNode {
  return { tag: 'iq', attrs: { xmlns: 'w:profile:picture', target: target, type: 'get', to: 's.whatsapp.net' } }
}